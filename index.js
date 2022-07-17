const revealBtn = document.querySelector('.reveal-btn')
const gift = document.querySelector('.gift')

revealBtn.addEventListener('click', () => {
    gift.classList.toggle('gift-wrap')
})