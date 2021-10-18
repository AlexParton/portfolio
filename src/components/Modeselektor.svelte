<script>
    import { createEventDispatcher, onDestroy } from 'svelte'
    const dispatch = createEventDispatcher()

    export let togglerMode;  

    onDestroy(() => {
        togglerMode = 'normal'
})

</script>

<style>
.modeselektor-wrapper {
    padding: var(--padding);
}

.modeselektor {
    border-radius: 25px;
    border: 1px solid black;
    padding: 12px;
}

.dark .modeselektor {
    border: 1px solid rgb(97, 97, 97);
}

.eightbit .modeselektor {
   background: yellow;
}

.seventies .modeselektor {
    border-radius: 50px;
    border: none;
    background: #ff57b2;
    box-shadow:  20px 20px 60px #d61980,
                -20px -20px 60px #ff7af9;
}

.early .modeselektor  {
    background: red;
    color: blue;
    font-size: 120%;
    font-weight: 900;
    border: 2px solid white;
}

.selector-item {
    margin: 15px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}

.selector-item p {
    width: calc(100% - 60px);
}

.toggler {
    width: 44px;
    border: 1px solid #858585;
    border-radius: 25px;
    position: relative;
    height: 20px;
}

.toggler button {
    width: 16px;
    height: 16px;
    background: #cacaca;
    border: none;
    border-radius: 100%;
    position: absolute;
    left: 2px;
    top: 0;
    bottom: 0;
    margin: auto;
}

.toggler button.on {
    left: initial;
    right: 2px;
    background: green;
}

.seventies .toggler {
    border: 1px solid #ff8dd0;
}

.seventies button {
    background: #ff8dd0;
}

.seventies button.on {
    background: #b9006a;
}

@media(min-width: 768px) {


    .modeselektor {
      
    margin: auto;
    padding: 40px;
    }

    .modeselektor h2 {
        margin: 0 0 30px;
    }

    .toggler {
        width: 50px;
        height: 24px;
    }
}

@media(min-width: 935px) {
    .toggler {
        cursor: pointer;
    }
}
</style>

<div class={`modeselektor-wrapper ${togglerMode}`}>
    <div class="modeselektor">
        <h2>Mode Selector</h2>
        <div class="selector-item">
            <p>Dark mode</p>
            <div class="toggler" on:click="{(togglerMode === 'dark') ? () => togglerMode = 'normal' : () => togglerMode = 'dark'}">
                <button class={(togglerMode === 'dark' ? 'on' : '')} ></button>
            </div>
        </div>
        <div class="selector-item">
            <p>8bit mode</p>
            <div class="toggler" on:click="{(togglerMode === 'eightbit') ? () => togglerMode = 'normal' : () => togglerMode = 'eightbit'}">
                <button class={(togglerMode === 'eightbit' ? 'on' : '')} ></button>
            </div>
        </div>
        <div class="selector-item">
            <p>Pink mode</p>
            <div class="toggler" on:click="{(togglerMode === 'seventies') ? () => togglerMode = 'normal' : () => togglerMode = 'seventies'}">
                <button class={(togglerMode === 'seventies' ? 'on' : '')} ></button>
            </div>
        </div>
        <div class="selector-item">
            <p>Early day web designed by a computer engineer mode</p>
            <div class="toggler" on:click="{(togglerMode === 'early') ? () => togglerMode = 'normal' : () => togglerMode = 'early'}">
                <button class={(togglerMode === 'early' ? 'on' : '')} ></button>
            </div>
        </div>
        <div class="selector-item">
            <p>Too many time looking at the screen mode</p>
            <div class="toggler" on:click="{(togglerMode === 'time') ? () => togglerMode = 'normal' : () => togglerMode = 'time'}">
                <button class={(togglerMode === 'time' ? 'on' : '')} ></button>
            </div>
        </div>
    </div>
</div>