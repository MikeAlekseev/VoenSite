'use client';

if (typeof window !== "undefined") {
    (function(m,e,t,r,i){
        m[i]=m[i] || function(){(m[i].a=m[i].a || []).push(arguments)};
        m[i].l=1*new Date();
        for (let j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        const k=e.createElement(t)
        const a = e.getElementsByTagName(t)[0]
        k.async=1
        k.src=r
        a.parentNode.insertBefore(k,a)
    })(window, document,'script','https://mc.yandex.ru/metrika/tag.js', 'ym');

    ym(101013083, 'init', {clickmap:true, accurateTrackBounce:true, trackLinks:true});
}
