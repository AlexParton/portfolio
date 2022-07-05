<script>
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher()
    export let trans = false
    export let color = 'black'
    export let bigButtonCaption = 'works'
    const clicked = () => {
        trans = true
        dispatch('clicked')
    }
</script>

<style>
    div {
       
    display: flex;
    justify-content: center;
    align-items: center;
    }

    button {
        color: #fff;
        border: none;
        border-radius: 100%;
        width: 30vw;
        height: 30vw;
        font-size: 6vw;
        position: fixed;
        bottom: 10vh;
        transition: .6s cubic-bezier(.75,-0.5,0,1.75);
        z-index: 100;
        font-weight: 900;
    }

    button#black {
        background: #151515;
    }
    button#magenta {
        background: magenta;
        font-size: 14px;
    }
    button#yellow {
        background: yellow;
        color: #151515
    }

    button#contact {
        background: white;
        border: 3px solid #151515;
        color: #151515
    } 

    button.trans {
        bottom: -40vh;
    }


    @media (min-width:768px) {
        button {
            width: 160px;
            height: 160px;
            font-size: 25px;
            top: initial;
            bottom: 100px;
            right: 25vw;
        }

        button#magenta {
        font-size: 20px;
        }
    }


</style>
<div>
    <button id={color} class={(trans) && 'trans'} on:click="{clicked}">{bigButtonCaption}</button>
</div>