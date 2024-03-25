<template>
  <q-page padding>
    <div>
      <div class="container q-mt-md q-mx-sm">
        <q-img src="/bg1.png" alt="Snow" style="border-radius: 20px" />
        <div class="top-right">
          <q-btn icon="bookmark" unelevated dense class="button-bg" />
        </div>
        <div class="top-left">
          <q-btn icon="share" unelevated dense class="button-bg" />
        </div>
        <div class="content">
          <div class="bottom-left">
            <div class="text-bold text-h6" style="margin-left: -40px">
              Nascom Tech
            </div>
            <div class="avatar-group">
              <div
                class="avatar"
                v-for="(user, index) in users?.slice(0, 3)"
                :key="index"
              >
                <img :src="user.avatar" />
              </div>
              <div class="q-mt-sm q-pl-sm">10+ interested</div>
            </div>
          </div>
          <div class="bottom-right">
            <div no-caps class="date-mark">
              <div>
                <div class="text-bold text-h6">23<sup>th</sup></div>
                <div style="font-size: 11px" class="q-mt-xs">Feb</div>
              </div>
            </div>
            <div class="text-bold text-h6">$125</div>
            <div style="font-size: 9px">1/person</div>
          </div>
        </div>
      </div>
      <div class="title-font q-my-md q-px-sm">
        Nasscom Technology & Leadership
      </div>
      <div class="q-ma-sm row q-py-md">
        <q-btn icon="calendar_month" unelevated dense class="button-border" />
        <div class="q-ml-md">
          <div>14 December, 2021</div>
          <div class="text-caption">Tuesday, 4:00PM - 9:00PM</div>
        </div>
      </div>
      <div class="q-ma-sm row">
        <q-btn icon="pin_drop" unelevated dense class="button-border" />
        <div class="q-ml-md">
          <div>Gala Convention Center</div>
          <div class="text-caption">Manchester, UK - Etihad Stadium</div>
        </div>
      </div>
      <div class="divider div-transparent q-mt-lg"></div>
      <div class="text-center q-py-md text-h6 text-bold">Event Sponsors</div>
      <div class="row justify-between flex-center">
        <img src="/Indonesia.png" class="image-brand" />
        <img src="/Indonesia (1).png" class="image-brand2 q-mt-sm" />
        <img src="/Indonesia (2).png" class="image-brand3 q-mt-sm" />
      </div>
      <div class="divider div-transparent q-mt-xl q-mb-lg"></div>
      <q-item>
        <q-item-section avatar>
          <q-item-label>
            <img src="/user.png" style="border-radius: 15px" />
          </q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label class="header-title">Alex Madhu</q-item-label>
          <q-item-label class="text-caption">Organizer</q-item-label>
        </q-item-section>
        <q-item-section top>
          <q-item-label class="q-mt-sm">
            <q-badge class="badge-color q-pa-xs q-px-md">Follow</q-badge>
          </q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-item-label class="q-mt-sm">
            <q-btn
              round
              icon="maps_ugc"
              size="sm"
              color="grey-3"
              unelevated
              class="q-mr-sm text-black"
            />
            <q-btn
              round
              icon="phone_forwarded"
              size="sm"
              text-black
              unelevated
              color="grey-3"
              class="text-black"
            />
          </q-item-label>
        </q-item-section>
      </q-item>
      <div class="q-pa-sm">
        <div>About Event</div>
        <div class="text-caption">
          Enjoy your favorite dishe and a lovely your friends and family and
          have a great time. Food from local food trucks will be available for
          purchase. <span class="text-blue-4">Read More...</span>
        </div>
      </div>
      <div class="text-center q-py-md">
        <q-btn class="book-btn" rounded>
          <div class="row text-white">
            <div class="q-mt-xs text-bold">Book ticket- $125</div>
            <div class="q-ml-md">
              <q-btn
                round
                icon="east"
                size="sm"
                text-black
                unelevated
                color="red-5"
                class="text-white"
              />
            </div>
          </div>
        </q-btn>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
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
.badge-color {
  background: rgb(217, 220, 238);
  color: rgba(86, 105, 255, 1);
}
.header-title {
  font-size: 18px;
  font-weight: 500;
  line-height: 34px;
  text-align: left;
}
.divider {
  position: relative;
  height: 1px;
}

.div-transparent:before {
  content: "";
  position: absolute;
  top: 0;
  left: 5%;
  right: 5%;
  width: 90%;
  height: 1px;
  background-image: linear-gradient(
    to right,
    transparent,
    rgb(201, 22, 22),
    transparent
  );
}
.book-btn {
  width: 295px;
  height: 50.14px;
  background: rgb(211, 15, 15);
}
.top-left {
  position: absolute;
  top: 8px;
  left: 10px;
}
.button-bg {
  border-radius: 12px;
  padding: 7px;
  background: rgb(88, 86, 86);
  opacity: 0.9;
  border: 1px solid rgba(15, 15, 15, 0.18);
}
.red-line {
  width: 100%;
  height: 10px;

  /* border: 1px;
  opacity: 0px; */
  /* border: 1px solid; */

  border-image-source: linear-gradient(
    90deg,
    #ffffff 0%,
    #ff8484 48.5%,
    #ffffff 100%
  );
}
.image-brand {
  width: 101px;
  height: 31px;
}
.image-brand2 {
  width: 97px;
  height: 20px;
}
.image-brand3 {
  width: 101px;
  height: 20px;
}
.title-font {
  font-family: Clash Display;
  font-size: 30px;
  font-weight: 600;
  line-height: 36.9px;
  text-align: left;
}
.top-right {
  position: absolute;
  top: 8px;
  right: 10px;
}
.button-border {
  border-radius: 12px;
  padding: 7px 10px;
  border: 1px solid rgba(79, 77, 77, 0.18);
}
.container .content {
  position: absolute;
  bottom: 0;
  background: rgb(0, 0, 0); /* Fallback color */
  background: rgba(0, 0, 0, 0.5); /* Black background with 0.5 opacity */
  color: #f1f1f1;
  border-radius: 0 0 20px 20px;
  width: 100%;
  padding: 40px;
}
.container {
  position: relative;
  text-align: center;
  color: white;
}
.bottom-right {
  position: absolute;
  bottom: 8px;
  right: 10px;
}
.bookmark-button {
  position: absolute;
  top: 70px;
  right: 7px;
}
.date-mark {
  width: 65px;
  height: 65px;
  background: rgb(248, 105, 105);
  border-radius: 8px;
  opacity: 0px;
}
.bottom-left {
  position: absolute;
  bottom: 8px;
  left: 40px;
}
</style>
