# Hey, My Coach


meteor add rajit:bootstrap3-datepicker
https://atmospherejs.com/rajit/bootstrap3-datepicker
http://eternicode.github.io/bootstrap-datepicker/ 



meteor add tsega:bootstrap3-datetimepicker
https://eonasdan.github.io/bootstrap-datetimepicker/#enableddisabled-dates
https://atmospherejs.com/tsega/bootstrap3-datetimepicker


http://bootsnipp.com/tags/search

npmRequire
https://github.com/meteorhacks/npm


meteor add mrt:bootstrap-select
https://silviomoreto.github.io/bootstrap-select/
https://silviomoreto.github.io/bootstrap-select/examples/


아래 두가지 중 테스트진행해볼 것(모바일다운 액션)
swiper
http://idangero.us/swiper/demos/#.VwmHuhOLRTY

animate
https://atmospherejs.com/webtempest/animate

ionic도 살펴볼 것(기존의 소스를 아이오닉으로 마이그레이션 시도해볼 것)
https://atmospherejs.com/meteoric/ionic
http://codepen.io/ionic/pen/VLwLOG
http://ionicframework.com/docs/v2/components/#overview
http://blog.ionic.io/ionic-and-meteor/

meteor-angular2
http://www.angular-meteor.com/tutorials/socially/angular2/bootstrapping



TODO 

5. escape page or load, view alert
8. how to apply traslate
9. set up AWS for meteor project
10. how to deploy on the AWS
11. how to make test code in meteor
13. meteor로 개발한 사항을 현재 것은 그냥 웹버전으로 보내고 앱버전은 아이오닉을 사용하여 배포해보자.
14. 일단 기본웹을 위한 개발을 모두 마친 후에 코르도바와 아이오닉 인테그레이션을 진행해보자.
15. 횟수는 범위 기록이 가능해야 한다.
16. 운동 종류를 선택하면 선택된 운동방법 리스트를 서버로부터 가져온다.
17. 일단 하드코딩으로 (각 부위별 운동방법을 모두 수집할 것) / 프리웨이트와 머신으로 구분하여 옵션으로 나열한다
18. 모바일에서는 type=number 이어도 숫자만 입력되지는 않는다.
19. 메모필드에 script태그가 있을 경우 혹은 link태그가 있을 경우 강제로 지우는 로직을 넣는다.
20. 멀티필드의 데이터를 수집하는 쉬운 방법은 무엇일까? 가령 매번 추가하는 필드를 모두 낱개의 form필드로 해서 
배열로 엮어서 디비에 저장하는 것이 좋을지??
21. 운동 완료버튼을 선택했을 때 최종 업데이트가 일어난다
22. 운동을 입력할 때마다 중간 저장이 될 수 있도록 한다.
23. create view를 modify와 view 모두 사용하도록 한다. 상황에 따라서 readonly설정 및 버튼 감추기 등으로 대신한다.
24. 리스트는 meterial-css방식을 사용해보자. 부트스트랩을 걷어내고 모두 변경해야 한다.
25. 페이스북 로그인을 붙인다. (별도의 회원가입은 일단 없다.) 추가로 네이버 로그인, 카카오로그인 트위터 로그인을 제공한다.
26. SSO로 로그인을 될 경우 가지고 오는 정보를 디비에 저장할 수 있어야 한다.
27. 애드센스 광고를 다시 붙여보자.
28. 애드센서를 제외한 광고를 붙일 수 있는 곳을 알아보자(동영상 등)
29. 운동방법 혹은 처방을 받기 위해서는 광고를 하나 볼 수 있도록 할까? 광고를 클릭하여 광고 포인트를 얻으면 해당 포인트를 사용하여 
별도의 서비스를 제공받을 수 있도록 할까?
30. 다국어 지원을 하려면?
31. 운동한 데이터를 기반을 통계를 내줄 수 있어야 한다 이를 위한 디비 설계가 필요하다.
32. meteor daemon for the linux AMI ??
33. meteor에서 log는 어떻게 남기는가?
34. 운동 추가하기 요청기능
35. ReactiveVar 를 사용해볼 것.
36. 웜업 체크박스를 넣는다 웜업을 체크하면 set1 -> warmup을 변경되고 아래에 추가하면 set1부터 시작한다
37. 유산소 운동 추가 (이 경우 뛴 시간 속도를 넣는 필드 보여준다.)
38. 가장 하단에 몸무게와 복부둘레 등을 입력할 수 있다.
39. 몸사이즈 입력시 정상여부나 어떤 점을 개선해야 하는지 정보를 알려준다.
40. 인바디 수치를 입력하는 폼을 만들고 입력하면 그 변화 추이를 볼 수 있다
근육량 변화, 지방 변화, 체중 변화 등등..
41. 


# MVP
1. 디비에 데이터를 저장할 수 있다
2. 디비에서 데이터를 가져올 수 있다
3. 디비에서 데이터를 수정할 수 있다.
4. 디비에서 데이터 리스트를 가져올 수 있다.
5. 각 운동에 대해서 
