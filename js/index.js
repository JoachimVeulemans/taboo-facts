$(document).ready(function() {

    var facts = [
        "De balzak heeft een temperatuur van ongeveer 2°C. De balzak controleert deze temperatuur ook zelf.",
        "Zaadcellen overleven tot gemiddeld 3 dagen na de zaadlozing in de vagina.",
        "Per zaadlozing komen er 100 miljoen cellen per milliliter sperma vrij.",
        "Een geslachtsrijpe man produceert 500 miljoen cellen per dag.",
        "De eierstokken zijn 5cm lang.",
        "Als de eisprong gaat plaatsvinden stijgt de lichaamstemperatuur van de vrouw met een halve graad, dit tot aan de mensturatie. Als die temperatuursverhoging niet plaatsvindt kan het zijn dat je niet onvruchtbaar wordt.",
        "De reis van de eicel vanuit de eierstok naar de baarmoeder duurt 6 dagen.",
        "De gemiddelde snelheid van de zaadcellen tijdens de ejaculatie is 45 kilometer per uur."
    ];

    var index = Math.floor(Math.random() * facts.length);

    document.getElementById('fact').innerText = facts[index];
    document.getElementById('title').innerText = chrome.i18n.getMessage("appName");
    document.title = chrome.i18n.getMessage("appName");


});
