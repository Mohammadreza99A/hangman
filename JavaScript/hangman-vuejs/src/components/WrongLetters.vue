<template>
  <div>
    <h3>Wrong Letters</h3>
    <div class="d-flex justify-content-center">
      <p v-if="wrongLetters.length === 0">No Wrong Letter</p>

      <div v-for="(letter, i) in wrongLetters" :key="i">
        <span class="letter">{{ letter }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'WrongLetters',

  computed: {
    ...mapGetters({ wrongLetters: 'getWrongLetters' }),
  },
};
</script>

<style></style>
