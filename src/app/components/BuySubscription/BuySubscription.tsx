'use client'

import { useState, useEffect } from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import {AskQuestion} from "@/app/components/AskQuestion";

import './BuySubscription.scss'

export interface BuySubscriptionProps {
    tariff: string
}

export const BuySubscription = ({ tariff }: BuySubscriptionProps) => {
    const [mounted, setMounted] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [setMounted]);

    if (!mounted) {
        return null;
    }

    return (
        <Popup
            modal
            trigger={(
                <button
                    type="button"
                    className="cases__down__checklist__btn"
                >
                    Оформить подписку
                </button>
                )}
            className="buy-subscription-dialog-submitted"
        >
            <div className="green-border-outer">
                <div className="green-border-inner">
                {
                    submitted
                        ? (
                            <h3>Наш менеджер уточнит у Вас детали и выставит счет</h3>
                        )
                        : (
                            <AskQuestion
                                headerText=""
                                buttonText="Оформить подписку"
                                onSuccess={() => { setSubmitted(true)}}
                                sentMessage={`Клиент хочет оформить подписку на тариф ${tariff}`}
                            />
                        )
                }
                </div>
            </div>
        </Popup>
    )
}
