<template>
  <div class="stscs-main">
    <Header />
    <div class="stscs-wrapper">
      <h1 class="stscs_title">Statistics</h1>
      <div class="stscs">
        <p class="stscs_item">Correct answers</p>
        <p class="stscs_item">Wrong answers</p>
      </div>
      <div class="stscs">
        <p class="stscs_value">{{ ANSWER_CORRECT }}</p>
        <p class="stscs_value">{{ ANSWER_IN_CORRECT }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./header.vue";
import { mapGetters } from "vuex";

export default {
  name: "PageStatistics",
  components: {
    Header,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters("example", ["ANSWER_CORRECT", "ANSWER_IN_CORRECT"]),
  },
};
</script>

<style lang="scss">
.stscs-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
.stscs-wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
  height: 250px;
  background-color: aquamarine;
  border-radius: 10px;
  width: 900px;
}
.stscs {
  display: flex;
  flex-direction: row;
  &_item {
    width: 270px;
    height: 60px;
    border-radius: 5px;
    margin-left: 50px;
    font-size: 20px;
    color: rgb(90, 69, 69);
    text-align: center;
    padding: 10px;
  }
  &_title {
    font-size: 25px;
    margin: 0 auto;
  }
  &_value {
    width: 270px;
    height: 50px;
    margin-left: 50px;
    text-align: center;
  }
}
</style>
