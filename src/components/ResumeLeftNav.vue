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
        <div v-if="resume[item.field] instanceof Array">
          <div class="subitem" v-for="(subitem,i) in resume[item.field]">
            <div class="resumeField" v-for="(value,key) in subitem">
              <label>{{key}}</label>
              <input
                type="text"
                :value="value"
                @input="changeResumeField(`${item.field}.${i}.${key}`, $event.target.value)"
              />
            </div>
            <button class="remove">
              <svg class="icon">
                <use xlink:href="#icon-Remove" />
              </svg>
            </button>
            <hr />
            <button class="add">
              <svg class="icon">
                <use xlink:href="#icon-add" />
              </svg>
            </button>
          </div>
        </div>

        <div v-else class="resumeField" v-for="(value,key) in resume[item.field]">
          <label>{{key}}</label>
          <input
            type="text"
            :value="value"
            @input="changeResumeField(`${item.field}.${key}`, $event.target.value)"
          />
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "ResumeLeftNav",
  computed: {
    selected: {
      get() {
        return this.$store.state.selected;
      },
      set(value) {
        return this.$store.commit("switchTab", value);
      }
    },
    resume() {
      return this.$store.state.resume;
    }
  },
  methods: {
    changeResumeField(path, value) {
      this.$store.commit("updateResume", {
        path,
        value
      });
    }
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
          border-radius: 5px;
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
    }
  }
  > .panels {
    flex-grow: 1;
    > li {
      padding: 12px;
      position: relative;
      .remove {
        position: absolute;
        top: 14px;
        right: 10px;
        border: none;
        background: none;
        .icon {
          fill: red;
          width: 24px;
          height: 24px;
        }
      }
      .add {
        border: none;
        background: none;
        .icon {
          fill: #54a19b;
          width: 24px;
          height: 24px;
        }
      }
      .add:hover,
      .remove:hover {
        cursor: pointer;
        transform: scale(1.4);
      }
    }
  }
}
ol {
  list-style: none;
}

.resumeField {
  > label {
    display: block;
  }
  input[type="text"] {
    margin: 16px 0;
    border: 1px solid #ddd;
    box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.25);
    width: 100%;
    height: 40px;
    padding: 0 8px;
  }
}

hr {
  border: none;
  border-top: 1px solid #ddd;
  margin: 24px 0;
}
</style>