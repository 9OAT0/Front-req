<template>
<div class="grid grid-cols-2">
        <div class="bg-green-200">
        <img :src="image" alt="">
    </div>
    <div class=" bg-ShowHowBG flex items-start flex-col justify-center p-8 md:p-16 h-[720px]">
        <p class="text-5xl mb-0">{{text}}</p>
        <p class="text-xl mt-0">{{minitext}}</p>
        <button class="inline-block pt-3 pb-3 pl-3 pr-3
        bg-gray-50 uppercase rounded-md cursor-pointer mt-5">See More</button>
    </div>
</div>
</template>
<script setup>
defineProps({
    'text':{
        type: String,
        defualt : 'Text'
    },
    'minitext':{
        type: String,
        defualt : 'Text'
    },
    'image' :{
        type:String,
        defualt : ''
    }
})
</script>
<style>
.container {
 height: 720px;
}
img {
  width: 100%; /* ทำให้ภาพขยายตามความกว้างของ div */
  height: 100%; /* ทำให้ภาพขยายตามความสูงของ div */
}
</style>
