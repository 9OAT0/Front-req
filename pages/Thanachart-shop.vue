<template>
    <div class="w-full">
        <header-comp />
    </div>
    <div class="bg-ShowHowBG h-16 w-full flex justify-center gap-32 border-black border">
        <button class="w-28">
            หน้าแรก
        </button>
        <div class="border-l-2 border border-black"></div>
        <button class="w-28">
            สินค้าแนะนำ
        </button>
    </div>
    <div class="text-center text-2xl font-bold py-8">
        All product
    </div>
    <div class="px-9">
    <div class="flex gap-8 pt-6 justify-center">
        <block-product />
        <block-product />
        <block-product />
        <block-product />
    </div>
    </div>
</template>