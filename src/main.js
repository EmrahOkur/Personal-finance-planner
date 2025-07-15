"use strict";

const haushaltsbuch ={
    
    gesamtbilanz: new Map(),


    eintraege:[],

    eintrag_erfassen (){
        let neuer_eintrag= new Map();
        neuer_eintrag.set("titel", prompt("Titel:"));
        neuer_eintrag.set("typ",prompt("Title:"));
        neuer_eintrag.set("betrag",prompt("Betrag(in Cent):"));
        neuer_eintrag.set("datum",prompt("Datum (jjjj-mm-tt):"));
        this.eintraege.push(neuer_eintrag);
    },

    eintraege_sortieren(){
        this.eintrag.sort(function(eintrag_a, eintrag_b){
            if (eintrag_a.get("datum") > eintrag_b.get("datum")){
                return -1;
            } else if(eintrag_a.get("datum") < eintrag_b.get("datum")){
                return 1
            } else {
                return 0
            }

        });
    },

   eintrage_ausgeben (){
    console.clear();
    this.eintraege.forEach(function(eintrag) {
          console.log(`Titel: ${eintrag.get("titel")}\n`
            + `Typ: ${eintrag.get("typ")}\n`
            + `Betrag: ${eintrag.get("betrag")} cent\n`
            + `Datum: ${eintrag.get("datum")}`
        );
    });
      
    },

    gesamtbilanz_erstellen() {
        let neue_gesamtbilanz = new Map() 
        neue_gesamtbilanz.set("einahmen", 0);
        neue_gesamtbilanz.set("ausgaben", 0);
        neue_gesamtbilanz.set("betrag", 0);
        this.eintraege.forEach(function(eintrag){
             switch(eintrag.get("typ")){
            case "Einnahme":
                neue_gesamtbilanz.set("einnahmen", neue_gesamtbilanz.get("einahmen") + eintrag.get("betrag"));
                neue_gesamtbilanz.set("bilanz", neue_gesamtbilanz.get("bilanz") + eintrag.get("betrag"));
            break;
            case "Ausgabe":
                neue_gesamtbilanz.set("ausgaben", neue_gesamtbilanz.get("ausgaben") + eintrag.get("betrag"));
                neue_gesamtbilanz.set("bilanz", neue_gesamtbilanz.get("bilanz") - eintrag.get("betrag"));
                break;
                default:
                    console.log(`Der Typ "${eintrag.get("typ")}" ist nicht bekannt`)
        }
        });
       this.gesamtbilanz = neue_gesamtbilanz;
    },

    gesamtbilanz_ausgeben(){
        console.log(`Einnahmen: ${this.gesamtbilanz.einahmen} cent\n`
            + `Ausgaben: ${this.gesamtbilanz.ausgaben} cent\n`
            + `Bilanz: ${this.gesamtbilanz.bilanz >=0} cent\n`
            + `Bilanz ist postiv: ${this.gesamtbilanz.bilanz >=0}`
);

    },

    eintrag_hinzufuegen(){
        let weiterer_eintrag = true;
        while (weiterer_eintrag){
            this.eintrag_erfassen();
            this.eintraege_sortieren();
            this.eintrage_ausgeben();
            this.gesamtbilanz_erstellen();
            this.gesamtbilanz_ausgeben();
            weiterer_eintrag= confirm("Weiteren Eintrag hinzufügen?");
    }
}

};
haushaltsbuch.eintrag_hinzufuegen();

