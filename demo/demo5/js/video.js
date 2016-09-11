




    // 获取DOM对象
    var  videoWrap = document.getElementsByClassName("video")[0];
    var  video = document.getElementsByClassName("video-body")[0];
    var  control= document.getElementsByClassName("video-control")[0];
    var  durationTime = document.getElementsByClassName("video-control-show-durationTime")[0];
    var  bufferBar = document.getElementsByClassName("video-control-timeBar-bufferBar")[0];
    var  play = document.getElementsByClassName("video-control-btn-play")[0];
    var  currentTime = document.getElementsByClassName("video-control-show-currentTime")[0];
    var  current = document.getElementsByClassName("video-control-timeBar-currentBar")[0];
    var  currentRec= document.getElementsByClassName("bufferRec")[0];
    var  timeBar= document.getElementsByClassName("video-control-timeBar")[0];
    var  message= document.getElementsByClassName("video-message")[0];

    //显示底部控制栏
    videoWrap.addEventListener("mousemove",function () {
    control.style.visibility = "visible";
    },false);

    videoWrap.addEventListener("mouseleave",function () {
    setTimeout(function () {
        control.style.visibility = "hidden";
    },500)
    },false);


    // 视频预加载
    video.addEventListener("loadedmetadata",autoPlay,false);

    function autoPlay(){
        durationTime.innerHTML = timeInt(video.duration);
        setTimeout(function () {
            preload();
        },250)
    }

    // 获得缓存进度
    function preload(){

        var maxDuration = video.duration;
        var currentBuffer= video.buffered.end(0);
        var perc = currentBuffer/maxDuration;

        bufferBar.style.width =  parseInt(800 * perc) + "px";

        if(currentBuffer < maxDuration){
            setTimeout(function () {
                preload();
            },2000)
        }else{
            bufferBar.style.width ="790px";
        }
    }

    // 监听视频是否可以播放
    video.addEventListener("canplay",videoPlay,false);
    play.addEventListener("click",function () {

        if(video.paused){
            video.play();
            play.style.backgroundImage = "url(img/paused.png)";
        }else{
            video.pause();
            play.style.backgroundImage = "url(img/play.png)";
        }
    },false)
    // 视频播放或暂停
    function videoPlay() {
        message.innerText = "";
    }

        timeBarControl();
        // 视频进度
        function timeBarControl(){
            var wid;
            var i = false;
            var x,oldx,w = 14;

            currentRec.addEventListener("mousedown",function (e) {
                oldx =e.pageX;
                i = true;
            },false);


            document.addEventListener("mouseup",function () {
                w = parseInt(current.style.width);
                i = false;
            },false);


            timeBar.addEventListener("mousemove",function (e) {

                x = e.pageX;
                if(i){
                    wid = x - oldx + w ;
                    if (wid>=14 && wid<=790){
                        current.style.width = wid +"px";
                        video.currentTime = Math.floor((wid-14)/776 * video.duration);
                        currentTime.innerHTML = timeInt(video.currentTime);
                    }
                }
            },false);

            video.addEventListener("timeupdate",function () {
                currentTime.innerHTML = timeInt(video.currentTime );
                wid = Math.floor(video.currentTime/video.duration*776 +14);
                if(wid>=14 && wid<=790){
                    current.style.width = wid +"px";
                }
            },false)



            // 获取元素页面坐标
            function offsetLeft( elements ){
                var left = elements.offsetLeft;
                var parent = elements.offsetParent;
                while( parent != null ){
                    left += parent.offsetLeft;
                    parent = parent.offsetParent;
                }
                return left;
            };
        }
        // 监听进度变化事件

    // 监听等待事件

    video.addEventListener("waiting",function () {
        message.innerText = "视频正在加载";
    },false);
    

    // 毫秒格式化
    function timeInt(time){

        var h ,min,sec,res;

        time = Math.floor(time);

        if(time<=359999){
            h = Math.floor(time/3600);
            min = Math.floor((time - 3600 * h)/60);
            sec = time - 3600 * h - min * 60 ;
            res = deal(h) + ":" + deal(min) +":" + deal(sec) ;
            function deal(x) {
                if(x<10){
                    x = "0" + x;
                }
                return "" + x;
            }
        }else{
             res = "99:59:59";
        }

        return res;
    }

    // 获取错误信息
    video.addEventListener("error",catchError,false)
    function catchError(){
        var error = video.error;
        switch (error){
            case 1:
                message.innerHTML = "视频下载过程中被中断";
                break;
            case 2:
                message.innerHTML = "网络发生故障，视频下载过程被终止";
                break;
            case 3:
                message.innerHTML = "解码失败";
                break;
            case 4:
                message.innerHTML = "媒体资源不可用或者格式不被支持";
                break;
        }
    }
    // 音量控制