const home = document.getElementById('homeCnt')
const about = document.getElementById('aboutCnt')
const prj = document.getElementById('projectsCnt')
const contact = document.getElementById('contactCnt')

const pageList = [home, about, prj, contact]


window.onload = test(pageList)


function test(...args) {
    
    const homeBt = document.getElementById('home')
    const aboutBt = document.getElementById('about')
    const projectsBt = document.getElementById('projects')
    const contactBt = document.getElementById('contact')

    const buttonList = [homeBt, aboutBt, projectsBt, contactBt]

    let element = {
        old : document.getElementById('homeCnt') ,
        new : undefined
    }
    let id

    function openTab(e) {
        id = `${this.textContent.toLowerCase()}Cnt` //Analoga me to koumpi pou patietai kai to keimeno pou exei, kataskevasei to ID pou tha dialextei argotera
        if(id.indexOf('home') == 0 && element.new == undefined) {
            console.log('sks')
        } else {

            for(let i = 0; i < buttonList.length; i++) {
                buttonList[i].removeEventListener('click',openTab)
            }

            for(let i = 0; i < pageList.length; i++) {
                pageList[i].style.width = 0;
                pageList[i].animationName = 'none'
            }
    
            element.new = document.getElementById(id)
            element.old.style.animationName = 'slideOut'
            element.new.style.animationName = 'slideIn'

            setTimeout(function(){
                element.old = element.new

                for(let i = 0; i < buttonList.length; i++) {
                    buttonList[i].addEventListener('click',openTab)
                }
            },1000)
        }

    }

    homeBt.addEventListener('click',openTab)
    aboutBt.addEventListener('click',openTab)
    projectsBt.addEventListener('click',openTab)
    contactBt.addEventListener('click',openTab)

    document.documentElement.style.setProperty('--color-2','blue')

    function test() {
        console.log('sks')
    }

}


export default pageList