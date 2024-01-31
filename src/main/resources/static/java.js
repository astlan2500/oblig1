let billeter = [];

function kjopBilett(){

    let antall=document.getElementById('antall').value;
    let navn = document.getElementById('navn').value;
    let etternavn=document.getElementById('etternavn').value;
    let email= document.getElementById('email').value;
    let tlfnr=document.getElementById('tlfnr').value;

    if(navn && isValidEmail (email)&& isValidTlfnr(tlfnr)){
        let billett ={antall,navn,etternavn,email,tlfnr};
        billeter.push(billett);
        visBiletter();

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
    visBiletter();
}

//vise biletter
//let ut = "<table><tr>" +
//          "<th>Navn</th><th>Adresse</th><th>Telefonnr</th>" +
//          "</tr>";
function visBiletter(){
    const bilettListe=document.getElementById('bilettListe');
    bilettListe.innerHTML=" ";

    const billetter=[
        {antall: "" ,navn: "",email: "",tlfnr:" " }
    ]

    billeter.forEach((bilett, index) => {
        let listeobjekt = document.createElement('li');
        listeobjekt.textContent = `Billett ${index + 1}: ${bilett.navn} - ${bilett.email} - ${bilett.tlfnr}`;
        bilettListe.appendChild(listeobjekt);
    });

}


//validere email
//function visBiletter() {
//     const bilettListe = document.getElementById('bilettListe');
//     bilettListe.innerHTML = '';
//
//     // Antar at du har et array med billeter
//     const billeter = [
//         { navn: 'Person A', email: 'personA@email.com', tlfnr: '123456789' },
//         { navn: 'Person B', email: 'personB@email.com', tlfnr: '987654321' },
//         // Legg til flere billeter etter behov
//     ];
//
//     billeter.forEach((bilett, index) => {
//         let listeobjekt = document.createElement('li');
//         listeobjekt.textContent = `Billett ${index + 1}: ${bilett.navn} - ${bilett.email} - ${bilett.tlfnr}`;
//         bilettListe.appendChild(listeobjekt);
//     });
// }
function isValidEmail(email){
    const emailReg= /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;
    return emailReg.test(email);
}

//validere tlfnr
function isValidTlfnr(tlfnr){
    const tlfnrReg=/^((0047)?|(\+47)?|(47)?)\d{8}$/;
    return tlfnrReg.test(tlfnr);
}
