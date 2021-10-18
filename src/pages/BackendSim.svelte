<script>
   import { createEventDispatcher, onDestroy } from 'svelte'
    const dispatch = createEventDispatcher();

    let videoEl
   
    const videoTake = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({video:true})
            videoEl.srcObject = stream;
            videoEl.play();
        } catch(e) {
            console.error(e, 'camera access denied :(')
        }
    }

    let videoOn = false

    $:(videoOn) && videoTake() 


</script>

<style>
main {
    position: relative;
}

.video-container {
    position: absolute;
    height: 100vh;
    width: 100%;
    z-index: -1;
    filter: hue-rotate(
203deg
) blur(3px);
overflow: hidden;
}
video {
    height: 100vh;
}

.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: var(--padding);
    background: black;
    height: 60px;
    z-index: 100;
}

.selector {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}

.selector span:nth-child(1), .selector.right span:nth-child(3) {
    color: white;
}

.selector span:nth-child(3), .selector.right span:nth-child(1) {
    color: #8c8c8c;
}

.toggler {
    width: 50px;
    height: 20px;
    border-radius: 25px;
    border: none;
    position: relative;
}

.toggler div {
    width: 18px;
    height: 18px;
    border-radius: 100%;
    background: green;
    position: absolute;
    top: 1px;
    left: 1px;
    right: initial;
}

.selector.right .toggler div {
    left: initial;
    right: 1px
}

.demo-layout {
    top: 60px;
    left: 0;
    position: absolute;
    font-family: sans-serif;
}

.demo-header {
    padding: var(--padding);
    text-align: center;
    background: #95da9585;
}

.demo-body {
    padding:var(--padding);
    text-align: center;
}

.demo-layout.backend {
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    filter: blur(2px);
}

.card {
    margin: 15px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
45deg
, #77191947, #42050526);
    border-radius: 8px;
    padding: var(--padding);
    color: #5f0505;
    flex-wrap: wrap;
    text-align: center;
}

.card2 {
    background: linear-gradient(
45deg
, #48771947, #42050526);
}

.card3 {
    background: linear-gradient(
45deg
, #3b197747, #42050526);
}

.exit {
    position: fixed;
    bottom: 0;
    border: none;
    font-size: 12px;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
    color: white;
}

@media(min-width: 768px) {
    .selector {
        max-width: 400px;
    margin: auto;
    font-size: 22px;
    width: 100%;
    }

    .header {
        padding: 0;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    }

    .demo-layout {
        top: var(--top)
    }

    .card {
        margin: 25px auto;
        width: 80%;
    }

    .card h3 {
        width: 100%;
    }

    .exit {
        font-size: 20px;
        height: 60px;
    }

    .toggler {
        width: 56px;
        height: 25px;
    }

    .toggler div {
        width: 23px;
        height: 23px;
    }
}
@media(min-width:935px) {
    video {
        width: 100%;
    height: auto;
    }
}

</style>

<main>
    <div class="header">
        <div class={(videoOn) ? 'selector right' : 'selector'}>
            <span>Frontend view</span>
            <button on:click="{() => videoOn = !videoOn}" class="toggler">
                <div></div>
            </button>
            <span>Backend view</span>
        </div>
    </div>
    <div class={(videoOn) ? 'demo-layout backend' : 'demo-layout'}>
        <div class="demo-header">
            <h2>Demo Layout</h2>
            <p>Welcome to the demo layout</p>
        </div>
        <div class="demo-body">
            <h3>Some Title</h3>
            <p>Don't waste too much time reading this, it says practically nothing, just toggle that button on top to activate the backend view.
                This layout is here just for mocking purposes.</p>
            <div class="card card1">
                <h3>A CARD</h3>
                <p>Websites have cards, don't they?!</p>
            </div>
            <div class="card card2">
                <h3>ANOTHER CARD</h3>
                <p>They do! A lot of them indeed.</p>
            </div>
            <div class="card card3">
                <h3>YET ANOTHER CARD</h3>
                <p>The last one, enjoy them while they are here.</p>
            </div>
    
        </div>
        <button on:click="{() => dispatch('exit')}" class="exit">EXIT SIMULATOR</button> 
    </div>
   
    {#if videoOn}
    <div class="video-container">
        <video bind:this={videoEl}></video>
    </div>
    {/if}
   
    

</main>