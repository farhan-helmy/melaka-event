<template>
  <label class="swap swap-flip text-9xl">
    <!-- this hidden checkbox controls the state -->
    <input type="checkbox" />

    <div class="swap-on">
      <div class="w-32">
        <img src="@/assets/logo2.png" alt="" />
      </div>
    </div>

    <div class="swap-off">
      <div class="w-32">
        <img src="@/assets/logo_puspanita.png" alt="" />
      </div>
    </div>
  </label>
  <h3 class="text-5xl font-bold text-indigo-500 animate-pulse">Puspanita</h3>

  <div class="btn" @click="nextPage()">Click to start</div>

  <p>By:</p>
  <img
    src="@/assets/logoarkib.png"
    alt="Shoes"
    class="rounded-xl object-scale-down h-48 w-96"
  />
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
  methods: {
    nextPage() {
      this.$router.push("/camera");
    },
  },
};
</script>
