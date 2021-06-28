<template>
    <div class="body">
        <h2 style="padding-top: 20px">Blanka - приложение</h2>
        <h2 style="padding-bottom: 20px">для бесплатного заполнения бланков документов онлайн</h2>
        <h4>Выберите нужный шаблон, заполните и распечатайте, либо отправьте на электронную почту</h4>
        <div class="preview">
            <v-row justify="center">
                <v-col
                    v-for="(card, id) in cards"
                    :key="id"
                    cols="4"
                    align="center"
                >
                    <router-link :to="card.path">
                        <v-hover v-slot="{ hover }">
                            <v-card style="width: 320px">
                                <v-img :src="card.src">
                                    <v-expand-transition>
                                        <div
                                            v-if="hover"
                                            class="d-flex transition-fast-in-fast-out 
                                                darken-2 v-card--reveal text-h5 white--text"
                                            style="height: 100%; background: DarkSlateBlue; 
                                                align-items: center; justify-content: center"
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
    </div>
</template>

<script>
export default {
    data: () => ({
        cards: [
            {title: 'Бланк паспорта', src: 'https://i.postimg.cc/wBZSMwr1/image.png', path: '/passport'}
        ]
    })
}
</script>

<style scoped>
.body {
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #FFFFFF, #D3D3D3);
    text-align: center;
}

h1 {
    color: #696969;
    padding-top: 20px;
}

.preview {
    padding: 20px 0 20px;
}
</style>