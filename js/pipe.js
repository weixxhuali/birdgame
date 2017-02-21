/**
 * Created by weixxhuali on 2017/2/19.
 */
(function(Fly){

    var Pipe=function(obj){
        this.ctx=obj.ctx;
        this.imgUp=obj.imgUp;
        this.imgDown=obj.imgDown;
        this.x=obj.x;
        this.imgW=this.imgUp.width;
        this.imgH=this.imgUp.height;
        this.y=0;
        this.upy=0;
        this.downy=0;
        this.v=-0.15;
        this.sety();
    };

    Pipe.prototype={

        constructor:Pipe,

        sety:function(){
           this.y= 200*Math.random()+50;
            this.upy=this.y-this.imgUp.height;
            this.downy=this.y+150;
        },

        draw:function(interval){
            this.x+=this.v*interval;
            this.ctx.drawImage(this.imgUp,this.x,this.upy,this.imgW,this.imgH);
            this.ctx.drawImage(this.imgDown,this.x,this.downy,this.imgW,this.imgH);
            this.ctx.rect(this.x,this.upy,this.imgW,this.imgH);
            this.ctx.rect(this.x,this.downy,this.imgW,this.imgH);
            if(this.x <= -this.imgW) {
                this.x += this.imgW * 6*4;
                this.sety();
            }
        }
    }
    Fly.Pipe=Pipe;
})(Fly);