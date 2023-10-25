<script setup lang="ts">
  import { ref } from "vue";
  import { useNuxtApp } from "nuxt/app";

  //firebase
  import { createUserWithEmailAndPassword } from "firebase/auth";
  import { useTabStore } from "#imports";

  //define
  const nuxtApp = useNuxtApp();
  const tabStore = useTabStore();
  const email = ref("");
  const password = ref("");

  const createAccount = async (e: Event) => {
    e.preventDefault();
    if (!email.value || !password.value) {
      return;
    }
    try {
      console.log("creating");
      await createUserWithEmailAndPassword(
        nuxtApp.$auth,
        email.value,
        password.value
      );
      tabStore.changeTab("DisplayDocs");
    } catch (error) {
      console.error(error);
    }
  };
</script>
<template>
  <form
    class="max-w-xl mx-auto py-5 flex flex-col gap-3"
    @submit="createAccount"
  >
    <h1 class="text-4xl font-extrabold text-center mb-3">Register</h1>
    <input
      type="email"
      name="email"
      id="email"
      placeholder="Email"
      autocomplete="off"
      required
      v-model="email"
    />
    <input
      type="password"
      name="password"
      id="password"
      placeholder="**********"
      required
      v-model="password"
    />
    <button
      type="submit"
      class="bg-slate-500 text-white py-2 px-5 rounded-lg cursor-pointer"
    >
      Register
    </button>
  </form>
</template>
<style scoped>
  input {
    @apply border rounded p-2;
  }
</style>
