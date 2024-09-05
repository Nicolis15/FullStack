alert("Se cargo el js")
const textinput = document.querySelector("input");
const btngenerar = document.querySelector(".btn_generar");

btngenerar.addEventListener("click", event =>{
    event.preventDefault();
    const texto = textinput.value;
    console.log(texto)
    if(!texto){
        alert("No se ingreso ningun texto para generar el codigo QR");
    }
});