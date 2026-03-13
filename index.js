/* ========================= */
/* MENU OVERLAY */
/* ========================= */

const menuBtn = document.getElementById("menuBtn")
const menuOverlay = document.getElementById("menuOverlay")

menuBtn.addEventListener("click", () => {
    menuOverlay.classList.add("open")
})

document.getElementById("menuOverlayBg").addEventListener("click", () => {
    menuOverlay.classList.remove("open")
})


/* ========================= */
/* CAROUSEL PUB AUTO */
/* ========================= */

let adIndex = 0
const adTrack = document.getElementById("adTrack")
const adSlides = document.querySelectorAll(".ad-slide")

function rotateAds() {

    adIndex++

    if (adIndex >= adSlides.length) {
        adIndex = 0
    }

    adTrack.style.transform = `translateX(-${adIndex * 100}%)`

}

setInterval(rotateAds, 4000)



/* ========================= */
/* CAROUSEL CARTES */
/* ========================= */

const carousel = document.getElementById("carousel")
let order = ["left", "center", "right"]

carousel.addEventListener("click", rotate)

function rotate() {

    const cards = document.querySelectorAll(".card")

    // La carte qui était au centre va partir : on la retourne (arrière visible)
    // La carte qui arrive au centre : on la remet face avant
    const currentCenterIndex = order.indexOf("center")

    // Retourner la carte qui quitte le centre
    cards[currentCenterIndex].classList.add("flipped")

    order.push(order.shift())

    cards.forEach((card, i) => {
        card.classList.remove("left", "center", "right")
        card.classList.add(order[i])
    })

    // La nouvelle carte au centre : enlever le flip après un court délai
    const newCenterIndex = order.indexOf("center")
    setTimeout(() => {
        cards[newCenterIndex].classList.remove("flipped")
    }, 400)

}
