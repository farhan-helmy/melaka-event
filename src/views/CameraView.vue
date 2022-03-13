<template>
  <div>
    <h3 class="text-5xl font-bold text-indigo-500 animate-pulse">Camera</h3>
    <div class="py-4">
      <video ref="videoEl" autoplay="true" playsinline />
      <canvas
        id="photoTaken"
        ref="canvasEl"
        :width="350"
        :height="250"
      ></canvas>
    </div>
    <div class="btn" @click="previousPage">Back</div>
  </div>
</template>

<script>
//import * as faceAPI from 'face-api.js'
import { reactive, ref, onMounted } from "vue";
import router from "@/router";
import axios from "axios";

export default {
  setup() {
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
    const canvasEl = ref(null);

    const previousPage = async () => {
      await endCamera();
      router.push("/");
    };

    const endCamera = async () => {
      let tracks = videoEl.value.srcObject.getTracks();

      tracks.forEach((track) => {
        track.stop();
      });
    };

    onMounted(() => {
      const takePhoto = async () => {
        const context = canvasEl.value.getContext("2d");
        context.drawImage(videoEl.value, 0, 0, 400, 275);
        const canvas = String(
          document.getElementById("photoTaken").toDataURL()
        );
        //window.open(canvas);
        const newcanv = canvas.replace("data:image/png;base64,", "");
        console.log(newcanv);
        const addmore = '"' + newcanv + '"';
        var config = {
          headers: {
            "Content-Type": "text/plain",  
          },
        };
        const result = await axios.post(
          "https://pel5kzx1ac.execute-api.ap-southeast-1.amazonaws.com/default/Rekognize",
          addmore,
          config
        );
        console.log(result.data);
        if (result.data.Name === "No Data") {
          endCamera();
          router.push("/no-detect");
        }else if(result.data.Name === "P Ramlee"){
          endCamera();
          router.push("/pramlee");
        }
        else if(result.data.Name === "Saloma"){
          endCamera();
          router.push("/saloma");
        }else{
          endCamera()
          router.push("/no-detect")
        }
        //console.log(result.data)
      };

      const countTakePhoto = () => {
        setTimeout(async () => {
          await takePhoto();
        }, 4000);
      };
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

      startStream();
      countTakePhoto()
    });
    return {
      videoEl,
      previousPage,
      canvasEl
    };
  },
};
</script>

<style scoped>
</style>