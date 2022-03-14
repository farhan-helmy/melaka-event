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
        "https://puspanita-aws-poc.s3.ap-southeast-1.amazonaws.com/mp3/speech_20220309162750056.mp3?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0xIkgwRgIhAJw%2B2RNIcczMuKUSIrZG3sehqcs0PPiKXdWaDQyCoYQKAiEAlbC7v2bjYIEsXiQNRSszj96eWg%2BvOTqTyQE%2BUVFb6owqhQMIUxAAGgwxMTI0MzMyMTI1MjciDJlw9Uh2pl5pTe3JqiriAj0kroRPBuncUABRcdIwHnrLgQVon4fZs86MPwpamHj9k5qcGDHCdzluPVZMmI9YLboZUFTvbmk8G2%2BBHb1ywyIFlkSV%2BbqsuxtbP%2FnD4z1xtk%2FVYi3FPHyOw5d8lq4yVqAsgAURIV8te%2BPQFWcCPX0DUYJKK7OgRCFhSAtZC%2BHfc86YpNNOfcBthyUFJPvGXnmA65w0h8j1abgqjm%2FlqzqxKp0GaOGy9vm3NQ%2FfLpiv1pQV1P1X1Oxss0zitAGuL509on%2Fg8IyLboRMpLHaTUEXjGsuZ7koGTL4VUKrkoBXoFWiVUHI82q3XS97ssj2c4VzPHrwTwzXzLX%2BMyM2Q3vgqSJgXDEVBlebee%2FeCFqPAPUHjcK%2BVI6YDFN8p88Ofo%2BpXqnKGTZ6EMZDK%2FfAiK4%2BTFIhPXzrZbILlvXoTmEeLLfc9mqFRu9M0RwX1Q3c7tu5kSyU%2FYBCjf5V9wJ8KP7vITDvwLqRBjqyAmRdsjW%2B5KXI0VXMx30ejo6uCKPVmUWZM1ACCMOdnLH1he%2B4CTg1uCZKofqc7KPU%2Fbb6ma19tBXElnQ5CwKZ0FDCW7%2Fd3N8sgAs4o6aexCUPbBa6UCbHloWx7IGfI9%2B9bp5fWDXC0ytPXLshEn0uo23mneptDmo1rYgJ74gObocUPaavrYSqutQ9hk3f5FKN20dg9th3wbBjgM9gI6XuC7v26eHptgj81BIJRB2gJbWWdb6KnZMf6Y6W8RMBYrPF%2FoZWf7bN0dDlJg7jC6RCP0TZjfPPWyjRBWgQYlVvxCNsqstMY9hUCbkL5vVMs9N1FDUDHiV77ELx7ms34A6CaJOMyr%2FAXodJXRPgqIcqDnpLrvLAXPwgauBKbgbH5WjeaGX6rySQ9z4CbAR61R%2BKyuFCpQ%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220314T015614Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=ASIARULMKVRXT3K4TOGW%2F20220314%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=4b6275db4fcbe1e66f5099565799782470257f8a94b4a468e7703623b03675d0";

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