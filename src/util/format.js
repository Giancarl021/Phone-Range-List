import { parsePhoneNumberFromString } from 'libphonenumber-js/min';

export function formatNumber(phoneNumber) {
    const number = parsePhoneNumberFromString('+55' + phoneNumber.replace(/\D/g, ''));
    if(!number) return false;
    return number.formatNational();
};