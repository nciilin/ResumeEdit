<template>
  <div class="topSearch">
    <div class="search">
      <span class="logo">
        <svg class="icon">
          <use xlink:href="#icon-heart" />
        </svg>
        Resumer
      </span>
      <span>
        <svg class="icon">
          <use xlink:href="#icon-Search" />
        </svg>
      </span>
      <input type="text" placeholder="search" />
      <button class="registered">
        <svg class="icon">
          <use xlink:href="#icon-zhuce" />
        </svg>注册
      </button>
      <button class="login">
        <svg class="icon">
          <use xlink:href="#icon-denglu" />
        </svg>登陆
      </button>
      <button class="save">
        <svg class="icon">
          <use xlink:href="#icon-Save" />
        </svg>保存
      </button>
      <button class="preview" v-on:click="preview">
        <svg class="icon">
          <use xlink:href="#icon-plus-preview" />
        </svg>预览
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResumeSearch",
  methods: {
    preview() {
      this.$emit("preview");
    }
  }
};
</script>

<style lang="scss">
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: gray;
  overflow: hidden;
}
.topSearch {
  box-shadow: 8px -4px 67px 14px rgba(250, 252, 254, 1);
  .search {
    height: 80px;
    padding: 20px 0;
    position: relative;
    .logo {
      font-size: 28px;
    }
    span {
      font-size: 16px;
      margin-left: 32px;
    }
    input {
      margin-left: 8px;
      border: 0px;
      outline: none;
    }
    button {
      width: 84px;
      height: 35px;
      border-radius: 5px;
      border: 1px solid #416aa6;
      color: #416aa6;
      text-align: center;
      background: none;
      position: relative;
      svg {
        font-size: 20px;
        fill: #416aa6;
        position: absolute;
        top: 8px;
        left: 0;
      }
    }
    button:hover {
      background: #416aa6;
      color: #fff;
      cursor: pointer;
      svg {
        fill: #fff;
      }
    }
    .registered,
    .login,
    .save,
    .preview {
      position: absolute;
      top: 0;
      right: 0;
      margin-right: 300px;
      margin-top: 20px;
    }
    .login {
      margin-right: 210px;
    }
    .save {
      margin-right: 110px;
    }
    .preview {
      margin-right: 20px;
    }
  }
}
</style>