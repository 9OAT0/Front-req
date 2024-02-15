<template>
    <div class="">
        <div class="flex p-[28px] mt-10 bg-white max-h-[500px] max-w-[1100PX] rounded-2xl">
            <img :src="image" class="h-[150px] pr-[28px] justify-center items-center">
            <div class="mr-4">
                <div>{{ text }}</div>
                <br> <!-- แสดงข้อความจาก Props text -->
                <div>{{ minitext }}</div> <!-- แสดงข้อความจาก Props minitext -->
            </div>
            <div class="flex mt-0 text-xl">
                <button @click="toggleBookmark">
                    <i :class="['fa', isBookmarked ? 'fa-solid' : 'fa-regular', 'fa-bookmark', 'mr-4']"></i>
                </button>
                <button>
                    <i class="fa-solid fa-share-nodes"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
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
});

const isBookmarked = ref(false);

const toggleBookmark = () => {
    isBookmarked.value = !isBookmarked.value;
    if (isBookmarked.value) {
    alert.apply(this, [isBookmarked]);
    }
};
</script>
