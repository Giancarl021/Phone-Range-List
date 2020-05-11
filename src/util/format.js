import { parsePhoneNumberFromString } from 'libphonenumber-js/min';

const countryCode = '+55'; // Brazil

/**
 * @returns {string}
 * @param {string} phoneNumber 
 */
export function formatNumber(phoneNumber) {
    const number = parsePhoneNumberFromString(countryCode + phoneNumber.replace(countryCode, '').replace(/\D/g, ''));
    if(!number) return false;
    return number.formatNational();
};

/**
 * @returns {string}
 * @param {string|number} phoneNumber 
 */
export function unformatNumber(phoneNumber) {
    return countryCode + String(phoneNumber).replace(/\D/g, '');
}