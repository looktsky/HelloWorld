/* 
* @Author: anchen
* @Date:   2016-06-12 21:12:51
* @Last Modified by:   61720
* @Last Modified time: 2016-08-18 09:55:20
*/

$(document).ready(function(){
      
    // 弹钢琴函数
    var piano = function(){
        // 此函数控制顶部下拉菜单开关
        var topi = true;
        var topTitleMenu = function(){
            $("#top_title_key").click(function(){
                $("#piano").toggle(1000);
                if(topi)
                    {$(this).css( "transform","rotate(360deg)").children().html("Close");topi = !topi;}
                else
                    {$(this).css( "transform","rotate(0deg)").children().html("Open");topi = !topi;}
            });
        }();
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
                    clearTimeout(timerMax);}
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
                if (!topi) {
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
                };
            });
            $(document).keyup(function(event) {
                if (!topi) {
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
                }; 
            });
        }();  //keyPlay 键盘播放调用
    }();      //piano 调用
    

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
    
    // 百度搜索下拉菜单
    bdSearch();

    function bdSearch(){
        var kw = document.getElementById('bdkw');
        var oul = document.getElementById('bdUl');
        var su = document.getElementById('bdsu');
        // jsonp
        kw.onkeyup = function(){
            if(this.value != ""){
                var nScript = document.createElement("script");
                nScript.src = "http:/suggestion.baidu.com/su?wd="+this.value+"&cb=bdcb";
                document.body.appendChild(nScript);
            }
            else{
                oul.style.visibility = "hidden";
            }
        }
        su.onclick = function(){
            var ht = "http:/www.baidu.com";
            window.open (ht) ;
        } 
    }



    // 注册LKT账号
    // 初始化
    // initialize();
    // function initialize(){
    //     var sta = $(".status");
    //     var uid = $.cookie("uid");
    //     var username = $.cookie("username");
    //     // 如果是登陆状态
    //     if () {
    //         sta.html("您已登录");
    //     };
    //     else{
    //         sta.html("请登录");
    //     }
    // };

    // showList();
    // var zcUserName = $(".usernamezc");
    // var zcUserMsg = $(".zcUserNameMsg");
    // // 验证用户名
    // zcUserName.blur(function(data) {
    //     $.ajax({
    //         url: 'lktuser/index.php',
    //         type: 'GET',
    //         dataType: 'json',
    //         data: {m: 'index',a:'verifyUserName',username:$(this).value},
    //     })
    //     .done(function() {
    //         zcUserMsg.get().innerHTML = data.message;
    //         if (data.code) {
    //             zcUserMsg.css("color","red");
    //         }
    //         else{
    //             zcUserMsg.css('color', 'green');
    //         };
    //     });
    // });
    

    // //用户注册
    // var zcPassWord = $(".passwordzc");
    // var zcBut = $(".butzc");
    // zcBut.click(function(data){
    //     $.ajax({
    //         url: 'lktuser/index.php',
    //         type: 'GET',
    //         dataType: 'json',
    //         data: {m: 'index',a:'reg',username:zcUserName.value,password:zcPassWord.value},
    //     })
    //     .done(function() {
    //         alert(data.message);
    //     })
    // });

    // //用户注册
    // var logUserName = $(".usernamelg");
    // var logPassWord = $(".passwordlg");
    // var logBut = $(".butlg");
    // logBut.click(function(data){
    //     $.ajax({
    //         url: 'lktuser/index.php',
    //         type: 'GET',
    //         dataType: 'json',
    //         data: {m: 'index',a:'login',username:logUserName.value,password:logPassWord.value},
    //     })
    //     .done(function(data) {
    //         alert(data.message);
    //         if (!data.code) {
    //            initialize(); 
    //         };
    //     })
        
        



        
    // });
    

});





