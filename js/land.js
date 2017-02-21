/**
 * Created by weixxhuali on 2017/2/19.
 */
(function(Fly){

    var Land=function(obj){
        this.ctx=obj.ctx;
        this.image=obj.image;
        this.x=obj.x;
        this.y=obj.y;
        this.imgW=this.image.width;
        this.imgH=this.image.height;
        this.v=-0.15;
    };

    Land.prototype={

        constructor:Land,

        draw:function(interval){
            this.x+=this.v*interval;
            this.ctx.drawImage(this.image,this.x,this.y,this.imgW,this.imgH);
            if(this.x <= -this.imgW) {
                this.x += this.imgW * 5;
            }
        }
    }

    Fly.Land=Land;
})(Fly);