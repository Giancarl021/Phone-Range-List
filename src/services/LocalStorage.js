import { AsyncStorage } from 'react-native';

const phoneListKey = 'lists';

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

export async function getStatusFromPhone(listId, phoneNumber) {
    const status = await getData();
}

export async function addStatusToPhone(listId, phoneNumber) {

}