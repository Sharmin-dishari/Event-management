<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      unelevated
      class="q-pa-sm bg-white text-black q-pt-md"
      :class="$route.name !== 'event-details' ? 'bg-grey-2' : 'bg-white'"
    >
      <q-toolbar v-if="$route.name !== 'event-details'">
        <q-avatar size="42px">
          <img src="/boy.png" />
        </q-avatar>
        <q-toolbar-title>
          <div class="text-caption">Location</div>
          <div
            class="text-h6 text-bold"
            style="
              font-family: Clash Display;
              font-size: 19.31px;
              font-weight: 500;
              line-height: 22.99px;
              text-align: left;
            "
          >
            Paris, FR
          </div>
        </q-toolbar-title>

        <q-btn round @click="toggleLeftDrawer" unelevated dense>
          <q-avatar>
            <img src="/menu.png" />
          </q-avatar>
        </q-btn>
      </q-toolbar>
      <q-toolbar v-else>
        <q-btn size="16px" icon="chevron_left" round @click="$router.back()" />
        <q-toolbar-title style="margin-left: -35px" class="text-center"
          >Event Details</q-toolbar-title
        >
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered side="right">
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

defineOptions({
  name: "MainLayout",
});

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
<style></style>
