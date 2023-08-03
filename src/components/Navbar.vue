<template>
    <div class="navBar">
        <div class="link__box-one">
            <a @click="$event => $router.push('/history')" class="link_box-item">История</a>
            <a @click="$event => $router.push('/authors')" class="link_box-item">Авторы</a>
        </div>
        <img src="@/assets/treble-clef.png" alt="" @click="$event => $router.push('/')">
        <div class="link__box-two">
            <button href="" class="link_box-item" @click="openAuth" @submit.prevent v-if="!isAuth">Вход</button>
            <button href="" class="link_box-item" @click="openRegis" @submit.prevent v-if="!isAuth">Регистрация</button>
            <button href="" class="link_box-item" @click="$event => $router.push('/user')" @submit.prevent
                v-if="isAuth">{{ auth_login }}</button>
            <button href="" class="link_box-item" @click="endSession" @submit.prevent v-if="isAuth">Выход</button>

        </div>
        <MyDialog v-model:show=isShowAuth>
            <h2 class="auth__title">Авторизация</h2>
            <div class="line"></div>
            <div class="auth__box">
                <input type="text" class="auth__input" placeholder="Логин" v-model="auth_login">
                <input type="password" class="auth__input" placeholder="Пароль" v-model="auth_pass">
                <button class="auth_update" @click="startSession">Войти</button>
            </div>
        </MyDialog>
        <MyDialog v-model:show=isShowRegis>
            <h2 class="auth__title">Регистрация</h2>
            <div class="line"></div>
            <div class="auth__box">
                <input type="text" class="register__input" placeholder="Email" v-model="regis_email">
                <input type="text" class="register__input" placeholder="Логин" v-model="regis_login">
                <input type="password" class="register__input" placeholder="Пароль" v-model="regis_pass">
                <button class="auth_update">Зарегистрироваться</button>
            </div>
        </MyDialog>
    </div>
</template>

<script>
import MyDialog from './UI/MyDialog.vue';
export default {
    components: {
        MyDialog,
    },
    data() {
        return {
            isShowAuth: false,
            isShowRegis: false,
            isAuth: false,
            auth_login: '',
            auth_pass: '',
            regis_login: '',
            regis_pass: '',
            regis_email: '',
        }
    },
    methods: {
        openAuth() {
            this.isShowAuth = true
        },
        openRegis() {
            this.isShowRegis = true
        },
        startSession() {
            this.isAuth = true
            this.isShowAuth = false
        },
        endSession() {
            this.isAuth = false
            this.$router.push('/')
        }
    },
}

</script>

<style>
.navBar {
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    margin-top: 40px;
}

.link__box-one {
    width: 100%;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid black;
}

.link__box-two {
    width: 100%;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid black;
}

.link_box-item {
    color: black;
    font-size: 28px;
    text-decoration: none;
    margin-bottom: 15px;
    cursor: pointer;
    transition: all .5s;
    background-color: transparent;
    border: none;
}

.link_box-item:hover {
    scale: 1.2;

}

.auth__title {
    text-align: center;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 56px;
}

.line {
    width: 100%;
    height: 1px;
    background-color: black;
    margin-top: 5px;
}

.auth__box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.auth__input,
.register__input {
    width: 310px;
    height: 40px;
    margin-top: 20px;
    padding: 0 10px;
    border-radius: 20px;
    font-size: 20px;
}

.auth_update {
    margin-top: 20px;
    background-color: transparent;
    border: none;
    text-align: center;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 56px;
    cursor: pointer;
    transition: all .3s;
}

.auth_update:hover {
    border: 1px solid black;
    border-radius: 20px;
    background-color: #FFE663;
    padding: 0 10px;
}</style>

