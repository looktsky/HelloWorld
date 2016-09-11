/* 
 * @Author: anchen
 * @Date:   2016-06-02 13:24:03
 * @Last Modified by:   anchen
 * @Last Modified time: 2016-06-23 12:37:35
 */

$(document).ready(function() {
    (function topMenu() {
        var li = $(".topNav li");
        var div = $(".topNav");
        var j = true;
        var i = old = 0;
        activeLi(old);

        function activeLi(i) {
            li.eq(i).css('background-color', '#12b7f5');
        }

        function defaultLi(old) {
            li.eq(old).css('background-color', 'transparent');
        }

        div.mouseenter(function() {
            j = true;
        });
        div.mouseleave(function() {
            j = false;
            defaultLi(old);
            activeLi(0);
            old = 0;
        });

        touch();

        function touch() {
            li.mouseenter(function() {
                if (j) {
                    defaultLi(old);
                    i = $(this).index();
                    activeLi(i);
                    old = i;
                }
            });
        };
    })();



    banenr();

    function banenr() {
        var i = true;
        var b1 = $(".banenr1");
        var b2 = $(".banenr2");
        var sp1 = $(".circle span:eq(0)");
        var sp2 = $(".circle span:eq(1)");
        sp1.addClass('on');
        setInterval(function() {
            if (i) {
                b1.css({
                    "display":"list-item",
                    'opacity': '0.01'
                });
                b2.css({
                    "display":"block",
                    'opacity': '0.9'
                });
                sp1.removeClass('on');
                sp2.addClass('on');
                i = !i;
            } else {
                b1.css({
                    "display":"block",
                    'opacity': '0.9'
                });
                b2.css({
                    "display":"list-item",
                    'opacity': '0.01'
                });
                sp1.addClass('on');
                sp2.removeClass('on');
                i = !i;
            }
        }, 3000)
    };


    $(window).scroll(function() {
        var docH = $(document).scrollTop();
        var b1 = document.getElementById("firstbg");
        var b2 = document.getElementById("secondbg");
        b1.style.backgroundPosition = "50%" + (docH - 1165) + "px";
        b2.style.backgroundPosition = "50%" + (docH - 2377) + "px";
    });

    $(".qphone").hover(function() {
        $(this).css({
            "background-position": "0 -93px",
            "color": "#12b7f5"
        });
    }, function() {
        $(this).css({
            "background-position": "0 0px",
            "color": "#979797"
        });
    });
    $(".qpc").hover(function() {
        $(this).css({
            "background-position": "-105px -93px",
            "color": "#12b7f5"
        });
    }, function() {
        $(this).css({
            "background-position": "-105px 0px",
            "color": "#979797"
        });
    });
    $(".qmac").hover(function() {
        $(this).css({
            "background-position": "-210px -93px",
            "color": "#12b7f5"
        });
    }, function() {
        $(this).css({
            "background-position": "-210px 0px",
            "color": "#979797"
        });
    });
    $(".qpad").hover(function() {
        $(this).css({
            "background-position": "-326px -93px",
            "color": "#12b7f5"
        });
    }, function() {
        $(this).css({
            "background-position": "-326px 0px",
            "color": "#979797"
        });
    });



});