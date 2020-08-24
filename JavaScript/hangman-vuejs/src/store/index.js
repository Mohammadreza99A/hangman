import Vue from 'vue';
import Vuex from 'vuex';
import randomWords from 'random-words';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedWord: randomWords(),
    correctLetters: [],
    wrongLetters: [],
    playable: true,
    msg: null,
  },

  actions: {
    addCorrectLetter({ commit }, letter) {
      commit('setCorrectLetters', [...this.state.correctLetters, letter]);
    },

    addWrongLetter({ commit }, letter) {
      commit('setWrongLetters', [...this.state.wrongLetters, letter]);
    },

    changeMsg({ commit }, msg) {
      commit('setMsg', msg);
    },

    changePlayable({ commit }, playable) {
      commit('setPlayable', playable);
    },

    resetState({ commit }) {
      commit('setSelectedWord', randomWords());
      commit('setCorrectLetters', []);
      commit('setWrongLetters', []);
      commit('setPlayable', true);
      commit('setMsg', null);
    },
  },

  mutations: {
    setSelectedWord: (state, selectedWord) =>
      (state.selectedWord = selectedWord),
    setCorrectLetters: (state, correctLetters) =>
      (state.correctLetters = correctLetters),
    setWrongLetters: (state, wrongLetters) =>
      (state.wrongLetters = wrongLetters),
    setPlayable: (state, playable) => (state.playable = playable),
    setMsg: (state, msg) => (state.msg = msg),
  },

  getters: {
    getSelectedWord: (state) => state.selectedWord,
    getCorrectLetters: (state) => state.correctLetters,
    getWrongLetters: (state) => state.wrongLetters,
    getPlayable: (state) => state.playable,
    getMsg: (state) => state.msg,
  },
});
