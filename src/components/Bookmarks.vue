<template>
  <div class="bookmarks">
    <div class="item" v-for="(item, index) in items" :key="index">
      <a :href="item.url" target="_blank">{{item.title}}</a>
      <p>{{item.decs}}</p>
    </div>
  </div>
</template>

<script>
import { db } from "../main";
export default {
  name: "Bookmarks",
  data: function() {
    return {
      items: []
    };
  },
  firestore() {
    return {
      items: db.collection("bookmarks").orderBy("title")
    };
  }
};
</script>
<style lang="scss">
.bookmarks {
  display: flex;
  justify-content: center;
  justify-items: center;
  flex-direction: column;
  margin-top: 25px;
}
.item {
  font-family: "Ubuntu";
  background: rgb(247, 247, 247);
  width: 50vw;
  margin: auto;
  margin-bottom: 15px;
  border-radius: 10px;
  p {
    font-family: "Ubuntu";
    margin-bottom: 0;
    font-size: 24px;
    color: #35495e;
  }
  a {
    font-size: 24px;
    color: #41b883;
    transition: all 0.3s;
    &:hover {
      color: #35495e;
    }
  }
}
</style>
