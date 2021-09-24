<template>
  <div class="header">
    <div>
      <router-link class="rout-style" :to="{ name: 'PageGame' }">
        <q-btn class="btn-play" color="secondary" label="Game" />
      </router-link>
      <router-link class="rout-style" :to="{ name: 'PageStatistics' }">
        <q-btn color="secondary" label="statistics" />
      </router-link>
    </div>
    <div class="header-block">
      <div class="header-block_total-value">
        Total value: {{ ANSWER_TOTAL_VALUE }}
      </div>
      <p class="header-block_login-name">{{ LOGIN_NAME.email }}</p>
      <div>
        <router-link class="rout-style" :to="{ name: 'Login' }">
          <q-btn class="btn-exit" color="secondary" label="Exit" />
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Header",
  data() {
    return {};
  },
  computed: {
    ...mapGetters("example", ["LOGIN_NAME", "ANSWER_TOTAL_VALUE"]),
  },
  methods: {
    ...mapActions("example", ["GET_LOGIN_TO_STATE"]),
  },
  mounted() {
    this.GET_LOGIN_TO_STATE;
  },
};
</script>
<style lang="scss">
.header {
  width: 100%;
  height: 100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 30px 100px 0 100px;
  background-color: $teal-1;
}
.rout-style {
  text-decoration: none;
}
.btn-play {
  margin-right: 20px;
}
.btn-exit {
  width: 100px;
}
.header-block {
  display: flex;
  flex-direction: row;
  width: 750px;
  justify-content: space-between;
  &_login-name {
    padding: 5px;
    font-size: 20px;
  }
  &_total-value {
    margin-right: 50px;
    color: #26a69a;
    font-size: 30px;
    font-weight: bold;
  }
}
</style>
