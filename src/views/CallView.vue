<script>
import { RouterLink } from 'vue-router'


export default {
    name: 'CallView',
    setup(){
        
    },
    props : [
     
    ],
    components: {
        
    },
    computed: {
    },
    data(){
    },
    methods : {
    }
}

</script>

<template>

    <div class="call-container">
        <div class="time-name">
            <span>00:00</span>
            <h2>Appel en cours ...</h2>

        </div>

        <div class="call-icons">
            <div class="speaker icons">
                <img src="../assets/f7_speaker-3.svg" alt="speaker">
            </div>
            <div class="facetime icons">
                <img src="../assets/ph_camera.svg" alt="camera">

            </div>

            <div class="mute icons">
                <img src="../assets/ep_mute.svg" alt="mute">

            </div>

        </div>

        <RouterLink to="/">
            <div class="end">
                <img src="../assets/ph_phone.svg" alt="phone end">
            </div>
        </RouterLink>
    </div>

</template>


<style>

.call-container{
    padding: 0 24px 0 24px;
    margin-top : 24px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap : 20px;
}


.call-container .time-name{
    margin-top: 24px;
    display : flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap : 24px;
    width: 100%;
}

.time-name span {
    color : grey;
    font-size: 16px;
}

.time-name h2 {
    color : #0A84FF;
    font-size: 2rem;
    font-weight: 500;
}

.time-name h3 {
    color : white;
    font-size: 1.5rem;
    font-weight: 500;
}



.call-container .call-icons{
    display : flex;
    justify-content: center;
    align-items: center;
    gap : 24px;
    width: 100%;
    margin-top: 200px;
}

.call-icons .icons {
    width : 90px;
    height : 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #333333;
    cursor: pointer;
}

.call-icons img {
    width : 42px;
    height : 42px;
}

.end {
    display : flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: red;
    cursor: pointer;
}

.end img {
    width : 42px;
    height : 42px;
    color : white;
    transform: rotate(135deg);
}


</style>