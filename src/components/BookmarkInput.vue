<template>
  <form @submit.prevent="addBookmark(title, decs, url)">
    <input v-model="title" placeholder="Название закладки" minlength="5">
    <input v-model="decs" placeholder="Описание закладки" minlength="10">
    <input v-model="url" placeholder="Ссылка" minlength="5">
    <button type="submit">Добавить новую закладку</button>
  </form>
</template>

<script>
import { db } from "../main";
export default {
  name: "BookmarkInput",
  data: function() {
    return {
      title: "",
      decs: "",
      url: ""
    };
  },
  methods: {
    addBookmark(title, decs, url) {
      // <-- and here
      const createdAt = new Date();
      db.collection("bookmarks").add({ title, decs, url, createdAt });
      this.title = "";
      this.decs = "";
      this.url = "";
    }
  }
};
</script>
<style lang="scss">
form {
  input {
    padding-top: 5px;
    padding-bottom: 5px;
    border: 2px solid #35495e;
    padding-left: 10px;
    font-family: "Ubuntu";
    font-size: 16px;
    font-weight: 400;
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 10px;
    outline: none;
    transition: all 0.3s;
    &:focus {
      border: 2px solid #41b883;
    }
    &:hover {
      border: 2px solid #41b883;
    }
  }
  button {
    padding-top: 5px;
    padding-bottom: 5px;
    font-family: "Ubuntu";
    font-size: 16px;
    font-weight: 400;
    border-radius: 10px;
    background: #41b883;
    color: #fff;
    border: 2px solid #35495e;
    transition: all 0.3s;
    &:hover {
      color: #35495e;
      border: 2px solid #41b883;
      font-weight: 500;
      background: #fff;
    }
  }
}
</style>

