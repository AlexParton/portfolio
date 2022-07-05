<script>
import { createEventDispatcher, onDestroy, onMount } from 'svelte'
import Calcbugator from '../components/Calcbugator.svelte';
import MarsPhotos from '../components/MarsPhotos.svelte';
import Modeselektor from '../components/Modeselektor.svelte';
import RockPaperScissors from '../components/RockPaperScissors.svelte';
const dispatch = createEventDispatcher()

export let togglerMode
const apiKey = 'thI50oTmYBjjjuCDJ8mGzOWYrrpRomPgbQ8AGkDD'
let marsImageSrc = 'assets/curiosity.jpeg'
let rovername
let launched
let landing
let cameraName
let isDefault = true

const marsFetch = (camera, sol) => {
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&camera=${camera}&api_key=DEMO_KEY`)
     .then(res => {
         if (!res.ok) {
             throw new Error('Api connection failed :(')
         }
         return res.json();
     })
     .then(data => {
         marsImageSrc = data.photos[0].img_src
         rovername = data.photos[0].rover.name
         launched = data.photos[0].rover.launch_date
         landing = data.photos[0].rover.landing_date
         cameraName = data.photos[0].camera.full_name
         isDefault = false
     })
     .catch(err => console.log(err))
}

onDestroy(() => {
    dispatch('unmount')
})

const changeCamera = (event) => {
    const camera = event.detail[0]
    const sol = event.detail[1]
    marsFetch(camera, sol)
}


</script>

<style>
.widgets-wrapper {
    margin-top: var(--top);
    padding-top: var(--Vpadding);
}

.time.widgets-wrapper {
   animation: pulse 4s infinite;
}

@keyframes pulse {
    0%, 100% {
       filter: blur(0.3px);
    }
    50% {
        filter: blur(1.3px);
    }
  }

.h1-wrapper {
        padding: 0 var(--Hpadding);
    text-align: center;
}

.separator {
    width: 100%;
    height: 3px;
    background: black;
}

.next {
        padding: var(--padding);
        text-align: center;
        background: #2b2b2b;
        color: #fff;
        cursor: pointer;
        font-size: 20px;
    }

@media(min-width: 768px) {
    .h1-wrapper {
        text-align: left;

    }

}

</style>

<div class={`widgets-wrapper ${togglerMode}`}>
    <div class='h1-wrapper'>
        <h1>WIDGETS</h1>
    </div>
    <Modeselektor bind:togglerMode={togglerMode}/>
    <div class="separator"></div>
    <MarsPhotos {togglerMode} {isDefault} on:camera={changeCamera} marsImage={marsImageSrc}  {rovername} {launched} {landing} {cameraName}/>
    <div class="separator"></div>
    <RockPaperScissors {togglerMode}/>
    <div class="separator"></div>
    <Calcbugator {togglerMode}/>
    <div class="next" on:click="{() => dispatch('next')}">
        Almost finished!<br> Back to homepage to say goodbye
    </div>
</div>