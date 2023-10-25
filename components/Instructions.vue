<template>
  <section class="max-w-[700px] mx-auto space-y-5">
    <div>
      <p class="text-center text-3xl font-semibold mb-5">
        How to integrate Firebase into Nuxt3:
      </p>
      <ul class="list-decimal list-outside text-lg space-y-2">
        <li>Install Firebase package.</li>
        <li>Setup environment variable. Refer to nuxt config file.</li>
        <li>
          Create firebase plugin in the project. Refer to firebase.client.ts in
          plugins directory.
        </li>
        <li>
          Create authentication pages. Refer to Login.vue and Register.vue in
          components directory.
        </li>
        <li>
          Create a page to get and display documents from Firebase. Refer to
          DisplayDoc.vue in components directory.
        </li>
      </ul>
    </div>
    <div>
      <p class="text-center text-3xl font-semibold mb-5">Resources:</p>
      <a
        href="https://medium.com/codex/using-firebase-in-nuxt3-the-right-way-bebbb6d8c4dd"
        target="_blank"
        class="block text-blue-500 bg-slate-100 border rounded-md p-5 mb-2"
        >Using Firebase in Nuxt3 the Right Way</a
      >
      <p>
        *Kindly note that there may be some errors in the author's example code.
      </p>
    </div>
  </section>
</template>
