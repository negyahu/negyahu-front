const cookie = document.cookie

function getCookie(key) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + key.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function getCookieValue(key) {
    let cookieKey = key + "="; 
    let value = "";
    const cookieArr = document.cookie.split(";");

    for(let i = 0; i < cookieArr.length; i++) {
        if(cookieArr[i][0] === " ") {
        cookieArr[i] = cookieArr[i].substring(1);
        }
        
        if(cookieArr[i].indexOf(cookieKey) === 0) {
        value = cookieArr[i].slice(cookieKey.length, cookieArr[i].length);
        return value;
        }
    }
    return value;
} 

// 쿠키 설정하기
function setCookie(key, value, options = { path: '/' }) {

    options = {...options};

    let updatedCookie = encodeURIComponent(key) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}