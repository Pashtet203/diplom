<template>
    <div class="header_bg">
        <div class="container">
            <MyHeader></MyHeader>
        </div>
    </div>
    <router-view></router-view>
    <myAudioPlayer></myAudioPlayer>

</template>


<script>
import Navbar from '@/components/Navbar'
import MyHeader from '@/components/MyHeader'
import myAudioPlayer from './components/myAudioPlayer'
import MyDialog from './components/UI/MyDialog.vue'
export default {
    components: {
    Navbar,
    MyHeader,
    myAudioPlayer,

},
    data() {
        return {

        }
    },
    methods: {

    },
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
    color: black;
}

.container {
    width: 100%;
    max-width: 1200px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    color: #fff;
    padding: 0 10px;
}

.header_bg {
    background-image: url(assets/header_bg.png);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    padding-bottom: 40px;

}
</style>