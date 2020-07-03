import CheckWritingNumberApp from "./CheckWritingNumberApp.vue";
import { mount } from "@vue/test-utils";

describe("CheckWritingNumberApp", () => {
  test("should render content correctly", () => {
    const wrapper = mount(CheckWritingNumberApp, {
      propsData: {
        inputDisabled: true
      }
    });
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.props().inputDisabled).toBeTruthy();
  });
});
