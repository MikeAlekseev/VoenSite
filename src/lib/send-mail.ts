'use server';
import nodemailer from 'nodemailer';

const SMTP_SERVER_HOST = 'smtp.yandex.ru'
const SMTP_SERVER_USERNAME = ''
const SMTP_SERVER_PASSWORD = ''
const transporter = nodemailer.createTransport({
    service: 'yandex',
    host: SMTP_SERVER_HOST,
    port: 587,
    secure: true,
    auth: {
        user: SMTP_SERVER_USERNAME,
        pass: SMTP_SERVER_PASSWORD,
    },
});

export async function sendMail() {
    const email = 'grigorchuk.konstantin@gmail.com' // From
    const sendTo = 'fmtranger@gmail.com' // To
    const subject = 'email title'
    const text = 'email content'
    const html = '<a href="https://google.com">google</a>'

    try {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const isVerified = await transporter.verify();
    } catch (error) {
        console.error('Something Went Wrong', SMTP_SERVER_USERNAME, SMTP_SERVER_PASSWORD, error);
        return;
    }
    const info = await transporter.sendMail({
        from: email,
        to: sendTo,
        subject: subject,
        text: text,
        html: html ? html : '',
    });
    console.log('Message Sent', info.messageId);
    console.log('Mail sent to');
    return info;
}