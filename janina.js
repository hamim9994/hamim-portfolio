const username = "hamim9994";

async function fetchProjects() {

    const response = await fetch(
        `https://api.github.com/users/${username}/repos`
    );

    const repos = await response.json();

    const container = document.getElementById("project-container");

    repos.forEach(repo => {

        // skip forked repos
        if(repo.fork) return;

        const card = document.createElement("div");
        card.classList.add("project-card");

        card.innerHTML = `
            <h2>${repo.name}</h2>

            <p>
                ${repo.description || "No description available"}
            </p>

            <div class="tags">
                <span>${repo.language || "Code"}</span>
            </div>

            <div class="buttons">
                <a href="${repo.html_url}" target="_blank">
                    GitHub
                </a>

                <a href="${repo.homepage || '#'}" target="_blank">
                    Live Demo
                </a>
            </div>
        `;

        container.appendChild(card);
    });
}

fetchProjects();