/* Fetches git repo name and urls */
function getRepoUrls() {
    return new Promise((resolve, reject) => {
        let urls = [];
        try {
            fetch("https://api.github.com/users/noahemiles/repos")
                .then(response => response.json())
                .then(data => {
                    data.forEach(repo => {
                        urls.push([repo.name, repo.html_url]);
                    });
                    resolve(urls);
                });
        } catch (err) {
            reject(new Error(`Error Fetching: ${err}`));
        }
    });
}

/* Creates divs for each git project */
function createGitDivs(urls) {
    let project_content = document.getElementById('project-content');
    urls.forEach((nameUrl) => {
        let newDiv = document.createElement('div');
        let newLink = document.createElement('a');
        newDiv.id = "project-panel";
        newDiv.innerHTML = nameUrl[0];
        newDiv.style.minHeight = `${80/urls.length}vh`;
        newLink.href = nameUrl[1];
        newLink.appendChild(newDiv);
        project_content.appendChild(newLink);
    });

}

getRepoUrls()
    .then(urls => createGitDivs(urls))
    .catch(err => console.log(err.message));