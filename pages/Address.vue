<template>
    <div class="flex justify-between align-middle p-4">
      <div class="flex">
        <h1 class="pr-4 flex items-center">perdee coffee</h1>
        <div
          class="flex w-max items-center rounded-[28px] p-[8px] bg-transparent"
        >
          <span class="pr-2">
            <i class="fa-solid fa-magnifying-glass"></i>
          </span>
          <input
            type="search"
            placeholder="ค้นหา"
            class="bg-transparent focus:outline-none placeholder:text-black"
          />
        </div>
      </div>
      <div class="flex items-center">
        <ul class="list-none m-0 p-0 gap-4">
          <li
            class="inline mr-4 transition-all duration-300 hover:bg-notthesamegreen hover:border-b hover:border-black pt-4 pb-4 pl-4 pr-4 hover:bg-opacity-20"
          >
            <a href="#home" class="decoration-gray-50">Home</a>
          </li>
          <li
            class="inline mr-4 transition-all duration-300 hover:bg-notthesamegreen hover:border-b hover:border-black pt-4 pb-4 pl-4 pr-4 hover:bg-opacity-20"
          >
            <a href="#menu" class="decoration-gray-50">Our Menu</a>
          </li>
          <li
            class="inline mr-4 transition-all duration-300 hover:bg-notthesamegreen hover:border-b hover:border-black pt-4 pb-4 pl-4 pr-4 hover:bg-opacity-20"
          >
            <a href="#about" class="decoration-gray-50">This Is Us</a>
          </li>
          <li
            class="inline mr-4 transition-all duration-300 hover:bg-notthesamegreen hover:border-b hover:border-black pt-4 pb-4 pl-4 pr-4 hover:bg-opacity-20"
          >
            <a href="#contact" class="decoration-gray-50">Contact Us</a>
          </li>
          <li
            class="inline mr-4 transition-all duration-300 hover:bg-notthesamegreen hover:border-b hover:border-black pt-4 pb-4 pl-4 pr-4 hover:bg-opacity-20"
          >
            <a href="/Profile" class="decoration-gray-50">Log In</a>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <div class="bg-notthesamegreen h-40"></div>
      <div
        class="w-[220px] h-10 absolute z-10 inset-x-36 inset-y-32 rounded-full object-cover"
      >
        <img src="/แดง.jpg" class="rounded-full" />
      </div>
    </div>
    <div class="navbar flex justify-end">
      <a href="-">Personal Profile</a>
      <a href="pages3">Manage Address</a>
      <a href="#">Change Password</a>
      <a href="#">My Orders</a>
      <a href="#">Favorites</a>
    </div>
</template>
  

    
  