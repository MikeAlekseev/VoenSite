'use client'
import {useState, useCallback, FormEventHandler} from "react";
import {clsx} from "clsx";

import {sendMail} from '@/lib/send-mail';

import './AskQuestion.scss'

type FromState = 'init' | 'submitting' | 'error'

interface AskQuestionProps {
    showMessageInput?: boolean;
    wrapperClassName?: string;
    darkMode?: boolean;
}

export const AskQuestion = ({showMessageInput, wrapperClassName, darkMode}: AskQuestionProps) => {
    const [message, setMessage] = useState('');
    const [messageError, setMessageError] = useState(validateMessage(message));
    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState(validatePhone(phone));
    const [formError, setFormError] = useState('');
    const [formState, setFormState] = useState<FromState>('init');
    const [messageTimer, setMessageTimer] = useState(0)

    const submitHandler: FormEventHandler<HTMLFormElement> = useCallback(async (e) => {
        e.preventDefault()

        if (messageError || phoneError) {
            setFormState('error')

            return
        }

        const formEl = e.target as HTMLFormElement
        const formData = new FormData(formEl)
        const formRawValues = Object.fromEntries(formData) as { phone: string, question: string };

        clearTimeout(messageTimer)
        setMessageTimer(0)
        setFormState('submitting')
        setFormError('')

        try {
            await sendMail(formRawValues.phone, formRawValues.question)

            setFormState('init')
            setMessage('')
            setMessageError(validateMessage(''))
            setPhone('')
            setPhoneError(validateMessage(''))

            const timer = (setTimeout(() => {
                setMessageTimer(0)
            }, 10 * 1000)) as unknown as number
            setMessageTimer(timer)
        } catch (error) {
            setFormState('error')
            setFormError((error as { message: string }).message)
        }
    }, [messageError, phoneError, messageTimer])

    const isButtonDisabled = Boolean(
        formState === 'submitting' ||
        formState === 'error' && (formError || phoneError || messageError)
    )

    return (
        <div className={clsx('askQuestionWrapper main__content__form', { 'askQuestionDarkMode': darkMode }, wrapperClassName)}>
            <h2 className="main__content__form__header">Есть вопрос? Задайте его: </h2>
            <form className="askQuestionForm cons__form" action="/submit" method="post" onSubmit={submitHandler}>
                {
                    showMessageInput && (
                        <>
                            <label htmlFor="question">Ваш вопрос:</label>
                            <textarea
                                id="question"
                                name="question"
                                rows={4}
                                value={message}
                                onChange={(event) => {
                                    const {value} = event.target

                                    setMessage(value)
                                    setFormError('')
                                    setMessageError(validateMessage(value))
                                }}
                            />
                            {
                                formState === 'error' && messageError && <p style={{color: 'red'}}>{messageError}</p>
                            }
                        </>
                    )
                }

                <label htmlFor="phone">Номер телефона:</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+7 (___) ___-__-__"
                    required
                    value={phone}
                    onChange={(event) => {
                        const {value} = event.target

                        setPhone(value)
                        setFormError('')
                        setPhoneError(validatePhone(value))
                    }}
                />
                {
                    formState === 'error' && phoneError && <p style={{color: 'red'}}>{phoneError}</p>
                }

                <button
                    type="submit"
                    className={clsx('askQuestionButton', { 'askQuestionButtonActive': !isButtonDisabled})}
                    disabled={isButtonDisabled}
                >
                    {formState === 'submitting' ? 'Ожидайте...' : 'ЗАДАТЬ ВОПРОС ЮРИСТУ'}
                </button>
                {
                    formError && <p style={{color: 'red'}}>{formError}</p>
                }
                {
                    messageTimer
                        ? <p className="askQuestionGoodMessage">Обращение успешно отправлено</p>
                        : null
                }
            </form>
        </div>
    )
}

function validateMessage(value: string) {
    return (
        typeof value !== 'string'
            ? 'Введите сообщение'
            : (
                value.length > 1000
                    ? 'Слишком длинное обращение'
                    : ''
            )
    )
}

function getPhoneDigits(value: string) {
    const digits = value.match(/\d/g)

    if (digits) {
        return digits.join('')
    }

    return ''
}

export function validatePhone(value: string) {
    if (typeof value !== 'string') {
        return 'Введите телефон'
    }

    const phone = getPhoneDigits(value)

    return (
        !phone
            ? 'Введите телефон'
            : (
                phone.length === 11
                    ? ''
                    : 'Введен некорректный номер телефона'
            )
    )
}
