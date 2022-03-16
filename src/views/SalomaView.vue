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
        <h2 class="card-title">Saloma</h2>
        <p>
          Saloma was born on 22 January 1935 in Pasir Panjang, in Straits
          Settlement Singapore as Salmah binti Ismail to Ismail Osman and Umi
          Kalsom Mahban. She had seven siblings and was the third daughter in
          her family. She had an older sister, Siti Mariam binti Ismail, who
          was an actress, a younger paternal half-sister, Aminah Ismail (stage
          name Mimi Loma) and Jasmaniah Ismail, who is also a singer.
        </p>
      </div>
    </div>
    <div v-if="saloma2" class="card w-96 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img src="@/assets/saloma2.png" alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">Saloma</h2>
        <p>
          Saloma became the wife to the film actor, director, singer,
          songwriter, composer and producer Tan Sri Datuk Amar P. Ramlee when
          they got married in 1961. During her childhood, Saloma enjoyed
          singing. She would usually share her thoughts of becoming a singer
          with her sister, Mariani. At the early age of five, Saloma was already
          singing with the local street bands. From there, her desire to become
          a singer grew even more.
        </p>
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
          Saloma's parents later divorced. Subsequently, Mariani and her
          followed their father to Tanjung Karang, Malaysia. Both of them then
          lived with their father and stepmother. During the World War II, they
          used to help their father in the paddy fields. Unable to cope with the
          changed situation, both of them ran back to Singapore without their
          father. After that, Saloma and her sister Mariani lived with their
          mother and stepfather, a person named Mum Yusoff. Mum Yusoff was a
          musician with a local keroncong party called The Singapore Boys that
          was contracted to perform at a club called The New World Cabaret. As
          Saloma had always talked about being a singer, her stepfather brought
          her to the cabaret one night and introduced her to the audience. She
          was then asked to perform the song "Seven Lonely Days" by Georgia
          Gibbs. Her singing style and voice impressed the audience there. She
          continued with a number of other songs and this was the beginning of
          her career as a singer. She was only 13 years old.
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
  name: "SalomaView",
  setup() {
    const animation = ref(true);
    const saloma1 = ref(true);
    const saloma2 = ref(false);
    const saloma3 = ref(false);

    const playAudio = async () => {
      const saloma ="https://puspanita-aws-poc.s3.ap-southeast-1.amazonaws.com/mp3/speech_20220309162750056.mp3?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaDmFwLXNvdXRoZWFzdC0xIkgwRgIhAIewRLDMcmjQ6QISBUaEPmqgpd2ddOg76378gUB%2FsLKSAiEAsLxYRtUC1lO%2BeeW6nTdPDKXks9jlBIK3n7xgp7j4XBkqhAMIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxMTI0MzMyMTI1MjciDNi8gTXJOyBrzDuljyrYAnJNeMqsDkU1vw1bK24lUTKKDI9jtGnga0f4bj%2BZq%2BLLh8pr%2BS5hTwh8VU%2BGGZR39j7ysLfgCRVRbHq2FkrKEZ8WiBny9Hw%2F8cOONhdLiJIZopE6Ki2CsXzIf%2BfaHJUUgGQwPk7yZwdNNh79%2Bia1JNC9cBp37GaZGRpc6Luv3aHaK6Bs7azNuL5fvK5yhFqyPj%2FK5MFcGfKIMOl%2FNK7IY6Izkm5N1Lx8hu2XrD2c9BQ3BRavnSp1CINHomdinDrTkwNYkxJs0eIXEAyO2TvLaOlotjLxQX1s%2Fn%2FXTwF53GuM2pOd8KMqAiy%2FsIQTz%2BLDhcOuIzE2JUZpv%2FP2Xf8hlXCp7ChOMFm9mnR4qZVDglIe76tUXAgQHOW5rZ8rX9a2TGWzFjcpt9SyASortSYyGEazQVjMSjcjcqZuMlYsHOf1ZsJCc9r7w%2F6SQQkiI5vBbVHY3FlaP8V7MLS9xpEGOrICIjHxUn%2B%2BEqb0TQYaVt4sdnIlNf1HJtJ5fihOtUBISlFIJadmQ4lf1ypHEeD0zjDN1KAr%2B8KsiaVsp2YF%2FH5vEh8vxg4IMoUCX9vM08VkIjkfrzJcO6LCFWiIh6xuBXbC2bkAwAMQkUKbxC5USuVs606hVZuCF3dAB7rEi9DMZW87eEfdqyI5QkAB1GN3LjvZi5%2BeR7d%2BQad8pH3BtPk%2FS19rVgTiwH0TA5ZFTHQVtSGKYOijAdRNpmta%2BNorJX0Nt26ILaInbogMlgN8He72gOCzbdkb6W1EJPbnLJ01dwwHAvoN9jWcuIDjodx2WCYGRVmRzsvO1%2F%2FxAOaTKx2Vo8pOD30xDWMLKIe7YnLa73Hk6kl4h5mgiJxhFIvNqr2nbPFOCem1LrwyRjaUs9ENAwMc&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220316T082622Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=ASIARULMKVRXYIK4EQII%2F20220316%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=d715ece5d605aecc1167262f43fabecaaf81e1f6933af14570a58cb9ddea6d7d"
        

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
        }, 20000);
      };

      const changeSlide2 = () => {
        setTimeout(() => {
          saloma2.value = false;
          saloma3.value = true;
        }, 30000);
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