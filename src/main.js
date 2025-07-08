"use strict";


//Gesamtbilanz eingeben 
let einahmen = 0;
let ausgaben = 0;
let bilanz = 0;

//Eingaben holen
let title_1 = prompt("Title:");
let typ_1 = prompt("Typ(Einahme oder Ausgabe):");
let betrag_1 = parseInt(prompt("Betrag(in Cent):"));
let datum_1 = prompt("Datum (jjjj-mm-tt):");

console.log(`Titel: ${title_1}
Typ: ${typ_1}
Betrag: ${betrag_1} cent
Datum: ${datum_1}`
);

if (typ_1 === "Einnahme"){
    einahmen = einahmen + betrag_1;
    bilanz = bilanz + betrag_1;
} else if(typ_1 === "Ausgabe"){
    ausgaben = ausgaben + betrag_1;
    bilanz = bilanz - betrag_1;
} else{
    console.log(`Der Typ "${typ_1}" ist nicht bekannt`)
}

let title_2 = prompt("Title:");
let typ_2 = prompt("Typ(Einahme oder Ausgabe):");
let betrag_2 = parseInt(prompt("Betrag(in Cent):"));
let datum_2 = prompt("Datum (jjjj-mm-tt):");

console.log(`Titel: ${title_2}
Typ: ${typ_2}
Betrag: ${betrag_2} cent
Datum: ${datum_2}`
);

if (typ_2 === "Einnahme"){
    einahmen = einahmen + betrag_2;
    bilanz = bilanz + betrag_2;
} else if(typ_2 === "Ausgabe"){
    ausgaben = ausgaben + betrag_2;
    bilanz = bilanz - betrag_2;
} else{
    console.log(`Der Typ "${typ_2}" ist nicht bekannt`)
}

//Gesamtbilanz ausgeben 
let positiv = bilanz >= 0;
console.log(`
    Einnahmen: ${einahmen} cent
    Ausgaben: ${ausgaben} cent
    Bilanz: ${bilanz} cent
    Bilanz ist postiv: ${positiv}`
)

