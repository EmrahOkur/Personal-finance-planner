"use strict";

class Haushaltsbuch {

    constructor(){
        this._eintraege = [];
        this._montaslistensammlung = new Monatslistensammlung();
        this._gesamtbilanz = new Gesamtbilanz();
        
    }

    
    eintraege_hinzufuegen(formulardaten){
            let neuer_eintrag= new Eintrag(
                formulardaten.titel,
                formulardaten.betrag,
                formulardaten.typ, 
                formulardaten.datum);
            this._eintraege.push(neuer_eintrag);
            this._montaslistensammlung.eintrag_hinzufuegen(neuer_eintrag);
            this._gesamtbilanz.aktualisieren(this._eintraege);      
    }

    eintrag_entfernen(timestamp){
        let start_index;
        for (let i = 0; i < this._eintraege.length; i++) {
            if (this._eintraege[i].timestamp()===parseInt(timestamp)) {
                start_index=i;
                break;
            } 
        }
            
        

        this._eintraege.splice(start_index, 1);
        this._gesamtbilanz.aktualisieren(this._eintraege);   



    }



eintraege_ausgeben (){
   console.clear();
     this._eintraege.forEach(function(eintrag) {
          console.log(`Titel: ${eintrag.get("titel")}\n`
             + `Typ: ${eintrag.get("typ")}\n`
            + `Betrag: ${(eintrag.get("betrag") / 100).toFixed(2)} €\n`
            + `Datum: ${eintrag.get("datum").toLocaleDateString("de-DE", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit"             })}`
        );
    });
      
    }


    

    anzeigen(){
        this._montaslistensammlung.anzeigen();
        this._gesamtbilanz.anzeigen();

}
 


   


};
