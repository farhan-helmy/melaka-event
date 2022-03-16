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
        <h2 class="card-title">P. Ramlee</h2>
        <p>
          Tan Sri Datuk Amar Teuku Zakaria Bin Teuku Nyak Puteh (later Ramlee
          Bin Puteh) (22 March 1929 – 29 May 1973), better known by his stage
          name P. Ramlee (Puteh Ramlee), was a Malaysian actor, filmmaker,
          musician, and composer famous in both modern-day Singapore, Malaysia,
          Indonesia and Southern Thailand. Due to his contributions to the film
          and music industry and his literary work, which began with his acting
          debut in Singapore in 1948, to the height of his career and then later
          in Malaysia in 1964 to his decline and death, he is regarded as a
          prominent icon of Malay entertainment. His popularity has reached as
          far as Brunei, Indonesia, as well as in Hong Kong and Japan.
        </p>
      </div>
    </div>
    <div v-if="ramlee2" class="card w-96 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img src="@/assets/pramlee2.jpg" alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">P. Ramlee</h2>
        <p>
          Ramlee was born on 22 March 1929 to Teuku Nyak Puteh Bin Teuku Karim
          (1902–1955) and Che Mah Binti Hussein (1904–1967). His father, Teuku
          Nyak Puteh, who was a descendant of a wealthy family in Aceh,
          travelled from Lhokseumawe in Aceh, Indonesia, to settle in Penang,
          where he married Ramlee’s mother, who is hailed from Kubang Buaya,
          Butterworth.
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
          Ramlee received his education from the Sekolah Melayu Kampung Jawa
          (Kampung Jawa Malay School), Francis Light English School and then to
          Penang Free School; in all he was registered as "Ramlee" by his
          father, because his name Teuku Zakaria was not suitable with other
          children at that time. Reportedly a reluctant and naughty student,
          Ramlee was nevertheless talented and interested in music and football.
          His studies at the Penang Free School were interrupted by the Japanese
          occupation from 1942 to 1945, during which he enrolled in the Japanese
          navy school (Kaigun Gakko). He also learnt the basics of music and to
          sing Japanese songs during this period with his teacher known as
          Hirahe-san. When the war ended, he took music lessons that enabled him
          to read musical notations.[3]
        </p>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import router from '@/router';
export default {
  name: "RamleeView",
  setup() {
    const animation = ref(true);
    const ramlee1 = ref(true);
    const ramlee2 = ref(false);
    const ramlee3 = ref(false);

    const playAudio = async () => {
      const pramlee = "https://puspanita-aws-poc.s3.ap-southeast-1.amazonaws.com/mp3/speech_20220309162400976.mp3?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaDmFwLXNvdXRoZWFzdC0xIkgwRgIhAIewRLDMcmjQ6QISBUaEPmqgpd2ddOg76378gUB%2FsLKSAiEAsLxYRtUC1lO%2BeeW6nTdPDKXks9jlBIK3n7xgp7j4XBkqhAMIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxMTI0MzMyMTI1MjciDNi8gTXJOyBrzDuljyrYAnJNeMqsDkU1vw1bK24lUTKKDI9jtGnga0f4bj%2BZq%2BLLh8pr%2BS5hTwh8VU%2BGGZR39j7ysLfgCRVRbHq2FkrKEZ8WiBny9Hw%2F8cOONhdLiJIZopE6Ki2CsXzIf%2BfaHJUUgGQwPk7yZwdNNh79%2Bia1JNC9cBp37GaZGRpc6Luv3aHaK6Bs7azNuL5fvK5yhFqyPj%2FK5MFcGfKIMOl%2FNK7IY6Izkm5N1Lx8hu2XrD2c9BQ3BRavnSp1CINHomdinDrTkwNYkxJs0eIXEAyO2TvLaOlotjLxQX1s%2Fn%2FXTwF53GuM2pOd8KMqAiy%2FsIQTz%2BLDhcOuIzE2JUZpv%2FP2Xf8hlXCp7ChOMFm9mnR4qZVDglIe76tUXAgQHOW5rZ8rX9a2TGWzFjcpt9SyASortSYyGEazQVjMSjcjcqZuMlYsHOf1ZsJCc9r7w%2F6SQQkiI5vBbVHY3FlaP8V7MLS9xpEGOrICIjHxUn%2B%2BEqb0TQYaVt4sdnIlNf1HJtJ5fihOtUBISlFIJadmQ4lf1ypHEeD0zjDN1KAr%2B8KsiaVsp2YF%2FH5vEh8vxg4IMoUCX9vM08VkIjkfrzJcO6LCFWiIh6xuBXbC2bkAwAMQkUKbxC5USuVs606hVZuCF3dAB7rEi9DMZW87eEfdqyI5QkAB1GN3LjvZi5%2BeR7d%2BQad8pH3BtPk%2FS19rVgTiwH0TA5ZFTHQVtSGKYOijAdRNpmta%2BNorJX0Nt26ILaInbogMlgN8He72gOCzbdkb6W1EJPbnLJ01dwwHAvoN9jWcuIDjodx2WCYGRVmRzsvO1%2F%2FxAOaTKx2Vo8pOD30xDWMLKIe7YnLa73Hk6kl4h5mgiJxhFIvNqr2nbPFOCem1LrwyRjaUs9ENAwMc&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220316T082548Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=ASIARULMKVRXYIK4EQII%2F20220316%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=c271e3a1eaeeda43e277fb140ff59cbd87a3c329d8bf8797e6f63d3b95778d15"

      let sound = new Audio(pramlee);
      sound.type = "audio/mpeg";

      sound.play();
    };

    const home = async () => {
      router.push("/")
    }
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
      home
    };
  },
};
</script>

<style>
</style>