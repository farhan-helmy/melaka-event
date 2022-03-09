<template>
  <div class="mockup-phone">
    <div class="camera"></div>
    <div class="display">
      <div class="artboard artboard-demo phone-1">
        <label class="swap swap-flip text-9xl">
          <!-- this hidden checkbox controls the state -->
          <input type="checkbox" />

          <div class="swap-on">😈</div>
          <div class="swap-off">😇</div>
        </label>
        <h3 class="text-3xl font-bold text-indigo-500 animate-pulse">Puspanita</h3>

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
    nextPage(){
      this.$router.push('/camera')
    }
  }
};
</script>
