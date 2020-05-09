import { parsePhoneNumberFromString } from 'libphonenumber-js/min';

const countryCode = '+55';

export function formatNumber(phoneNumber) {
    const number = parsePhoneNumberFromString(countryCode + phoneNumber.replace(countryCode, '').replace(/\D/g, ''));
    if(!number) return false;
    return number.formatNational();
};

export function unformatNumber(phoneNumber) {
    return countryCode + String(phoneNumber).replace(/\D/g, '');
}