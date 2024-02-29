<template>
  <div  class=" flex  text-black justify-center">
     <img src="/public/cafe4.jpg" class="bgimg">
      <div class="registerblock  bg-orange-200 rounded-3xl font-bold">
          <div class=" h-10 w-10 ml-64 mt-5">
              logo
          </div>
          <div class="bg-black w-cover h-1">
          </div>
          <br>
          <div class=" mt-5 ml-2 text-2xl">
              User name(profile)
          </div>
          <div class="flex w-96 mt-2 tems-center rounded-[28px] p-[8px] bg-white border border-solid border-black" >
              <span class="pr-2"> 
                    <i class="fa-solid "></i>
              </span>
              <input type=" text " placeholder="Enter" class="bg-white focus:outline-none placeholder:text-black" style="width: 300px;">
          </div>
          <br>
          <div class=" mt-5 ml-2 text-2xl">
              Email
          </div>
          <div class="flex w-96 mt-2 tems-center rounded-[28px] p-[8px] bg-white border border-solid border-black" >
              <span class="pr-2"> 
                    <i class="fa-solid "></i>
              </span>
              <input type=" email" placeholder="Enter" class="bg-white focus:outline-none placeholder:text-black" style="width: 300px;">
          </div>
          <br>
          <div class=" mt-5 ml-2 text-2xl">
              Password
          </div>
          <div class="flex w-96 mt-2 tems-center rounded-[28px] p-[8px] bg-white border border-solid border-black" >
              <span class="pr-2"> 
                    <i class="fa-solid "></i>
              </span>
              <input type=" password" placeholder="Enter" class="bg-white focus:outline-none placeholder:text-black" style="width: 300px;">
          </div>
          <br>
          <div class=" mt-5 ml-2 text-2xl">
              Confirm Password 
          </div>
          <div class="flex w-96 mt-2 tems-center rounded-[28px] p-[8px] bg-white border border-solid border-black" >
              <span class="pr-2"> 
                    <i class="fa-solid "></i>
              </span>
              <input type=" password" placeholder="Enter" class="bg-transparent focus:outline-none placeholder:text-black" style="width: 300px;">
          </div>
          <br>
          <br>
          <br>
          <br>
          <br>
          <div class="flex flex-row justify-between mx-5 ">
            <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                <a href="logpage">
                    Back
                </a>
            </button>
            <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                <a href="registerpage2">
                    Next
                </a>
            </button>
        </div>
      </div>
  </div>
  </template>
  
  <style>
  .registerblock{
      height: 800px;
      width: 600px;
      margin-top: 30px;
      border: solid;
      border-color:forestgreen;
  }
  </style>