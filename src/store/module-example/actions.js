import axios from "axios";

export default {
  async GET_CATEGORY_TO_STATE({ commit }) {
    const { data } = await axios.get("https://jservice.io/api/clues");

    commit("SET_CATEGORY_TO_STATE", data);
    console.log("all good");
  },
  async GET_LOGIN_TO_STATE({ commit }, email) {
    await axios
      .get(
        `https://api.kickbox.com/v2/verify?email=${email}&apikey=live_95055b3fc78ae6c6e3ccf92a8d77baae1c8b970443de894f47434fb8663a515f`
      )
      .then((response) => {
        console.log("response.data", response.data);
        commit("SET_LOGIN_TO_STATE", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  GET_ANSWER_CORRECT({ commit }, totalValue) {
    commit("SET_ANSWER_CORRECT", totalValue);
  },
  GET_ANSWER_IN_CORRECT({ commit }, totalValue) {
    commit("SET_ANSWER_IN_CORRECT", totalValue);
  },
};
