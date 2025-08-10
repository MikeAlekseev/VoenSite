// src/components/Analytics.tsx
'use client';

import { useEffect } from 'react';

const Analytics = () => {
    useEffect(() => {
        // Google Tag
        const gtagScript = document.createElement('script');
        gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-M3ZLEK8WVT';
        gtagScript.async = true;
        document.head.appendChild(gtagScript);

        const gtagInit = document.createElement('script');
        gtagInit.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-M3ZLEK8WVT');
    `;
        document.head.appendChild(gtagInit);

        // Yandex Metrika
        const ymScript = document.createElement('script');
        ymScript.type = 'text/javascript';
        ymScript.innerHTML = `
      (function(m,e,t,r,i,k,a){
        m[i]=m[i]function(){(m[i].a=m[i].a[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {
          if (document.scripts[j].src === r) { return; }
        }
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
      })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');

      ym(101013083, 'init', {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
      });
    `;
        document.body.appendChild(ymScript);

        // <noscript> can't be inserted via JS (ignored), only relevant for users without JS
    }, []);

    return null;
};

export default Analytics;
