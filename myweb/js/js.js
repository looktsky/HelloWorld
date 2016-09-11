/* 
* @Author: 杨佳澍
* @Date:   2016-05-17 22:20:30
* @Last Modified by:   anchen
* @Last Modified time: 2016-05-31 13:29:32
*/

$(document).ready(function(){
    // 此函数控制顶部下拉菜单开关
    var topTitleMenu = function(){
        var topi = true;
        $("#top_title_key").click(function(){
            $("#piano").toggle(1000);
            if(topi)
                {$(this).css( "transform","rotate(360deg)").children().html("Close");topi = !topi;}
            else
                {$(this).css( "transform","rotate(0deg)").children().html("Open");topi = !topi;}
        });
    }();  
    // 弹钢琴函数
    var piano = function(){
        // 打开网页即播放一次1-8琴音
        var firstPlay = function(){
            var i = 0;
            var j = -1;
            var timerMax = setInterval(function(){
                if (i<8) {
                    changeFontMax(i);
                    pianoKey(i);
                    i++;}
            },500)
            var timerMax2 = setInterval(function(){
                if (j<8) {
                    changeFontMin(j);
                    j++;}
                else{
                    // 第一次播放执行完毕后执行背景音乐播放
                    clearTimeout(timerMax2,backMusic());}
            },500)
            // 调用 piano函数
        }();  

        // 声明哪个按键被选中
        var keyNum = null; 
        // 此函数改变选中字体样式
        var topTitleFont =function(){
            var p = $(".piano");
             p.mouseover(function(){
                $(this).css("font-size","180px");
                keyNum = $(this).index();
                pianoKey(keyNum);
                })
             .mouseout(function(){
                $(this).css("font-size","150px");
                });
        }();
        //此函数播放被选中的音频
        function pianoKey(keyNum){
            var aPianoKey = $("#top_title audio");
            aPianoKey[keyNum].autoplay = "autoplay";
            aPianoKey[keyNum].load();
        };
        
        //下面俩函数改变选中字体样式
        function changeFontMax(keyNum){
            $(".piano:eq("+keyNum+")").css("font-size","180px");
            }
        function changeFontMin(keyNum){
            $(".piano:eq("+keyNum+")").css("font-size","150px");
        }

        //绑定键盘事件播放相应音频
        var keyPlay = function(){
            var num = null;
            var x = null;
            $(document).keydown(function(event) {
                var num = event.which;
                switch(num){
                    case 65:
                    keyNum = 0;pianoKey(keyNum);changeFontMax(keyNum);break;
                    case 83:
                    keyNum = 1;pianoKey(keyNum);changeFontMax(keyNum);break;
                    case 68:
                    keyNum = 2;pianoKey(keyNum);changeFontMax(keyNum);break;
                    case 70:
                    keyNum = 3;pianoKey(keyNum);changeFontMax(keyNum);break;
                    case 71:
                    keyNum = 4;pianoKey(keyNum);changeFontMax(keyNum);break;
                    case 72:
                    keyNum = 5;pianoKey(keyNum);changeFontMax(keyNum);break;
                    case 74:
                    keyNum = 6;pianoKey(keyNum);changeFontMax(keyNum);break;
                    case 75:
                    keyNum = 7;pianoKey(keyNum);changeFontMax(keyNum);break; 
                };
            });
            $(document).keyup(function(event) {
                var numUp = event.which;
                 switch(numUp){
                    case 65:
                    keyNum = 0;changeFontMin(keyNum);break;
                    case 83:
                    keyNum = 1;changeFontMin(keyNum);break;
                    case 68:
                    keyNum = 2;changeFontMin(keyNum);break;
                    case 70:
                    keyNum = 3;changeFontMin(keyNum);break;
                    case 71:
                    keyNum = 4;changeFontMin(keyNum);break;
                    case 72:
                    keyNum = 5;changeFontMin(keyNum);break;
                    case 74:
                    keyNum = 6;changeFontMin(keyNum);break;
                    case 75:
                    keyNum = 7;changeFontMin(keyNum);break; 
                };
            });
        }();  //keyPlay 键盘播放调用
    }();      //piano 调用
     

    //前端练习li遮盖行为
    web_exercise ()   
    function web_exercise (){
        var li = $("#web_exercise ul li");
        li.mouseover(function() {
            $(this).children('div').css("top","0px");
        }).mouseout(function() {
            $(this).children('div').css("top","-200px");
        });
    }


    //左侧上面的时间函数
    timeClock();
    function timeClock(){
        var time = new Date();
        var y = time.getFullYear();
        var m = time.getMonth()+1;
        var d = time.getDate();
        var h = time.getHours();
        var mins = time.getMinutes();
        var s = time.getSeconds();

        function checkTime(x){
            if(x < 10){
                x = "0"+ x;
            }
            return x;
        }
    
        $("#plug_text").val(y+" "+checkTime(m)+" "+checkTime(d)+" "+checkTime(h)+":"+checkTime(mins)+":"+checkTime(s));
        setTimeout(function(){timeClock()},500);
    };

    //此函数控制背景音乐播放
    function backMusic(){
        var i = false;
        var aPianoKey = document.getElementsByTagName("audio");
        var music = $("#plug_music");
        aPianoKey[8].play();
        music.click(function(){
            if(!i){
                aPianoKey[8].pause();
                music.css({"background-image":"url(img/tusiNo2.gif)"}) ;
                i = !i;
            }
            else{
                aPianoKey[8].play();
                music.css({"background-image":"url(img/tusiNo1.gif)"}) ;
                i = !i;
            }
        })
    };
    


    //打开网页时导航栏显示
    show_nav();
    function show_nav(){
        $("#web_nav").css("width","96%");
    };
    //打开网页时前端练习栏显示
    show_exercise();
    function show_exercise(){
        $("#web_exercise").css("width","96%");
    };
    //前端练习栏显示函数 由滑动条事件控制
    function show_skills(){
        $("#web_skill li").css({"right":"0px"});
    };
    //关于本站栏显示函数 由滑动条事件控制
    function show_web(){
        $("#web_introduce article").css({"padding-left":"0px"}).parent().css("overflow","visible");
    };
    //联系到我栏显示函数 由滑动条事件控制
    function show_personal(){
        $("#personal_infomation").css({"padding-left":"0px"});
    };
            
            
            
            
    //左侧下面的列表函数  
    asideLeft();
    function asideLeft(){
        var i = 0;
        var asideLi = $("#web_aside_left li");
        asideLi[1].click(function(){
            show_skills();
        });
        asideLi[2].click(function(){
            show_web();
        });
        asideLi[3].click(function(){
            show_personal();
        })


        //鼠标事件效果
        asideLi.mouseover(function(){
            asideLeftOver(this);
        });
        asideLi.mouseout(function(){
            asideLeftOut(this);
        });

        function asideLeftOver (a){
            $(a).css({"margin-left":"17px","background":"white",});
            $(a).children('a').css("color","black");
            $(a).children('div').css("background","black");
        };
        function asideLeftOut(b){
            $(b).css({"margin-left":"auto","background":"black",});
            $(b).children('a').css("color","white");
            $(b).children('div').css("background","white");
        }
        //滑动条事件
        $(window).scroll(function (){
            move();
        })
        function move(){
            var docH = $(document).scrollTop();
            if (docH <= 10 ) {
                asideLeftOut("#web_aside_left li");
            };
            if (docH > 10 && docH <= 266 ) {
                asideLeftOut("#web_aside_left li");
                i = 0;
                asideLeftOver("#web_aside_left li:eq("+i+")");
            };
            if (docH > 266 && docH <= 782 ) {
                show_skills();
                asideLeftOut("#web_aside_left li");
                i = 1;
                asideLeftOver("#web_aside_left li:eq("+i+")");
            };
            if (docH > 782 && docH <= 1284 ) {
                show_web();
                asideLeftOut("#web_aside_left li");
                i = 2;
                asideLeftOver("#web_aside_left li:eq("+i+")");
            };
            if (docH > 1284 && docH <= 1382 ) {
                show_personal();
                asideLeftOut("#web_aside_left li");
                i = 3;
                asideLeftOver("#web_aside_left li:eq("+i+")");
            }; 
        };
    };
    

    //顶部下拉菜单琴谱轮播
    pianoImg();
    function pianoImg(){
        var num = 0;
        var aImg = ["url(img/piano01.gif)","url(img/piano02.gif)","url(img/piano03.gif)"]
        var l = $("#piano_left");
        var r = $("#piano_right");
        l.parent().css("background-image",aImg[num]);
        l.mouseover(function(event) {
            l.css("opacity","1");
        }).mouseout(function(event) {
            l.css("opacity","0.5");
        });
        r.mouseover(function(event) {
            r.css("opacity","1");
        }).mouseout(function(event) {
            r.css("opacity","0.5");
        });
        l.click(function(){
            num--;
            if (num >= 0 ) {
                num %= aImg.length;
            }
            else{
                num = aImg.length-1;
            }
            l.parent().css("background-image",aImg[num]);
        });
        r.click(function(){
            num++;
            if (num <= aImg.length) {
                num %= aImg.length;
            }
            else{
                num = 0;
            }
            l.parent().css("background-image",aImg[num]);
        });
    }

});