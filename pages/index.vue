<script setup lang="ts">
import { DisplayDocs, Login, Register } from "#components"

//store
import { useTabStore } from "~/stores/useTab"

const tabStore = useTabStore()

const tabs: { [key: string]: any } = {
    "DisplayDocs": DisplayDocs,
    "Login": Login,
    "Register": Register
}
</script>

<template>
    <section>
        <component :is="tabs[tabStore.currentTab]" />
    </section>
</template>