<template>
  <div>
    <Header />
    <div class="game-page">
      <div class="game-page_content">
        <q-btn-group class="btn-category">
          <q-btn
            class="btn-category_item"
            v-for="item of categories"
            :key="item.questions"
            color="secondary"
            glossy
            label=""
          > {{ item.title}}
          </q-btn>
        </q-btn-group>
        <q-btn-group class="btn-questions">
          <popup
            v-if="isInfoPopupVisible"
            :popup_data="value"
            @clicked="onChildClick()"
            @clicked1="onGrandChildClick()"
          ></popup>
          <div
            v-for="item in CATEGORIES"
            :key="item"
            color="secondary"
            glossy
            label=""
            > 
            <q-btn 
              class="btn-questions_item"
              v-for=" value of item.questions"
              :disable="value.answered"
              :key="value"
              @click="showPopupInfo(value)"
            > {{value.value}} 
            </q-btn>
            
          </div>
        </q-btn-group>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./header.vue";
import popup from "./popup.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "PageGame",
  components: {
    Header,
    popup,
  },
  data() {
    return {
      isInfoPopupVisible: false,
      value: {},
    };
  },
  computed: {
    ...mapGetters(
      "example",
      [
        "CATEGORIES",
      ]),
      categories() {
        return this.CATEGORIES
      }
  },
  methods: {
    ...mapActions(  
      "example", 
    [
      "GET_CATEGORY_TO_STATE",
    ]),
    ...mapMutations(
      "example",
    [
      "SET_CATEGORY_TO_STATE"
    ]),
    showPopupInfo(value) {
      this.value = value
      console.log(value);
      this.isInfoPopupVisible = true;
    },
    onChildClick() {
      this.isInfoPopupVisible = false;
    },
    onGrandChildClick() {
      this.isInfoPopupVisible = false;
    },
    addToCart() {
         this.$emit('addToCart', this.product_data)
    },
   
  },
  mounted() {
    if (!this.categories.length) {
      this.GET_CATEGORY_TO_STATE();
    }
  },
}
</script>

<style lang="scss">
.game-page {
  display: flex;
  justify-content: center;
  align-items: center;
  &_content {
    width: 1200px;
    height: 500px;
    margin-top: 50px;
    background-color: aquamarine;
  }
}
.btn-category {
  display: flex;
  flex-direction: column;
  &_item {
    width: 190px;
    height: 90px;
    margin: 5px;
   
  }
}
.btn-questions {
  display: flex;
  flex-wrap: wrap;
  width: 1000px;
  height: 500px;
  &_item {
    width: 190px;
    height: 90px;
    margin: 5px;
     border: solid 2px black;
  }
}
</style>
