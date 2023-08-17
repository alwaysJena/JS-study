/**Object */
//Object.assign()
//하나 이상의 출처(Source) 객체로부터 대상 객체(Target)로 속성을 복사하고 대상 객체를 반환
//원본 변경 O
const target = {a:1, b:2}
const source1 = {b:3, c:4}
const source2 =  {c:5,  d:6}

const result = Object.assign(target, source1, source2)
const result1 = {
    ...target, 
    ...source1,
    ...source2
}

console.log(target) // {a:1, b:3, c:5, d:6} -> 이런 원본 훼손을 막고싶다면?
console.log(result) // {a:1, b:3, c:5, d:6}

const target0 = {a:1, b:2}
const source10 = {b:3, c:4}
const source20 =  {c:5,  d:6}

const result0 = Object.assign({}, target0, source10, source20)

console.log(target0) // {a:1, b:2}
console.log(result0) //{a:1, b:3, c:5, d:6}


//Object.entries()
//주어진 객체의 각 속성과 값으로 하나의 배열 만들어 요소로 추가한 2차원배열을 반환
const user = {
    name :'jena',
    age: 85,
    isValid: true,
    emial: 'rzena95@naver.com'
}

console.log(Object.entries(user)) //[[name, jena], [age,85], [isValid, true], [email, rzena95@naver.com]] : 2차원 배열 (배열안에 배열)

for(const [key, value] of Object.entries(user)) { //배열대에터에서 쓸수잇는 for of  :  구조배열분해할당
    console.log(key,value)
} // 한줄씩 name jena / age 85 / isValid true / email rzena95@naveer.com 이런식으로 반환

//Object.keys()
//주어진 객체의 속성이름을 나열한 배열을 반환
console.log(Object.keys(user)) // ['name','age','isValid', 'email']


//Object.values()
//주어직 객체의 속성 값을 나열한 배열을 반환.
console.log(Object.values(user)) //['jena', '85', 'true', 'rzena95@naver.com']
