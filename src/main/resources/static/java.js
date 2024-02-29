let billeter = [];

function kjopBilett() {

    let antall = parseInt(document.getElementById('antall').value);
    let navn = document.getElementById('navn').value;
    let etternavn = document.getElementById('etternavn').value;
    let email = document.getElementById('email').value;
    let tlfnr = document.getElementById('tlfnr').value;

    if (navn && isValidEmail(email) && isValidTlfnr(tlfnr)) {
        for (let i = 0; i < antall; i++) {
            let bilett = { navn, etternavn, email, tlfnr};
            billeter.push(bilett);
        }
            document.getElementById('antall').value = '';
            document.getElementById('navn').value = '';
            document.getElementById('etternavn').value = '';
            document.getElementById('email').value = '';
            document.getElementById('tlfnr').value = '';

            visBiletter();

        }

    else
        {
            alert('Fyll ut alle feltene korekt.');
        }
    }

//Slette alle biletter
    function SlettBilett() {
        billeter = [];
        visBiletter();
    }

//vise biletter

    function visBiletter() {
        let bilettListe = document.getElementById('bilettListe');
        bilettListe.innerHTML = ' ';

        if (billeter.length === 0) {
            let melding = document.createElement('li');
            melding.textContent = 'ingen biletter tilgjengelig';
            bilettListe.appendChild(melding);
        } else {
            billeter.forEach((bilett, index) => {
                let listeobjekt = document.createElement('li');
                listeobjekt.textContent = `Billett ${index + 1}: ${bilett.navn} - ${bilett.etternavn} - ${bilett.email} - ${bilett.tlfnr}`;
                bilettListe.appendChild(listeobjekt);
            });
        }


    }


    function isValidEmail(email) {
        const emailReg = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;
        return emailReg.test(email);
    }

//validere tlfnr
    function isValidTlfnr(tlfnr) {
        const tlfnrReg = /^((0047)?|(\+47)?|(47)?)\d{8}$/;
        return tlfnrReg.test(tlfnr);
    }

