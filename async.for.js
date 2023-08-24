//foreach 내부에선 await가 안먹힘
//비동기 반복문을 써야한다면 FOR반복문을 써야함
titles = ['frozen', 'avengers', 'avatar']

titles.forEach(async title => {
    const movies = await getMovies(title)
    console.log(title, movies)  // frozen, avengers, avatar가 순서대로 출력이 안됨
})                              // forEach가 우선 배열 안의 갯수만큼 동작한 후 내부에서 await가 발동하는 것

const wrap = async () => {
    for ( const title of titles) {
        const movies = await getMovies(title)
        console.log(title, movies)   //순서대로 출력됨
    }
}
warp()


//fetch(주소, 옵션)
//네트워크를 통해 리소스의 요청(REquest) 및 응답(response)를 처리할 수 있따.
//promis 인스턴스를 반환

fetch('https://www.omdbapi.com/?apikey=7035c60c&s=avengers', {
    method: 'GET', // 기본이라 동작하기때문에 굳이 추가하지않아도됨 ( Delete, post, push 등은 에러남)
    headers: {
        'Content-Type': 'application.json'//서버에 전송하는 요청에대한 정보를 담고잇고 (서버로 전송되는 정보의 타입)
    },
    body: JSON.stringify({
        name:'Heropy',
        age: 85// 데이터를 담고있음 무조건문자데이터로 보내야함
    }),

}) // console.log(출력)하면 Promise >  반환
// .then(res => console.log(res)) //Response { } 이런식으로 반환됨
.then(res => res.json)// promise 반환
.then(json => console.log(json)) //객체로 반환


const wrap1 = async () => {
    const res = await fetch('https://www.omdbapi.com/?apikey=7035c60c&s=avengers')
    const json = await res.json
    console.log(json)
}
wrap1()
