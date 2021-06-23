<template>
    <v-form 
        elevation="24" 
        class="sendForm"
        v-model="valid" 
        ref="card" 
        validation
    >
        <v-card-title>Укажите email-адрес</v-card-title>
        <v-card-subtitle>Приложение отправит файл на указанный адрес</v-card-subtitle>
        <v-text-field
            prepend-icon="mdi-at"
            name="email"
            label="Email"
            type="email"
            :rules="emailRules"
            v-model="emailAddress"
            style="width: 90%; margin: auto; padding-bottom: 10px"
            required
        ></v-text-field>
        <div class="buttons">
            <v-btn
                color="#64DD17"
                @click="sendToCurrentMail"
                :disabled="!valid"
            >Отправить</v-btn>
            <v-btn 
                @click="emitCloseFormEvent"
                color="#D84315"
                style="color: white"
            >Отменить</v-btn>
        </div>
    </v-form>
</template>

<script>
import { bus } from '@/main'

const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

export default {
    data: () => ({
        valid: false,
        emailAddress: '',
        emailRules: [
          v => !!v || 'Поле не может быть пустым',
          v => emailRegex.test(v) || 'Укажите корректный Email'
        ],

    }),
    methods:{
        emitCloseFormEvent () {
            this.$emit('close-form');
        },
        sendToCurrentMail () {
            this.$refs.card.validate();
            if (this.$route.name === 'passport') {
                bus.$emit('send-passport-data', this.emailAddress);
            }
            else alert('Откройте шаблон который хотите отправить');
        }
    }
}
</script>

<style scoped>

    .sendForm {
        position: fixed;
        top: 30%;
        left: 30%;
        min-width: 500px;
        min-height: 200px;
        align-content: center;
        padding-bottom: 10px;
        background: white;
        border-radius: 5px;
        box-shadow: 0px 2px 15px 10px grey;
    }

    .buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

</style>