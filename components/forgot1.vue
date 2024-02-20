<template>
  <div  class=" flex  text-black justify-center">
    <img src="/public/cafe6.jpg" class="bgimg">
      <div class="loginblock bg-orange-200 rounded-3xl font-bold">
          <div class="h-10 w-10 ml-44 mt-5">
              logo
          </div>
          <div class="bg-black w-cover h-1">
          </div>
          <br><br><br><br>
          <div class=" flex mt-5 ml-2 text-2xl justify-center">
              Email
          </div>
          <br><br>
          <div class="flex w-52 mt-6 rounded-[28px] p-[8px] mx-auto" >
              <span class="pr-2"> 
                    <i class="fa-solid "></i>
              </span>
              <input type="text" placeholder="Press the Email" maxlength="6" style="width: 200px;">
          </div>
          <br><br><br>
          <div class="flex justify-center">
            <a href="forgotpage2">
              <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Next
              </button>
            </a>
          </div>
      </div>
  </div>
  </template>
  
  <style>
  .loginblock{
      height: 600px;
      width: 400px;
      margin-top: 100px;
      border: solid;
      border-color:forestgreen;
  }
  </style>