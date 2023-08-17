/*모듈(module)이란 특정 데이터들의 집합(파일)입니다.*/
//모듈 가져오기(import), 내보내기(export)
export const hello = 'Hello World!'

//export default : 기본내보내기 :  한 모듈에서 한번만 쓸수 있다.
  // import xxx from ' ' : {} 안써도됨
//export const xxx = ~  : 이름 내보내기 - 여러번 내보낼 수 있다.
  // import { xxx } from '' : {} 써야함

  //이름을 바꿔서쓸거면
  //import { xxx as yyy } from '' ->yyy로 쓸수있음.