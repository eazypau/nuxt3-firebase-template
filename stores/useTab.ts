import { defineStore } from "pinia";

export const useTabStore = defineStore("tabControl", {
  state() {
    return {
      currentTab: "DisplayDocs" as string,
    };
  },
  actions: {
    changeTab(newTab: string) {
      this.currentTab = newTab;
    },
  },
});
