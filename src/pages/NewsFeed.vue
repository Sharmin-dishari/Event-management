<template>
  <q-page padding class="q-py-lg">
    <div v-if="videoList.length">
      <div class="row justify-between">
        <div class="q-ml-md row">
          <div>
            <q-avatar size="42px">
              <img src="/boy.png" />
            </q-avatar>
          </div>
          <div class="q-ml-sm">
            <div class="text-bold">
              {{ auth.currentUser.displayName }}
              <span>
                <q-btn
                  size="5px"
                  dense
                  color="primary"
                  round
                  icon="done"
                  class="q-ml-xs"
                >
                </q-btn
              ></span>
            </div>
            <div class="text-caption">{{ auth.currentUser.email }}</div>
          </div>
        </div>
        <!-- <div>
          <span><q-btn label="4" outline size="8px" round /></span>
          <span class="q-ml-sm">14 Feb, 2024</span>
          <span><q-btn flat round icon="more_horiz" /></span>
        </div> -->
      </div>
      <div
        class="q-mt-md"
        v-if="videoList?.length && videoList[0]?.news1imagelist"
      >
        <q-carousel
          style="border-radius: 20px"
          animated
          v-model="slide"
          arrows
          height="400px"
          navigation
          infinite
        >
          <q-carousel-slide
            :name="index1"
            v-for="(image, index1) in videoList[0]?.news1imagelist"
            :key="index1"
            :img-src="image"
          />
        </q-carousel>
      </div>
      <div class="text-h6 q-ma-sm">
        {{ videoList[0].news1.substring(0, 20) }} ...
      </div>
      <q-separator class="q-my-md" />
      <div
        class="q-mt-md"
        v-if="videoList?.length && videoList[0]?.news2imagelist"
      >
        <q-carousel
          style="border-radius: 20px"
          animated
          v-model="slide"
          arrows
          height="400px"
          navigation
          infinite
        >
          <q-carousel-slide
            :name="index2"
            v-for="(image, index2) in videoList[0]?.news2imagelist"
            :key="index2"
            :img-src="image"
          />
        </q-carousel>
      </div>
      <div class="text-h6 q-ma-sm">
        {{ videoList[0].news2.substring(0, 20) }} ...
      </div>
      <q-separator class="q-my-md" />
      <div
        class="q-mt-md"
        v-if="videoList?.length && videoList[0]?.news3imagelist"
      >
        <q-carousel
          style="border-radius: 20px"
          animated
          v-model="slide"
          arrows
          height="400px"
          navigation
          infinite
        >
          <q-carousel-slide
            :name="index3"
            v-for="(image, index3) in videoList[0]?.news3imagelist"
            :key="index3"
            :img-src="image"
          />
        </q-carousel>
      </div>
      <div class="text-h6 q-ma-sm">
        {{ videoList[0].news3.substring(0, 20) }} ...
      </div>
      <q-separator class="q-my-md" />
      <div
        class="q-mt-md"
        v-if="videoList?.length && videoList[0]?.news4imagelist"
      >
        <q-carousel
          style="border-radius: 20px"
          animated
          v-model="slide"
          arrows
          height="400px"
          navigation
          infinite
        >
          <q-carousel-slide
            :name="index4"
            v-for="(image, index4) in videoList[0]?.news4imagelist"
            :key="index4"
            :img-src="image"
          />
        </q-carousel>
      </div>
      <div class="text-h6 q-ma-sm">
        {{ videoList[0].news4.substring(0, 20) }} ...
      </div>
      <q-separator class="q-my-md" />

      <!-- <div class="row justify-between q-mt-sm">
        <div class="row">
          <q-btn round icon="favorite_border" flat />
          <q-btn round icon="maps_ugc" class="rotate-270" flat />
          <q-btn
            icon="send"
            round
            flat
            @click="$router.push({ name: 'news-details' })"
            class="rotate-320"
          />
        </div>
        <div class="q-mt-sm">
          <q-btn icon="bookmark" round flat />
        </div>
      </div>
      <div class="row q-pa-sm">
        <q-avatar size="20px">
          <img src="/boy.png" />
        </q-avatar>
        <span class="q-ml-sm">Liked by craig_love and 44,686 others</span>
      </div> -->
      <!-- <div class="text-caption text-grey-6 q-ma-sm">
        joshua_l The game in Japan was amazing and I want to share some photos
      </div> -->
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useCounterStore } from "../stores/example-store";
import { auth } from "src/stores/firebase.js";
const commonStore = useCounterStore();

import { db, collection } from "src/stores/firebase.js";
import { onSnapshot } from "firebase/firestore";
const videoList = ref([]);
onMounted(() => {
  commonStore.pageTitle = "All News  & Feed";
  const videos = collection(db, "NewsnFeedvideo");
  videoList.value = [];
  onSnapshot(videos, (snapshot) => {
    snapshot.docs.forEach((doc) => {
      videoList.value.push({ ...doc.data(), id: doc.id });
    });
  });
});
const slide = ref(1);
</script>

<style>
.rotate-270 {
  transform: rotate(270deg);
}

.rotate-320 {
  transform: rotate(320deg);
}
</style>
