
(function(){
    function w() {
        var r = document.documentElement; //根元素html
        var a = r.getBoundingClientRect().width;
        if (a > 1024 ){
            a = 1024;
        }
        rem = a / 7.5;
        r.style.fontSize = rem + "px";
    }
    var t;
    w();
    window.addEventListener("resize", function() {
        clearTimeout(t);
        t = setTimeout(w, 300);
    }, false);
})();

