import { AsyncStorage } from 'react-native';

const phoneListKey = 'lists';

export async function setData(key, value) {
    await AsyncStorage.setItem(key, value);
}

export async function getData(key, placeholder = '') {
    return (await AsyncStorage.getItem(key)) || placeholder;
}

export async function addToPhoneList(item) {
    const current = JSON.parse(await AsyncStorage.getItem(phoneListKey)) || [];
    current.push(item);
    await AsyncStorage.setItem(phoneListKey, JSON.stringify(current));
}

export async function removeFromPhoneList(id) {
    const current = JSON.parse(await AsyncStorage.getItem(phoneListKey));
    if(!current) return;
    await AsyncStorage.setItem(phoneListKey, JSON.stringify(current.filter(list => id !== list.id)));
}