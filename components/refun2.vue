<template>
    <div  class="flex  text-black justify-start">  
        <div class="w-screen">
            <div class="flex h-16 items-center ml-10">
                <div class="">
                    คืนสินค้า/คืนเงิน
                </div>
            </div>
            <div class="flex h-9 bg-slate-200 items-center">
                <div class=" ml-10">
                    หน้าแรก/ช่วยเหลือ/สินค้า/ขั้นตอนการคืนสินค้า
                </div>
            </div>
            <div class="flex h-16 items-center ml-10">
                <div class=" text-3xl">
                    <h1>
                        คืนสินค้า/คืนเงิน
                    </h1>
                </div>
            </div>
            <div class="flex flex-row ml-10">
                <img src="/coffebean.png" alt="" style="height: 300px; width: 350px;">
                <div class="flex flex-col ml-5 mt-5">
                    <h1 style="width: 350px;"> Hillkoff : เมล็ดกาแฟคั่ว แม่มอญ เชียงราย ตราฮิลล์คอฟฟ์ 250g </h1>
                    <h2 style="margin-top: 10px;"> ฿ 145 </h2>
                    <h3 style="width: 350px; margin-top: 20px;">text text text text text text text text text</h3>
                </div>
            </div>
            <div class="text-3xl mt-10 ml-16">
                การคืนสินค้าคืนเงิน
            </div>
            <div class="mt-10 flex flex-row">
                <div class="text-2xl">
                    <h1 style="margin-left: 40px;"> เหตุผลในการคืนสินค้า </h1>
                    <div class="flex w-96 tems-center p-[8px] bg-transparent border border-solid border-black ml-10 px-4 py-2 rounded" >
                  <span class="pr-2"> 
                      <i class="fa-solid "></i>
                   </span>
                 <input type="" placeholder="Enter" class="bg-transparent focus:outline-none placeholder:text-black" style="width: 300px;">
                    </div>
                </div>
                <div class="text-2xl mr-96">
                    <h1 style="margin-left: 40px;">
                        ช่องทางการคืนเงิน 
                    </h1>
                    <div class="relative ml-10">
                        <input type="text" v-model="selectedItem" @click="toggleList" class="border border-gray-900 px-4 py-2 rounded focus:outline-none focus:border-blue-500" placeholder="Select an item">
                        <ul v-show="isListOpen || isSliding" class="absolute z-10 mt-1 w-40 bg-white rounded-md shadow-lg overflow-y-auto max-h-40 transition" @transitionend="handleTransitionEnd">
                            <li v-for="item in items" :key="item.id" @click="selectItem(item)" class="py-1 px-3 cursor-pointer hover:bg-gray-100">{{ item.name }}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="mt-10 flex flex-row">
                <div class="text-2xl">
                    <h1 style="margin-left: 40px;"> หลักฐานคลิปวิดีโอขณะเปิดกล่อง </h1>
                    <div class="text-2xl">
                      <div class=" border border-black  border-solid w-96 h-12 mt-2 ml-10 flex justify-start items-center">
                        <input type="file" @change="handleFileInputChange" class=" ml-1">
                        <video v-if="videoUrl" controls>
                          <source :src="videoUrl" type="video/mp4">
                             Your browser does not support the video tag.
                        </video>
                      </div>
                  </div>
                </div>
                <div class="text-2xl mr-96">
                    <h1 style="margin-left: 40px;"> ที่อยู่สำหรับรับของคืน </h1>
                    <div class="flex w-96 mt-2 tems-center p-[8px] bg-transparent border border-solid border-black ml-10" >
                  <span class="pr-2"> 
                      <i class="fa-solid "></i>
                   </span>
                 <input type="" placeholder="Enter" class="bg-transparent focus:outline-none placeholder:text-black" style="width: 300px;">
                    </div>
                </div>
            </div>
            <div class="flex justify-start mt-10 ml-96">
            <a href="refundpage3">
                <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    คืนสินค้า
                </button>
            </a>
        </div>
        </div>
    </div>
    </template>
    <script>
    export default {
      data() {
        return {
          selectedItem: '',
          isListOpen: false,
          isSliding: false,
          items: [
            { id: 1, name: 'ธนาคาร' },
            // เพิ่มรายการต่อไปตามความต้องการ
          ]
        };
      },
      methods: {
        toggleList() {
          this.isListOpen = !this.isListOpen;
          if (this.items.length > 3) {
            this.isSliding = !this.isSliding;
          }
        },
        selectItem(item) {
          this.selectedItem = item.name;
          this.isListOpen = false;
          this.isSliding = false;
        },
        handleTransitionEnd() {
          if (!this.isListOpen && this.isSliding) {
            this.isSliding = false;
          }
        }
      }
    };
    </script>
    <style>
    img {
        width: 100%;
        height: 100%;
    }
    .cofeeimg{
        background-image: url(/coffebean.png);
        width: 100%;
        height: 100%;
    }
    </style>