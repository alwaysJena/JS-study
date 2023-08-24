//document.createElement()
//메모리에만 존재하는 새로운 HTML 요소를 생성해 반환합니다.

const divEl = document.createElement('div')
console.log(divEl) // <div></div>

const inputEl = document.createElement('input')
console.log(inputEl) // <input>


//E.prepend() / E.append()
//노드를 요소의 첫번쨰 혹은 마지막 자식으로 삽입
//하나이상 여러개를 작성할 수 있음 (순서대로됨)
const parentEl = document.querySelector('.parent')

const el = documnet.createElement('div')
el.textContent = 'Hello~'

parentEl.prepend(new Comment(' 주석 '))
parentEl.append(el, 'Text!')
// parentEl.append('Text!')


//E.remove()
//요소를 제거합니다.
el.remove()



//E.insertAdjacentElement()
//'대상요소'의 지정한 위치에 '새로운 요소'를 삽입합니다.
//대상_요소.insertAdjacentElement(위치, 새로운_요소)

/*html*/
<div> <div/>