
// 이미지를 정렬해주는 script Isotope 사용
window.addEventListener("load", () => {
    // 배치할 요소를 감싼 부모요소명을 써준다
    // article(사진영역)을 정렬할것이니깐 article부모인 section을 적어준다
    const grid = new Isotope("section", {
        // 배치할 요소명을 적어준다. (article에 적용할것이므로 article작성)
        itemSelector: "article",
        // 너비값을 구할 요소명을 적는다 (너비값을 구하는 이유는??)
        // (div나 section을 적어줘도 비슷한거같은데 article을 적는이유)
        coulmnWidth: "article",
        // 작동되는 총시간 (값이 높을수록 천천히 실행된다.)
        transitionDuration: "1s",
    });

// btns 상수에 [main에 있는 ul자식인  li]를 모두 불러온다.
    const btns = document.querySelectorAll("main ul li");
    // let el of btns가 무엇을 의미하는지 잘 모르겠습니다.
    // el 에다가 변수(btns)를 넣는다는 의미가 맞나요?
    for (let el of btns) {
        // el에다가 이벤트를 넣고 클릭했을때 (e)=a
        el.addEventListener("click", (e) => {
            // a는 링크이동이 되므로 preventDefault를 사용해 클릭이벤트를 막아준다.
            e.preventDefault();
            // sort 안에 a를 넣어준다.
              const sort = e.currentTarget.querySelector("a").
            //   "href"속성을 추출한다
              getAttribute("href");
            // ???
            grid.arrange({
                filter: sort
            });

            for (let el of btns) {
                // classList.remove로 명시한 class"on"을 제거한다.
                el.classList.remove("on");
            }
            // 이벤트가 연결된 classList에 class"on"을 생성한다.
            e.currentTarget.classList.add("on");
        })
    }

})