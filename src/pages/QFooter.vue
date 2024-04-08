<template>
  <div class="foot-btn row flex-center justify-around">
    <ToggoleBtn />
    <div class="mid-btn row flex-center">
      <q-btn
        round
        unelevated
        dense
        icon="search"
        class="bg-white text-black q-ml-sm"
        size="18px"
      />
      <q-btn
        round
        unelevated
        dense
        icon="event"
        class="bg-white text-black q-mx-md"
        size="18px"
      />
      <q-btn round unelevated dense class="q-mr-sm">
        <q-avatar size="42px">
          <img src="/play.png" />
        </q-avatar>
      </q-btn>
    </div>
    <div class="person-icon row flex-center">
      <q-icon name="perm_identity" size="30px" class="text-black" />
    </div>
  </div>
</template>

<script setup>
import ToggoleBtn from "./ToggoleBtn.vue";
</script>

<style>
.foot-btn {
  background: white;
  height: 71px;
  border-radius: 90px;
  opacity: 0px;
}
.mid-btn {
  background: rgb(228, 226, 226);
  border-radius: 90px;
  height: 54px;
}
.person-icon {
  width: 54px;
  height: 54px;
  border-radius: 90px;
  opacity: 0px;
  background: rgb(228, 226, 226);
}
</style>
