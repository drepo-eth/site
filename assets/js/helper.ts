export const getViewportWidth = function () {
    return Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
}

export const debounce = function (callback){
    let timer;
    return function(event){
        if(timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(callback, 100, event);
    };
}
