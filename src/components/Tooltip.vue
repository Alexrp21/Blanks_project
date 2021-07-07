<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">
      <v-icon v-bind="attrs" v-on="on"> mdi-information-outline </v-icon>
    </template>
    <span>{{ dataForTooltip }}</span>
  </v-tooltip>
</template>

<script>
import { bus } from "@/main";

export default {
  data: () => ({
    dataForTooltip: "",
  }),
  created() {
    bus.$on("argument", (arg) => (this.dataForTooltip = arg));
  },
};
</script>