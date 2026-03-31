/* ========================= */
/* NAVIGATION LISTE ↔ DÉTAIL */
/* ========================= */
;(function () {

    function showDetail(id) {
        document.getElementById("productsList").classList.add("hidden")
        document.querySelectorAll(".product-detail").forEach(d => d.classList.remove("active"))
        const target = document.getElementById("detail-" + id)
        if (target) target.classList.add("active")
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    // Exposer showList globalement (appelé par onclick="showList()" dans le HTML)
    window.showList = function() {
        document.getElementById("productsList").classList.remove("hidden")
        document.querySelectorAll(".product-detail").forEach(d => d.classList.remove("active"))
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    // Clic sur les product-card (délégation sur tout le productsList)
    const productsList = document.getElementById("productsList")
    if (productsList) {
        productsList.addEventListener("click", e => {
            const card = e.target.closest(".product-card")
            if (card && card.dataset.id) showDetail(card.dataset.id)
        })
    }

    // Clic sur les produits liés
    document.querySelectorAll(".related-card").forEach(card => {
        card.addEventListener("click", () => showDetail(card.dataset.id))
    })

    // Boutons précommande sur les fiches détail → utilise openPreorder défini dans index.js
    document.querySelectorAll(".btn-detail-preorder").forEach(btn => {
        btn.addEventListener("click", () => {
            if (window.openPreorder)
                window.openPreorder(btn.dataset.name, btn.dataset.tag, btn.dataset.price)
        })
    })

})()