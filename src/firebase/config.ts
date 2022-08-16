import { IState, TypeState, TypeStateAction, IMovement } from './../types/index';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, Timestamp } from "firebase/firestore"
import { getDatabase, ref, set, onValue, child, push, update, } from "firebase/database";
import { collection, addDoc, getDocs, updateDoc, arrayUnion, arrayRemove, doc, getDoc, setDoc } from "firebase/firestore"
import { getStorage, uploadBytes, ref as sRef, getDownloadURL } from "firebase/storage";
import { Dispatch } from "react";
import axios from 'axios';

const firebaseConfig = {
    apiKey: "AIzaSyA4S0JNdaCMBYcfuGu1RWmze_MAG9fBUTg",
    authDomain: "chat-app-39869.firebaseapp.com",
    databaseURL: "https://chat-app-39869-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chat-app-39869",
    storageBucket: "chat-app-39869.appspot.com",
    messagingSenderId: "221408528924",
    appId: "1:221408528924:web:9e7f14407d1f21a42aadd9",
    measurementId: "G-1EZ6G2S70Y"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export const getMyGroups = () => {
    return async function (dispatch: Dispatch<TypeStateAction>) {
        try {
            dispatch({ type: TypeState.StateLoad })
            const docRef = doc(db, "movementsArr", 'arr');
            const querySnapshot = await getDoc(docRef);
            let data: any = querySnapshot.data()
            dispatch({ type: TypeState.StateSuccess, payload: data.array })
        } catch (error) {
            dispatch({ type: TypeState.StateError, payload: String(error) })
        }
    }

}


