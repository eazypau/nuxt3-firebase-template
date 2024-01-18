<script setup lang="ts">
  import { onBeforeMount, ref } from "vue";
  import type { Ref } from "vue";
  import { useNuxtApp } from "nuxt/app";

  //firebase
  import { collection, getDocs, Timestamp } from "firebase/firestore";

  //lodash
  import orderBy from "lodash/orderBy";

  //utils
  import convertToCurrency from "~/utils/convertToCurrency";

  //interface
  interface Product {
    id: string;
    name: string;
    active: boolean;
    price: string;
    created_at: Timestamp;
  }

  //props

  //define
  const nuxtApp = useNuxtApp();
  const values: Ref<Product[]> = ref([]);

  //function
  const getData = async () => {
    try {
      const collectionName = collection(nuxtApp.$db, "products");
      const data = await getDocs(collectionName);
      data.docs.forEach((doc) => {
        values.value.push(doc.data() as Product);
      });
      values.value = orderBy(values.value, ["createdAt"], ["desc"]);
    } catch (error) {
      console.log(error);
    }
  };

  onBeforeMount(async () => {
    await getData();
  });
</script>

<template>
  <div class="py-7">
    <h1 class="text-4xl font-extrabold text-center mb-7">
      Firebase Read Collection
    </h1>
    <ul v-if="values.length > 0" class="flex gap-5 px-10 justify-center">
      <li v-for="item in values" class="py-3 px-5 bg-slate-200 rounded-md">
        <h2 class="text-2xl font-semibold">{{ item.name }}</h2>
        <p class="text-lg mt-1">{{ convertToCurrency(item.price) }}</p>
      </li>
    </ul>
    <p v-else class="text-center">Loading...</p>
  </div>
</template>
