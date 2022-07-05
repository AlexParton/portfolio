<script>
export let work;
</script>

<style>
.work-wrapper {
    padding: var(--padding);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 1px dotted;
}

.wrap {
    width: 45%;
}

.media {
    width: 50%;
    object-fit: contain;
    padding-top: 2vw;
}

.stack {
    padding: 3vw 0 0;
    max-width: 100px;
}

@media (min-width: 768px) {
    .stack {
        max-width: 180px;
    }
}

@media (min-width: 1000px) {
    .media {
        width: 45%;
        max-width: 300px;
        padding-top: 20px;
    }
}

</style>

<div class="work-wrapper">
   
    <div class="wrap">
        <h2>{work.title}</h2>
        <h3>{work.type}</h3>
        <p>{@html work.desc}</p>
        <div class="stack">
            {#if work.stack === 'React'}
                <img src="assets/logos/react-logo.png" alt="React">
            {/if}
             {#if work.stack === 'React and Ionic'}
                <img src="assets/logos/react-logo.png" alt="React">
                <img src="assets/logos/ionic-logo.png" alt="React">
            {/if}
            {#if work.stack === 'React Native'}
                <img src="assets/logos/rn-logo.png" alt="React Native">
            {/if}
            {#if work.stack === 'Svelte'}
                <img src="assets/logos/svelte-logo.png" alt="Svelte">
            {/if}
           
        </div>
    </div>
    <img class="media" src="{work.media}" alt="{work.title}">
</div>