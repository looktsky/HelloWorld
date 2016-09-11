/**
 * Created by 61720 on 2016.09.10.
 */
$(document).ready(function () {
    var paper = $("#paper");
    var code = paper.html();
    var pos = 0;
    len = code.length;
    paper.html("").css("display","block");
    (function write() {
        pos++;
        if(pos<=len){
            switch(code.charAt(pos)){
                case "<": pos = code.indexOf(">",pos);
                    break;
                case "&": pos  = code.indexOf(";",pos);
                    break;
            }
            paper.html(code.substring(0,pos));
            setTimeout(write,100);
        }else {
            paper[0].classList.add("end");
        };

    })();
    
});