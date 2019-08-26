<template>
  <div id="ResumeLeftNav">
    <nav>
      <ol>
        <li
          v-for="(item,index) in resume.config"
          :class="{active: item.field === selected}"
          @click="selected = item.field"
        >
          <svg class="icon">
            <use :xlink:href="`#icon-${item.icon}`" />
          </svg>
          {{item.field}}
          <span class="triangle"></span>
        </li>
      </ol>
    </nav>
    <ol class="panels">
      <li v-for="item in resume.config" v-show="item.field === selected">
          {{resume[item.field]}}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "ResumeLeftNav",
  data() {
    return {
      selected: "profile",
      resume: {
        config: [
          { field: "information", icon: "information" },
          { field: "company", icon: "company" },
          { field: "education", icon: "school" },
          { field: "projects", icon: "project" },
          { field: "awards", icon: "award" },
          { field: "contacts", icon: "contact" }
        ],
        information: {
          name: "",
          city: "",
          title: ""
        },
        company: [],
        education: [],
        projects: [],
        awards: [],
        contacts: []
      }
    };
  }
};
</script>

<style lang="scss" scoped>
#ResumeLeftNav {
  background: #fefeff;
  box-shadow: 10px 7px 6px 0px rgba(242, 242, 242, 0.84);
  display: flex;
  flex-direction: row;
  overflow: auto;
  .logo {
    font-family: Helvetica;
    font-size: 24px;
    padding: 18px;
  }
  > nav {
    width: 160px;
    background: #fefeff;
    color: white;
    > ol {
      > li {
        color: #909da3;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 16px;
        margin-bottom: 16px;
        position: relative;
        .icon {
          font-size: 24px;
          position: absolute;
          top: 12px;
          left: 68px;
        }
        &.active {
          background: #f6fafd;
          color: #54a19b;
          font-weight: bold;
          .triangle {
            width: 0;
            height: 0;
            border-top: 12px solid transparent;
            border-right: 12px solid #1a9285;
            border-bottom: 12px solid #1a9285;
            border-left: 12px solid transparent;
            position: absolute;
            bottom: 0;
            right: 0;
          }
        }
      }
      > .panels {
        flex-grow: 1;
        > li {
          padding: 24px;
        }
      }
    }
  }
}
ol {
  list-style: none;
}
</style>