<template>
    <div v-if="author" class="authorid__container">
        <h2 class="authorid__title"> {{ author.name }}</h2>
        <div class="line"></div>
        <div class="authorid__header">
            <img :src="author.img_path" alt="" class="authorid__img">
            <!-- <fieldset class="authorid__list">
                <legend>Список произведений</legend>
            </fieldset> -->
        </div>
        <div class="authorid__info">
            {{ author.author_info }}
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
import { createStore } from "vuex";
export default {
    data() {
        return {
            templistComposition: [],
            listComposition:[],
        }
    },
    methods: {
        ...mapActions({
            receiveAuthor: 'authors/receiveAuthor'
        })
    },
    computed: {
        ...mapGetters({
            getAuthors: 'authors/getAuthors'
        }),
        author() {
            for (let i = 0; i < this.getAuthors.length; i++) {
                if (this.$route.params.id == this.getAuthors[i].id) {
                    return this.getAuthors[i]
                }
            }
            return null;
        }
    },
    async created() {
        this.receiveAuthor()
    },

}
</script>


<style>
.authorid__container {
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

.authorid__title {
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

.authorid__header {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
}

.authorid__img {
    width: 300px;
    height: 400px;
    object-fit: cover;
    border-radius: 10px;
}

.authorid__list {
    min-width: 600px;
    max-width: 300px;
    border: 1px solid black;
    border-radius: 10px;
    text-align: center;
}

legend {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 56px;
    padding: 0 20px;
}

.authorid__info {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 47px;
    align-items: center;
    text-indent: 30px;
    text-align: justify;
    margin-top: 50px;
}
.authorid__info::first-letter {
    color: #F9D209;
    font-weight: 700;
    font-size: 30px;
}
</style>