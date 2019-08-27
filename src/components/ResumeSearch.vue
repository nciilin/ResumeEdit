<template>
  <div class="topSearch">
    <div class="search">
      <span class="logo">
        <svg class="icon">
          <use xlink:href="#icon-heart" />
        </svg>
        Resumer
      </span>

      <span class="searchIcon">
        <svg class="icon">
          <use xlink:href="#icon-Search" />
        </svg>
        <input type="text" placeholder="search" />
      </span>

      <div v-if="logined" class="userActions">
        <span class="welcome">你好，{{user.username}}</span>
        <a class="button" href="#" @click.prevent="signOut">登出</a>
      </div>
      <div v-else class="userActions">
        <a class="button registered" href="#" @click.prevent="signUpDialogVisible = true">
          <svg class="icon">
            <use xlink:href="#icon-zhuce" />
          </svg>注册
        </a>

        <a class="button login" href="#" @click.prevent="signInDialogVisible = true">
          <svg class="icon">
            <use xlink:href="#icon-denglu" />
          </svg>登录
        </a>
      </div>

      <a class="button save">
        <svg class="icon">
          <use xlink:href="#icon-Save" />
        </svg>保存
      </a>
      <a class="button preview" v-on:click="preview">
        <svg class="icon">
          <use xlink:href="#icon-plus-preview" />
        </svg>预览
      </a>
    </div>

    <MyDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible = false">
      <SignUpForm @success="signIn($event)" />
    </MyDialog>
    <MyDialog title="登录" :visible="signInDialogVisible" @close="signInDialogVisible = false">
      <SignInForm @success="signIn($event)" />
    </MyDialog>
  </div>
</template>

<script>
import MyDialog from "./MyDialog";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
import AV from "../lib/leancloud";

export default {
  name: "ResumeSearch",
  data() {
    return {
      signUpDialogVisible: false,
      signInDialogVisible: false
    };
  },
  components: {
    MyDialog,
    SignUpForm,
    SignInForm
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    logined() {
      return this.user.id;
    }
  },
  methods: {
    preview() {
      this.$emit("preview");
    },
    signOut() {
      AV.User.logOut();
      this.$store.commit("removeUser");
    },
    signIn(user) {
      this.signUpDialogVisible = false;
      this.signInDialogVisible = false;
      this.$store.commit("setUser", user);
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
    display: flex;
    .searchIcon {
      padding: 6px 0;
      margin-left: 56px;
    }
    .userActions {
      margin-right: 3em;
      .welcome {
        margin-right: 0.5em;
      }
    }
    .logo {
      font-size: 28px;
      .icon {
        font-size: 28px;
      }
    }
    span {
      margin-left: 32px;
    }
    input {
      margin-left: 8px;
      border: 0px;
      outline: none;
    }
    .button {
      width: 84px;
      height: 35px;
      border-radius: 5px;
      border: 1px solid #416aa6;
      color: #416aa6;
      text-decoration: none;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      vertical-align: middle;
      svg {
        font-size: 20px;
        fill: #416aa6;
        position: absolute;
        top: 8px;
        left: 0;
      }
    }
    a:hover {
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