/* ============================================================
   CONFIG ÚNICA DEL EVENTO — XV Años Luz Daniela Moreno Cuevas
   Cambiar SOLO aquí. Todas las páginas leen de window.EVENT_CONFIG.
   ============================================================ */
window.EVENT_CONFIG = {
    // ── Identidad ─────────────────────────────────────────────
    slug:        'xv-luz-daniela',
    nombre:      'Luz Daniela Moreno Cuevas',
    nombreCorto: 'Luz Daniela',
    tipo:        'XV Años',

    // ── Fecha (mes en base 0: 5 = junio) ──────────────────────
    fechaEvento: new Date(2026, 5, 20, 13, 0, 0),
    fechaTexto:  'Sábado 20 de junio de 2026',

    // ── Contacto ──────────────────────────────────────────────
    telefono:        '524779203776',                 // WhatsApp FORO 7
    contactoTitular: 'Nancy Socorro Cuevas Gracida', // contratante (mamá)

    // ── Paquete contratado ────────────────────────────────────
    // Tomado de contrato.html: "PAQUETE 1 MODIFICADO —
    // Paquete 1 sin ampliación 50x60 pero incluyendo tomas con dron".
    // Por eso este selector NO lleva la herramienta "Ampliación".
    paquete: {
        nombre:          'Fotografía y Video · Paquete 1 modificado (con dron)',
        fotosImpresas:   50,
        medidaImpresion: '5x7 pulgadas',
        ampliaciones:    0,
        videoHoras:      '2:00 hrs en 4K (original y copia)',
        incluye: [
            'Cobertura completa: sesión previa, misa y fiesta',
            '50 fotos del evento impresas en 5x7 pulgadas',
            '1 película USB en 4K de 2:00 hrs, original y copia',
            '1 caja impresa para la USB',
            '1 caja impresa para las fotografías',
            '1 sesión fotográfica antes del evento o el día del evento',
            'Tomas aéreas con dron',
            '1 hora de ceremonia y 4 horas de recepción'
        ]
    },

    // ── Límites del selector ──────────────────────────────────
    limiteImpresion:    50,
    limiteAmpliacion:   0,      // no contratada
    limiteAlbum:        null,   // null = sin límite
    costoFotoAdicional: 15,     // MXN por foto impresa extra

    // ── Supabase ──────────────────────────────────────────────
    supabaseUrl:  'https://nzpujmlienzfetqcgsxz.supabase.co',
    supabaseAnon: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56cHVqbWxpZW56ZmV0cWNnc3h6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2ODYzMzYsImV4cCI6MjA5MDI2MjMzNn0.xl3lsb-KYj5tVLKTnzpbsdEGoV9ySnswH4eyRuyEH1s'
};

/* ============================================================
   HERRAMIENTAS DEL SELECTOR
   Este arreglo define TODO: tarjetas de conteo, botones de
   filtro, botones del modal, colores, textos de ayuda y los
   filtros válidos de album.html?filtro=…
   Luz Daniela NO lleva "Ampliación" (el contrato es el Paquete 1
   SIN ampliación 50x60) ni "Invitación web" (ya está en index.html).
   ============================================================ */
(function (C) {
window.HERRAMIENTAS = [
    {
        id:      'impresion',
        icono:   '📸',
        nombre:  'Impresión',
        textoBtn:'Impresión (' + C.paquete.medidaImpresion.replace(' pulgadas', '') + ')',
        limite:  C.limiteImpresion,
        // Como se lee en el encabezado del selector.
        fraseIncluida: C.paquete.fotosImpresas + ' fotos impresas en ' + C.paquete.medidaImpresion,
        columna: 'impresion',      // columna booleana en Supabase
        ayuda:   'Marca las fotos que quieres <strong>impresas en papel tamaño ' + C.paquete.medidaImpresion +
                 '</strong>. Tu paquete incluye ' + C.limiteImpresion + '. Si marcas más, abajo aparece un aviso naranja ' +
                 'con el costo extra ($' + C.costoFotoAdicional + ' MXN por foto adicional). Estas son las fotos que ' +
                 'recibes físicas en tu caja impresa.'
    },
    {
        id:      'album',
        icono:   '📖',
        nombre:  'Álbum Digital',
        textoBtn:'Álbum Digital',
        limite:  null,
        columna: 'datos.album',    // se guarda dentro del jsonb "datos"
        ayuda:   'Las fotos que quieres en tu <strong>álbum digital</strong>: la galería en línea que puedes compartir por WhatsApp con familia y amigos. No tiene límite y no cuesta extra. Marca aquí tus favoritas aunque ya las hayas marcado para impresión.'
    },
    {
        id:      'descartada',
        icono:   '❌',
        nombre:  'Descartadas',
        textoBtn:'Descartar',
        limite:  null,
        columna: 'descartada',
        ayuda:   'Fotos que <strong>no quieres</strong> (saliste parpadeando, movida, repetida…). Al descartarlas <strong>desaparecen de la vista general</strong> para que no estorben mientras eliges. No se borran: siempre puedes verlas en el filtro «Descartadas» y quitarles la marca si te arrepientes.'
    }
];
})(window.EVENT_CONFIG);
