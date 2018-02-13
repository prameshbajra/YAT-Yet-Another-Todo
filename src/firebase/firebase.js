import * as firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyA8uz8wfAYQ0J8NsjTM4lpcyg4Y-d_Ch4I',
    authDomain: 'yet-todo.firebaseapp.com',
    databaseURL: 'https://yet-todo.firebaseio.com',
    projectId: 'yet-todo',
    storageBucket: '',
    messagingSenderId: '821522786380',
};
firebase.initializeApp(config);

const database = firebase.database();

export { database as default, firebase };
