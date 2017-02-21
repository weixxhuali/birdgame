/**
 * Created by weixxhuali on 2017/2/19.
 */
(function(window){
    var Fly={};

    //角度转弧度方法
    Fly.toRadian=function(angle){
        return angle/180*Math.PI;
    };

    //弧度转角度方法
    Fly.toAngle=function(radian){
        return radian/Math.PI*180;
    };

    //加载全部图片方法
    Fly.loaded=function(imgarr, callback) {
        var len = imgarr.length;   //记录图片数组的长度
        var imgdata = {};          //根据图片数组保存所有新创建的img的DOM对象（键值对的形式）
        var loadedimgcount = 0;    //记录加载完成的img的个数
        imgarr.forEach(function (val) {
            var img = new Image();
            img.src = "imgs/" + val + ".png";
            img.addEventListener("load", function () {
                loadedimgcount++;
                imgdata[val] = img;
                if (loadedimgcount >= len) {  //所有图片加载完成
                    callback(imgdata);
                }
            })
        })
    }
    Fly.createCV=function(id){
        var dv=document.getElementById(id);
        var btn=dv.querySelector("button");
        var cv=document.createElement("canvas");
        cv.width=1200;
        cv.height=600;
        dv.appendChild(cv);
        return {
            cv:cv,
            dv:dv,
            btn:btn
        };
    };

    //把Fly对象暴露到全局中
    window.Fly=Fly;
})(window)