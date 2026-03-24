//Variable global
let nombre = 'sebas';


function saludar(){
    //Variable local
    let saludo = 'Buenos Dias';
    console.log(saludo +"  "+nombre); //funciona pra global y local
}

saludar();

