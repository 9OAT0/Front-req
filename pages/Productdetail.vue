<template>
    <Header-comp />
    <div class="รูปสินค้า">
        <productpicture />
    </div>
    <div class="รายละเอียดสินค้า">
        <productdetails />
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
    background: #ffbbbb;
    align-items: center;
}
</style>