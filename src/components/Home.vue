<template>
  <div class="body">
    <h2 style="padding-top: 20px">{{ $t("homeTitle_1") }}</h2>
    <h2 style="padding-bottom: 20px">{{ $t("homeTitle_2") }}</h2>
    <h4>{{ $t("homeTitle_3") }}</h4>
    <div class="preview">
      <v-row justify="center">
        <v-col v-for="(card, id) in cards" :key="id" cols="4" align="center">
          <router-link :to="card.path" style="text-decoration: none">
            <v-hover v-slot="{ hover }">
              <v-card style="width: 300px">
                <v-img :src="card.src" :alt="card.alt">
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="
                        d-flex
                        transition-fast-in-fast-out
                        darken-2
                        v-card--reveal
                        text-h6
                        white--text
                      "
                      style="
                        height: 100%;
                        background: DarkSlateBlue;
                        align-items: center;
                        justify-content: center;
                      "
                    >
                      {{ $t("clickForOpenTempl") }}
                    </div>
                  </v-expand-transition>
                </v-img>
                <div class="cardLabel">{{ card.title }}</div>
              </v-card>
            </v-hover>
          </router-link>
        </v-col>
      </v-row>
    </div>

    <v-footer class="indigo darken-1 white--text" style="height: 40px" absolute>
      <v-row justify="center" align="center">
        <a
          href="https://github.com/Alexrp21/Blanks_project"
          target="_blank"
          style="text-decoration: none"
        >
          <v-btn class="mx-4 white--text" icon>
            <v-icon size="24px">mdi-github</v-icon>
          </v-btn>
        </a>
        <div>{{ new Date().getFullYear() }}</div>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
export default {
  computed: {
    cards() {
      return [
      {
        title: this.$t("passportBlankName"),
        src: "https://i.postimg.cc/wBZSMwr1/image.png",
        alt: 'Passport blank image',
        path: "/passport",
      },
      {
        title: this.$t("residenceBlankName"),
        alt: 'Residence blank image',
        src: "https://i.postimg.cc/RZFsShMM/image.png",
        path: "/residence",
      },
    ]
    } 
  }
};
</script>

<style scoped>
.body {
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #ffffff, #d3d3d3);
  text-align: center;
}

.preview {
  padding: 20px 0 20px;
}

h2,
h4 {
  color: #525151;
}

.cardLabel {
  width: 100%;
  height: 50px;
  padding: 0 5px;
}
</style>