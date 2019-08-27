<template>
  <div class="dialogWrapper" v-show="visible">
    <div class="dialog">
      <header>
        {{title}}
        <span class="close" @click="close">
          <svg class="icon">
            <use xlink:href="#icon-Remove" />
          </svg>
        </span>
      </header>
      <main>
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyDialog",
  props: ["title", "visible"],
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped lang="scss">
.dialogWrapper {
  position: fixed;
  background: hsla(0, 0%, 0%, 0.25);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  .dialog {
    background: #fff;
    box-shadow: 3px 12px 33px 4px rgba(219, 215, 219, 0.88);
    height: 360px;
    width: 400px;
    > header {
      padding: 16px;
      display: flex;
      justify-content: space-between;
      font-size: 24px;
      .close {
        .icon {
          fill: red;
          width: 24px;
          height: 24px;
          z-index: 1;
        }
      }
    }
    > main {
      padding: 16px;
    }
  }
}
</style>