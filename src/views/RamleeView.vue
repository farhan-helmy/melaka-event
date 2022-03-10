<template>
  <div>
    <div v-if="ramlee1" class="card w-96 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img src="@/assets/pramlee.jpg" alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
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
    <div>
      <audio id="audio-player">
        <source src="@/assets/audio/pramlee.mp3" type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  name: "RamleeView",
  setup() {
    const animation = ref(true);
    const ramlee1 = ref(true);
    const ramlee2 = ref(false);
    const ramlee3 = ref(false);
    onMounted(() => {
      const playAudio = async () => {
        var audio = document.getElementById("audio-player");
        await audio.play();
      };

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
            ramlee2.value = false
          ramlee3.value = true;
        }, 30000);
      };

      stopAnimate();
      changeSlide();
      playAudio();
      changeSlide2();
    });

    return {
      animation,
      ramlee1,
      ramlee2,
      ramlee3,
    };
  },
};
</script>

<style>
</style>