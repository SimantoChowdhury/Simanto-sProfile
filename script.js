let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
let sections=document.querySelector('section');
let navLinks=document.querySelector('header nav a');


window.onscroll=() =>{
    sections.foreach(sec =>{
        let top=window.scrollY;
        let height=sec.offsetHeight;
        let offset=sec.offsetTop-150;
        let id = sec.getAttribute;
        if(top>=offset && top<offset+height)
        {
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a [href*='+ id +']').classList.add('active')
            })
        }
    })
}