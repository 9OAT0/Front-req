<template>
  <div class="overlay" v-show="showOverlay">
    <ul>
      <li v-for="item in filteredItems" :key="item.id">{{ item.text }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchQuery: '',
      items: [ /* Your data */ ]
    };
  },
  computed: {
    filteredItems() {
      // Filter items based on search query
      return this.items.filter(item => item.text.includes(this.searchQuery));
    },
    showOverlay() {
      // Show overlay only if searchQuery is not empty and there are filtered items
      return this.searchQuery !== '' && this.filteredItems.length > 0;
    }
  },
  methods: {
    filterItems() {
      // This method is called when the input changes
      // It updates the filteredItems computed property
    }
  }
};
</script>

<style scoped>
.overlay {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: white;
  border: 1px solid #ccc;
  z-index: 1000;
}
</style>