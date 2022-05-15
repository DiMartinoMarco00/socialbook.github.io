var settingsMenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");

function settingsMenuToggle()
{
   settingsMenu.classList.toggle("settings-menu-height");
}

darkBtn.onclick = function()
{
    darkBtn.classList.toggle("dark-btn-on");

    /*cambia il colore del tema di sfondo quando si clicca su dark-btn*/
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme") == "light")
    {
        localStorage.setItem("theme" , "dark");
    }
    else
    {
        localStorage.setItem("theme" , "light");
    }
}

/*
Da istruzione al browser in modo che se la pagina viene chiusa con il tema scuro si riapra con il tema scuro
e la stessa cosa venga fatta con il tema chiaro
*/ 

if(localStorage.getItem("theme") == "light")
{
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme") == "dark")
{
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
else 
{
    localStorage.setItem("theme" , "light");
}

