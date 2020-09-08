export default class Client {
    constructor(prenom, nom, nbNuits, typeChambre, petitDej) {
        this.prenom = prenom;
        this.nom = nom;
        this.nbNuits = nbNuits;
        this.typeChambre = typeChambre;
        this.petitDej = petitDej;
    }

    factureClient(objetClient) {

        let petitDejeuner  = 15;
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
    }

    affichageFacture(objetClient, factureClient) {
        return `le montant de la facture du client :
        Nom ${objetClient.nom} Prenom ${objetClient.prenom}
        Nombre de nuits ${objetClient.nbNuits}
        type de chambre ${objetClient.typeChambre}
        Petit déjeuner ${objetClient.petitDej}
        Montant de la facture ${factureClient}`
    }

}