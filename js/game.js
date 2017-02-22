/**
 * Created by weixxhuali on 2017/2/19.
 */
(function (Fly) {
    var Game = function (id) {
        this.id=id;
        this.cv=null;
        this.ctx=null;
        this.dv=null;
        this.imgarr = ["birds", "land", "pipe1", "pipe2", "sky"];
        this.flag = true;
        this.bird = null;
        this.objsarr = [];
        this.starttime = new Date();
        this.origtime=this.starttime;
        this.curtime = null;
        this.btn=null;
        this.time=null;
    }
    Game.prototype = {
        constructor: Game,
        initroles: function (imgdata,id) {
            var obj=Fly.createCV(id)
            this.cv=obj.cv;
            this.btn=obj.btn;
            this.dv=obj.dv;
            this.ctx=this.cv.getContext("2d");

            for (var i = 0; i < 3; i++) {
                this.objsarr.push(
                    new Fly.Sky({
                        ctx: this.ctx,
                        image: imgdata.sky,
                        x: imgdata.sky.width * i
                    })
                )
            }


            for (var i = 0; i < 6; i++) {
                this.objsarr.push(
                    new Fly.Pipe({
                        ctx: this.ctx,
                        imgUp: imgdata.pipe2,
                        imgDown: imgdata.pipe1,
                        x: imgdata.pipe1.width * i * 4 + 300
                    })
                )
            }

            this.time=new Fly.Time({ctx:this.ctx,origtime:this.origtime});
            this.objsarr.push(this.time);

            for (var i = 0; i < 5; i++) {
                this.objsarr.push(
                    new Fly.Land({
                        ctx: this.ctx,
                        image: imgdata.land,
                        x: imgdata.land.width * i,
                        y: this.cv.height - imgdata.land.height
                    })
                )
            }

            this.bird = new Fly.Bird({
                ctx: this.ctx,
                image: imgdata.birds
            });
        },
        start: function () {
            var that = this;
            Fly.loaded(this.imgarr, function (imgdata) {
                that.initroles(imgdata,that.id);
                (function render() {
                    that.curtime = new Date();
                    var interval = that.curtime - that.starttime;
                    that.starttime = that.curtime;
                    that.ctx.clearRect(0, 0, that.cv.width, that.cv.height);
                    that.ctx.beginPath();
                    that.ctx.save();






                    that.objsarr.forEach(function (obj) {
                        obj.draw(interval);
                    })



                    that.bird.draw(interval);

                    if (that.bird.y <= 0 || that.bird.y >= that.cv.height - imgdata.land.height || that.ctx.isPointInPath(that.bird.x, that.bird.y)) {
                        that.flag = false;
                    }





                    that.ctx.restore();
                    if (that.flag) {
                        window.requestAnimationFrame(render);
                    }else{
                        that.btn.style.display="block";
                    }

                })();
                that.bindEvent(imgdata);
            })
        },
        end: function () {
            this.flag = false;
        },

        bindEvent: function (imgdata) {
            var that=this;
            that.cv.addEventListener("click", function () {
                that.bird.changespeed(-0.3);
            })
            that.btn.addEventListener("click", function () {
                that.dv.innerHTML="<button>继续游戏</button>";
                var game=new Fly.Game("cv");
                game.start();
            })
        }
    }
    Fly.Game = Game;
})(Fly)