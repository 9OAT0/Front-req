<template>
<div class="grid grid-cols-2">
    <div class="container bg-ShowHowBG
    flex items-start flex-col justify-center pl-16 pr-0">
        <p class="text-5xl mb-0">{{text}}</p>
        <p class="text-xl mt-0">{{minitext}}</p>
        <button class="inline-block pt-3 pb-3 pl-3 pr-3
        bg-gray-50 uppercase rounded-md cursor-pointer mt-5 border border-solid border-black transition-all
        hover:bg-notthesamegreen hover:text-white duration-500"><a :href="button">See More</a></button>
    </div>
    <div class="bg-green-200">
        <img :src="image" alt="" />
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
      'image': {
    type: String,
    default: ''
    },
    'button': {
        type: String,
        default: ''
    },
    'mt': {
        type: String,
        default: ''
    }}

)
</script>
<style>
.container {
height: 618px;
}
img {
height: 618px;
}
</style>
