import jquery from 'jquery'

let $ = jquery;

export default {
    install(Vue) {
        Vue.directive("PictureAnimateDirective", {
            bind(el) {
                $(el)
                    .show()
                    .css({
                        transform: "translate3d(100vw, 0, 0)"
                    })
                    .on("pret", function () {
                        let that = this;
                        //这里必须延时0、10、20，否则动画不会正确执行
                        setTimeout(() => {
                            $(that).removeClass("animate-transition");
                            $(that).css({
                                transform: "translate3d(0, 0, 0)"
                            });
                        }, 0);
                        setTimeout(() => {
                            $(that).animate({}, function () {
                                $(this).addClass("animate-transition");
                                $(this).css({
                                    transform: "translate3d(100vw, 0, 0)"
                                });
                            });
                        }, 20);
                    })
                    .on("next", function () {
                        $(this).removeClass("animate-transition");
                        $(this).css({
                            transform: "translate3d(100vw, 0, 0)"
                        });
                        $(this).animate({}, function () {
                            $(this).addClass("animate-transition");
                            $(this).css({
                                transform: "translate3d(0, 0, 0)"
                            });
                        })
                    });
            }
        });
    }
}