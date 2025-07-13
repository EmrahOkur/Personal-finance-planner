"use strict";

const haushaltsbuch ={
    
    gesamtbilanz:{
        einahmen:0,
        ausgaben:0,
        bilanz:0,
    },

    eintraege:[],

    eintrag_erfassen (){
        this.eintraege.push(
            {
            titel:prompt("Title:"),
            typ: prompt("Typ(Einahme oder Ausgabe):"),
            betrag:parseInt(prompt("Betrag(in Cent):")),
            datum:prompt("Datum (jjjj-mm-tt):")
            }
        );
    },

   eintrage_ausgeben (){
    console.clear();
    this.eintraege.forEach(function(eintrag) {
          console.log(`Titel: ${eintrag.titel}\n`
            + `Typ: ${eintrag.typ}\n`
            + `Betrag: ${eintrag.betrag} cent\n`
            + `Datum: ${eintrag.datum}`
        );
    });
      
    },

    gesamtbilanz_erstellen() {
        let neue_gesamtbilanz = {
            einahmen:0,
            ausgaben:0,
            bilanz:0,
        };
        this.eintraege.forEach(function(eintrag){
             switch(eintrag.typ){
            case "Einnahme":
            neue_gesamtbilanz.einahmen += eintrag.betrag;
            neue_gesamtbilanz.bilanz += eintrag.betrag;
            break;
            case "Ausgabe":
                neue_gesamtbilanz.ausgaben += eintrag.betrag;
                neue_gesamtbilanz.bilanz -= eintrag.betrag;
                break;
                default:
                    console.log(`Der Typ "${eintrag.typ}" ist nicht bekannt`)
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
            this.eintrage_ausgeben();
            this.gesamtbilanz_erstellen();
            this.gesamtbilanz_ausgeben();
            weiterer_eintrag= confirm("Weiteren Eintrag hinzufügen?");
    }
}

};
haushaltsbuch.eintrag_hinzufuegen();

