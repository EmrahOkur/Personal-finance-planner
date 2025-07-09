"use strict";


//Gesamtbilanz eingeben 
let einahmen = 0, ausgaben = 0, bilanz = 0, titel, typ, betrag, datum;

const eintrag_erfassen = function(){
    titel = prompt("Title:");
    typ = prompt("Typ(Einahme oder Ausgabe):");
    betrag = parseInt(prompt("Betrag(in Cent):"));
    datum = prompt("Datum (jjjj-mm-tt):");
};



const eintrag_ausgeben = function(titel, typ, betrag, datum){
console.log(`Titel: ${titel}
Typ: ${typ}
Betrag: ${betrag} cent
Datum: ${datum}`
);
};


const eintrag_mit_gesamtbilanz_verrechnen = function(typ, betrag){
if (typ === "Einnahme"){
    einahmen = einahmen + betrag;
    bilanz = bilanz + betrag;
} else if(typ === "Ausgabe"){
    ausgaben = ausgaben + betrag;
    bilanz = bilanz - betrag;
} else{
    console.log(`Der Typ "${typ}" ist nicht bekannt`)
}
};



const gesamtbilanz_ausgeben = function(einahmen, ausgaben, bilanz){
    console.log(`
Einnahmen: ${einahmen} cent
Ausgaben: ${ausgaben} cent
Bilanz: ${bilanz >=0} cent
Bilanz ist postiv: ${bilanz >=0}`
);
};



const eintrag_hinzufuegen = function(){
    eintrag_erfassen();
    eintrag_ausgeben(titel, typ, betrag, datum);
    eintrag_mit_gesamtbilanz_verrechnen(typ, betrag);
    gesamtbilanz_ausgeben(einahmen, ausgaben, bilanz);
}

eintrag_hinzufuegen();



