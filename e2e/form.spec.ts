import { test, expect } from '@playwright/test';


test.describe('Form', () => {
    test.beforeEach(async ({page}) => {
        const resp = await page.goto('/form');
        expect(resp && resp.ok()).toBeTruthy();
        await expect(page.locator('body')).toBeVisible();
    });
    test.describe('Input Validation', () => {
        test('should add user when valid fields', async ({ page }) => {
            const nameField = page.locator('#name');
            const emailField = page.locator('#email');
            const addUserButton = page.locator('button[type="submit"]');
            
            await nameField.fill('Test User');
            await emailField.fill('test@gmail.com');
            
            await addUserButton.click();
            await expect(page.locator('.user-tile')).toBeVisible();
            await expect(page.locator('.user-tile h2')).toHaveText('Test User');
            await expect(page.locator('.user-tile .user-content input.user-name')).toHaveValue('Test User');
            await expect(page.locator('.user-tile .user-content input.user-email')).toHaveValue('test@gmail.com');
        });
        test('should modify user when valid fields', async ({ page }) => {
            const nameField = page.locator('#name');
            const emailField = page.locator('#email');
            const addUserButton = page.locator('button[type="submit"]');
            
            await nameField.fill('Test User');
            await emailField.fill('test@gmail.com');
        });
        test('should not modify user when invalid fields', async ({ page }) => {
            const nameField = page.locator('#name');
            const emailField = page.locator('#email');
            const addUserButton = page.locator('button[type="submit"]');
            
            await nameField.fill('Test User');
            await emailField.fill('test@gmail.com');
            
            await addUserButton.click();
            const userTile = page.locator('div.user-tile');
            await expect(userTile).toBeVisible();

            const editButton = page.locator('button.edit');
            const deleteButton = page.locator('button.delete');
            const saveButton = page.locator('button.save');
            const cancelButton = page.locator('button.cancel');

            await expect(deleteButton).toBeVisible();
            await editButton.click();
            await expect(editButton).toBeHidden();
            await expect(deleteButton).toBeVisible();
            await expect(saveButton).toBeVisible();
            await expect(cancelButton).toBeVisible();
            
            await saveButton.click();
            await expect(editButton).toBeVisible();
            await expect(deleteButton).toBeVisible();
            await expect(saveButton).toBeHidden();
            await expect(cancelButton).toBeHidden();
            
            await editButton.click();
            await cancelButton.click();
            await expect(editButton).toBeVisible();
            await expect(deleteButton).toBeVisible();
            await expect(saveButton).toBeHidden();
            await expect(cancelButton).toBeHidden();

            const tileName = page.locator('input.user-name');
            const tileEmail = page.locator('input.user-email');

            await editButton.click();
            await tileName.fill('');
            page.once('dialog', async dialog => {
                expect(dialog.type()).toBe('alert');
                expect(dialog.message()).toBe('Invalid');
                await dialog.accept();
            });
            await saveButton.click();
            await expect(tileName).toHaveValue('');
            await expect(saveButton).toBeVisible();
            
            await tileName.fill('Test User');
            await tileEmail.fill('');
            page.once('dialog', async dialog => {
                expect(dialog.type()).toBe('alert');
                expect(dialog.message()).toBe('Invalid');
                await dialog.accept();
            });
            await saveButton.click();
            await expect(tileEmail).toHaveValue('');
            await expect(saveButton).toBeVisible();

            await tileEmail.fill('invalid email');
            page.once('dialog', async dialog => {
                expect(dialog.type()).toBe('alert');
                expect(dialog.message()).toBe('Invalid');
                await dialog.accept();
            });
            await saveButton.click();
            await expect(tileEmail).toHaveValue('invalid email');
            await expect(saveButton).toBeVisible();

            await tileEmail.fill('valid@email.com');
            await saveButton.click();
            await expect(tileEmail).toHaveValue('valid@email.com');
            await expect(editButton).toBeVisible();

            await expect(deleteButton).toBeVisible();
            page.once('dialog', async dialog => {
                expect(dialog.type()).toBe('confirm');
                expect(dialog.message()).toBe('Delete "Test User"?');
                await dialog.dismiss();
            });
            await deleteButton.click();
            await expect(userTile).toBeVisible();

            page.once('dialog', async dialog => {
                expect(dialog.type()).toBe('confirm');
                expect(dialog.message()).toBe('Delete "Test User"?');
                await dialog.accept();
            });
            await deleteButton.click();
            await expect(userTile).toBeHidden();
        });
    });
});
