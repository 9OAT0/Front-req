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
                    หน้าแรก/ช่วยเหลือ/สินค้า
                </div>
            </div>
            <div class="flex h-16 items-center ml-10">
                <div class=" text-3xl">
                    <h1>
                        รายละเอียดสินค้า
                    </h1>
                </div>
            </div>
            <div class="flex flex-row ml-10">
                <img src="/public/coffebean.png" alt="" style="height: 300px; width: 350px;">
                <div class="flex flex-col ml-5 mt-5">
                    <h1 style="width: 350px;"> Hillkoff : เมล็ดกาแฟคั่ว แม่มอญ เชียงราย ตราฮิลล์คอฟฟ์ 250g </h1>
                    <h2 style="margin-top: 10px;"> ฿ 145 </h2>
                    <h3 style="width: 350px; margin-top: 20px;">text text text text text text text text text</h3>
                </div>
            </div>
            <div class="text-3xl mt-10 ml-16">
                สถานะ
            </div>
            <div class="flex flex-row mt-10 ml-10">
                <div class="text-green-600 text-2xl">
                    ได้รับสินค้า
                </div>
                <div class=" ml-52 text-2xl">
                <a href="refundpage2">
                    <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-24">
                        คืนสินค้า
                    </button>
                    <h1 class="mr-52 mt-2">
                    สามารถคืนได้อีกภายใน 12.00.00
                </h1>
                </a>
            </div>
            </div>
            
        </div>
    </div>
    </template>
    
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