<script>
export let work;
</script>

<style>
.work-wrapper {
    padding: var(--padding);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;
    border-bottom: 1px dotted;
}

.wrap {
    width: 45%;
    position: relative;
}

.media {
    width: 50%;
}

.stack {
    padding: 0 20px 0 0;
    position: absolute;
    bottom: 0;
}

@media (min-width: 768px) {
    .stack  img {
        max-width: 200px;
    }
}

@media (min-width: 935px) {
    .media {
        width: 45%;
        max-width: 300px;
    }
}

</style>

<div class="work-wrapper">
   
    <div class="wrap">
        <h2>{work.title}</h2>
        <h3>{work.type}</h3>
        <p>{work.desc}</p>
        <div class="stack">
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