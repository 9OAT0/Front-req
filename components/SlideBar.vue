<template>
<div class="bg-gray-800 text-white w-64 h-full fixed top-0 left-0 transform transition duration-300 ease-in-out" 
:class="{ 'translate-x-0': isOpen, '-translate-x-full': !isOpen }"
@click.self="$emits('close')" >
  <div class="flex items-center justify-between p-4 border-b border-gray-700">
    <button class="text-white" @click="$emit('close')">Peedee coffee</button>
    <button>
    <i class="fa-solid fa-xmark hover:pointer-events-auto" @click="toggleSlideBar"></i>
  </button>
  </div>
  <ul class="list-none m-0 p-0">
    <li class="mb-2"><a href="/" class="block py-2 px-4 text-gray-300 hover:bg-gray-700">Home</a></li>
    <li class="mb-2"><a href="store" class="block py-2 px-4 text-gray-300 hover:bg-gray-700">Product</a></li>
    <li class="mb-2"><a href="Bookmark" class="block py-2 px-4 text-gray-300 hover:bg-gray-700">Bookmark</a></li>
    <li class="mb-2"><a href="#about" class="block py-2 px-4 text-gray-300 hover:bg-gray-700">This Is Us</a></li>
    <li class="mb-2"><a href="#contact" class="block py-2 px-4 text-gray-300 hover:bg-gray-700">Contact Us</a></li>
    <li class="mb-2"><a href="pages2" class="block py-2 px-4 text-gray-300 hover:bg-gray-700">profile</a></li>

  </ul>
</div>

</template>

<script>
export default {
  name: 'SlideBar',
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  emits: ['close'],
  methods: {
    toggleSlideBar() {
      this.$emit('close');
    }
  }
}
</script>

<style scoped>
.slide-bar {
  transition: transform 0.3s ease-in-out;
}

.slide-bar.translate-x-0 {
  transform: translateX(0);
}

.slide-bar.-translate-x-full {
  transform: translateX(-100%);
}
</style>