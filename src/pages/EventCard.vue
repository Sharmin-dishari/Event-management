<template>
  <div class="q-mt-md">
    <div class="row justify-between">
      <div class="q-mb-md q-mt-sm">Upcoming Events</div>
      <div class="row">
        <span class="q-mt-sm">Sort by</span>
        <q-select
          v-model="model"
          borderless
          :options="options"
          style="height: 10px"
          dense
          label-color="black"
          stack-label="Standard"
        />
      </div>
    </div>
    <div class="scroll-wrapper">
      <div class="horizontal-scroll-container">
        <div v-for="item in 4" :key="item.id" class="option">
          <section class="art-event-gallery">
            <div class="row justify-between q-mt-sm">
              <div class="text-h6 text-black">Nasscom Tech</div>
              <q-btn
                round
                unelevated
                dense
                icon="north_east"
                to="/event-details"
                class="text-black"
                color="grey-3"
              />
            </div>
            <div class="container q-mt-md">
              <q-img src="/bg1.png" alt="Snow" style="border-radius: 20px" />
              <div class="top-right">
                <q-btn icon="bookmark" unelevated dense class="button-border" />
              </div>
              <div class="bottom-left">
                <div class="avatar-group">
                  <div
                    class="avatar"
                    v-for="(user, index) in users?.slice(0, 3)"
                    :key="index"
                  >
                    <img :src="user.avatar" />
                  </div>
                  <div class="hidden-avatars">+10</div>
                </div>
              </div>
              <div class="bottom-right">
                <div no-caps class="date-mark">
                  <div>
                    <div>23</div>
                    <div style="font-size: 9px">Feb</div>
                  </div>
                </div>
              </div>
            </div>
            <q-item class="text-black q-pa-none q-mt-md row justify-between">
              <q-item-section>
                <div class="title-font">Nasscom Techonol...</div>
                <div style="font-size: 9px">
                  Manchester, UK - Etihad Stadium
                </div>
              </q-item-section>
              <q-item-section class="q-mr-sm text-black" side>
                <div class="title-font">$125</div>
                <div style="font-size: 9px">1/person</div>
              </q-item-section>
            </q-item>
          </section>
        </div>
      </div>
    </div>
    <div class="row justify-between">
      <div class="q-mb-sm q-mt-md">News & Feed</div>
      <div class="row">
        <span class="q-mt-sm">Sort all</span>
        <q-select
          v-model="model"
          borderless
          :options="options"
          style="height: 10px"
          dense
          label-color="black"
          stack-label="Standard"
        />
      </div>
    </div>
    <div class="scroll-wrapper">
      <div class="horizontal-scroll-container">
        <div v-for="item in 4" :key="item.id" class="option">
          <section class="vedio-event">
            <div class="row justify-between q-mt-sm">
              <div class="text-black">Art event gallary</div>
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

            <div class="container q-mt-md">
              <q-video
                :ratio="16 / 13"
                style="border-radius: 12px"
                src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const options = ref(["1", "2"]);
const model = ref(null);
const list = ref([
  {
    id: 1,
    title: "Birthday Card",
  },
]);
const users = ref([
  {
    id: 1,
    avatar: "boy.png",
  },
  {
    id: 2,
    avatar: "boy.png",
  },
  {
    id: 3,
    avatar: "boy.png",
  },
  {
    id: 4,
    avatar: "boy.png",
  },
]);
</script>

<style scoped>
.bookmark-button {
  position: absolute;
  top: 70px;
  right: 7px;
}
.title-font {
  font-size: 17px;
  font-weight: 500;
  line-height: 21.31px;
}

.date-mark {
  width: 31px;
  height: 42px;
  background: rgb(211, 10, 10);
  border-radius: 8px;
  opacity: 0px;
}
.top-right {
  position: absolute;
  top: 8px;
  right: 10px;
}
.container {
  position: relative;
  text-align: center;
  color: white;
}
.bottom-right {
  position: absolute;
  bottom: -8px;
  right: 10px;
}
.bottom-left {
  position: absolute;
  bottom: 8px;
  left: 25px;
}
.art-event-gallery {
  border: 1px solid #ddd; /* Add a 1px solid border in light gray */
  position: relative; /* This allows us to position the button relatively inside the container */
  border-radius: 25px;
  width: 260px;
  background: white;
  height: 319px;
  padding: 10px;
  opacity: 0px;
}
.vedio-event {
  width: 164.09px;
  height: 189px;
  background-color: white;
  border: 1px solid #ddd;
  padding: 10px;
  position: relative;
  border-radius: 25px;
}
.button-border {
  border-radius: 12px;
  padding: 7px;
  background: rgb(179, 172, 172);
  opacity: 0.8;
  border: 1px solid rgba(15, 15, 15, 0.18);
}
.option {
  display: inline-block;
  padding: 5px 5px 5px 0;
}
</style>
