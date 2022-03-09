<template>
  <h1>camera page</h1>
</template>

<script>
export default {
  name: "CameraView",
  components: {},
  created() {},
  methods: {
    openCamera() {},

    createCameraElement() {

      const constraints = (window.constraints = {
        audio: false,
        video: true,
      });

      navigator.mediaDevices
        .getUserMedia(constraints)
        .then((stream) => {
          this.isLoading = false;
          this.$refs.camera.srcObject = stream;
        })
        .catch((error) => {
          this.isLoading = false;
          alert("May the browser didn't support or there is some errors.");
        });
    },

    stopCameraStream() {
      let tracks = this.$refs.camera.srcObject.getTracks();

      tracks.forEach((track) => {
        track.stop();
      });
    },

    takePhoto() {
      if (!this.isPhotoTaken) {
        this.isShotPhoto = true;

        const FLASH_TIMEOUT = 50;

        setTimeout(() => {
          this.isShotPhoto = false;
        }, FLASH_TIMEOUT);
      }

      this.isPhotoTaken = !this.isPhotoTaken;

      const context = this.$refs.canvas.getContext("2d");
      context.drawImage(this.$refs.camera, 0, 0, 450, 337.5);
    },

    downloadImage() {
      const download = document.getElementById("downloadPhoto");
      const canvas = document
        .getElementById("photoTaken")
        .toDataURL("image/jpeg")
        .replace("image/jpeg", "image/octet-stream");
      download.setAttribute("href", canvas);
    },
  },
};
</script>

<style>
</style>