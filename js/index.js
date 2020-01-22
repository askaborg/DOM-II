// Your code goes here
const funBusLogo = document.querySelector('.logo-heading')
funBusLogo.addEventListener('mouseenter', () => {
    funBusLogo.style.color = 'red'
})

funBusLogo.addEventListener('mouseleave', () => {
    funBusLogo.style.color = '#212529'
})

funBusLogo.addEventListener('dblclick', () => {
    funBusLogo.textContent = 'Bus Fun'
})

funBusLogo.addEventListener('click', () => {
    funBusLogo.textContent = 'Fun Bus'
})

const body = document.querySelector('body')
body.addEventListener('wheel', (event) => {
    event.target.style.backgroundColor = 'yellow'
})
body.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'white'
})

const footer = document.querySelector('.footer')
footer.addEventListener('wheel', (event) => {
    event.target.style.color = 'red'
    event.stopPropagation()
})

const noLinks = document.querySelectorAll('.nav-link')
noLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault()
        event.stopPropagation()
        event.target.style.color = 'green'
    })
})

const busImage = document.querySelector('img')
busImage.addEventListener('click', () => {
    busImage.style.transform = 'scale(0.5)'
    busImage.style.transition = 'all 0.3s'
})

busImage.addEventListener('dblclick', () => {
    busImage.style.transform = 'scale(1)'
    busImage.style.transition = 'all 0.3s'
})
