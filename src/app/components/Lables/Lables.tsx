"use client"

import './Lables.scss'

export const Lables = () =>{
    return(
        <div className="main pc-container">
            <h2 className="main__header">С нами работают военнослужащие:</h2>
            <div className="main__list">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="main__checklist" src="/img/mo_rf.jpg" alt="mo_rf"/>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="main__checklist" src="/img/fsbrf.jpg" alt="fsb"/>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="main__checklist" src="/img/sk_rf.jpg" alt="sk"/>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="main__checklist" src="/img/mcs_rf.jpg" alt="mcs"/>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="main__checklist" src="/img/mvd_rf.jpg" alt="mvd"/>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="main__checklist" src="/img/rosgv.jpg" alt="rosgv"/>
            </div>
        </div>
    )
}