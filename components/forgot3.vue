<template>
  <div  class=" flex  text-black justify-center">
    <img src="/public/cafe8.jpg" class="bgimg">
      <div class="loginblock bg-orange-200 rounded-3xl font-bold">
          <div class=" h-10 w-10 ml-44 mt-5">
              logo
          </div>
          <div class="bg-black w-cover h-1">
          </div>
          <br>
          <div class=" mt-5 ml-2 text-2xl">
              Old Password
          </div>
          <div class="flex w-auto mt-2 tems-center rounded-[28px] p-[8px] bg-white border border-solid border-black" >
              <span class="pr-2"> 
                    <i class="fa-solid "></i>
              </span>
              <input type="" placeholder="Enter" class="bg-white focus:outline-none placeholder:text-black" style="width: 300px;">
          </div>
          <br>
          <div class=" mt-5 ml-2 text-2xl">
              New password
          </div>    
          <div class="flex w-auto  mt-2 tems-center rounded-[28px] p-[8px] bg-white border border-solid border-black" >
              <span class="pr-2"> 
                    <i class="fa-solid "></i>
              </span>
              <input type="" placeholder="Enter" class="bg-white focus:outline-none placeholder:text-black" style="width: 300px;">
          </div>
          <br>
          <br>
          <br>
          <br>
          <div class="flex justify-center">
            <a href="logpage">
              <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Confirm
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