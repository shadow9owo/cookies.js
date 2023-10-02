function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}
function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";";
}