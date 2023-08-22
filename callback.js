//콜백(Callback)패턴

import { get } from "lodash"

//동기방식
const a = () => console.log(1)
const b = () => console.log(2)

a()
b() // 1,2

//비동기방식
const c = (callback) => {
    setTimeout(() => {
        console.log(1)
        callback()
    }, 1000)
}
const d = (callback) => {
    setTimeout(() => {
        console.log(2)
        callback()
    })
}

const e = () => console.log(3)

c(() => {
    d(() => {
         e()
    })
}) //1,2
 



//콜백(Callback)패턴
const getMovies = (movieName, callback) => {
    fetch(`http://www.omdbapi.com/?apiKey=7035c60c&s=${movieName}`)
    .then(res => res.json)
    .then(res => {
        console.log(res)
        callback()
    })
} //서버에서 온 응답을 출력한 다음에 콜백함수를 실행


//여기서부턴 비동기라 순서를 보장되지않음
getMovies('frozen', ()=>{
    console.log('겨울왕국!')
})

getMovies('avengers', () =>{
    console.log('어벤져스!')
})

getMovies('avatar', () => {
    console.log('아바타!')
})

//여기서부턴 동기
getMovies('frozen', ()=>{
    console.log('겨울왕국!')
    getMovies('avengers', () =>{
        console.log('어벤져스!')
        getMovies('avatar', () => {
            console.log('아바타!')
        })
    })
})

//이런 콜백지옥을 벗어나기위해 -> promise클래스 사용