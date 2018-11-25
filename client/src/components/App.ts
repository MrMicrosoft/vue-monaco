import { Vue, Component } from 'vue-property-decorator';
import CountVue from './CountVue.vue';

@Component({
  components: { CountVue },
  template: `<div>
    <p>This demo is stupid, but it shows how components are reloaded!!!!</p>
    <CountVue></CountVue>
  </div>`
})
export default class App extends Vue {}
