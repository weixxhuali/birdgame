/**
 * Created by weixxhuali on 2017/2/19.
 */
(function (Fly) {

    var Bird = function (obj) {
        this.image = obj.image;
        this.ctx=obj.ctx;
        this.imageWidth = this.image.width;
        this.imageHeight = this.image.height;
        this.imgW = this.imageWidth / 3;
        this.imgH = this.imageHeight;
        this.x = 100;
        this.y = 100;
        this.index = 0;
        this.a = 0.0005;
        this.v = 0;
        this.maxAngle = 45;
        this.curAngle = 0;
    };

    Bird.prototype = {

        constructor:Bird,

        draw:function (interval) {
            this.v+=this.a*interval;
            this.y+=this.v*interval+this.a*interval*interval;
            this.curAngle=this.v/0.3*this.maxAngle;
            if(this.curAngle> this.maxAngle){this.curAngle= this.maxAngle};
            if(this.curAngle<- this.maxAngle){this.curAngle= -this.maxAngle};
            this.ctx.translate(this.x,this.y);
            this.ctx.rotate(Fly.toRadian(this.curAngle));
            this.ctx.drawImage(this.image, this.imgW * this.index++, 0, this.imgW, this.imgH, -this.imgW/2, -this.imgH/2,this.imgW, this.imgH);
            this.index %= 3;
        },

        changespeed:function (speed) {
            this.v=speed;
        }
    }

    Fly.Bird=Bird;
})(Fly);