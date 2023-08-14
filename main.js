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
// //ex
// const a = 7

// const double = () => {
//     console.log(a*2)
// }

// double();

// //즉시 실행함수
// ;(() => {
//     console.log(a*2)
// })()

// ;(() => {})() //(F)() 화살표함면 패턴 1개
// ;(function() {})() //(F)()
// ;(function(){}()) //(F()) 
// ;!function(){}() // !F()
// ;+function(){}() // +F()


// ;((a,b) => {
//     console.log(a)
//     console.log(b)
// })(1,2) // 매게변수로 쓸 수 있다..!!



// // 콜백(Callback)

// const a = (callback) => {
//   //callback = 매게변수
//   console.log("A");
//   callback();
// };

// const b = () => {
//   console.log("B");
// };

// a(b); // b= 콜백
// //콜백 : 함수가 들어갈때 인수로 들어가는 또하나의 함수

// const sum = (a, b, c) => {
//   setTimeout(() => {
//     c(a + b);
//   }, 1000); //() => {} 콜백함수 setTimeout의 인수
// };

// sum(1, 2, value => {
//     console.log(value)
// });

// const loadImage = (url, cb) => {
//     const imgEl = document.createElement('img')
//     imgEl.src = url
//     imgEl.addEventListener('load', () => {
//         setTimeout(()=> {
//             cb(imgEl)
//         }, 1000)
//     })
// }

// const containerEl = document.querySelector('.container')
// loadImage('http://www.gstatic.com/webp/gallery/4.png', (imgEl) => {
//     containerEl.innerHTML = ''
//     containerEl.append(imgEl)
// })

// //재귀 (Recursive)
// let i =0

// const a = () => {
//     console.log('A')
//     i += 1
//     if(i <4) {
//         a()
//     }//함수안에서 같은 함수를 호출
// }

// a() // 'A'가 4번 호출

// const userA = { name: 'A' , parent: null}
// const userB = { name: 'B' , parent: userA}
// const userC = { name: 'C' , parent: userB}
// const userD = { name: 'D' , parent: userC}

// const getRootUser = user => {
//     if(user.parent) {
//         return getRootUser(user.parent)
//     }

//     return user
// }

// console.log(getRootUser(userD))

/**호출 스케쥴링 (Scheduling a function call) */

// setTimeout(() => {
//     console.log('Hello')
// }, 2000)

// setInterval(() => {}, )

/** this */
// 일반 함수에서 This는 호출 위치에서 정의
// 화살표 함수의 THIS는 자신이 선언된 함수 범위에서 정의

// const user = {
//   firstName: "Jena",
//   lastName: "Ryuh",
//   age: "20",
// //1.   getFullName: function () {
// //     this.firstName;
// //     this.lastName;

// //     return `${this.firstName} ${this.lastName}`; //  user를 바라봄
// //   },
//   getFullName: () => {
//     return `${this.firstName} ${this.lastName}` // 감싸고있는 함수가 없음
//   }
// };

// // 1. console.log(user.getFullName()); // Jena Ryuh
// console.log(user.getFullName()); // undefined

// const timer = {
//   title: "TIMER!",
//   timeout() {
//     console.log(this.title);
//     setTimeout(function() {
//         console.log(this.title) // this = setTimeout의 미지의 객체
//     }, 1000)
//   },
// };

// timer.timeout()


/**prototype */


// const fruits = ['Apple', 'Banana', 'Cherry'] // 배열 리터럴
// const fruits = new Array('Apple', 'Banana', 'Cherry')

// console.log(fruits.length)
// console.log(fruits.includes('Banana')) // includes, length 같은 것을 프로포타입 속성이라고한다


// Array.prototype.heropy = function() {
//     console.log(this)
// }

// fruits.heropy() // 인위적으로 만들수잇다 

// ----> ES6에선 class방식


/**ES6 class 방식 */
// function User(fisrt, last) {
//     this.firstName = fisrt
//     this.lastName = last
// }
// User.prototype.gerFullName = function () {
//     return `${this.firstName} +${this.lastName}`
// }

// class User {
//     constructor(first, last) {
//         this.firstName = first
//         this.lastName = last
//     }

//     get fullName() { //get 은 값을 얻어내는 메소드 (Getter) 메소드를 속성처럼 사용할 수 있다.
//         return `${this.firstName} +${this.lastName}`
//     }

//     set fullName(value) { //값을 지정할떄
//         [this.firstName, this.lastName] = value.split(' ') //배열구조분해할당
//     }

//     //속성처럼 값을 조회할땐 get메소드가 실행
//     //할당연산자를 통해 데이터를 할당하게되면 set 메소드가 실행 

//     // getFullName() {
//     //     return `${this.firstName} +${this.lastName}`
//     // }
// }

// const heropy = new User('Heropy', 'Park') // 생성자함수
// // const neo = new User('Neo', 'Anderson')

// // console.log(heropy.getFullName())
// // console.log(neo.getFullName())



 
/**정적 메소드 */

// static : class에서만 사용가능 인스턴스없이 바로 호출 가능





/**상속(Inheritance) */

//운송수단
// class Vehicle {
//     constructor(acceleration = 1) {
//         this.speed = 0
//         this.acceleration = acceleration
//     }

//     accelerate() {
//         this.speed += this.acceleration
//     }

//     decelerate() {
//         if(this.speed <= 0) {
//             console.log('정지!')

//             return
//         }
//         this.speed -= this.accelerate
//     }
// }


// //자전거
// class Bicycle extends Vehicle {
//     constructor(price = 100 , acceleration) {
//         super(acceleration)
//         this.price = price
//         this.wheel = 2
//     }
// }

// const bicycle = new Bicycle(300, 2) // bicycle : 인스턴스
// bicycle.accelerate()
// console.log(bicycle)
// console.log(bicycle instanceof Bicycle) //true
// console.log(bicycle instanceof Vehicle) //true
// //instanceof 는 어느쪽에서 상속됐는지 확인c


// //자동차

// class Car extends Bicycle {
//     constructor(license, price, acceleration) {
//         super(price, acceleration)
//         this.license = license
//         this.wheel =4
//     }

//     //오버라이딩
//     acceleration() {
//         if(!this.license) {
//             console.error('무면허!')

//             return
//         }
//         this.speed += this.acceleration
//         console.log('가속!', this.speed)
//     }
// }

// const carA = new Car(true, 7000, 10)
// const carB = new Car(false, 4000, 6)

// console.log(carA)
// console.log(carB)


// class Boat extends Vehicle {
//     constructor(price, acceleration) {
//         super(acceleration)
//         this.price = price
//         this.moter = 1
//     }
// }

// const boat = new Boat(10000, 5)

class A {
    constructor() {}
}

class B extends A {
    constructor() {
        super() //상속받을땐 필수
    }
}

class C extends B {
    constructor() {
        super()
    }
}


const a = new A() //A : 생성자함수, a : 인스턴스
const b = new B() 
const c = new C()


console.log(a instanceof A) //true
console.log(a instanceof B) //false
console.log(b instanceof A) //true
console.log(b instanceof B) //true

console.log(c.constructor === A) // false
console.log(c.constructor === B) // false
console.log(c.constructor === C) //true

// const fruits = ['apple', 'banana']
const fruits = new Array('apple', 'banana')

console.log(fruits.constructor === Array)