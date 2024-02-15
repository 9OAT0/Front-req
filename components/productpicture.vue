<template>
    <div class="flex11">
        <div class="container11">
            <div class="รูป">
                <div class="img">
                    <img src="/Blend.jpg">
                </div>
            </div>
            <div class="container12">
                <div class="P1"> <img src="/Blend.jpg " class="h-[80px] w-[80px] object-contain"> </div>
                <div class="P2"> <img src="/Blend.jpg " class="h-[80px] w-[80px] object-contain"> </div>
                <div class="P3"> <img src="/Blend.jpg " class="h-[80px] w-[80px] object-contain"> </div>
                <div class="P4"> <img src="/Blend.jpg " class="h-[80px] w-[80px] object-contain"> </div>
                <div class="P5"> <img src="/Blend.jpg " class="h-[80px] w-[80px] object-contain"> </div>
            </div>
        </div>
        <div class="container13">
            <div class="ชื่อสินค้า">
                PRI-DEE : Pridee Blend 100%Arabica Cofee Chocolate, Nutty, Caramel 350g  
            </div>
            <div class="ราคา">
                ฿350
            </div>
            <div class="จำนวน">
                จำนวน
            </div>
            <div class="สั่งซื้อสินค้า">
                <addtocart />
            </div>

        </div>
    </div>
</template> 
<style>
.img {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 400px;
    object-fit: scale-down;
}
.รูป {
    height: 390px;
    width: 420px;
    overflow: hidden;
    border: solid 0.5px;
    
}
.flex11 {
    display: flex;
    height: 520px;
    width: 998px;
}
.container12 {
    height: 80px;
    width: 420px;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
}
.P1 {
    height: 80px;
    width: 80px;
    border: solid 0.5px;
    object-fit: contain;
    overflow: hidden;
}
.P2 {
    height: 80px;
    width: 80px;
    border: solid 0.5px;
    object-fit: contain;
    overflow: hidden;
}
.P3 {
    height: 80px;
    width: 80px;
    border: solid 0.5px;
    object-fit: contain;
    overflow: hidden;
}
.P4 {
    height: 80px;
    width: 80px;
    border: solid 0.5px;
    object-fit: contain;
    overflow: hidden;
}
.P5 {
    height: 80px;
    width: 80px;
    border: solid 0.5px;
    object-fit: contain;
    overflow: hidden;
}
.container13 {
    height: 520px;
    width: 518px;
    margin-left: 30px;
}
.ชื่อสินค้า {
    height: 100px;
    width: 518px;
    font-size: 24px;
}
.ราคา {
    width: 518px;
    height: 20px;
    font-size: 20px;
    margin-top: 20px;
    color: #58790C;
}
.จำนวน {
    height: 20px;
    width: 518px;
    display: flex;
    font-size: 18px;
    margin-top: 40px;
}
.สั่งซื้อสินค้า {
    height: 60px;
    width: 518px;
    margin-top: 40px;
}
</style>