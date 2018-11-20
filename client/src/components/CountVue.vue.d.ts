import { Vue } from 'vue-property-decorator';
export default class CountVue extends Vue {
    i: number;
    timer?: number;
    text: string;
    mounted(): void;
    destroyed(): void;
}
