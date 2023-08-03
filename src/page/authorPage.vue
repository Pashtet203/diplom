<template>
    <div class="author__container">
        <h2 class="author__title">Композиторы</h2>
        <div class="line"></div>
        <div class="author__box">
            <div class="author__box-item" v-for="author in $store.state.authors.authors" key="author.id"
                @click="$router.push(`/authors/${author.id}`)">
                <img :src="author.img_path" alt="" class="author__img">
                <div class="author__inner">
                    <div class="author__name">{{ author.name }}</div>
                    <div class="author__date">{{ author.years_of_life }}</div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
import { createStore } from "vuex";
export default {

    methods: {
        ...mapActions({
            receiveAuthor: 'authors/receiveAuthor'
        })
    },
     created() {
        this.receiveAuthor()

       
    },
}
</script>

<style >
.author__container {
    width: 100%;
    max-width: 1200px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    color: #fff;
    padding: 0 10px;
    margin-top: 70px;
}

.author__title {
    text-align: center;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 56px;
}

.line {
    width: 100%;
    height: 1px;
    background-color: black;
    margin-top: 10px;
}

.author__box {
    display: grid;
    grid-template-columns: 340px 340px 340px;
    grid-template-rows: 450px 450px 450px;
    row-gap: 50px;
    column-gap: 80px;
    margin-top: 50px;
}

.author__box-item {
    /* border: 1px solid black; */
    position: relative;
    cursor: pointer;
}

.author__inner {
    position: absolute;
    /* top: 0; */
    bottom: 0;
    padding-bottom: 20px;
    padding-left: 15px;
    padding-top: 20px;
    backdrop-filter: blur(20px);
    border-radius: 10px;
    transition: all .5s;
    opacity: 0;
    width: 100%;
}

.author__inner:hover {
    opacity: 1;
}

.author__name,
.author__date {
    color: #fff;
}

.author__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}
</style>