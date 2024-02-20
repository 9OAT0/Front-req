<template>
<div  class="bgimg flex  text-black justify-center" style="margin-left: 750px; margin-top: 70px;">
    <img src="/public/cafe1.jpg" class="bgimg">
    <div class="loginblock bg-orange-200  rounded-3xl font-bold">
        <div class=" h-10 w-10 ml-44 mt-5">   
            logo
        </div>
        <div class="bg-black w-cover h-1">
        </div>
        <br>
        <div class=" mt-5 ml-2 text-2xl">
            Email
        </div>
        <div class="flex w-52 mt-2 tems-center rounded-[28px] p-[8px] bg-white border border-solid border-black" >
            <span class="pr-2"> 
                  <i class="fa-solid "></i>
            </span>
            <input type="" placeholder="Enter" class="bg-transparent focus:outline-none placeholder:text-gray-400">
        </div>
        <br>
        <div class=" mt-5 ml-2 text-2xl">
            password
        </div>
        <div>
          <div class="relative flex row">
            <input type="password" v-model="password" class="px-4 py-2 rounded-[28px] p-[8px] border border-solid border-black focus:outline-none focus:border-blue-500" :class="{ 'pr-10': showPassword }" placeholder="Enter password">
            <button @click="toggleShowPassword" class="inset-y-0 right-0 flex items-center px-2 text-black">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" :class="{ 'text-blue-500': showPassword, 'text-black': !showPassword }">
                  <path v-if="showPassword" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9z"/>
                  <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-3 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"/>
               </svg>
            </button>
          </div>
       </div>
        <br>
        <br>
        <div class="flex flex-row justify-between mx-5 text-black hover:font-bold">
            <button>
                <a href="registerpage1" class=" hover:text-gray-600">
                    Register
                </a>
            </button>
            <button>
                <a href="forgotpage1" class="hover:text-gray-600">
                    Forgot Password
                </a>
            </button>
        </div>
        <br>
        <br>
        <div class="flex justify-center">
            <a href="home">
                <button id="loginb" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Login
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
      password: '',
      showPassword: false
    };
  },
  methods: {
    toggleShowPassword() {
      this.showPassword = !this.showPassword;
    }
  }
};

function sendDataToAnotherPage() {
    var newContent = 'Profile';
    var newId = 'profile';

    // ส่งข้อมูลผ่าน AJAX request
    $.ajax({
        url: 'header.vue', // URL ของหน้าอื่น
        type: 'post', // หรือ 'get' ตามที่คุณต้องการ
        data: { content: newContent, id: newId },
        success: function(response) {
            // หากการของคุณสำเร็จ
            console.log('ส่งข้อมูลไปยังหน้าอื่นแล้ว');
            // ทำสิ่งที่คุณต้องการหลังจากนั้น เช่น redirect ไปยังหน้าอื่น
            // window.location.href = 'other_page.html';
        },
        error: function(xhr, status, error) {
            // หากการขอข้อมูลไม่สำเร็จ
            console.error('มีข้อผิดพลาดในการส่งข้อมูล: ', error);
        }
    });
}
</script>

<style>
.bgimg{
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
}
.loginblock{
    height: 600px;
    width: 400px;
    margin-top: 100px;
    border: solid;
    border-color:forestgreen;
}
</style>