# Vue 기본 개념 학습


- Reactivity : VueJS가 추구하는 중심 사상이자 핵심 기능, 데이터의 변화를 Vue에서 감지해서 화면에 반영
- 인스턴스 : 뷰를 개발할 때 필수로 생성해야 하는 단위, 인스턴트 안에 속성들로 화면을 조작해 나갈 수 있다.
- 컴포넌트 : 화면의 영역을 구분해서 개발하는 방식, 프론트엔드 프레임워크에서 가장 중요한 개념, 코드의 재사용성
- 컴포넌트 통신 : 컴포넌트로 개발했을 때 데이터의 흐름을 제어하기 위한 규칙을 제한하면서, 데이터의 흐름을 예측할 수 있다.
   > props : 상위에서 하위로 데이터를 내려주는 것<br>
   > event emit : 하위에서 상위로 이벤트를 전달하는 것
- HTTP 통신 라이브러리 (axios가 가장 많이 사용된다.)
- 템플릿 문법 : 화면을 조작하기 위한 뷰의 문법
   > 데이터 바인딩 ( 실제 데이터를 화면에 엮어내는 과정, Reactivity )
   > 뷰 디렉티브 ( v- 로 시작하는 html 속성으로 되어있다. 여러 기능들을 가지고 있다.)
- Vue CLI : 프로젝트 생성을 할 때 명령어를 이용해서 생성하는 방식
- 싱글 파일 컴포넌트 : Vue CLI안에서 제공되는 .vue파일



출처: [Vue.js 시작하기](https://www.inflearn.com/course/Age-of-Vuejs/)
