import Client from './module/Client.js'

// arrivée
let prenom = document.getElementById('idPrenom');
let nom = document.getElementById('idNom');
let nbNuits = document.getElementById('idNbNuits');
let typeChambre = document.getElementById('idChambre');
let choixPetitDej = document.getElementsByName('petitDej');

let submitAccueil = document.getElementById('submitAccueil');

// départ
let prenomDepart = document.getElementById('idPrenomRecherche');
let nomDepart = document.getElementById('idNomRecherche');
let submitDepart = document.getElementById('submitDepart');


// le paiement
//let paiement = document.getElementById('paiement');
let idPaiement = document.getElementById('idPaiement');

let tabClients = [];


// fonction 1
function factureClient(objetClient) {

    let petitDejeuner = 15;
    let prixChambre = 0;
    let facture = 0;

    switch (objetClient.typeChambre) {
        case '1': prixChambre = 150;
            break;
        case '2': prixChambre = 200;
            break;
        case '3': prixChambre = 250;
            break;
        case '4': prixChambre = 300;
            break;
        default:
            console.log('erreur de saisie du type de chambre');
    }

    if (objetClient.petitDej == 'oui') {
        facture = (objetClient.nbNuits * prixChambre) + petitDejeuner;
    } else {
        facture = (objetClient.nbNuits * prixChambre)
    }

    return facture;
};

// fonction 2
function affichageFacture(objetClient, factureClient) {
    return `Récapitulatif : ${objetClient.nbNuits} nuit(s), type de chambre ${objetClient.typeChambre}, petit déjeuner ${objetClient.petitDej}, montant de la facture ${factureClient} €`;
}




submitAccueil.addEventListener('click', e => {

    // empêche l'envoi du formulaire sur une page php par exemple et permet de rester du coup sur la même page
    e.preventDefault();

    let valeur;

    for (const choix of choixPetitDej) {
        if (choix.checked) {

            valeur = choix.value;
            console.log(valeur);
        }
    }

    // Arrivée du client
    // création de l'objet de type client
    let arriveeClient = new Client(prenom.value, nom.value, nbNuits.value, typeChambre.value, valeur);
    console.log(arriveeClient);

    tabClients.push(arriveeClient);
    console.table(arriveeClient);

    // remise à zéro des paramètres d'arrivée
    prenom.value = '';
    nom.value = '';
    nbNuits.value = 1;
    typeChambre.value = '1';

    /* for (const choix of choixPetitDej) {
            
            if(choix.value == 'oui') {
                let checked = choix.value = 'non';
                checked.checked;
            }   

        } */
});

submitDepart.addEventListener('click', e => {

    // empêche l'envoi du formulaire sur une page php par exemple et permet de rester du coup sur la même page
    e.preventDefault();

    console.log(`submitDepart ${prenomDepart.value} ${nomDepart.value}`);

    tabClients.forEach(client => {

        if ((client.prenom == prenomDepart.value) && (client.nom == nomDepart.value)) {

            // appel de la fonction factureClient
            let facture = factureClient(client)
            console.log(facture);

            // appel de la méthode affichageFacture
            let affichage = affichageFacture(client, facture);

            // affichage de l'information dans le corps du site
            idPaiement.classList.add('paiement');
            idPaiement.textContent = affichage;

            return true; // permet de sortir rapidement de la boucle si le client est trouvé
        }

    });

});

// localStorage TODO
/* let stringTabClients = JSON.stringify(tabClients);
localStorage.setItem('tabClients', 'stringTabClients'); */


