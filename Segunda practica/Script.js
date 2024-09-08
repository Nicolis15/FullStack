//alert("Se cargo el js")
const textinput = document.querySelector("input");
const btngenerar = document.querySelector(".btn_generar");
const imagen = document.querySelector("img")


btngenerar.addEventListener("click", event =>{
    event.preventDefault();
    if(imagen.style.display === 'none'){
        imagen.style.display = 'block';
    }
    else{
        imagen.style.display = 'none'
    }
    const texto = textinput.value;
    console.log(texto)
    /*if(!texto){
        alert("No se ingreso ningun texto para generar el codigo QR");
    }*/
});

