import routes from "../../router/routes";
console.log(routes);

export default {
  SET_CATEGORY_TO_STATE: (state, categories) => {
    let data = {};
    categories.forEach((item) => {
      const { id, title } = item.category;
      const { answer, question, value } = item;
      if (!data[id]) {
        data[id] = { title, cat_id: item.category_id };
        data[id].questions = [{ question, answer, value, id: item.id }];
      } else if (value) {
        data[id].questions.push({ question, answer, value, id: item.id });
      }
    });

    let newArr = [];
    for (let item in data) {
      if (data[item].questions) {
        if (data[item].questions.length > 4) {
          newArr.push(data[item]);
        }
      }
    }
    state.categories = newArr.splice(0, 5);
  },
  SET_LOGIN_TO_STATE: (state, login_name) => {
    state.login_name = login_name;
  },
  SET_ANSWER_CORRECT: (state, question) => {
    state.totalValue += parseInt(question.value);
    state.answerCorrect += 1;
    state.categories.forEach((item, index1) => {
      item.questions.forEach((item, index2) => {
        if (item.id === question.id) {
          state.categories[index1].questions[index2].answered = true;
        }
      });
    });
  },
  SET_ANSWER_IN_CORRECT: (state, question) => {
    state.totalValue -= parseInt(question.value);
    state.answerIncorrect += 1;
    state.categories.forEach((item, index1) => {
      item.questions.forEach((item, index2) => {
        if (item.id === question.id) {
          state.categories[index1].questions[index2].answered = true;
        }
      });
    });
  },
};
