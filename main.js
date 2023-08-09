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


//선택적 체이닝 (Optional Chaining)
//주의점 : 남용해선 xx
const user = {

}
// user = null, undefined  > 타입에러
console.log(user.name) //undefined

console.log(user?.name) //undefined (에러대신 undefined만 노출)

const userA = {
    name: 'Heropy',
    age :'20',
    address: {
        country: 'korea',
        city: 'Seoul'
    }
}

const userB = {
    name: 'jena',
    age : '15'
}

function getCity(user) {
    return user.address.city
}

function getCity2(user) {
    return user.address?.city
}

function getCity3(user) {
    return user.address?.city || '주소 없음'
}

console.log(getCity(userA)) // seoul
console.log(getCity(userB)) // Error

console.log(getCity2(userA)) // seoul
console.log(getCity2(userB)) // undefined

console.log(getCity3(userA)) // seoul
console.log(getCity3(userB)) // 주소 없음