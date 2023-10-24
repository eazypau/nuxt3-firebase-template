import { defineStore } from "pinia";

export const useUserStore = defineStore("userControl", {
  state() {
    return {
      isLoggedin: false,
    };
  },
  actions: {
    updateLoginStatus(status: boolean) {
      this.isLoggedin = status;
    },
  },
});
