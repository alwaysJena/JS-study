//Promis
const a = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(1)
            resolve()
        }, 1000)
    })

}

const b = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(2)
            resolve()
        }, 1000)
    })

}

const c = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(3)
            resolve()
        }, 1000)
    })

}

const d = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(4)
            resolve()
        }, 1000)
    })

}

a()
.then(b)
.then(c)
.then(d)




//콜백(Callback)패턴
const getMovies = movieName => {
    return new Promise(resolve => {
        fetch(`http://www.omdbapi.com/?apiKey=7035c60c&s=${movieName}`)
        .then(res => res.json)
        .then(res => {
            console.log(res)
            resolve()
        })
    })

} //서버에서 온 응답을 출력한 다음에 콜백함수를 실행

//여기서부턴 동기
getMovies('frozen').then(() => {
    console.log('겨울왕국')
    return getMovies('avengers')
}).then(() => {
    console.log('어벤져스!')
    return getMovies('avatar')
}).then(() => {
    console.log('아바타!')
})