const projetos = document.querySelector('.projetos')
const github = 'NicoBarbosa'


function getGitHubRepoInfos() {
  const url = `https://api.github.com/users/${github}/repos`


  fetch(url)
  .then(async res => {

    if(!res.ok) {
      throw new Error(res.status)
    }

    var data = await res.json()

    data.map((item, index) => {
      let section = document.createElement('section')

      section.setAttribute('class', 'projetos-cards')
      
      section.innerHTML = `
      <a href="${item.html_url}" target="_blank">
        <div class="cards-title">
          <img src="assets/folder.svg" alt="Folder icon">
          <span>${item.name}</span>
        </div>
        <p>${item.description}</p>
        <div class="cards-informacoes">
          <div>
            <img src="assets/star.svg" alt="">${item.stargazers_count}
            <img src="assets/git-branch.svg" alt="">${item.forks_count}
          </div>
          <div>
            <img src="assets/ellipse.svg" alt="elipse amarelo">
            <span>${item.language}</span>
          </div>
        </div>
      </a>
      `
      //limita o número de requests do json
      // if(index < 2) {
        projetos.appendChild(section)
      // }
      

    })

  }).catch(e => console.log(e))
}

getGitHubRepoInfos()

