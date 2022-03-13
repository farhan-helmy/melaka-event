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
      const pramlee = "https://puspanita-aws-poc.s3.ap-southeast-1.amazonaws.com/mp3/speech_20220309162400976.mp3?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0xIkcwRQIgV5kPXL8ggUqD8loaus4%2FkEelgoIywVu3QDR66BNJmDoCIQDoiZz14bQycx4B0V7yBSlAgOewQZ8YD0bKkVPWDmWU3Sr7Agg9EAAaDDExMjQzMzIxMjUyNyIMyImWnBYFGJRkpc89KtgCjJOHqg%2FhV5mZWPeVvUzxpAoqqMo%2BdVkmFj%2B365ugU8F%2B%2BmwcQaHzRqmTVp9P9CO0uqbIAqA8MIJvLtYadXoJ9OseY6nphvzgPx4f84hZ44tJEywRt8kuKhiEJfmdKw3nOYG4bAmYmFyRLz0J1VORXXPdn%2B9aAvQAgZ8ifAcTuWPJnNoW93VlIT96D%2BNWJWzauubvXiUXZBzqRdgszwN0A1GqcuFdCLYkY47awJiHJ2X7maScIvM9Cg%2F0CB9HvjiGnmYO2cAj8CbAlAI33107ai8vcp1fyWSu%2BtETYiDdzss%2BqPiyy%2F66IS1DeAEgR%2BpptvhJfrxaYP9TJoQSu1dsacy1NhXKgh10JEWK%2F68JEqrhUpmcMZQvUdy1KzBtDFCzgYK1ziyt766S%2FNWb0uzf8PW7ql7ktHuJylmGkTGUkvcXv%2BbQHkerP%2Bbbd46Ko9X49mifFofcfqcwyt21kQY6swKWSf6hTQmCLttn5BytAZYBkGE28qAkonw9pMu6A2F7zcAlTvRQxhZ7ss274c%2BfJqqQiVZD4QNQSS8YCahQh7V%2FbERgT%2Fwa2P9ziXmBjmr%2Fs8iFldyEBqjbcK6BGkfDCA5GD3GHO1j1yywnFVTIvooKoXDo2M9si9XU6COOoJi4YaSgu8DpfE5txHeGA4anXeTBMX3%2FTyBCWd%2FYEN%2B6NfGYz6GUJqX4%2B41L7vHNI93XoMiSZ2oK4ZKC7szUX1wd1z%2FfMPg8%2FgVGL9CKwH5vlQJsrqjBEFEva9%2BkWAJGVqizadg0fSg406qBmOT%2FbIoJOIQENyAwF%2BsCpsm4ImXngShPaPPt5Hr6q%2FwGyVJKLc3PFnaFfmGXPUWNPgzB0oiGDMVr0WohcZOtrmxKObBbhseVVoXm&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220313T041134Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=ASIARULMKVRXYLTQXC5R%2F20220313%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=6d100c2b67bc619dd7500b48b8bcf1636679fb4b34412ea55817c00d2cf2e119"

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