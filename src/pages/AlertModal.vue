<template>
  <div class="modal">
    <div class="modal-content">
      <div class="modal-header">
        <p>Your answer is:</p>
      </div>
      <hr />
      <div class="modal-body">
        <p>right!</p>
      </div>
      <hr />
      <div class="modal-footer">
        <button class="btn-close" @click="closePopup">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "alert-modal",
  props: {
    showAlert: Boolean,
    id: Number,
  },
  data() {
    return {};
  },
  methods: {
    closePopup() {
      this.$emit("clicked1");
    },
    onGrandChildClick() {
      this.showModal = false;
    },
  },
};
</script>

<style scoped>
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
.modal-header {
  font-size: 20px;
  margin-right: 400px;
  color: #26a69a;
  font-weight: bold;
}

.modal-header p {
  text-align: center;
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
  font-size: 34px;
  font-family: Stencil Std, fantasy;
  color: #26a69a;
  font-weight: normal;
  background-color: #fff;
  text-align: center;
  letter-spacing: 3px;
}
</style>
