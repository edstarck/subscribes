<template>
  <section class="grid">
    <preference-card
      v-for="preference in preferences"
      :key="preference.id"
      :preference="preference"
    />
  </section>
</template>

<script>
import { mapState } from "vuex";
import { actionsTypes } from "@/store/modules/preferences";
import { uuid } from "@/helpers/utils";
import PreferenceCard from "@/components/PreferenceCard.vue";

export default {
  name: "PreferenceList",
  components: {
    PreferenceCard,
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.preferences.isLoading,
      preferences: (state) => state.preferences.data,
      error: (state) => state.preferences.error,
    }),
  },
  methods: {
    fetchPreferences() {
      this.$store
        .dispatch(actionsTypes.getPreferences, {
          apiUrl: "default-subscribe.json",
        })
        .then((preferences) => {
          preferences.forEach((preference) => (preference["id"] = uuid()));
        });
    },
  },
  mounted() {
    this.fetchPreferences();
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/variables.scss";

.grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(338px, 1fr));
  grid-auto-rows: minmax(178px, auto);
  gap: 5px;
  padding: 12px 16px 12px 0;
  @media (max-width: 768px) {
    padding: 16px;
    grid-template-columns: repeat(2, minmax(150px, 1fr));
    box-sizing: border-box;
  }
}
</style>
