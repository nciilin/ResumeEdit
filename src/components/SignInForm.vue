<template>
  <div>
    <form @submit.prevent="signIn">
      <div class="row">
        <label>用户名</label>
        <input type="text" required v-model="formData.username" />
      </div>
      <div class="row">
        <label>密码</label>
        <input type="password" required v-model="formData.password" />
      </div>
      <div class="actions">
        <input type="submit" value="登录" />
        <span>{{errorMessage}}</span>
      </div>
    </form>
  </div>
</template>

<script>
import AV from "../lib/leancloud";
import getErrorMessage from "../lib/getErrorMessage";
import getAVUser from "../lib/getAVUser";
export default {
  name: "SignInForm",
  data() {
    return {
      formData: {
        username: "",
        password: ""
      },
      errorMessage: ""
    };
  },
  methods: {
    signIn() {
      let { username, password } = this.formData;
      AV.User.logIn(username, password).then(
        () => {
          this.$emit("success", getAVUser());
        },
        error => {
          this.errorMessage = getErrorMessage(error);
        }
      );
    }
  }
};
</script>

<style lang="scss">
.row {
  text-align: right;
  padding: 4px 0;
  input {
    width: 180px;
    height: 35px;
    border-radius: 5px;
    border: 1px solid #416aa6;
  }
}
.actions {
  padding: 4px 0;
  margin-left: 16px;
  input {
    border: none;
    border: 1px solid #416aa6;
    width: 100%;
    padding: 6px;
    background: #0084FF;
    border-radius: 5px;
    color: #fff;
  }
}
</style>