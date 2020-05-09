import { parsePhoneNumberFromString } from 'libphonenumber-js/min';

export function formatNumber(phoneNumber) {
    const number = parsePhoneNumberFromString(phoneNumber);
    if(!number) return false;
    return number.formatInternational();
};