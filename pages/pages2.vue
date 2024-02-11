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
    <!DOCTYPE html>
<html>
<head>
  <title>Personal Profile</title>
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
      color: white;
      padding: 5px 10px;
      border: none;
      cursor: pointer;
    }
    .navbar {
      background-color: #333;
      overflow: hidden;
    }
    .navbar a {
      float: left;
      display: block;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
    }
    .navbar a:hover {
      background-color: #ddd;
      color: black;
    }
  </style>
</head>
<body>
  <div class="navbar">
    <a href="#">Personal Profile</a>
    <a href="#">Manage Address</a>
    <a href="#">Change Password</a>
    <a href="#">My Orders</a>
    <a href="#">Favorites</a>
    <a href="#" style="float:right;">Logout</a>
  </div>
  <h1>Personal Profile</h1>
  <ul>
    <li>
      <label for="firstName">First Name:</label>
      <input type="text" id="firstName" value="นาย สม แดง" readonly>
    </li>
    <li>
      <label for="dateOfBirth">Date of Birth:</label>
      <input type="text" id="dateOfBirth" value="05/12/2495" readonly>
    </li>
    <li>
      <label for="username">Username:</label>
      <input type="text" id="username" value="แดงกีต้าร์" readonly>
    </li>
    <li>
      <label for="email">Email:</label>
      <input type="email" id="email" value="you@example.com" readonly>
    </li>
    <li>
      <label for="phoneNumber">Phone Number:</label>
      <input type="text" id="phoneNumber" value="+66" readonly>
    </li>
  </ul>
  <h2>Manage Address</h2>
  <!-- Add form for managing address here -->
  <h2>Change Password</h2>
  <!-- Add form for changing password here -->
  <h2>My Orders</h2>
  <!-- Add list of orders here -->
  <h2>Favorites</h2>
  <!-- Add list of favorites here -->
</body>
</html>
</template>