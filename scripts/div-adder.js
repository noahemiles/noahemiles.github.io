

const getProjectUrls = new Promise((resolve, reject) => {
    let urls = [];
    try {
        const response = fetch("https://api.github.com/users/noahemiles/repos")
            .then(response => response.json())
            .then(data => {
                data.forEach(repo => {
                    urls.push([repo.name, repo.html_url]);
                });
            });
        resolve(urls);
    } catch (err) {
        reject(new Error(`Error Fetching: ${err}`));
    }

});

function test() {
    getProjectUrls.then(data => {
        console.log(data);
    });
}

function divClick() {

    let project_content = document.getElementById('project-content');

    //for repos in git    
    getProjectUrls.then(data => {
        data.forEach(nameUrl => {
            let newDiv = document.createElement('div');
            let newLink = document.createElement('a');
            newDiv.id = "project-panel";
            newDiv.innerHTML = nameUrl[0];
            newLink.href = nameUrl[1];
            newLink.appendChild(newDiv);
            project_content.appendChild(newLink);
        });
    }).catch(err => {
        console.log(`Error Adding Div: ${err}`);
    });
}

