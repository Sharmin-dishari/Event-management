<template>
  <q-page padding class="q-py-lg">
    <div v-for="(item, index) in 4" :key="index">
      <div class="row justify-between">
        <div class="q-ml-md row">
          <div>
            <q-avatar size="42px">
              <img src="/boy.png" />
            </q-avatar>
          </div>
          <div class="q-ml-sm">
            <div class="text-bold">
              Cameroon
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
            <div class="text-caption">Paris, FR</div>
          </div>
        </div>
        <div>
          <span><q-btn label="4" outline size="8px" round /></span>
          <span class="q-ml-sm">14 Feb, 2024</span>
          <span><q-btn flat round icon="more_horiz" /></span>
        </div>
      </div>
      <div class="q-mt-md">
        <q-carousel
          style="border-radius: 20px"
          animated
          v-model="slide"
          arrows
          height="250px"
          navigation
          @click="$router.push({ name: 'news-details' })"
          infinite
        >
          <q-carousel-slide
            :name="1"
            img-src="https://cdn.quasar.dev/img/mountains.jpg"
          />
          <q-carousel-slide
            :name="2"
            img-src="https://cdn.quasar.dev/img/parallax1.jpg"
          />
          <q-carousel-slide
            :name="3"
            img-src="https://cdn.quasar.dev/img/parallax2.jpg"
          />
          <q-carousel-slide
            :name="4"
            img-src="https://cdn.quasar.dev/img/quasar.jpg"
          />
        </q-carousel>
      </div>
      <div class="row justify-between q-mt-sm">
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
      </div>
      <div class="text-h6 q-ma-sm">News and feed title goes here</div>
      <div class="text-caption text-grey-6 q-ma-sm">
        joshua_l The game in Japan was amazing and I want to share some photos
      </div>
      <q-separator class="q-my-md" />
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useCounterStore } from "../stores/example-store";
const commonStore = useCounterStore();
onMounted(() => {
  commonStore.pageTitle = "All News  & Feed";
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
