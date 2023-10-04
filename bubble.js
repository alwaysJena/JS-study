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
    // event.stopPropagation() // (1) 상위요소에 전파방지, 버블링 정지! 
}, { capture: true }) // 아래에서 부터 올라오는 것중에서 해당되는 것을 capture해서 먼저 동작 (이벤트의 캡쳐링)

childEl.addEventListener('click', event => {
    console.log('Child!')
    event.stopPropagation() //(2) 상위요소에 전파방지, 버블링 정지!
}, { capture: true }) // parent -> child -> anchor -> body -> window
 
anchorEl.addEventListener('click', event => {
    console.log('Anchor!')
})

// (전체)anchor -> child -> parent -> body -> window 순으로 출력되는데 이것을 버블링이라한다!
// (1)anchor -> child -> parent 
// (2)anchor -> child

const handler = () => {
    console.log('Parent!')
}

parentEl.addEventListener('click', handler, {
    capture: true
})

parentEl.removeEventListener('click', handler) 

//제거 안되고 문자출력됨 제거되게하려면 remove이벤트에도 캡쳐를 넣어줘야함