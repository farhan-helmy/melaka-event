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
        "https://puspanita-aws-poc.s3.ap-southeast-1.amazonaws.com/mp3/speech_20220309162750056.mp3?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaDmFwLXNvdXRoZWFzdC0xIkcwRQIgZR%2BfjKyvh3qeo%2FqK9Quvu33WC%2BmYFN0TFQrN0QEo0gsCIQC1HO93ah0AHSa7oAwPi1robSQX5zvEbzmNwbtandLvpSqOAwiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDExMjQzMzIxMjUyNyIMrAQCIH60Q6e%2FbSfNKuICJaeuAxi%2FN9BFigi%2FouN6bGF4hHxrpMgUU4s8bYxpLnPomYuPFNQoE9Pdq0tdAWn%2BDLja0wX1p9FNvzkFEC45O%2B%2Fmo2LisrvmoxXB4EVFLuvlD1Pq%2FPD0A8GeBlVfjzPlQNP7XK%2B0h3LqMNt9JJqIMa2saVkVONzVn7Fs1P0VwvbkVT%2Fa4cICb5CwgyUvTzz65Gj0hu%2FqvhOYsApJqFFi76UOSPoP4sQksJl9iUqTo4lR4Y%2FWbZPzGSz%2F458KRSdhiVCQ8HDJ40VskA0yReh%2BERdMxL%2BdoS1bEM6Kfx9vYTvwHsYT6CFfYUPiQLEREThHB4shXbnSO7yAyxnmlUa5hZhJ4FqSq3L%2FuFKkiX8i7necLdR8E4ZvUghWgFt6KwI66WxEVvQefsY9mPYRwRokQ0kn%2BD94uHRvsg5ZknZInHX%2B2tchKcCh65ecY0Pw4%2FsZdc1uXpXYkdLzz9sGglwx%2FZYWMPP1yZEGOrMCQikW%2Fiua1tp%2Bmk6yeekBQevT0AYpUmQqrkcSawNmfcEAuVGmGtO1fqB53fV9VVyMCnIfhMBimlV%2FLvr2gln1GoGbWBJitSPOf%2F%2BvRlAkcMR18uqXh43Ig%2B8DkzzN2MiO7RmHoYVHvFV%2BBrPXla3PlKehQdSbGJvXTWlRoRE30ngjqglrOUwJ%2F4HIkV5Koq%2FkToH0R7CPmAc5c5gaEyMXoy4yuqd4Lee2oQ7eBetWYh8t7Pi2I5r8z7yzHErFl3jSUJZs5iq9gSjGLCtNub0%2BFg68gSjH9FWsimMbMfxgMfxrY1ed6zCgRQnOttq5e9KsnBncxWW9dp5k3ZdwUEONc2bmH3UW2uvVF75GJB0KFQeLTWw1gN32NtcUPQJHr3FS1zo1tox3S17uZHcEmFfFdrsrXg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220317T000515Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=ASIARULMKVRX3HEQKEN4%2F20220317%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=f1727309b1cd8c8220aa991df4243ae4dadeaa5bbb479e5d2353d4d51f9a30b0"

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