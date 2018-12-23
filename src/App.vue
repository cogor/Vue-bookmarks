<template>
  <div id="app">
    <img src="./assets/logo.png" alt>
    <h1>Мои закладки</h1>
    <BookmarkInput/>
    <Bookmarks/>
  </div>
</template>

<script>
import Bookmarks from "@/components/Bookmarks";
import BookmarkInput from "@/components/BookmarkInput";

export default {
  name: "app",
  components: {
    Bookmarks,
    BookmarkInput
  }
};
</script>

<style lang="scss">
#app {
  @import url("https://fonts.googleapis.com/css?family=Ubuntu");

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 25px;
  h1 {
    font-family: "Ubuntu";
    font-weight: 300;
    font-size: 30px;
  }
}
</style>
