<template>
  <article class="container">
    <side-bar />

    <main class="content">
      <header class="header">
        <h1 class="header--primary">Ok, let’s change your preferences</h1>
        <h3 class="header--secondary">
          To unsubscribe, please uncheck the appropriate box(es).
        </h3>
      </header>

      <preference-list />

      <save-unsubscribe />

      <section v-if="isTaskOpen" @click.self="onClosePopup" class="popup-bg">
        <router-view />
      </section>
    </main>
  </article>
</template>

<script>
import PreferenceList from "@/components/PreferenceList.vue";
import SideBar from "@/components/SideBar.vue";
import SaveUnsubscribe from "@/components/SaveUnsubscribe.vue";

export default {
  name: "OneSideBar",
  components: {
    PreferenceList,
    SideBar,
    SaveUnsubscribe,
  },
  computed: {
    isTaskOpen() {
      const allowedRoutes = ["save", "unsubscribe"];
      return allowedRoutes.includes(this.$route.name);
    },
  },
  methods: {
    onClosePopup() {
      this.$router.push({ name: "subscribes" });
    },
  },
};
</script>
