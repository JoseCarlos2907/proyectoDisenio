function openAccountPages() {
    let div = document.getElementById("opcionesCuenta");
    if(div.className == ""){
        div.className = "oculto";
    }else{
        div.className = "";
    }

    return false;
}

let isDarkMode = false;
function changePaletteTheme() {
    if(!isDarkMode){
        document.getElementById("cssCabecera").href = "./style/CabeceraYPieModoOscuro.css";
    }else{
        document.getElementById("cssCabecera").href = "./style/CabeceraYPie.css"
    }

    if(!isDarkMode){
        document.getElementById("cssMain").href = "./style/indexModoOscuro.css";
    }else{
        document.getElementById("cssMain").href = "./style/index.css"
    }

    if(!isDarkMode){
        document.getElementById("imgLogo").src = "./img/LogoDarkMode2.png";
        isDarkMode = true;
    }else{
        document.getElementById("imgLogo").src = "./img/SkyPhonesLogo.png"
        isDarkMode = false;
    }

    return false;
}