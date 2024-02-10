//Esta función muestra o deja de mostrar el menú de opciones de la cuenta, cambiándole la clase
function openAccountPages() {
    let div = document.getElementById("opcionesCuenta");
    if(div.className == ""){
        div.className = "oculto";
    }else{
        div.className = "";
    }

    return false;
}

//Esta función comprueba el modo en el que está, y dependiendo del modo en el que se encuentre cambia el archivo al de modo oscuro o modo claro
let isDarkMode = false;
function changePaletteTheme() {
    if(!isDarkMode){
        document.getElementById("cssCabecera").href = "./style/CabeceraYPieModoOscuro.css";
        document.getElementById("cssMain").href = "./style/indexModoOscuro.css";
        document.getElementById("imgLogo").src = "./img/LogoDarkMode2.png";
        isDarkMode = true;
    }else{
        document.getElementById("cssCabecera").href = "./style/CabeceraYPie.css"
        document.getElementById("cssMain").href = "./style/index.css"
        document.getElementById("imgLogo").src = "./img/SkyPhonesLogo.png"
        isDarkMode = false;
    }

    return false;
}