/*
/!* JSda HTML teglari bl iwlash*!/
let headTag = document.head;
let bodyTag = document.body;
let havola = document.documentURI;
let formalar = document.forms;
let rasimlar = document.images;
let havolalar = document.links;

console.log(havolalar);
*/
/*Events in JS; onclick onchange*/

function meniBos(){
    alert("Siz tugmani bosdingiz!");
}
function meniIkkimartaBos(){
    alert("Siz tugmani ikki marta bodingiz");

}
function tanlash(event){
    alert("Siz " + event.target.value + " mashinani tanladingiz");

}
function inputgaBosish(){
    console.log("Inpuga  bosildi!");

}
function inputdanChiqish(){
    console.log("InpuutdanChiqildi!");

}
function yozish(event){
    console.log(event.target.value);

}
document.querySelector('.text').addEventListener('paste',function (event){
    console.log("Qoshilmoqda  " + event.target.value + " nomli  fayl kochirilmoqda");
});
/*Copy*/
function harakatlanish(e){
    console.log(e.clientY,e.clientX);

}
function kirish(){
   alert("Hududga kirildi!");

}
function chiqish(){
    alert("Hudud tark etilddi");

}