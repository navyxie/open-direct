;(function(win,doc){
    doc.addEventListener('click',function(e){
        var target = e.target;
        if(target.tagName === 'A'){
            var href = target.getAttribute('href');
            if(href && (/^[^(https:)]/i.test(href)) || href.indexOf('https://www.google.') !== -1){     
                target.setAttribute('href',pickUrl(href));
            }
        }
    },false);
    function pickUrl(url){
        var originUrl = url;
        try{
            var paramArr = url.split('&');
            for(var i = 0 , len = paramArr.length ; i < len; i++){
                var mapObj =  paramArr[i].split('=');
                if(mapObj[0] === 'url'){
                    originUrl = decodeURIComponent(mapObj[1]);
                    break;
                }
            }
        }catch(e){

        }
        return originUrl;
    }
})(window,document);