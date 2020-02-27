// !function(e,t){function n(){var n=l.getBoundingClientRect().width;t=t||540,n>t&&(n=t);var i=100*n/e;r.innerHTML="html{font-size:"+i+"px;}"}var i,d=document,o=window,l=d.documentElement,r=document.createElement("style");if(l.firstElementChild)l.firstElementChild.appendChild(r);else{var a=d.createElement("div");a.appendChild(r),d.write(a.innerHTML),a=null}n(),o.addEventListener("resize",function(){clearTimeout(i),i=setTimeout(n,300)},!1),o.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(i),i=setTimeout(n,300))},!1),"complete"===d.readyState?d.body.style.fontSize="16px":d.addEventListener("DOMContentLoaded",function(e){d.body.style.fontSize="16px"},!1)}(750,750);
// document.documentElement.style.fontSize = document.documentElement.clientWidth * 100 / 1920 + "px";
// 			window.addEventListener("resize", function() {
// 				document.documentElement.style.fontSize = document.documentElement.clientWidth * 100 / 1920 + "px"
// 				console.log(document.documentElement.style.fontSize)
// 			}, false)

(function(){
    function w() {
    var r = document.documentElement;
    var a = r.getBoundingClientRect().width;//获取当前设备的宽度
        if (a > 1920 ){//414不固定，根据设计稿的宽度定
            a = 1920;
        } 
        rem = a / 19.2;
        r.style.fontSize = rem + "px"
    }
    w();
    window.addEventListener("resize", function() {//监听横竖屏切换
        w()
    }, false);
})();