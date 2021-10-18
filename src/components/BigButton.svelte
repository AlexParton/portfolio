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
        color: white;
    border: none;
    border-radius: 100%;
    width: 100px;
            height: 100px;
            font-size: 15px;
    position: fixed;
    top: 420px;
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
        top: 200%;
    }

    @media (min-width: 414px) {
        button {
            top: 480px;
        }

    }

    @media (min-width:768px) {
        button {
            width: 160px;
            height: 160px;
            font-size: 25px;
            top: initial;
            bottom: 100px;
        }

        button#magenta {
        font-size: 20px;
        }
    }


</style>
<div>
    <button id={color} class={(trans) && 'trans'} on:click="{clicked}">{bigButtonCaption}</button>
</div>