<template>
    <Header-comp />
    <div class="text-center text-[36px] mt-10">สินค้าทั้งหมด</div>
    <div class="align-middle justify-center  mt-10">
        <div class="product" id="shop">
            <div v-for="item in shopItemsData" :key="item.id" class="product-items cursor-pointer" @click="viewProductDetail(item.id)">
                <div class="ช่องใส่รูป">
                    <div class="รูป22">
                        <img :src="item.img" alt="Product Image">
                    </div>
                </div>
                <div class="ช่องชื่อสินค้า">
                    {{ item.name }}
                </div>
                <div class="ช่องราคา">
                    {{ item.price }}
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
        </div>
    </div>
    
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
                }
                // Add other items here
            ]
        }
    },
    methods: {
        generateshop() {
            // You may not need this method anymore
        },
        viewProductDetail(productId) {
            // Use Vue Router to navigate to the product detail page
            this.$router.push({ name: 'Productdetail', params: { productId: }});
        }
    }
}
</script>


<style scoped>
.product {
    display: flex;
    justify-content: center;
   padding-top: 20px;
    flex-wrap: wrap;
    
}
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
    justify-content: center;
    align-items: center;
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
    overflow: hidden;
}
.รูป22 {
    width: 200px;
}
</style>
