'use client';

import Script from 'next/script'

export function AnaliticGoogle() {
    return (
        <>
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-M3ZLEK8WVT"
                onLoad={() => {
                    // @ts-expect-error bla
                    window.dataLayer = window.dataLayer || [];
                    // @ts-expect-error bla
                    // eslint-disable-next-line prefer-rest-params
                    function gtag(){dataLayer.push(arguments);}
                    // @ts-expect-error bla
                    gtag('js', new Date());
                    // @ts-expect-error bla
                    gtag('config', 'G-M3ZLEK8WVT');
                }}
            />
        </>
    )
}