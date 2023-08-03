<template>
    <div class="user__container">
        <h2 class="user__title">Рекомендации</h2>
        <div class="line"></div>
        <div class="user__recomendations-box">
            <button @click="getRecomendations" class="user__btn-update"></button>

            <div class="user__recomendations-list" v-for="item in list_recom">
                <div class="user__recomendations-item">
                    {{ item }}
                </div>
            </div>

        </div>
    </div>
</template>


<script>
export default {

    data() {
        return {
            list_recom: [],
            index: 7,
        }
    },
    methods: {
        async getRecomendations() {
            let responce = await fetch('http://127.0.0.1:8000/user', {
                method: 'post',
                body: this.index,
            })
            let temp = await responce.json()
            this.list_recom = temp
        },
    }
}
</script>

<style>
.user__container {
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

.user__title {
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

.user__recomendations-box {
    width: 100%;
}
.user__btn-update {
    background: url(../assets/update.png) center;
    border: none;
    width: 30px;
    height: 30px;
    cursor: pointer;
   
}

.user__recomendations-item {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 58px;
}
.user__recomendations-box{
    padding: 10px 20px;
}
</style>