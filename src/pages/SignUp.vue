<template>
  <q-page>
    <div class="q-pa-md"><q-icon name="arrow_back" size="md" /></div>
    <div class="q-px-md text-h6">Sign up</div>
    <q-form @submit="handleLogin">
      <q-card-section>
        <div>
          <q-input
            v-model="name"
            class="itc-input required"
            stack-label
            outlined
            placeholder="Enter your name"
            type="text"
            clearable
            clear-icon="close"
            :rules="[(val) => !!val || 'Email is required']"
          >
            <template #prepend> <q-icon name="person_outline" /></template>
          </q-input>
          <q-input
            v-model="email"
            class="itc-input required"
            stack-label
            outlined
            placeholder="Enter your email"
            type="email"
            clearable
            clear-icon="close"
            :rules="[
              (val) => !!val || 'Email is required',
              (val) => validateEmail(val) || 'Type a valid Email',
            ]"
          >
            <template #prepend> <q-icon name="email" /></template>
          </q-input>
          <q-input
            v-model="password"
            class="itc-input required"
            stack-label
            outlined
            placeholder="Your password"
            :type="isPwd ? 'password' : 'text'"
            :rules="[
              (val) => !!val || 'Password is required',
              (val) => val.length >= 6 || 'Minimum 6 characters required',
            ]"
          >
            <template #prepend> <q-icon name="lock" /></template>
            <template #append>
              <q-icon
                :name="isPwd ? 'visibility' : 'visibility_off'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <q-input
            v-model="confirm_password"
            class="itc-input required"
            stack-label
            outlined
            placeholder="Confirm password"
            :type="isPwd ? 'password' : 'text'"
            :rules="[
              (val) => !!val || 'Password is required',
              (val) => val.length >= 6 || 'Minimum 6 characters required',
            ]"
          >
            <template #prepend> <q-icon name="lock" /></template>
            <template #append>
              <q-icon
                :name="confirm_password ? 'visibility' : 'visibility_off'"
                class="cursor-pointer"
                @click="confirm_password = !confirm_password"
              />
            </template>
          </q-input>
        </div>
      </q-card-section>
      <q-card-actions class="q-pt-none" align="center">
        <div class="text-center q-py-md">
          <q-btn class="book-btn" rounded>
            <div class="row text-white">
              <div class="q-mt-xs text-bold">Sign In</div>
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

      <q-card-section class="q-mx-xl">
        <div class="text-center q-mb-lg">OR</div>
        <div class="q-pa-none">
          <q-btn
            unelevated
            no-caps
            outline
            @click="handleSocialLogin('google')"
            class="full-width q-py-md"
          >
            <q-icon left size="2em" name="img:/google.png" />
            <div class="placeholder">Sign in with Google</div>
          </q-btn>
        </div>
        <div class="q-pa-none q-mt-md">
          <q-btn
            unelevated
            no-caps
            outline
            @click="handleSocialLogin('google')"
            class="full-width q-py-md"
          >
            <q-icon left size="2em" name="img:/facebook.png" />
            <div class="placeholder">Sign in with Facebook</div>
          </q-btn>
        </div>
      </q-card-section>
      <div
        class="text-caption text-center q-py-md cursor-pointer"
        @click="$router.push({ name: 'sign-index' })"
      >
        Already have an account?
        <span class="text-primary q-ml-sm">Signin</span>
      </div>
    </q-form>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
const darkMode = ref(false);
</script>

<style>
.book-btn {
  width: 295px;
  height: 50.14px;
  background: rgb(211, 15, 15);
}
</style>
