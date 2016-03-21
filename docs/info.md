# TODO LIST

1. route 소스와 model소스가 외부로 공개되지 않도록 하는 것이 좋지 않을까? server소스라고 판단되는 곳을 
제외하고는 모두 노출되는 것으로 처리되고 있다. 아니면 빌드버전으로 배포가 될 경우 난독화가 이루어지거나 혹은 
해당 파일들이 제거되고 배포가 된다면 관계가 없을 것 같다.

2. routes코드를 Meteor.isServer 블록을 조건으로 감싸면 디비에 접근을 하지 못한다. (checked)

3. 라우터를 통해서 데이터를 바인딩 할 때 키값이 없을 경우 this가 키값을 대신한다. 키값을 임의로 지정하여 전달할 수도 있다.

4. Meteor.publish를 통해서 라우터에서 데이터를 뽑아서 뷰에 전달해줄 수 있는지 알아보자 (checked)

5. with vs. each (checked)

6. 쿼리가 외부로 노출이 될 수 있기 때문에 보안을 위한 신경을 써야할 것 같다. 어떻게 해야 하는가?

7. Handlebars.js를 연결하여 데이터 바인딩을 해보자. deprecated되었고, meteor에 기본으로 탑재되어 있는 것 같다. (checked)

8. 로그인이 되어 있는지 여부를 알 수 있는 공통 로직은 어떻게 관리할 수 있는가? (checked)

9. SEO를 위한 메타 데이터 설정 등은 어떻게 처리헤야하는가?

10. meteor에서 webpack을 연결하면 어떤 장점이 있는가? 이미 자동으로 모든 걸 해주고 있기 때문에 불필요할 수도 있다.
단지 빌드 버전에 어떤 형태로 되어 있는지 확인이 필요하다.
아래 정보를 검토하고 웹팩을 설치해보자(반드시 별도의 브랜치로 진행할 것)
https://atmospherejs.com/webpack/webpack

11. 웹 스크랩 기능 설정한 후에 텍스트 깨짐을 해결해주는가와 데이터를 제대로 가져오는가 등을 확인해보자
https://atmospherejs.com/anonyfox/scrape

12. 이전에 설정했던 에디터 froala는 99달러 유료이다. 이 외에 무료인 것들도 있으니 사용해보고 결정하자.
TinyMCE를 설정해보자
모바일에서 글을 쓸 수 있는 방법을 제공해주어도 좋지만 처음부터 그럴 필요는 없다.
마크다운을 설정해주는 것이 좋은지 검토해보자.

13. test-runner velocity를 사용해보자.

14. animation 연결해볼 것 User Interaction

15. flux dispatcher를 도입해보자.
https://atmospherejs.com/meteorflux/dispatcher

16. 각 페이지는 공통영역이 아니라 별개로 헤더를 가지고 있는 편이 더 좋을 것 같다. (checked)

17. find and by bootstrap theme or skin (checked)

18. 일단 모바일에서는 에디터를 사용할 수 없도록 한다 (?) // 사용할 수는 있으나 불편하다.
PC에서만 에디터를 이용해서 콘텐츠를 만들고 모바일에서 확인해볼 수 있도록 한다
 
19. 서비스 스킨 후보
http://codecanyon.net/item/candystrap-fresh-sweet-modern-bootstrap-skin/full_screen_preview/11004037
http://kvelle.brunomatthys.com/

20. 백오피스 스킨 후보
http://codecanyon.net/item/creative-bootstrap-skin/full_screen_preview/9601049

21. 로그인 세션 아웃 설정은 어떻게 하는가?

22. 각 페이지마다 별도로 header를 관리하는 편이 유지보수에 수월할 것이다. 너무나 많은 분기점이 가능하기 때문이다.

23. 각 페이지마다 헤더를 분리하는 일!!

24. 에디터에서 페이지를 떠나려고 할 경우 다이얼로그창을 띄운다
http://stackoverflow.com/questions/7317273/warn-user-before-leaving-web-page-with-unsaved-changes

25. SPA형식으로 동작하는 걸로 봐서는 form페이지에서 뒤로가기 등 페이지를 벗어날 경우 얼럿을 띄우는 게 가능한지 모르겠다.
포럼에 문의중임 : https://forums.meteor.com

26. 앵귤러와 미티어 연결하면 어떤 점이 좋은지 알아보자  http://angularjs.meteor.com/
https://www.youtube.com/watch?v=_mu6BWsnaPM&list=LL3fBiJrFFMhKlsWM46AsAYw&index=2
+ agnular-server

27. Browser-policy, ...

28. UI Component 사용하는 방법을 알아볼 것

29. large meteor pass directory structure

30. 여러 데이터 포맷을 쉽게 지정학 위한 모멘트를 사용해볼 것

31. list/content/editor view에서 이미지 로딩 에러시 대체 이미지 표시 처리하기
 
32. 모바일에서는 글쓰기 기능을 초반에는 제공하지 말자. 어차피 PC의 사양이 아니라면 글쓰기가 불편할 것이다.

33. 모바일에서 미리보기 기능을 제공해야 하나 나중에 주어도 된다.

34. 각 페이지가 실시간으로 사라지게 되면 바로 메인으로 페이지가 이동될 수 있도록 한다,
데이터가 null이면 메인으로 가기 버튼을 준다.(editor/id/modify or content/id)
  
35. list page : modifyedAt이 우선 정렬하고 그 중에 createdAt으로 재정렬하여 보여준다.

36. .bashrc를 매번 적용하기 귀찮으면 홈디렉터리로 가서 .bash_profile에 아래와 같이 적어준다. 만약 해당 파일이 없다면 만들어준다
source $HOME/.bashrc

37. Rective Meteor http://react-ive.meteor.com/

38. 문의 게시판 질문 답변 UI 및 기능 구현

39. 로그인 후 이메일 인증 달기

40. 답변 달릴 경우 이메일 자동 발송되기 

41. Meteor.methods를 작성하고 접근하는 위치에 대해서 좀 더 면밀하게 알아볼 것.
공통으로 사용해야 할 메소드의 경우 어떤 방식으로 연결해줄 수 있는가?
isServer블록에서는 Session이 undefined로 출력이 되는 이유는 무엇인가?

42. 중복 로그인 방지하기
중복 로그인을 할 경우 디비에 정보가 입력되지 않는다.

43. meteor add materialize:materialize
좌측 슬라이딩 메뉴 구현 

44. materialize 를 사용할 거라면 bootstrap를 제거하는 것이 좋겠다
모든 뷰를 모바일버전으로 구현하되 에디터만 PC용에 최적화할 수 있도록 하자.

45. @ 로그아웃 혹은 로그인을 했을 경우 bg_layer나 leftMenu를 자동으로 닫을 수 있으려면?? !!

46. client js파일 뷰별로 모두 분리하여 작업할 것 (ok)
_ 
47. ui-unstyled로 변경할 것

48. fitness 테스트 진행시 form을 이용하는 방식과 session을 이용하는 방식중 어느 것이 더 나은가?

49. 


