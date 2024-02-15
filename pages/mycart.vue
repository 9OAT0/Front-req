<template>
    <Header-comp />
    <div class="หน้าตะกร้า">
        <div class="top">
            ตะกร้าสินค้า
        </div>
    </div>
    <div class="สินค้าและยอดรวม">
        <Productincart />
        <div class="ml-[20px]"> <totalproduct /> </div>
    </div>
</template>
<style>
.หน้าตะกร้า {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.top {
    height: 125px;
    font-size: 36px;
    align-items: center;
    display: flex; 
}
.สินค้าและยอดรวม {
    display: flex;
    justify-content: center;
}
</style>