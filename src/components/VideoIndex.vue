<template>
  <div>
    <div class="scroll-wrapper">
      <div class="horizontal-scroll-container" v-if="videoList.length">
        <div
          v-for="item in videoList[0].videolist"
          :key="item.id"
          class="option"
        >
          <section
            class="vedio-event"
            :class="
              $q.dark.isActive ? 'dark-card text-white' : 'bg-white text-black'
            "
          >
            <div class="row justify-between q-mt-sm" @click="openModal(item)">
              <div>Art event gallary</div>
              <q-btn
                round
                unelevated
                dense
                size="10px"
                icon="north_east"
                class="text-black"
                color="grey-3"
              />
            </div>

            <div class="container q-mt-md" @click="openModal(item)">
              <div class="container q-mt-md">
                <q-video
                  :ratio="16 / 13"
                  style="border-radius: 12px"
                  :src="item"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    <q-dialog v-model="modalOpen" persistent full-width>
      <q-card>
        <q-card-section>
          <q-video
            :ratio="16 / 13"
            style="border-radius: 12px"
            :src="selectedVideo"
          />
        </q-card-section>
        <q-card-actions align="right" class="q-mr-sm">
          <q-btn label="Close" no-caps color="red-10" @click="closeModal" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { db, collection } from "src/stores/firebase.js";
import { onSnapshot } from "firebase/firestore";
onMounted(() => {
  const videos = collection(db, "NewsnFeedvideo");
  videoList.value = [];
  onSnapshot(videos, (snapshot) => {
    snapshot.docs.forEach((doc) => {
      videoList.value.push({ ...doc.data(), id: doc.id });
    });
  });
});
const modalOpen = ref(false);
const videoList = ref(false);
const selectedVideo = ref(null);
const openModal = (item) => {
  modalOpen.value = true;
  selectedVideo.value = item;
};
const closeModal = () => {
  modalOpen.value = false;
  selectedVideo.value = null;
};
</script>

<style>
.vedio-event {
  width: 164.09px;
  height: 189px;
  border: 1px solid #ddd;
  padding: 10px;
  position: relative;
  border-radius: 25px;
}
</style>
