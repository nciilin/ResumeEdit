<template>
  <div class="page">
    <header class="topbar">
      <ResumeTopbar />
    </header>
    <main>
      <ResumeLeftNav id="resumeLeftNav" />
      <ResumePreview id="resumePreview" />
    </main>
  </div>
</template>

<script>
import "normalize.css/normalize.css";
import "./assets/reset.css";

import ResumeTopbar from "./components/ResumeTopbar";
import ResumeLeftNav from "./components/ResumeLeftNav";
import ResumePreview from "./components/ResumePreview";

export default {
  name: "App",
  components: {
    ResumeLeftNav,
    ResumeTopbar,
    ResumePreview
  }
};
</script>

<style lang="scss">
.page {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.page > mian {
  flex-grow: 1;
}

.page > main {
  min-width: 1024px;
  max-width: 1440px;
  margin: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  width: 100%;
  align-self: center;
}
#resumeLeftNav {
  width: 40%;
  background: #444;
  margin-top: 40px;
}
#resumePreview {
  width: 55.66667%;
  background: #777;
  flex-grow: 1;
  margin-left: 16px;
  margin-top: 40px;
}
</style>
