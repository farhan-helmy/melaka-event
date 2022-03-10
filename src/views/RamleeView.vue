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
export default {
  name: "RamleeView",
  setup() {
    const animation = ref(true);
    const ramlee1 = ref(true);
    const ramlee2 = ref(false);
    const ramlee3 = ref(false);

    const playAudio = async () => {
      const pramlee = "https://puspanita-aws-poc.s3.ap-southeast-1.amazonaws.com/mp3/speech_20220309162400976.mp3?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0xIkcwRQIgPwBhLqVnaGc8B%2BS19aXJrCP8J%2FYd7vBRlKRMhxfLbhsCIQDjxn1w46SeeHJdTFKbv5q9Y961wfO8RLo2RwULOG93SCqEAwjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDExMjQzMzIxMjUyNyIMGjP0hmbNxG3ps1VwKtgCF6G9dtQ9Uy%2Fg8dzqGmJzcu%2FnBkutnw0Sp0BM%2Bw2JKs2iKLPWJidauUxClgs1vnJdS39rua5LNANVf1iZyYap7JXOeibLLgtEPmudzRk3y959zuyqRRNp20PWGnDchcXswEd5RL8RZGTDkJN7uiUzFVbspYAAdXuDPHtV5OqbaTXm7PQmSw6oextH0t%2BjycJU3D44%2B4GAlvkD2bXfluB1DQHXkqUx%2FHGY8eHkV4N6fQ4LZUVvSaHmYGfYSv7%2BII%2BlXhJWOI4NA0QUzZqQJYfq4TrhrQeIQ%2B8HwCqgQFE%2FwXUqSka2AEB%2ByHDgnO80nMk7KuO4n72dUutUYlgqRpPzVBq%2FtLnlJCIsN8stEIMXhdsdcFxQCbQxslYr20EN1PfBQHr8MZdEPFDPoIbzzCk9a1zEOtILGJCo9xCN0r7UlRkjKD3%2FA1goTV%2FOmnxqpbqHxLgeb%2BxSk4Iw9aKmkQY6swJ9oBfc%2Frfju87H6tLYHXRkWRYi6Yp2dUlXraywhIBWIpm5vJo6dday%2FQm0jJ%2FYQe%2BDg3waNfEpstBOfVjbGbl71%2Bm5a6wrGQoEzRkFdNT35qODQscOhchMliRmfzXnoNgXwfYEHEK844JYkVZtLbfX10Ojz6zCB3fdYhyeSAyZiuNWQUozP%2FAyGHLmtjNAXZVxQw%2FW%2FGKUE2ufE5tFjAlave5wMy9RFN44xHhlEFU1iKifJ4%2F%2B9PJVFfqUb1CQDTJyG6Aqp671At6PS2%2F%2FtUzx1TNPHCR8Q4tme9mJR1VD5fVE15O9axJFcvtML1z8ThTtOEtuH1%2FS%2FPEqBuby6pH5PTH0oRnCcyYmTV7cp3mlIFmxT234OuKTZd3BNetKH3gl8NF%2F42kjbRLTbdFwIypqKOUX&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220310T121612Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=ASIARULMKVRX3PHVVIXP%2F20220310%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=23615126c3497fda3db30aa259860d1e251ceb67e32ab3d7f2e679e9a6b41d2b"

      let sound = new Audio(pramlee);
      sound.type = "audio/mpeg";

      sound.play();
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
    };
  },
};
</script>

<style>
</style>