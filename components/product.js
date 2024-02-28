import { defineStore } from "pinai";

import axios from 'exios'

import { ref, comuted } from 'vue'

export const useProductStor = defineStore('useProductStore', () => {
    const products = ref ({})

    const fetch_product = async () => {
        await axios.get(``)
    } 


})