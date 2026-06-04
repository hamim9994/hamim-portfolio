const featuredProjects = [
    "hamim-portfolio",
    "a_3D_cruved_spacetime",
    "Asen-Bia-Khai-catering"
];

const username = "hamim9994";

async function fetchProjects() {

    const container = document.getElementById("project-container");

    if (!container) {
        console.error("project-container not found!");
        return;
    }

    container.innerHTML = "<p>Loading Projects...</p>";

    try {

        const response = await fetch(
            `https://api.github.com/users/${username}/repos?per_page=100`
        );

        if (!response.ok) {
            throw new Error("Failed to fetch repositories");
        }

        const repos = await response.json();

        container.innerHTML = "";

        const selectedRepos = repos.filter(repo =>
            featuredProjects.includes(repo.name)
        );

        if (selectedRepos.length === 0) {
            container.innerHTML = "<p>No featured projects found.</p>";
            return;
        }

        selectedRepos.forEach(repo => {

            const card = document.createElement("div");
            card.classList.add("project-card");

            const projectName = repo.name
                .replace(/[-_]/g, " ");

            card.innerHTML = `
                <h2>${projectName}</h2>

                <p>
                    ${repo.description || "Project description coming soon."}
                </p>

                <div class="tags">
                    <span>${repo.language || "Multiple Technologies"}</span>
                </div>

                <div class="buttons">

                    <a href="${repo.html_url}" target="_blank">
                        GitHub
                    </a>

                    ${
                        repo.homepage
                        ? `<a href="${repo.homepage}" target="_blank">
                               Live Demo
                           </a>`
                        : ""
                    }

                </div>
            `;

            container.appendChild(card);
        });

    } catch (error) {

        console.error(error);

        container.innerHTML =
            "<p>Failed to load projects.</p>";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    fetchProjects();
});

function b2_click() {
    document.getElementById("project-gardge")
        ?.scrollIntoView({ behavior: "smooth" });
}

function b1_click() {
    document.getElementById("contact-terminal")
        ?.scrollIntoView({ behavior: "smooth" });
}

const githubUsername = "hamim9994";

document.addEventListener("DOMContentLoaded", () => {

    const graph = document.getElementById("github-graph");

    graph.src =
        `https://ghchart.rshah.org/00ffff/${githubUsername}`;

});