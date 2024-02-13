<template>
    <div class="">
        <div class="flex p-[28px] mt-10 bg-white max-h-[400px] max-w-[950PX] rounded-2xl">
            <img :src="image" class="h-[150px] pr-[28px] justify-center items-center">
            <div>
                <div>{{ text }}</div>
                <br> <!-- แสดงข้อความจาก Props text -->
                <div>{{ minitext }}</div> <!-- แสดงข้อความจาก Props minitext -->
            </div>
        </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';

defineProps({
    'text': {
        type: String,
        default: 'Text'
    },
    'minitext': {
        type: String,
        default: 'Text'
    },
    'image': {
        type: String,
        default: ''
    }
})
</script>
