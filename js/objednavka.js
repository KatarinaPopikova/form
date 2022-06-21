function kontrolaPriezviska(){
    let priezvisko = document.getElementById("priezvisko");
    if(!priezvisko.value){
        priezvisko.classList.add("is-invalid");
    }
    else{
        priezvisko.classList.remove("is-invalid");
    }
}

function kontrolaTel(){
    let tel = document.getElementById("tel");
    if(tel.value.length !== 10 ){
        tel.classList.add("is-invalid");
    }
    else{
        tel.classList.remove("is-invalid");
    }
}

function kontrolaEmail() {
    let forma = /^([\w-\.]{3,})+@([\w-]+\.)+[\w-]{2,4}$/;
    let email = document.getElementById("email");
    if (!forma.test(email.value)) {
        email.classList.add("is-invalid");
    } else {
        email.classList.remove("is-invalid");
    }
}
function kontrolaVeku(){
    let vek = document.getElementById("vek");
    let datumNarodenia = document.getElementById("datumNarodenia");
    if(!vek.value || Number(vek.value) !== Number(ziskatVek() )){
        vek.classList.add("is-invalid");
        datumNarodenia.classList.add("is-invalid")
    }
    else{
        vek.classList.remove("is-invalid");
        datumNarodenia.classList.remove("is-invalid")
    }
}

function ziskatVek() {
    let datum = document.getElementById("datumNarodenia").value;
    let dnes = new Date();
    let datumNarodenia = new Date(datum);
    let vek = dnes.getFullYear() - datumNarodenia.getFullYear();
    let m = dnes.getMonth() - datumNarodenia.getMonth();
    if (m < 0 || (m === 0 && dnes.getDate() < datumNarodenia.getDate())) {
        vek--;
    }
    return vek;
}


function vyberTovaru(){
    let vyberTovaru = document.getElementById("vyberTovaru");

    if(vyberTovaru.value === "buda"){
        document.getElementById("vyberBudy").style.display  = "block";
        document.getElementById("rozmerBudy").disabled = false;
        document.getElementById("cenaBudy").style.display  = "block";
        document.getElementById("doplnSumuBudy").disabled = false;

        document.getElementById("cenaVoliery").style.display  = "none";
        document.getElementById("rozmerVoliery").disabled = true;
        document.getElementById("vyberVoliery").style.display  = "none";
        document.getElementById("doplnSumuVoliery").disabled = true;
        rozmerBudy();
    }
    else{

        document.getElementById("vyberBudy").style.display  = "none";
        document.getElementById("rozmerBudy").disabled = true;
        document.getElementById("cenaBudy").style.display  = "none";
        document.getElementById("doplnSumuBudy").disabled = true;

        document.getElementById("cenaVoliery").style.display  = "block";
        document.getElementById("rozmerVoliery").disabled = false;
        document.getElementById("vyberVoliery").style.display  = "block";
        document.getElementById("doplnSumuVoliery").disabled = false;

        rozmerVoliery();
    }
}
function rozmerBudy(){
    let rozmer = document.getElementById("rozmerBudy");
    if(rozmer.value === "B1")
        doplnSumuBudy(120);
    else if(rozmer.value === "B2")
        doplnSumuBudy(140);
    else if(rozmer.value === "B3")
        doplnSumuBudy(180);
    else if(rozmer.value === "B4")
        doplnSumuBudy(210);
}

function rozmerVoliery(){
    let rozmer = document.getElementById("rozmerVoliery");
    if(rozmer.value === "V1")
        doplnSumuVoliery(450);
    else if(rozmer.value === "V2")
        doplnSumuVoliery(500);
    else if(rozmer.value === "V3")
        doplnSumuVoliery(550);
}

function doplnSumuBudy(x){
    let suma = document.querySelectorAll("#doplnSumuBudy option ");
    suma[0].textContent = x + "€: Búda ";
    suma[1].textContent = (x-10) + "€: Búda bez prepážky ";
    suma[2].textContent = (x+10) + "€: Búda+šindel ";
}

function doplnSumuVoliery(x){
    let suma = document.querySelectorAll("#doplnSumuVoliery option ");
    suma[0].textContent = (x-30) + "€: 0 drevených stien";
    suma[1].textContent = (x) + "€: 1 drevená stena";
    suma[2].textContent = (x+30) + "€: 2 drevené steny ";
}
function vyzdvihnutie(){
    let osobne = document.getElementById("osobne");
    let odvoz = document.getElementById("odvoz");
    let ine = document.getElementById("ine");

    osobne.onchange = function (){
        document.getElementById("adresa").style.display = 'none';
        document.getElementById("textovePole").style.display = 'none';
    }
    odvoz.onchange = function (){
        document.getElementById("adresa").style.display = 'block';
        document.getElementById("textovePole").style.display = 'none';
    }
    ine.onchange = function (){
        document.getElementById("adresa").style.display = 'none';
        document.getElementById("textovePole").style.display = 'block';
    }
}

function kontrolaPSC(){
    let psc = document.getElementById("PSC");
    if(psc.value.length !== 5 && psc.value.length > 0 ){
        psc.classList.add("is-invalid");
    }
    else{
        psc.classList.remove("is-invalid");
    }
}

function zobrazText(){
    let ine = document.getElementById("inePlemeno");
    if(ine.checked === true){
        document.getElementById("inePlemenoText").style.display = 'block';
    }
    else
        document.getElementById("inePlemenoText").style.display = 'none';


}

function kontrolavalidity(){
    kontrolaPriezviska();
    kontrolaTel();
    kontrolaEmail();
    kontrolaPSC();
    kontrolaVeku();
    let pole = document.getElementsByClassName("is-invalid");
    return pole.length === 0;
}



