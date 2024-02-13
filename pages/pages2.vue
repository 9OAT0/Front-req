<template>
    <div class=" flex justify-between align-middle p-4">
        <div class="flex">
            <h1 class="pr-4 flex items-center">
                perdee coffee
            </h1>
            <div class="flex w-max items-center rounded-[28px] p-[8px] bg-transparent">
                <span class="pr-2">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </span>
                <input type="search" placeholder="ค้นหา" class="bg-transparent focus:outline-none placeholder:text-black">
            </div>
        </div>
        <div class="flex items-center">
            <ul class="list-none m-0 p-0 gap-4">
                <li class="inline mr-4 transition-all duration-300 hover:bg-gray-500 hover:border-b hover:border-black pt-4 pb-4 pl-4 pr-4 hover:bg-opacity-20"><a href="#home" class=" decoration-gray-50">Home</a></li>
                <li class="inline mr-4 transition-all duration-300 hover:bg-gray-500 hover:border-b hover:border-black pt-4 pb-4 pl-4 pr-4 hover:bg-opacity-20"><a href="#menu" class=" decoration-gray-50">Our Menu</a></li>
                <li class="inline mr-4 transition-all duration-300 hover:bg-gray-500 hover:border-b hover:border-black pt-4 pb-4 pl-4 pr-4 hover:bg-opacity-20"><a href="#about" class=" decoration-gray-50">This Is Us</a></li>
                <li class="inline mr-4 transition-all duration-300 hover:bg-gray-500 hover:border-b hover:border-black pt-4 pb-4 pl-4 pr-4 hover:bg-opacity-20"><a href="#contact" class=" decoration-gray-50">Contact Us</a></li>
                <li class="inline mr-4 transition-all duration-300 hover:bg-gray-500 hover:border-b hover:border-black pt-4 pb-4 pl-4 pr-4 hover:bg-opacity-20"><a href="/Profile" class=" decoration-gray-50">Log In</a></li>
            </ul>
        </div>
    </div>
    <div class="bg-notthesamegreen h-40">
    </div>
    <div class="w-[220px] h-10 absolute z-10 inset-x-36 inset-y-32 rounded-full object-cover">
    <img src="/แดง.jpg" class="rounded-full">
    </div>

    <div class="navbar flex justify-end">
    <a href="#">Personal Profile</a>
    <a href="#">Manage Address</a>
    <a href="#">Change Password</a>
    <a href="#">My Orders</a>
    <a href="#">Favorites</a>
  </div>
<div>
    <h1 class="absolute inset-x-96 inset-y-60 w-36 h-14">
        Username
    </h1>
    <h2 class="absolute inset-x-96 inset-y-62 w-36 h-14">
         แดงกีต้าร์
    </h2>
</div>
</template>

  <style>
    /* Add some basic styling */
    body {
      font-family: Arial, sans-serif;
    }
    h1 {
      
    }
    ul {
      list-style: none;
      padding: 0;
    }
    li {
      margin-bottom: 10px;
    }
    input[type="text"], input[type="email"], input[type="password"] {
      width: 100%;
      padding: 5px;
      margin-bottom: 10px;
    }
    input[type="submit"] {
      background-color: blue;
      color: rgb(255, 255, 255);
      padding: 5px 10px;
      border: none;
      cursor: pointer;
    }
    .navbar {
      background-color: #ffffff;
      overflow: hidden;
    }
    .navbar a {
      float: left;
      display: block;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
    }
    .navbar a:hover {
      background-color: #ddd;
      color: #6C8B5D;
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 300ms;
    }
    h1{
        font-size: 24px;
        color: #D9D9D9;
    }
    h2 {
        font-size: 20px;
    }
  </style>
  
