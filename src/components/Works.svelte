<script>
import { WorkData} from '../data/works-data'
import Work from './Work.svelte'
import { createEventDispatcher, onDestroy } from 'svelte'
const dispatch = createEventDispatcher()

onDestroy(() => {
        dispatch('unmount')
    })
</script>

<style>
    .works-wrapper {
        margin-top: var(--top);
        padding-top: var(--Vpadding);
    }

    .h1-wrapper {
        padding: 0 var(--Hpadding);
    }

    .next {
        padding: var(--padding);
        text-align: center;
        background: #2b2b2b;
        color: #fff;
        cursor: pointer;
    }

    @media(min-width: 768px) {
        .h1-wrapper {
            text-align: left;
         }
    }
    

</style>

<div class="works-wrapper">
    <div class='h1-wrapper'>
        <h1>WORKS</h1>
    </div>
    {#each WorkData as work }
        <Work {work}/>
    {/each}
    <div class="next" on:click="{() => dispatch('next')}">
        Get back to the homepage to continue
    </div>
</div>