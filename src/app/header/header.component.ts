import { Component, DestroyRef, ElementRef, HostListener, inject, ViewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavMenuItem } from '../models/nav-menu-item';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = 'Noah Miles';
  menuOpen = false;

  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  menuItems: Array<NavMenuItem> = [];

  @ViewChild('headerEl', { read: ElementRef }) headerEl?: ElementRef<HTMLElement>;

  constructor() {
    this.menuItems = this.getMenuItems();
    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        this.menuOpen = false;
      });
  }

  getMenuItems() {
    return [ 
      { title: 'Projects', path: '/projects' },
      { title: 'About', path: '/about' },
      { title: 'Contact', path: '/contact' }, 
    ];
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.menuOpen) return;
    const header = this.headerEl?.nativeElement;
    if (header && !header.contains(event.target as Node)) {
      this.menuOpen = false;
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.menuOpen = false;
  }
}
