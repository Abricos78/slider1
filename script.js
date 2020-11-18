let readMoreBtn = document.querySelector('.read-more'),
    returnBtn = document.querySelector('.back')

readMoreBtn.addEventListener('click', () => {
    let slider = document.querySelector('.slider')
    slider.style.marginLeft = '-350px'
})

returnBtn.addEventListener('click', () => {
    let slider = document.querySelector('.slider')
    slider.style.marginLeft = '0'
})