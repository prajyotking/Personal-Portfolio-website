/*=============== Show Menu===========*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close'),
      menuList = document.getElementsByClassName('nav__item')

/*=============== Menu Show========== */  
   if(navToggle){
        navToggle.addEventListener('click', ()=>{
            navMenu.classList.add('show-menu');

        })        
      }

/*=============== Menu Hide========== */ 
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu');
    })
}

 /*=========Remove menu Mobile========= */
 const navLink = document.querySelectorAll('.nav__link');

 const linkAction = ()=>{
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*============Add Blur to header========= */
const blurHeader = () => {
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*============ Recive Emails ========= */
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message');

const sendEmail = (e) =>{
    e.preventDefault();

    //serviceID - templateId- #form - publickey
    emailjs.sendForm('service_jql65rt', 'template_5wmmz4l', '#contact-form', 'jSIPIic7JSMsup5u7')
    .then(()=>{
        contactMessage.textContent = 'Message sent Sucessfully 👍 ';

        //remove message after .5s
        setTimeout(()=>{
            contactMessage.textContent = '';
        }, 5000)

        //clear Input Feilds
        contactForm.reset();
    }, () =>{
        //error message
        contactMessage.textContent = 'Message Not sent (service error) ❌';

    })
}    

contactForm.addEventListener('submit', sendEmail);

/*====================== Show ScrollUp ================*/
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);

/*====================== Show ScrollUp Active-Link ================*/
const sections = document.querySelectorAll('section[id]')
const scrollActive = ()=>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop -58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }       
    })
}
window.addEventListener('scroll', scrollActive);

/*===========================Scroll Reveal=====================*/
const sr = ScrollReveal({
    orgin: 'top',
    distance: '60px',
    duration: 400,
    // reset: true
})

sr.reveal(`.home__data, .home__social`)

