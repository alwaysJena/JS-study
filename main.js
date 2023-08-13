//함수 (Function)

//함수 선언문 (Declaration)
// function hello() {} // function으로 시작하고 이름이있어야하고


//함수 표현식 (Expression)
// const hello = function () {} //const, let 등으로 선언된 변수에 할당연산자를 통해 함수가 들어가는지


//호이스팅에서 차이가 난다.

//호이스팅(Hoisting)

// hello() // 선언됨 

// function hello () {
//     console.log('Hello') // -> '함수 선언'이기때문에 자바스크립트로 통해서 가장 꼭대기로 올라가서 동작이되어서 호이스팅현상이 발생한것 : 함수 선언문에서만 발생
// }

// hello() //선언됨

// ///
// hello2() //Error

// const hello2 = function() {
//     console.log('함수표현식')
// }

// hello2()



// /** 반환 및 종료 */
// function plus(num) {
//     if(typeof num !== 'number' )
//     console.log('숫자를 입력해주세요~!')
//     return 0 //함수 종료

//     return num +1 
// }

// console.log(flus(2)) //3 
// console.log(flus(7)) //8
// console.log(plus()) // undefined가 들어가고 거기에 +1 이 더해지면서 숫자이긴 하나 숫자가 아닌 Nan



/**매게 변수 패턴(Parameter pattern)
 * 기본값 (Default Value)
 */
// function sum (a,b) { //a,b 매게변수
//     return a+b
// }

// sum (1,2) //인수

// console.log(sum(7)) //a=7 b=undefined => NaN

// function sum (a,b =1 ) { //a,b 매게변수 b 기본값 지정
//     return a+b
// }

// console.log(sum(7)) // 8 출력


/**매게 변수 패턴(Parameter pattern)
 * 구조분해 할당 (Destructuring assignment)
 */
/**객체구조분해 할당 */
// const user = {
//     name: 'Jena',
//     age: 85
// }

// // function getName (user) {
// //     const { name } = user // 구조분해
// //     return name
// // }


// function getName ({ name }) { //객체구조분해
//     return name
// }

// function getEmail({ email = '이메일이없습니다.' }) { //기본값 지정
//     return email
// }
// console.log(getName(user)) // Jena

// console.log(getEmail(email)) //undefined


// // 매개변수의 배열구조분해 할당

// const fruits = ['apple', 'banana', 'cherry']
// const numbers = [1,2,3,4,5,6,7]

// // function getSecondItem(array) {
// //     return array[1]
// // }

// // console.log(getSecondItem(fruits))

// function getSecondItem([,b]){ //b만 받을거면 쉼표 필수
//     return b
// }
// console.log(getSecondItem(fruits)) //banana
// console.log(getSecondItem(numbers))


/** 나머지 매개변수(Rest parameter) */

// function sum(...rest) { //전개연산자
//     console.log(rest)
//     rest.reduce(function(acc, cur){
//         return acc + cur
//     }, 0) // acc의 최초값 
// }

// console.log(sum(1,2))//3
// console.log(sum(1,2,3,4)) //10
// console.log(sum(1,2,3,4,5,6,7,8,9,10)) //5




/**화살표 함수(Arrow function) */
/**이건 함수 표현식이다. 함수 선언이x ,  할당 연산자로 사용해서^^*/

// function sum(){}
// const sum = function () {}

// const sum = () => {} //ES6 문법

// function sum(a,b) {
//     return a + b
// }

//ES6의 장점: 
// const sum = (a,b) => {
//     return a + b
// } 
//

// const sum = (a,b) => a + b  //return 으로 바로 받을경우 생략가능

// console.log(sum(1,2)) //3
// console.log(sum(10,20)) //30

// const a = () => {}
// const b = x => {} // 매게변수가 하나면 생략도 가능
// const c = (x,y) => x*x 
// const d = () => {return { a: 1}}
// // const e = () => {a:1} X
// const e = () => ({ a: 1 }) //중괄호는 바로사용못하고 소괄호로 묶어줘야함
// const f = () => [ 1,3,4 ] // 소괄호 안해줘도됨



/**즉시 실행함수 (IIFE , Immediately-Involked Function Expression) */
//ex
const a = 7

const double = () => {
    console.log(a*2)
}

double();

//즉시 실행함수
;(() => {
    console.log(a*2)
})()

;(() => {})() //(F)() 화살표함면 패턴 1개
;(function() {})() //(F)()
;(function(){}()) //(F()) 
;!function(){}() // !F()
;+function(){}() // +F()


;((a,b) => {
    console.log(a)
    console.log(b)
})(1,2) // 매게변수로 쓸 수 있다..!!
