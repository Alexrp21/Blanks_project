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
          <v-list-item
            @click="printPage"
          >
            <v-list-item-icon>
              <v-icon>mdi-printer</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Печать</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            @click="sendMail"
          >
            <v-list-item-icon>
              <v-icon>mdi-email-send</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Отправить</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        
          <v-list-item @click="drawer2 = !drawer2">
            <v-list-item-icon>
              <v-icon>mdi-text-box-multiple-outline</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Шаблоны</v-list-item-title>
            </v-list-item-content>

            <v-list-item-icon>
              <v-icon>{{ drawer2 ? icons[1] : icons[0] }}</v-icon>
            </v-list-item-icon>
          </v-list-item>

          <v-list
            dense nav v-if="drawer2"
          >
              <v-list-item
                v-for="templDoc in templDocs"
                :key="templDoc.title"
                :to="templDoc.url"
                @click="drawer = false"
              >
                  <v-icon>{{ templDoc.icon }}</v-icon>
                  <v-list-item-content>
                    <v-list-item-title style="padding-left: 12px">{{ templDoc.title }}</v-list-item-title>
                  </v-list-item-content>
              </v-list-item>
            </v-list>
      </v-navigation-drawer>

      <v-app-bar app>
        <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
        
        <router-link to="/" class="routeHome">
          <v-img
            src="https://i.postimg.cc/qvFqvLBY/123312-removebg-preview.png"
            style="width: 80px; height: 60px"
          ></v-img>
        </router-link>

        <v-spacer></v-spacer>

        <div class="hidden-sm-and-down">
          <v-btn
            text
            @click="printPage"
          >
            <v-icon>mdi-printer</v-icon>
            <span style="padding-left: 8px">Печать</span>
          </v-btn>

          <v-btn
            text
            @click="sendMail"
          >
            <v-icon>mdi-email-send</v-icon>
            <span style="padding-left: 8px">Отправить</span>
          </v-btn>

          <v-menu offset-y style="z-index: 94">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                text
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-text-box-multiple-outline</v-icon>
                <span style="padding-left: 8px">Шаблоны</span>
                <v-icon>{{ icons[0] }}</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="templDoc in templDocs"
                :key="templDoc.title"
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

    <sending-form v-if="sendForm" @close-form="sendMail" />
  </v-app>
</template>

<script>
import SendingForm from './components/SendingForm.vue';

export default {
  data: () => ({
    drawer: false,
    drawer2: false,
    sendForm: false,
    templDocs: [
      {title: 'Паспорт', icon: 'mdi-passport', url: '/passport'}
    ],
    icons: ['mdi-menu-down', 'mdi-menu-up'],
  }),
  methods: {
    printPage () {
      window.print();
    },
    sendMail () {
      this.sendForm = !this.sendForm;
      this.drawer = false;
    }
  },
  watch: {
    drawer : function (oldVal, newVal) {
      if (newVal === false) {
        this.drawer2 = false;
      }
    }
  },
  components: {
    SendingForm
  }
}
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
</style>