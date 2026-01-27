if (document.querySelector('.typed')){
  new Type('.typed',{
    strings:
    document.querySelector('.typed').getAttribute('data-typed-items'.split(',')),
    typeSpeed:100,
    backSpeed:50,
    backDelay:2000,
    loop:true
  })
}


// github API
const username = "Mosssi";
const container = document.getElementById("github_container");
const languageColors = {
  "JavaScript":"#f1e05a",
  "TypeScript":"#2b7489",
  "HTML":"#e34c26",
  "CSS":"#563d7c",
  "Vue":"#41b883",
  "React":"#61dafb",
  "Unknown": "#8b949e",
}

if(container){
  function getRepos(){
  fetch(`https://api.github.com/users/Mosssi/repos`)
  .then(response => {
    if(!response.ok){
      throw new Error("Network response was not ok")
    }
    return response.json()
  })
  .then(data => {
    date.sort((a,b)=>new Data(b.updated_at)-new
  Date(a.updated_at))
    const displayData = data.slice(0,6)
    //循环生成
    displayData.forEach(repo => {
      //声明变量
      const card = document.createElement("div");
      card.classList.add("card");
      const lang = repo.language || "Unknown";

      const demoLink =repo.homepage
      ?`<a href = ${repo.homepage}"target="_blank"
      style="margin-right:15px;
      color:var(--text-color);
      font-size:14px;
      text-decoration:uderline;">
      Demo</a>`
      :'';

      card.innerHTML = `
      <div>
      <div style="display:flex; justify-content:space-between; align-items:center;">
      <h3>${repo.name}</h3>
      <div>
      ${demoLink}<a href="${repo.html,url}" target="_blank"
      style="color:#888"
      aria-label="GitHub Code">
      <i class="fa-solid fa-code"></i>
      </a>
      </div>
      </div>
       <p>${repo.description ? repo.description.substring(0,60)+'...':"NO description"}</p>

       <div class="card_title">
       <div><span style="width:8px; height:8px; margin-right:4px;border-radius:50%;
       display:inline-block; background:${languageColors[lang]||'#888'}"></span>${lang}
       </div>


      <div>${repo.stargazers_count >0 ?`<i class="fa-regular fa-star"></i> ${repo.stargazers_count}`:''}</div>
      </div>`;

       container.appendChild(card)     
    })
  })
  .catch(error => {
    console.error("error feching repos:", error)
  })
}
getRepos();
}