<template>
    
</template>
<script>
export const state = () => ({
  bookmarks: []
});

export const mutations = {
  addBookmark(state, bookmarkData) {
    state.bookmarks.push(bookmarkData);
  }
};

</script>