//ghost to folow mouse
/*const tracker = document.querySelector('.icon-mouse')
const trackerSize = tracker.offsetWidth
let trackerX = 0
let trackerY = 0
let mouseX = 0
let mouseY = 0
const speed = 0.05
let isVisible = false

document.addEventListener('mousemove', e => {
    if(!isVisible){
        isVisible = true
        tracker.style.opacity = 1
        updatePosition()
    }
    mouseX = e.clientX
    mouseY = e.clientY
})

const updatePosition = () => {
    const distanceX = mouseX - (trackerX + trackerSize / 2)
    const distanceY = mouseY - (trackerY + trackerSize / 2)

    trackerX += distanceX + speed
    trackerY += distanceY + speed

    tracker.style.transform = `translate(${trackerX}px, ${trackerY}px)`

    requestAnimationFrame(updatePosition)
}*/



//section 'about me', efect like a corrousel
const divHobbies = document.querySelector('.divHobbies')
const arrDivsPresents = document.querySelectorAll('#divPresent')

window.addEventListener('load', ()=>{

    arrDivsPresents.forEach(pres => {
        pres.animate(ANIMATIONDIVSPRESENT, ANIMATIONPRESENTTIMING)
        ANIMATIONPRESENTTIMING.delay += 7000
    });
    arrDivsPresents[0]    

})



const ANIMATIONDIVSPRESENT = [
    {
        transform: 'translate(-50%,-80%)',
        scale: '1',
        opacity: '1',
    },
    {
        transform: 'translate(50%,-50%)',
        scale: '.6',
        opacity: '.4',
    },
    {
        transform: 'translate(50%,-50%)',
        scale: '.6',
        opacity: '.4',
    },
    {
        transform: 'translate(50%,-50%)',
        scale: '.6',
        opacity: '.4',
    },
    {
        transform: 'translate(50%,-50%)',
        scale: '.6',
        opacity: '.4',
    },
    {
        transform: 'translate(-115%, 80%)',
        scale: '.3',
        opacity: '0',
    },
    {
        transform: 'translate(-115%, 80%)',
        scale: '.3',
        opacity: '0',
    },
    {
        transform: 'translate(-115%, 80%)',
        scale: '.3',
        opacity: '0',
    },
    {
        transform: 'translate(-115%, 80%)',
        scale: '.3',
        opacity: '0',
    },
    {
        transform: 'translate(-216%,-50%)',
        scale: '.6',
        opacity: '.4',
    },
    {
        transform: 'translate(-216%,-50%)',
        scale: '.6',
        opacity: '.4',
    },
    {
        transform: 'translate(-216%,-50%)',
        scale: '.6',
        opacity: '.4',
    },
    {
        transform: 'translate(-216%,-50%)',
        scale: '.6',
        opacity: '.4',
    },
    {
        transform: 'translate(-50%,-80%)',
        scale: '1',
        opacity: '1',
    },
    {
        transform: 'translate(-50%,-80%)',
        scale: '1',
        opacity: '1',
    },
    {
        transform: 'translate(-50%,-80%)',
        scale: '1',
        opacity: '1',
    },
    {
        transform: 'translate(-50%,-80%)',
        scale: '1',
        opacity: '1',
    }
]
const ANIMATIONPRESENTTIMING = {
    fill: 'both',
    duration: 28000,
    iterations: Infinity,
    easing: 'linear',
    delay: 0
}

//efects in the presentation to my projects
const projectsJs = document.getElementById('div-js')
const projectsCSharp = document.getElementById('div-cSharp')
const projectsCss = document.getElementById('div-css')
const PROJECTS = document.getElementById('projects')
const btnExit = document.querySelectorAll('#btnExit')
const videos = document.querySelectorAll('.videoJs')
const textDivCss = '<p>this are some of my first project, made just with Html and Css in my  early days as developer</p>'
const textDivJs = '<p>First, a fully functional calculator. Next, a ToDo list app that I actually use to organize my life. After that, some small projects.</p>'
const textDivCsharp = `<p>In this case show two projects done with C#. <br> I gained experience and knowledge in this language through courses that I took in 2021 and 2022. <br> The first project is a functional and handy calculator, while the second is a desktop app <br> for corporates to manage their employees’ data.</p>`

document.addEventListener('click', newWindow)

//function for view the section of projects
function newWindow(e){
    let target = e.target
    let bool = false
    
    let arrDiv = [projectsJs, projectsCSharp, projectsCss]

    arrDiv.forEach(proj =>{

        let indexProj = arrDiv.indexOf(proj)
        if(target === proj){

            proj.className = 'classJavascript'
            btnExit[indexProj].style.visibility = 'visible'
            bool = true

            
                //Funtion for reproduce the videos

                videos.forEach(video =>{
                    video.addEventListener('mouseover', ()=>{
                        video.play()
                    })
                })

            if( bool=true){
                PROMISENEWWINDOW.then((result)=>{
                proj.animate(ANIMATIONTOIN, ANIMATIONOUTINTIMMING)
                
                if(proj === projectsCSharp){
                    proj.insertAdjacentHTML('afterbegin', textDivCsharp)
                    projectsCss.animate(ANIMATIONTOOUT,ANIMATIONOUTINTIMMING)
                    projectsJs.animate(ANIMATIONTOOUT,ANIMATIONOUTINTIMMING)
                } else if(proj === projectsCss){
                    proj.insertAdjacentHTML('afterbegin', textDivCss)
                    projectsCSharp.animate(ANIMATIONTOOUT,ANIMATIONOUTINTIMMING)
                    projectsJs.animate(ANIMATIONTOOUT,ANIMATIONOUTINTIMMING)
                } else if(proj === projectsJs){
                    proj.insertAdjacentHTML('afterbegin', textDivJs)
                    projectsCSharp.animate(ANIMATIONTOOUT,ANIMATIONOUTINTIMMING)
                    projectsCss.animate(ANIMATIONTOOUT,ANIMATIONOUTINTIMMING)
                } 
                }).catch((error)=>{
                    console.log(error)
                }).finally(()=>{
                    console.log('here I show my knowdelge')
                })
            }

            //   


            btnExit[indexProj].addEventListener('click', ()=>{
                proj.className = 'divProjects'
                btnExit[indexProj].style.visibility = 'hidden'

                //delete the textDiv add in the new Window
                if(proj.firstChild.nodeName === 'P'){
                    proj.removeChild(proj.firstChild)
                }
                

                proj.animate(ANIMATIONBACK, ANIMATIONOUTINTIMMING)
                
                if(proj === projectsCSharp){
                    proj.classList.add('divC')
                    projectsCss.animate(ANIMATIONBACK2, ANIMATIONOUTINTIMMING)
                    projectsJs.animate(ANIMATIONBACK2, ANIMATIONOUTINTIMMING)
                } else if(proj === projectsCss){
                    proj.classList.add('divHtmlCss')
                    projectsJs.animate(ANIMATIONBACK2, ANIMATIONOUTINTIMMING)
                    projectsCSharp.animate(ANIMATIONBACK2, ANIMATIONOUTINTIMMING)
                } else if(proj === projectsJs){
                    proj.classList.add('divJS')
                    projectsCSharp.animate(ANIMATIONBACK2, ANIMATIONOUTINTIMMING)
                    projectsCss.animate(ANIMATIONBACK2, ANIMATIONOUTINTIMMING)
                } 
            })
        } 

    })

}
let PROMISENEWWINDOW =  new Promise((resolve, reject) => {
    let condition = true

    if(condition){
        resolve()
    } else {
        reject(new Error('chau'))
    }
})


//ANIMATION FOR THE IN AND OUT OF PROJECTS
const ANIMATIONTOIN = [
    { 
        position: 'relative',
        left:'100px',
        opacity: '1'
    },  
    {
        position: 'relative',
        left:'300px',
        opacity: '.5'
    },  
    {
        position: 'relative',
        left:'600px',
        opacity: '0'
    },  
    {
        position: 'relative',
        left:'900px',
        opacity: '0'
    },
    {
        opacity: '0'
    },
    {
        opacity: '0',
        gridColumn: '2/-1'
    },
    {
        opacity: '.5',
        gridColumn: '2/-1'
    },
    {
        opacity: '1',
        gridColumn: '2/-1'

    }
]
const ANIMATIONTOOUT = [
    { 
        position: 'relative',
        left:'0px',
        opacity: '1'
    },  
    {
        position: 'relative',
        left:'300px',
        opacity: '.5'
    },  
    {
        position: 'relative',
        left:'600px',
        opacity: '0'
    },  
    {
        position: 'relative',
        left:'900px',
        opacity: '0'
    },
    {
        opacity: '0'
    }
]
const ANIMATIONBACK = [
    {
        opacity: '.5',
        gridColumn: '2/-1',
        height: '50%'

    },
    {
        opacity: '0',
        gridColumn: '2/-1'
    },
    {
        opacity: '0',
        gridColumn: '2/-1'
    },  
    {
        position: 'relative',
        left:'900px',
        opacity: '0'
    },  
    {
        position: 'relative',
        left:'600px',
        opacity: '0'
    },  
    {
        position: 'relative',
        left:'300px',
        opacity: '.5'
    },
    { 
        position: 'relative',
        left:'0px',
        opacity: '1'
    }
]
const ANIMATIONBACK2 = [  
    {
        position: 'relative',
        left:'900px',
        opacity: '0'
    },  
    {
        position: 'relative',
        left:'600px',
        opacity: '0'
    },  
    {
        position: 'relative',
        left:'300px',
        opacity: '.5'
    },
    { 
        position: 'relative',
        left:'0px',
        opacity: '1'
    }
]

//TIMMING TO THE ANIMATION IN AND OUT
const ANIMATIONOUTINTIMMING = {
    fill: 'forwards',
    iteration: 1,
    duration: 1500,
    easing: 'linear'
}