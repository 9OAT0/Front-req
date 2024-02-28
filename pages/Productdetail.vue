<template>
    <Header-comp />
    <div class="รูปสินค้า">
        <productpicture />
    </div>
    <div class="con1">
        <div class="รายละเอียดสินค้า">
            <productdetails />
        </div>
    </div>
    <div class="modal" style="display: none;">
        <div class="modal-bg"></div>
        <div class="modal-page">
            <div class="added">
                <div class="สินค้าถูกเพิ่ม">
                    สินค้าถูกเพิ่มในตะกร้าแล้ว
                </div>
                <div class="กรอบชื่อสินค้า">
                    <div class="รูปเพิ่มสินค้า">
                        <img src="public/Blend.jpg" class="h-[100%] w-[110px]">
                    </div>
                    <div class="ชื่อproduct">
                        PRI-DEE : Pridee Blend 100%Arabica Cofee Chocolate, Nutty, Caramel 350g      
                    </div>
                </div>
            </div>
            <div class="mycart2">
            </div>
            <div class="mycart4">
                <div class="mycart3">
                    ตะกร้าสินค้า
                </div>
                <div class="กรอบตะกร้าสินค้า">
                    รวมราคาทั้งสิ้น
                </div>
                <div class="เลือกสินค้าต่อ">
                    <Continuetoviewproducts /> 
                    <div class="viewiteme">
                        <Viewitemsincart />
                    </div> 
                        
                        
                </div>
            </div>
        </div>
    </div>
    
</template>
<style>
.รูปสินค้า {
    display: flex;
    justify-content: center;
    margin-top: 65px;
}
.รายละเอียดสินค้า {
    height: auto;
    width: 998px;
    display: flex;
}
.con1 {
    display: flex;
    align-items: center;
    justify-content: center;
}
.modal,
.modal-bg {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    display: flex;
}
.modal-page {
    z-index: 99;
    width: 800px;
    height: 200px;
    background: #fff;
    border-radius: 5px;
    display: flex;
}
.added {
    padding: 10px;
    width: 450px;
}
.mycart3 {
    margin-right: 10px;
    margin-left:10px;
    border-bottom: rgba(0, 0, 0, 0.2) solid 2px;
}
.สินค้าถูกเพิ่ม {
    margin-left: 10px;
    margin-right: 10px;
    border-bottom: rgba(0, 0, 0, 0.2) solid 2px;
}
.mycart2 {
    border-left:rgba(0, 0, 0, 0.2) solid 2px;
    margin-top: 10px;
    margin-bottom: 10px;
}
.mycart4 {
    padding: 10px;
    width: 350px;
}
.รูปเพิ่มสินค้า {
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.กรอบชื่อสินค้า {
    width: 450px;
    display: flex;
}
.ชื่อproduct {
    margin-top: 20px;
    width: 33;
}
.กรอบตะกร้าสินค้า {
    width: 350;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 20px;
}
.เลือกสินค้าต่อ {
    margin-top: 50px;
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
}
.viewiteme {
    margin-left: 10px;
}
</style>
<script>
var porduct = [{
    id: 1,
    img: 'https://scontent.fbkk5-7.fna.fbcdn.net/v/t39.30808-6/420124980_419838760554723_8957450369290128354_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=GmqeJeDC0xQAX8ZIhfd&_nc_ht=scontent.fbkk5-7.fna&oh=00_AfBQ0dFcYhdgPYn3MqMMd2XAEiB0zzPu79MKsUqwu2BFCQ&oe=65E31D02',
    name: 'PrideeBlend',
    price: 350,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, veniam odit amet et sint nulla.',
    type: 'Medium',
}, {
    id: 2,
    img: 'https://scontent.fbkk5-7.fna.fbcdn.net/v/t39.30808-6/427134255_434821192389813_352376848246311866_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=n76NJSR8zYEAX_U7kGO&_nc_ht=scontent.fbkk5-7.fna&oh=00_AfDfXKwblFPO1mjfVRvv1Bj1-WmbzoLSY4aZv-eAWEmeXw&oe=65E1C11F',
    name: 'EthiopiaGelanaGeshaNaturalG1',
    price: 200,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, veniam odit amet et sint nulla.',
    type: 'LightRoast',
}, {
    id: 3,
    img: 'https://scontent.fbkk5-1.fna.fbcdn.net/v/t39.30808-6/425317857_428598959678703_1061220152207252595_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=5ild6sYMjYIAX9yFX61&_nc_ht=scontent.fbkk5-1.fna&oh=00_AfDdlP6fyn94AfOas6CrUvVcrTJi_TDTB6eVg0zUL4LyUw&oe=65E29C17',
    name: 'EthiopiaKongaG1Washad',
    price: 200,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, veniam odit amet et sint nulla.',
    type: 'LightRoast',
}, {
    id: 4,
    img: 'https://scontent.fbkk5-7.fna.fbcdn.net/v/t39.30808-6/387145320_364134009458532_2933141215424069986_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=uTcX4qGj9-sAX_54SiK&_nc_ht=scontent.fbkk5-7.fna&oh=00_AfAIH7-nf7-zoj1DCrWl8ddGe5pB9MWIn90TWkbaDJWpFQ&oe=65E2DA7D',
    name: 'HouseBlend',
    price: 550,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, veniam odit amet et sint nulla.',
    type: 'MediumRoast',
}]

</script>