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
                        รายละเอียดการตีกลับ
                    </h1>
                </div>
            </div>
            <div class="flex h-10 items-center ml-10 mt-5">
                <div class=" text-2xl">
                    <h1> ของไม่ตรง </h1>
                    <h1> ของใช้ไม่ได้ </h1>
                </div>
            </div>
            <div class="mt-16">
                  <div class="text-2xl">
                      <h1 style="margin-left: 40px;"> หลักฐานที่บอกว่าของมีตำนิ </h1>
                      <div class=" border border-black  border-solid w-80 h-12 mt-2 ml-10 flex justify-start items-center">
                        <input type="file" @change="handleFileInputChange" class=" ml-1">
                        <video v-if="videoUrl" controls>
                          <source :src="videoUrl" type="video/mp4">
                             Your browser does not support the video tag.
                        </video>
                      </div>
                  </div>
                  <br><br>
                  <div class="text-2xl mr-96">
                      <h1 style="margin-left: 40px;"> ที่อยู่สำหรับจัดส่ง </h1>
                      <div class="flex w-96 mt-2 tems-center p-[8px] bg-transparent border border-solid border-black ml-10" >
                    <span class="pr-2"> 
                        <i class="fa-solid "></i>
                     </span>
                   <input type="" placeholder="Enter" class="bg-transparent focus:outline-none placeholder:text-black" style="width: 300px;">
                      </div>
                  </div>
              </div>
              <div class="mt-20 ml-52">
              <a href="ownrefundpage3">
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
          videoUrl: null
        };
      },
      methods: {
        handleFileInputChange(event) {
          const file = event.target.files[0];
          if (file && file.type.includes('video')) {
            this.videoUrl = URL.createObjectURL(file);
          } else {
            this.videoUrl = null;
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