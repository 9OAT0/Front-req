<template>
    <div class="product-items">
            <div class="ช่องใส่รูป">
                <div class="รูป22">
                    <img src="/Blend.jpg">
                </div>
            </div>
            <div class="ช่องชื่อสินค้า">
                PRI-DEE : Pridee Blend 100%Arabica Cofee Chocolate, Nutty, Caramel 350g       
            </div>
            <div class="ช่องราคา">
                ฿145
            </div>
            <div class="flex justify-center">
                <a href="Productdetail">
                    <div class="bg-CartBG w-[160px] h-[45px] flex items-center justify-center rounded-lg text-[20px] text-white piot cursor-pointer">
                        <i class="fa-solid fa-cart-shopping mr-4"></i>
                    สั่งซื้อสินค้า
                    </div>
                </a>
            </div>
        </div>  
</template>
<style>
.product-items {
    width: 280px;
    height: 400px;
    margin-right: 8px;
    margin-bottom: 10px;
    border-radius: 5px;
}
.ช่องชื่อสินค้า {
    height: 44px;
    width: 280px;
    font-size: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.ช่องราคา {
    width: 280px;
    height: 45px;
    text-align: center;
    font-size: 24px;
    color: rgb(127, 158, 113);
}
.ช่องใส่รูป {
    display: flex;
    align-items: center;
    justify-content: center;
    width:  280px;
    height: 262px;
}
.รูป22 {
    height: 100%;
    width: 200px;
}
</style>