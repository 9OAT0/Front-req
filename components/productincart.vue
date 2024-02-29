<template>
    <div class="ตารางสินค้าในตะกร้า">
        <div class="สินค้าในตะกร้า">
            <div class="แถบ1">
                <div class="สินค้า">
                    สินค้าในตะกร้า
                </div>
            </div>
            <div class="แถบ2">
                <div class="หัวข้อ">
                    <div class="หัวข้อ1">สินค้า</div>
                    <div class="หัวข้อ2">ราคา</div>
                    <div class="หัวข้อ3">จำนวน</div>
                    <div class="หัวข้อ4">ราคารวม</div>
                </div>
            </div>
            <div class="แถบ3">
                <div class="ลบสินค้า">
                    <i class="fa-solid fa-trash"></i>ลบสินค้าทั้งหมดในตะกร้า
                </div>
            </div>
        </div>
        <div class="กลับไปซื้อสินค้า"> 
            <backtoshopping /> 
            <div class="สั่งซื้อ ml-[5px]"> <addtocart2 /> </div>
        </div>
    </div>
</template>
<style>
.สินค้าในตะกร้า {
    display: flex;
    flex-direction: column;
    width: 706px;
    border:solid 0.5px;
    border-radius: 5px;
}
.แถบ1 {
    height: 50px;
    border-bottom:solid 0.5px;
    align-items: center;
    display: flex;
    font-size: 20px;
}
.สินค้า {
    margin: 10px;
}
.แถบ2 {
    height: 50px;
    border-bottom: solid 0.5px;
    margin-left: 20px;
    margin-right: 20px;
}
.หัวข้อ {
    display: flex;
    height: 50px;
    align-items: center;
}
.หัวข้อ1 {
    width: 122px;
    margin-left: 15px;
    font-size: 18px;
    
}
.หัวข้อ2 {
    width: 122px;
    margin-left: 160px;
    font-size: 18px;
    text-align: center;
    
    
}
.หัวข้อ3 {
    width: 122px;
    font-size: 18px;
    text-align: center;
    
}
.หัวข้อ4 {
    width: 122px;
    font-size: 18px;
    text-align: center;
    
}
.แถบ3 {
    height: 50px;
    margin-top: 50px;
    border-top: solid 0.5px;
    display:flex ;
    align-items: center;
    justify-content: flex-end;
    
}
.ลบสินค้า {
    margin-right: 20px; 
    text-align: center;
    font-size: 13px;
    height: 16px;   
}
.fa-solid {
    margin-right: 10px;
}
.กลับไปซื้อสินค้า {
    display: flex;
    justify-content: flex-end;
    height: 56px;
    align-items: center;
}
.ตารางสินค้าในตะกร้า {
    display: flex;
    flex-direction: column;
}
</style>