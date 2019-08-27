import Vuex from 'vuex'
import Vue from 'vue'
import objectPath from "object-path"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selected: "information",
    user: {
      id: '',
      username: ''
    },
    resume: {
      config: [
        { field: "information", icon: "information" },
        { field: "workHistory", icon: "company" },
        { field: "education", icon: "school" },
        { field: "projects", icon: "project" },
        { field: "awards", icon: "award" },
        { field: "contacts", icon: "contact" }
      ],
      information: {
        name: "林某某",
        title: '首席装逼师',
        city: "深圳",
        birth: "1995-01-01"
      },
      workHistory: [{ company: "喜羊羊联盟", content: "吃喝玩乐" }],
      education: [{ school: "羊羊村", degree: "大长老", duration: "2XXX" }],
      projects: [{ name: "反击战", content: "对抗灰太狼" }],
      awards: [{ name: "儿童动画收视冠军", content: "00后大概都看过" }],
      contacts: [{ phone: "12333XXXXX", email: "67412@qq.com" }]
    }
  },
  mutations: {
    initState(state, payload) {
      Object.assign(state, payload)
    },
    switchTab(state, payload) {
      state.selected = payload
      localStorage.setItem('state', JSON.stringify(state))
    },
    updateResume(state, { path, value }) {
      objectPath.set(state.resume, path, value)
      localStorage.setItem('state', JSON.stringify(state))
    },
    setUser(state, payload) {
      Object.assign(state.user, payload)
      console.log(state.user)
    },
    removeUser(state) {
      state.user.id = ''
    }
  }
})