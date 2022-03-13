<template>
  <label class="swap swap-flip text-9xl">
  
  <!-- this hidden checkbox controls the state -->
  <input type="checkbox"/>
  
  <div class="swap-on">😈</div>
  <div class="swap-off">😇</div>
</label>
  <h3 class="text-3xl font-bold text-indigo-500 animate-pulse">Sorry no face detected in our database</h3>

  <div class="btn" @click="nextPage()">Home</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
  methods: {
    nextPage() {
      this.$router.push("/");
    },
  },
};
</script>
