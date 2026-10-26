import React, { Component, Fragment as F } from "react";
import { createRoot } from "react-dom/client";

function camel(s) { return s.replace(/-([a-z])/g, (_, c) => c.toUpperCase()); }
function parseStyle(s) {
  const o = {};
  String(s).split(";").forEach((d) => {
    const i = d.indexOf(":");
    if (i < 0) return;
    const k = d.slice(0, i).trim(); const val = d.slice(i + 1).trim();
    if (k) o[k.startsWith("--") ? k : camel(k)] = val;
  });
  return o;
}
function h(tag, props, ...kids) {
  if (props && typeof props.style === "string") props = { ...props, style: parseStyle(props.style) };
  if (props && (tag === "input" || tag === "textarea") && "value" in props && !props.onChange) props = { ...props, readOnly: true };
  return React.createElement(tag, props, ...kids);
}

var TT = {
  en: {
    navHome: "Home", navHow: "How it works", navDocs: "My documents", navHelp: "Help", addLetter: "Add a letter", menu: "Menu", stepsLbl: "Your progress",
    stepAdd: "Add letter", stepRead: "Reading", stepAns: "Your answers", stepSend: "What to send", stepWord: "Step",
    crumbLetter: "SNAP letter", dueChip: "Due Oct 15, in 12 days",
    h1: "Understand your letters.", lead: "Take a photo of any official letter. We tell you what it says, what to send, and when it’s due.",
    cta: "Take a photo of your letter", ctaAlt: "Upload a file", meta1: "No account needed", meta2: "About 15 seconds",
    pvLbl: "Example: a letter next to what it means in plain words", pvTag: "What it means", pv1: "Send your papers by Oct 15. That’s 12 days from now.", pv2: "They need 3 things: pay stubs, proof of rent, and a utility bill.",
    howH: "How it works", howSub: "Three steps, in English or Spanish.",
    hw1: "Add your letter", hw1s: "Take a photo, upload a file, or paste the text.", hw2: "We read it for you", hw2s: "You get what it says in plain words, with the important parts marked on your letter.",
    hw3: "Know your next move", hw3s: "See what to send, when it’s due, and get a text reminder if you want one.",
    typesH: "Letters people bring to TwistText", types: ["SNAP food benefits", "Medicaid and CHIP", "Housing and rent", "Utility shutoff notices", "Unemployment", "School notices"],
    storiesH: "From people who used it", storyDl: "Deadline",
    privH: "Your letter stays yours",
    priv1: "No account to start", priv1s: "Open the site and add your letter. That’s it.",
    priv2: "Private by default", priv2s: "We only read it to help you. We never share or sell it.",
    priv3: "Delete anytime", priv3s: "Remove your letter photo whenever you want. Your checklist stays.",
    bandH: "Got a letter you’re not sure about?",
    footNote: "TwistText explains official letters in plain words. It isn’t legal advice, and you send your papers yourself.", fPriv: "Privacy",
    addH: "Add your letter", addSub: "Take a photo, upload a file, or paste the text.",
    tipsH: "For the best results", tip1T: "Add every page", tip1S: "Letters often have more than one page.", tip3T: "Use good light", tip3S: "Lay the page flat near a window or lamp.",
    tip2T: "Your letter stays private", tip2S: "We only read it to help you.",
    howAdd: "How to add your letter", tabPhoto: "Take a photo", tabUpload: "Upload a file", tabPaste: "Paste text",
    vfLbl: "Camera view of your letter", camHold: "Hold steady", camGood: "Looks good", camClose: "Too close. Move your phone back.", camBlurry: "Too blurry. Hold still.",
    hintHold: "Fit the whole page inside the frame.", hintGood: "Tap the button to add this page.", hintWarn: "Fix this first so we can read it.",
    capture: "Capture page", demoLbl: "Prototype: try a camera state", demoNormal: "Normal", demoClose: "Too close", demoBlurry: "Too blurry", demoBlocked: "Camera blocked",
    blockedT: "Your camera is blocked", blockedS: "Allow camera access in your browser settings, or upload a file.", uploadInstead: "Upload a file", tryAgain: "Try camera again",
    qrT: "Use your phone", qrS: "Scan this code to add pages from your phone’s camera.",
    failBlurryT: "That photo was too blurry", failCloseT: "The page didn’t fit", failS: "Hold your phone steady over the page, in good light, with all four corners showing.", scanAgain: "Scan again",
    upT: "Drag your letter here", upAgainT: "Try another file", upS: "PDF, JPG or PNG, up to 20 MB", choose: "Choose a file", uploadAgain: "Choose another file",
    upErrT: "We couldn’t open that file", upErrS: "Try a PDF, JPG or PNG under 20 MB.", simErr: "Prototype: simulate a bad file",
    pasteLbl: "Paste the text of your letter", pastePh: "Paste the full letter here", pasteBtn: "Use this text", fromClip: "Paste from clipboard", clear: "Clear", sample: "Prototype: use sample text",
    pasteErrT: "We couldn’t read this text", pasteErrS: "It’s too short to be a letter. Paste the whole letter and try again.",
    pagesT: "Your pages", noPages: "No pages yet", emptyT: "No pages yet", emptyS: "Pages you add show up here.",
    addAnother: "Add another page", addFirst: "Add a page", readBtn: "Read my letter", needPage: "Add at least one page to continue.",
    page: "Page", pg1: "1 page", pgN: "pages", remove: "Remove", kPhoto: "Photo", kPdf: "File", kText: "Text",
    pageAdded: "added", clipErr: "Couldn’t read your clipboard. Paste with Ctrl+V or ⌘+V.",
    readingH: "Reading your letter", readingSub: "This takes about 15 seconds. You can leave this page open.", pageOf: "Page 1 of",
    stage1: "Reading the text", stage2: "Finding your deadline", stage3: "Listing what to send", done: "Done", working: "Working", upNext: "Next",
    found: "Found so far", chipDeadline: "Deadline: Oct 15", chipDocs: "3 documents to send", chipWhere: "Where to send them",
    secsA: "About", secsB: "seconds left", almost: "Almost done", cancel: "Cancel",
    ansH: "Here’s what your letter says", ansSub: "From Texas Health and Human Services, about your SNAP food benefits.",
    plainT: "In plain words", plainM: "Tap a line to see it on your letter",
    a1k: "What this is", a1v: "Texas Health and Human Services needs more information to keep your SNAP food benefits.",
    a2k: "What they need from you", a2v: "3 documents: pay stubs, proof of rent, and a utility bill.",
    a3k: "When it’s due", a3v: "Oct 15", inDays: "in 12 days", seeIn: "Show in letter", letterLbl: "Your letter, with the parts we found highlighted",
    nextT: "What to do next", nx1: "Gather your 3 documents", nx1s: "We’ll check each one before you send it.", nx2: "Get a reminder", nx3: "Still have questions?", nx3s: "Ask about anything in your letter.",
    seeWhat: "See what to send", remind: "Remind me", ask: "Ask a question", askBtn: "Ask TwistText",
    viewLbl: "Letter or assistant", tabLetter: "Your letter", pageOne: "Page 1 of 1", hintPick: "Choose a line on the left", hintShowing: "Showing line",
    asstName: "TwistText Assistant", asstSub: "Answers from your letter only",
    hi: "Hi Angelica. I’ve read your letter. I can read it to you, show you what to do, or answer questions.",
    qRead: "Read it to me", qShow: "Show me what to do", qDue: "When is it due?", qFirst: "What do I send first?",
    aRead: "Reading your letter out loud now. Tap the speaker anytime to hear my last answer again.",
    aShow: "Here’s the plan: 1) Gather your 3 documents. 2) Check each one here. 3) Send them before Oct 15.",
    aDue: "It’s due Oct 15. That’s 12 days from now. Want a text reminder?",
    aFirst: "Start with your pay stubs. You need the ones from the last 30 days.",
    aDefault: "I can only answer from your letter. It asks for 3 documents by Oct 15. Try asking what to send first.",
    step1of3: "Step 1 of 3", payStubs: "Pay stubs", openChecklist: "Open checklist", seeP1: "See it on your letter",
    ph: "Ask about your letter", readAloud: "Read last answer out loud", talk: "Talk instead of typing", sendMsg: "Send", typing: "Assistant is typing",
    listening: "Go ahead, Angelica. I’m listening.", heard: "Got it. One second.", tapToTalk: "Tap to talk", stopListening: "Listening. Tap to stop.", typeInstead: "Type instead",
    disc: "I’m AI and can make mistakes. You send your papers yourself.",
    sendH: "What to send", sendSub: "Gather these 3 documents. Check each one before you send it.",
    docsListT: "Documents to send", ofChecked: "of 3 checked", sendFoot: "Checked documents are saved in My documents.",
    d1: "Pay stubs for the last 30 days", d1s: "From every job in your home, with your name and pay dates.",
    d2: "Proof of rent", d2s: "A receipt or your lease, with your name and address.",
    d3: "Utility bill with your address", d3s: "Electric, gas, or water, from the last 60 days.",
    d2problem: "Your name isn’t on this receipt. Use your lease, or a receipt that shows your name.",
    checkIt: "Check it", recheck: "Check again", fixIt: "Replace", goDocs: "Go to my documents", howSend: "How to send them",
    remT: "Get a reminder", remS: "We can text you before the deadline. It’s optional. Reply STOP anytime.",
    remSOn: "We’ll text you 7 days and 2 days before Oct 15. Reply STOP anytime.", remBtn: "Text me reminders", remOn: "Reminders on", turnOff: "Turn off",
    docsH: "My documents", docsSub: "Everything for your SNAP letter, in one place.", letterT: "SNAP renewal letter", letterK: "Texas Health and Human Services",
    readyOf: "of 3 documents ready", allReady: "All 3 documents ready to send", saved: "Letter photo saved on this device",
    ready: "Ready", view: "View", problem: "Needs a fix", missing: "Not added", add: "Add", checkDoc: "Check next document", reopen: "Open my answers",
    ctrlT: "You’re in control", ctrlS: "Your letter photo stays on this device only. Delete it anytime. Your deadline and checklist stay either way.",
    del: "Delete letter photo", deleted: "Letter photo deleted", delT: "Delete your letter photo?", delS: "Your deadline and checklist will stay.", delete: "Delete photo", keep: "Keep it",
    checkT: "Check:", checkS: "Take a photo or upload it. We’ll make sure it matches what your letter asks for.", checking: "Checking your document",
    okT: "Looks good", okS: "This matches what your letter asks for.", probT: "This one needs a fix", tryOther: "Try another document", later: "Do it later",
    nextDoc: "Check the next one", finish: "Done",
    howS: "Your letter lists 3 ways. Pick the one that’s easiest for you.",
    how1: "Online", how1s: "Upload them at YourTexasBenefits.com", how2: "Fax", how2s: "Use the fax number on page 2 of your letter",
    how3: "Mail or in person", how3s: "Use the address on page 2 of your letter", howTip: "Tip: write your case number on every page you send.",
    phoneLbl: "Mobile number", phoneErr: "Enter a 10-digit phone number.", remConsent: "We’ll text you 7 days and 2 days before Oct 15. Message and data rates may apply. Reply STOP to cancel.",
    turnOn: "Turn on reminders", notNow: "Not now", remToast: "Reminders on. We’ll text you before Oct 15.", remOffToast: "Reminders turned off",
    close: "Close", viewToast: "Opening", delToast: "Letter photo deleted. Your checklist stays.", soonToast: "This page isn’t part of the prototype yet"
  },
  es: {
    navHome: "Inicio", navHow: "Cómo funciona", navDocs: "Mis documentos", navHelp: "Ayuda", addLetter: "Agregar carta", menu: "Menú", stepsLbl: "Tu progreso",
    stepAdd: "Agregar carta", stepRead: "Leyendo", stepAns: "Tus respuestas", stepSend: "Qué enviar", stepWord: "Paso",
    crumbLetter: "Carta de SNAP", dueChip: "Vence el 15 oct, en 12 días",
    h1: "Entiende tus cartas.", lead: "Toma una foto de cualquier carta oficial. Te decimos qué dice, qué enviar y cuándo vence.",
    cta: "Toma una foto de tu carta", ctaAlt: "Subir un archivo", meta1: "No necesitas cuenta", meta2: "Unos 15 segundos",
    pvLbl: "Ejemplo: una carta junto a lo que significa en palabras sencillas", pvTag: "Lo que significa", pv1: "Envía tus papeles antes del 15 oct. Faltan 12 días.", pv2: "Necesitan 3 cosas: talones de pago, prueba de renta y un recibo de servicios.",
    howH: "Cómo funciona", howSub: "Tres pasos, en inglés o en español.",
    hw1: "Agrega tu carta", hw1s: "Toma una foto, sube un archivo o pega el texto.", hw2: "La leemos por ti", hw2s: "Te decimos qué dice en palabras sencillas y marcamos lo importante en tu carta.",
    hw3: "Sabe qué hacer después", hw3s: "Qué enviar, cuándo vence y un recordatorio por mensaje si lo quieres.",
    typesH: "Cartas que la gente trae a TwistText", types: ["Beneficios de comida SNAP", "Medicaid y CHIP", "Vivienda y renta", "Avisos de corte de servicios", "Desempleo", "Avisos de la escuela"],
    storiesH: "De personas que lo usaron", storyDl: "Fecha límite",
    privH: "Tu carta es tuya",
    priv1: "Sin cuenta para empezar", priv1s: "Abre el sitio y agrega tu carta. Eso es todo.",
    priv2: "Privada desde el inicio", priv2s: "Solo la leemos para ayudarte. Nunca la compartimos ni la vendemos.",
    priv3: "Bórrala cuando quieras", priv3s: "Quita la foto de tu carta cuando quieras. Tu lista se queda.",
    bandH: "¿Tienes una carta que no entiendes?",
    footNote: "TwistText explica cartas oficiales en palabras sencillas. No es asesoría legal y tú envías tus papeles.", fPriv: "Privacidad",
    addH: "Agrega tu carta", addSub: "Toma una foto, sube un archivo o pega el texto.",
    tipsH: "Para mejores resultados", tip1T: "Agrega todas las páginas", tip1S: "Muchas cartas tienen más de una página.", tip3T: "Usa buena luz", tip3S: "Pon la hoja plana cerca de una ventana o lámpara.",
    tip2T: "Tu carta es privada", tip2S: "Solo la leemos para ayudarte.",
    howAdd: "Cómo agregar tu carta", tabPhoto: "Tomar foto", tabUpload: "Subir archivo", tabPaste: "Pegar texto",
    vfLbl: "Vista de la cámara de tu carta", camHold: "No te muevas", camGood: "Se ve bien", camClose: "Muy cerca. Aleja tu teléfono.", camBlurry: "Muy borrosa. No te muevas.",
    hintHold: "Pon toda la página dentro del marco.", hintGood: "Toca el botón para agregar esta página.", hintWarn: "Corrige esto para que podamos leerla.",
    capture: "Tomar página", demoLbl: "Prototipo: prueba un estado de cámara", demoNormal: "Normal", demoClose: "Muy cerca", demoBlurry: "Muy borrosa", demoBlocked: "Cámara bloqueada",
    blockedT: "Tu cámara está bloqueada", blockedS: "Permite el acceso a la cámara en tu navegador, o sube un archivo.", uploadInstead: "Subir un archivo", tryAgain: "Probar la cámara otra vez",
    qrT: "Usa tu teléfono", qrS: "Escanea este código para agregar páginas con la cámara de tu teléfono.",
    failBlurryT: "La foto salió borrosa", failCloseT: "La página no cupo", failS: "Sostén el teléfono firme sobre la página, con buena luz y las cuatro esquinas a la vista.", scanAgain: "Escanear otra vez",
    upT: "Arrastra tu carta aquí", upAgainT: "Prueba con otro archivo", upS: "PDF, JPG o PNG, hasta 20 MB", choose: "Elegir archivo", uploadAgain: "Elegir otro archivo",
    upErrT: "No pudimos abrir ese archivo", upErrS: "Prueba con un PDF, JPG o PNG de menos de 20 MB.", simErr: "Prototipo: simular archivo dañado",
    pasteLbl: "Pega el texto de tu carta", pastePh: "Pega aquí la carta completa", pasteBtn: "Usar este texto", fromClip: "Pegar del portapapeles", clear: "Borrar", sample: "Prototipo: usar texto de ejemplo",
    pasteErrT: "No pudimos leer este texto", pasteErrS: "Es muy corto para ser una carta. Pega la carta completa e inténtalo otra vez.",
    pagesT: "Tus páginas", noPages: "Sin páginas", emptyT: "Sin páginas", emptyS: "Las páginas que agregues aparecen aquí.",
    addAnother: "Agregar otra página", addFirst: "Agregar una página", readBtn: "Leer mi carta", needPage: "Agrega al menos una página para seguir.",
    page: "Página", pg1: "1 página", pgN: "páginas", remove: "Quitar", kPhoto: "Foto", kPdf: "Archivo", kText: "Texto",
    pageAdded: "agregada", clipErr: "No pudimos leer el portapapeles. Pega con Ctrl+V o ⌘+V.",
    readingH: "Leyendo tu carta", readingSub: "Tarda unos 15 segundos. Puedes dejar esta página abierta.", pageOf: "Página 1 de",
    stage1: "Leyendo el texto", stage2: "Buscando tu fecha límite", stage3: "Haciendo la lista de qué enviar", done: "Listo", working: "Trabajando", upNext: "Sigue",
    found: "Encontrado hasta ahora", chipDeadline: "Fecha límite: 15 oct", chipDocs: "3 documentos por enviar", chipWhere: "Dónde enviarlos",
    secsA: "Faltan unos", secsB: "segundos", almost: "Casi listo", cancel: "Cancelar",
    ansH: "Esto dice tu carta", ansSub: "De Salud y Servicios Humanos de Texas, sobre tus beneficios de comida SNAP.",
    plainT: "En palabras sencillas", plainM: "Toca una línea para verla en tu carta",
    a1k: "Qué es", a1v: "Salud y Servicios Humanos de Texas necesita más información para mantener tus beneficios de comida SNAP.",
    a2k: "Qué necesitan de ti", a2v: "3 documentos: talones de pago, prueba de renta y un recibo de servicios.",
    a3k: "Cuándo vence", a3v: "15 oct", inDays: "en 12 días", seeIn: "Ver en la carta", letterLbl: "Tu carta, con las partes encontradas resaltadas",
    nextT: "Qué hacer ahora", nx1: "Junta tus 3 documentos", nx1s: "Revisamos cada uno antes de que lo envíes.", nx2: "Recibe un recordatorio", nx3: "¿Tienes preguntas?", nx3s: "Pregunta lo que quieras sobre tu carta.",
    seeWhat: "Ver qué enviar", remind: "Recordarme", ask: "Hacer una pregunta", askBtn: "Pregúntale a TwistText",
    viewLbl: "Carta o asistente", tabLetter: "Tu carta", pageOne: "Página 1 de 1", hintPick: "Elige una línea a la izquierda", hintShowing: "Mostrando línea",
    asstName: "Asistente TwistText", asstSub: "Solo responde sobre tu carta",
    hi: "Hola Angelica. Ya leí tu carta. Puedo leértela, mostrarte qué hacer o contestar tus preguntas.",
    qRead: "Léemela", qShow: "Muéstrame qué hacer", qDue: "¿Cuándo vence?", qFirst: "¿Qué envío primero?",
    aRead: "Te leo la carta en voz alta. Toca la bocina cuando quieras para oír mi última respuesta.",
    aShow: "Este es el plan: 1) Junta tus 3 documentos. 2) Revisa cada uno aquí. 3) Envíalos antes del 15 de octubre.",
    aDue: "Vence el 15 de octubre. Faltan 12 días. ¿Quieres un recordatorio por mensaje?",
    aFirst: "Empieza con tus talones de pago. Necesitas los de los últimos 30 días.",
    aDefault: "Solo puedo contestar sobre tu carta. Pide 3 documentos para el 15 de octubre. Pregúntame qué enviar primero.",
    step1of3: "Paso 1 de 3", payStubs: "Talones de pago", openChecklist: "Abrir la lista", seeP1: "Verlo en tu carta",
    ph: "Pregunta sobre tu carta", readAloud: "Leer en voz alta la última respuesta", talk: "Hablar en vez de escribir", sendMsg: "Enviar", typing: "El asistente está escribiendo",
    listening: "Adelante, Angelica. Te escucho.", heard: "Entendido. Un segundo.", tapToTalk: "Toca para hablar", stopListening: "Escuchando. Toca para parar.", typeInstead: "Mejor escribir",
    disc: "Soy IA y puedo equivocarme. Tú envías tus papeles.",
    sendH: "Qué enviar", sendSub: "Junta estos 3 documentos. Revisa cada uno antes de enviarlo.",
    docsListT: "Documentos por enviar", ofChecked: "de 3 revisados", sendFoot: "Los documentos revisados se guardan en Mis documentos.",
    d1: "Talones de pago de los últimos 30 días", d1s: "De cada trabajo en tu hogar, con tu nombre y las fechas de pago.",
    d2: "Prueba de renta", d2s: "Un recibo o tu contrato, con tu nombre y dirección.",
    d3: "Recibo de servicios con tu dirección", d3s: "Luz, gas o agua, de los últimos 60 días.",
    d2problem: "Tu nombre no aparece en este recibo. Usa tu contrato o un recibo con tu nombre.",
    checkIt: "Revisar", recheck: "Revisar otra vez", fixIt: "Cambiar", goDocs: "Ir a mis documentos", howSend: "Cómo enviarlos",
    remT: "Recibe un recordatorio", remS: "Te podemos mandar un mensaje antes de la fecha límite. Es opcional. Responde STOP cuando quieras.",
    remSOn: "Te escribimos 7 días y 2 días antes del 15 de octubre. Responde STOP cuando quieras.", remBtn: "Mándame recordatorios", remOn: "Recordatorios activos", turnOff: "Apagar",
    docsH: "Mis documentos", docsSub: "Todo lo de tu carta de SNAP, en un solo lugar.", letterT: "Carta de renovación de SNAP", letterK: "Salud y Servicios Humanos de Texas",
    readyOf: "de 3 documentos listos", allReady: "Los 3 documentos están listos para enviar", saved: "Foto de la carta guardada en este dispositivo",
    ready: "Listo", view: "Ver", problem: "Hay que corregir", missing: "Sin agregar", add: "Agregar", checkDoc: "Revisar el siguiente", reopen: "Abrir mis respuestas",
    ctrlT: "Tú tienes el control", ctrlS: "La foto de tu carta se queda solo en este dispositivo. Bórrala cuando quieras. Tu fecha límite y tu lista se quedan igual.",
    del: "Borrar la foto de la carta", deleted: "Foto de la carta borrada", delT: "¿Borrar la foto de tu carta?", delS: "Tu fecha límite y tu lista se quedan.", delete: "Borrar foto", keep: "Guardarla",
    checkT: "Revisar:", checkS: "Toma una foto o súbela. Revisamos que sea lo que pide tu carta.", checking: "Revisando tu documento",
    okT: "Se ve bien", okS: "Esto es lo que pide tu carta.", probT: "Hay que corregir este", tryOther: "Probar con otro documento", later: "Hacerlo después",
    nextDoc: "Revisar el siguiente", finish: "Listo",
    howS: "Tu carta da 3 opciones. Elige la más fácil para ti.",
    how1: "En línea", how1s: "Súbelos en YourTexasBenefits.com", how2: "Fax", how2s: "Usa el número de fax en la página 2 de tu carta",
    how3: "Por correo o en persona", how3s: "Usa la dirección en la página 2 de tu carta", howTip: "Consejo: escribe tu número de caso en cada página que envíes.",
    phoneLbl: "Número de celular", phoneErr: "Escribe un número de 10 dígitos.", remConsent: "Te escribimos 7 días y 2 días antes del 15 de octubre. Pueden aplicar cargos por mensajes y datos. Responde STOP para cancelar.",
    turnOn: "Activar recordatorios", notNow: "Ahora no", remToast: "Recordatorios activos. Te escribimos antes del 15 de octubre.", remOffToast: "Recordatorios apagados",
    close: "Cerrar", viewToast: "Abriendo", delToast: "Foto borrada. Tu lista se queda.", soonToast: "Esta página aún no está en el prototipo"
  }
};

var PEOPLE = [
  { name: "Alejandra S.", init: "AS", city: "El Paso, TX", date: { en: "Oct 15", es: "15 oct" },
    quote: { en: "Now I know what to send and when.", es: "Ahora sé qué enviar y cuándo." } },
  { name: "Manuel L.", init: "ML", city: "McAllen, TX", date: { en: "Jan 21", es: "21 ene" },
    quote: { en: "I sent everything before the deadline.", es: "Envié todo antes de la fecha límite." } }
];

var SAMPLE = "TEXAS HEALTH AND HUMAN SERVICES\nRequest for Information or Action\n\nDear Angelica,\nWe need more information to decide if you can keep getting SNAP food benefits.\n\nPlease return the following by: 10/15/2026\n1. Pay stubs for the last 30 days\n2. Proof of rent (receipt or lease)\n3. Utility bill with your address\n\nIf we do not get this information by the due date, your benefits may stop.";

var STEP_KEYS = ["add", "reading", "answers", "send"];

class App extends Component {
  constructor(props) {
    super(props);
    this.timers = [];
    this.pasteRef = { current: null };
    this.fileRef = { current: null };
    this.msgsRef = { current: null };
    this.howRef = { current: null };
    this.state = {
      screen: "welcome", lang: "en", maxStep: -1, menuOpen: false,
      method: "photo", cam: "aligning", failReason: "blurry", demo: "normal",
      pages: [], upErr: false, pasteText: "", pasteErr: false, nextId: 1,
      stage: 0,
      highlight: 0, asst: "closed", listening: false, voiceHeard: false, typing: false,
      msgs: [{ from: "ai", key: "hi" }], chatInput: "",
      docs: ["missing", "missing", "missing"], checksDone: { 1: 0 },
      modal: null, check: null, phone: "", phoneErr: false, remOn: false, photoDeleted: false,
      toast: ""
    };
  }

  componentDidMount() {
    var s = this.props.startScreen;
    if (s && s !== "welcome") this.go(s);
  }
  componentDidUpdate(prev) {
    if (prev.startScreen !== this.props.startScreen && this.props.startScreen) this.go(this.props.startScreen);
    var el = this.msgsRef && this.msgsRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }
  componentWillUnmount() { this.clearTimers(); this.stopSpeech(); }

  later(fn, ms) { var id = setTimeout(fn, ms); this.timers.push(id); return id; }
  clearTimers() { this.timers.forEach(function (id) { clearTimeout(id); }); this.timers = []; }
  stopSpeech() { try { if (window.speechSynthesis) window.speechSynthesis.cancel(); } catch (e) {} }
  T() { return TT[this.state.lang]; }

  showToast(msg) {
    this.setState({ toast: msg });
    if (this.toastT) clearTimeout(this.toastT);
    this.toastT = setTimeout(() => this.setState({ toast: "" }), 3200);
  }

  go(screen) {
    this.clearTimers();
    var idx = STEP_KEYS.indexOf(screen);
    var patch = { screen: screen, modal: null, highlight: 0, menuOpen: false };
    var max = this.state.maxStep;
    if (idx > max) max = idx;
    if (screen === "answers" || screen === "send" || screen === "docs") {
      if (this.state.pages.length === 0) patch.pages = [{ id: 99, kind: "photo" }];
      max = Math.max(max, screen === "answers" ? 2 : 3);
    }
    patch.maxStep = max;
    if (screen !== "answers") { patch.asst = "closed"; patch.listening = false; }
    this.setState(patch);
    if (screen === "add" && this.state.method === "photo") this.startCam(this.state.demo);
    if (screen === "reading") this.startReading();
    try { window.scrollTo({ top: 0, behavior: "smooth" }); } catch (e) {}
  }

  startCam(demo) {
    var d = demo || "normal";
    if (d === "blocked") { this.setState({ cam: "blocked", demo: d }); return; }
    if (d === "close") { this.setState({ cam: "close", demo: d }); return; }
    if (d === "blurry") { this.setState({ cam: "blurry", demo: d }); return; }
    this.setState({ cam: "aligning", demo: "normal" });
    this.later(() => { if (this.state.cam === "aligning") this.setState({ cam: "good" }); }, 1400);
  }

  addPage(kind) {
    var id = this.state.nextId;
    var pages = this.state.pages.concat([{ id: id, kind: kind }]);
    this.setState({ pages: pages, nextId: id + 1, upErr: false, pasteErr: false });
    var t = this.T();
    this.showToast(t.page + " " + pages.length + " " + t.pageAdded);
  }

  capture() {
    var c = this.state.cam;
    if (c === "good") { this.addPage("photo"); this.startCam("normal"); return; }
    if (c === "aligning") { this.showToast(this.T().camHold); return; }
    if (c === "close" || c === "blurry") this.setState({ cam: "failed", failReason: c });
  }

  startReading() {
    this.stopSpeech();
    this.setState({ stage: 0 });
    var tick = () => {
      var s = this.state.stage + 1;
      if (s <= 3) { this.setState({ stage: s }); this.later(tick, 1300); }
      else this.later(() => this.go("answers"), 600);
    };
    this.later(tick, 1100);
  }

  speak(text) {
    try {
      if (!window.speechSynthesis) { this.showToast(text); return; }
      this.stopSpeech();
      var u = new SpeechSynthesisUtterance(text);
      u.lang = this.state.lang === "es" ? "es-US" : "en-US";
      u.rate = 0.95;
      window.speechSynthesis.speak(u);
    } catch (e) { this.showToast(text); }
  }

  ask(key, raw) {
    var me = raw ? { from: "me", raw: raw } : { from: "me", key: key };
    this.setState({ msgs: this.state.msgs.concat([me]), typing: true, chatInput: "", asst: "chat", listening: false });
    var ansKey = key;
    if (raw) {
      var q = raw.toLowerCase();
      if (/first|primero|start|empez/.test(q)) ansKey = "qFirst";
      else if (/due|when|deadline|vence|cu[aá]ndo|fecha/.test(q)) ansKey = "qDue";
      else if (/read|le[eé]/.test(q)) ansKey = "qRead";
      else if (/what.*do|plan|qu[eé] hago|hacer|show/.test(q)) ansKey = "qShow";
      else ansKey = "other";
    }
    var map = { qRead: "aRead", qShow: "aShow", qDue: "aDue", qFirst: "aFirst", other: "aDefault" };
    var reply = { from: "ai", key: map[ansKey], card: ansKey === "qFirst", see: ansKey === "qFirst" ? 2 : (ansKey === "qDue" ? 3 : 0) };
    this.later(() => {
      this.setState({ msgs: this.state.msgs.concat([reply]), typing: false });
      if (ansKey === "qRead") this.speak(SAMPLE);
    }, 900);
  }

  scrollToHow() {
    var doScroll = () => {
      var el = this.howRef.current;
      if (!el) return;
      try { el.scrollIntoView({ behavior: "smooth", block: "start" }); } catch (e) { el.scrollIntoView(); }
    };
    this.setState({ menuOpen: false, modal: null });
    if (this.state.screen !== "welcome") { this.go("welcome"); setTimeout(doScroll, 150); } else doScroll();
  }

  openCheck(i) { this.setState({ modal: "check", check: { idx: i, phase: "pick" } }); }

  runCheck() {
    var c = this.state.check; if (!c) return;
    this.setState({ check: { idx: c.idx, phase: "running" } });
    this.later(() => {
      var tries = this.state.checksDone[c.idx] || 0;
      var bad = c.idx === 1 && tries === 0;
      var docs = this.state.docs.slice();
      docs[c.idx] = bad ? "problem" : "ready";
      var cd = Object.assign({}, this.state.checksDone); cd[c.idx] = tries + 1;
      this.setState({ docs: docs, checksDone: cd, check: { idx: c.idx, phase: bad ? "prob" : "ok" } });
    }, 1600);
  }

  renderVals() {
    var st = this.state, t = this.T(), lang = st.lang, self = this, scr = st.screen;

    // nav
    var navDefs = [["welcome", t.navHome], ["how", t.navHow], ["docs", t.navDocs]];
    var navItems = navDefs.map(function (n) {
      var on = n[0] === scr;
      var act = function () { if (n[0] === "how") self.scrollToHow(); else self.go(n[0]); };
      return { label: n[1], cls: "nl" + (on ? " on" : ""), current: on ? "page" : undefined, go: act, goClose: act };
    });

    // stepper
    var labels = [t.stepAdd, t.stepRead, t.stepAns, t.stepSend];
    var curIdx = STEP_KEYS.indexOf(scr);
    var steps = labels.map(function (label, i) {
      var isCur = i === curIdx;
      var isDone = !isCur && i <= st.maxStep && (curIdx === -1 || i < curIdx || i <= st.maxStep);
      var reachable = isDone && STEP_KEYS[i] !== "reading";
      return { label: label, n: i + 1, cls: "st" + (isCur ? " cur" : isDone ? " done" : ""),
        isDone: isDone, notDone: !isDone, current: isCur ? "step" : undefined, disabled: !reachable,
        go: function () { if (reachable) self.go(STEP_KEYS[i]); } };
    });
    var titles = { add: [t.addH, t.addSub], reading: [t.readingH, t.readingSub], answers: [t.ansH, t.ansSub], send: [t.sendH, t.sendSub], docs: [t.docsH, t.docsSub] };
    var tt = titles[scr] || ["", ""];

    // stories
    var stories = PEOPLE.map(function (P) { return { name: P.name, init: P.init, city: P.city, quote: P.quote[lang], dl: t.storyDl + ": " + P.date[lang] }; });

    // camera
    var cam = st.cam;
    var camLive = cam === "aligning" || cam === "good" || cam === "close" || cam === "blurry";
    var warn = cam === "close" || cam === "blurry";
    var badgeTxt = cam === "good" ? t.camGood : cam === "close" ? t.camClose : cam === "blurry" ? t.camBlurry : t.camHold;
    var demoDefs = [["normal", t.demoNormal], ["close", t.demoClose], ["blurry", t.demoBlurry], ["blocked", t.demoBlocked]];
    var demos = demoDefs.map(function (d) { var on = st.demo === d[0]; return { label: d[1], on: on, cls: "demo-chip" + (on ? " on" : ""), pick: function () { self.clearTimers(); self.startCam(d[0]); } }; });

    // pages
    var n = st.pages.length;
    var pages = st.pages.map(function (pg, i) {
      return { label: t.page + " " + (i + 1), kind: pg.kind === "pdf" ? t.kPdf : pg.kind === "text" ? t.kText : t.kPhoto,
        removeLbl: t.remove + " " + t.page + " " + (i + 1),
        remove: function () { self.setState({ pages: self.state.pages.filter(function (x) { return x.id !== pg.id; }) }); } };
    });
    var pgTxt = n === 1 ? t.pg1 : n + " " + t.pgN;

    // reading
    var sg = st.stage;
    var stages = [t.stage1, t.stage2, t.stage3].map(function (label, i) {
      var done = sg > i, active = sg === i;
      return { label: label, isDone: done, isActive: active, isPending: !done && !active,
        cls: "stage " + (done ? "done" : active ? "active" : "pending"), status: done ? t.done : active ? t.working : t.upNext };
    });
    var fchips = [[t.chipDeadline, sg >= 2], [t.chipDocs, sg >= 3], [t.chipWhere, sg >= 3]].map(function (c) { return { label: c[0], on: c[1], cls: "fchip" + (c[1] ? "" : " wait") }; });
    var secs = [12, 9, 5, 2][Math.min(sg, 3)];

    // answers
    var hl = st.highlight;
    var ans = [[1, t.a1k, t.a1v], [2, t.a2k, t.a2v], [3, t.a3k, t.a3v]].map(function (a) {
      var on = hl === a[0];
      return { n: a[0], k: a[1], v: a[2], on: on, isDate: a[0] === 3, notDate: a[0] !== 3,
        cls: on ? "on" : "", seeCls: "tbtn" + (on ? " on" : ""),
        see: function () { self.setState({ highlight: on ? 0 : a[0], asst: "closed", listening: false }); } };
    });
    var hlc = function (k) { return "lt-hl" + (hl === k ? " on" : ""); };

    // chat
    var msgs = st.msgs.map(function (m) {
      return { me: m.from === "me", ai: m.from === "ai", text: m.raw ? m.raw : t[m.key] || "", hasCard: !!m.card, hasSee: !!m.see,
        see: function () { self.setState({ highlight: m.see, asst: "closed" }); } };
    });
    var qchips = [["qRead", t.qRead], ["qShow", t.qShow], ["qDue", t.qDue], ["qFirst", t.qFirst]].map(function (q) { return { label: q[1], pick: function () { self.ask(q[0]); } }; });

    // docs
    var docTitles = [[t.d1, t.d1s], [t.d2, t.d2s], [t.d3, t.d3s]];
    var docs = st.docs.map(function (s, i) {
      return { title: docTitles[i][0], sub: docTitles[i][1], isReady: s === "ready", notReady: s !== "ready", isProblem: s === "problem", notProblem: s !== "problem", isMissing: s === "missing",
        tagCls: "tag " + (s === "ready" ? "ok" : s === "problem" ? "warn" : "miss"),
        tagLbl: s === "ready" ? t.ready : s === "problem" ? t.problem : t.missing,
        btnLbl: s === "ready" ? t.recheck : s === "problem" ? t.fixIt : t.checkIt,
        btnCls: "btn " + (s === "ready" ? "btn-outline" : s === "problem" ? "btn-orange" : "btn-navy"),
        check: function () { self.openCheck(i); },
        view: function () { self.showToast(t.viewToast + ": " + docTitles[i][0]); } };
    });
    var readyCount = st.docs.filter(function (s) { return s === "ready"; }).length;
    var allReady = readyCount === 3;

    var ck = st.check || { idx: 0, phase: "pick" };
    var nextMissing = st.docs.findIndex(function (s, i) { return s !== "ready" && i !== ck.idx; });
    var mic = st.listening;

    return {
      t: t, isEn: lang === "en", isEs: lang === "es",
      langEnCls: lang === "en" ? "on" : "", langEsCls: lang === "es" ? "on" : "",
      lpEnCls: "lp" + (lang === "en" ? " on" : ""), lpEsCls: "lp" + (lang === "es" ? " on" : ""),
      setEn: function () { self.setState({ lang: "en" }); }, setEs: function () { self.setState({ lang: "es" }); },
      navItems: navItems, menuOpen: st.menuOpen,
      toggleMenu: function () { self.setState({ menuOpen: !self.state.menuOpen }); },

      sWelcome: scr === "welcome", sAdd: scr === "add", sReading: scr === "reading", sAnswers: scr === "answers", sSend: scr === "send", sDocs: scr === "docs",
      inFlow: scr !== "welcome", showSteps: curIdx !== -1, steps: steps,
      crumb: scr === "docs" ? t.crumbLetter : t.crumbLetter, pageTitle: tt[0], pageSub: tt[1], showDue: st.maxStep >= 2 && scr !== "docs",
      goHome: function () { self.go("welcome"); },
      goAdd: function () { self.setState({ method: "photo" }, function () { self.go("add"); }); },
      goAddUpload: function () { self.setState({ method: "upload" }, function () { self.go("add"); }); },
      goDocs: function () { self.go("docs"); }, goSend: function () { self.go("send"); }, goAnswers: function () { self.go("answers"); },
      openHow: function () { self.scrollToHow(); },
      footPriv: function () { self.showToast(t.soonToast); }, footHelp: function () { self.showToast(t.soonToast); },

      types: t.types, stories: stories, howRef: this.howRef,

      mPhoto: st.method === "photo", mUpload: st.method === "upload", mPaste: st.method === "paste",
      tabPhotoCls: "tab" + (st.method === "photo" ? " on" : ""), tabUploadCls: "tab" + (st.method === "upload" ? " on" : ""), tabPasteCls: "tab" + (st.method === "paste" ? " on" : ""),
      tabPhoto: function () { self.clearTimers(); self.setState({ method: "photo" }); self.startCam(st.demo === "blocked" ? "blocked" : "normal"); },
      tabUpload: function () { self.clearTimers(); self.setState({ method: "upload" }); },
      tabPaste: function () { self.clearTimers(); self.setState({ method: "paste" }); },
      camLive: camLive, camBlocked: cam === "blocked", camFailed: cam === "failed",
      vfCls: "vf " + cam, badgeCls: "vf-badge" + (cam === "good" ? " good" : warn ? " warn" : ""), badgeTxt: badgeTxt,
      badgeGood: cam === "good", badgeWarn: warn,
      camHint: cam === "good" ? t.hintGood : warn ? t.hintWarn : t.hintHold,
      capture: function () { self.capture(); },
      retryCam: function () { self.clearTimers(); self.startCam("normal"); },
      failT: st.failReason === "close" ? t.failCloseT : t.failBlurryT,
      demos: demos,

      upErr: st.upErr, dropT: st.upErr ? t.upAgainT : t.upT, dropBtn: st.upErr ? t.uploadAgain : t.choose, fileRef: this.fileRef,
      onFile: function (e) {
        var f = e.target.files && e.target.files[0];
        if (!f) return;
        var ok = /^(image\/|application\/pdf)/.test(f.type) && f.size < 20 * 1024 * 1024;
        e.target.value = "";
        if (ok) self.addPage(f.type === "application/pdf" ? "pdf" : "photo"); else self.setState({ upErr: true });
      },
      simErr: function () { self.setState({ upErr: true }); },

      pasteText: st.pasteText, pasteErr: st.pasteErr, taCls: "ta" + (st.pasteErr ? " err" : ""), pasteRef: this.pasteRef,
      onPaste: function (e) { self.setState({ pasteText: e.target.value }); },
      submitPaste: function () {
        var v = self.state.pasteText.trim();
        if (v.length >= 120 && /\s/.test(v)) { self.addPage("text"); self.setState({ pasteText: "" }); } else self.setState({ pasteErr: true });
      },
      clearPaste: function () { self.setState({ pasteText: "", pasteErr: false }); var el = self.pasteRef.current; if (el) el.focus(); },
      fromClip: function () {
        try {
          navigator.clipboard.readText().then(function (txt) { self.setState({ pasteText: txt, pasteErr: false }); })
            .catch(function () { self.showToast(t.clipErr); });
        } catch (e) { self.showToast(t.clipErr); }
      },
      useSample: function () { self.setState({ pasteText: SAMPLE, pasteErr: false }); },

      pages: pages, hasPages: n > 0, noPages: n === 0, pagesMeta: n === 0 ? t.noPages : pgTxt,
      addAnotherLbl: n === 0 ? t.addFirst : t.addAnother,
      addAnother: function () {
        if (st.method === "upload") { var fi = self.fileRef.current; if (fi) fi.click(); }
        else if (st.method === "paste") { var el = self.pasteRef.current; if (el) el.focus(); }
        else { self.clearTimers(); self.startCam("normal"); }
      },
      readDisabled: n === 0, readLbl: n === 0 ? t.readBtn : t.readBtn + " (" + pgTxt + ")",
      readLetter: function () { if (self.state.pages.length) self.go("reading"); },

      stages: stages, fchips: fchips, secsTxt: sg >= 3 ? t.almost : t.secsA + " " + secs + " " + t.secsB, readPct: [8, 38, 70, 100][Math.min(sg, 3)],
      rdCap: t.pageOf + " " + Math.max(n, 1),
      rdHl3: "lt-hl" + (sg >= 2 ? " on" : ""), rdHl2: "lt-hl" + (sg >= 3 ? " soft" : ""),
      cancelReading: function () { self.clearTimers(); self.setState({ screen: "add", stage: 0 }); },

      ans: ans, hl1: hlc(1), hl2: hlc(2), hl3: hlc(3),
      viewerHint: hl ? t.hintShowing + " " + hl : t.hintPick,
      openRemind: function () { self.setState({ modal: "remind", phoneErr: false }); },
      asstOpen: st.asst !== "closed", asstClosed: st.asst === "closed", chatOn: st.asst === "chat", voiceOn: st.asst === "voice",
      vtLetterCls: "vtab" + (st.asst === "closed" ? " on" : ""), vtAskCls: "vtab" + (st.asst !== "closed" ? " on" : ""),
      openAsst: function () { self.setState({ asst: "chat", highlight: 0 }); },
      askFromAnywhere: function () { self.go("answers"); self.setState({ asst: "chat" }); },
      closeAsst: function () { self.stopSpeech(); self.clearTimers(); self.setState({ asst: "closed", listening: false }); },
      msgs: msgs, msgsRef: this.msgsRef, typing: st.typing, showChips: st.msgs.length === 1 && !st.typing, qchips: qchips,
      chatInput: st.chatInput,
      onChatInput: function (e) { self.setState({ chatInput: e.target.value }); },
      sendChat: function (e) { if (e && e.preventDefault) e.preventDefault(); var v = self.state.chatInput.trim(); if (v) self.ask(null, v); },
      speakLast: function () {
        var last = self.state.msgs.slice().reverse().find(function (m) { return m.from === "ai"; });
        if (last) self.speak(t[last.key] || "");
      },
      toVoice: function () { self.stopSpeech(); self.setState({ asst: "voice", listening: false, voiceHeard: false }); },
      toChat: function () { self.clearTimers(); self.setState({ asst: "chat", listening: false }); },
      listening: mic, micCls: "mic" + (mic ? " live" : ""), micLbl: mic ? t.stopListening : t.tapToTalk,
      voiceTxt: st.voiceHeard ? t.heard : t.listening,
      tapMic: function () {
        if (self.state.listening) { self.clearTimers(); self.setState({ listening: false }); return; }
        self.setState({ listening: true, voiceHeard: false });
        self.later(function () { self.setState({ voiceHeard: true }); }, 1800);
        self.later(function () { self.ask("qFirst"); }, 2600);
      },

      docs: docs, readyCount: readyCount, readyPct: Math.round(readyCount / 3 * 100),
      readyTxt: allReady ? t.allReady : readyCount + " " + t.readyOf, checkedTxt: readyCount + " " + t.ofChecked,
      allReady: allReady, allReadyNot: !allReady,
      checkNext: function () { var i = self.state.docs.findIndex(function (s) { return s !== "ready"; }); self.openCheck(i < 0 ? 0 : i); },
      remOn: st.remOn, remOff: !st.remOn, remS: st.remOn ? t.remSOn : t.remS,
      turnOffRem: function () { self.setState({ remOn: false }); self.showToast(t.remOffToast); },
      photoKept: !st.photoDeleted, photoDeleted: st.photoDeleted,
      askDelete: function () { self.setState({ modal: "delete" }); },
      confirmDelete: function () { self.setState({ photoDeleted: true, modal: null }); self.showToast(t.delToast); },

      mHow: st.modal === "how", mRemind: st.modal === "remind", mCheck: st.modal === "check", mDelete: st.modal === "delete",
      closeModal: function () { self.setState({ modal: null }); },
      scrimClose: function (e) { if (e.target === e.currentTarget) self.setState({ modal: null }); },
      phone: st.phone, phoneErr: st.phoneErr,
      onPhone: function (e) { self.setState({ phone: e.target.value, phoneErr: false }); },
      turnOnRem: function (e) {
        if (e && e.preventDefault) e.preventDefault();
        var digits = self.state.phone.replace(/\D/g, "");
        if (digits.length !== 10 && !(digits.length === 11 && digits[0] === "1")) { self.setState({ phoneErr: true }); return; }
        self.setState({ remOn: true, modal: null });
        self.showToast(t.remToast);
      },
      checkTitle: t.checkT + " " + docTitles[ck.idx][0], checkSub: docTitles[ck.idx][1],
      ckPick: ck.phase === "pick", ckRunning: ck.phase === "running", ckOk: ck.phase === "ok", ckProb: ck.phase === "prob",
      runCheck: function () { self.runCheck(); },
      retryCheck: function () { self.setState({ check: { idx: ck.idx, phase: "pick" } }); },
      afterCheckLbl: nextMissing >= 0 ? t.nextDoc : t.finish,
      afterCheck: function () { if (nextMissing >= 0) self.openCheck(nextMissing); else self.setState({ modal: null }); },

      hasToast: !!st.toast, toast: st.toast
    };
  }

  render() {
    const v = this.renderVals();
    return h("div", {"className": "app"}, h("header", {"className": "nav"}, h("div", {"className": "wrap nav-in"}, h("button", {"className": "logo", "onClick": v.goHome, "aria-label": "TwistText home"}, h("span", {"className": "logo-mark"}, h("svg", {"width": "19", "height": "19", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2.4", "strokeLinecap": "round", "strokeLinejoin": "round", "aria-hidden": "true"}, h("path", {"d": "M7 3h7l5 5v13H7z"}), h("path", {"d": "M10 13h6M10 17h4"}))), h("span", null, "Twist", h("span", {"className": "logo-o"}, "Text"))), h("nav", {"className": "nav-links", "aria-label": "Main"}, (v.navItems || []).map((ni, $index) => h(F, { key: $index }, h("button", {"className": ni.cls, "aria-current": ni.current, "onClick": ni.go}, ni.label)))), h("div", {"className": "nav-r"}, h("div", {"className": "lang", "role": "group", "aria-label": "Language / Idioma"}, h("button", {"className": v.langEnCls, "aria-pressed": v.isEn, "onClick": v.setEn, "lang": "en"}, "EN"), h("button", {"className": v.langEsCls, "aria-pressed": v.isEs, "onClick": v.setEs, "lang": "es"}, "ES")), h("button", {"className": "btn btn-orange hide-sm", "onClick": v.goAdd}, h("svg", {"width": "16", "height": "16", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2.6", "strokeLinecap": "round", "strokeLinejoin": "round", "aria-hidden": "true"}, h("path", {"d": "M12 5v14M5 12h14"})), v.t.addLetter), h("button", {"className": "menu-btn", "onClick": v.toggleMenu, "aria-expanded": v.menuOpen, "aria-label": v.t.menu}, h("svg", {"width": "20", "height": "20", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2.4", "strokeLinecap": "round", "aria-hidden": "true"}, h("path", {"d": "M4 7h16M4 12h16M4 17h16"}))))), (v.menuOpen ? h(F, null, h("div", {"className": "wrap mmenu"}, (v.navItems || []).map((ni, $index) => h(F, { key: $index }, h("button", {"onClick": ni.goClose, "aria-current": ni.current}, ni.label))), h("button", {"onClick": v.goAdd}, v.t.addLetter))) : null)), (v.inFlow ? h(F, null, h("section", {"className": "taskbar"}, h("div", {"className": "wrap tb-in"}, h("nav", {"className": "crumbs", "aria-label": "Breadcrumb"}, h("button", {"onClick": v.goDocs}, v.t.navDocs), h("span", {"aria-hidden": "true"}, "/"), h("span", {"className": "cur", "aria-current": "page"}, v.crumb)), h("div", {"className": "tb-row"}, h("div", null, h("h1", {"className": "ptitle"}, v.pageTitle), h("p", {"className": "psub"}, v.pageSub)), (v.showDue ? h(F, null, h("span", {"className": "due"}, h("svg", {"width": "18", "height": "18", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2.2", "strokeLinecap": "round", "strokeLinejoin": "round", "aria-hidden": "true"}, h("rect", {"x": "3", "y": "5", "width": "18", "height": "16", "rx": "2"}), h("path", {"d": "M3 10h18M8 3v4M16 3v4"})), v.t.dueChip)) : null)), (v.showSteps ? h(F, null, h("ol", {"className": "stepper", "aria-label": v.t.stepsLbl}, (v.steps || []).map((s, $index) => h(F, { key: $index }, h("li", {"className": s.cls}, h("button", {"className": "stb", "onClick": s.go, "disabled": s.disabled, "aria-current": s.current}, h("span", {"className": "sn"}, h("span", {"className": "dot"}, (s.isDone ? h(F, null, h("svg", {"width": "12", "height": "12", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "4", "strokeLinecap": "round", "strokeLinejoin": "round", "aria-hidden": "true"}, h("path", {"d": "M5 12l5 5 9-10"}))) : null), (s.notDone ? h(F, null, s.n) : null)), s.label))))))) : null)))) : null), h("main", {"style": "flex: 1"}, (v.sWelcome ? h(F, null, h("div", null, h("section", {"className": "wrap hero"}, h("div", null, h("h1", {"className": "hero-h"}, v.t.h1), h("p", {"className": "hero-lead"}, v.t.lead), h("div", {"className": "hero-ctas"}, h("button", {"className": "btn btn-orange btn-lg", "onClick": v.goAdd}, h("svg", {"width": "20", "height": "20", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2.2", "strokeLinecap": "round", "strokeLinejoin": "round", "aria-hidden": "true"}, h("path", {"d": "M4 8h3l2-3h6l2 3h3v11H4z"}), h("circle", {"cx": "12", "cy": "13", "r": "3.5"})), v.t.cta), h("button", {"className": "btn btn-ghost btn-lg", "onClick": v.goAddUpload}, h("svg", {"width": "20", "height": "20", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2.2", "strokeLinecap": "round", "strokeLinejoin": "round", "aria-hidden": "true"}, h("path", {"d": "M12 16V4M7 9l5-5 5 5M4 16v4h16v-4"})), v.t.ctaAlt)), h("div", {"className": "hero-meta"}, h("span", null, h("svg", {"width": "16", "height": "16", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2.2", "strokeLinecap": "round", "strokeLinejoin": "round", "aria-hidden": "true"}, h("rect", {"x": "5", "y": "11", "width": "14", "height": "10", "rx": "2"}), h("path", {"d": "M8 11V7a4 4 0 0 1 8 0v4"})), v.t.meta1), h("span", null, h("svg", {"width": "16", "height": "16", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2.2", "strokeLinecap": "round", "strokeLinejoin": "round", "aria-hidden": "true"}, h("circle", {"cx": "12", "cy": "12", "r": "9"}), h("path", {"d": "M12 7v5l3 2"})), v.t.meta2)), h("div", {"className": "langpick"}, h("p", null, "Choose your language / ", h("span", {"lang": "es"}, "Elige tu idioma")), h("div", {"className": "row", "style": "gap: 8px"}, h("button", {"className": v.lpEnCls, "aria-pressed": v.isEn, "onClick": v.setEn, "lang": "en"}, "English"), h("button", {"className": v.lpEsCls, "aria-pressed": v.isEs, "onClick": v.setEs, "lang": "es"}, "Espa\u00f1ol")))), h("figure", {"className": "preview", "aria-label": v.t.pvLbl}, h("div", {"className": "pv-letter", "aria-hidden": "true"}, h("div", {"className": "lt-state"}, "TEXAS"), h("div", {"className": "lt-agency"}, "Health and Human Services"), h("div", {"className": "lt-title"}, "Request for Information or Action"), h("div", {"className": "lt-line", "style": "width: 92%"}), h("div", {"className": "lt-line", "style": "width: 78%"}), h("div", {"className": "lt-hl on"}, h("span", {"className": "pin", "style": "display: flex"}, "1"), h("p", {"className": "lt-due"}, "Please return the following by: 10/15/2026")), h("div", {"className": "lt-hl soft"}, h("span", {"className": "pin", "style": "display: flex"}, "2"), h("ul", {"className": "lt-list"}, h("li", null, "1. PAY STUBS FOR THE LAST 30 DAYS"), h("li", null, "2. PROOF OF RENT (RECEIPT OR LEASE)"), h("li", null, "3. UTILITY BILL WITH YOUR ADDRESS"))), h("div", {"className": "lt-line", "style": "width: 86%"})), h("div", {"className": "pv-plain"}, h("p", {"className": "pv-k"}, v.t.pvTag), h("div", {"className": "pv-ans"}, h("span", {"className": "num", "aria-hidden": "true"}, "1"), h("p", null, v.t.pv1)), h("div", {"className": "pv-ans"}, h("span", {"className": "num", "aria-hidden": "true"}, "2"), h("p", null, v.t.pv2))))), h("section", {"className": "section", "id": "how", "ref": v.howRef}, h("div", {"className": "wrap"}, h("h2", {"className": "sh"}, v.t.howH), h("p", {"className": "ss"}, v.t.howSub), h("ol", {"className": "how"}, h("li", null, h("p", {"className": "how-n"}, v.t.stepWord, " 1"), h("h3", {"className": "how-t"}, v.t.hw1), h("p", {"className": "how-s"}, v.t.hw1s)), h("li", null, h("p", {"className": "how-n"}, v.t.stepWord, " 2"), h("h3", {"className": "how-t"}, v.t.hw2), h("p", {"className": "how-s"}, v.t.hw2s)), h("li", null, h("p", {"className": "how-n"}, v.t.stepWord, " 3"), h("h3", {"className": "how-t"}, v.t.hw3), h("p", {"className": "how-s"}, v.t.hw3s))))), h("section", {"className": "section"}, h("div", {"className": "wrap"}, h("h2", {"className": "sh"}, v.t.typesH), h("ul", {"className": "types"}, (v.types || []).map((ty, $index) => h(F, { key: $index }, h("li", {"className": "type"}, h("svg", {"width": "16", "height": "16", "viewBox": "0 0 24 24", "fill": "none", "stroke": "#FF7C33", "strokeWidth": "2.2", "strokeLinecap": "round", "strokeLinejoin": "round", "aria-hidden": "true"}, h("path", {"d": "M7 3h7l5 5v13H7z"}), h("path", {"d": "M14 3v5h5"})), ty)))))), h("section", {"className": "section"}, h("div", {"className": "wrap"}, h("h2", {"className": "sh"}, v.t.storiesH), h("div", {"className": "stories"}, (v.stories || []).map((sy, $index) => h(F, { key: $index }, h("figure", {"className": "story"}, h("blockquote", null, "\u201c", sy.quote, "\u201d"), h("figcaption", null, h("span", {"className": "who"}, h("span", {"className": "av", "aria-hidden": "true"}, sy.init), h("span", null, h("strong", null, sy.name), h("span", null, sy.city)))))))))), h("section", {"className": "section"}, h("div", {"className": "wrap"}, h("h2", {"className": "sh"}, v.t.privH), h("ul", {"className": "priv"}, h("li", null, h("span", {"className": "priv-ic"}, h("svg", {"width": "20", "height": "20", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2.2", "strokeLinecap": "round", "strokeLinejoin": "round", "aria-hidden": "true"}, h("circle", {"cx": "12", "cy": "8", "r": "4"}), h("path", {"d": "M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"}))), h("div", null, h("p", {"className": "priv-t"}, v.t.priv1), h("p", {"className": "priv-s"}, v.t.priv1s))), h("li", null, h("span", {"className": "priv-ic"}, h("svg", {"width": "20", "height": "20", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2.2", "strokeLinecap": "round", "strokeLinejoin": "round", "aria-hidden": "true"}, h("path", {"d": "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"}))), h("div", null, h("p", {"className": "priv-t"}, v.t.priv2), h("p", {"className": "priv-s"}, v.t.priv2s))), h("li", null, h("span", {"className": "priv-ic"}, h("svg", {"width": "20", "height": "20", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2.2", "strokeLinecap": "round", "strokeLinejoin": "round", "aria-hidden": "true"}, h("path", {"d": "M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"}))), h("div", null, h("p", {"className": "priv-t"}, v.t.priv3), h("p", {"className": "priv-s"}, v.t.priv3s)))), h("div", {"className": "cta-band", "style": "margin-top: 56px"}, h("h2", null, v.t.bandH), h("button", {"className": "btn btn-navy btn-lg", "onClick": v.goAdd}, v.t.cta)))))) : null), (v.sAdd ? h(F, null, h("div", {"className": "wrap page layout"}, h("div", {"className": "panel"}, h("div", {"className": "tabs", "role": "tablist", "aria-label": v.t.howAdd}, h("button", {"className": v.tabPhotoCls, "role": "tab", "aria-selected": v.mPhoto, "onClick": v.tabPhoto}, h("svg", {"width": "18", "height": "18", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2.2", "strokeLinecap": "round", "strokeLinejoin": "round", "aria-hidden": "true"}, h("path", {"d": "M4 8h3l2-3h6l2 3h3v11H4z"}), h("circle", {"cx": "12", "cy": "13", "r": "3.5"})), v.t.tabPhoto), h("button", {"className": v.tabUploadCls, "role": "tab", "aria-selected": v.mUpload, "onClick": v.tabUpload}, h("svg", {"width": "18", "height": "18", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2.2", "strokeLinecap": "round", "strokeLinejoin": "round", "aria-hidden": "true"}, h("path", {"d": "M12 16V4M7 9l5-5 5 5M4 16v4h16v-4"})), v.t.tabUpload), h("button", {"className": v.tabPasteCls, "role": "tab", "aria-selected": v.mPaste, "onClick": v.tabPaste}, h("svg", {"width": "18", "height": "18", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2.2", "strokeLinecap": "round", "strokeLinejoin": "round", "aria-hidden": "true"}, h("rect", {"x": "6", "y": "4", "width": "12", "height": "17", "rx": "2"}), h("path", {"d": "M9 4h6v3H9z"})), v.t.tabPaste)), (v.mPhoto ? h(F, null, h("div", null, h("div", {"className": "pb stack"}, (v.camLive ? h(F, null, h("div", {"className": "stack"}, h("div", {"className": v.vfCls, "role": "img", "aria-label": v.t.vfLbl}, h("div", {"className": "vf-paper"}, h("div", {"className": "lt-state"}, "TEXAS"), h("div", {"className": "lt-line", "style": "width: 70%; margin-top: 14px"}), h("div", {"className": "lt-line", "style": "width: 90%"}), h("div", {"className": "lt-line", "style": "width: 85%"}), h("div", {"className": "lt-line", "style": "width: 60%; background: #F3B48F"}), h("div", {"className": "lt-line", "style": "width: 92%"}), h("div", {"className": "lt-line", "style": "width: 78%"}), h("div", {"className": "lt-line", "style": "width: 88%"}), h("div", {"className": "lt-line", "style": "width: 50%"})), h("div", {"className": "vf-frame"}, h("div", {"className": "scanbar"})), h("span", {"className": v.badgeCls, "aria-live": "polite"}, (v.badgeGood ? h(F, null, h("svg", {"width": "16", "height": "16", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "3", "strokeLinecap": "round", "strokeLinejoin": "round", "aria-hidden": "true"}, h("path", {"d": "M5 12l5 5 9-10"}))) : null), (v.badgeWarn ? h(F, null, h("svg", {"width": "16", "height": "16", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2.4", "strokeLinecap": "round", "strokeLinejoin": "round", "aria-hidden": "true"}, h("circle", {"cx": "12", "cy": "12", "r": "9"}), h("path", {"d": "M12 7v6M12 16.5v.5"}))) : null), v.badgeTxt)), h("div", {"className": "vf-actions"}, h("button", {"className": "shutter", "onClick": v.capture, "aria-label": v.t.capture}, h("span", null)), h("div", null, h("p", {"className": "vf-cap"}, v.t.capture), h("p", {"className": "small"}, v.camHint))))) : null), (v.camBlocked ? h(F, null, h("div", {"className": "state"}, h("div", {"className": "state-main"}, h("span", {"className": "state-ic"}, h("svg", {"width": "26", "height": "26", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2.2", "strokeLinecap": "round", "strokeLinejoin": "round", "aria-hidden": "true"}, h("path", {"d": "M3 3l18 18"}), h("path", {"d": "M9 5h6l2 3h3v10M16.5 19H4V8h3"}))), h("h2", {"className": "state-t"}, v.t.blockedT), h("p", {"className": "state-s"}, v.t.blockedS), h("div", {"className": "row"}, h("button", {"className": "btn btn-navy", "onClick": v.tabUpload}, v.t.uploadInstead), h("button", {"className": "linkbtn", "onClick": v.retryCam}, v.t.tryAgain))), h("div", {"className": "qr"}, h("svg", {"width": "72", "height": "72", "viewBox": "0 0 21 21", "role": "img", "aria-label": v.t.qrT, "shapeRendering": "crispEdges"}, h("rect", {"width": "21", "height": "21", "fill": "#fff"}), h("path", {"fill": "#000", "d": "M0 0h7v7H0zM1 1v5h5V1zM2 2h3v3H2zM14 0h7v7h-7zM15 1v5h5V1zM16 2h3v3h-3zM0 14h7v7H0zM1 15v5h5v-5zM2 16h3v3H2zM8 0h1v2H8zM10 1h2v1h-2zM9 3h2v2H9zM12 4h1v3h-1zM8 6h2v2H8zM0 8h2v1H0zM3 8h3v1H3zM7 9h3v2H7zM11 8h2v2h-2zM14 8h3v1h-3zM18 8h3v2h-3zM1 10h2v2H1zM4 11h2v1H4zM12 11h3v1h-3zM16 10h2v3h-2zM19 12h2v2h-2zM8 12h2v1H8zM10 13h2v2h-2zM8 15h1v3H8zM13 13h2v2h-2zM16 14h2v1h-2zM10 16h3v1h-3zM14 16h2v3h-2zM17 16h1v2h-1zM19 15h2v3h-2zM9 19h3v2H9zM13 19h1v2h-1zM16 19h5v2h-5z"})), h("div", null, h("p", {"className": "qr-t"}, v.t.qrT), h("p", {"className": "qr-s"}, v.t.qrS))))) : null), (v.camFailed ? h(F, null, h("div", {"className": "state", "role": "alert"}, h("div", {"className": "state-main"}, h("span", {"className": "state-ic"}, h("svg", {"width": "26", "height": "26", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2.2", "strokeLinecap": "round", "strokeLinejoin": "round", "aria-hidden": "true"}, h("path", {"d": "M4 8h3l2-3h6l2 3h3v11H4z"}), h("path", {"d": "M12 10v4M12 16.5v.5"}))), h("h2", {"className": "state-t"}, v.failT), h("p", {"className": "state-s"}, v.t.failS), h("button", {"className": "btn btn-orange", "onClick": v.retryCam}, v.t.scanAgain)), h("div", {"className": "qr"}, h("svg", {"width": "72", "height": "72", "viewBox": "0 0 21 21", "role": "img", "aria-label": v.t.qrT, "shapeRendering": "crispEdges"}, h("rect", {"width": "21", "height": "21", "fill": "#fff"}), h("path", {"fill": "#000", "d": "M0 0h7v7H0zM1 1v5h5V1zM2 2h3v3H2zM14 0h7v7h-7zM15 1v5h5V1zM16 2h3v3h-3zM0 14h7v7H0zM1 15v5h5v-5zM2 16h3v3H2zM8 0h1v2H8zM10 1h2v1h-2zM9 3h2v2H9zM12 4h1v3h-1zM8 6h2v2H8zM0 8h2v1H0zM3 8h3v1H3zM7 9h3v2H7zM11 8h2v2h-2zM14 8h3v1h-3zM18 8h3v2h-3zM1 10h2v2H1zM4 11h2v1H4zM12 11h3v1h-3zM16 10h2v3h-2zM19 12h2v2h-2zM8 12h2v1H8zM10 13h2v2h-2zM8 15h1v3H8zM13 13h2v2h-2zM16 14h2v1h-2zM10 16h3v1h-3zM14 16h2v3h-2zM17 16h1v2h-1zM19 15h2v3h-2zM9 19h3v2H9zM13 19h1v2h-1zM16 19h5v2h-5z"})), h("div", null, h("p", {"className": "qr-t"}, v.t.qrT), h("p", {"className": "qr-s"}, v.t.qrS))))) : null)), h("div", {"className": "demo"}, h("span", null, v.t.demoLbl), (v.demos || []).map((dm, $index) => h(F, { key: $index }, h("button", {"className": dm.cls, "onClick": dm.pick, "aria-pressed": dm.on}, dm.label)))))) : null), (v.mUpload ? h(F, null, h("div", {"className": "pb stack"}, (v.upErr ? h(F, null, h("div", {"className": "alert", "role": "alert"}, h("svg", {"width": "20", "height": "20", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2.4", "strokeLinecap": "round", "strokeLinejoin": "round", "aria-hidden": "true"}, h("circle", {"cx": "12", "cy": "12", "r": "9"}), h("path", {"d": "M12 7v6M12 16.5v.5"})), h("div", null, h("p", {"className": "alert-t"}, v.t.upErrT), h("p", {"className": "alert-s"}, v.t.upErrS)))) : null), h("div", {"className": "drop"}, h("span", {"className": "drop-ic"}, h("svg", {"width": "26", "height": "26", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2.2", "strokeLinecap": "round", "strokeLinejoin": "round", "aria-hidden": "true"}, h("path", {"d": "M12 16V4M7 9l5-5 5 5M4 16v4h16v-4"}))), h("p", {"className": "drop-t"}, v.dropT), h("p", {"className": "drop-s"}, v.t.upS), h("input", {"id": "tt-file", "className": "sr-only", "type": "file", "accept": "image/*,application/pdf", "onChange": v.onFile, "ref": v.fileRef}), h("label", {"htmlFor": "tt-file", "className": "btn btn-navy", "style": "margin-top: 10px"}, v.dropBtn)), h("button", {"className": "linkbtn", "onClick": v.simErr, "style": "font-size: 13px; color: #5B4B8A; align-self: flex-start"}, v.t.simErr))) : null), (v.mPaste ? h(F, null, h("div", {"className": "pb stack", "style": "gap: 12px"}, h("label", {"htmlFor": "tt-paste", "className": "lbl"}, v.t.pasteLbl), (v.pasteErr ? h(F, null, h("div", {"className": "alert", "role": "alert"}, h("svg", {"width": "20", "height": "20", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2.4", "strokeLinecap": "round", "strokeLinejoin": "round", "aria-hidden": "true"}, h("circle", {"cx": "12", "cy": "12", "r": "9"}), h("path", {"d": "M12 7v6M12 16.5v.5"})), h("div", null, h("p", {"className": "alert-t"}, v.t.pasteErrT), h("p", {"className": "alert-s"}, v.t.pasteErrS)))) : null), h("textarea", {"id": "tt-paste", "className": v.taCls, "placeholder": v.t.pastePh, "value": v.pasteText, "onChange": v.onPaste, "aria-invalid": v.pasteErr, "ref": v.pasteRef}), h("div", {"className": "row", "style": "justify-content: space-between"}, h("div", {"className": "row"}, h("button", {"className": "btn btn-orange", "onClick": v.submitPaste}, v.t.pasteBtn), h("button", {"className": "btn btn-outline", "onClick": v.fromClip}, v.t.fromClip), h("button", {"className": "linkbtn", "onClick": v.clearPaste}, v.t.clear)), h("button", {"className": "linkbtn", "onClick": v.useSample, "style": "font-size: 13px; color: #5B4B8A"}, v.t.sample)))) : null)), h("aside", {"className": "side"}, h("section", {"className": "panel", "aria-labelledby": "pages-h"}, h("div", {"className": "ph"}, h("h2", {"className": "pt", "id": "pages-h"}, v.t.pagesT), h("span", {"className": "pm", "aria-live": "polite"}, v.pagesMeta)), h("div", {"className": "pb stack", "style": "gap: 14px"}, (v.noPages ? h(F, null, h("div", {"className": "empty"}, h("p", {"className": "empty-t"}, v.t.emptyT), h("p", {"className": "empty-s"}, v.t.emptyS))) : null), (v.hasPages ? h(F, null, h("ul", {"className": "thumbs"}, (v.pages || []).map((pg, $index) => h(F, { key: $index }, h("li", {"className": "thumb"}, h("div", {"className": "thumb-pg"}, h("div", {"className": "lt-line", "style": "width: 88%"}), h("div", {"className": "lt-line", "style": "width: 70%"}), h("div", {"className": "lt-line", "style": "width: 84%"}), h("div", {"className": "lt-line", "style": "width: 56%"}), h("div", {"className": "lt-line", "style": "width: 78%"}), h("span", {"className": "thumb-kind"}, pg.kind), h("button", {"className": "thumb-x", "onClick": pg.remove, "aria-label": pg.removeLbl}, h("svg", {"width": "12", "height": "12", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "3", "strokeLinecap": "round", "strokeLinejoin": "round", "aria-hidden": "true"}, h("path", {"d": "M6 6l12 12M18 6L6 18"})))), h("span", {"className": "thumb-l"}, pg.label)))))) : null), h("button", {"className": "btn btn-dashed", "onClick": v.addAnother}, h("svg", {"width": "16", "height": "16", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2.6", "strokeLinecap": "round", "strokeLinejoin": "round", "aria-hidden": "true"}, h("path", {"d": "M12 5v14M5 12h14"})), v.addAnotherLbl), h("button", {"className": "btn btn-orange btn-lg btn-block", "onClick": v.readLetter, "disabled": v.readDisabled, "aria-describedby": "need-pg"}, v.readLbl), (v.noPages ? h(F, null, h("p", {"className": "small", "id": "need-pg", "style": "text-align: center"}, v.t.needPage)) : null))), h("section", {"className": "panel", "aria-labelledby": "tips-h"}, h("div", {"className": "ph"}, h("h2", {"className": "pt", "id": "tips-h", "style": "font-size: 17px"}, v.t.tipsH)), h("ul", {"className": "pb checklist"}, h("li", null, h("span", {"className": "ck-ic"}, h("svg", {"width": "18", "height": "18", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2.2", "strokeLinecap": "round", "strokeLinejoin": "round", "aria-hidden": "true"}, h("path", {"d": "M7 3h7l5 5v13H7z"}), h("path", {"d": "M4 7v14h11"}))), h("div", null, h("p", {"className": "ck-t"}, v.t.tip1T), h("p", {"className": "ck-s"}, v.t.tip1S))), h("li", null, h("span", {"className": "ck-ic"}, h("svg", {"width": "18", "height": "18", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2.2", "strokeLinecap": "round", "strokeLinejoin": "round", "aria-hidden": "true"}, h("circle", {"cx": "12", "cy": "12", "r": "4"}), h("path", {"d": "M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5"}))), h("div", null, h("p", {"className": "ck-t"}, v.t.tip3T), h("p", {"className": "ck-s"}, v.t.tip3S))), h("li", null, h("span", {"className": "ck-ic"}, h("svg", {"width": "18", "height": "18", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2.2", "strokeLinecap": "round", "strokeLinejoin": "round", "aria-hidden": "true"}, h("path", {"d": "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"}))), h("div", null, h("p", {"className": "ck-t"}, v.t.tip2T), h("p", {"className": "ck-s"}, v.t.tip2S)))))))) : null), (v.sReading ? h(F, null, h("div", {"className": "wrap page"}, h("div", {"className": "panel reading"}, h("div", {"className": "rd-left"}, h("div", {"className": "letter", "aria-hidden": "true"}, h("div", {"className": "lt-state"}, "TEXAS"), h("div", {"className": "lt-agency"}, "Health and Human Services"), h("div", {"className": "lt-title"}, "Request for Information or Action"), h("div", {"className": "lt-line", "style": "width: 92%"}), h("div", {"className": "lt-line", "style": "width: 80%"}), h("div", {"className": v.rdHl3}, h("p", {"className": "lt-due"}, "Please return the following by: 10/15/2026")), h("div", {"className": v.rdHl2}, h("ul", {"className": "lt-list"}, h("li", null, "1. PAY STUBS FOR THE LAST 30 DAYS"), h("li", null, "2. PROOF OF RENT (RECEIPT OR LEASE)"), h("li", null, "3. UTILITY BILL WITH YOUR ADDRESS"))), h("div", {"className": "lt-line", "style": "width: 90%"}), h("div", {"className": "lt-line", "style": "width: 70%"}), h("div", {"className": "scanbar"})), h("p", {"className": "small"}, v.rdCap)), h("div", {"className": "rd-right", "aria-live": "polite"}, h("ol", {"className": "stages"}, (v.stages || []).map((st, $index) => h(F, { key: $index }, h("li", {"className": st.cls}, h("span", {"className": "stage-l"}, h("span", {"className": "st-ic"}, (st.isDone ? h(F, null, h("svg", {"width": "18", "height": "18", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "3", "strokeLinecap": "round", "strokeLinejoin": "round", "aria-hidden": "true"}, h("path", {"d": "M5 12l5 5 9-10"}))) : null), (st.isActive ? h(F, null, h("span", {"className": "spin", "aria-hidden": "true"})) : null), (st.isPending ? h(F, null, h("svg", {"width": "22", "height": "22", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeDasharray": "3 3", "aria-hidden": "true"}, h("circle", {"cx": "12", "cy": "12", "r": "9"}))) : null)), st.label), h("span", {"className": "stage-r"}, st.status))))), h("div", null, h("p", {"className": "lbl"}, v.t.found), h("div", {"className": "chips"}, (v.fchips || []).map((fc, $index) => h(F, { key: $index }, h("span", {"className": fc.cls}, h("span", {"className": "ci"}, (fc.on ? h(F, null, h("svg", {"width": "12", "height": "12", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "3.5", "strokeLinecap": "round", "strokeLinejoin": "round", "aria-hidden": "true"}, h("path", {"d": "M5 12l5 5 9-10"}))) : null)), fc.label))))), h("div", {"className": "bar", "role": "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": v.readPct, "aria-label": v.t.readingH}, h("span", {"style": `width: ${v.readPct}%`})), h("div", {"className": "rd-foot"}, h("span", null, v.secsTxt), h("button", {"className": "btn btn-outline", "onClick": v.cancelReading}, v.t.cancel)))))) : null), (v.sAnswers ? h(F, null, h("div", {"className": "wrap page layout", "style": "grid-template-columns: minmax(0, 1fr) 420px"}, h("div", {"className": "stack"}, h("section", {"className": "panel", "aria-labelledby": "plain-h"}, h("div", {"className": "ph"}, h("h2", {"className": "pt", "id": "plain-h"}, v.t.plainT), h("span", {"className": "pm"}, v.t.plainM)), h("ol", {"className": "alist"}, (v.ans || []).map((a, $index) => h(F, { key: $index }, h("li", {"className": a.cls}, h("span", {"className": "num", "aria-hidden": "true"}, a.n), h("div", {"style": "min-width: 0"}, h("h3", {"className": "ans-k"}, a.k), (a.notDate ? h(F, null, h("p", {"className": "ans-v"}, a.v)) : null), (a.isDate ? h(F, null, h("div", {"className": "ans-big"}, h("span", {"className": "ans-date"}, a.v), h("span", {"className": "pill"}, v.t.inDays))) : null)), h("button", {"className": a.seeCls, "onClick": a.see, "aria-pressed": a.on}, h("svg", {"width": "16", "height": "16", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2.2", "strokeLinecap": "round", "strokeLinejoin": "round", "aria-hidden": "true"}, h("path", {"d": "M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"}), h("circle", {"cx": "12", "cy": "12", "r": "3"})), v.t.seeIn)))))), h("section", {"className": "panel", "aria-labelledby": "next-h"}, h("div", {"className": "ph"}, h("h2", {"className": "pt", "id": "next-h"}, v.t.nextT)), h("ul", {"className": "next"}, h("li", null, h("div", null, h("p", {"className": "nx-t"}, v.t.nx1), h("p", {"className": "nx-s"}, v.t.nx1s)), h("button", {"className": "btn btn-orange", "onClick": v.goSend}, v.t.seeWhat)), h("li", null, h("div", null, h("p", {"className": "nx-t"}, v.t.nx2), h("p", {"className": "nx-s"}, v.remS)), (v.remOff ? h(F, null, h("button", {"className": "btn btn-outline", "onClick": v.openRemind}, v.t.remBtn)) : null), (v.remOn ? h(F, null, h("span", {"className": "tag ok"}, v.t.remOn)) : null)), h("li", null, h("div", null, h("p", {"className": "nx-t"}, v.t.nx3), h("p", {"className": "nx-s"}, v.t.nx3s)), h("button", {"className": "btn btn-outline", "onClick": v.openAsst}, v.t.ask))))), h("aside", {"className": "side"}, h("section", {"className": "panel"}, h("div", {"className": "vtabs", "role": "tablist", "aria-label": v.t.viewLbl}, h("button", {"className": v.vtLetterCls, "role": "tab", "aria-selected": v.asstClosed, "onClick": v.closeAsst}, h("svg", {"width": "16", "height": "16", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2.2", "strokeLinecap": "round", "strokeLinejoin": "round", "aria-hidden": "true"}, h("path", {"d": "M7 3h7l5 5v13H7z"}), h("path", {"d": "M14 3v5h5"})), v.t.tabLetter), h("button", {"className": v.vtAskCls, "role": "tab", "aria-selected": v.asstOpen, "onClick": v.openAsst}, h("svg", {"width": "16", "height": "16", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2.2", "strokeLinecap": "round", "strokeLinejoin": "round", "aria-hidden": "true"}, h("path", {"d": "M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"})), v.t.askBtn)), (v.asstClosed ? h(F, null, h("div", null, h("div", {"className": "viewer"}, h("div", {"className": "letter", "role": "img", "aria-label": v.t.letterLbl}, h("div", {"className": "lt-state"}, "TEXAS"), h("div", {"className": "lt-agency"}, "Health and Human Services"), h("div", {"className": "lt-title"}, "Request for Information or Action"), h("div", {"className": v.hl1}, h("span", {"className": "pin"}, "1"), h("div", {"className": "lt-line", "style": "width: 96%"}), h("div", {"className": "lt-line", "style": "width: 84%"}), h("div", {"className": "lt-line", "style": "width: 90%"})), h("div", {"className": v.hl3}, h("span", {"className": "pin"}, "3"), h("p", {"className": "lt-due"}, "Please return the following by: 10/15/2026")), h("div", {"className": v.hl2}, h("span", {"className": "pin"}, "2"), h("ul", {"className": "lt-list"}, h("li", null, "1. PAY STUBS FOR THE LAST 30 DAYS"), h("li", null, "2. PROOF OF RENT (RECEIPT OR LEASE)"), h("li", null, "3. UTILITY BILL WITH YOUR ADDRESS"))), h("div", {"className": "lt-line", "style": "width: 90%"}), h("div", {"className": "lt-line", "style": "width: 64%"}))), h("div", {"className": "v-meta"}, h("span", null, v.t.pageOne), h("span", null, v.viewerHint)))) : null), (v.asstOpen ? h(F, null, h("div", {"className": "asst"}, h("div", {"className": "asst-id"}, h("span", {"className": "asst-av"}, h("svg", {"width": "18", "height": "18", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round", "aria-hidden": "true"}, h("path", {"d": "M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"}))), h("div", null, h("p", {"className": "asst-n"}, v.t.asstName), h("p", {"className": "asst-s"}, v.t.asstSub))), (v.chatOn ? h(F, null, h("div", {"className": "stack", "style": "gap: 12px"}, h("div", {"className": "msgs", "aria-live": "polite", "ref": v.msgsRef}, (v.msgs || []).map((m, $index) => h(F, { key: $index }, (m.me ? h(F, null, h("p", {"className": "b-me"}, m.text)) : null), (m.ai ? h(F, null, h("div", {"className": "b-ai"}, h("span", null, m.text), (m.hasCard ? h(F, null, h("div", {"className": "stepcard"}, h("span", {"className": "sc-k"}, v.t.step1of3), h("span", {"className": "sc-t"}, v.t.payStubs), h("button", {"className": "btn btn-orange", "onClick": v.goSend}, v.t.openChecklist))) : null), (m.hasSee ? h(F, null, h("button", {"className": "b-link", "onClick": m.see}, v.t.seeP1)) : null))) : null))), (v.typing ? h(F, null, h("div", {"className": "b-ai typing", "aria-label": v.t.typing}, h("span", null), h("span", null), h("span", null))) : null), (v.showChips ? h(F, null, h("div", {"className": "qchips"}, (v.qchips || []).map((q, $index) => h(F, { key: $index }, h("button", {"className": "qchip", "onClick": q.pick}, q.label))))) : null)), h("form", {"className": "composer", "onSubmit": v.sendChat}, h("label", {"htmlFor": "tt-chat", "className": "sr-only"}, v.t.ph), h("input", {"id": "tt-chat", "value": v.chatInput, "onChange": v.onChatInput, "placeholder": v.t.ph, "autoComplete": "off"}), h("button", {"type": "button", "className": "cbtn", "onClick": v.speakLast, "aria-label": v.t.readAloud}, h("svg", {"width": "18", "height": "18", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2.2", "strokeLinecap": "round", "strokeLinejoin": "round", "aria-hidden": "true"}, h("path", {"d": "M4 9v6h4l5 4V5L8 9z"}), h("path", {"d": "M16 9a4 4 0 0 1 0 6"}))), h("button", {"type": "button", "className": "cbtn", "onClick": v.toVoice, "aria-label": v.t.talk}, h("svg", {"width": "18", "height": "18", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2.2", "strokeLinecap": "round", "strokeLinejoin": "round", "aria-hidden": "true"}, h("rect", {"x": "9", "y": "3", "width": "6", "height": "11", "rx": "3"}), h("path", {"d": "M5 11a7 7 0 0 0 14 0M12 18v3"}))), h("button", {"type": "submit", "className": "cbtn go", "aria-label": v.t.sendMsg}, h("svg", {"width": "18", "height": "18", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2.4", "strokeLinecap": "round", "strokeLinejoin": "round", "aria-hidden": "true"}, h("path", {"d": "M5 12h14M13 6l6 6-6 6"})))))) : null), (v.voiceOn ? h(F, null, h("div", {"className": "voice"}, h("p", {"className": "voice-t", "aria-live": "polite"}, v.voiceTxt), h("button", {"className": v.micCls, "onClick": v.tapMic, "aria-label": v.micLbl, "aria-pressed": v.listening}, (v.listening ? h(F, null, h("span", {"className": "pulse", "aria-hidden": "true"})) : null), h("svg", {"width": "34", "height": "34", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round", "aria-hidden": "true"}, h("rect", {"x": "9", "y": "3", "width": "6", "height": "11", "rx": "3"}), h("path", {"d": "M5 11a7 7 0 0 0 14 0M12 18v3"}))), h("p", {"className": "voice-s"}, v.micLbl), h("button", {"className": "btn btn-outline", "onClick": v.toChat}, v.t.typeInstead))) : null), h("p", {"className": "disc"}, v.t.disc))) : null))))) : null), (v.sSend ? h(F, null, h("div", {"className": "wrap page layout"}, h("section", {"className": "panel", "aria-labelledby": "send-h"}, h("div", {"className": "ph"}, h("h2", {"className": "pt", "id": "send-h"}, v.t.docsListT), h("span", {"className": "pm"}, v.checkedTxt)), h("ul", {"className": "dtable"}, (v.docs || []).map((d, $index) => h(F, { key: $index }, h("li", null, (d.isMissing ? h(F, null, h("span", {"className": "box", "aria-hidden": "true"})) : null), (d.isReady ? h(F, null, h("span", {"className": "box ok", "aria-hidden": "true"}, h("svg", {"width": "16", "height": "16", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "3.5", "strokeLinecap": "round", "strokeLinejoin": "round"}, h("path", {"d": "M5 12l5 5 9-10"})))) : null), (d.isProblem ? h(F, null, h("span", {"className": "box warn", "aria-hidden": "true"}, h("svg", {"width": "16", "height": "16", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "3", "strokeLinecap": "round", "strokeLinejoin": "round"}, h("path", {"d": "M12 7v6M12 16.5v.5"})))) : null), h("div", {"style": "min-width: 0"}, h("h3", {"className": "d-t"}, d.title), h("p", {"className": "d-s"}, d.sub), (d.isProblem ? h(F, null, h("p", {"className": "d-p"}, v.t.d2problem)) : null)), h("div", {"className": "d-act"}, h("span", {"className": d.tagCls}, d.tagLbl), h("button", {"className": d.btnCls, "onClick": d.check}, d.btnLbl)))))), h("div", {"className": "ph", "style": "border-bottom: 0; border-top: 1px solid #E6E1F0; background: #FBFAFD"}, h("span", {"className": "small"}, v.t.sendFoot), h("button", {"className": "btn btn-orange", "onClick": v.goDocs}, v.t.goDocs))), h("aside", {"className": "side"}, h("section", {"className": "panel", "aria-labelledby": "how-h"}, h("div", {"className": "ph"}, h("h2", {"className": "pt", "id": "how-h", "style": "font-size: 17px"}, v.t.howSend)), h("div", {"className": "pb stack", "style": "gap: 14px"}, h("p", {"className": "small"}, v.t.howS), h("ul", {"className": "methods"}, h("li", null, h("span", {"className": "m-ic"}, h("svg", {"width": "18", "height": "18", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round", "aria-hidden": "true"}, h("rect", {"x": "3", "y": "4", "width": "18", "height": "12", "rx": "2"}), h("path", {"d": "M8 20h8M12 16v4"}))), h("div", null, h("p", {"className": "m-t"}, v.t.how1), h("p", {"className": "m-s"}, v.t.how1s))), h("li", null, h("span", {"className": "m-ic"}, h("svg", {"width": "18", "height": "18", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round", "aria-hidden": "true"}, h("path", {"d": "M6 9V3h12v6"}), h("rect", {"x": "3", "y": "9", "width": "18", "height": "8", "rx": "2"}), h("path", {"d": "M7 14h10v7H7z"}))), h("div", null, h("p", {"className": "m-t"}, v.t.how2), h("p", {"className": "m-s"}, v.t.how2s))), h("li", null, h("span", {"className": "m-ic"}, h("svg", {"width": "18", "height": "18", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round", "aria-hidden": "true"}, h("rect", {"x": "3", "y": "5", "width": "18", "height": "14", "rx": "2"}), h("path", {"d": "M3 7l9 6 9-6"}))), h("div", null, h("p", {"className": "m-t"}, v.t.how3), h("p", {"className": "m-s"}, v.t.how3s)))), h("p", {"className": "fine"}, v.t.howTip))), h("section", {"className": "dark-card"}, h("h2", {"className": "dc-t"}, v.t.remT), h("p", {"className": "dc-s"}, v.remS), (v.remOff ? h(F, null, h("button", {"className": "btn btn-orange", "onClick": v.openRemind, "style": "align-self: flex-start"}, v.t.remBtn)) : null), (v.remOn ? h(F, null, h("div", {"className": "row"}, h("span", {"className": "tag ok"}, v.t.remOn), h("button", {"className": "linkbtn", "onClick": v.turnOffRem}, v.t.turnOff))) : null))))) : null), (v.sDocs ? h(F, null, h("div", {"className": "wrap page layout"}, h("div", {"className": "stack"}, h("section", {"className": "panel", "aria-labelledby": "sum-h"}, h("div", {"className": "summary"}, h("div", {"className": "mini", "aria-hidden": "true"}, h("div", {"className": "lt-state"}, "TEXAS"), h("div", {"className": "lt-line", "style": "width: 90%"}), h("div", {"className": "lt-line", "style": "width: 70%"}), h("div", {"className": "lt-line", "style": "width: 80%; background: #F3B48F"}), h("div", {"className": "lt-line", "style": "width: 88%"}), h("div", {"className": "lt-line", "style": "width: 60%"}), h("div", {"className": "lt-line", "style": "width: 84%"})), h("div", {"className": "sum-r"}, h("div", {"className": "sum-top"}, h("div", null, h("h2", {"className": "sum-t", "id": "sum-h"}, v.t.letterT), h("p", {"className": "sum-k"}, v.t.letterK)), h("span", {"className": "pill"}, v.t.dueChip)), h("div", {"className": "bar", "role": "progressbar", "aria-valuemin": "0", "aria-valuemax": "3", "aria-valuenow": v.readyCount, "aria-label": v.readyTxt}, h("span", {"style": `width: ${v.readyPct}%`})), h("div", {"className": "sum-meta"}, h("span", null, v.readyTxt), (v.photoKept ? h(F, null, h("span", {"className": "small", "style": "font-weight: 600"}, v.t.saved)) : null), (v.photoDeleted ? h(F, null, h("span", {"className": "small", "style": "font-weight: 600"}, v.t.deleted)) : null)))), h("div", {"className": "row", "style": "padding: 0 24px 20px; gap: 10px"}, h("button", {"className": "btn btn-light", "onClick": v.goAnswers}, v.t.reopen), (v.allReadyNot ? h(F, null, h("button", {"className": "btn btn-orange", "onClick": v.checkNext}, v.t.checkDoc)) : null), (v.allReady ? h(F, null, h("button", {"className": "btn btn-orange", "onClick": v.goSend}, v.t.howSend)) : null))), h("section", {"className": "panel", "aria-labelledby": "dl-h"}, h("div", {"className": "ph"}, h("h2", {"className": "pt", "id": "dl-h"}, v.t.docsListT), h("span", {"className": "pm"}, v.checkedTxt)), h("ul", {"className": "dtable"}, (v.docs || []).map((d, $index) => h(F, { key: $index }, h("li", null, (d.isMissing ? h(F, null, h("span", {"className": "box", "aria-hidden": "true"})) : null), (d.isReady ? h(F, null, h("span", {"className": "box ok", "aria-hidden": "true"}, h("svg", {"width": "16", "height": "16", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "3.5", "strokeLinecap": "round", "strokeLinejoin": "round"}, h("path", {"d": "M5 12l5 5 9-10"})))) : null), (d.isProblem ? h(F, null, h("span", {"className": "box warn", "aria-hidden": "true"}, h("svg", {"width": "16", "height": "16", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "3", "strokeLinecap": "round", "strokeLinejoin": "round"}, h("path", {"d": "M12 7v6M12 16.5v.5"})))) : null), h("div", {"style": "min-width: 0"}, h("h3", {"className": "d-t"}, d.title), (d.isProblem ? h(F, null, h("p", {"className": "d-p"}, v.t.d2problem)) : null), (d.notProblem ? h(F, null, h("p", {"className": "d-s"}, d.sub)) : null)), h("div", {"className": "d-act"}, h("span", {"className": d.tagCls}, d.tagLbl), (d.isReady ? h(F, null, h("button", {"className": "btn btn-outline", "onClick": d.view}, v.t.view)) : null), (d.notReady ? h(F, null, h("button", {"className": "btn btn-outline", "onClick": d.check}, d.btnLbl)) : null)))))))), h("aside", {"className": "side"}, h("section", {"className": "dark-card"}, h("h2", {"className": "dc-t"}, h("svg", {"width": "20", "height": "20", "viewBox": "0 0 24 24", "fill": "none", "stroke": "#FF7C33", "strokeWidth": "2.2", "strokeLinecap": "round", "strokeLinejoin": "round", "aria-hidden": "true"}, h("path", {"d": "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"})), v.t.ctrlT), h("p", {"className": "dc-s"}, v.t.ctrlS), (v.photoKept ? h(F, null, h("button", {"className": "btn btn-ghost", "onClick": v.askDelete, "style": "align-self: flex-start"}, v.t.del)) : null)), h("section", {"className": "dark-card"}, h("h2", {"className": "dc-t"}, v.t.remT), h("p", {"className": "dc-s"}, v.remS), (v.remOff ? h(F, null, h("button", {"className": "btn btn-orange", "onClick": v.openRemind, "style": "align-self: flex-start"}, v.t.remBtn)) : null), (v.remOn ? h(F, null, h("div", {"className": "row"}, h("span", {"className": "tag ok"}, v.t.remOn), h("button", {"className": "linkbtn", "onClick": v.turnOffRem}, v.t.turnOff))) : null)), h("button", {"className": "btn btn-ghost btn-block", "onClick": v.askFromAnywhere}, v.t.askBtn)))) : null)), h("footer", {"className": "foot"}, h("div", {"className": "wrap foot-in"}, h("div", null, h("button", {"className": "logo", "onClick": v.goHome, "aria-label": "TwistText home", "style": "font-size: 17px"}, h("span", {"className": "logo-mark", "style": "width: 28px; height: 28px; border-radius: 7px"}, h("svg", {"width": "15", "height": "15", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2.6", "strokeLinecap": "round", "strokeLinejoin": "round", "aria-hidden": "true"}, h("path", {"d": "M7 3h7l5 5v13H7z"}))), h("span", null, "Twist", h("span", {"className": "logo-o"}, "Text"))), h("p", null, v.t.footNote)), h("nav", {"className": "foot-links", "aria-label": "Footer"}, h("button", {"onClick": v.openHow}, v.t.navHow), h("button", {"onClick": v.goDocs}, v.t.navDocs), h("button", {"onClick": v.footPriv}, v.t.fPriv), h("button", {"onClick": v.footHelp}, v.t.navHelp)))), (v.mHow ? h(F, null, h("div", {"className": "scrim", "onClick": v.scrimClose}, h("div", {"className": "modal", "role": "dialog", "aria-modal": "true", "aria-labelledby": "m-how-t"}, h("div", {"className": "mh"}, h("h2", {"className": "mt", "id": "m-how-t"}, v.t.navHow), h("button", {"className": "m-x", "onClick": v.closeModal, "aria-label": v.t.close}, h("svg", {"width": "18", "height": "18", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2.6", "strokeLinecap": "round", "strokeLinejoin": "round", "aria-hidden": "true"}, h("path", {"d": "M6 6l12 12M18 6L6 18"})))), h("ol", {"className": "mb methods"}, h("li", null, h("span", {"className": "num"}, "1"), h("div", null, h("p", {"className": "m-t"}, v.t.hw1), h("p", {"className": "m-s"}, v.t.hw1s))), h("li", null, h("span", {"className": "num"}, "2"), h("div", null, h("p", {"className": "m-t"}, v.t.hw2), h("p", {"className": "m-s"}, v.t.hw2s))), h("li", null, h("span", {"className": "num"}, "3"), h("div", null, h("p", {"className": "m-t"}, v.t.hw3), h("p", {"className": "m-s"}, v.t.hw3s)))), h("div", {"className": "mf"}, h("button", {"className": "btn btn-outline", "onClick": v.closeModal}, v.t.close), h("button", {"className": "btn btn-orange", "onClick": v.goAdd}, v.t.cta))))) : null), (v.mRemind ? h(F, null, h("div", {"className": "scrim", "onClick": v.scrimClose}, h("form", {"className": "modal", "role": "dialog", "aria-modal": "true", "aria-labelledby": "m-rem-t", "onSubmit": v.turnOnRem}, h("div", {"className": "mh"}, h("h2", {"className": "mt", "id": "m-rem-t"}, v.t.remBtn), h("button", {"type": "button", "className": "m-x", "onClick": v.closeModal, "aria-label": v.t.close}, h("svg", {"width": "18", "height": "18", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2.6", "strokeLinecap": "round", "strokeLinejoin": "round", "aria-hidden": "true"}, h("path", {"d": "M6 6l12 12M18 6L6 18"})))), h("div", {"className": "mb"}, h("div", {"className": "field"}, h("label", {"className": "lbl", "htmlFor": "tt-phone"}, v.t.phoneLbl), h("input", {"id": "tt-phone", "className": "inp", "type": "tel", "inputMode": "tel", "autoComplete": "tel", "placeholder": "(555) 555-0123", "value": v.phone, "onChange": v.onPhone, "aria-invalid": v.phoneErr, "aria-describedby": "tt-phone-help"}), (v.phoneErr ? h(F, null, h("p", {"className": "d-p", "style": "color: #B42318", "role": "alert"}, v.t.phoneErr)) : null), h("p", {"className": "fine", "id": "tt-phone-help"}, v.t.remConsent))), h("div", {"className": "mf"}, h("button", {"type": "button", "className": "btn btn-outline", "onClick": v.closeModal}, v.t.notNow), h("button", {"type": "submit", "className": "btn btn-orange"}, v.t.turnOn))))) : null), (v.mCheck ? h(F, null, h("div", {"className": "scrim", "onClick": v.scrimClose}, h("div", {"className": "modal", "role": "dialog", "aria-modal": "true", "aria-labelledby": "m-ck-t"}, h("div", {"className": "mh"}, h("h2", {"className": "mt", "id": "m-ck-t"}, v.checkTitle), h("button", {"className": "m-x", "onClick": v.closeModal, "aria-label": v.t.close}, h("svg", {"width": "18", "height": "18", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2.6", "strokeLinecap": "round", "strokeLinejoin": "round", "aria-hidden": "true"}, h("path", {"d": "M6 6l12 12M18 6L6 18"})))), h("div", {"className": "mb"}, (v.ckPick ? h(F, null, h("div", {"className": "stack", "style": "gap: 12px"}, h("p", {"className": "ms"}, v.t.checkS), h("p", {"className": "small"}, v.checkSub))) : null), (v.ckRunning ? h(F, null, h("div", {"className": "checking", "role": "status"}, h("span", {"className": "spin", "aria-hidden": "true"}), v.t.checking)) : null), (v.ckOk ? h(F, null, h("div", {"className": "result ok", "role": "status"}, h("span", {"className": "res-ic"}, h("svg", {"width": "18", "height": "18", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "3", "strokeLinecap": "round", "strokeLinejoin": "round", "aria-hidden": "true"}, h("path", {"d": "M5 12l5 5 9-10"}))), h("div", null, h("p", {"className": "r-t"}, v.t.okT), h("p", {"className": "r-s"}, v.t.okS)))) : null), (v.ckProb ? h(F, null, h("div", {"className": "result warn", "role": "alert"}, h("span", {"className": "res-ic"}, h("svg", {"width": "18", "height": "18", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2.6", "strokeLinecap": "round", "strokeLinejoin": "round", "aria-hidden": "true"}, h("path", {"d": "M12 7v6M12 16.5v.5"}))), h("div", null, h("p", {"className": "r-t"}, v.t.probT), h("p", {"className": "r-s"}, v.t.d2problem)))) : null)), (v.ckPick ? h(F, null, h("div", {"className": "mf"}, h("button", {"className": "btn btn-outline", "onClick": v.runCheck}, v.t.tabUpload), h("button", {"className": "btn btn-violet", "onClick": v.runCheck}, v.t.tabPhoto))) : null), (v.ckOk ? h(F, null, h("div", {"className": "mf"}, h("button", {"className": "btn btn-orange", "onClick": v.afterCheck}, v.afterCheckLbl))) : null), (v.ckProb ? h(F, null, h("div", {"className": "mf"}, h("button", {"className": "btn btn-outline", "onClick": v.closeModal}, v.t.later), h("button", {"className": "btn btn-orange", "onClick": v.retryCheck}, v.t.tryOther))) : null)))) : null), (v.mDelete ? h(F, null, h("div", {"className": "scrim", "onClick": v.scrimClose}, h("div", {"className": "modal", "role": "alertdialog", "aria-modal": "true", "aria-labelledby": "m-del-t"}, h("div", {"className": "mh"}, h("h2", {"className": "mt", "id": "m-del-t"}, v.t.delT)), h("div", {"className": "mb"}, h("p", {"className": "ms"}, v.t.delS)), h("div", {"className": "mf"}, h("button", {"className": "btn btn-outline", "onClick": v.closeModal}, v.t.keep), h("button", {"className": "btn", "style": "background: #B42318; color: #fff", "onClick": v.confirmDelete}, v.t.delete))))) : null), (v.hasToast ? h(F, null, h("div", {"className": "toast", "role": "status"}, h("svg", {"width": "18", "height": "18", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "3", "strokeLinecap": "round", "strokeLinejoin": "round", "aria-hidden": "true"}, h("path", {"d": "M5 12l5 5 9-10"})), v.toast)) : null));
  }
}

createRoot(document.getElementById("root")).render(React.createElement(App, {}));
