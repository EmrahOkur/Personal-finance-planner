"use strict";

class Eintrag {
  constructor(titel, betrag, typ, datum) {
    this._titel = titel;
    this._betrag = betrag;
    this._typ = typ;
    this._datum = datum;
    this._timestamp = Date.now();
    this._html = this._html_generieren();
  }

  titel() {
    return this._titel;
  }

  betrag() {
    return this._betrag;
  }
  typ() {
    return this._typ;
  }
  datum() {
    return this._datum;
  }
  timestamp() {
    return this._timestamp;
  }

  html() {
    return this._html;
  }

  _html_generieren() {
    let listepunkt = document.createElement("li");
    this._typ === "einnahme"
      ? listepunkt.classList.add("einnahme")
      : listepunkt.classList.add("ausgabe");
    listepunkt.dataset.timestamp = this._timestamp;

    let datum = document.createElement("span");
    datum.className = "datum";
    datum.textContent = this._datum.toLocaleDateString("de-DE", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    let titel = document.createElement("span");
    titel.className = "titel";
    titel.textContent = this._titel;

    let betrag = document.createElement("span");
    betrag.className = "betrag";
    betrag.textContent = `${(this._betrag / 100)
      .toFixed(2)
      .replace(".", ",")} €`;

    let button = document.createElement("button");
    button.className = "entfernen-button";

    let icon = document.createElement("i");
    icon.className = "fas fa-trash";

    button.appendChild(icon);

    listepunkt.appendChild(datum);
    listepunkt.appendChild(titel);
    listepunkt.appendChild(betrag);
    listepunkt.appendChild(button);

    this._eintrag_entfernen_event_hinzufuegen(listepunkt);

    return listepunkt;
  }

  _eintrag_entfernen_event_hinzufuegen(listenpunkt) {
    listenpunkt
      .querySelector(".entfernen-button")
      .addEventListener("click", (e) => {
        let timestamp = e.target.parentElement.getAttribute("data-timestamp");
        haushaltsbuch.eintrag_entfernen(timestamp);
      });
  }
}
