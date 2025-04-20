const username = "samsucksatcoding";
const listElement = document.getElementById("repo-list");

async function fetchRepos() {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    if (!response.ok) {
      throw new Error("GitHub API error");
    }

    const repos = await response.json();

    repos.forEach(repo => {
      const li = document.createElement("li");

      const link = document.createElement("a");
      link.href = repo.html_url;
      link.textContent = repo.name;
      link.target = "_blank";

      const descText = document.createTextNode(`: ${repo.description || "No description provided."}`);

      li.appendChild(link);
      li.appendChild(descText);
      listElement.appendChild(li);
    });

  } catch (error) {
    listElement.innerHTML = `<li>Error loading repositories: ${error.message}</li>`;
  }
}

fetchRepos();