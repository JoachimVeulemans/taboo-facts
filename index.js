$(document).ready(function() {

    var facts = [
        "De balzak heeft een temperatuur van ongeveer 2°. De balzak controleert deze temeperatuur ook zelf.",
        "Zaadcellen overleven tot gemiddeld 3 dagen na de zaadlozing, in de vagina.",
        "Per zaadlozing komen er 100 miljoen cellen vrij per milliter sperma.",
        "Een geslachtsrijpe man produceert 500 miljoen cellen per dag.",
        "De eierstokken zijn 5cm lang.",
        "Als de eisprong gaat plaatsvinden stijgt de lichaamstemperatuur van de vrouw met een halve graad, dit tot aan de mensturatie. Als die temperatuursverhoging niet plaatsvindt kan het zijn dat je niet onvruchtbaar wordt.",
        "De duur van de eicel naar de baarmoeder duurt 6 dagen.",
        "De gemiddelde snelheid van de zaadcellen tijdens de ejaculatie is 45 kilometer per uur."
    ];

    var index = Math.floor(Math.random() * facts.length);

    document.getElementById('fact').innerText = facts[index];

});
