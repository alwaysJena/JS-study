//DOM(Document Object Model)
// DOM이란 HTML 문서를 객체로 표현한 식으로,
// JS에서 HTML을 제어할 수 있게 해줌

const element = document.querySelector('h1')
console.log(element.textContent)

//DOM API (사용할수잇는 명령들)

//Node vs Element

// - 노드(Node): HTML, 요소, 텍스트, 주석 등 모든 것을 의미
// - 요소(Element): HTML 요소를 의미
const parent = document.querySelector('.parent')

//부모 요소의 모든 자식 노드 확인!
console.log(parent.childNodes)
//부모요소의 모든 자식 요소 확인
console.log(parent.children)

console.dir(parent) // parent의 객체데이터로 출력



class N {} 
class E extends N {}

console.dir(E)
console.dir(N)
console.dir(E.__proto__) // N 클래스를 상속받음 

//documnet.querySelectorAll()
//'CSS 선택자'로 검색한 모든 요소를 'NodeList'로 사용
// foreach사용 가능,  배열은 아님. 유사배열

//N.parentElement
const el = document.querySelector('.child')
console.log(el.parentElement) // 상위 요소
console.log(el.parentNode) 

//E.closest()
//자신을 포함한 조상요소중 'CSS 선택자'와 일치하는 가장 가까운 요소 반환
 

//N.previousSibling / N.nexSibling // 노드속성
//노드의 이전 형제 혹은 다음 형제 노드를 반환
console.log(el.previousSibling) // 줄바꿈요소(#text)
console.log(el.nextSibling) //"텍스트1"

//E.previousElmentSibling / E.nextElementSibling
console.log(el.previousElementSibling) // null
console.log(el.nextElementSibling) // <div id=child2 class="child"></div>

//E.children
//요소의 모든 자식 요소를 반환
console.log(el.children) // [div.child, div#child2.child2] // 유사배열로 반환


//E.firstElementChild, E.lastElementChild
//요소의 첫번째자식 혹은 마지막 자식 요소를 반환


