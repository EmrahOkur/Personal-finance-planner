"use strict";


class Monatslistensammlung {

    constructor(){
        this._monatslisten=[];
        this._html=this._html_generieren();
    }

    eintrag_hinzufuegen(eintrag){
        let eintragsmonat=eintrag.datum().toLocalString("de-DE", {month: "numeric"});
        let eintragsjahr=eintrag.datum().toLocalString("de-DE",{year: "numeric"});
        let monatsliste_vorhanden=false;
        this._monatslisten.forEach(monatsliste => {
            if (eintragsmonat === monatsliste.monat() && eintragsjahr === monatsliste.jahr()) {
                monatsliste.eintrag_hinzufuegen(eintrag);
                monatsliste_vorhanden=true;
                
            }

        });
        if (!monatsliste_vorhanden) {
            this._monatsliste_hinzufugen(eintragsjahr, eintragsmonat,eintrag);
            
        }


    }

    _monatsliste_hinzufugen(jahr, monat, eintrag){
        let neue_monatsliste=new Monatsliste(jahr, monat);
        neue_monatsliste.eintrag_hinzufuegen(eintrag);
        this._monatslisten.push(neue_monatsliste);

    }

    _html_generieren(){
        let monatslisten= document.createElement("section");
        monatslisten.setAttribute("id", "monatslisten");

        this._monatslisten.forEach(monatsliste =>{
            monatslisten.insertAdjacentElement("beforeend", monatsliste.html());

    });

    return monatslisten;


    }

    anzeigen(){
        let eingabeforumlar_container=document.querySelector("#eingabeformular-container");
        let monatslistensammlung=document.querySelector("#monatslisten");
        if (eingabeforumlar_container !== null) {
            if (monatslistensammlung !== null) {
                monatslistensammlung.remove();
                
            }
            eingabeforumlar_container.insertAdjacentElement("afterend", this._html);
            
        }

    }

}