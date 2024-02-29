<template>
    <div>
      <div class="flex p-[28px] mt-10 bg-white max-h-[500px] max-w-[1100PX] rounded-2xl">
        <div></div>
        <img :src="image" class="h-[150px] pr-[28px] justify-center items-center">
        <div class="mr-4">
          <div>{{ text }}</div>
          <br> <!-- แสดงข้อความจาก Props text -->
          <div>{{ minitext }}</div> <!-- แสดงข้อความจาก Props minitext -->
        </div>
        <div class="flex mt-0 text-xl">
          <button @click="saveBookmark" class="mr-4">
            <i class="fa-regular fa-bookmark"></i>
          </button>
          <button @click="removeBookmark">
            <i class="fa-solid fa-share-nodes"></i>
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';

let num  = 1
  
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
  
  function saveBookmark() {
    const bookmarkData = {
      text: props.text,
      minitext: props.minitext,
      image: props.image
    };
  
    const bookmarkKey = "bookmark" + num;
    localStorage.setItem(bookmarkKey, JSON.stringify(bookmarkData));
    num ++;
  
    alert('บุ๊คมาร์คถูกเพิ่มแล้ว!');
}
  
  function removeBookmark() {
    const bookmarkKey = "bookmark" + num;
    localStorage.removeItem(bookmarkKey);
    alert('ลบบุ๊คมาร์คเรียบร้อยแล้ว!');
  }
  </script>
  