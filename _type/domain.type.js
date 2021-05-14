import { Platform } from 'react-native';

export const domain ={
    Node: Platform.OS == "android"? "http://192.168.1.109:4000": "http://localhost:4000"
}