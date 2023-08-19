function aler(){
    alert("Message Sent!")
}

const navEl = document.querySelector('.navbar')
const navDrop = document.querySelector('.dropdown-menu')
const navForm = document.querySelector('.navform')
window.addEventListener('scroll', () =>{
    if (window.scrollY >= 80){
        navEl.classList.add('navbar-scrolled')
        navDrop.classList.add('dropdown-scrolled')
        navForm.classList.add('navform-scrolled')
    }else if (window.scrollY <80){
        navEl.classList.remove('navbar-scrolled')
        navDrop.classList.remove('dropdown-scrolled')
        navForm.classList.remove('navform-scrolled')
    }
})