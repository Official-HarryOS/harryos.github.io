document.addEventListener("DOMContentLoaded", () =>{
    const container = document.getElementById('container')
    const darkbutton = document.getElementById('darkToggle')
    const darkToggleButton = document.gelElementById('darkToggleButton')
    
    function darkModeToggle(){
        document.body.classList.toggle('dark-mode')
        container.classList.toggle('dark-mode')

        if (document.body.classList.contains('dark-mode')) {
            darkToggleButton.textContent = "Toggle Light Mode";
        } else {
            darkToggleButton.textContent = "Toggle Dark Mode";
        }
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
    if(prefersDark.matches){
        darkModeToggle()
    }

    darkToggleButton.onlick = function(){
        darkModeToggle()
    }

});
