// 상수는 원래 저장된 값을 변경할 수 없지만
// 아래와 같이 {} 중괄호 안에 선언된 값은 변경가능하다
// 객체(Object)에 접근하는 방법은 a.name 또는 a.age 로 접근 가능하다

const a = {name: 'jong-baek', age: 38};
a.name = 'chan-woo'

console.log(a.name)