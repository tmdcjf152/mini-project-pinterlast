
// 이미지를 정렬해주는 script Isotope 사용
window.addEventListener("load", () => {
    const grid = new Isotope("section", {
        itemSelector: "article",
        coulmnWidth: "article",
        // 작동되는 총시간 (값이 높을수록 천천히 실행된다.)
        transitionDuration: "1s",
    });


    const btns = document.querySelectorAll("main ul li");
    for (let el of btns) {

        el.addEventListener("click", (e) => {

            e.preventDefault();

              const sort = e.currentTarget.querySelector("a").
  
              getAttribute("href");
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