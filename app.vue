<script>
import { ref } from 'vue';
import { useNuxtApp } from 'nuxt/app';

//store
import { useUserStore } from './stores/useUser';

//firebase
import { onAuthStateChanged } from 'firebase/auth';

//utils
import { userInfo } from './composables/user';

export default {
  beforeMount() {
    const nuxtApp = useNuxtApp()
    const userStore = useUserStore()

    const unsub = onAuthStateChanged(nuxtApp.$auth, (user) => {
      if (user) {
        userInfo.setUserId(user.uid)
        userStore.updateLoginStatus(true)
      } else {
        userInfo.reset()
        userStore.updateLoginStatus(false)
      }
      this.loading = false
    })

    return unsub
  },
  setup() {
    const loading = ref(true)

    return {
      loading
    }
  }
}
</script>
<template>
  <div>
    <div v-if="!loading">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>
