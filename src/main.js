import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
// import * as THREE from 'three';

// console.log(THREE, '--------HTREE')

createApp(App).use(router).mount('#app');
