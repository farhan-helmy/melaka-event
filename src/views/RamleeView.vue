<template>
  <div>
    <div v-if="ramlee1" class="card w-96 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img src="@/assets/pramlee.jpg" alt="Shoes" class="rounded-xl" />
      </figure>

      <div class="card-body items-center text-center">
        <div class="tooltip tooltip-open" data-tip="Powered by Amazon Polly">
          <button class="btn btn-circle" @click="playAudio">Play</button>
        </div>
        <button class="btn" @click="home">Home</button>
        <h2 class="card-title">P. Ramlee</h2>
        <p>
          P.Ramlee was born on 22 March 1929 (Wednesday) / 10 Syawal 1347H at
          40A, Jalan Counter Hall (Jalan P.Ramlee) Penang. P.Ramlee received his
          education from Sekolah Melayu Kampong Jawa (1935 – 1938), Francis
          Light English School (1939), Japanese Navy School (Kaigun Gaiko) (1942
          – 1944) and Penang Free School (1947).He married Junaidah binti Daeng
          Harris and blessed with two (2) sons, Nasir and Arfan but divorced in
          1953.
        </p>
      </div>
    </div>
    <div v-if="ramlee2" class="card w-96 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img src="@/assets/pramlee2.jpg" alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <button class="btn" @click="home">Home</button>
        <h2 class="card-title">P. Ramlee</h2>
        <p>
          He won 2nd place in the North Malaya Keroncong Competition. He was a
          member of the Terona Sakampong Band, Keroncong Indonesia Youth Band,
          Bintang Sore Band and Mutiara Orchestra. He began his career at Jalan
          Ampas Studio, Singapore. His first screen appearance was as supporting
          actor in "Chinta”. His third spouse was Salmah binti Ismail (Saloma)
          without child.
        </p>
      </div>
    </div>
    <div v-if="ramlee3" class="card w-96 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img src="@/assets/pramlee3.jpg" alt="Shoes" class="rounded-xl" />
      </figure>

      <div class="card-body items-center text-center">
        <button class="btn btn-circle" @click="home">Home</button>
        <h2 class="card-title">P. Ramlee</h2>
        <p>
          He was awarded the Ahli Mangku Negara (AMN) Medal. He moved from
          Singapore to Kuala Lumpur to carry on his career in entertainment at
          the Merdeka Studio, Hulu Kelang, Kuala Lumpur. On 29 May 1973, he died
          at the age of 44 from a heart attack and was buried at Jalan Ampang
          Muslim Cemetery, Kuala Lumpur. He was posthumously awarded the Bintang
          Kebesaran Darjah Panglima Setia Mahkota (PSM) which carries the
          honorific title of Tan Sri.
        </p>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import router from "@/router";
export default {
  name: "RamleeView",
  setup() {
    const animation = ref(true);
    const ramlee1 = ref(true);
    const ramlee2 = ref(false);
    const ramlee3 = ref(false);

    const playAudio = async () => {
      const pramlee =
        "https://puspanita-aws-poc.s3.ap-southeast-1.amazonaws.com/mp3/speech_20220309162400976.mp3?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaDmFwLXNvdXRoZWFzdC0xIkgwRgIhAIewRLDMcmjQ6QISBUaEPmqgpd2ddOg76378gUB%2FsLKSAiEAsLxYRtUC1lO%2BeeW6nTdPDKXks9jlBIK3n7xgp7j4XBkqhAMIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxMTI0MzMyMTI1MjciDNi8gTXJOyBrzDuljyrYAnJNeMqsDkU1vw1bK24lUTKKDI9jtGnga0f4bj%2BZq%2BLLh8pr%2BS5hTwh8VU%2BGGZR39j7ysLfgCRVRbHq2FkrKEZ8WiBny9Hw%2F8cOONhdLiJIZopE6Ki2CsXzIf%2BfaHJUUgGQwPk7yZwdNNh79%2Bia1JNC9cBp37GaZGRpc6Luv3aHaK6Bs7azNuL5fvK5yhFqyPj%2FK5MFcGfKIMOl%2FNK7IY6Izkm5N1Lx8hu2XrD2c9BQ3BRavnSp1CINHomdinDrTkwNYkxJs0eIXEAyO2TvLaOlotjLxQX1s%2Fn%2FXTwF53GuM2pOd8KMqAiy%2FsIQTz%2BLDhcOuIzE2JUZpv%2FP2Xf8hlXCp7ChOMFm9mnR4qZVDglIe76tUXAgQHOW5rZ8rX9a2TGWzFjcpt9SyASortSYyGEazQVjMSjcjcqZuMlYsHOf1ZsJCc9r7w%2F6SQQkiI5vBbVHY3FlaP8V7MLS9xpEGOrICIjHxUn%2B%2BEqb0TQYaVt4sdnIlNf1HJtJ5fihOtUBISlFIJadmQ4lf1ypHEeD0zjDN1KAr%2B8KsiaVsp2YF%2FH5vEh8vxg4IMoUCX9vM08VkIjkfrzJcO6LCFWiIh6xuBXbC2bkAwAMQkUKbxC5USuVs606hVZuCF3dAB7rEi9DMZW87eEfdqyI5QkAB1GN3LjvZi5%2BeR7d%2BQad8pH3BtPk%2FS19rVgTiwH0TA5ZFTHQVtSGKYOijAdRNpmta%2BNorJX0Nt26ILaInbogMlgN8He72gOCzbdkb6W1EJPbnLJ01dwwHAvoN9jWcuIDjodx2WCYGRVmRzsvO1%2F%2FxAOaTKx2Vo8pOD30xDWMLKIe7YnLa73Hk6kl4h5mgiJxhFIvNqr2nbPFOCem1LrwyRjaUs9ENAwMc&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220316T082548Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=ASIARULMKVRXYIK4EQII%2F20220316%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=c271e3a1eaeeda43e277fb140ff59cbd87a3c329d8bf8797e6f63d3b95778d15";

      let sound = new Audio(pramlee);
      sound.type = "audio/mpeg";

      sound.play();
    };

    const home = async () => {
      router.push("/");
    };
    onMounted(() => {
      const stopAnimate = () => {
        setTimeout(() => {
          animation.value = false;
        }, 3000);
      };

      const changeSlide = () => {
        setTimeout(() => {
          ramlee1.value = false;
          ramlee2.value = true;
        }, 20000);
      };

      const changeSlide2 = () => {
        setTimeout(() => {
          ramlee2.value = false;
          ramlee3.value = true;
        }, 30000);
      };

      stopAnimate();
      changeSlide();
      changeSlide2();
    });

    return {
      animation,
      ramlee1,
      ramlee2,
      ramlee3,
      playAudio,
      home,
    };
  },
};
</script>

<style>
</style>