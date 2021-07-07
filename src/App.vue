<template>
  <v-app>
    <div class="menu">
      <v-navigation-drawer
        v-model="drawer"
        style="z-index: 30"
        hide-overlay
        app
      >
        <v-list dence nav>
          <v-list-item @click="printPageButton">
            <v-list-item-icon>
              <v-icon>mdi-printer</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ $t("printButton") }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item @click="sendMailButton">
            <v-list-item-icon>
              <v-icon>mdi-email-send</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ $t("sendFormButton") }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-list-item @click="drawer2 = !drawer2">
          <v-list-item-icon>
            <v-icon>mdi-text-box-multiple-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ $t("templButton") }}</v-list-item-title>
          </v-list-item-content>

          <v-list-item-icon>
            <v-icon>{{ drawer2 ? icons[1] : icons[0] }}</v-icon>
          </v-list-item-icon>
        </v-list-item>

        <v-list dense nav v-if="drawer2">
          <v-list-item
            v-for="(templDoc, index) in templDocs"
            :key="index"
            :to="templDoc.url"
            @click="drawer = false"
          >
            <v-icon>{{ templDoc.icon }}</v-icon>
            <v-list-item-content>
              <v-list-item-title style="padding-left: 12px">{{
                templDoc.title
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar app>
        <v-app-bar-nav-icon
          @click="drawer = !drawer"
          class="hidden-md-and-up"
        ></v-app-bar-nav-icon>

        <router-link to="/" class="routeHome">
          <v-img
            src="https://i.postimg.cc/qvFqvLBY/123312-removebg-preview.png"
            style="width: 80px; height: 60px"
          ></v-img>
        </router-link>

        <div class="languages">
          <v-icon>mdi-earth</v-icon> 
          <a @click="clickOnRu()" :class="{ opasityLang: opasityIfRuIsActive }"> ru </a>|
          <a @click="clickOnEn()" :class="{ opasityLang: opasityIfEnIsActive }"> en </a>|
          <a @click="clickOnBy()" :class="{ opasityLang: opasityIfByIsActive }"> by</a>
        </div>

        <v-spacer></v-spacer>

        <div class="hidden-sm-and-down">
          <v-btn text @click="printPageButton">
            <v-icon>mdi-printer</v-icon>
            <span style="padding-left: 8px">{{ $t("printButton") }}</span>
          </v-btn>

          <v-btn text @click="sendMailButton">
            <v-icon>mdi-email-send</v-icon>
            <span style="padding-left: 8px">{{ $t("sendFormButton") }}</span>
          </v-btn>

          <v-menu offset-y style="z-index: 94">
            <template v-slot:activator="{ on, attrs }">
              <v-btn text v-bind="attrs" v-on="on">
                <v-icon>mdi-text-box-multiple-outline</v-icon>
                <span style="padding-left: 8px">{{ $t("templButton") }}</span>
                <v-icon>{{ icons[0] }}</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(templDoc, index) in templDocs"
                :key="index"
                :to="templDoc.url"
              >
                <v-list-item-icon>
                  <v-icon>{{ templDoc.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ templDoc.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-app-bar>
    </div>

    <router-view id="router"></router-view>

    <sending-form v-if="sendForm" @close-form="sendMailButton" />
  </v-app>
</template>

<script>
import SendingForm from "./components/SendingForm.vue";

export default {
  data: (_t) => ({
    opasityIfRuIsActive: false,
    opasityIfEnIsActive: true,
    opasityIfByIsActive: true,
    drawer: false,
    drawer2: false,
    sendForm: false,
    icons: ["mdi-menu-down", "mdi-menu-up"],
  }),
  computed: {
    templDocs() {
      return [
        { title: this.$t("passport"), icon: "mdi-passport", url: "/passport" },
        {
          title: this.$t("residence"),
          icon: "mdi-text-box",
          url: "/residence",
        },
      ];
    },
  },
  methods: {
    printPageButton() {
      window.print();
    },
    sendMailButton() {
      this.sendForm = !this.sendForm;
      this.drawer = false;
    },
    clickOnRu() {
      this.$i18n.locale = 'ru';
      this.opasityIfRuIsActive = false;
      this.opasityIfEnIsActive = true;
      this.opasityIfByIsActive = true;
    },
    clickOnEn() {
      this.$i18n.locale = 'en';
      this.opasityIfRuIsActive = true;
      this.opasityIfEnIsActive = false;
      this.opasityIfByIsActive = true;
    },
    clickOnBy() {
      this.$i18n.locale = 'by';
      this.opasityIfRuIsActive = true;
      this.opasityIfEnIsActive = true;
      this.opasityIfByIsActive = false;
    },
  },
  watch: {
    drawer: function (oldVal, newVal) {
      if (newVal === false) {
        this.drawer2 = false;
      }
    },
  },
  components: {
    SendingForm,
  },
};
</script>

<style scoped>
.routeHome {
  text-decoration: none;
  color: black;
  font-size: 1.2rem;
}

.menu {
  z-index: 92;
}

#router {
  margin-top: 64px;
}

@media print {
  .menu {
    display: none;
  }

  #router {
    margin-top: 0;
  }
}

.languages {
  padding-left: 20px;
}

.languages a {
  color: black;
}

.languages a:hover{
  color: MediumSlateBlue;
}

.opasityLang {
  opacity: 30%;
}
</style>