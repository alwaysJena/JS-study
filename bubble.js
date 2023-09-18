//이벤트 전파(버블) 방지

const parentEl = document.querySelector('.parent')
const childEl = document.querySelector('.child')
const anchorEl = document.querySelector('a')

window.addEventListener('click' , event => {
    console.log('Window!')
})

document.body.addEventListener('click', event => {
    console.log('body!')
})

parentEl.addEventListener('click', event => {
    console.log('Parent!')
    event.stopPropagation() // 버블링 정지!
})

childEl.addEventListener('click', event => {
    console.log('Child!')
})

anchorEl.addEventListener('click', event => {
    console.log('Anchor!')
})