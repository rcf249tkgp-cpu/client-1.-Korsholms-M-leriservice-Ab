// All site copy, in Swedish (main) and Finnish.
// Facts here come straight from KMS — do not add reviews, prices,
// certifications or guarantees that the company has not provided.

export type Lang = "sv" | "fi";

export const company = {
  y: "0559848-6",
  address: "Vassorbyvägen 129",
  postal: "66590 Vassor",
  office: { display: "06 345 4520", tel: "+35863454520" },
  email: "info@kmsab.fi",
  stig: { name: "Stig Beijar", display: "0500 364 889", tel: "+358500364889" },
  ake: { name: "Åke Beijar", display: "044 332 3208", tel: "+358443323208" },
  mapQuery: "Vassorbyvägen 129, 66590 Vassor, Finland",
};

export const serviceKeys = {
  indoor: ["paint", "bath", "floor", "small"],
  outdoor: ["facade", "roof", "joints", "wash", "chimney"],
} as const;

export type ServiceKey =
  | (typeof serviceKeys.indoor)[number]
  | (typeof serviceKeys.outdoor)[number];

export type GalleryKey = "facade" | "church" | "lift" | "indoor" | "roof" | "wallpaper";

type Dict = {
  companyName: string;
  demo: string;
  meta: { title: string; description: string };
  nav: { services: string; churches: string; advice: string; gallery: string; about: string; contact: string };
  menu: { open: string; close: string };
  langLabel: string;
  call: string;
  callShort: string;
  quote: string;
  hero: { title: string; lead: string; callNote: string; imageLabel: string };
  placeholder: string;
  trust: { title: string; sub: string }[];
  services: {
    title: string;
    lead: string;
    indoor: string;
    outdoor: string;
    items: Record<ServiceKey, string>;
  };
  churches: { title: string; lead: string; names: string[] };
  advice: { title: string; lead: string; points: string[]; motto: string };
  gallery: { title: string; note: string; items: Record<GalleryKey, string> };
  about: {
    title: string;
    body: string[];
    facts: { label: string; value: string }[];
    photo: string;
  };
  form: {
    title: string;
    lead: string;
    name: string;
    phone: string;
    email: string;
    location: string;
    type: string;
    types: { indoor: string; outdoor: string; both: string };
    message: string;
    messageHint: string;
    contactHint: string;
    submit: string;
    sending: string;
    successTitle: string;
    success: string;
    again: string;
    errName: string;
    errContact: string;
    errEmail: string;
    required: string;
  };
  contact: {
    title: string;
    lead: string;
    mobile: string;
    office: string;
    phone: string;
    email: string;
    address: string;
    openMap: string;
    mapTitle: string;
  };
  footer: { site: string; contact: string; y: string };
};

export const dict: Record<Lang, Dict> = {
  sv: {
    companyName: "Korsholms Måleriservice Ab",
    demo: "Demo – skapad av Fusion Sites",
    meta: {
      title: "KMS – Korsholms Måleriservice Ab | Måleri i Korsholm sedan 1984",
      description:
        "Inomhus- och utomhusmålning för hem, företag och kyrkor i Korsholm och Österbotten. Familjeföretag i Vassor sedan 1984.",
    },
    nav: {
      services: "Tjänster",
      churches: "Kyrkor",
      advice: "Färgråd",
      gallery: "Bilder",
      about: "Om oss",
      contact: "Kontakt",
    },
    menu: { open: "Öppna meny", close: "Stäng meny" },
    langLabel: "Välj språk",
    call: "Ring oss",
    callShort: "Ring",
    quote: "Begär offert",
    hero: {
      title: "Måleri i Korsholm sedan 1984",
      lead: "Inomhus- och utomhusmålning för hem, företag och kyrkor – från mindre renoveringar till stora nybyggen och fasader.",
      callNote: "Stig Beijar svarar på 0500 364 889",
      imageLabel: "Fasadmålning med skylift",
    },
    placeholder: "Platshållare",
    trust: [
      { title: "Sedan 1984", sub: "Familjeföretag i Vassor" },
      { title: "8 anställda", sub: "plus säsongsarbetare" },
      { title: "3 egna skylifter", sub: "upp till 23 m arbetshöjd" },
      { title: "Ärlighet är vårt motto", sub: "ärliga råd om färg och arbete" },
    ],
    services: {
      title: "Det här målar vi",
      lead: "Stora och små jobb – från egnahemshus och renoveringar till nybyggen och fasader.",
      indoor: "Inomhusmålning",
      outdoor: "Utomhusmålning",
      items: {
        paint: "Målning och tapetsering",
        bath: "Badrumsrenoveringar",
        floor: "Mattarbeten",
        small: "Mindre renoveringar",
        facade: "Fasader av alla slag",
        roof: "Plåttak",
        joints: "Elementfogningar",
        wash: "Fasad- och taktvättningar",
        chimney: "Skorstensrenoveringar",
      },
    },
    churches: {
      title: "Kyrkor vi har målat",
      lead: "Kyrkor kräver noggrannhet, rätt färgval och utrustning för höjder. De här kyrkorna har vi haft förtroendet att måla.",
      names: ["Kronoby", "Oravais", "Maxmo", "Malax", "Petalax", "Korsnäs", "Karstula"],
    },
    advice: {
      title: "Rätt färg på rätt ställe",
      lead: "Många äldre färger innehöll giftiga ämnen, och alla färger passar inte alla underlag. Vi säger ärligt vilken färg vi rekommenderar och varför.",
      points: [
        "Vi tittar på underlaget och vad som målats tidigare innan vi väljer färg.",
        "Vi vet vad man ska se upp med i gamla färglager.",
        "Råden bygger på över 40 års erfarenhet av målning i Österbotten.",
      ],
      motto: "Ärlighet är vårt motto!",
    },
    gallery: {
      title: "Bilder från våra jobb",
      note: "Bilderna är platshållare och byts ut mot KMS egna foton.",
      items: {
        facade: "Fasadmålning",
        church: "Kyrkmålning",
        lift: "Skylift i arbete",
        indoor: "Inomhusmålning",
        roof: "Plåttak",
        wallpaper: "Tapetsering",
      },
    },
    about: {
      title: "Ett familjeföretag från Vassor",
      body: [
        "KMS – Korsholms Måleriservice Ab grundades 1984 av Stig och Åke Beijar. I dag är vi 8 anställda, plus säsongsarbetare när det behövs.",
        "Vi tar oss an både stora och små jobb: egnahemshus, nybyggen, renoveringar, fasader och mindre byggnadsrenoveringar. Med tre egna skylifter, den nyaste med 23 meters arbetshöjd, når vi även höga fasader.",
      ],
      facts: [
        { label: "Grundat", value: "1984" },
        { label: "Grundare", value: "Stig och Åke Beijar" },
        { label: "Personal", value: "8 anställda + säsongsarbetare" },
        { label: "Skylifter", value: "3 st, den nyaste 23 m" },
      ],
      photo: "Teambild",
    },
    form: {
      title: "Begär offert",
      lead: "Berätta kort om jobbet så hör vi av oss. Du kan också ringa direkt.",
      name: "Namn",
      phone: "Telefon",
      email: "E-post",
      location: "Ort",
      type: "Typ av arbete",
      types: { indoor: "Inomhus", outdoor: "Utomhus", both: "Båda" },
      message: "Meddelande",
      messageHint: "Vad ska målas, ungefärlig storlek och när det skulle passa.",
      contactHint: "Fyll i telefon eller e-post, så vi kan nå dig.",
      submit: "Skicka förfrågan",
      sending: "Skickar…",
      successTitle: "Tack för din förfrågan!",
      success:
        "Det här är en demo, så inget skickades. På den färdiga webbplatsen går förfrågan direkt till KMS.",
      again: "Fyll i en ny förfrågan",
      errName: "Skriv ditt namn.",
      errContact: "Fyll i telefonnummer eller e-post.",
      errEmail: "E-postadressen ser inte rätt ut, t.ex. namn@exempel.fi.",
      required: "obligatoriskt",
    },
    contact: {
      title: "Kontakt",
      lead: "Ring gärna direkt – det är oftast snabbast.",
      mobile: "Mobil",
      office: "Kontoret",
      phone: "Telefon",
      email: "E-post",
      address: "Adress",
      openMap: "Öppna i Google Maps",
      mapTitle: "Karta till Vassorbyvägen 129, Vassor",
    },
    footer: { site: "Webbplats: Fusion Sites", contact: "Kontakt", y: "Y-tunnus" },
  },

  fi: {
    companyName: "Mustasaaren Maalauspalvelu Oy",
    demo: "Demo – toteutus Fusion Sites",
    meta: {
      title: "KMS – Mustasaaren Maalauspalvelu Oy | Maalausta Mustasaaressa vuodesta 1984",
      description:
        "Sisä- ja ulkomaalaukset koteihin, yrityksiin ja kirkkoihin Mustasaaressa ja Pohjanmaalla. Perheyritys Vassorista vuodesta 1984.",
    },
    nav: {
      services: "Palvelut",
      churches: "Kirkot",
      advice: "Värineuvonta",
      gallery: "Kuvat",
      about: "Meistä",
      contact: "Yhteystiedot",
    },
    menu: { open: "Avaa valikko", close: "Sulje valikko" },
    langLabel: "Valitse kieli",
    call: "Soita meille",
    callShort: "Soita",
    quote: "Pyydä tarjous",
    hero: {
      title: "Maalausta Mustasaaressa vuodesta 1984",
      lead: "Sisä- ja ulkomaalaukset koteihin, yrityksiin ja kirkkoihin – pienistä remonteista suuriin uudiskohteisiin ja julkisivuihin.",
      callNote: "Stig Beijar vastaa numerossa 0500 364 889",
      imageLabel: "Julkisivumaalaus nostolavalta",
    },
    placeholder: "Paikkamerkki",
    trust: [
      { title: "Vuodesta 1984", sub: "Perheyritys Vassorista" },
      { title: "8 työntekijää", sub: "sekä kausityöntekijät" },
      { title: "3 omaa nostolavaa", sub: "jopa 23 m työkorkeus" },
      { title: "Rehellisyys on mottomme", sub: "suoraa puhetta maaleista ja työstä" },
    ],
    services: {
      title: "Tätä maalaamme",
      lead: "Isot ja pienet työt – omakotitaloista ja remonteista uudisrakennuksiin ja julkisivuihin.",
      indoor: "Sisämaalaus",
      outdoor: "Ulkomaalaus",
      items: {
        paint: "Maalaus ja tapetointi",
        bath: "Kylpyhuoneremontit",
        floor: "Mattotyöt",
        small: "Pienremontit",
        facade: "Kaikenlaiset julkisivut",
        roof: "Peltikatot",
        joints: "Elementtisaumaukset",
        wash: "Julkisivujen ja kattojen pesut",
        chimney: "Savupiippujen kunnostukset",
      },
    },
    churches: {
      title: "Kirkot, jotka olemme maalanneet",
      lead: "Kirkot vaativat huolellisuutta, oikeat maalivalinnat ja kalustoa korkeisiin kohteisiin. Näiden kirkkojen maalaus on uskottu meille.",
      names: ["Kruunupyy", "Oravainen", "Maksamaa", "Maalahti", "Petolahti", "Korsnäs", "Karstula"],
    },
    advice: {
      title: "Oikea maali oikeaan paikkaan",
      lead: "Monet vanhat maalit sisälsivät myrkyllisiä aineita, eikä jokainen maali sovi jokaiselle pinnalle. Kerromme rehellisesti, mitä maalia suosittelemme ja miksi.",
      points: [
        "Katsomme pohjan ja aiemmat maalikerrokset ennen kuin valitsemme maalin.",
        "Tiedämme, mitä vanhoissa maalikerroksissa pitää varoa.",
        "Neuvomme perustuvat yli 40 vuoden kokemukseen maalaustöistä Pohjanmaalla.",
      ],
      motto: "Rehellisyys on mottomme!",
    },
    gallery: {
      title: "Kuvia töistämme",
      note: "Kuvat ovat paikkamerkkejä, ja ne vaihdetaan KMS:n omiin valokuviin.",
      items: {
        facade: "Julkisivumaalaus",
        church: "Kirkon maalaus",
        lift: "Nostolava työssä",
        indoor: "Sisämaalaus",
        roof: "Peltikatto",
        wallpaper: "Tapetointi",
      },
    },
    about: {
      title: "Perheyritys Vassorista",
      body: [
        "KMS – Mustasaaren Maalauspalvelu Oy:n perustivat Stig ja Åke Beijar vuonna 1984. Nykyään meillä on 8 työntekijää sekä tarvittaessa kausityöntekijöitä.",
        "Teemme sekä isoja että pieniä töitä: omakotitaloja, uudisrakennuksia, remontteja, julkisivuja ja pienempiä rakennusremontteja. Kolmella omalla nostolavalla, joista uusimmassa on 23 metrin työkorkeus, ulotumme myös korkeisiin julkisivuihin.",
      ],
      facts: [
        { label: "Perustettu", value: "1984" },
        { label: "Perustajat", value: "Stig ja Åke Beijar" },
        { label: "Henkilöstö", value: "8 työntekijää + kausityöntekijät" },
        { label: "Nostolavat", value: "3 kpl, uusin 23 m" },
      ],
      photo: "Tiimikuva",
    },
    form: {
      title: "Pyydä tarjous",
      lead: "Kerro lyhyesti työstä, niin otamme yhteyttä. Voit myös soittaa suoraan.",
      name: "Nimi",
      phone: "Puhelin",
      email: "Sähköposti",
      location: "Paikkakunta",
      type: "Työn tyyppi",
      types: { indoor: "Sisätyö", outdoor: "Ulkotyö", both: "Molemmat" },
      message: "Viesti",
      messageHint: "Mitä maalataan, arvioitu koko ja milloin työ sopisi.",
      contactHint: "Anna puhelinnumero tai sähköposti, jotta tavoitamme sinut.",
      submit: "Lähetä tarjouspyyntö",
      sending: "Lähetetään…",
      successTitle: "Kiitos tarjouspyynnöstäsi!",
      success:
        "Tämä on demo, joten mitään ei lähetetty. Valmiilla sivustolla pyyntö menee suoraan KMS:lle.",
      again: "Täytä uusi pyyntö",
      errName: "Kirjoita nimesi.",
      errContact: "Anna puhelinnumero tai sähköposti.",
      errEmail: "Sähköpostiosoite ei näytä oikealta, esim. nimi@esimerkki.fi.",
      required: "pakollinen",
    },
    contact: {
      title: "Yhteystiedot",
      lead: "Soita suoraan – se on yleensä nopeinta.",
      mobile: "Matkapuhelin",
      office: "Toimisto",
      phone: "Puhelin",
      email: "Sähköposti",
      address: "Osoite",
      openMap: "Avaa Google Mapsissa",
      mapTitle: "Kartta: Vassorbyvägen 129, Vassor",
    },
    footer: { site: "Verkkosivut: Fusion Sites", contact: "Yhteystiedot", y: "Y-tunnus" },
  },
};
