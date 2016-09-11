/* 
* @Author: anchen
* @Date:   2016-06-01 22:03:28
* @Last Modified by:   anchen
* @Last Modified time: 2016-06-02 12:30:05
*/

$(document).ready(function(){
    $("#web").mouseover(function(){
        $(this).css("background-position","0 -514px");
    });
    $("#web").mouseout(function(){
        $(this).css("background-position","0 -460px");
    });
     $("#card").mouseover(function(){
        $(this).css("background-position","-250px -269px");
    });
    $("#card").mouseout(function(){
        $(this).css("background-position","-250px 0px");
    });
    $("#ios").mouseover(function(){
        $(this).css("background-position","0px -239px");
    });
    $("#ios").mouseout(function(){
        $(this).css("background-position","0px -166px");
    });
    $("#andro").mouseover(function(){
        $(this).css("background-position","0px -385px");
    });
    $("#andro").mouseout(function(){
        $(this).css("background-position","0px -312px");
    });


        var a = true;
        var b = true;
        var c = true;
        var d = true;
        var i1 = $(".item1");
        var i2 = $(".item2");
        var i3 = $(".item3");
        var i4 = $(".item4");
        var i5 = $(".item5");
        var d2 = $("#div2");
        var d3 = $("#div3");
        var d4 = $("#div4");
        var d5 = $("#div5");
        function change2R(){
            i2.css("left","744px");
            d2.css("left","744px");
        };
        function change3R(){
            i3.css("left","833px");
            d3.css("left","833px");
        };
        function change4R(){
            i4.css("left","922px");
            d4.css("left","922px");
        };
        function change5R(){
            i5.css("left","1011px");
            d5.css("left","1011px");
        };
        function change2L(){
            i2.css("left","89px");
            d2.css("left","89px");
        };
        function change3L(){
            i3.css("left","178px");
            d3.css("left","178px");
        };
        function change4L(){
            i4.css("left","267px");
            d4.css("left","267px");
        };
        function change5L(){
            i5.css("left","356px");
            d5.css("left","356px");
        };
       
        $(".item5").mouseover(function(){
            if (!a&&!b&&!c&&!d){
                a = !a;
                b = !b;
                c = !c;
                d = !d;
                change5L();
                change4L();
                change3L();
                change2L();
            }
            else if(!a&&!b&&!c&&d){
                a = !a;
                b = !b;
                c = !c;
                change5L();
                change4L();
                change3L();
            }
            else if(!a&&!b&&c&&d){
                a = !a;
                b = !b;
                change5L();
                change4L();    
            }
            else if(!a&&b&&c&&d){
                change5L();
                a = !a;
            }       
        });
        $(".item4").mouseover(function(){
            if (b&&a) {
                a = !a;
                change5R();
            }     
            else if(b&&!a){
                change4R();
                b = !b;
            }
            else if( !a&&!b&&!c&&!d){
                b = !b;
                c = !c;
                d = !d;
                change4L();
                change3L();
                change2L();
            } 
            else if( !a&&!b&&!c&&d){
                b = !b;
                c = !c;
                change4L();
                change3L();
            } 
            else if( !a&&!b&&c&&d){
                b = !b;
                change4L();
            } 
        });      
        $(".item3").mouseover(function(){
            if (a&&b&&c){
                a = !a;
                b = !b;
                change5R();
                change4R();
            }
            else if(!a&&b&&c){
                change4R();
                b = !b;
 
            }
            else if(!a&&!b&&c){
                change3R();
                c = !c;
            }
            else if(!a&&!b&&!c&&!d){
                c = !c;
                d = !d;
                change3L();
                change2L();
            }
            else if(!a&&!b&&!c&&d){
                c = !c;
                change3L();
            }   
        });
        $(".item2").mouseover(function(){
            if (a&&b&&c&&d){
                a = !a;
                b = !b;
                c = !c;
                change5R();
                change4R();
                change3R();
            }
            else if(!a&&b&&c&&d){
                b = !b;
                c = !c;
                change4R();
                change3R();
            }
            else if(!a&&!b&&c&&d){
                c = !c;
                change3R();  
            }
            else if(!a&&!b&&!c&&d){
                change2R();
                d = !d;
            }
            else if(!a&&!b&&!c&&!d){
                change2L();
                d = !d;
            } 
        });
        i1.mouseover(function(){
            if (a&&b&&c&&d){
                a = !a;
                b = !b;
                c = !c;
                d = !d;
                change5R();
                change4R();
                change3R();
                change2R();
            }
            else if(!a&&b&&c&&d){
                b = !b;
                c = !c;
                d = !d;
                change4R();
                change3R();
                change2R();
            }
            else if(!a&&!b&&c&&d){
                c = !c;
                d = !d;
                change3R();
                change2R();    
            }
            else if(!a&&!b&&!c&&d){
                change2R();
                d = !d;
            } 

        });


});