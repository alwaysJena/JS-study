//Array(배열)

const fruits = ['Apple', 'Banana', 'Cherry'] // 리터럴 방식으로 데이터를 만듦
// new Array('Apple', 'Banana', 'Cherry') //생성자 함수 (js에선 클래스)

console.log(fruits[1]) // Banana 요소 // 인덱싱한다.
console.log(fruits.length) // 배열의 길이 속성을 알 수 있지.
console.log(fruits[fruits.length -1 ]) // 길이를 몰라도 마지막 아이템을 알 수 잇다. 


// Object(객체)
const user = new Object()


//부정(Negation)
console.log(!true) // false
console.log(!0) //true
console.log(!!0) //false
console.log(!NaN) //true

console.log(!{}) //false


//비교(Comparison)

const aa = 1
const bb = 3

//동등연산자 (형 변환!)
console.log( a == b) //false  

console.log(a != b) //true

//일치연산자
console.log( a=== b) //false

//부등식도 사용가능

//논리 (Logical)

//And 연산자

const c = true
const d = false

if(c && d) {
    console.log('모두가 참!')  //출력x
}

if(c || d) {
    console.log('하나 이상이 참') //출력
}

//거짓데이터를 반환한다.
console.log(true && flase) //false
console.log(1 && 0) // 0
console.log(1 && 2 && 0) //0
console.log('A' && 'B' && 'C') //모두가 참이면 마지막 데이터가 반환

//Or 먼저 만나는 참 데이터를 반환
console.log(false || true) //true
console.log(0 || 1) //1
console.log(false || 0 || {}) //{}
console.log(function(){} || undefined || '') //function() {}

//Nullish 병합(Nullish Coalescing)
const n = 0
const num1 = n || 7 // 왼쪽에서 오른쪽으로 해석하며 거짓이 아닌 참을 찾게됨

console.log(n) //7

const num2 = n ?? 7 // (범위축소) 왼쪽에서 오른쪽으로 해석하며 null, undefined 그 외에 모든 데이터를 반환
console.log(num2) //0


console.log(null ?? 1 ) //1
console.log(undefined ?? 2) //2
console.log(null ?? undefined) //undefined
console.log(null ?? 1 ?? 2 ) //1
console.log(false ?? 1 ?? 2) //false
console.log(0 ?? 1 ?? 2 ) //0

//삼항연산자(Ternary)

const aaa = 1
if(aaa< 2) {
    console.log('참')
} else {
    console.log('거짓')
}

console.log(aaa <2 ? '참' : '거짓') //참 조건 ? 참 : 거짓

function getAlert(message) {
    return message? message : '메세지가 존재하지않습니다'
}

console.log(getAlert('안녕하세여~')) // '안녕하세여~'
console.log(getAlert('')) // '메세지가 존재하지않습니다.'

