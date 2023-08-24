//a().then(() =>  b())
const wrap = async () => {
    await a(); //promis 인스턴스가 반환되어야지만 쓸수있다.
    b();
  };
  wrap();
  
  const warpMovie = async () => {
    await getMovies("frozen");
    console.log("겨울왕국!");
  
    await getMovies("avengers");
    console.log("어벤져스!");
  
    await getMovies("avatar");
    console.log("아바타!");
  };
  
  //Resolve, Reject 그리고 에러 핸들링
  
  const delayAdd = (index) => {
    return new Promise((resolve, reject) => {
      //resolve정상적인 로직 reject 비정상적인로직일때 호출
      setTimeout(() => {
        if (index > 10) {
          reject(`${index}는 10보다 클 수 없습니다.`);
          return; //return으로 종료하는 이유가 resolve는 상충적으로 실행되지 않으나, console.log엔 영향을 미치지 않아서 실행될 수 있다.
        }
  
        console.log(index);
        resolve(index + 1);
      }, 1000);
    });
    // setTimeout(() => {
    //     if(inex > 10) {
    //         errorCb(`${index}는 10보다 클 수 없습니다.`)
    //         return
    //     }
    //     console.log(index)
    //     cb(index + 1)
    // }, 1000)
  };
  
  delayAdd(13)
    .then((res) => console.log(res)) // then : resolve
    .catch((err) => console.log(err)) // catch :  reject
    .finally(() => console.log('Done!')) //에러핸들링: 에러가 발생하든 안하든 항상 실행
  // delayAdd(
  //     4,
  //     res => console.log(res),
  //     err => console.error(err)
  // )
  
  const wrapDelay = async () => {
    try {
      const res = await delayAdd(2);
      console.log(res);
    } catch (err) {
      console.error(err);
    } finally {
      console.log('Done!') //에러핸들링: 에러가 발생하든 안하든 항상 실행
    }
  };
  wrapDelay();
  
  
  const getMovies = movieName => {
      return new Promis(( resolve, reject ) => {
          fetch(`http://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
          .then(res => res.json) //response
          .then(json => {
              if (json.Response === 'False') {
                  reject(json.Error)
              } resolve(json) //정상적으로 처리가 됐을 떄 동작되는 콜백
          })
          .catch(error => {
              reject(error)
          })
      })
  }
  
  let loading = true
  
  //.then()
  getMovies('avengers')
      .then(movies => console.log('영화목록:', movies))
      .catch(error => console.log('에러 발생:' ,error))
      .finally(() => loading = false)
  
  //async await 함수
  const wrap1 =  async() => {
      try {
          const movies = await getMovies('avengers')
          console.log('영화목록:', movies)
      } catch(error) {
          console.log('에러 발생:' ,error)
      } finally {
          loading = false
      }
  }
  wrap1()