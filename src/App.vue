<template>
  <div class="page">
    <header>
      <ResumeSearch />
    </header>
    <main>
      <ResumeLeftNav class="leftNav" />
      <ResumePreview class="preview" />
    </main>
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

export default {
  name: "App",
  store,
  components: {
    ResumeLeftNav,
    ResumeSearch,
    ResumePreview
  },
  created() {
    document.body.insertAdjacentHTML("afterbegin", icons);
  }
};
</script>

<style lang="scss">
.page {
  display: flex;
  height: 100vh;
  flex-direction: column;
  header {
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

svg.icon {
  height: 1em;
  width: 1em;
  fill: currentColor;
  vertical-align: -0.1em;
  font-size: 16px;
}
</style>
