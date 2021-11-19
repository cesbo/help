export function setCookie(cname, cvalue, exdays) {
    const d = new Date()
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
    document.cookie = cname + '=' + cvalue + ';expires=' + d.toUTCString() + ';path=/'
}


export function getCookie(cname) {
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
