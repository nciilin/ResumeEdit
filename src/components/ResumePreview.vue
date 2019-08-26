<template>
  <div class="ResumePreview">
    <div class="ContentShow">
      <p class="ContentTitle clearfix">
        Renter Resumer, 8SK4R5
        <span class="ContentAngle">angle</span>
      </p>
    </div>
    <section data-name="information" v-show="resume.information">
      <h1>{{resume.information.name}}</h1>
      <h2>{{resume.information.title}}</h2>
      <p>
        <small>{{resume.information.city}}</small>
        <small>{{resume.information.birth}}</small>
      </p>
    </section>

    <section data-name="workHistory" v-show="resume.workHistory">
      <h2>工作经历</h2>
      <ol>
        <li v-for="item in resume.workHistory">
          <h3>{{item.company}}</h3>
          <p v-show="item.content">{{item.content}}</p>
        </li>
      </ol>
    </section>

    <section data-name="education" v-show="resume.education">
      <h2>毕业院校</h2>
      <ol>
        <li v-for="item in resume.education">
          <h3>
            {{item.school}}
            <span v-show="item.degree">- {{item.degree}}</span>
            <span v-show="item.content">- {{item.content}}</span>
          </h3>
        </li>
      </ol>
    </section>

    <section data-name="projects" v-show="resume.projects">
      <h2>项目经历</h2>
      <ol>
        <li v-for="item in resume.projects">
          <h3>{{item.name}}</h3>
          <p v-show="item.content">{{item.content}}</p>
        </li>
      </ol>
    </section>

    <section data-name="awards" v-show="resume.awards">
      <h2>获奖情况</h2>
      <ol>
        <li v-for="item in resume.awards">
          <h3>{{item.name}}</h3>
          <p v-show="item.content">{{item.content}}</p>
        </li>
      </ol>
    </section>

    <section data-name="contacts" v-show="resume.contacts">
      <h2>联系方式</h2>
      <table>
        <tr v-for="item in resume.contacts">
          <td>{{item.phone}}</td>
          <td v-show="item.email">{{item.email}}</td>
        </tr>
      </table>
    </section>

    <div class="ResumeFooter">
      <p class="Copyright clearfix">
        Copyright@dribbble.com/shots/3035214-Renter-Resume
        <svg class="icon">
          <use xlink:href="#icon-table" />
        </svg>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResumePreview",
  computed: {
    resume() {
      return this.$store.state.resume;
    }
  }
};
</script>

<style lang="scss">
.clearfix {
  content: "";
  display: block;
  clear: both;
}
.ResumePreview {
  background: white;
  overflow: auto;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
  padding: 2em;
  color: #333;
  line-height: 1.2;
  * {
    box-sizing: border-box;
    font-variant: normal;
    font-weight: normal;
  }
  ol {
    list-style: none;
  }
  section + section {
    margin-top: 2em;
  }
  p {
    white-space: pre-line;
  } // 请问为什么要加这一行
  section {
    > h2:first-child {
      background: #ddd;
      display: inline-block;
      padding: 0.2em;
      margin-bottom: 0.5em;
    }
  }
  section[data-name="information"] {
    > h1 {
      margin: 0.1em 0;
      font-size: 4em;
    }
  }
  section[data-name="workHistory"],
  section[data-name="projects"],
  section[data-name="awards"] {
    li + li {
      margin-top: 1em;
    }
    li {
      h3 {
        border-bottom: 1px solid #999;
        padding-bottom: 0.3em;
        margin-bottom: 0.3em;
      }
    }
  }
  section[data-name="education"] {
    li {
      line-height: 1.5;
    }
  }
  section[data-name="contacts"] {
    td:first-child {
      padding-right: 1em;
    }
  }
  .ContentShow {
    height: 100px;
    background: #62becb;
    padding: 40px 32px;
    .ContentTitle {
      color: #f4f4e9;
      .ContentAngle {
        float: right;
        margin-right: 24px;
        font-size: 14px;
      }
    }
  }
  .ResumeFooter {
    background: #cfcfd1;
    .Copyright {
      padding: 40px;
      font-size: 12px;
      .icon {
        font-size: 18px;
        margin-top: -16px;
        float: right;
      }
    }
  }
}
</style>