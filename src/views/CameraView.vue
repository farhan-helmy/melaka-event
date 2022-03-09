<template>
  <div>
    <h3 class="text-5xl font-bold text-indigo-500 animate-pulse">Camera</h3>
    <div class="py-4">
      <video
        ref="videoEl"
        autoplay="true"
        playsinline
        @loadedmetadata="detectFace"
      />
    </div>
    <div class="btn" @click="previousPage">Back</div>
  </div>
</template>

<script>
//import * as faceAPI from 'face-api.js'
import { reactive, ref, onMounted } from "vue";
import * as faceAPI from "face-api.js";
import router from "@/router";

export default {
  setup() {
      const initParams = reactive({
      modelUri: '/models',
      option: new faceAPI.SsdMobilenetv1Options({ minConfidence: 0.5 })
    })
    const constraints = reactive({
      video: {
        width: {
          min: 320,
          ideal: 1280,
          max: 1920,
        },
        height: {
          min: 240,
          ideal: 720,
          max: 1080,
        },
        frameRate: {
          min: 15,
          ideal: 30,
          max: 60,
        },
        facingMode: "environment",
      },
    });
    const videoEl = ref(null);

    const previousPage = () => {
      router.push("/");
    };

    const detectFace = async () => {
      const result = await faceAPI.detectAllFaces(videoEl.value);
      if (result) {
        console.log(result);
        alert('face detected')
      }
      setTimeout(() => detectFace());
    };
    onMounted(() => {
        const initModel = async () => {
        await faceAPI.nets.ssdMobilenetv1.loadFromUri(initParams.modelUri)
        await faceAPI.nets.ageGenderNet.loadFromUri(initParams.modelUri)
      }
      /**
       * startup webcam
       * @function
       */
      const startStream = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia(constraints);
          videoEl.value.srcObject = stream;
        } catch (error) {
          console.error(error.message);
        }
      };
        initModel()
      startStream();
    });
    return {
      videoEl,
      previousPage,
      detectFace
    };
  },
};
</script>

<style scoped>
</style>