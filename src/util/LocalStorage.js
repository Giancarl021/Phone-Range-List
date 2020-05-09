import { AsyncStorage } from 'react-native';

export async function setData(key, value) {
    await AsyncStorage.setItem(key, value);
}

export async function getData(key, placeholder = '') {
    return (await AsyncStorage.getItem(key)) || placeholder;
}

export async function addToArray(key, item) {
    const current = JSON.parse(await AsyncStorage.getItem(key)) || [];
    current.push(item);
    await AsyncStorage.setItem(key, current);
}