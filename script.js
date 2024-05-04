
//function for the nav
const header = document.getElementById('welcome')
const skills = document.getElementById('skills')
const presentation = document.getElementById('presentation')
const projects = document.getElementById('projects')
const footer = document.getElementById('footer')
const nav = document.querySelectorAll('#navLi')


function scrollNav(){
    const rectHeader = header.getBoundingClientRect();
    const rectSkills = skills.getBoundingClientRect();
    const rectPresentation = presentation.getBoundingClientRect();
    const rectProjects = projects.getBoundingClientRect();
    const rectFooter = footer.getBoundingClientRect();
    
    if(rectHeader.top > -200){
        nav[0].style.scale = '1.3' 
        nav[1].style.scale = '1' 
    } else if(rectSkills.top < 200 && rectSkills.top > -200){
        nav[1].style.scale = '1.3'
        nav[0].style.scale = '1' 
        nav[2].style.scale = '1' 
    } else if(rectPresentation.top < 200 && rectPresentation.top > -200){
        nav[2].style.scale = '1.3'
        nav[1].style.scale = '1' 
        nav[3].style.scale = '1' 
    } else if(rectProjects.top < 200 && rectProjects.top > -200){
        nav[3].style.scale = '1.3'
        nav[2].style.scale = '1' 
        nav[4].style.scale = '1' 
    } else if(rectFooter.top < 200 && rectFooter.top > -200){
        nav[4].style.scale = '1.3'
        nav[3].style.scale = '1' 
    }
}

window.addEventListener('scroll', scrollNav)

//section 'about me', efect like a corrousel

const arrDivsPresents = document.querySelectorAll('#divPresent')

const ANIMATIONDIVSPRESENT1 = [
    {
        transform: 'translate(0%,0%)',
        scale: '1',
        opacity: '1',
    },
    {
        transform: 'translate(0%,0%)',
        scale: '1',
        opacity: '1',
    },
    {
        transform: 'translate(0%,250%)',
        scale: '.7',
        opacity: '.5',
    },
    {
        transform: 'translate(0%,250%)',
        scale: '.7',
        opacity: '.5',
    },
    {
        transform: 'translate(0%,0%)',
        scale: '.5',
        opacity: '0',
    },
    {
        transform: 'translate(0%,0%)',
        scale: '.5',
        opacity: '0',
    },
    {
        transform: 'translate(0%,-250%)',
        scale: '.2',
        opacity: '0',
    },
    {
        transform: 'translate(0%,-250%)',
        scale: '.2',
        opacity: '0',
    },
    {
        transform: 'translate(0%,0%)',
        scale: '1',
        opacity: '1',
    },
]
const ANIMATIONDIVSPRESENT2 = [
    {
        transform: 'translate(0%,250%)',
        scale: '.7',
        opacity: '.5',
    },
    {
        transform: 'translate(0%,250%)',
        scale: '.7',
        opacity: '.5',
    },
    {
        transform: 'translate(0%,0%)',
        scale: '.5',
        opacity: '0',
    },
    {
        transform: 'translate(0%,0%)',
        scale: '.5',
        opacity: '0',
    },
    {
        transform: 'translate(0%,-250%)',
        scale: '.2',
        opacity: '0',
    },
    {
        transform: 'translate(0%,-250%)',
        scale: '.2',
        opacity: '0',
    },
    {
        transform: 'translate(0%,0%)',
        scale: '1',
        opacity: '1',
    },
    {
        transform: 'translate(0%,0%)',
        scale: '1',
        opacity: '1',
    },
    {
        transform: 'translate(0%,250%)',
        scale: '.7',
        opacity: '.5',
    },
]
const ANIMATIONDIVSPRESENT3 = [
    {
        transform: 'translate(0%,0%)',
        scale: '.5',
        opacity: '0',
    },
    {
        transform: 'translate(0%,0%)',
        scale: '.5',
        opacity: '0',
    },
    {
        transform: 'translate(0%,-250%)',
        scale: '.2',
        opacity: '0',
    },
    {
        transform: 'translate(0%,-250%)',
        scale: '.2',
        opacity: '0',
    },
    {
        transform: 'translate(0%,0%)',
        scale: '1',
        opacity: '1',
    },
    {
        transform: 'translate(0%,0%)',
        scale: '1',
        opacity: '1',
    },
    {
        transform: 'translate(0%,250%)',
        scale: '.7',
        opacity: '.5',
    },
    {
        transform: 'translate(0%,250%)',
        scale: '.7',
        opacity: '.5',
    },
    {
        transform: 'translate(0%,0%)',
        scale: '.5',
        opacity: '0',
    },
]
const ANIMATIONDIVSPRESENT4 = [
    {
        transform: 'translate(0%,-250%)',
        scale: '.2',
        opacity: '0',
    },
    {
        transform: 'translate(0%,-250%)',
        scale: '.2',
        opacity: '0',
    },
    {
        transform: 'translate(0%,0%)',
        scale: '1',
        opacity: '1',
    },
    {
        transform: 'translate(0%,0%)',
        scale: '1',
        opacity: '1',
    },
    {
        transform: 'translate(0%,250%)',
        scale: '.7',
        opacity: '.5',
    },
    {
        transform: 'translate(0%,250%)',
        scale: '.7',
        opacity: '.5',
    },
    {
        transform: 'translate(0%,0%)',
        scale: '.5',
        opacity: '0',
    },
    {
        transform: 'translate(0%,0%)',
        scale: '.5',
        opacity: '0',
    },
    {
        transform: 'translate(0%,-250%)',
        scale: '.2',
        opacity: '0',
    },
]

const ANIMATIONPRESENTTIMING = {
    fill: 'both',
    duration: 32000,
    iterations: Infinity,
    easing: 'linear',
    delay: 0
}
const arrANIMATION = [ANIMATIONDIVSPRESENT1,ANIMATIONDIVSPRESENT2,ANIMATIONDIVSPRESENT3,ANIMATIONDIVSPRESENT4]

window.addEventListener('load', ()=>{

    let i = 0
    arrDivsPresents.forEach((pres,i) => {
        pres.animate(arrANIMATION[i], ANIMATIONPRESENTTIMING)
        i++
    });    

})

//efects in the presentation to my projects
const divProjectsScroll = document.getElementById('divScroll')
const projectsJs = document.getElementById('div-js')
const projectsCSharp = document.getElementById('div-cSharp')
const projectsCss = document.getElementById('div-css')
const PROJECTS = document.getElementById('projects')
const btnExit = document.querySelectorAll('#btnExit')
const videos = document.querySelectorAll('.videoJs')
const textDivCss = '<p>this are some of my first project, made just with Html and Css in my  early days as developer</p>'
const textDivJs = '<p>First, a fully functional calculator. Next, a ToDo list app that I actually use to organize my life. After that, some small projects.</p>'
const textDivCsharp = `<p>In this case show two projects done with C#. <br> I gained experience and knowledge in this language through courses that I took in 2021 and 2022. <br> The first project is a functional and handy calculator, while the second is a desktop app <br> for corporates to manage their employees’ data.</p>`



//function for view the section of projects
//effect scroll with the mouse
let mouseY = 0;
let intervalId = null;

function scrollByMouse(event) {
    mouseY = event.clientY;
}

divProjectsScroll.addEventListener("mousemove", scrollByMouse);

let scroll = 5;
divProjectsScroll.addEventListener("mouseover", () => {
    intervalId = setInterval(() => {
        if (mouseY > 200) {
            divProjectsScroll.scrollBy(0, scroll);
        } else if (mouseY < 450) {
            divProjectsScroll.scrollBy(0, -scroll);
        }
        
        if (mouseY < 200 && mouseY > 400){
            clearInterval(intervalId)
        }
    }, 50); 
});

// function for stop the scroll
divProjectsScroll.addEventListener("mouseout", stopScroll);
divProjectsScroll.addEventListener("mousemove", (event) => {
    if (event.clientY > 200 && event.clientY < 450) {
        stopScroll();
    }
});

function stopScroll() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
}
    

    
//Funtion for reproduce the videos

videos.forEach(video =>{
    video.addEventListener('mouseover', ()=>{
        video.play()
    })
})

            
