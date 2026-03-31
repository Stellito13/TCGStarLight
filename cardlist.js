// =========================
// SETS DEFINITION
// — Ajouter ici les futures extensions
// =========================
const SETS = [
    {
        id: "NCE",
        name: "New Collection Edition",
        label: "Set #1 · NCE – FR",
        year: "2026",
        total: 35,
        status: "upcoming" // "available" | "upcoming" | "coming_soon"
    },
    // Exemple d'extension future — décommenter et remplir quand disponible :
    {
        id: "PC",
        name: "Pikmins Collection",
        label: "Set #2 · PC – FR",
        year: "2027",
        total: 0,
        status: "coming_soon" // "available" | "upcoming" | "coming_soon"
    },
];

// =========================
// CARD DATA — Set #1 NCE
// =========================
const CARDS = [
    {
        id: "C 0001", name: "Nathan", subtitle: "Original", rarity: "C", hp: 50, set: "NCE",
        img: "./cards/Ccarte1.png", attack: "Lèche furtive", attackDmg: 20,
        effect: "Inflige 2X plus de dégâts à votre adversaire si sa carte active est une carte de type Stella",
        illustrator: "Stellito.rht"
    },
    {
        id: "R 0002", name: "Nathan", subtitle: "Original", rarity: "R", hp: 50, set: "NCE",
        img: "./cards/Rcarte2.png", attack: "Lèche furtive", attackDmg: 20,
        effect: "Inflige 2X plus de dégâts à votre adversaire si sa carte active est une carte de type Stella",
        illustrator: "Stellito.rht"
    },
    {
        id: "P 0003", name: "Nathan", subtitle: "Original", rarity: "P", hp: 50, set: "NCE",
        img: "./cards/Pcarte3.png", attack: "Lèche furtive", attackDmg: 20,
        effect: "Inflige 2X plus de dégâts à votre adversaire si sa carte active est une carte de type Stella",
        illustrator: "Stellito.rht"
    },
    {
        id: "G 0004", name: "Nathan", subtitle: "Original", rarity: "G", hp: 80, set: "NCE",
        img: "./cards/Gcarte4.png", attack: "Lèche furtive", attackDmg: 30,
        effect: "Inflige 2X plus de dégâts à votre adversaire si sa carte active est une carte de type Stella",
        illustrator: "Stellito.rht"
    },
    {
        id: "C 0005", name: "Hum", subtitle: "Actually", rarity: "C", hp: 40, set: "NCE",
        img: "./cards/Ccarte5.png", attack: "Balance sa science", attackDmg: 30,
        effect: "Ragebait son adversaire avec des faits ou des questions pour prouver qu'il a raison",
        illustrator: "Stellito.rht"
    },
    {
        id: "R 0006", name: "Hum", subtitle: "Actually", rarity: "R", hp: 40, set: "NCE",
        img: "./cards/Rcarte6.png", attack: "Balance sa science", attackDmg: 30,
        effect: "Ragebait son adversaire avec des faits ou des questions pour prouver qu'il a raison",
        illustrator: "Stellito.rht"
    },
    {
        id: "P 0007", name: "Hum", subtitle: "Actually", rarity: "P", hp: 40, set: "NCE",
        img: "./cards/Pcarte7.png", attack: "Balance sa science", attackDmg: 30,
        effect: "Ragebait son adversaire avec des faits ou des questions pour prouver qu'il a raison",
        illustrator: "Stellito.rht"
    },
    {
        id: "C 0008", name: "Aegnor", subtitle: "D&D", rarity: "C", hp: 30, set: "NCE",
        img: "./cards/Ccarte8.png", attack: "AaAaaAaAAaah", attackDmg: 10,
        effect: "AaaaAAaAaaaaAAaAaaAAAaaah",
        illustrator: "Stellito.rht"
    },
    {
        id: "R 0009", name: "Aegnor", subtitle: "D&D", rarity: "R", hp: 30, set: "NCE",
        img: "./cards/Rcarte9.png", attack: "AaAaaAaAAaah", attackDmg: 10,
        effect: "AaaaAAaAaaaaAAaAaaAAAaaah",
        illustrator: "Stellito.rht"
    },
    {
        id: "P 0010", name: "Aegnor", subtitle: "D&D", rarity: "P", hp: 30, set: "NCE",
        img: "./cards/Pcarte10.png", attack: "AaAaaAaAAaah", attackDmg: 10,
        effect: "AaaaAAaAaaaaAAaAaaAAAaaah",
        illustrator: "Stellito.rht"
    },
    {
        id: "C 0011", name: "Dragueur", subtitle: "Aveugle", rarity: "C", hp: 30, set: "NCE",
        img: "./cards/Ccarte11.png", attack: "Tentative de pécho", attackDmg: 40,
        effect: "Alcoolise son adversaire avec un pack de bières de 6 Goudales pour conclure",
        illustrator: "Stellito.rht"
    },
    {
        id: "R 0012", name: "Dragueur", subtitle: "Aveugle", rarity: "R", hp: 30, set: "NCE",
        img: "./cards/Rcarte12.png", attack: "Tentative de pécho", attackDmg: 40,
        effect: "Alcoolise son adversaire avec un pack de bières de 6 Goudales pour conclure",
        illustrator: "Stellito.rht"
    },
    {
        id: "P 0013", name: "Dragueur", subtitle: "Aveugle", rarity: "P", hp: 30, set: "NCE",
        img: "./cards/Pcarte13.png", attack: "Tentative de pécho", attackDmg: 40,
        effect: "Alcoolise son adversaire avec un pack de bières de 6 Goudales pour conclure",
        illustrator: "Stellito.rht"
    },
    {
        id: "C 0014", name: "Poser", subtitle: "en festival", rarity: "C", hp: 50, set: "NCE",
        img: "./cards/Ccarte14.png", attack: "Tentative de pécho", attackDmg: 30,
        effect: "Va en concert ou festival sans écouté la musique supplément écoute Fontain D.C",
        illustrator: "Stellito.rht"
    },
    {
        id: "R 0015", name: "Poser", subtitle: "en festival", rarity: "R", hp: 50, set: "NCE",
        img: "./cards/Rcarte15.png", attack: "Tentative de pécho", attackDmg: 30,
        effect: "Va en concert ou festival sans écouté la musique supplément écoute Fontain D.C",
        illustrator: "Stellito.rht"
    },
    {
        id: "P 0016", name: "Poser", subtitle: "en festival", rarity: "P", hp: 50, set: "NCE",
        img: "./cards/Pcarte16.png", attack: "Tentative de pécho", attackDmg: 30,
        effect: "Va en concert ou festival sans écouté la musique supplément écoute Fontain D.C",
        illustrator: "Stellito.rht"
    },
    {
        id: "G 0017", name: "Poser", subtitle: "en festival", rarity: "G", hp: 80, set: "NCE",
        img: "./cards/Gcarte17.png", attack: "Tentative de pécho", attackDmg: 30,
        effect: "Va en concert ou festival sans écouté la musique supplément écoute Fontain D.C",
        illustrator: "Stellito.rht"
    },
    {
        id: "C 0018", name: "Bouclier", subtitle: "Humain", rarity: "C", hp: 40, set: "NCE",
        img: "./cards/Ccarte18.png", attack: "Tank", attackDmg: 50,
        effect: "Bloque les coups des pogos pour protéger un minimoys en carton pendant LANDMVRKS",
        illustrator: "Stellito.rht"
    },
    {
        id: "R 0019", name: "Bouclier", subtitle: "Humain", rarity: "R", hp: 40, set: "NCE",
        img: "./cards/Rcarte19.png", attack: "Tank", attackDmg: 50,
        effect: "Bloque les coups des pogos pour protéger un minimoys en carton pendant LANDMVRKS",
        illustrator: "Stellito.rht"
    },
    {
        id: "P 0020", name: "Bouclier", subtitle: "Humain", rarity: "P", hp: 40, set: "NCE",
        img: "./cards/Pcarte20.png", attack: "Tank", attackDmg: 50,
        effect: "Bloque les coups des pogos pour protéger un minimoys en carton pendant LANDMVRKS",
        illustrator: "Stellito.rht"
    },
    {
        id: "C 0021", name: "Puppycat", subtitle: "Anger", rarity: "C", hp: 30, set: "NCE",
        img: "./cards/Ccarte21.png", attack: "Babibou", attackDmg: 20,
        effect: "Babiboubabiboubaba !",
        illustrator: "Stellito.rht"
    },
    {
        id: "R 0022", name: "Puppycat", subtitle: "Anger", rarity: "R", hp: 30, set: "NCE",
        img: "./cards/Rcarte22.png", attack: "Babibou", attackDmg: 20,
        effect: "Babiboubabiboubaba !",
        illustrator: "Stellito.rht"
    },
    {
        id: "P 0023", name: "Puppycat", subtitle: "Anger", rarity: "P", hp: 30, set: "NCE",
        img: "./cards/Pcarte23.png", attack: "Babibou", attackDmg: 20,
        effect: "Babiboubabiboubaba !",
        illustrator: "Stellito.rht"
    },
    {
        id: "C 0024", name: "Scrat", subtitle: "Dieu", rarity: "C", hp: 20, set: "NCE",
        img: "./cards/Ccarte24.png", attack: "Autisme", attackDmg: 40,
        effect: "Transmet la bonne parole a son gang d'autiste",
        illustrator: "Stellito.rht"
    },
    {
        id: "R 0025", name: "Scrat", subtitle: "Dieu", rarity: "R", hp: 20, set: "NCE",
        img: "./cards/Rcarte25.png", attack: "Autisme", attackDmg: 40,
        effect: "Transmet la bonne parole a son gang d'autiste",
        illustrator: "Stellito.rht"
    },
    {
        id: "P 0026", name: "Scrat", subtitle: "Dieu", rarity: "P", hp: 20, set: "NCE",
        img: "./cards/Pcarte26.png", attack: "Autisme", attackDmg: 40,
        effect: "Transmet la bonne parole a son gang d'autiste",
        illustrator: "Stellito.rht"
    },
    {
        id: "C 0027", name: "Cacahuètes", subtitle: "Fiancée", rarity: "C", hp: 30, set: "NCE",
        img: "./cards/Ccarte27.png", attack: "Sa femme", attackDmg: 20,
        effect: "Ils vont se marié et avoir des enfants cacahuètes ya pas de blague juste des faits",
        illustrator: "Stellito.rht"
    },
    {
        id: "R 0028", name: "Cacahuètes", subtitle: "Fiancée", rarity: "R", hp: 30, set: "NCE",
        img: "./cards/Rcarte28.png", attack: "Sa femme", attackDmg: 20,
        effect: "Ils vont se marié et avoir des enfants cacahuètes ya pas de blague juste des faits",
        illustrator: "Stellito.rht"
    },
    {
        id: "P 0029", name: "Cacahuètes", subtitle: "Fiancée", rarity: "P", hp: 30, set: "NCE",
        img: "./cards/Pcarte29.png", attack: "Sa femme", attackDmg: 20,
        effect: "Ils vont se marié et avoir des enfants cacahuètes ya pas de blague juste des faits",
        illustrator: "Stellito.rht"
    },
    {
        id: "C 0030", name: "Chouffe", subtitle: "Rouge", rarity: "C", hp: 20, set: "NCE",
        img: "./cards/Ccarte30.png", attack: "P'tite Bière", attackDmg: 20,
        effect: "Redonne les HP perdu à la carte active",
        illustrator: "Stellito.rht"
    },
    {
        id: "R 0031", name: "Chouffe", subtitle: "Rouge", rarity: "R", hp: 40, set: "NCE",
        img: "./cards/Rcarte31.png", attack: "P'tite Bière", attackDmg: 20,
        effect: "Redonne les HP perdu à la carte active",
        illustrator: "Stellito.rht"
    },
    {
        id: "C 0032", name: "Fourmi", subtitle: "/ Centiped", rarity: "C", hp: 30, set: "NCE",
        img: "./cards/Ccarte32.png", attack: "Insectes", attackDmg: 20,
        effect: "Redonne les HP perdu à la carte active",
        illustrator: "Stellito.rht"
    },
    {
        id: "R 0033", name: "Fourmi", subtitle: "/ Centiped", rarity: "R", hp: 50, set: "NCE",
        img: "./cards/Rcarte33.png", attack: "Insectes", attackDmg: 20,
        effect: "Redonne les HP perdu à la carte active",
        illustrator: "Stellito.rht"
    },
    {
        id: "C 0034", name: "Gros", subtitle: "Banger", rarity: "C", hp: 20, set: "NCE",
        img: "./cards/Ccarte34.png", attack: "Tomates", attackDmg: 20,
        effect: "Enlève des HP à la carte active de l'adversaire",
        illustrator: "Stellito.rht"
    },
    {
        id: "R 0035", name: "Gros", subtitle: "Banger", rarity: "R", hp: 30, set: "NCE",
        img: "./cards/Rcarte35.png", attack: "Tomates", attackDmg: 20,
        effect: "Enlève des HP à la carte active de l'adversaire",
        illustrator: "Stellito.rht"
    },
    {
        id: "C 0036", name: "Monster", subtitle: "Munch", rarity: "C", hp: 10, set: "NCE",
        img: "./cards/Ccarte36.png", attack: "Ketchup", attackDmg: 10,
        effect: "Enlève les dégats infliger à la cartes active pendant 1 tour",
        illustrator: "Stellito.rht"
    },
    {
        id: "R 0037", name: "Monster", subtitle: "Munch", rarity: "R", hp: 20, set: "NCE",
        img: "./cards/Rcarte37.png", attack: "Ketchup", attackDmg: 20,
        effect: "Enlève les dégats infliger à la cartes active pendant 3 tours",
        illustrator: "Stellito.rht"
    },
    {
        id: "C 0038", name: "Schtroumpf", subtitle: "Bande", rarity: "C", hp: 20, set: "NCE",
        img: "./cards/Ccarte38.png", attack: "Inconnu", attackDmg: 20,
        effect: "Ajoute des HP à la carte active",
        illustrator: "Stellito.rht"
    },
    {
        id: "R 0039", name: "Schtroumpf", subtitle: "Bande", rarity: "R", hp: 30, set: "NCE",
        img: "./cards/Rcarte39.png", attack: "Inconnu", attackDmg: 30,
        effect: "Ajoute des HP à la carte active",
        illustrator: "Stellito.rht"
    }

];

// =========================
// STATE
// =========================
const grid = document.getElementById("cardsGrid");
const cardCount = document.getElementById("cardCount");
const searchInput = document.getElementById("searchInput");
const filterBtns = document.querySelectorAll(".filter-btn");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");

let currentFilter = "all";
let currentSearch = "";

// =========================
// RENDER — par set
// =========================
function renderCards() {
    const q = currentSearch.toLowerCase();

    const filtered = CARDS.filter(card => {
        const matchRarity = currentFilter === "all" || card.rarity === currentFilter;
        const matchSearch = !q
            || card.name.toLowerCase().includes(q)
            || card.id.toLowerCase().includes(q)
            || card.attack.toLowerCase().includes(q);
        return matchRarity && matchSearch;
    });

    cardCount.textContent = `${filtered.length} carte${filtered.length !== 1 ? "s" : ""}`;

    if (filtered.length === 0) {
        grid.innerHTML = `<div class="no-results">Aucune carte trouvée.</div>`;
        return;
    }

    // Grouper par set
    const bySet = {};
    filtered.forEach(card => {
        if (!bySet[card.set]) bySet[card.set] = [];
        bySet[card.set].push(card);
    });

    // Construire le HTML set par set, dans l'ordre de SETS
    let html = "";
    SETS.forEach(setDef => {
        const cards = bySet[setDef.id];

        // Section header — toujours affichée même si pas de cartes (status coming_soon)
        html += `<div class="set-section" data-set="${setDef.id}">`;
        html += buildSetHeader(setDef, cards ? cards.length : 0);

        if (setDef.status === "coming_soon" || !cards) {
            html += buildComingSoon(setDef);
        } else {
            html += `<div class="set-grid">`;
            html += cards.map(card => buildCardHTML(card)).join("");
            html += `</div>`;
        }

        html += `</div>`;
    });

    grid.innerHTML = html;

    // Listeners lightbox
    grid.querySelectorAll(".card-item").forEach(el => {
        el.addEventListener("click", () => {
            const found = CARDS.find(c => c.id === el.dataset.id);
            if (found) openLightbox(found);
        });
    });
}

function buildSetHeader(setDef, count) {
    const statusBadge = {
        available: `<span class="set-status available">Disponible</span>`,
        upcoming: `<span class="set-status upcoming">Précommande · 23 Août 2026</span>`,
        coming_soon: `<span class="set-status coming-soon">À venir</span>`,
    }[setDef.status] || "";

    return `
        <div class="set-header">
            <div class="set-header-left">
                <span class="set-number">${setDef.label}</span>
                <h3 class="set-title">${setDef.name}</h3>
            </div>
            <div class="set-header-right">
                ${statusBadge}
                ${count > 0 ? `<span class="set-count">${count} / ${setDef.total}</span>` : `<span class="set-count">— / ${setDef.total}</span>`}
            </div>
        </div>
        <div class="set-rule"></div>
    `;
}

function buildCardHTML(card) {
    return `
        <div class="card-item" data-id="${card.id}" title="${card.name} – ${card.id}">
            <img src="${card.img}" alt="${card.name} ${card.id}" loading="lazy" />
            <div class="card-meta">
                <span class="card-name">${card.name} <small class="card-subtitle">${card.subtitle}</small></span>
                <div class="card-id">
                    <span class="rarity-badge badge-${card.rarity}">${card.rarity}</span>
                    ${card.id}
                    <span class="hp-pill">HP ${card.hp}</span>
                </div>
            </div>
        </div>
    `;
}

function buildComingSoon(setDef) {
    return `
        <div class="set-coming-soon">
            <div class="coming-soon-icon">✦</div>
            <p class="coming-soon-title">${setDef.name}</p>
            <p class="coming-soon-sub">Cette extension n'est pas encore disponible. Revenez bientôt !</p>
        </div>
    `;
}

// =========================
// FILTERS
// =========================
filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentFilter = btn.dataset.filter;
        renderCards();
    });
});

// =========================
// SEARCH
// =========================
searchInput.addEventListener("input", () => {
    currentSearch = searchInput.value;
    renderCards();
});

// =========================
// LIGHTBOX
// =========================
function openLightbox(card) {
    lightboxImg.src = card.img;
    lightboxImg.alt = card.name;
    lightbox.classList.add("open");
}

function closeLightbox() {
    lightbox.classList.remove("open");
}

document.getElementById("lightboxBg").addEventListener("click", closeLightbox);
document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
document.addEventListener("keydown", e => { if (e.key === "Escape") closeLightbox(); });

// =========================
// INIT
// =========================
renderCards();