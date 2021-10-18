<script>
    import { createEventDispatcher, onDestroy } from 'svelte'
import BackendSim from "./BackendSim.svelte";

const dispatch = createEventDispatcher()

 let onSim = false

 const simHandler = () => {
    onSim = !onSim
    dispatch('simulating')
 }

 const simExitHandler = () => {
    onSim = false
    dispatch('exiting')
 }

 onDestroy(() => {
        dispatch('unmount')
    })
</script>

<style>
.backfront {
    padding: var(--padding);
    margin-top: var(--top);
    margin-bottom: 22vw;
}

h1 span {
    font-size: 14px;
    font-weight: 400;
}

p {
    font-size: 20px;
}

h3 {
    font-size: 20px;
    margin: 20px 0;
}

button {
    height: 35px;
    padding: 0 10px;
    border-radius: 10px;
    border: 1px dotted;
    background: none;
    width: 210px
}

p.disclaimer {
    font-size: 12px;
    margin: 20px 0 0;
    color: grey;
}
.h1-wrapper {
    padding: 0 var(--Hpadding);
    text-align: center;
}

.next {
    padding: var(--padding);
    text-align: center;
    background: #2b2b2b;
    color: #fff;
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    cursor: pointer;
    }

@media (min-width: 768px) {
    p {
        font-size: 1.8em;
        width: 80%;
    } 

    .h1-wrapper {
        text-align: left;
        padding: 0;
    }

    h1 span {
        font-size: 28px;
    }

    h3 {
        font-size: 30px;
        margin: 40px 0;
    }

    button {
        width: auto;
        padding: 0 20px;
        height: 40px;
        font-size: 18px;
    }

    p.disclaimer {
        font-size: 17px;
        margin: 40px 0 0;
    }
    .backfront {
        margin-bottom: 0;
    }
}
</style>

{#if !onSim}
    <div class="backfront">
        <div class="h1-wrapper">
            <h1>Frontend <span>vs</span> Backend</h1>
        </div>
        <p>Frontend and Backend are the two sides that shape a web application, you probably know that already, but even in that case this may interest you.</p>
        <p>Frontend is all about what the user sees, but...</p>
        <h3>What does the backend see?</h3>
        <button on:click={simHandler}>Enter the Backend Simulator</button>
        <p class="disclaimer">You will need to allow this app tu use your camera. Only for entertainment purposes, no data recordings will be made</p>
        <div class="next" on:click="{() => dispatch('next')}">
            Get back to the homepage for more
        </div>
    </div>
{:else}
   <BackendSim on:exit={simExitHandler}/>
{/if}
