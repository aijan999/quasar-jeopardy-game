<template>
  <div class="login-wrapper">
    <h1 class="game-name">Quiz Jeopardy</h1>
    <q-form @submit.prevent class="q-gutter-md">
      <q-input
        debounce="1000"
        ref="inputBar"
        @keyup.enter="Login"
        class="login-input"
        filled
        v-model="email"
        type="text"
        id="email"
        label="Please enter your valid email address*"
        list="variants"
      />

      <login-alert v-if="isModalVisible" @close="closeModal">
        <div class="modal">
          <div class="modal-content">
            <hr />
            <div class="modal-body">
              <p>Please enter a valid Email address!</p>
            </div>
            <hr />
            <div class="modal-footer">
              <button class="btn-close" @click="closeModal">Close</button>
            </div>
          </div>
        </div>
      </login-alert>
      <div v-if="showList">
        <p class="variants_p">Did you mean?</p>
        <div class="variants">
          <div
            class="variants inner"
            v-for="(variant, index) in variants"
            :key="index"
            @click="changeUserEmail(variant)"
          >
            {{ variant }}
          </div>
        </div>
      </div>
    </q-form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      isModalVisible: false,
      login_name: {},
      domains: [
        "gmail.com",
        "hotmail.com",
        "msn.com",
        "outlook.com",
        "yahoo.com",
        "mail.ru",
        "mail.yandex.ru",
      ],
      showList: false,
      variants: [],
      timeout: null,
      debounceInput: ""
    };
  },
  mounted() {
    this.focusInput("inputBar");
  }, 
  methods: {
    focusInput(ref) {
      this.$refs[ref].focus();
    },
    changeUserEmail(value) {
      this.email = value;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    async Login() {
      await axios
        .get(
          `https://api.kickbox.com/v2/verify?email=${this.email}&apikey=live_a929701f45ca8ed430c355c891b86764699b26e98ea0312c8afe936c2f606584`,
          { email: this.email },
          {
            headers: {
              "Content-type": "application/json",
            },
          }
        )
        .then((response) => {
          this.login_name = response.data;

          if (this.login_name.result === "deliverable") {
            this.$router.push("/start");
          } else {
            this.isModalVisible = true;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  watch: {
    email(value) {
      console.log(value);
      if (this.domains.includes(value.split("@")[1])) {
        this.showList = false;
      }
      if (!this.domains.includes(value.split("@")[1])) {
        this.variants = this.domains.map(
          (domain) => `${value.split("@")[0]}@${domain}`
        );
        this.showList = true;
      }
    },
  },
};
</script>
<style lang="scss">
.login-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px 0 0 0;
}
.game-name {
  font-size: 70px;
  color: #26a69a;
  font-weight: bolder;
}
.login-input {
  width: 500px;
  color: #26a69a;
}
.list {
  display: flex;
}
.variants {
  width: 400px;
  display: flex;
  flex-wrap: wrap;
}
.variants_p {
  font-size: 15px;
  margin-right: 400px;
  color: #26a69a;
  font-weight: bold;
}
.inner {
  cursor: pointer;
  color: #3f4645;
  flex-direction: row;
}
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 650px;
  height: 250px;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  background-color: #ffffff;
  padding: 40px 30px 20px;
}
.btn-close {
  width: 100px;
  height: 30px;
  cursor: pointer;
  background-color: #26a69a;
  color: #ffffff;
  font-style: cursive;
  font-weight: normal;
  font-size: 18px;
  border-radius: 0.4rem;
}
.modal-body {
  font-size: 24px;
  color: #26a69a;
  font-weight: bold;
  background-color: #fff;
  text-align: center;
  letter-spacing: 3px;
}
</style>
