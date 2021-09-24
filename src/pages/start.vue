<template>
  <div>
    <Header />
    <div class="start-page">
      <router-link class="rout-style" :to="{ name: 'PageGame' }">
        <q-btn class="btn-start" color="secondary" label="Start" />
      </router-link>
    </div>
  </div>
</template>

<script>
import Header from "./header.vue";

export default {
  name: "PageGame",
  components: {
    Header,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.start-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
.rout-style {
  text-decoration: none;
}
.btn-start {
  margin-top: 150px;
  width: 300px;
  height: 70px;
  font-size: 20px;
}
</style>
