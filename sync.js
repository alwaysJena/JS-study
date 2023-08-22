//동기(Synchronous)와 비동기(Asynchronous)
//-동기 : 순차적으로 코드 실행O
//-비동기 : 순차적으로 코드 실행X

fetch('https://www.omdbapi.com/?apikey=?035c60c&sd=frozen') // 요청(request)
.then(res => res.json) // res : 받아온 응답(response)
.then(res => {
    console.log(res)
    console.log(1)
    console.log(2)
    console.log(3) // 이러면 동기로 출력
})

console.log(1)
console.log(2)
console.log(3)