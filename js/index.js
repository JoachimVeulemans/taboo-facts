$(document).ready(function() {

    var factsNL = [
        "Als de eisprong gaat plaatsvinden stijgt de lichaamstemperatuur van de vrouw met een halve graad, dit tot aan de mensturatie. Als die temperatuursverhoging niet plaatsvindt kan het zijn dat je niet vruchtbaar wordt.",
        "Je kan seksspeeltjes kopen in allerlei vormen en kleuren, zelfs met de vorm van een konijn!",
        "Je hebt geen 'maagdenvlies' sommige vrouwen hebben een vliesje en anderen niet!",
        "De vagina reinigt zich vanzelf. Vaak wordt er gedacht dat je ze moet wassen met zeep, dit is niet het geval!", 
        "Vrouwen kunnen een orgasme krijgen door het stimuleren van de tepels.",
        "De clitoris is 11cm lang, het is dus meer dan een klein bolletje.",
        "Perfect zijn is een schijn.",
        "Online daten is de populairste manier van daten.",
        "Als je kijkt naar je geliefde, stilt dat je pijn.",
        "Als je verliefd bent stimuleert dat je hersenen op 12 gebieden!",
        "Hypopituïtarisme is een ziekte waardoor je geen liefde kan voelen.",
        "Genieten van seks kunnen alleen: bonobo's, dolfijnen en mensen.",
        "Er wordt elk jaar meer monopoly geld geprint dan echt geld.",
        "Je hersenen bepalen in 13 milliseconden of iemand aantrekkelijk is of niet",
        "Naast een monogame relatie zijn er nog heel wat andere relatievormen",
        "Heb je een lange afstandsrelatie is niet hetzelfde als een LAT-relatie. Bij een lange afstandsrelatie woon je ver van elkaar en je ziet elkaar dus niet vaak. Bij een LAT-relatie ga je bewust apart wonen.",
        "Het is oké om van twee mensen tegelijk te houden dit heet polyamorie. Je hebt ook nog polygamie dit is wanneer er sprake is van meerdere huwelijken.",
        "Een bijzondere vorm van polygamie is bigamie, hier ben je getrouwd met twee partners tegelijkertijd. Dit is in onder andere verboden in België en Nederland",
        "De mens laat gemiddeld 12 tot 25 windjes per dag",
        "Er bestaat een syndroom waardoor je dronken wordt zonder ook maar een druppel te drinken, dit heet het 'auro-brewery syndrome'.",
        "Sekswerk is een taboe, daarom wil de sector dat dit gelegaliseerd wordt. Vaak is het voor de werknemers moeilijk om een klacht in te dienen als ze misbruikt werden tijdens een shift. "
    ];

    var factsEN = [
        "When ovulation is about to take place, the woman's body temperature rises by half a degree, this up to mensturation. If that temperature increase does not take place, you may not become fertile.",
        "You can buy sex toys in all shapes and colors, even with the shape of a rabbit!",
        "You don't have a hymen, some women have a membrane and others don't!",
        "The vagina cleans itself. It is often thought that you should wash it with soap, this is not the case!",
        "Women can have an orgasm by stimulating the nipples.",
        "The clitoris is 11cm long, so it is more than a small ball.",
        "Being perfect is an illusion.",
        "Online dating is the most popular way to date.",
        "When you look at your lover, it calms your pain.",
        "When you are in love it stimulates your brain in 12 areas!",
        "Hypopituitarism is a disease that prevents you from feeling love.",
        "Only bonobos, dolphins and humans can enjoy sex.",
        "More monopoly money is printed every year than real money.",
        "Your brain determines in 13 milliseconds whether someone is attractive or not",
        "In addition to a monogamous relationship, there are many other forms of relationship",
        "Having a long distance relationship is not the same as a LAT relationship. In a long distance relationship you live far from each other and you don't see each other very often. With a LAT relationship you consciously live separately.",
        "It's okay to love two people at the same time this is called polyamory. You also have polygamy this is when there are multiple marriages.",
        "A special form of polygamy is bigamy, here you are married with two partners at the same time. This is prohibited in Belgium and the Netherlands",
        "Humans let an average of 12 to 25 winds a day",
        "There is a syndrome whereby you get drunk without even drinking a drop, this is called the 'auro-brewery syndrome'.",
        "Sex work is a taboo, which is why the industry wants it legalized. It is often difficult for employees to file a complaint if they have been abused during a shift."
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
