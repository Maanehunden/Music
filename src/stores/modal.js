import { defineStore } from "pinia";

const storeUd = "modal"
export default defineStore(storeUd, {
  state: () => ({
    isOpen: false
  }),
  getters: {
    hiddenClass(state) {
      console.log("IN hiddenClass", state.isOpen);
      return !state.isOpen ? "hidden": ""
    }
  }

});
