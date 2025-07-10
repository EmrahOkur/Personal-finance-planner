"use strict";

const haushaltsbuch ={
    
    gesamtbilanz:{
        einahmen:0,
        ausgaben:0,
        bilanz:0,
    },

    neuer_eintrag:{
        titel: null,
        typ: null,
        betrag: null,
        datum: null
    },

    eintrag_erfassen (){
        this.neuer_eintrag.titel = prompt("Title:");
        this.neuer_eintrag.typ = prompt("Typ(Einahme oder Ausgabe):");
        this.neuer_eintrag.betrag = parseInt(prompt("Betrag(in Cent):"));
        this.neuer_eintrag.datum = prompt("Datum (jjjj-mm-tt):");

    },

    eintrag_ausgeben (){
        console.log(`Titel: ${this.neuer_eintrag.titel}
Typ: ${this.neuer_eintrag.typ}
Betrag: ${this.neuer_eintrag.betrag} cent
Datum: ${this.neuer_eintrag.datum}`);
    },

    eintrag_mit_gesamtbilanz_verrechnen() {
        if (this.neuer_eintrag.typ === "Einnahme"){
    this.gesamtbilanz.einahmen += this.neuer_eintrag.betrag;
    this.gesamtbilanz.bilanz += this.neuer_eintrag.betrag;
} else if(this.neuer_eintrag.typ === "Ausgabe"){
    this.gesamtbilanz.ausgaben += this.neuer_eintrag.betrag;
    this.gesamtbilanz.bilanz -= this.neuer_eintrag.betrag;
} else{
    console.log(`Der Typ "${this.neuer_eintrag.typ}" ist nicht bekannt`)
}
    
    },

    gesamtbilanz_ausgeben(){
        console.log(`
Einnahmen: ${this.gesamtbilanz.einahmen} cent
Ausgaben: ${this.gesamtbilanz.ausgaben} cent
Bilanz: ${this.gesamtbilanz.bilanz >=0} cent
Bilanz ist postiv: ${this.gesamtbilanz.bilanz >=0}`
);

    },

    eintrag_hinzufuegen(){
    this.eintrag_erfassen();
    this.eintrag_ausgeben();
    this.eintrag_mit_gesamtbilanz_verrechnen();
    this.gesamtbilanz_ausgeben();
    }





};

haushaltsbuch.eintrag_hinzufuegen();



