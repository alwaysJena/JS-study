// ≈

/**Date 객체 */
//.getFullYear()와, .setFullYear()

const date = new Date()

console.log(date.getFullYear()) //2023

date.setFullYear(2024)
console.log(date.getFullYear) //2024
console.log(date) // 2024로 바뀜

getMonth, setMonth()
// 0부터 시작

console.log(date.getMonth()) //현재월
console.log(date)

date.setMonth(0) //1월
console.log(date.getMonth()) //1월

//get(set)Date() : 일을 변환하거나 저장
//get(set)Hours(): 시간을 변환하거나 저장
//get(set)Minutes() : '분'을 변환하거나 저장
//get(set)Seconds() : '초'정보를 변환하거나 저장
//getDay() : '요일'을 변환한다 / set은 없음 (0:일 1: 월, 2:화, 3:수 ,4:목, 5:금)
//get(set)Time() 1970-1-1(유닉스타임)부터 경과한 날짜인스턴스의 절대시간을 밀리초로 변환하거나 저장.

console.log(date.getTime()) //1666434830592

Date.prototype.isAfter = function (date) {
    const a = this.getTime() //d1,d2
    const b = date.getTime()
}

const d1 = new Date('')
const d2 = new Date('')

//Date.now() 정적메소드
//유닉스타임으로부터 경과한 메소드가 호출될 떄의 '밀리초'로 반환

const time = new Date().getTime()
console.log(Date.now()) //즉시
console.log(time) //고정
