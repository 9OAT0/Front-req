<template>
    <div class="ตารางยอดรวม">
        <div class="ช่องยอดรวม">
            <div class="ml-[10px]">ยอดรวมตะกร้าสินค้า</div>
        </div>
        <div class="ช่องยอดรวมสินค้า">
            <div class="ml-[10px]"> ยอดรวมสินค้า  </div>
        </div>
        <div class="ช่องยอดรวมตะกร้าสินค้า">
            <div class="ml-[10px]"> ยอดรวมตะกร้าสินค้า</div>
        </div>
    </div>
</template>
<style>
.ตารางยอดรวม {
    height: auto;
    width: 400px;
    border: solid 0.5px;
    border-radius: 5px;
}
.ช่องยอดรวม {
    height: 50px;
    border-bottom:solid 0.5px ;
    display: flex;
    align-items: center;
}
.ช่องยอดรวมสินค้า {
    height: 50px;
    border-bottom:solid 0.5px ;
    display: flex;
    align-items: center;
    margin-left: 20px;
    margin-right: 20px;
}
.ช่องยอดรวมตะกร้าสินค้า {
    height: 50px;
    display: flex;
    align-items: center;
    margin-left: 20px;
    margin-right: 20px;
}
</style>