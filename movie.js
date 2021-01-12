$(document).ready(function(){
    $("#main_navigation a").click(function(){
        // alert($(this).html());

        // 1) 클릭한 메뉴의 data-target속성의 값을 얻는다
        var target = $(this).attr('data-target')  //같은 이름을 가진 기능의 활성화
        // 2) data-name이 있는 요소중에 
        //   data-name=target과 다른 항목들은 active클래스를 제거한다
        $(":not([data-name="+ target+ "])").removeClass("active"); //같지않으면 active (활성화한다는 의미로 갖다붙인것 ) 제거
        // 3) data-name=target과 같은 항목은 active클래스를 추가한다
        $("([data-name="+ target+ "])").addClass("active"); //같으면 active 추가
    });

    var currentposition = 1;
    $("#character > a:nth-child(1)").click(function(){
        // alert("left button")
        currentposition--;
        if(currentposition <1)
           currentposition=3;
        $("article").removeClass("show");
        $("article: nth-of-type(" + currentposition+")").addClass("show");
    })

    $("#character > a:nth-child(3)").click(function(){
        // alert("right button")
        currentposition--;
        if(currentposition > 3)
           currentposition=1;
        $("article").removeClass("show");
        $("article: nth-of-type(" + currentposition+")").addClass("show");
    })
})