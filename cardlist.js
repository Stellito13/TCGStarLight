// ========================= 
// CARD DATA
// =========================
const CARDS = [
    {
        id: "C 0001",
        name: "Nathan",
        subtitle: "Original",
        rarity: "C",
        hp: 50,
        set: "NCE – FR",
        img: "./cards/Ccarte1.png",
        attack: "Lèche furtive",
        attackDmg: 20,
        effect: "Inflige 2X plus de dégâts à votre adversaire si sa carte active est une carte de type Stella",
        illustrator: "Stellito.rht"
    },
    {
        id: "R 0002",
        name: "Nathan",
        subtitle: "Original",
        rarity: "R",
        hp: 50,
        set: "NCE – FR",
        img: "./cards/Rcarte2.png",
        attack: "Lèche furtive",
        attackDmg: 20,
        effect: "Inflige 2X plus de dégâts à votre adversaire si sa carte active est une carte de type Stella",
        illustrator: "Stellito.rht"
    },
    {
        id: "P 0003",
        name: "Nathan",
        subtitle: "Original",
        rarity: "P",
        hp: 50,
        set: "NCE – FR",
        img: "./cards/Pcarte3.png",
        attack: "Lèche furtive",
        attackDmg: 20,
        effect: "Inflige 2X plus de dégâts à votre adversaire si sa carte active est une carte de type Stella",
        illustrator: "Stellito.rht"
    },
    {
        id: "G 0004",
        name: "Nathan",
        subtitle: "Original",
        rarity: "G",
        hp: 80,
        set: "NCE – FR",
        img: "./cards/Gcarte4.png",
        attack: "Lèche furtive",
        attackDmg: 30,
        effect: "Inflige 2X plus de dégâts à votre adversaire si sa carte active est une carte de type Stella",
        illustrator: "Stellito.rht"
    },
    {
        id: "C 0005",
        name: "Hum",
        subtitle: "Actually",
        rarity: "C",
        hp: 40,
        set: "NCE – FR",
        img: "./cards/Ccarte5.png",
        attack: "Balance sa science",
        attackDmg: 30,
        effect: "Ragebait son adversaire avec des faits ou des questions pour prouver qu'il a raison",
        illustrator: "Stellito.rht"
    },
    {
        id: "R 0006",
        name: "Hum",
        subtitle: "Actually",
        rarity: "R",
        hp: 40,
        set: "NCE – FR",
        img: "./cards/Rcarte6.png",
        attack: "Balance sa science",
        attackDmg: 30,
        effect: "Ragebait son adversaire avec des faits ou des questions pour prouver qu'il a raison",
        illustrator: "Stellito.rht"
    },
    {
        id: "P 0007",
        name: "Hum",
        subtitle: "Actually",
        rarity: "P",
        hp: 40,
        set: "NCE – FR",
        img: "./cards/Pcarte7.png",
        attack: "Balance sa science",
        attackDmg: 30,
        effect: "Ragebait son adversaire avec des faits ou des questions pour prouver qu'il a raison",
        illustrator: "Stellito.rht"
    },
    {
        id: "C 0008",
        name: "Aegnor",
        subtitle: "D&D",
        rarity: "C",
        hp: 30,
        set: "NCE – FR",
        img: "./cards/Ccarte8.png",
        attack: "AaAaaAaAAaah",
        attackDmg: 10,
        effect: "AaaaAAaAaaaaAAaAaaAAAaaah",
        illustrator: "Stellito.rht"
    },
    {
        id: "R 0009",
        name: "Aegnor",
        subtitle: "D&D",
        rarity: "R",
        hp: 30,
        set: "NCE – FR",
        img: "./cards/Rcarte9.png",
        attack: "AaAaaAaAAaah",
        attackDmg: 10,
        effect: "AaaaAAaAaaaaAAaAaaAAAaaah",
        illustrator: "Stellito.rht"
    },
    {
        id: "P 0010",
        name: "Aegnor",
        subtitle: "D&D",
        rarity: "P",
        hp: 30,
        set: "NCE – FR",
        img: "./cards/Pcarte10.png",
        attack: "AaAaaAaAAaah",
        attackDmg: 10,
        effect: "AaaaAAaAaaaaAAaAaaAAAaaah",
        illustrator: "Stellito.rht"
    }

];

// ========================= 
// RENDER
// =========================

const grid = document.getElementById("cardsGrid");
const cardCount = document.getElementById("cardCount");
const searchInput = document.getElementById("searchInput");
const filterBtns = document.querySelectorAll(".filter-btn");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");

let currentFilter = "all";
let currentSearch = "";

function renderCards() {
    const filtered = CARDS.filter(card => {
        const matchRarity = currentFilter === "all" || card.rarity === currentFilter;
        const q = currentSearch.toLowerCase();
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

    grid.innerHTML = filtered.map(card => `
                <div class="card-item" data-id="${card.id}" title="${card.name} – ${card.id}">
                    <img src="${card.img}" alt="${card.name} ${card.id}" loading="lazy" />
                    <div class="card-meta">
                        <span class="card-name">${card.name} <small style="font-family:Outfit,sans-serif;font-size:0.7rem;color:#888;">${card.subtitle}</small></span>
                        <div class="card-id">
                            <span class="rarity-badge badge-${card.rarity}">${card.rarity}</span>
                            ${card.id}
                            <span class="hp-pill">HP ${card.hp}</span>
                        </div>
                    </div>
                </div>
            `).join("");

    // Click → lightbox
    grid.querySelectorAll(".card-item").forEach(el => {
        el.addEventListener("click", () => {
            const found = CARDS.find(c => c.id === el.dataset.id);
            if (found) openLightbox(found);
        });
    });
}

// FILTERS
filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentFilter = btn.dataset.filter;
        renderCards();
    });
});

// SEARCH
searchInput.addEventListener("input", () => {
    currentSearch = searchInput.value;
    renderCards();
});

// LIGHTBOX
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

// INIT
renderCards();