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
//E.insertAdjacentElement()
//'대상요소'의 지정한 위치에 '새로운 요소'를 삽입합니다.
//대상_요소.insertAdjacentElement(위치, 새로운_요소)
/* html */ `
<!-- 'beforebegin' -->
    <div class="target">
        <!-- 'afterbegin' -->
        Content!
        <!-- beforeend' -->
    </div>
    <!-- 'afterend' -->
`

const childEl = document.querySelector('.child')
const newEl = document.createElement('span')
newEl.textContent = 'Hell~o'

childEl.insertAdjacentElement('beforebegin', newEl)



//N.insertBefore()

//'부모 노드'의 자식인 '참조 노드'의 이전 형제로 '노드'를 삽입합니다
// 부모_노드.insertBefore(노드, 참조노드)
const parentEl3 = document.querySelector('.parent')

parentEl.insertBefore(newEl, childEl)



//N.contains()

//'주어진 노드'가 '노드'의 자신을 포함한 후손인지 확인합니다.
// 노드.contains(주어진_노드)
console.log(parentEl.contains(childEl)) //true
console.log(document.body.contains(parentEl)) //true
console.log(document.body.contains(childEl)) //true
console.log(document.body.contains(document.body)) //true
console.log(parentEl.contains(parentEl)) //true
console.log(childEl.contains(document.body)) //false
console.log(parentEl.contains(document.body)) //false



//N.textContent
//노드의 모든 텍스트를 얻거나 변경합니다.

const el = document.querySelector('.child')
console.log(el.textContent)
// el.textContent = '7' 
// console.log(el.textContent) //7 변경도 가능함



//E.innerHTML
// 요소의 모든 html 내용을 하나읨 문자로 반환해서 얻거나, 새로운 HTML을 지정

const el2 = document.querySelector('.parent')
console.log(el2.innerHTML) // '<div class=Child"></div>~~ '

el2.innerHTML = `<span></span>` //요소를 삽입
el2.textContent = `<span></span>` //문자로 삽입 



//E.dataset
//요소의 각 'data-' 속성 값을 얻거나 지정합니다.

const element = document.querySelector('.child')
const str = 'Hello world!'
const obj = { a:1, b:2 }

element.dataset.helloWorld = str
element.dataset.object = JSON.stringify(obj)

console.log(el.dataset.helloWorld) //문자데이터
console.log(el.dataset.object) //문자데이터
console.log(JSON.parase(el.dataset.object)) //




//E.tagName
//요소의 태그 이름을 반환합니다.
const parentEl2 = document.querySelector('.parent')
const childEl2 = document.querySelector('.child')
const el3 = document.querySelector('span')

console.log(parentEl.tagName) //DIV
console.log(childEl.tagName) //DIV
console.log(el.tagName) // SPAN
console.log(document.body.tagName) //BODY



//E.id
//요소의 'id'속성 값을 얻거나 지정
console.log(el.id) // 없
el.id = 'child2'
console.log(el.id) //child2
console.log(el) // <div id="child2"></div>



//E.className
//요소의 "class" 속성 값을 얻거나 지정 // 보통 값을 얻을떄만 쓰고 .classList 를 통해서 제어를 많이한다.
console.log(el.className) // child

el.className += ' child1 active'
console.log(el.className) //child child1 active
console.log(el) // <div className="child child1 active"></div>
//E.classList 를 더  많이씀

//E.style
//점 표기법으로 제어가능 (객체라는 뜻)
//한번에 지정할 경우엔? .assign(대상객체, 출처객체)
Object.assign(el.style, {
    width : '100px',
    fontSize: '20px',
})


//Window.getComputedStyle()
//요소에 실제로 적용된 스타일 객체를 반환합니다.

const el = document.querySelector('.child')
const styles = window.getComputedStyle(el)

console.log(styles.width)
console.log(styles.fontSize)


//E.getAttribute() E.setAttribute()
//요소에서 특정 속성 값을 얻거나 지정.
//속성 : html - attribute
//속성 : css, js - property

el.setAttribvute('title', 'hello world') // (속성, 지정될 값)
console.log(el.getAttribute('title')) //hello world


//E.hasAttribute() : 가지고있는지 확인, E.removeAttribute():제거




//window.innerWidth, window.innerHeight
//현재 화면(Viewport)의 크기를 얻습니다.

