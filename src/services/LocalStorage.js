import { AsyncStorage } from 'react-native';

// Tables

const phoneListKey = 'lists';
const statusHistoryKey = 'status';

// General functions

/**
 * @async
 * @returns {void}
 * @param {string} key 
 * @param {object} value 
 */
export async function setData(key, value) {
    await AsyncStorage.setItem(key, JSON.stringify(value));
}

/**
 * @async
 * @returns {Promise<object>}
 * @param {string} key 
 * @param {object|void} placeholder 
 */
export async function getData(key, placeholder = {}) {
    return JSON.parse(await AsyncStorage.getItem(key)) || placeholder;
}

// Specific Table functions

/**
 * @async
 * @returns {Promise<void>}
 * @param {object} item 
 */
export async function addToPhoneList(item) {
    const current = await getData(phoneListKey, []);
    current.push(item);
    await setData(phoneListKey, current);
}
/**
 * @async
 * @returns {Promise<void>}
 * @param {string} id 
 */
export async function removeFromPhoneList(id) {
    const current = await getData(phoneListKey);
    if(!current) return;
    await setData(phoneListKey, current.filter(list => id !== list.id));
}

/**
 * @async
 * @returns {Promise<Array<object>>}
 * @param {string} listId 
 * @param {string} phoneNumber 
 */
export async function getStatusFromPhone(listId, phoneNumber) {
    const status = await getData(statusHistoryKey, {});
    if(status[listId] && status[listId][phoneNumber]) {
        const history = status[listId][phoneNumber];
        return history;
    } else {
        return [];
    }
}

/**
 * @async
 * @returns {Promise<void>}
 * @param {string} listId 
 * @param {string} phoneNumber 
 * @param {number} statusCode 
 */
export async function addStatusToPhone(listId, phoneNumber, statusCode) {
    const status = await getData(statusHistoryKey, {});
    if(!status[listId]) {
        status[listId] = {};
    }
    if(!status[listId][phoneNumber]) {
        status[listId][phoneNumber] = [];
    }

    const history = status[listId][phoneNumber];
    history.push(statusCode);
    await setData(statusHistoryKey, history);
}