import AsyncStorage from '@react-native-community/async-storage';

export async function setData(key, value) {
    await AsyncStorage.setItem(key, value);
}

export async function getData(key, placeholder = '') {
    return (await AsyncStorage.getItem(key)) || placeholder;
}