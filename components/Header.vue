<script setup lang="ts">
  import { signOut } from "firebase/auth";
  import { useNuxtApp } from "nuxt/app";
  import { useTabStore } from "~/stores/useTab";
  import { useUserStore } from "~/stores/useUser";

  const userStore = useUserStore();
  const tabStore = useTabStore();
  const nuxtApp = useNuxtApp();

  const updatetab = (name: string) => {
    tabStore.changeTab(name);
  };
  const signOutUser = async () => {
    await signOut(nuxtApp.$auth);
  };
</script>

<template>
  <nav class="py-3 px-40 flex justify-between gap-3 bg-slate-300">
    <div class="flex items-center space-x-3">
      <NuxtLink
        to="/"
        @click="updatetab('DisplayDocs')"
        class="bg-slate-50 py-2 px-5 rounded-lg cursor-pointer"
      >
        Home
      </NuxtLink>
      <NuxtLink
        to="/how"
        class="bg-slate-50 py-2 px-5 rounded-lg cursor-pointer"
      >
        How
      </NuxtLink>
    </div>
    <div v-if="!userStore.isLoggedin" class="flex items-center space-x-3">
      <NuxtLink
        to="/"
        @click="updatetab('Login')"
        class="bg-slate-50 py-2 px-5 rounded-lg cursor-pointer"
      >
        Login
      </NuxtLink>
      <NuxtLink
        to="/"
        @click="updatetab('Register')"
        class="bg-slate-50 py-2 px-5 rounded-lg cursor-pointer"
      >
        Register
      </NuxtLink>
    </div>
    <div v-else>
      <button
        class="bg-slate-50 py-2 px-5 rounded-lg cursor-pointer"
        @click="signOutUser"
      >
        Logout
      </button>
    </div>
  </nav>
</template>
