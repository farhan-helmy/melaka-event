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
      const saloma =
        "https://puspanita-aws-poc.s3.ap-southeast-1.amazonaws.com/mp3/speech_20220309162750056.mp3?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0xIkgwRgIhALFraALWg1tzckDem91BoMsve3Y8zJcrGw20QZkA%2FfWLAiEAmhxbPWuKSPnKcxXqn82cJ1e8lXi2lDMP%2Fdaa3RFD2vQq%2BwIIQBAAGgwxMTI0MzMyMTI1MjciDN5lG%2FtJY6VCQIXOayrYAkFOoLm56cF7FkHtJvHrQNWxxfFhhjPFNAKF5eNC4KUgRLgQP9nHgyFKAbuPmwePMwgOkvLHW15yImTwKyj3J1PERM48F%2F5cicqzfZGI71oRtCqrkRbeb6BH4OdqXv%2BobRcHajLnlmYFgszSuRSaRboiluc4dO5Y5ovI9e6P8oO3K2yLil7p8oXTh%2FULCNYw3b0D%2B1sKaMeCfqBwPCizgkgup8H7VT7CBDfaAXO%2Flt%2BmwEBayCwyEGL%2BebcUKISdiig%2FUmawtqBys8Gcm%2BwKObt8ybie8MrayQldK2k2N0qa%2F%2FgUnK9cFhOZGUK7QLGq%2BfZG%2Bd1baA3xI1nq%2FDyXvnFKzU%2F9ZSXbP1K8bxwWFR8aG2CqqZ7uqk1WIxViBIW9OyN0%2FXG151YyoNHVmQq8EicOYhbSFQgSmy0S%2Bv7bZqducyZx6fzbSe4%2Fk34jJkLIYj94pQuMmPR4MKeltpEGOrIC3TOD%2BRAZbW7jI8toMRYn53BGwrmuIZ4JPLLpxTK0WUMj7OuFPGmqZaZ%2FOiF2Soba5l9LOlz1FpcRKQV0Djl%2FZYV5ATlYcBrkEwCuZmKZYXNAxsDfxD%2FMfVQppV0OVIawcVMWFmWC65YXtiXdvAH%2F0Zjb9d40uSOozZ56bXFyA7DW3Fb8z6xUukH8ZaX7Yvbp6esrzHLHzqcqYaOprK1UxWMDh6nRl58yUgsZxM0xSlB0DoJmDXANN8qlEYqxpoZZWxJznUPWI4QvG4D4QZ4tH6WyyJrSctZBLfLuudxD4QRE4rh5pdpfOhRzWKTXOEhASOWI6k3FER7YBU4PN0qRpL1r9h6B6VPl02DzUK2wET%2BCLXPm2NWL8tcojHXQy%2BCs%2BoLN7SvouTIymzf%2By%2BNa%2FttS&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220313T064424Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=ASIARULMKVRX2AKH37G4%2F20220313%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=431c10b4782e7d6c5b84b1646b2ba093fd3231a0ca20d9675f640973ac008e66";

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