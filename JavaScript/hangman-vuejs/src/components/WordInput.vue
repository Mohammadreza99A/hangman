<template>
  <div class="text-center">
    <h3>Enter The Hidden Word</h3>
    <div class="d-flex justify-content-center">
      <div v-for="(letter, i) in selectedWord.split('')" :key="i">
        <span class="letter" v-if="correctLetters.includes(letter)">{{
          letter
        }}</span>
        <span class="letter" v-else>{{ ' ' }}</span>
      </div>
    </div>
    <button @click="changeWord" class="btn btn-secondary my-3">
      Change The Word
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'WordInput',

  methods: {
    ...mapActions(['resetState']),
    changeWord() {
      this.resetState();
    },
  },

  computed: {
    ...mapGetters({
      selectedWord: 'getSelectedWord',
      correctLetters: 'getCorrectLetters',
    }),
  },
};
</script>

<style></style>
