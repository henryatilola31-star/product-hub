//ADD TO CART

let cDisplay = 0;
function prod1(){
    cDisplay++;
    document.getElementById('cartDisp').innerHTML=cDisplay
}
function prod2(){
    cDisplay++;
    document.getElementById('cartDisp').innerHTML = cDisplay
}
function prod3(){
    cDisplay++;
    document.getElementById('cartDisp').innerHTML =cDisplay
}
function prod4(){
    cDisplay++;
    document.getElementById('cartDisp').innerHTML = cDisplay
}
//menu icon
function openMen(){
    document.getElementById('pass').style.display = 'none';
    document.getElementById('puff').style.display = 'block';
    document.getElementById('menulink').style.display = 'block';
}
function closemenu(){
    document.getElementById('pass').style.display = 'block';
    document.getElementById('puff').style.diplsy = 'none';
    document.getElementById('menulink').style.display = 'none';
}