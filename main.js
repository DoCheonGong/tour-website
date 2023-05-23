$(document).ready(function () {
    $("#gnb").on("mouseenter", function () {
        $(".gnbBg").stop().slideDown();
        $(".sub").stop().slideDown();
    });
    $("#gnb").on("mouseleave", function () {
        $(".gnbBg").stop().slideUp();
        $(".sub").stop().slideUp();
    });
    $("#gnb > li").on("mouseenter", function () {
        $(this).children("a").addClass("on");
    });
    $("#gnb > li").on("mouseleave", function () {
        $(this).children("a").removeClass("on");
    });

    /* tab */
    $(".tab > li").click(function () {
        $(".tab").find("li").removeClass("on");
        $(".content").find("div").removeClass("on");

        $(this).addClass("on");

        var conId = $(this).children("a").attr("href");
        $(conId).addClass("on");
    })

    /* slide */
    setInterval(function () {
        $(".frame").animate({ "top": "-300px" },
            function () {
                $(".frame>li").eq(0).appendTo(".frame");
                $('.frame').css({ "top": "0" });
            })
    }, 3000);

    /* gallery */
    $("#gallery .galleryContent > a").on("mouseenter", function () {
        $(this).css({ "opacity": "1" });
    });
    $("#gallery .galleryContent > a").on("mouseleave", function () {
        $(this).css({ "opacity": "0.5" });
    });

    /* popup */
    $("#notice .noticeContent li").eq(0).on("click", function () {
        $(".popup, .popupBg").show();
    })
    $(".close").on("click", function () {
        $(".popup, .popupBg").hide();
    })
});