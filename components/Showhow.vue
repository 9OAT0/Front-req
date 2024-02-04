<template>
<div class="container p-24 bg-amber-200 h-[300px] w-1/2 flex items-start flex-col ">
    <p class="text-5xl mb-0">{{text}}</p>
    <p class="text-xl mt-0">{{minitext}}</p>
    <button class="inline-block pt-3 pb-3 pl-3 pr-3
    bg-gray-50 uppercase rounded-md cursor-pointer mt-5">See More</button>
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
    }
})
</script>
