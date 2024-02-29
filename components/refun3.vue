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
                    หน้าแรก/ช่วยเหลือ/สินค้า/ขั้นตอนการคืนสินค้า/ขั้นตอนการคืนเงิน
                </div>
            </div>
            <div class="flex h-16 items-center ml-10">
                <div class=" text-3xl">
                    <h1>
                        ช่องทางการคืนเงิน
                    </h1>
                </div>
            </div>
            <div class="flex h-10 items-center ml-10">
                <div class=" text-3xl">
                    <h1>
                        ธนาคาร
                    </h1>
                </div>
            </div>
            <div class="mt-5 flex flex-row">
                  <div class="text-2xl">
                      <h1 style="margin-left: 40px;"> ธนาคารที่ใช้ </h1>
                      <div class="relative ml-10">
                          <input type="text" v-model="selectedItem" @click="toggleList" class="border border-gray-900 px-4 py-2 rounded focus:outline-none focus:border-blue-500" placeholder="Select an item">
                          <ul v-show="isListOpen || isSliding" class="absolute z-10 mt-1 w-40 bg-white rounded-md shadow-lg overflow-y-auto max-h-40 transition" @transitionend="handleTransitionEnd">
                              <li v-for="item in items" :key="item.id" @click="selectItem(item)" class="py-1 px-3 cursor-pointer hover:bg-gray-100">{{ item.name }}</li>
                          </ul>
                      </div>
                  </div>
                  <div class="text-2xl">
                      <h1 style="margin-left: 40px;"> หมายเลขธนาคารที่ใช้ </h1>
                      <div class="flex w-96 tems-center p-[8px] bg-transparent border border-solid border-black ml-10 py-1 px-3 rounded" >
                    <span class="pr-2"> 
                        <i class="fa-solid "></i>
                     </span>
                   <input type="" placeholder="Enter" class="bg-transparent focus:outline-none placeholder:text-black" style="width: 300px;">
                      </div>
                  </div>
              </div>
              <div class="flex justify-start mt-20 ml-96">
              <a href="refundpage4">
                  <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                      ยืนยัน
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
            { id: 1, name: 'กสิกร' },
            { id: 1, name: 'ไทยพาณิชย์' },
            { id: 1, name: 'กรุงไทย' },
            { id: 1, name: 'กรุงศรีอยุธา' },
            { id: 1, name: 'กรุงเทพ' },
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