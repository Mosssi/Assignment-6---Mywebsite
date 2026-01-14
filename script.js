
// github API
const username = "Mosssi";
const container = document.getElementById("github_container");
const languageColors = {
  "javaScript":"#f1e05a",
  "TypeScript":"#2b7489",
  "HTML":"#e34c26",
  "CSS":"#563d7c",
  "Vue":"#41b883",
  "React":"#61dafb",
  "Unknown": "#8b949e",
}

function getRepos(){
  fetch(`https://api.github.com/users/Mosssi/repos`)
  .then(response => {
    if(!response.ok){
      throw new Error
    }
    return response.json()
  })
  .then(data => {
    const displayData = data.slice(0,6)
    //循环生成
    displayData.forEach(repo => {
      const card = document.createElement("div");
      card.className = "card"
      card.innerHTML = `<h3>${repo.name}</h3><p>${repo.description || ''}</p>`
      container.appendChild(card)
    })
  })
  .catch(error => {
    console.error("error feching repos:", error)
  })
}

getRepos();