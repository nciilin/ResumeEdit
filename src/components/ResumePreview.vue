<template>
  <div class="ResumePreview">
    <div class="ContentHeader">
      <p class="ContentTitle clearfix">
        Renter Resumer, 8SK4R5
        <span class="ContentAngle">angle</span>
      </p>
    </div>
    <div class="ContentShow">
      <section class="ContentEdit" data-name="information" v-show="resume.information">
        <h1>{{resume.information.name}}</h1>
        <h1>{{resume.information.title}}</h1>
        <p>
          <small>{{resume.information.city}}</small>
          <small>{{resume.information.birth}}</small>
        </p>
        <div class="StickyNotes">
          <ul>
            <li>
              INFORMATION
              <svg class="icon">
                <use xlink:href="#icon-dagou" />
              </svg>
            </li>
            <li>
              COMPANY
              <svg class="icon">
                <use xlink:href="#icon-dagou" />
              </svg>
            </li>
            <li>
              SCHOOL
              <svg class="icon">
                <use xlink:href="#icon-dagou" />
              </svg>
            </li>
            <li>
              PROJECT
              <svg class="icon">
                <use xlink:href="#icon-dagou" />
              </svg>
            </li>
            <li>
              AWARD
              <svg class="icon">
                <use xlink:href="#icon-dagou" />
              </svg>
            </li>
            <li>
              CONTACT
              <svg class="icon">
                <use xlink:href="#icon-dagou" />
              </svg>
            </li>
          </ul>
        </div>
      </section>
    </div>

    <div class="Contentdetail">
      <section data-name="workHistory" v-show="resume.workHistory">
        <h1>工作经历</h1>
        <ol>
          <li v-for="item in resume.workHistory">
            <h3>{{item.company}}</h3>
            <p v-show="item.content">{{item.content}}</p>
          </li>
        </ol>
      </section>

      <section data-name="education" v-show="resume.education">
        <h1>毕业院校</h1>
        <ol>
          <li v-for="item in resume.education">
            <h3>
              {{item.school}}
              <span v-show="item.degree">- {{item.degree}}</span>
              <span v-show="item.duration">- {{item.duration}}</span>
            </h3>
          </li>
        </ol>
      </section>

      <section data-name="projects" v-show="resume.projects">
        <h1>项目经历</h1>
        <ol>
          <li v-for="item in resume.projects">
            <h3>{{item.name}}</h3>
            <p v-show="item.content">{{item.content}}</p>
          </li>
        </ol>
      </section>

      <section data-name="awards" v-show="resume.awards">
        <h1>获奖情况</h1>
        <ol>
          <li v-for="item in resume.awards">
            <h3>{{item.name}}</h3>
            <p v-show="item.content">{{item.content}}</p>
          </li>
        </ol>
      </section>

      <section data-name="contacts" v-show="resume.contacts">
        <h1>联系方式</h1>
        <table>
          <tr v-for="item in resume.contacts">
            <td>{{item.phone}}</td>
            <td v-show="item.email">{{item.email}}</td>
          </tr>
        </table>
      </section>
    </div>

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
  font: 12px/1.5 Tahoma, Helvetica, Arial, "宋体", sans-serif;
  background: white;
  overflow: auto;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
  padding: 1em;
  color: #333;
  line-height: 1.2;
  .ContentHeader {
    height: 100px;
    background: #62becb;
    padding: 40px 48px;
    .ContentTitle {
      color: #f4f4e9;
      .ContentAngle {
        float: right;
        margin-right: 64px;
        font-size: 14px;
      }
    }
  }
  .ContentShow {
    section {
      padding: 24px 48px;
      h1 {
        font-size: 36px;
      }
      ol {
        padding: 16px 0;
        li {
          list-style: none;
        }
      }
      .StickyNotes {
        width: 240px;
        height: 240px;
        background: #0b98a8;
        position: absolute;
        top: 160px;
        right: 120px;
        ul {
          list-style: none;
          padding: 40px 0;
          li {
            text-align: right;
            color: #d6e3e6;
            padding-right: 28px;
            font-size: 21px;
            .icon {
              fill: white;
              font-size: 21px;
            }
          }
        }
      }
    }
    .ContentEdit {
      background: #dedee0;
      padding: 40px 48px;
      height: 320px;
      position: relative;
      h1 {
        font-size: 40px;
      }
      p {
        font-size: 24px;
        padding: 12px 0;
        small:nth-child(2) {
          margin-left: 24px;
        }
      }
      
    }
  }
  .Contentdetail {
    background: #e4e2e5;
    section {
      padding: 24px 48px;
      h1 {
        font-size: 36px;
      }
      table {
        padding: 16px 0;
        tr {
          font-size: 16px;
          td:nth-child(2) {
            padding: 0 14px;
          }
        }
      }
      ol {
        list-style: none;
        li {
          padding: 16px 0;
          font-size: 16px;
        }
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
        float: right;
      }
    }
  }
}
</style>