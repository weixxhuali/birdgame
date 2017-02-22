/**
 * Created by weixxhuali on 2017/2/20.
 */
(function(Fly){
    var Time=function(obj){
        this.ctx=obj.ctx;
        this.origtime=obj.origtime-0;
        this.begintime=obj.origtime-0;
    }
    Time.prototype={
        constructor:Time,
        draw:function(interval){
            this.origtime+=interval;
            var ge=(this.origtime-this.begintime)/1000;
            var txt=Math.floor(ge/60)+"分"+Math.floor(ge%60)+"秒";
            this.ctx.font="50px 微软雅黑";
            this.ctx.fillText(txt,900,80);
        }
    }
    Fly.Time=Time;
})(Fly)