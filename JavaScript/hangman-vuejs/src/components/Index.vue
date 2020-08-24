<template>
  <div class="vh-100 mt-5">
    <WordInput />
    <EndGameModal />
    <div class="row mt-5 text-center">
      <div class="col-sm-6 mb-5">
        <Figure />
      </div>
      <div class="col-sm-6 mb-5">
        <WrongLetters />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Toasted from 'vue-toasted';

import { mapGetters, mapActions } from 'vuex';
import { checkWin } from '../helpers/helpers';

// Components
import Figure from './Figure';
import WordInput from './WordInput';
import WrongLetters from './WrongLetters';
import EndGameModal from './EndGameModal';

Vue.use(Toasted, {
  theme: 'outline',
  position: 'bottom-center',
  duration: 1000,
  singleton: true,
});

export default {
  name: 'Index',

  components: {
    Figure,
    WordInput,
    WrongLetters,
    EndGameModal,
  },

  methods: {
    ...mapActions([
      'addCorrectLetter',
      'addWrongLetter',
      'changeMsg',
      'changePlayable',
    ]),
    handleKeyPressed(e) {
      const { key, keyCode } = e;

      if (keyCode >= 65 && keyCode <= 90 && this.playable) {
        const letter = key.toLowerCase();

        if (this.selectedWord.includes(letter)) {
          if (!this.correctLetters.includes(letter)) {
            this.addCorrectLetter(letter);
          } else {
            this.$toasted.show('You have already entered this letter');
          }
        } else {
          if (!this.wrongLetters.includes(letter)) {
            this.addWrongLetter(letter);
          } else {
            this.$toasted.show('You have already entered this letter');
          }
        }
      }
    },
    handleStateChange(newValue, oldValue) {
      if (this.playable & (newValue !== oldValue)) {
        const checkWinStatus = checkWin(
          this.correctLetters,
          this.wrongLetters,
          this.selectedWord
        );

        if (checkWinStatus === 'win') {
          this.changeMsg('Congratulations, You Have Won!');
          this.changePlayable(false);
        } else if (checkWinStatus === 'lose') {
          this.changeMsg(`You Lost. Correct Word: ${this.selectedWord}`);
          this.changePlayable(false);
        }
      }
    },
  },

  watch: {
    correctLetters(newValue, oldValue) {
      this.handleStateChange(newValue, oldValue);
    },
    wrongLetters(newValue, oldValue) {
      this.handleStateChange(newValue, oldValue);
    },
  },

  created() {
    document.onkeydown = this.handleKeyPressed;
  },

  computed: {
    ...mapGetters({
      selectedWord: 'getSelectedWord',
      correctLetters: 'getCorrectLetters',
      wrongLetters: 'getWrongLetters',
      playable: 'getPlayable',
      msg: 'getMsg',
    }),
  },
};
</script>

<style scoped></style>
