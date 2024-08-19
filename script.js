document.addEventListener("DOMContentLoaded", () =>{
    const container = document.getElementById('container')
    const darkbutton = document.getElementById('darkToggle')

    function darkModeToggle(){
        document.body.classList.toggle('dark-mode')
        container.classList.toggle('dark-mode')
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
    if(prefersDark.matches){
        darkModeToggle()
    }

});
