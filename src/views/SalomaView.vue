<template>
  <div>
    <div v-if="saloma1" class="card w-96 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img src="@/assets/saloma1.jpg" alt="Shoes" class="rounded-xl" />
      </figure>

      <div class="card-body items-center text-center">
        <div class="tooltip tooltip-open" data-tip="Powered by Amazon Polly">
          <button class="btn btn-circle" @click="playAudio">Play</button>
        </div>
        <button class="btn" @click="home">Home</button>
        <h2 class="card-title">Saloma</h2>
        <p>
          She was born on 22 January 1935 in Pasir Panjang, Singapore. She
          started her career as a singer when she was 13 years old. She started
          acting in her first film entitled “Pelangi”. She married A.R.Tompel
          but then divorced. They were blessed with a son, Armali. She married
          P.Ramlee on 31 October 1961.
        </p>
        <p>
          Sumber:
        </p>
         <img src="@/assets/logoarkib.png" alt="Shoes" class="rounded-xl object-scale-down h-48 w-96" />
      </div>
    </div>
    <div v-if="saloma2" class="card w-96 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img src="@/assets/saloma2.png" alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <button class="btn" @click="home">Home</button>
        <h2 class="card-title">Saloma</h2>
        <p>
          Duli Yang Maha Mulia Seri Paduka Baginda Yang di-Pertuan Agong the
          5th, Sultan Abdul Halim Mu'adzam Shah ibni Al-Marhum Sultan Badlishah
          gracefully bestowed Ahli Mangku Negara (AMN) Medal to Saloma on 5 June
          1974. She was recognised as the First National Songbird by the
          Association of Homeland Singers, Musicians and Songwriters (PAPITA).
        </p>
         <p>
          Sumber:
        </p>
         <img src="@/assets/logoarkib.png" alt="Shoes" class="rounded-xl object-scale-down h-48 w-96" />
      </div>
    </div>
    <div v-if="saloma3" class="card w-96 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img src="@/assets/saloma3.jpg" alt="Shoes" class="rounded-xl" />
      </figure>

      <div class="card-body items-center text-center">
        <button class="btn btn-circle" @click="home">Home</button>
        <h2 class="card-title">Saloma</h2>
        <p>
          She died on 25 April 1983 at Assunta Hospital, Petaling Jaya at the
          age of 48 due to liver failure caused by jaundice and was buried at
          the Jalan Ampang Muslim Cemetery, Kuala Lumpur.
        </p>
         <p>
          Sumber:
        </p>
         <img src="@/assets/logoarkib.png" alt="Shoes" class="rounded-xl object-scale-down h-48 w-96" />
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import router from "@/router";
export default {
  name: "SalomaView",
  setup() {
    const animation = ref(true);
    const saloma1 = ref(true);
    const saloma2 = ref(false);
    const saloma3 = ref(false);

    const playAudio = async () => {
      const saloma =
        "https://puspanita-aws-poc.s3.ap-southeast-1.amazonaws.com/mp3/speech_20220309162750056.mp3?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaDmFwLXNvdXRoZWFzdC0xIkgwRgIhAIewRLDMcmjQ6QISBUaEPmqgpd2ddOg76378gUB%2FsLKSAiEAsLxYRtUC1lO%2BeeW6nTdPDKXks9jlBIK3n7xgp7j4XBkqhAMIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxMTI0MzMyMTI1MjciDNi8gTXJOyBrzDuljyrYAnJNeMqsDkU1vw1bK24lUTKKDI9jtGnga0f4bj%2BZq%2BLLh8pr%2BS5hTwh8VU%2BGGZR39j7ysLfgCRVRbHq2FkrKEZ8WiBny9Hw%2F8cOONhdLiJIZopE6Ki2CsXzIf%2BfaHJUUgGQwPk7yZwdNNh79%2Bia1JNC9cBp37GaZGRpc6Luv3aHaK6Bs7azNuL5fvK5yhFqyPj%2FK5MFcGfKIMOl%2FNK7IY6Izkm5N1Lx8hu2XrD2c9BQ3BRavnSp1CINHomdinDrTkwNYkxJs0eIXEAyO2TvLaOlotjLxQX1s%2Fn%2FXTwF53GuM2pOd8KMqAiy%2FsIQTz%2BLDhcOuIzE2JUZpv%2FP2Xf8hlXCp7ChOMFm9mnR4qZVDglIe76tUXAgQHOW5rZ8rX9a2TGWzFjcpt9SyASortSYyGEazQVjMSjcjcqZuMlYsHOf1ZsJCc9r7w%2F6SQQkiI5vBbVHY3FlaP8V7MLS9xpEGOrICIjHxUn%2B%2BEqb0TQYaVt4sdnIlNf1HJtJ5fihOtUBISlFIJadmQ4lf1ypHEeD0zjDN1KAr%2B8KsiaVsp2YF%2FH5vEh8vxg4IMoUCX9vM08VkIjkfrzJcO6LCFWiIh6xuBXbC2bkAwAMQkUKbxC5USuVs606hVZuCF3dAB7rEi9DMZW87eEfdqyI5QkAB1GN3LjvZi5%2BeR7d%2BQad8pH3BtPk%2FS19rVgTiwH0TA5ZFTHQVtSGKYOijAdRNpmta%2BNorJX0Nt26ILaInbogMlgN8He72gOCzbdkb6W1EJPbnLJ01dwwHAvoN9jWcuIDjodx2WCYGRVmRzsvO1%2F%2FxAOaTKx2Vo8pOD30xDWMLKIe7YnLa73Hk6kl4h5mgiJxhFIvNqr2nbPFOCem1LrwyRjaUs9ENAwMc&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220316T082622Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=ASIARULMKVRXYIK4EQII%2F20220316%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=d715ece5d605aecc1167262f43fabecaaf81e1f6933af14570a58cb9ddea6d7d";

      let sound = new Audio(saloma);
      sound.type = "audio/mfpeg";

      sound.play();
    };

    const home = async () => {
      //sound.stop();
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
          saloma1.value = false;
          saloma2.value = true;
        }, 5000);
      };

      const changeSlide2 = () => {
        setTimeout(() => {
          saloma2.value = false;
          saloma3.value = true;
        }, 10000);
      };

      stopAnimate();
      changeSlide();
      changeSlide2();
    });

    return {
      animation,
      saloma1,
      saloma2,
      saloma3,
      playAudio,
      home,
    };
  },
};
</script>

<style>
</style>