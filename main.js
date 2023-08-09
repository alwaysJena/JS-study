//구조 분해 할당(Destructuring assignment)

// let a = 0
// let b = 0
// let c = 0

const arr = [1,2,3]; //대괄호, 소괄호 앞에서 ;을 붙여서 쓸 수 있다.
//인덱싱방법
// const a = arr[0]
// const b = arr[1]
// const c = arr[2]

//구조분해할당
[ a , b, c] = arr

console.log(a,b,c) // 1 2 3

const arr1 = [1,2,3]
const [ a, rest] = arr1
const [ b, ...rest1] = arr1
console.log(a, rest) // 1 2
console.log(b, rest) // 1, [2,3]

//객체구조분해할당
const obj = {
  a1: 1,
  b1: 2,
  c1: 3
}

// const a1 = obj.a
// const b1 = obj.b
// const c1 = obj.c

// const { a1 , b1 , x:ten = 7 } = obj

// console.log(a1, b1, ten) // 1 2 7

const { c1 , ...rest2 } = obj

console.log(c, rest) // 3, { c를 제외한 나머지 속성들 }
