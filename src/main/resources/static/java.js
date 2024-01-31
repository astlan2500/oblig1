let billeter = [];

function kjøpBilett(){

    const antall=document.getElementById('antall').value;
    const navn = document.getElementById('navn').value;
    const etternavn=document.getElementById('etternan').value;
    const email= document.getElementById('email').value;
    const tlfnr=document.getElementById('tlfnr').value;

    if(navn && isValidEmail (email)&& idValidtlfnr(tlfnr)){
        const billeter ={antall,navn,etternavn,email,tlfnr};
        billeter.push(bilett);
        displayBilett();

        document.getElementById('antall').value='';
        document.getElementById('navn').value='';
        document.getElementById('etternavn').value='';
        document.getElementById('email').value='';
        document.getElementById('telefonnr').value='';
    }else{
        alert('Fyll ut alle feltene korekt.');
    }
}
//Slette alle biletter
function SlettBilett(){
    billeter=[];
    displayBilett();
}

//vise biletter
function visBiletter(){
    const bilettListe=document.getElementById('bilettListe');
    bilettListe.innerHTML='';
    billeter.forEach((bilett,index)=>{
        const listeobjekt=document.createElement('li');
        listeobjekt.textContent='Billett ${index+1}: ${billet.navn} - ${bilett.email}-${bilett.tlfnr}';
        bilettListe.appendChild(listeobjekt);


    });
}
//validere email
function isValidEmail(email){
    const emailReg= / /;
    return emailReg.test(email);
}

//validere tlfnr
function isValidTlfnr(tlfnr){
    const tlfnrReg=/ /;
    return tlfnrReg.test(tlfnr);
}