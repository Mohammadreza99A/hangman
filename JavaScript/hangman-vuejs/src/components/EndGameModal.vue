<template>
  <div>
    <button
      type="button"
      class="d-none"
      data-toggle="modal"
      data-target="#endGameModal"
      id="endGameModalBtn"
    ></button>

    <div
      class="modal fade"
      id="endGameModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">
              Game Over
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">{{ msg }}</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-dark"
              @click="restartGame"
              data-dismiss="modal"
            >
              Play Again
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'EndGameModal',

  watch: {
    playable(newValue, oldValue) {
      if (newValue !== oldValue) {
        document.getElementById('endGameModalBtn').click();
      }
    },
  },

  methods: {
    ...mapActions(['resetState']),
    restartGame() {
      this.resetState();
    },
  },

  computed: {
    ...mapGetters({ msg: 'getMsg', playable: 'getPlayable' }),
  },
};
</script>
<style></style>
