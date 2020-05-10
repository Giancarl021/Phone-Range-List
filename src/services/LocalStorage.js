import { AsyncStorage } from 'react-native';

const phoneListKey = 'lists';
const statusHistoryKey = 'status';

export async function setData(key, value) {
    await AsyncStorage.setItem(key, JSON.stringify(value));
}

export async function getData(key, placeholder = {}) {
    return JSON.parse(await AsyncStorage.getItem(key)) || placeholder;
}

export async function addToPhoneList(item) {
    const current = await getData(phoneListKey, []);
    current.push(item);
    await setData(phoneListKey, current);
}

export async function removeFromPhoneList(id) {
    const current = await getData(phoneListKey);
    if(!current) return;
    await setData(phoneListKey, current.filter(list => id !== list.id));
}

/**
 * {'listId': {'phoneNumber': ['NA', 'NE', 'NA']}}
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