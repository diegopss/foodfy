const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards){
    card.addEventListener("click", function(){
            const p = card.querySelector('p')
            const imgCard = card.querySelector('img')
            const img = imgCard.src

            modalOverlay.classList.add('active')
            modalOverlay.querySelector("img").src =`${img}`
            modalOverlay.querySelector('p').innerHTML = p.innerText
            
    })
}

const closeModal = document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove("active")
   
})
