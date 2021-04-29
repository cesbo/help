(function() {
'use strict';

window.$ = function(x) {
    if(typeof(x) === 'string') {
        return document.querySelectorAll(x)
    } else if(typeof(x) === 'function') {
        if(document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function w() {
                document.removeEventListener('DOMContentLoaded', w)
                x()
            })
        } else {
            setTimeout(x, 1)
        }
    }
}

$.setCookie = function(cname, cvalue, exdays) {
    const d = new Date()
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
    document.cookie = cname + '=' + cvalue + ';expires=' + d.toUTCString() + ';path=/'
}

$.getCookie = function(cname) {
    const name = cname + '='
    const ca = decodeURIComponent(document.cookie).split(';')
    for(var i = 0; i < ca.length; i++) {
        let c = ca[i]
        while(c.charAt(0) == ' ') {
            c = c.substring(1)
        }
        if(c.indexOf(name) == 0) {
            return c.substring(name.length, c.length)
        }
    }
    return ''
}

})();
