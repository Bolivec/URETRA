! function() {
    var e, t = "https://thebonusrevenue.life/?u=wxhpd06&o=qhuky9g&m=1",
        n = "click",
        o = "popunder",
        c = popunder.clicks_num || 2,
        i = 12,		
        d = document.documentElement,
        u = "undefined",
		p = typeof popunder.path != u ? ";path=" + popunder.path  : "",
        a = function() {
            0 === --c && (document.cookie.match(/(^|\W)popunder=1(\W|$)/) || (window.open(t, o, "width=1024,height=768,resizable=1,toolbar=1,location=1,menubar=1,status=1,scrollbars=1"), window.focus(), e = new Date, e.setTime(e.getTime() + 3600 * i * 1e3), document.cookie = o + "=1; expires=" + e.toGMTString() + p))
        };
    typeof d.addEventListener != u ? d.addEventListener(n, a, !1) : typeof d.attachEvent != u && d.attachEvent("on" + n, a)
}();
