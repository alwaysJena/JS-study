// Switch 조건문

switch (조건) {
    case 값1 :
    //조건이 값1일때 실행
        break // 스위치 조건문을 종료해주는 역할

    case 값2 :
    //조건이 값2일때 실행
        break

    default :
    //조건이 '값1'도 '값2'도 아닐 때 실행 
}


function price(fruit) {
    switch (fruit) {
        case 'Apple' :
            return 1000
            // break
        case 'Banana' :
            return 1500
            // break
        case 'Cherry' :
            return 2000
            // break return이 존재하면 Switch를 종료
        default :
            p=0
    }

    return p
}


console.log(price('Apple')) 
console.log(price('Banana'))
console.log(price('Cherry'))
console.log(price('Hobak'))



//For of 반복문
const fruit = ['Apple', 'Banana', 'Cherry']

// for (let i = 0; i < fruit.length ; i+=1 ) {
//     console.log(fruit(i))
// }

for (const a of fruit) {
    console.log(a) // Apple Banana Cherry
}