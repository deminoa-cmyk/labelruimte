/*
  GEGEVENS VOOR LABELRUIMTE
  =========================
  In dit bestand staan alle bedragen, lijsten en vaste teksten van de app.
  Wil je iets aanpassen? Verander alleen de tekst tussen de aanhalingstekens
  of het getal. Laat komma's, haakjes en aanhalingstekens staan.

  Bron leennormen: Tijdelijke regeling hypothecair krediet
  (wetten.overheid.nl) en Volkshuisvesting Nederland.
  Leennormen 2026. Gecontroleerd op 9 oktober 2026.

  Bedragen staan in hele euro's, zonder punt (dus 20000, niet 20.000).
  Een tekst die leeg is ("") wordt niet getoond.
*/

window.GEGEVENS = {

  /* ---------- Algemeen ---------- */
  appNaam: "Labelruimte",

  // Eén zin onder de naam bovenaan: wie maakt Labelruimte en waarom.
  // Nog leeg, vul hem zelf in.
  kopregel: "",

  disclaimer: "Dit is een schatting en geen financieel advies. Vraag een hypotheekadviseur naar je maximale hypotheek.",

  terugKnop: "Terug",

  // Wordt voorgelezen bij links die in een nieuw tabblad openen.
  nieuwTabblad: "(opent in een nieuw tabblad)",

  /* ---------- Scherm 1: Start ---------- */
  start: {
    titel: "Ga je je eerste huis kopen?",
    // De zin onder de titel.
    intro: "Zie wat het energielabel doet met wat je kunt lenen.",
    punten: [
      "Zie wat het energielabel doet met je leenruimte",
      "Zie waar je extra geld voor verduurzaming aan mag uitgeven",
      "Krijg vragen mee voor je hypotheekadviseur"
    ],
    duur: "Invullen duurt minder dan een minuut.",
    // De regel boven de invoerkaart, met daarachter een link naar het
    // scherm "Waarom Labelruimte?".
    waaromZin: "Ik ontdekte dat veel starters niet weten wat het energielabel doet met hun leenruimte.",
    waaromLink: "Lees waarom ik dit maak",
    adresLabel: "Adres van de woning",
    postcodeLabel: "Postcode",
    postcodeVoorbeeld: "1234 AB",
    huisnummerLabel: "Huisnummer",
    huisnummerVoorbeeld: "12 of 12A",
    straatLabel: "Straat",
    woonplaatsLabel: "Woonplaats",
    // Straat en woonplaats worden automatisch ingevuld via PDOK, de
    // kaartendienst van de overheid. Alleen postcode en huisnummer gaan
    // daarheen. Het energielabel komt van EP-Online (ook overheid).
    adresUitleg: "We zoeken je adres op bij PDOK en het energielabel bij EP-Online, allebei diensten van de overheid. We bewaren je adres niet.",
    adresZoeken: "Adres zoeken…",
    adresGevonden: "Adres gevonden.",
    adresKiezen: "Op dit huisnummer staan meer adressen. Kies het juiste adres:",
    adresNietGevonden: "We vinden dit adres niet. Controleer de postcode en het huisnummer. Je kunt ook zonder adres verder.",
    adresFout: "Het adres opzoeken lukt nu niet. Je kunt gewoon verder.",

    // Het tussenstation dat het energielabel opzoekt bij EP-Online.
    // Staat hier "" (leeg), dan wordt het label niet automatisch opgezocht.
    // {label} en {datum} worden vervangen door het label en de datum.
    labelDienst: "https://wooncheck-label.deminoa.workers.dev",
    labelZoeken: "Energielabel zoeken…",
    // Het blok dat verschijnt als het label is gevonden:
    // "Op basis van EP-Online (…) is het energielabel voor deze woning:"
    labelBronVoor: "Op basis van ",
    labelBronNaam: "EP-Online",
    labelBronLink: "https://www.ep-online.nl/",
    labelBronNa: " (de officiële registratie van energielabels van de overheid) is het energielabel voor deze woning:",
    labelGeldigTot: "Geldig tot {datum}",
    // Korte uitleg onder het gevonden label.
    labelSchaal: "A++++ is het zuinigst, G het minst zuinig.",
    labelVerlopen: "Het laatste label ({label}) is verlopen op {datum}.",
    labelAnders: "Ander label kiezen",
    labelNietGevonden: "Voor dit adres is geen energielabel geregistreerd. Kies hieronder zelf een label.",
    labelFout: "Het energielabel opzoeken lukt nu niet. Kies het label hieronder zelf.",
    // Kopjes boven de drie groepen keuzeknoppen.
    labelGroepen: ["A tot en met G", "Beter dan A", "Overig"],
    labelVraag: "Energielabel van de woning",
    opzoekenTekst: "Weet je het label niet? Zoek het op",
    opzoekenLink: "https://www.energielabel.nl/woningen/zoek-je-energielabel/",
    knop: "Bekijk mijn check",
    meldingGeenLabel: "Kies eerst een energielabel.",
    meldingWeetNiet: "Zoek eerst het label op via de link hieronder."
  },

  /* ---------- Leennormen 2026 (in euro's) ----------
     Volgorde = volgorde van de keuzeknoppen.
     naam          = tekst op de keuzeknop
     kort          = tekst op scherm 2
     aankoop       = extra voor aankoop (null = geen bedrag, toon zin)
     verduurzaming = extra voor verduurzaming
     rij: 2        = knop op de tweede rij (labels boven A)
     breed: true   = brede knop over de hele regel
     weetNiet: true = niet doorgaan, maar melding tonen
  */
  labels: [
    { naam: "A",     kort: "A",     aankoop: 10000, verduurzaming: 10000 },
    { naam: "B",     kort: "B",     aankoop: 10000, verduurzaming: 10000 },
    { naam: "C",     kort: "C",     aankoop: 5000,  verduurzaming: 15000 },
    { naam: "D",     kort: "D",     aankoop: 5000,  verduurzaming: 15000 },
    { naam: "E",     kort: "E",     aankoop: 0,     verduurzaming: 20000 },
    { naam: "F",     kort: "F",     aankoop: 0,     verduurzaming: 20000 },
    { naam: "G",     kort: "G",     aankoop: 0,     verduurzaming: 20000 },
    { naam: "A+",    kort: "A+",    aankoop: 20000, verduurzaming: 10000, rij: 2 },
    { naam: "A++",   kort: "A++",   aankoop: 20000, verduurzaming: 10000, rij: 2 },
    { naam: "A+++",  kort: "A+++",  aankoop: 25000, verduurzaming: 0, rij: 2 },
    { naam: "A++++", kort: "A++++", aankoop: 30000, verduurzaming: 0, rij: 2 },
    { naam: "A++++ met energieprestatiegarantie van minimaal tien jaar", kort: "A++++ met garantie", aankoop: 40000, verduurzaming: 0, breed: true },
    { naam: "Geen (geldig) energielabel", kort: "Geen (geldig) energielabel", aankoop: null, verduurzaming: 10000, breed: true },
    { naam: "Weet ik niet", kort: "Weet ik niet", weetNiet: true, breed: true }
  ],

  /* ---------- Scherm 2: Uitkomst ---------- */
  uitkomst: {
    titel: "Jouw check",
    adresKop: "Adres",
    geenAdres: "Geen adres ingevuld",
    labelKop: "Energielabel",

    // Rustige melding boven de bedragen.
    maximumMelding: "Dit is het wettelijke maximum. De geldverstrekker beslist of je dit echt kunt lenen.",

    aankoopKop: "1. Extra voor de aankoop",
    aankoopUitleg: "Dit is het bedrag dat een geldverstrekker je extra mag lenen vergeleken met een woning met label E, F of G. Het komt bovenop wat je op basis van je inkomen kunt lenen.",
    // Staat op de plek van het bedrag bij "Geen (geldig) energielabel".
    aankoopGeenLabel: "De regeling noemt geen extra bedrag voor een woning zonder label.",

    verduurzamingKop: "2. Extra om te verduurzamen",
    verduurzamingPunten: [
      "Dit bedrag mag een geldverstrekker je extra lenen als je het uitgeeft aan energiebesparende maatregelen. Het is een maximum en het is niet verplicht.",
      "Het geld staat meestal in een bouwdepot, waaruit de rekeningen worden betaald.",
      "Een geldverstrekker mag dit doen, maar hoeft het niet. De voorwaarden verschillen per geldverstrekker."
    ],

    // De regel onder de twee bedragen: beide bedragen bij elkaar opgeteld.
    // Zonder label telt alleen het bedrag voor verduurzamen mee.
    samenKop: "Samen maximaal:",

    // Uitleg bij moeilijke woorden. Bij het eerste gebruik op scherm 2
    // verschijnt een knopje "Wat is dit?".
    watIsDitKnop: "Wat is dit?",
    begrippen: [
      { woord: "geldverstrekker", uitleg: "De bank of andere partij die je de hypotheek geeft." },
      { woord: "bouwdepot", uitleg: "Een aparte rekening bij je hypotheek waaruit de rekeningen van de verbouwing worden betaald." },
      { woord: "energiebesparende maatregelen", uitleg: "Aanpassingen waardoor je huis minder energie verbruikt, zoals isolatie." },
      { woord: "woningwaarde", uitleg: "Wat het huis volgens een taxateur waard is." }
    ],

    uitgevenKop: "Waar mag ik dit aan uitgeven?",
    uitgevenGroepen: [
      {
        kop: "Mag",
        soort: "ja",
        items: [
          "Gevelisolatie",
          "Dakisolatie",
          "Vloerisolatie",
          "Leidingisolatie",
          "Isolerend glas (minimaal HR++)",
          "Warmtepomp",
          "Zonnepanelen",
          "Douche met warmteterugwinning"
        ]
      },
      {
        kop: "Mag alleen in combinatie",
        soort: "combi",
        items: [
          "Energiezuinige deuren en kozijnen (alleen samen met HR++ glas)",
          "Energiezuinig ventilatiesysteem (alleen samen met een andere maatregel uit de lijst)"
        ]
      },
      {
        kop: "Valt er niet onder, bijvoorbeeld",
        soort: "nee",
        items: [
          "HR-ketel",
          "Zonneboiler",
          "Thuisbatterij",
          "Vloerverwarming",
          "Rolluiken"
        ]
      }
    ],

    vragenKop: "Vraag dit aan je hypotheekadviseur",
    vragen: [
      "Bij welke geldverstrekkers kan ik het extra bedrag voor verduurzaming krijgen?",
      "Kan ik tot 106% van de woningwaarde lenen als ik verduurzaam?",
      "Hoe werkt het bouwdepot en welke offertes heb ik nodig?",
      "Krijg ik rentekorting bij een beter energielabel?",
      "Wat doet mijn studieschuld met wat ik kan lenen?"
    ],

    energieKop: "Schatting energiekosten per maand",
    // Vul hier later zelf een bedrag in, bijvoorbeeld "€ 150".
    energieWaarde: "€ ……",
    energieUitleg: "Per maand",

    // Blok met hypotheekadviseurs. Dit zijn VOORBEELDEN met verzonnen
    // namen en scores. De knop belt nergens naartoe: hij laat alleen
    // de zin bij belVoorbeeld zien.
    adviseursKop: "Praat met een hypotheekadviseur",
    adviseurs: [
      { naam: "Lindeboom Hypotheekadvies", plaats: "Utrecht",   sterren: "4,8 van 5 op Google" },
      { naam: "Adviesbureau De Kade",      plaats: "Zwolle",    sterren: "4,6 van 5 op Google" },
      { naam: "Van Ommen Hypotheken",      plaats: "Eindhoven", sterren: "4,9 van 5 op Google" }
    ],
    belKnop: "Bel deze adviseur",
    belVoorbeeld: "Dit is een voorbeeld. Je kunt deze adviseur nog niet bellen.",
    // De kleine zin direct onder het blok met adviseurs.
    gratisZin: "De check is gratis. Adviseurs betalen Labelruimte als je via deze pagina belt.",

    // Knop om de uitkomst te bewaren of te delen. Er wordt niets
    // opgeslagen of naar een server gestuurd.
    deelKnop: "Bewaar of deel deze uitkomst",
    deelGekopieerd: "De samenvatting is gekopieerd. Je kunt hem nu ergens plakken, bijvoorbeeld in een notitie of bericht.",
    deelMislukt: "Kopiëren lukte niet. Selecteer de tekst hieronder en kopieer hem zelf.",

    // De bronregel: tekst ervoor, twee links, tekst erna.
    bron: {
      voor: "Leennormen 2026. Bron: ",
      links: [
        { tekst: "Tijdelijke regeling hypothecair krediet", link: "https://wetten.overheid.nl/BWBR0032503/2026-01-01" },
        { tekst: "Volkshuisvesting Nederland", link: "https://www.volkshuisvestingnederland.nl/onderwerpen/huren-en-wonen/tijdelijke-regeling-hypothecair-krediet/maximale-hypotheek-op-basis-van-energielabel" }
      ],
      tussen: " en ",
      na: ". Gecontroleerd op 9 oktober 2026."
    }
  },

  /* ---------- Scherm 3: Waarom Labelruimte ----------
     Je foundersstory. Pas de teksten gerust zelf aan.
  */
  waarom: {
    // De link rechtsboven, naast het logo.
    kopLink: "Waarom Labelruimte?",
    titel: "Waarom Labelruimte?",
    // De naam van je foto in de projectmap, bijvoorbeeld "oprichter.jpg".
    // Staat hier "" (leeg), dan wordt er geen foto getoond.
    foto: "",
    // Je naam onder de foto. Staat hier "" (leeg), dan wordt er geen
    // naam getoond.
    naam: "",
    rol: "Oprichter van Labelruimte",
    // Je verhaal, in één tegel. Elke regel tussen aanhalingstekens is
    // een alinea.
    verhaal: [
      "Als starter is het ontzettend moeilijk om ertussen te komen op de woningmarkt. Ik betaal zelf veel huur voor mijn inkomen. Daarom wil ik graag kopen, om in ieder geval in te stappen op de hypotheekmarkt. Toen ik me ging oriënteren, ontdekte ik dat er extra mogelijkheden zijn: met een goed energielabel mag je meer lenen, en je mag extra lenen om je huis te verduurzamen. Zo help je jezelf én het milieu.",
      "Ik kwam erachter dat veel mensen in mijn omgeving deze regels niet kenden, terwijl ze wel op zoek zijn naar een huis. Daarom heb ik Labelruimte bedacht. Labelruimte geeft iedereen snel, laagdrempelig en gratis informatie. Zo wil ik starters gelijkere kansen geven op de hypotheekmarkt."
    ],
    // Link onder het verhaal naar het impactrapport.
    impactLink: "Bekijk ons impactrapport",
    knop: "Doe de check"
  },

  /* ---------- Scherm 4: Impactrapport ----------
     De cijfers komen uit het eindportfolio (bijlage B). Het zijn
     verwachtingen voor jaar 1, geen gemeten resultaten.
  */
  impact: {
    // De link rechtsboven, naast "Waarom Labelruimte?".
    kopLink: "Impactrapport",
    titel: "Impactrapport",
    intro: "Labelruimte wil dat meer starters hun nieuwe huis verduurzamen. Want wie weet wat het energielabel doet, kiest slimmer.",

    doelKop: "Ons doel voor jaar 1",
    doelGetal: "151.110 m³",
    doelUitleg: "Zoveel gas willen we per jaar besparen. Dat doen we door starters te laten zien wat verduurzamen hun oplevert.",
    co2: "Dat is ongeveer 269 ton minder CO₂-uitstoot per jaar.",

    labelKop: "Een beter label scheelt veel gas",
    labelGetal: "34% minder",
    labelUitleg: "Een gemiddeld huishouden met label A verbruikt 34% minder gas dan een huishouden met label G.",

    stappenKop: "Zo maken we impact",
    stappen: [
      "Je doet de check en ziet wat het energielabel doet met je leenruimte.",
      "Je ziet hoeveel een geldverstrekker je extra mag lenen om je huis zuiniger te maken.",
      "Je gaat beter voorbereid naar je hypotheekadviseur.",
      "Je verduurzaamt je nieuwe huis. Dat scheelt gas en CO₂-uitstoot."
    ],

    rekenKop: "Zo rekenen we",
    reken: [
      "We verwachten dat 1.375 starters in het eerste jaar de check doen.",
      "We gaan ervan uit dat 1 op de 10 starters gaat verduurzamen. Dat zijn 138 woningen.",
      "Een woning die goed geïsoleerd wordt, bespaart ongeveer 1.095 m³ gas per jaar.",
      "138 woningen × 1.095 m³ = 151.110 m³ gas per jaar.",
      "Elke m³ gas geeft 1,782 kg CO₂-uitstoot. Zo komen we op ongeveer 269 ton CO₂ per jaar."
    ],
    rekenNoot: "Dit is een schatting. Hoeveel we echt besparen, hangt af van welk huis starters kopen en welke maatregelen ze nemen.",

    binnenkortLabel: "COMING SOON",
    binnenkortKop: "Impactrapport jaar 1",
    binnenkortTekst: "Na ons eerste jaar kijken we wat Labelruimte echt heeft opgeleverd. Hoeveel starters deden de check? Hoeveel van hen verduurzaamden hun huis? En hoeveel CO₂-uitstoot scheelde dat? Het antwoord lees je hier.",

    knop: "Doe de check",

    // De bronregel onderaan: tekst ervoor, de links, tekst erna.
    bron: {
      voor: "Bronnen: ",
      links: [
        { tekst: "RaboResearch (2023)", link: "https://www.rabobank.nl/kennis/d011347940-energielabel-zegt-niet-alles-over-energieverbruik" },
        { tekst: "Milieu Centraal (2026)", link: "https://www.milieucentraal.nl/energie-besparen/isoleren-en-besparen/alles-over-isoleren/" },
        { tekst: "RVO (2023)", link: "https://www.rvo.nl/sites/default/files/2023-10/CO2-emissiefactor-aardgas-Nederlandse-rapportage-en-ETS-%202023.pdf" }
      ],
      tussen: ", ",
      na: "."
    }
  },

  /* ---------- Vraag na 20 seconden op de uitkomst ----------
     Verschijnt één keer per bezoek, als de uitkomst zo lang in beeld
     is. De vragen komen na elkaar. De antwoorden worden nergens
     opgeslagen of verstuurd.
  */
  peiling: {
    wachtSeconden: 20,
    vragen: [
      "Voel je je beter voorbereid op het kopen van een woning?",
      "Ben je door deze informatie van plan om je woning te verduurzamen?"
    ],
    // {nr} en {totaal} worden vervangen door bijvoorbeeld 1 en 2.
    teller: "Vraag {nr} van {totaal}",
    ja: "Ja",
    nee: "Nee",
    sluiten: "Sluiten",
    dank: "Dank je wel voor je antwoorden."
  },

  // Het woord dat bij elke voorbeeldwaarde verschijnt.
  voorbeeldWoord: "VOORBEELD"
};
