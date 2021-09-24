<template>
  <div class="popup-wrapper" ref="popup_wrapper">
    <div class="popup">
      <div class="popup_header">
        <div>
          <span class="question">Question:</span>
          <span>
            <i class="material-icons" @click="closePopup">close </i>
          </span>
        </div>
        <div>
          <span class="question">{{ popup_data.question }}?</span>
        </div>
      </div>
      <div class="popup_content">
        <form>
          <input
            type="text"
            class="popup-input"
            id="answer"
            name="answer"
            v-model="text"
          />
          <button
            v-if="!showAlert || !showAlert2"
            class="btn-submit"
            @click.prevent="addToAnswer()"
          >
            Отправить
          </button>
        </form>
      </div>

      <div class="popup_footer">
        <button class="btn-submit_close" @click="closePopup()">Close</button>
        <div class="timer">Timer: {{ timerCount }}</div>
      </div>
      <alert-modal
        v-if="showAlert"
        @clicked1="onGrandChildClick()"
      ></alert-modal>
      <alert-modal-2
        v-if="showAlert2"
        @clicked1="onGrandChildClick()"
      ></alert-modal-2>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import AlertModal from "./AlertModal.vue";
import AlertModal2 from "./AlertModal2.vue";

export default {
  components: { AlertModal, AlertModal2 },
  name: "popup",
  props: {
    popup_data: {
      type: Object,
      showPopupInfo: Boolean,
      default() {
        return {};
      },
    },
    popupTitle: {
      type: String,
      default: "Popup name",
    },
    rightBtnTitle: {
      type: String,
      default: "Ok",
    },
  },
  data() {
    return {
      timerCount: 20,
      text: "",
      showAlert: false,
      showAlert2: false,
    };
  },
  computed: {
    ...mapGetters("example", [
      "CATEGORIES",
      "ANSWER_CORRECT",
      "ANSWER_IN_CORRECT",
    ]),
  },
  methods: {
    ...mapActions("example", [
      "GET_CATEGORY_TO_STATE",
      "GET_ANSWER_CORRECT",
      "GET_ANSWER_IN_CORRECT",
    ]),
    ...mapMutations("example", ["SET_ANSWER_CORRECT", "SET_ANSWER_IN_CORRECT"]),
    addToAnswer() {
      console.log(this.text, this.popup_data.answer);
      if (this.popup_data.answer.toLowerCase() == this.text.toLowerCase()) {
        this.SET_ANSWER_CORRECT(this.popup_data);
        this.showAlert = true;
        console.log(this.value);
        // this.$emit('addToAnswer', true)
      } else {
        this.SET_ANSWER_IN_CORRECT(this.popup_data);
        this.showAlert2 = true;
        // this.$emit("wrong", true);
      }
      this.$emit("close");
      this.$emit("close");
    },
    closePopup() {
      this.$emit("clicked");
      // console.log(closePopup);
    },
    rightBtnAction() {
      this.$emit("rightBtnAction");
    },
    onGrandChildClick() {
      this.$emit("clicked1");
    },
  },
  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount--;
          }, 1000);
        } else {
          this.closePopup();
          this.SET_ANSWER_IN_CORRECT(this.popup_data);
        }
      },
      immediate: true,
    },
  },
};
</script>
<style lang="scss">
.popup-wrapper {
  background: rgba(64, 64, 64, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
}
.popup {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  position: fixed;
  top: 50px;
  width: 700px;
  height: 400px;
  background: #ffffff;
  box-shadow: 0 0 17px 0 #e7e7e7;
  z-index: 10;
  &_header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 100px;
  }
  &_content {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 100px;
  }
  &_footer {
    display: flex;
    flex-direction: row;
  }
}
.question {
  font-size: 20px;
  margin-right: 400px;
  color: #26a69a;
  font-weight: bold;
}
.material-icons {
  color: #26a69a;
  font-size: 30px;
  font-weight: bold;
}
.popup-input {
  width: 500px;
  height: 40px;
  border: solid 1px #eaeaea;
  box-shadow: 1px 1px 3px 2px aquamarine;
}
.btn-submit {
  margin-top: 20px;
  margin-left: 400px;
  background-color: aquamarine;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  width: 100px;
  height: 30px;
  &_close {
    margin: 0;
    margin-left: 100px;
    background-color: #26a69a;
    border: 1px solid #eaeaea;
    border-radius: 5px;
    color: #ffffff;
    width: 100px;
    height: 30px;
  }
}
.timer {
  font-size: 20px;
  font-variant: normal;
  margin-left: 100px;
  color: #26a69a;
}
</style>
