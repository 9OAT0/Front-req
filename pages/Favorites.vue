<template>
<header-comp />
  <div>
    <div class="bg-notthesamegreen h-40"></div>
    <div
      class="w-[220px] h-10 absolute z-10 inset-x-36 inset-y-32 rounded-full object-cover"
    >
      <img src="/แดง.jpg" class="rounded-full" />
    </div>
  </div>
  <div class="navbar flex justify-end">
    <a href="#">Personal Profile</a>
    <a href="Address">Manage Address</a>
    <a href="#">Change Password</a>
    <a href="My Orders">My Orders</a>
    <a href="Favorites">Favorites</a>
  </div>
  <div class="text-left mx-96">
      <label for="fname">Username</label>
      <input type="text" id="fname" name="fname" value="jew">
    </div>
</template>