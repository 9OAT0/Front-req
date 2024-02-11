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
                <li class="inline mr-4"><a href="#home" class=" decoration-gray-50">Home</a></li>
                <li class="inline mr-4"><a href="#menu" class=" decoration-gray-50">Our Menu</a></li>
                <li class="inline mr-4"><a href="#about" class=" decoration-gray-50">This Is Us</a></li>
                <li class="inline mr-4"><a href="#contact" class=" decoration-gray-50">Contact Us</a></li>
                <li class="inline mr-4"><a href="/Profile" class=" decoration-gray-50">Log In</a></li>
            </ul>
        </div>
    </div>
    <div class="bg-notthesamegreen h-40">
    </div>
    <div class="navbar flex justify-end">
    <a href="#">Personal Profile</a>
    <a href="#">Manage Address</a>
    <a href="#">Change Password</a>
    <a href="#">My Orders</a>
    <a href="#">Favorites</a>
  </div>
    
</template>

  <style>
    /* Add some basic styling */
    body {
      font-family: Arial, sans-serif;
    }
    h1 {
      text-align: center;
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
  </style>
