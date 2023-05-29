<template>
  <section class="buttons">
    <button @click="onSave" class="button button--save">Save changes</button>
    <button @click="onUnsubscribe" class="button button--unsubscribe">
      Unsubscribe from all of the above. It’s over
    </button>
  </section>
</template>

<script>
import { actionsTypes } from "@/store/modules/preferences";
import { getterTypes } from "@/store/modules/preferences";
import { mapGetters } from "vuex";

export default {
  name: "SaveUnsubscribe",
  computed: {
    ...mapGetters({
      preferences: getterTypes.currentPreferences,
    }),
  },
  methods: {
    onUnsubscribe() {
      this.$store
        .dispatch(actionsTypes.updateAllPreferences, {
          subscribed: false,
        })
        .then(() => {
          this.$router.push({
            name: "unsubscribe",
          });
          this.arrayToJsonSubscribe();
        });
    },
    onSave() {
      Promise.resolve().then(() => {
        this.$router.push({
          name: "save",
        });
        this.arrayToJsonSubscribe();
      });
    },
    arrayToJsonSubscribe() {
      const json = JSON.stringify(
        this.preferences.map((preference) => ({
          site: preference.site,
          subscribed: preference.subscribed,
        })),
        null,
        1
      );

      console.log(json);

      return false;
    },
  },
};
</script>
