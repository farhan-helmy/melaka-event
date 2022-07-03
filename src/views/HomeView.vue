<template>
  <div class="card w-96">
    <div class="card-body">
      <div class="items-center text-center">
        <label class="swap swap-flip text-9xl">
          <!-- this hidden checkbox controls the state -->
          <input type="checkbox" />

          <div class="w-32">
            <img src="@/assets/aws-logo.png" alt="" />
          </div>
        </label>
        <h3 class="text-5xl font-bold text-indigo-500 animate-pulse">Face Detection</h3>

        <div class="btn" @click="nextPage()">Click to start</div>
      </div>
    </div>
  </div>
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
