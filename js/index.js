$(document).ready(function() {

    var factsNL = [
        "De balzak heeft een temperatuur van ongeveer 2°C. De balzak controleert deze temperatuur ook zelf.",
        "Zaadcellen overleven tot gemiddeld 3 dagen na de zaadlozing in de vagina.",
        "Per zaadlozing komen er 100 miljoen cellen per milliliter sperma vrij.",
        "Een geslachtsrijpe man produceert 500 miljoen cellen per dag.",
        "De eierstokken zijn 5cm lang.",
        "Als de eisprong gaat plaatsvinden stijgt de lichaamstemperatuur van de vrouw met een halve graad, dit tot aan de menstruatie. Als die temperatuursverhoging niet plaatsvindt kan het zijn dat je niet onvruchtbaar wordt.",
        "De reis van de eicel vanuit de eierstok naar de baarmoeder duurt 6 dagen.",
        "De gemiddelde snelheid van de zaadcellen tijdens de ejaculatie is 45 kilometer per uur.",
        "Je kan seksspeeltjes kopen in allerlei vormen en kleuren, zelfs met de vorm van een konijn!",
        "Als je de pil wilt slikken en je wilt niet dat je ouders dat weten, gaat dat! Je kan alleen naar de dokter gaan voor een voorschrift en de pil zelf kost niets.",
        "Je hebt geen 'maagdenvlies' sommige vrouwen hebben een vliesje en anderen niet!",
        "De vagina reinigt zich vanzelf.", 
        "Vrouwen kunnen een orgasme krijgen door het stimuleren van de tepels.",
        "De clitoris is 11cm lang, het is dus meer dan een klein bolletje.",
        "Vrouwen krijgen ook een natte droom, soms meerdere keren per droom.",
        "Perfect zijn is een schijn.",
        "Online daten is de populairste manier van daten.",
        "Als je kijkt naar je geliefde, stilt dat je pijn.",
        "Als je verliefd bent stimuleert dat je hersenen op 12 gebieden!",
        "Hypopituïtarisme is een ziekte waardoor je geen liefde kan voelen.",
        "Genieten van seks kunnen alleen: bonobo's, dolfijnen en mensen.",
        "Er wordt elk jaar meer monopoly geld geprint dan echt geld."
    ];

    var factsEN = [
        "The scrotum has a temperature of about 2°C. The scrotum also controls this temperature itself.",
        "Sperm cells survive in the vagina for an average of 3 days after ejaculation.",
        "Per ejaculation, 100 million cells are released per milliliter of sperm.",
        "A sexually mature man produces 500 million cells per day.",
        "The ovaries are 5cm long.",
        "When ovulation takes place, the woman's body temperature rises by half a degree, until menstruation. If that temperature increase does not take place, you may not become infertile.",
        "It takes 6 days for the egg to travel from the ovary to the uterus.",
        "The average speed of the sperm during ejaculation is 45 kilometers per hour.",
        "You can buy sex toys in all shapes and colors, even with the shape of a rabbit!",
        "If you want to take the pill and you don't want your parents to know, that's okay! You can only go to the doctor for a prescription and the pill itself costs nothing.",
        "You don't have a hymen, some women have a membrane and others don't!",
        "The vagina cleans itself.",
        "Women can have an orgasm by stimulating the nipples.",
        "The clitoris is 11cm long, so it is more than a small ball.",
        "Women also get a wet dream, sometimes several times per dream.",
        "Being perfect is an illusion.",
        "Online dating is the most popular way to date.",
        "When you look at your lover, it calms your pain.",
        "When you are in love it stimulates your brain in 12 areas!",
        "Hypopituitarism is a disease that prevents you from feeling love.",
        "Only bonobos, dolphins and humans can enjoy sex.",
        "More monopoly money is printed every year than real money."
    ];

    if (chrome.i18n.getUILanguage().startsWith('nl')) {
        var index = Math.floor(Math.random() * factsNL.length);
        document.getElementById('fact').innerText = factsNL[index];
    }
    else {
        var index = Math.floor(Math.random() * factsEN.length);
        document.getElementById('fact').innerText = factsEN[index];
    }

    document.getElementById('title').innerText = chrome.i18n.getMessage("appName");
    document.title = chrome.i18n.getMessage("appName");
});
