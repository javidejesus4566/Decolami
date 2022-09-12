
import emailjs from 'emailjs-com';
import { EMAIL_DATA } from '../constants/Constants';

export const sendEmail = async (data) => {
    try {
        const templateParams = {
            name: 'user',
            email: data.email,
            subject: 'test',
            message: data.message
        };

        await emailjs.send(
            EMAIL_DATA.service,
            EMAIL_DATA.template,
            templateParams,
            EMAIL_DATA.user
        )
    } catch (e) {
        console.log(e);
    };
}