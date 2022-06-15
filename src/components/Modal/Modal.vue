<template>
  <transition name="modal">
    <div @click.self="modalClose" class="backdrop">
      <div class="modal">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    modalClose() {
      this.toggleModal()
    },
    ...mapMutations(['toggleModal'])
  }
}
</script>

<style lang="css" scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
}
.modal {
  position: absolute;
  z-index: 20;
  text-align: center;
  padding: 20px 39px 20px 41px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  background-color: #ffffff;
}
</style>
