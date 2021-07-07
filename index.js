const filterBar = document.querySelector('.filter-bar')
const cardsWrap = document.querySelector('.card-wrap')

const portfolios = [
  { category: 'project', class: 'p-one', h1: '「為湛而戰」', h2: '海洋垃圾移除計畫', tag: '#群募行銷規劃', ref: 'https://www.crowdfunding.azure-ocean.tw/'},
  { category: 'project', class: 'p-two', h1: '', h2: '社企流 iLab 育成計畫', tag: '#商業規劃 #專案管理 #創業輔導', ref: 'https://ilab.seinsights.asia/' },
  { category: 'project', class: 'p-three', h1: '保德信人壽 X 社企流', h2: '做你人生的財務長', tag: '#專案管理 #商業開發', ref: 'https://pot-financialwellness.seinsights.asia/' },
  { category: 'project', class: 'p-four', h1: '永齡教育基金會 X 社企流', h2: '明日農村', tag: '#專案管理 #商業開發', ref: 'http://www.rethinkingrural.seinsights.asia/' },
  { category: 'publication', class: 'p-five', h1: '', h2: '開路：社會企業的十堂課', tag: '#書籍共同作者', ref: 'https://www.books.com.tw/products/0010757662' },
  { category: 'front-end', class: 'p-six', h1: '自主專案', h2: 'To-dos-List 小程式', tag: '#HTML #CSS #Javascript', ref: 'https://github.com/autoimpact/to-dos-list' },
  { category: 'front-end', class: 'p-seven', h1: '自主專案', h2: '各地區氣象預報小工具', tag: '#Ajax #API #Javscript', ref: 'https://github.com/autoimpact/weather_forecast' },
  { category: 'front-end', class: 'p-eight', h1: '自主專案', h2: '個人 Resume 網站', tag: '#HTML #CSS #UIUX', ref: 'https://github.com/autoimpact/landingpage_resume' },
  { category: 'front-end', class: 'p-nine', h1: '自主專案', h2: '社群頁面', tag: '#Ajax #API #Javscript', ref: 'https://github.com/autoimpact/social_media_page' }
]

filterBar.addEventListener('click', function (event) {
  const target = event.target
  let rawHTML = ''

  if (target.classList.contains('filter-all')) {
    console.log(target)
    for (let i =0; i < portfolios.length; i++) {

      rawHTML +=
      `<div class="card-portfolio ${portfolios[i].class} ${portfolios[i].category}">
          <div class="mask">
            <h5>${portfolios[i].h1}</h5>
            <h5>${portfolios[i].h2}</h5>
            <p>${portfolios[i].tag}</p>
            <a href="${portfolios[i].ref}" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-link-45deg"
                viewBox="0 0 16 16">
                <path
                  d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                <path
                  d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
              </svg>
            </a>
          </div>
        </div>`
    }

  } else if (target.classList.contains('filter-project')) {
    let filterProject = []
    filterProject = portfolios.filter((item) => item.category === 'project')

    for (let i = 0; i < filterProject.length; i++) {
      rawHTML +=
        `<div class="card-portfolio ${filterProject[i].class} ${filterProject[i].category}">
          <div class="mask">
            <h5>${filterProject[i].h1}</h5>
            <h5>${filterProject[i].h2}</h5>
            <p>${filterProject[i].tag}</p>
            <a href="${filterProject[i].ref}" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-link-45deg"
                viewBox="0 0 16 16">
                <path
                  d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                <path
                  d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
              </svg>
            </a>
          </div>
        </div>`
    } 
  } else if (target.classList.contains('filter-front-end')) {
    let filterFrontend = []
    filterFrontend = portfolios.filter((item) => item.category === 'front-end')

    for (let i = 0; i < filterFrontend.length; i++) {
      rawHTML +=
        `<div class="card-portfolio ${filterFrontend[i].class} ${filterFrontend[i].category}">
          <div class="mask">
            <h5>${filterFrontend[i].h1}</h5>
            <h5>${filterFrontend[i].h2}</h5>
            <p>${filterFrontend[i].tag}</p>
            <a href="${filterFrontend[i].ref}" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-link-45deg"
                viewBox="0 0 16 16">
                <path
                  d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                <path
                  d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
              </svg>
            </a>
          </div>
        </div>`
    }
  
  } else if (target.classList.contains('filter-publication')) {
    console.log(target)
    let filterPublication = []
    filterPublication = portfolios.filter((item) => item.category === 'publication')

    for (let i = 0; i < filterPublication.length; i++) {
    rawHTML +=
      `<div class="card-portfolio ${filterPublication[i].class} ${filterPublication[i].category}">
          <div class="mask">
            <h5>${filterPublication[i].h1}</h5>
            <h5>${filterPublication[i].h2}</h5>
            <p>${filterPublication[i].tag}</p>
            <a href="${filterPublication[i].ref}" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-link-45deg"
                viewBox="0 0 16 16">
                <path
                  d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                <path
                  d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
              </svg>
            </a>
          </div>
        </div>`
    }
  } else {
    return
  }
    cardsWrap.innerHTML = rawHTML
})

  