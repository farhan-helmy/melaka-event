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
      const pramlee = "https://puspanita-aws-poc.s3.ap-southeast-1.amazonaws.com/mp3/speech_20220309162400976.mp3?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0xIkgwRgIhAJw%2B2RNIcczMuKUSIrZG3sehqcs0PPiKXdWaDQyCoYQKAiEAlbC7v2bjYIEsXiQNRSszj96eWg%2BvOTqTyQE%2BUVFb6owqhQMIUxAAGgwxMTI0MzMyMTI1MjciDJlw9Uh2pl5pTe3JqiriAj0kroRPBuncUABRcdIwHnrLgQVon4fZs86MPwpamHj9k5qcGDHCdzluPVZMmI9YLboZUFTvbmk8G2%2BBHb1ywyIFlkSV%2BbqsuxtbP%2FnD4z1xtk%2FVYi3FPHyOw5d8lq4yVqAsgAURIV8te%2BPQFWcCPX0DUYJKK7OgRCFhSAtZC%2BHfc86YpNNOfcBthyUFJPvGXnmA65w0h8j1abgqjm%2FlqzqxKp0GaOGy9vm3NQ%2FfLpiv1pQV1P1X1Oxss0zitAGuL509on%2Fg8IyLboRMpLHaTUEXjGsuZ7koGTL4VUKrkoBXoFWiVUHI82q3XS97ssj2c4VzPHrwTwzXzLX%2BMyM2Q3vgqSJgXDEVBlebee%2FeCFqPAPUHjcK%2BVI6YDFN8p88Ofo%2BpXqnKGTZ6EMZDK%2FfAiK4%2BTFIhPXzrZbILlvXoTmEeLLfc9mqFRu9M0RwX1Q3c7tu5kSyU%2FYBCjf5V9wJ8KP7vITDvwLqRBjqyAmRdsjW%2B5KXI0VXMx30ejo6uCKPVmUWZM1ACCMOdnLH1he%2B4CTg1uCZKofqc7KPU%2Fbb6ma19tBXElnQ5CwKZ0FDCW7%2Fd3N8sgAs4o6aexCUPbBa6UCbHloWx7IGfI9%2B9bp5fWDXC0ytPXLshEn0uo23mneptDmo1rYgJ74gObocUPaavrYSqutQ9hk3f5FKN20dg9th3wbBjgM9gI6XuC7v26eHptgj81BIJRB2gJbWWdb6KnZMf6Y6W8RMBYrPF%2FoZWf7bN0dDlJg7jC6RCP0TZjfPPWyjRBWgQYlVvxCNsqstMY9hUCbkL5vVMs9N1FDUDHiV77ELx7ms34A6CaJOMyr%2FAXodJXRPgqIcqDnpLrvLAXPwgauBKbgbH5WjeaGX6rySQ9z4CbAR61R%2BKyuFCpQ%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220314T015524Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=ASIARULMKVRXT3K4TOGW%2F20220314%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=163f1fb55dff5691644e3c3c646096ecf0315c2e3aee1f311fd2ffd8e92a5689"

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