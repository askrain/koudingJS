function addEvent(obj,evt,fn) {
    if (obj.addEventListener){
        obj.addEventListener(evt,fn,false);
    } else if (obj.attachEvent){
        obj.attachEvent("on"+evt, function () {
            fn.call(obj);
        });
    }
}

function removeEvent(obj,evt,fn) {
    if (obj.removeEventListener){
        obj.removeEventListener(evt,fn, false);
    } else if(obj.detachEvent){
        obj.detachEvent("on"+evt, fn);
    }
}

function preDef(evt) {
    var e=evt||window.event;
    if (e.preventDefault){//w3c
        e.preventDefault();
    } else{
        e.returnValue=false;
    }
}


//跨浏览器的兼容下发
function getCharCode(evt) {
    var e=evt||window.event;
    if (typeof e.charCode=="number"){
        return e.charCode;
    } else{
        return e.keyCode;
    }
}