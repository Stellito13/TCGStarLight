/* ========================= */
/* MENU OVERLAY              */
/* ========================= */

const menuBtn       = document.getElementById("menuBtn")
const menuOverlay   = document.getElementById("menuOverlay")
const menuOverlayBg = document.getElementById("menuOverlayBg")

if (menuBtn && menuOverlay) {
    menuBtn.addEventListener("click", () => menuOverlay.classList.add("open"))
}
if (menuOverlayBg && menuOverlay) {
    menuOverlayBg.addEventListener("click", () => menuOverlay.classList.remove("open"))
}

/* ========================= */
/* NAVIGATION LISTE ↔ DÉTAIL */
/* ========================= */

function showDetail(id) {
    document.getElementById("productsList").classList.add("hidden")
    document.querySelectorAll(".product-detail").forEach(d => d.classList.remove("active"))
    const target = document.getElementById("detail-" + id)
    if (target) target.classList.add("active")
    window.scrollTo({ top: 0, behavior: "smooth" })
}

function showList() {
    document.getElementById("productsList").classList.remove("hidden")
    document.querySelectorAll(".product-detail").forEach(d => d.classList.remove("active"))
    window.scrollTo({ top: 0, behavior: "smooth" })
}

// Clic sur les cards — délégation pour capturer aussi le bouton enfant
const productsList = document.getElementById("productsList")
if (productsList) {
    productsList.addEventListener("click", e => {
        const card = e.target.closest(".product-card")
        if (card) showDetail(card.dataset.id)
    })
}

// Clic sur les produits liés
document.querySelectorAll(".related-card").forEach(card => {
    card.addEventListener("click", () => showDetail(card.dataset.id))
})

/* ========================= */
/* PANNEAU PRÉCOMMANDE       */
/* ========================= */

const preorderPanel   = document.getElementById("preorderPanel")
const preorderOverlay = document.getElementById("preorderOverlay")
const preorderClose   = document.getElementById("preorderClose")
const btnNext         = document.getElementById("btnNext")
const btnBack         = document.getElementById("btnBack")
const progressBar     = document.getElementById("progressBar")
const stepLabelEl     = document.getElementById("stepLabel")
const panelTitleEl    = document.getElementById("panelTitle")

if (preorderPanel && btnNext && btnBack) {

    const STEPS = [
        { label: "Étape 1 sur 4", title: "Choisir la quantité",  next: "Continuer →" },
        { label: "Étape 2 sur 4", title: "Résumé de commande",   next: "Continuer →" },
        { label: "Étape 3 sur 4", title: "Adresse de livraison", next: "Continuer →" },
        { label: "Étape 4 sur 4", title: "Moyen de paiement",    next: "Confirmer la précommande ✦" },
    ]

    let currentStep = 1
    let currentProduct = { name: "", tag: "", price: 0 }
    let qty = 1

    function openPreorder(name, tag, price) {
        currentProduct = { name, tag, price: parseFloat(price) }
        qty = 1
        document.getElementById("qtyValue").textContent = 1
        document.getElementById("recapTag").textContent  = tag
        document.getElementById("recapName").textContent = name
        const recapPrice = document.getElementById("recapPrice")
        if (recapPrice) recapPrice.textContent = parseFloat(price).toFixed(2).replace(".", ",") + " €"
        goToStep(1)
        preorderPanel.classList.add("open")
        preorderOverlay.classList.add("open")
        document.body.style.overflow = "hidden"
    }

    function closePreorder() {
        preorderPanel.classList.remove("open")
        preorderOverlay.classList.remove("open")
        document.body.style.overflow = ""
    }

    // Boutons précommande sur les fiches détail
    document.querySelectorAll(".btn-detail-preorder").forEach(btn => {
        btn.addEventListener("click", () =>
            openPreorder(btn.dataset.name, btn.dataset.tag, btn.dataset.price)
        )
    })

    if (preorderClose)   preorderClose.addEventListener("click", closePreorder)
    if (preorderOverlay) preorderOverlay.addEventListener("click", closePreorder)

    document.getElementById("qtyMinus").addEventListener("click", () => {
        if (qty > 1) { qty--; document.getElementById("qtyValue").textContent = qty }
    })
    document.getElementById("qtyPlus").addEventListener("click", () => {
        if (qty < 99) { qty++; document.getElementById("qtyValue").textContent = qty }
    })

    btnNext.addEventListener("click", () => {
        if (currentStep < 4) {
            goToStep(currentStep + 1)
        } else {
            btnNext.textContent = "✔ Précommande enregistrée !"
            btnNext.classList.add("success")
            btnNext.disabled = true
            setTimeout(closePreorder, 2200)
            setTimeout(() => {
                btnNext.textContent = STEPS[3].next
                btnNext.classList.remove("success")
                btnNext.disabled = false
            }, 2500)
        }
    })

    btnBack.addEventListener("click", () => {
        if (currentStep > 1) goToStep(currentStep - 1)
    })

    function goToStep(n) {
        document.getElementById("step" + currentStep).classList.remove("active")
        currentStep = n
        document.getElementById("step" + currentStep).classList.add("active")
        const s = STEPS[n - 1]
        stepLabelEl.textContent  = s.label
        panelTitleEl.textContent = s.title
        btnNext.textContent      = s.next
        btnNext.classList.remove("success")
        progressBar.style.width = (n / 4 * 100) + "%"
        btnBack.style.display   = n === 1 ? "none" : "inline-block"
        if (n === 2) buildSummary()
        preorderPanel.scrollTop = 0
    }

    function buildSummary() {
        const lines = document.getElementById("summaryLines")
        const total = document.getElementById("summaryTotal")
        const t = (currentProduct.price * qty).toFixed(2).replace(".", ",")
        lines.innerHTML = `
            <div class="summary-line"><span>${currentProduct.name}</span><span>${currentProduct.price.toFixed(2).replace(".", ",")} €</span></div>
            <div class="summary-line"><span>Quantité</span><span>× ${qty}</span></div>
            <div class="summary-line"><span>Livraison</span><span>À confirmer</span></div>
        `
        total.textContent = t + " €"
    }

    btnBack.style.display = "none"
}