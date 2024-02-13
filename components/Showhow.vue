<template>
<div class="grid grid-cols-2 bg-[url(/bg-aica.jpg)]">
    <div class="container bg-[ulr('/bg-aica.jpg')]
    flex items-start flex-col justify-center pl-8 pr-8 p-16">
    <div class="bg-white h-full w-full rounded-3xl">
        <div class="pl-10 pt-14">
            <div class="text-4xl">จุดเริ่มต้นของ Latte Art ศิลปะการวาดบนกาแฟที่น่าหลงใหล</div>
            <div class="pt-4 pr-24">Latte Art หรือการแต่งหน้าฟองนมบนแก้วกาแฟ มีจุดเริ่มต้นมาจากเมืองซีแอตเทิล ประเทศสหรัฐอเมริกา จากร้านกาแฟ Espresso Vivace ของเดวิด โชเมอร์ ( David Schomer ) ผู้ที่มีความสนใจด้านงานศิลปะและพยายามหาจุดแตกต่างให้กาแฟที่เขาขาย จึงพยายามคิดค้นกาแฟที่ดีที่สุด เพื่อทำให้ผู้ดื่มประทับใจ เดวิดเป็นหนึ่งในผู้คิดค้นและทำให้ลาเต้อาร์ตได้รับความนิยมในช่วงทศวรรษ 1990 จนถึงปัจจุบัน และเขายังเป็นผู้ที่คิดค้นการรักษาอุณหภูมิของน้ำเพื่อดึงเอาความหวานของกาแฟเอสเพรซโซ่ออกมาได้อีกด้วย</div>
            <button class="inline-block pt-3 pb-3 pl-3 pr-3
            bg-in uppercase rounded-md cursor-pointer mt-4 border border-solid border-black text-black transition-all duration-[400ms]
            hover:bg-gray-400 hover:text-black">เมนูของเรา
            </button>
            </div>
    </div>
    </div>
    <div class="flex items-start flex-col justify-center pl-8 pr-8 p-16">
        <div class="bg-white h-full w-full rounded-3xl bg-[ulr('/latte-art-1.webp')]">
        <img src="/latte-art-1.webp" alt="" class="h-full w-full rounded-3xl">
        </div>
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
