<template>
    <div v-if="author" class="authorid__container">
        <h2 class="authorid__title"> {{ author.name }}</h2>
        <div class="line"></div>
        <div class="authorid__header">
            <img :src="author.img_path" alt="" class="authorid__img">
        </div>
        <div class="authorid__info">
            {{ author.author_info }}
        </div>
    </div>
</template>


<script>
import Navbar from '@/components/Navbar'
import recognize from '@/components/recognize'
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
import { createStore } from "vuex";

export default {
    components: {
        Navbar,
        recognize,
    },
    data() {
        return {
            randomInt: null,
            randomAuthot: [],
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
            return this.getAuthors[Math.floor(Math.random()*this.getAuthors.length)]

        }
    },
    created() {
        this.receiveAuthor()
    },
}
</script>

<style></style>