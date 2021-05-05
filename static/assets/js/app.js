function $(x) {
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

function setCookie(cname, cvalue, exdays) {
    const d = new Date()
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
    document.cookie = cname + '=' + cvalue + ';expires=' + d.toUTCString() + ';path=/'
}

function getCookie(cname) {
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

function checkLanguage(lang) {
    const list = ['en', 'ru'];
    if(!!lang) {
        lang = lang.substring(0, 2);
        return (list.indexOf(lang) != -1) ? lang : list[0];
    } else {
        return list[0];
    }
}

function getLanguage(lang) {
    lang = lang || getCookie('lang') || navigator.language;
	return checkLanguage(lang);
}

function setLanguage(lang) {
    lang = checkLanguage(lang);
    setCookie('lang', lang, 365);
}
