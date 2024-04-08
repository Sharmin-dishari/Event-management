<template>
  <q-page>
    <q-form @submit="handleLogin">
      <q-card-section>
        <div>
          <q-input
            v-model="name"
            class="itc-input required q-mb-md"
            stack-label
            outlined
            placeholder="Enter your name"
          >
            <template #prepend> <q-icon name="lock" /></template>
          </q-input>
          <q-input
            v-model="email"
            class="itc-input required q-mb-md"
            stack-label
            outlined
            placeholder="Enter your email"
            type="email"
            clearable
            clear-icon="close"
          >
            <template #prepend> <q-icon name="email" /></template>
          </q-input>
          <q-select
            v-model="gender"
            class="itc-input required q-mb-md"
            stack-label
            outlined
            label="Gender"
            :options="['Men', 'Women', 'Children']"
            placeholder="Enter your password"
          >
            <template #prepend> <q-icon name="people" /></template>
          </q-select>
          <q-input
            v-model="contact"
            class="itc-input required q-mb-md"
            stack-label
            outlined
            placeholder="Contact Number"
          >
            <template #prepend> <q-icon name="call" /></template>
          </q-input>
          <q-input
            v-model="diet"
            class="itc-input required q-mb-md"
            stack-label
            outlined
            placeholder="Don you have any diet preference?"
            :type="isPwd ? 'password' : 'text'"
          >
            <template #prepend><q-icon name="coffee" /></template>
          </q-input>
          <q-input
            v-model="diet"
            class="itc-input required"
            stack-label
            outlined
            placeholder="How many accompanying with you?"
          >
            <template #prepend><q-icon name="groups" /></template>
          </q-input>
        </div>
      </q-card-section>
      <q-card-section>
        <q-item class="row q-px-none">
          <q-toggle
            size="md"
            @update:model-value="handleDarkMode"
            v-model="darkMode"
            val="dark"
          />
          <div class="q-mt-sm">
            I agree & consent to receiving update about the event
          </div>
        </q-item>
      </q-card-section>
      <q-card-actions class="q-pt-none" align="center">
        <div class="text-center q-py-md">
          <q-btn class="book-btn" rounded>
            <div class="row text-white">
              <div class="q-mt-xs text-bold">Book A Ticket</div>
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
      </q-card-actions>
    </q-form>
  </q-page>
</template>

<script setup>
import { onMounted } from "vue";
import { useCounterStore } from "../stores/example-store";
const commonStore = useCounterStore();
onMounted(() => {
  commonStore.pageTitle = "Book Ticket";
});
</script>

<style>
.book-btn {
  width: 295px;
  height: 50.14px;
  background: rgb(211, 15, 15);
}
</style>
