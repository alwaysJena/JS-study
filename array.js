/**배열(Array)객체 */
//.lnegth
const arr = ['a', 'b', 'c']

console.log(arr.length) //3
console.log(arr[arr.length]) //c

//.at()
//음수 값을 사용하면 뒤에서부터 인덱싱한다. -1 : 뒤에서부터 첫번째아이템
console.log(arr[0]) // a
console.log(arr.at[0]) //a
console.log(arr[arr.length-1]) //c
console.log(arr.at(-1)) //c

//.concat()
//대상 배열과 주어진 배열을 변형해 새로운 배열을 반환합니다. : 원본훼손x
const arr1 = ['d', 'e', 'f']
const arr2 = arr.concat(arr1) //arr: 대상배열, arr2 : 주어진 배열

console.log(arr)
console.log(arr1)
console.log(arr2)
//전개연산자
const arr3 = [...arr, ...arr1] // [a,b,c,d,e,f]

//.every()
//대상 배열의  모든 요소가 콜백 테스트에서 참을 반환하는지 확인합니다.
const arr4 = [1,2,3,4]
const isValid = arr4.every(item => item < 5) //true

console.log(isValid) //true 

//.filter()
//주오진 콜백 테스트를 통과(참)한 모든 요소를 새로운 배열로 반환.
//모든 요소가 테스트를 통과하지 못하면 빈 배열을 반환한다.
const numbers = [1, 20, 7, 9, 104, 0, 58]
const filteredNumbers = numbers.filter(number => number < 30)

console.log(filteredNumbers) //[1,20,7,9,0]

const users = [
    {name: 'Neo', age: 85},
    {name: 'EE', age:22 },
    {name: 'wer', age: 11}
]

const adults = users.filter(user => {
    return user.age >= 19
})

console.log(adults) // [{neo얘랑}, {ee 얘가 반환됨}]

//.find()
//대상 배열에서 콜백 테스트를 통과하는 첫번째 요소를 반환합니다.
//반환이 진행되면 반복이 되지 않는다.
const arr5 = [5, 8, 130, 12,44]
const foundItem= arr5.find(item => item >10)

console.log(foundItem) //130

const foundUser = users.find(user => user.name === 'EE')
console.log(foundUser) // {name:'EE', age:22}

//.findIndex()
const Index = arr5.findIndex(item => item > 130) 
console.log(Index) //2

//.flat()
//대상 배열의 모든 하위배열을 지정한 깊이(기본:1)까지 이어붙인 새로운 배열을 생성합니다.
const arr6 = [1,2,[3,4, [5,6]]]

console.log(arr6.flat()) // [1,2,3,4,[5,6]] 깊이의 기본이 1이기떄문에 하나의 배열만 이어붙임
console.log(arr6.flat(2)) // [1,2,3,4,5,6]
console.log(arr6.flat(Infinity)) // 무한으로 하위배열을 다 이어붙임

//.forEach()
//대상 배열의 길이만큼 주어진 콜백을 실행
const arr7 = ['A', 'B', 'C']

arr7.forEach(item => console.log(item)) //아이템 개수만큼 실행됨 a b c 각각을 반환

for (let i = 0; i < arr7.length; i +=1) { // 반복을 중간에 멈춰줄수잇음
    if ( i >1 ) {
        break
    }
    console.log(arr7[i])
}

//includes()
//대상 배열이 특정한 요소를 포함하고있는지 확인합니다.
console.log(arr7.includes('A')) //true

const fruits = ['apple', 'banana', 'cherry']

console.log(fruits.includes('apple')) //true
console.log(fruits.includes('Cheery')) //false 대소문자 구분

console.log(user.includes({ name: 'Neo', age:85})) //false

const neo = users[0]
console.log(user.includes(neo)) //메모리의 주소를 비교하게돼서 true //원시형, 참조형(객체,배열,함수 : 모양이 똑같아도 다른데이터로 취급할 수 있다)

//.join() 
//대상 배열의 모든 요소를 구분자로 연결한 문자를 반환합니다.

console.log(arr.join(',')) // apple,banana,cherry
console.log(arr.join(', ')) // apple, banana, cheery
console.log(arr.join('/')) //apple/banana/cherry
console.log(arr.join(' / ')) // apple / banana / cherry

//.map()
//대상 배열의 길이만큼 주어진 콜백을 실행하고, 콜백의 반환 값을 모아 새로운 배열을 반환합니다.
//원본 데이터 손상x
const numbers1 = [1,2,3,4]
const newNumbers = numbers.map(i => i*2)

console.log(newNumbers) // [2,4,6,8]

const newUsers = users.map(user => {
    return {
        ...user,
        isValid: true,
        email : null
    }
})

console.log(newUsers)

//.pop()
//대상 배열에서 마지막 요소를 제거하고 그 요소를 반환합니다.
//대상 배열 원본이 변경됩니다.
console.log(fruits.pop()) //원본훼손
console.log(fruits) //apple, banana

//.push()
// 대상배열에 마지막 하나이상의 요소를 추가하고, 배열의 새로운 길이를 반환
//대상 배열 원본 변경
const newLength = fruits.push('orange')
console.log(newLength) //\

//.reduce()
//대상 배열의 길이만큼 주어진 콜백을 실행하고, 마지막에 호출되는 콜백의 값을 반환합니다.
//각 콜백의 반환 값은 다음 콜백으로 전달됩니다.

const numbers2 = [1,2,3]
const sum = numbers2.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 0) // 0: 초기값 ->accumulater로 들어감.

console.log(sum) //6

//총 나이계산
const totalAge = users.reduce((acc, cur) => {
    return acc + cur.age
}, 0) 
console.log(totalAge)  //118

//모든 이름 추출
const nameArray = users.reduce((acc, cur) => {
    acc.push(cur.name)
    return acc
}, [])
const names = nameArray.join(', ')
console.log(names) // Neo, Amy, Lewis //문자데이터로반환

//.reverse()
//대상 배열의 순서를 반환합니다.
//원본 변경
const arr8 = ['a', 'b', 'c']
console.log(arr.reverse()) // c b a

//.shift()
//대상 배열에서 첫번째 요소를 제거하고, 제거된 요소를 반환합니다.
//대상 배열의 원본 변경O
const arr9 = ['a', 'b', 'c']
console.log(arr.shift()) //A
console.log(arr) //b,c (원본 훼손O)

//.slice()
//대상 배열의 일부를 추출해서 새로운 배열을 반환
//두 번째 인수 직전까지 추출, 두번째 인수를 생략하면 대상 배열의 끝까지 추출
const arr10 = [1,2,3,4,5,6,7]

console.log(arr.slice(0,3)) // [1,2,3]
console.log(arr.slice(4, -1)) // [5,6]
console.log(arr.slice(4)) // [5,6,7]
console.log(arr) //원본

//.some() :1개이상통과   <-> every() : 모두가 통과 랑 반대네 
//대상 배열의 어떤 요소라도 콜백 테스트를 통과하는지 확인 (1개이상만 통과핻됨)

//.sort()
// 대상 배열을 콜백의 변환 값(음수, 양수, 0)에 따라 정렬합니다.
//콜백을 제공하지않으면, 요소를 문자열로 변환하고유니코드 코드 포인트 순서로 정렬합니다.
//대상 배열의 원본이 변경O
const numbers3 = [4,17,2,103,3,1,0]

numbers3.sort()
console.log(numbers) // [0,1,103,17,2,3,4]
import abc from './test.json'

console.log(abc)

numbers.sort((a,b) => a-b) //b-a가 음수가 나오면 a가 작다고 판단
console.log(numbers) // [0,1,2,3,4,17,103] 

numbers.sort((a,b) => b-a) //b-a가 양수가 나오므로 a가 더크다고판단 즉 작은수가 가장 인덱스가 높을듯
console.log(numbers) // [103,17,4,3,2,1,0]
//0일 경우는 같다고판단

users.sort((a,b) => a.age - b.age) //작은수부터 정렬
console.log(users) //나이적은 순서대로 객체데이터가 정렬

//.splice()
//대상 배열의 요소를 추가하거나 삭제하거나 교채한다
//원본 변경O
const arr11 = ['a', 'b', 'c']
arr.splice(2, 0, 'x') //(교체하고자하는 인덱스번호(2), 삭제하고자 하는 갯수(0), 추가할 요소) ['a','b','x','c']
arr.splice(1,1) //1번째 아이템을 1개 제거 // [a,c]
arr.splice(1,2) //1번째 아이템을 거기서부터 2개의 인수를 삭제 [a]

//.unShift() <-> push():배열의 젤 뒤에 추가하고 새로운 배열의 길이 반환 // (shift() :첫번째요소를 제거하고 제거된 요소를 반환)
//새로운 요소를 대상 배열의 맨 앞에 추가하고 새로운 배열의 길이를 반환합니다.
//대상 배열 원본이 변경
const arr12 = ['a','b','c']

console.log(arr.unshift('X')) // 4

//Array.from() : 정적메소드 : 유사배열
//유사 배열을 실제 배열로 반환
const arrayLike = {
    0: 'A',
    1: 'B',
    2: 'C',
    length:3
} //배열처럼 보이지만 객체데이터임

arrayLike.forEach(i => console.log(i)) //error (객체데이터라서)
Array.from(arraylike).forEach(i => console.log(i)) // a/b/c


//Array.isArray() : 정적메소드
//배열 데이터인지 확인

console.log(Array.isArray(arr12)) //true
console.log(Array.isArray(arrayLike)) //false