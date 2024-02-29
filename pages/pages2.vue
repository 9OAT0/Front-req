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
  <div class="">
  <div class="container mx-auto h-full flex item-center gap-4">
    <div class="w-1/3 flex flex-col justify-center items-center">
      <div class="container mx-2 my-20">
        <div class="box mx-10 text-gray-400 text-xl">
          <label for="tel">Frits Name</label>
          <input type="text" id ="tel" class="text-black border border-gray-300 rounded-lg w-[250px] h-35 ">
          <div class="container mx-30 my-25">
          <div class="text-black-400 text-xl">
             Deth of brith 
            <form action="">
              <label for="birthday">Birthday:</label>
              <input type="date" id="birthday" class="text-notthesamegreen" name="birthday">
              <input type="submit" value="Submit">
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-1/3 container ml-[125px] my-20">
      <div class="text-gray-400 text-xl">
         <label for="tel">Email-Address</label>
          <input type="text"id="tel" class="text-black border border-gray-300 rounded-lg w-[250px]">
      </div>
      <div class="text-gray-400 text-xl mt-4">
        <label for="tel">phone number</label>
          <input type="text" id="tel" class="text-black border border-gray-300 rounded-lg w-[100px]">
      </div>
    </div>
  </div>
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
input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
}
input[type="submit"] {
  background-color: rgb(4, 4, 4);
  color:#6c8b5d(97, 179, 26);
  padding: 5px 10px;
  border:  ;
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
  color: #6c8b5d;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
h1 {
  font-size: 24px;
  color: #d9d9d9;
}
h2 {
  font-size: 20px;
}
h3 {
  font-size: 17px;
  color: #000000;
  padding: 55px;
  border: black 2px;
}
h4 {
  font-size: 17px;
  color: #000000;
  padding: 55px;
  text-align: center;
}
h5 {
  font: 17px;
  color: #000000;
  padding: 120px;
}
</style>
  
