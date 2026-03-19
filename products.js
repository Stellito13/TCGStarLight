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
/* CAROUSEL PUB AUTO         */
/* ========================= */

const adTrack  = document.getElementById("adTrack")
const adSlides = document.querySelectorAll(".ad-slide")

if (adTrack && adSlides.length > 0) {
    let adIndex = 0
    function rotateAds() {
        adIndex = (adIndex + 1) % adSlides.length
        adTrack.style.transform = `translateX(-${adIndex * 100}%)`
    }
    setInterval(rotateAds, 4000)
}


/* ========================= */
/* CAROUSEL CARTES           */
/* ========================= */

const carousel = document.getElementById("carousel")

if (carousel) {
    let order = ["left", "center", "right"]
    carousel.addEventListener("click", rotate)

    function rotate() {
        const cards = document.querySelectorAll(".card")
        const currentCenterIndex = order.indexOf("center")
        cards[currentCenterIndex].classList.add("flipped")
        order.push(order.shift())
        cards.forEach((card, i) => {
            card.classList.remove("left", "center", "right")
            card.classList.add(order[i])
        })
        const newCenterIndex = order.indexOf("center")
        setTimeout(() => { cards[newCenterIndex].classList.remove("flipped") }, 400)
    }
}


/* ========================= */
/* PANNEAU PRÉCOMMANDE       */
/* ========================= */

const preorderPanel   = document.getElementById("preorderPanel")
const preorderOverlay = document.getElementById("preorderOverlay")
const preorderClose   = document.getElementById("preorderClose")
const btnNext         = document.getElementById("btnNext")
const btnBack         = document.getElementById("btnBack")
const progressBar     = document.getElementById("progressBar")
const stepLabel       = document.getElementById("stepLabel")
const panelTitle      = document.getElementById("panelTitle")

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

    document.querySelectorAll(".btn-preorder").forEach(btn => {
        btn.addEventListener("click", e => {
            e.preventDefault()
            currentProduct = {
                name:  btn.dataset.name  || "Produit",
                tag:   btn.dataset.tag   || "Produit",
                price: parseFloat(btn.dataset.price) || 0
            }
            qty = 1
            document.getElementById("qtyValue").textContent = qty
            document.getElementById("recapTag").textContent  = currentProduct.tag
            document.getElementById("recapName").textContent = currentProduct.name
            goToStep(1)
            openPanel()
        })
    })

    function openPanel() {
        preorderPanel.classList.add("open")
        preorderOverlay.classList.add("open")
        document.body.style.overflow = "hidden"
    }

    function closePanel() {
        preorderPanel.classList.remove("open")
        preorderOverlay.classList.remove("open")
        document.body.style.overflow = ""
    }

    if (preorderClose)   preorderClose.addEventListener("click", closePanel)
    if (preorderOverlay) preorderOverlay.addEventListener("click", closePanel)

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
            setTimeout(closePanel, 2200)
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
        stepLabel.textContent  = s.label
        panelTitle.textContent = s.title
        btnNext.textContent    = s.next
        btnNext.classList.remove("success")
        progressBar.style.width = (n / 4 * 100) + "%"
        btnBack.style.display   = n === 1 ? "none" : "inline-block"
        if (n === 2) buildSummary()
        preorderPanel.scrollTop = 0
    }

    function buildSummary() {
        const lines = document.getElementById("summaryLines")
        const total = document.getElementById("summaryTotal")
        const unitPrice  = currentProduct.price
        const totalPrice = (unitPrice * qty).toFixed(2)
        lines.innerHTML = `
            <div class="summary-line"><span>${currentProduct.name}</span><span>${unitPrice.toFixed(2)} €</span></div>
            <div class="summary-line"><span>Quantité</span><span>× ${qty}</span></div>
            <div class="summary-line"><span>Livraison</span><span>À confirmer</span></div>
        `
        total.textContent = totalPrice + " €"
    }

    btnBack.style.display = "none"
}