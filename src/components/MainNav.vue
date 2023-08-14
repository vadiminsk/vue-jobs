<template>
  <header class="w-full text-sm ">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap gap-6 h-full border-b border-solid border-brand-gray-1 px-8 mx-auto">
        <a class="flex h-full items-center text-xl" :href="url">{{ company }}</a>
        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li v-for="menuItem in menuItems" :key="menuItem"
              class="h-full ml-9 first:ml-0">
              <a href="#" class="flex h-full items-center py-2.5">{{ menuItem
              }}</a>
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <profile-image v-if="isLoggedIn" />
          <action-button v-else @click="loginUser" text="Sign In"
            type="primary" />
        </div>
      </div>
      <the-subnav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script>
import ActionButton from "@/components/ActionButton.vue";
import ProfileImage from "@/components/ProfileImage.vue";
import TheSubnav from "@/components/TheSubnav.vue";
export default {
  name: "MainNav",
  components: { ActionButton, ProfileImage, TheSubnav },
  data() {
    return {
      company: 'Vue Careers',
      url: 'https://careers.google.com/',
      menuItems: [
        'Teams',
        'Location',
        'Life of Vue',
        'Students',
        'Jobs'
      ],
      isLoggedIn: false
    }
  },
  methods: {
    loginUser (){
      this.isLoggedIn = true
    }
  }
}
</script>