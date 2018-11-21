import { shallowMount } from '@vue/test-utils';
import CountVue from '../src/components/CountVue.vue';

describe('HelloTest', () => {
    test('test', () => {
        const wrapper = shallowMount(CountVue);
        expect(wrapper.text()).toBe('Another counter created with a .vue :');
    })
})