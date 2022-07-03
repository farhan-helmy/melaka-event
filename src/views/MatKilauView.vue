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
        <h2 class="card-title">Mat Kilau</h2>
        <p>
          Mat Kilau bin Imam Rasu dilahirkan pada kira-kira tahun 1865 atau 1866
          di Kampong Pulau Tawar, namun kelahirannya sering dianggap jatuh pada
          tahun 1847. Kelahirannya jatuh ketika zaman pemerintahan Raja
          Bendahara Pahang ketika itu iaitu Tun Ahmad. Bapanya ialah Imam Rasu
          bin Shahrum atau lebih dikenali dengan nama Tok Gajah manakala ibunya
          pula ialah Mahda binti Tok Kaut Burau. Mat Kilau mahir mengaji,
          berzanji dan berdikir maulud serta belajar berdikir rebana yang
          dikenali sebagai "Dikir Pahang". Hobi Mat Kilau adalah bermain gasing
          dan berlaga buah keras.
        </p>
      </div>
    </div>
    <div v-if="ramlee2" class="card w-96 bg-base-100 shadow-xl">
      <!-- <figure class="px-10 pt-10">
        <img src="@/assets/pramlee2.jpg" alt="Shoes" class="rounded-xl" />
      </figure> -->
      <div class="card-body items-center text-center">
        <button class="btn" @click="home">Home</button>
        <h2 class="card-title">Mat Kilau</h2>
        <p>
          Pada usia lebih kurang 20 tahun, Mat Kilau berkahwin dengan seorang
          gadis yang bernama Yang Chik binti Imam Daud yang berasal dari Kampung
          Kedondong. Imam Daud ialah seorang guru agama yang disegani di daerah
          Pulau Tawar, Jerantut, Pahang dan juga merupakan guru mengaji kepada
          Mat Kilau dan rakan-rakanya. Hasil perkahwinan ini Mat Kilau telah
          dikurniakan tiga orang anak. Setelah berkahwin barulah Mat Kilau
          belajar bersilat dan menuntut ilmu kebatinan. Mat Kilau bukan sahaja
          belajar bersilat sebagaimana sahabatnya yang lain, bahkan beliau lebih
          mendalami silat dengan menggunakan senjata seperti keris dan parang.
          Mat Kilau juga banyak menuntut ilmu daripada ayahnya sendiri iaitu Tok
          Gajah. Ilmu kebatinan secara agama banyak dituntutnya daripada Haji
          Montok yang merupakan mufti Pahang ketika itu.
        </p>
      </div>
    </div>
    <div v-if="ramlee3" class="card w-96 bg-base-100 shadow-xl">
      <!-- <figure class="px-10 pt-10">
        <img src="@/assets/pramlee3.jpg" alt="Shoes" class="rounded-xl" />
      </figure> -->

      <div class="card-body items-center text-center">
        <button class="btn btn-circle" @click="home">Home</button>
        <h2 class="card-title">Mat Kilau</h2>
        <p>
          Pada bulan Oktober 1888 semasa Tok Gajah berada di Pekan, Hugh
          Clifford telah datang ke Pulau Tawar dan berunding dengan Mat Kilau.
          Ini menunjukkan Clifford mempercayai idea-idea Mat Kilau. Beliau suka
          bergaul dengan setiap lapisan masyarakat dan ini membuatkan beliau
          menjadi seorang yang luas pandangan dan mendapat kepercayaan penuh
          dari masyarakat. Mat Kilau adalah seorang yang jujur dan tegas,
          justeru itu dia sangat disegani dan amat dikasihi oleh
          pengikut-pengikutnya. Pengikutnya terlalu ramai,tetapi yang diketahui
          namanya ialah Pawang Nong, Teh Ibrahim, Mat Kelubi, Mat Ali (khatib),
          Awang (Imam) dan Mat Tahir. Mereka ini sanggup sehidup semati dengan
          Mat Kilau.
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
  name: "MatKilauView",
  setup() {
    const animation = ref(true);
    const ramlee1 = ref(true);
    const ramlee2 = ref(false);
    const ramlee3 = ref(false);

    const playAudio = async () => {
      const pramlee =
        "https://puspanita-aws-poc.s3.ap-southeast-1.amazonaws.com/mp3/speech_20220309162400976.mp3?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaDmFwLXNvdXRoZWFzdC0xIkcwRQIgZR%2BfjKyvh3qeo%2FqK9Quvu33WC%2BmYFN0TFQrN0QEo0gsCIQC1HO93ah0AHSa7oAwPi1robSQX5zvEbzmNwbtandLvpSqOAwiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDExMjQzMzIxMjUyNyIMrAQCIH60Q6e%2FbSfNKuICJaeuAxi%2FN9BFigi%2FouN6bGF4hHxrpMgUU4s8bYxpLnPomYuPFNQoE9Pdq0tdAWn%2BDLja0wX1p9FNvzkFEC45O%2B%2Fmo2LisrvmoxXB4EVFLuvlD1Pq%2FPD0A8GeBlVfjzPlQNP7XK%2B0h3LqMNt9JJqIMa2saVkVONzVn7Fs1P0VwvbkVT%2Fa4cICb5CwgyUvTzz65Gj0hu%2FqvhOYsApJqFFi76UOSPoP4sQksJl9iUqTo4lR4Y%2FWbZPzGSz%2F458KRSdhiVCQ8HDJ40VskA0yReh%2BERdMxL%2BdoS1bEM6Kfx9vYTvwHsYT6CFfYUPiQLEREThHB4shXbnSO7yAyxnmlUa5hZhJ4FqSq3L%2FuFKkiX8i7necLdR8E4ZvUghWgFt6KwI66WxEVvQefsY9mPYRwRokQ0kn%2BD94uHRvsg5ZknZInHX%2B2tchKcCh65ecY0Pw4%2FsZdc1uXpXYkdLzz9sGglwx%2FZYWMPP1yZEGOrMCQikW%2Fiua1tp%2Bmk6yeekBQevT0AYpUmQqrkcSawNmfcEAuVGmGtO1fqB53fV9VVyMCnIfhMBimlV%2FLvr2gln1GoGbWBJitSPOf%2F%2BvRlAkcMR18uqXh43Ig%2B8DkzzN2MiO7RmHoYVHvFV%2BBrPXla3PlKehQdSbGJvXTWlRoRE30ngjqglrOUwJ%2F4HIkV5Koq%2FkToH0R7CPmAc5c5gaEyMXoy4yuqd4Lee2oQ7eBetWYh8t7Pi2I5r8z7yzHErFl3jSUJZs5iq9gSjGLCtNub0%2BFg68gSjH9FWsimMbMfxgMfxrY1ed6zCgRQnOttq5e9KsnBncxWW9dp5k3ZdwUEONc2bmH3UW2uvVF75GJB0KFQeLTWw1gN32NtcUPQJHr3FS1zo1tox3S17uZHcEmFfFdrsrXg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220317T000448Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=ASIARULMKVRX3HEQKEN4%2F20220317%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=1d7500a53ff55ab09ca21e91a581e3f439f577ac7d917e402b7ae8191b4a184f";

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