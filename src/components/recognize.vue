<template>
    <div class="main">
        <form class="container_recog">
            <input class="input__search" v-model="searchQuery" type="text" placeholder="Название или автор">
            <p class="recognize__text">Узнайте, что играет</p>
            <button class="btn__start" @click="startREC"></button>
        </form>
        <my-dialog v-model:show=isShow>
            <div class="temp" v-if="song__info.name_song != null">
                {{ song__info.name_song }}
                {{ song__info.name_author }}
            </div>
            <div class="none_info" v-else> {{ song__info.none }}</div>
        </my-dialog>
    </div>
</template>

<script>
import { declareFunction } from '@babel/types';
import MyDialog from './UI/MyDialog.vue';


export default {
    name: "Recognize",
    data() {
        return {
            myRecorder: {
                objects: {
                    context: null,
                    stream: null,
                    recorder: null,
                }
            },
            searchQuery: '',
            fd: new FormData(),
            urll: null,
            isShow: false,
            song__info: {
                name_song: null,
                name_author: null,
                none: null
            },
        };
    },
    methods: {
        open() {
            this.isShow = true
        },
        startREC() {
            if (null === this.myRecorder.objects.context) {
                this.myRecorder.objects.context = new (window.AudioContext || window.webkitAudioContext);
            }
            var options = { audio: true };
            navigator.mediaDevices.getUserMedia(options).then((stream) => {
                this.myRecorder.objects.stream = stream;
                this.myRecorder.objects.recorder = new Recorder(this.myRecorder.objects.context.createMediaStreamSource(stream), { numChannels: 1, });
                this.myRecorder.objects.recorder.record();
            }).catch(function (err) { console.log(err); });
            setTimeout(this.stopREC, 5000);
        },
        stopREC() {
            if (null !== this.myRecorder.objects.stream) {
                this.myRecorder.objects.stream.getAudioTracks()[0].stop();
            }
            if (null !== this.myRecorder.objects.recorder) {
                this.myRecorder.objects.recorder.stop();
                this.myRecorder.objects.recorder.exportWAV(async (blob) => {
                    var url = (window.URL || window.webkitURL).createObjectURL(blob);
                    this.fd.append("name", "temp5");
                    this.fd.append("data_song", blob, "blob.wav");
                    console.log(this.myRecorder.objects.recorder);
                    var response = await fetch("http://127.0.0.1:8000/recognize_song/", {
                        method: "post",
                        body: this.fd,
                    });
                    let temp = await response.json()
                    if (temp.title.matches.length != 0) {
                        this.song__info.name_song = temp.title.track.title
                        this.song__info.name_author = temp.title.track.subtitle
                        this.searchQuery = temp.title.track.title + ' ' + temp.title.track.subtitle
                        this.song__info.none = null
                        this.open()
                    }
                    else {
                        this.song__info.name_song = null
                        this.song__info.name_author = null
                        this.song__info.none = 'Не удалось распознать'
                        this.open()
                    }
                });

            }

        },
    },
    components: { MyDialog }
}

</script>

<style scoped>
.main {
    background-color: #FFE663;
    max-width: 1200px;
    min-height: 600px;
    border-radius: 30px;
    margin-top: 45px;
    justify-content: center;
}

.container_recog {
    padding-top: 165px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.input__search {
    width: 100%;
    max-width: 800px;
    min-height: 60px;
    border-radius: 30px;
    border: 1px solid black;
    padding: 18px 37px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;

}

.recognize__text {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 47px;
    margin: 75px 0 75px 0px;
}

.btn__start {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-image: url(../assets/btn__start.png);
    background-position: center center;
    background-repeat: no-repeat;
    /* background-size: cover; */
    background-color: #fff;
    border: none;
    cursor: pointer;
    transition: all .3s;
}

.btn__start:hover {

    scale: 1.1;
}
</style>

