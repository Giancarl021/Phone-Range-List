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
    await AsyncStorage.setItem(key, JSON.stringify(current));
}

export async function removeFromArray(key, predicate) {
    const current = JSON.parse(await AsyncStorage.getItem(key));
    if(!current) return;
    await AsyncStorage.setItem(key, JSON.stringify(current.filter(predicate)));
}