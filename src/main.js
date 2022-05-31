import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

// Style imports
import 'bootstrap/dist/js/bootstrap.min'
import './css/styles.css'

// Fontawesome icons import
// Install with: npm install --save-dev @fortawesome/fontawesome-free
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

export function getCookie(cname) {
    const name = cname + '='
    const decodedCookie = decodeURIComponent(document.cookie)
    const ca = decodedCookie.split(';')
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i]
        while (c.charAt(0) === ' ') {
            c = c.substring(1)
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length)
        }
    }
    return ''
}

export function origin(){
    return window.origin
}

export function setCookie(cname, cvalue, exdays) {
    const d = new Date()
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
    const expires = 'expires=' + d.toGMTString()
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
}

export async function getUser(token) {
    let promise = await fetch('http://filmfy-api.ddns.net/api/v1/get-user', {
        method: "POST",
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            "token": token
        })
    })

    let user = await promise.json()
    return user.user.id;
}

createApp(App).use(store).use(router).mount('#app')
