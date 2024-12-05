<script setup>
import { storeToRefs } from 'pinia';

// @ = src 아래 (jsconfig.json 파일에 path 지정되어있음) stores 폴더 아래에 있는 모든 것을 import 하겠단 뜻
import { useAlertStore } from '@/stores';

const alertStore = useAlertStore();
const { alert } = storeToRefs(alertStore); // {alert}은 Object, storeToRefs(alertStore)는 함수 호출
</script>

<template>
    <div v-if="alert" class="container">
        <div class="m-3">
            <div class="alert alert-dismissable" :class="alert.type">
                <button @click="alertStore.clear()" class="btn btn-link close">&times;</button>
                {{alert.message}}
            </div>
        </div>
    </div>
</template>