<template>
  <div class="page" v-bind:class="{previewMode: previewMode}">
    <ResumeSearch id="topbar" v-on:preview="preview" />
    <main>
      <ResumeLeftNav id="ResumeLeftNav" class="leftNav" />
      <ResumePreview id="ResumePreview" class="preview" />
    </main>
    <button id="exitPreview" v-on:click="exitPreview">
      <svg class="icon">
        <use xlink:href="#icon-Remove" />
      </svg>退出
    </button>
  </div>
</template>

<script>
import "normalize.css/normalize.css";
import "./assets/reset.css";

import ResumeSearch from "./components/ResumeSearch";
import ResumeLeftNav from "./components/ResumeLeftNav";
import ResumePreview from "./components/ResumePreview";
import icons from "./assets/icons";
import store from "./store/index";
import AV from "./lib/leancloud";
import getAVUser from "./lib/getAVUser";

export default {
  name: "App",
  store,
  data() {
    return {
      previewMode: false
    };
  },
  components: {
    ResumeLeftNav,
    ResumeSearch,
    ResumePreview
  },
  created() {
    document.body.insertAdjacentHTML("afterbegin", icons);
    let state = localStorage.getItem("state");
    if (state) {
      state = JSON.parse(state);
    }
    this.$store.commit("initState", state);
    this.$store.commit("setUser", getAVUser());
  },
  methods: {
    preview() {
      this.previewMode = true;
    },
    exitPreview() {
      this.previewMode = false;
    }
  }
};
</script>

<style lang="scss">
.page {
  display: flex;
  height: 100vh;
  flex-direction: column;
  .ResumeSearch {
    display: block;
    width: 100%;
    height: 80px;
  }
  main {
    display: flex;
    justify-content: space-between;
    min-width: 1024px;
    max-width: 1440px;
    margin: 24px;
    .leftNav {
      min-width: 32%;
    }
    .preview {
      margin-left: 40px;
      flex-grow: 1;
    }
  }
}

#exitPreview {
  display: none;
  width: 84px;
  height: 35px;
  border-radius: 5px;
  color: #416aa6;
  text-align: center;
  background: none;
  position: relative;
  .icon {
    font-size: 20px;
    fill: #416aa6;
    position: absolute;
    top: 8px;
    left: 0;
  }
}
#exitPreview:hover {
  background: #416aa6;
  color: #fff;
  cursor: pointer;
  svg {
    fill: #fff;
  }
}
.previewMode #exitPreview {
  display: block;
  position: fixed;
  right: 16px;
  bottom: 16px;
}

.previewMode > #topbar {
  display: none;
}

.previewMode #ResumeLeftNav {
  display: none;
}

.previewMode #ResumePreview {
  max-width: 800px;
  margin: 32px auto;
}

svg.icon {
  height: 1em;
  width: 1em;
  fill: currentColor;
  vertical-align: -0.1em;
  font-size: 16px;
}
</style>
