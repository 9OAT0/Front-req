<template> 
  <div class="bg-orange-200 flex justify-between align-middle p-4">
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
              <li class="inline mr-4"><a href="#login" class=" decoration-gray-50">Log In</a></li>
          </ul>
      </div>
  </div>
</template>