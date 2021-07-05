<template>
  <div class="body">
    <h2 style="padding-top: 20px">Blanka - приложение</h2>
    <h2 style="padding-bottom: 20px">
      для бесплатного заполнения бланков документов онлайн
    </h2>
    <h4>
      Выберите нужный шаблон, заполните и распечатайте, либо отправьте на
      электронную почту
    </h4>
    <div class="preview">
      <v-row justify="center">
        <v-col v-for="(card, id) in cards" :key="id" cols="4" align="center">
          <router-link :to="card.path" style="text-decoration: none">
            <v-hover v-slot="{ hover }">
              <v-card style="width: 320px">
                <v-img :src="card.src">
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
                        white-space: pre;
                      "
                    >
                      {{ card.title }}
                    </div>
                  </v-expand-transition>
                </v-img>
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
        <div>{{ new Date().getFullYear() }} г</div>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        title: `Бланк паспорта
  Форма №1`,
        src: "https://i.postimg.cc/wBZSMwr1/image.png",
        path: "/passport",
      },
      {
        title: `Бланк вида на жительство
  Форма №1-иг`,
        src: "https://i.postimg.cc/RZFsShMM/image.png",
        path: "/residence",
      },
    ],
  }),
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

h2, h4 {
  color: #525151;
}
</style>