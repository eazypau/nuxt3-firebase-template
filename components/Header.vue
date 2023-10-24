<script setup lang="ts">
import { signOut } from 'firebase/auth';
import { useNuxtApp } from 'nuxt/app';
import { useTabStore } from '~/stores/useTab';
import { useUserStore } from "~/stores/useUser"

const userStore = useUserStore()
const tabStore = useTabStore()
const nuxtApp = useNuxtApp()

const updatetab = (name: string) => {
    tabStore.changeTab(name)
}
const signOutUser = async () => {
    await signOut(nuxtApp.$auth)
}
</script>

<template>
    <nav class="py-3 px-40 flex justify-between gap-3 bg-slate-300">
        <button class="bg-slate-50 py-2 px-5 rounded-lg cursor-pointer" @click="updatetab('DisplayDocs')">Home</button>
        <div v-if="!userStore.isLoggedin" class="space-x-3">
            <button class="bg-slate-50 py-2 px-5 rounded-lg cursor-pointer" @click="updatetab('Login')">Login</button>
            <button class="bg-slate-50 py-2 px-5 rounded-lg cursor-pointer" @click="updatetab('Register')">Register</button>
        </div>
        <div v-else>
            <button class="bg-slate-50 py-2 px-5 rounded-lg cursor-pointer" @click="signOutUser">Logout</button>
        </div>
    </nav>
</template>