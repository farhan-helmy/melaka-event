<template>
  <div>
    <div v-if="ramlee1" class="card w-96 bg-base-100 shadow-xl">
      <!-- <figure class="px-10 pt-10">
        <img src="@/assets/pramlee.jpg" alt="Shoes" class="rounded-xl" />
      </figure> -->

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
         <p>
          Sumber:
        </p>
        
      </div>
    </div>
    <div v-if="ramlee2" class="card w-96 bg-base-100 shadow-xl">
      <!-- <figure class="px-10 pt-10">
        <img src="@/assets/pramlee2.jpg" alt="Shoes" class="rounded-xl" />
      </figure> -->
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
         <p>
          Sumber:
        </p>
         
      </div>
    </div>
    <div v-if="ramlee3" class="card w-96 bg-base-100 shadow-xl">
      <!-- <figure class="px-10 pt-10">
        <img src="@/assets/pramlee3.jpg" alt="Shoes" class="rounded-xl" />
      </figure> -->

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
         <p>
          Sumber:
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
        "https://puspanita-aws-poc.s3.ap-southeast-1.amazonaws.com/mp3/speech_20220309162400976.mp3?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaDmFwLXNvdXRoZWFzdC0xIkcwRQIgZR%2BfjKyvh3qeo%2FqK9Quvu33WC%2BmYFN0TFQrN0QEo0gsCIQC1HO93ah0AHSa7oAwPi1robSQX5zvEbzmNwbtandLvpSqOAwiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDExMjQzMzIxMjUyNyIMrAQCIH60Q6e%2FbSfNKuICJaeuAxi%2FN9BFigi%2FouN6bGF4hHxrpMgUU4s8bYxpLnPomYuPFNQoE9Pdq0tdAWn%2BDLja0wX1p9FNvzkFEC45O%2B%2Fmo2LisrvmoxXB4EVFLuvlD1Pq%2FPD0A8GeBlVfjzPlQNP7XK%2B0h3LqMNt9JJqIMa2saVkVONzVn7Fs1P0VwvbkVT%2Fa4cICb5CwgyUvTzz65Gj0hu%2FqvhOYsApJqFFi76UOSPoP4sQksJl9iUqTo4lR4Y%2FWbZPzGSz%2F458KRSdhiVCQ8HDJ40VskA0yReh%2BERdMxL%2BdoS1bEM6Kfx9vYTvwHsYT6CFfYUPiQLEREThHB4shXbnSO7yAyxnmlUa5hZhJ4FqSq3L%2FuFKkiX8i7necLdR8E4ZvUghWgFt6KwI66WxEVvQefsY9mPYRwRokQ0kn%2BD94uHRvsg5ZknZInHX%2B2tchKcCh65ecY0Pw4%2FsZdc1uXpXYkdLzz9sGglwx%2FZYWMPP1yZEGOrMCQikW%2Fiua1tp%2Bmk6yeekBQevT0AYpUmQqrkcSawNmfcEAuVGmGtO1fqB53fV9VVyMCnIfhMBimlV%2FLvr2gln1GoGbWBJitSPOf%2F%2BvRlAkcMR18uqXh43Ig%2B8DkzzN2MiO7RmHoYVHvFV%2BBrPXla3PlKehQdSbGJvXTWlRoRE30ngjqglrOUwJ%2F4HIkV5Koq%2FkToH0R7CPmAc5c5gaEyMXoy4yuqd4Lee2oQ7eBetWYh8t7Pi2I5r8z7yzHErFl3jSUJZs5iq9gSjGLCtNub0%2BFg68gSjH9FWsimMbMfxgMfxrY1ed6zCgRQnOttq5e9KsnBncxWW9dp5k3ZdwUEONc2bmH3UW2uvVF75GJB0KFQeLTWw1gN32NtcUPQJHr3FS1zo1tox3S17uZHcEmFfFdrsrXg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220317T000448Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=ASIARULMKVRX3HEQKEN4%2F20220317%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=1d7500a53ff55ab09ca21e91a581e3f439f577ac7d917e402b7ae8191b4a184f"

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
        }, 5000);
      };

      const changeSlide2 = () => {
        setTimeout(() => {
          ramlee2.value = false;
          ramlee3.value = true;
        }, 10000);
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