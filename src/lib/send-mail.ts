'use server';
import nodemailer from 'nodemailer';
import { htmlToText } from 'nodemailer-html-to-text'

const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD
const FROM = process.env.EMAIL_FROM
const transporter = nodemailer.createTransport({
    host: SMTP_SERVER_HOST,
    port: Number(process.env.SMTP_SERVER_PORT),
    secure: true,
    auth: {
        user: SMTP_SERVER_USERNAME,
        pass: SMTP_SERVER_PASSWORD,
    },
}, {
    from: FROM,
});

await transporter.verify();

transporter.use('compile', htmlToText())

export async function sendMail(phone: string, message: string) {
    const phoneError = validatePhone(phone)

    if (phoneError) {
        throw new Error(phoneError);
    }

    const messageError = validateMessage(message)

    if (messageError) {
        throw new Error(messageError);
    }

    const cleanedPhone = getPhoneDigits(phone)
    const sendTo = process.env.EMAIL_TO
    const subject = process.env.EMAIL_SUBJECT

    try {
        await transporter.sendMail({
            to: sendTo,
            subject: subject,
            text: `Телефон: ${cleanedPhone}\n\n${message || ''}`,
        });
    } catch {
        throw new Error('Прием обращений временно недоступен. Попробуйте написать в telegram');
    }
}

function validateMessage(value: string) {
    if (typeof value === 'undefined') {
        return ''
    }

    return (
        typeof value === 'string'
            ? (
                value.length > 1000
                    ? 'Слишком длинное обращение'
                    : ''
            )
            : 'Введите сообщение'
    )
}

function getPhoneDigits(value: string) {
    const digits = value.match(/\d/g)

    if (digits) {
        return digits.join('')
    }

    return ''
}

function validatePhone(value: string) {
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
