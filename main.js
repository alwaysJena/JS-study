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