<template>
    <div class="player__container">
        <div class="player__progress" @click="setProgress($event)">
            <div class="player__progress-item"></div>
        </div>
        <div class="player__controls">
            <div class="player__btns">
                <div class="player__btns-prev" @click="prevSong"></div>
                <div class="player__btnsPlay" :class="{ player__btnsPause: isPlay }" @click="playSong"></div>
                <div class="player__btns-next" @click="nextSong"></div>
                <div class="player__btns-favorites"></div>
            </div>
            <div class="player__info">
                <div class="player__info-song">{{ curSong.title }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        song:{
            type: Object,
            required: false,
        }
    },
    data() {
        return {
            curSong: {},
            songs: [
                {
                    title: 'Beethoven - Für Elise',
                    src: require('../audio/Beethoven - Für Elise.mp3'),
                },
                {
                    title: 'Chopin - Grande Valse Brillante Op.18',
                    src: require('../audio/Chopin - Grande Valse Brillante Op.18.mp3'),
                }, {
                    title: 'Liszt - Hungarian Rhapsody No.2 in C-Sharp Minor S 244 No 2',
                    src: require('../audio/Liszt - Hungarian Rhapsody No.2 in C-Sharp Minor S 244 No 2.mp3'),
                },
            ],
            songIndex: 0,
            player: new Audio(),
            isPlay: false
        }
    },
    methods: {
        playSong() {
            if (!this.isPlay) {
                this.player.play()
                this.isPlay = true
            }
            else {
                this.player.pause()
                this.isPlay = false
            }
            this.player.addEventListener('timeupdate',(e) =>{
                const {duration,currentTime} = e.srcElement
                const progressPercent = (currentTime / duration) * 100
                let prog = document.querySelector('.player__progress-item')
                prog.style.width = `${progressPercent}%`
            })
        },
        setProgress(e){
            let prog_cont = document.querySelector('.player__progress')
            const width = prog_cont.clientWidth
            const clickX = e.offsetX
            const duration = this.player.duration
            this.player.currentTime = (clickX / width) * duration
        },
        nextSong() {
            this.isPlay = false
            this.player.pause()
            this.songIndex++;
            if (this.songIndex > this.songs.length - 1) {
                this.songIndex = 0;
            }
            this.curSong = this.songs[this.songIndex]
            this.player.src = this.curSong.src
            this.player.play()
            this.isPlay = true
        },
        prevSong() {
            this.isPlay = false
            this.player.pause()
            this.songIndex--
            if (this.songIndex < 0) {
                this.songIndex = this.songs.length - 1;
            }
            this.curSong = this.songs[this.songIndex]
            this.player.src = this.curSong.src
            this.player.play()
            this.isPlay = true
        },
    },
    created() {
        this.curSong = this.songs[this.songIndex]
        this.player.src = this.curSong.src
    },
}
</script>


<style>
.player__container {
    max-width: 1200px;
    bottom: 10px;
    position: sticky;
    height: 80px;
    background-color: #fff;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    opacity: 0.9;
    box-shadow: 8px 10px 10px 2px rgba(0, 0, 0, .2);
}

.player__progress {
    width: 100%;
    background-color: rgb(221, 221, 221);
    height: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;

}

.player__progress-item {
    height: 7px;
    background-color: #FFE663;
}

.player__controls {
    display: flex;
    align-items: center;
}

.player__info {
    margin-left: 30px;
    font-size: 20px;
}

.player__btns {
    display: flex;
    margin-top: 8px;
}

.player__btns-prev {
    width: 48px;
    height: 48px;
    background: url(../assets/prev.png) center center no-repeat;
    cursor: pointer;
}

.player__btnsPlay {
    width: 48px;
    height: 48px;
    background: url(../assets/play.png) center center no-repeat;
    cursor: pointer;
    transition: all .3s;
}

.player__btnsPause {
    width: 48px;
    height: 48px;
    background: url(../assets/pause.png) center center no-repeat;
    cursor: pointer;
    transition: all .3s;
}

.player__btns-next {
    width: 48px;
    height: 48px;
    background: url(../assets/next.png) center center no-repeat;
    cursor: pointer;
}

.player__btns-favorites {
    width: 48px;
    height: 48px;
    background: url(../assets/favorites.png) center center no-repeat;
    cursor: pointer;
}
</style>