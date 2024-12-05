import { defineStore } from 'pinia';

// defineStore('id', {}) 괄호 안에 id 값을 부여
export const useAlertStore = defineStore('alert', {
    state: () => ({
        // 상태변수
        alert: null
    }),
    actions: {
        success(message) {
            this.alert = { message, type: 'alert-success' };
        },
        error(message) {
            this.alert = { message, type: 'alert-danger' };
        },
        clear() {
            this.alert = null;
        }
    }
});