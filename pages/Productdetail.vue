<template>
    <Header-comp />
    <div v-for="item in shopItemsData" :key="item.id" class="รูปสินค้า ">
        <div class="flex11">
            <div class="container11">
                <div class="รูป">
                    <div class="img">
                        <img :src="item.img" alt="Product Image">
                    </div>
                </div>
                <div class="container12">
                    <div class="P1"> <img :src="item.img" alt="Product Image" class="h-[80px] w-[80px] object-contain"> </div>
                    <div class="P2"> <img :src="item.img" alt="Product Image" class="h-[80px] w-[80px] object-contain"> </div>
                    <div class="P3"> <img :src="item.img" alt="Product Image" class="h-[80px] w-[80px] object-contain"> </div>
                    <div class="P4"> <img :src="item.img" alt="Product Image" class="h-[80px] w-[80px] object-contain"> </div>
                    <div class="P5"> <img :src="item.img" alt="Product Image" class="h-[80px] w-[80px] object-contain"> </div>
                </div>
            </div>
            <div class="container13">
                <div class="ชื่อสินค้า">
                    {{ item.name }}                
                </div>
                <div class="ราคา">
                    {{ item.price }}
                </div>
                <div class="จำนวน">
                    จำนวน
                </div>
                <div class="สั่งซื้อสินค้า">
                    <div class="addbutton cursor-pointer" @click="openModal(item.id)">
                        <i class="fa-solid fa-cart-shopping "></i>
                        สั่งซื้อสินค้า
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="modal" v-show="isModalVisible">
        <div class="modal-bg" @click="closeModal"></div>
        <div class="modal-page">
            <div v-for="item in shopItemsData" :key="item.id" class="added">
                <div class="สินค้าถูกเพิ่ม">
                    สินค้าถูกเพิ่มในตะกร้าแล้ว
                </div>
                <div class="กรอบชื่อสินค้า">
                    <div class="รูปเพิ่มสินค้า">
                        <img :src="item.img" class="h-[100%] w-[110px]">
                    </div>
                    <div class="ชื่อproduct">
                        {{ item.name }}      
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
        <!-- Modal content here -->
</template>

<script>
export default {
    data() {
        return {
            shopItemsData: [ 
            {
                    id: 1,
                    img: 'https://scontent.fbkk5-7.fna.fbcdn.net/v/t39.30808-6/420124980_419838760554723_8957450369290128354_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=GmqeJeDC0xQAX8ZIhfd&_nc_ht=scontent.fbkk5-7.fna&oh=00_AfBQ0dFcYhdgPYn3MqMMd2XAEiB0zzPu79MKsUqwu2BFCQ&oe=65E31D02',
                    name: 'PrideeBlend',
                    price: 350,
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, veniam odit amet et sint nulla.',
                    type: 'Medium',
                }, /* Your product data here */ ],
            isModalVisible: false,
            productIndex: null
        }
    },
    methods: {
        openModal(index) {
            this.productIndex = index;
            this.isModalVisible = true;
        }
    },
    methods: {
        openModal(index) {
            this.productIndex = index;
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        }
    }
}



</script>

<style scoped>
.รูปสินค้า {
    margin-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.img {
    display: flex;
    justify-content: center;
    height: 100%;
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
.modal,
.modal-bg {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
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
    height: 150px;
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
.addbutton{
    height: 60px;
    width: 280px;
    display: flex;
    background: #58790C;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 20px;
    border-radius: 10px;
}
.f1 {
    font-size: 20px;
    margin-bottom: 20px;
    border-bottom: solid 0.5px;
}
.img2 {
    height: 100%;
    width: 600px;
}
.กรอบ {
    display: flex;
    justify-content: center;
}

</style>


