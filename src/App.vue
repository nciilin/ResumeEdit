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

export default {
  name: "App",
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
    border: 1px solid red;
  }
  main {
    display: flex;
    justify-content: space-between;
    min-width: 1024px;
    max-width: 1440px;
    margin: 24px;
    .leftNav {
      width: 32%;
      border: 1px solid green;
    }
    .preview {
      margin-left: 40px;
      flex-grow: 1;
      border: 1px solid fuchsia;
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
