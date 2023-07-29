const color=["green","red","rgba(133,122,0)","#f1f1f1"];
const btn= document.querySelector(".btn");
const colores= document.querySelector(".color");
btn.addEventListener("click", ()=>{
    //numeroRandom va a dar numeros entre  0 - 3 
    const randomNumber= numeroRandom();
document.body.style.backgroundColor = color[randomNumber];
colores.textContent= color[randomNumber];
}) ;
function numeroRandom (){
    return Math.floor(Math.random()*color.length);
}