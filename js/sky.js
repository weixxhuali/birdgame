/**
 * Created by weixxhuali on 2017/2/19.
 */
(function(Fly){

    var Sky=function(obj){
        this.image=obj.image;
        this.ctx=obj.ctx;
        this.x=obj.x;
        this.imgW=this.image.width;
        this.imgH=this.image.height;
        this.v=-0.1;
        this.s=0;
    };

    Sky.prototype={
        constructor:Sky,
        draw:function(interval){
            this.s+=this.v*interval;
            this.ctx.drawImage(this.image,this.x+this.s,0,this.imgW,this.imgH);

            if(this.s<-this.imgW){this.s=0}
        }
    }

    Fly.Sky=Sky;
})(Fly);