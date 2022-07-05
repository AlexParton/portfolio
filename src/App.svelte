<script>
import BigButton from "./components/BigButton.svelte";
import Header from "./components/Header.svelte";
import TextWrapper from "./components/TextWrapper.svelte";
import Works from "./components/Works.svelte";
import { fade, slide } from 'svelte/transition'
import BackFront from "./pages/BackFront.svelte";
import Widgets from "./pages/Widgets.svelte";
import Contact from "./pages/Contact.svelte";

let page = 'home'
let navHomeActivated = false	
let navWorksActivated = false	
let navSimActivated = false	
let navWidgetsActivated = false
let navContactActivated = false	
let bigButtonCaption = 'works'
let bigButtonColor = 'black'

let mode = 'normal'

let showNav = false
let showBigButton = true

let bigButtonTrans = false

const bigButtonHandler = () => {
    navHomeActivated = true
    showNav = true
    bigButtonTrans = true

    if (bigButtonCaption === 'works') {
        page = 'works'
        setTimeout(() => { 
            bigButtonCaption = 'front vs back'
            bigButtonColor = 'magenta'
        }, 500)
    } else if (bigButtonCaption === 'front vs back') {
        page = 'sim'
        setTimeout(() => { 
            bigButtonCaption = 'widgets'
            bigButtonColor = 'yellow'
        }, 500)
    } else if (bigButtonCaption === 'widgets') {
        page = 'widgets'
        setTimeout(() => { 
            bigButtonCaption = 'contact'
            bigButtonColor = 'contact'
        }, 500)
    } else if (bigButtonCaption === 'contact') {
        page = 'contact'
    }        
}


const navLinkHandler = (toPage) => {
    page = toPage
    bigButtonTrans = (toPage === 'home') ? false : true
}
let testing = ''
//TESTING MODE
// testing = 'widgets'
// showNav = true
// navHomeActivated = true	
// navWorksActivated = true	
// navSimActivated = true	
// navWidgetsActivated = true
// navContactActivated = true	

</script>
<style>
    .myname {
        font-size: 5vw;
        max-width: 50%;
    }

    nav {
        position: fixed;
        top: 0;
        left: 0;
        height: var(--top);
        z-index: 1000000;
        display: flex;
        align-items: center;
        padding: 0 var(--Hpadding);
        background: #151515;
        width: 100%;
        color: #fff;
    }

    nav ul {
        list-style: none;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        gap: 3vw;
    }

    nav ul li {
        font-size: 4vw;
    }

    nav ul li:nth-child(2) {
        color: #00aaff;
    }
    nav ul li:nth-child(3) {
        color: magenta;
    }
    nav ul li:nth-child(4) {
        color: yellow;
    }

    nav ul li.selected {
        text-decoration: underline;
    }

    nav ul li:nth-child(5) {
        width: 5vw;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        text-align: right;
    }

    nav ul li img {
        filter: invert(1);
        max-width: calc(var(--top) / 2);
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        right: var(--Hpadding);
        width: 90%;
    }

    @media (min-width:768px) {
        .myname {
            font-size: 24px;
            max-width: 240px;
            padding: 10px 0;
        }


        nav ul li img {
            width: 25px;
        }
    }

    @media (min-width:1000px) {
        nav {
            gap: 15px
        }

        nav ul li {
            font-size: 20px;
        }
    }
</style>

<svelte:head>
    {#if mode === 'dark'}
    <link rel='stylesheet' href='/dark.css'>
    {/if}
    {#if mode === 'eightbit'}
    <link rel='stylesheet' href='/eightbit.css'>
    {/if}
    {#if mode === 'seventies'}
    <link rel='stylesheet' href='/seventies.css'>
    {/if}
    {#if mode === 'early'}
    <link rel='stylesheet' href='/early.css'>
    {/if}
    {#if mode === 'time'}
    <link rel='stylesheet' href='/time.css'>
    {/if}
</svelte:head>



{#if testing === 'widgets'}
    {#if showNav}
        <nav transition:slide role='menubar'>
            <ul role='menu'>
                {#if navHomeActivated}
                <li class={(page === 'home') ? 'selected' : ''} role='menuitem' on:click="{() => navLinkHandler('home')}">home</li>
                {/if}
                {#if navWorksActivated}
                <li class={(page === 'works') ? 'selected' : ''} role='menuitem' on:click="{() => navLinkHandler('works')}">works</li>
                {/if}
                {#if navSimActivated}
                <li  class={(page === 'sim') ? 'selected' : ''} role='menuitem' on:click="{() => navLinkHandler('sim')}">simulator</li>
                {/if}
                {#if navWidgetsActivated}
                <li  class={(page === 'widgets') ? 'selected' : ''} role='menuitem' on:click="{() => navLinkHandler('widgets')}">widgets</li>
                {/if}
                {#if navContactActivated}
                <li  class={(page === 'contact') ? 'selected' : ''} role='menuitem' on:click="{() => navLinkHandler('contact')}"><img src="assets/parabolic-antenna.svg" alt="antenna"></li>
                {/if}
            
            </ul>
        </nav>
    {/if}
<Widgets bind:togglerMode={mode} on:unmount={() => navWidgetsActivated = true}/>
{:else}
    {#if showNav}
        <nav transition:slide role='menubar'>
            <ul role='menu'>
                {#if navHomeActivated}
                <li class={(page === 'home') ? 'selected' : ''} role='menuitem' on:click="{() => navLinkHandler('home')}">home</li>
                {/if}
                {#if navWorksActivated}
                <li class={(page === 'works') ? 'selected' : ''} role='menuitem' on:click="{() => navLinkHandler('works')}">works</li>
                {/if}
                {#if navSimActivated}
                <li  class={(page === 'sim') ? 'selected' : ''} role='menuitem' on:click="{() => navLinkHandler('sim')}">simulator</li>
                {/if}
                {#if navWidgetsActivated}
                <li  class={(page === 'widgets') ? 'selected' : ''} role='menuitem' on:click="{() => navLinkHandler('widgets')}">widgets</li>
                {/if}
                {#if navContactActivated}
                <li  class={(page === 'contact') ? 'selected' : ''} role='menuitem' on:click="{() => navLinkHandler('contact')}"><img src="assets/parabolic-antenna.svg" alt="antenna"></li>
                {/if}
            
            </ul>
        </nav>
    {/if}

    <BigButton color={bigButtonColor} {bigButtonCaption} trans={bigButtonTrans} on:clicked={bigButtonHandler}/>

    {#if page === 'home'}
        <Header />
        <TextWrapper>
            <h1>hola!</h1>
            <p class='myname'>Please, click that button to start the tour.</p>
        </TextWrapper>
    {/if}



    {#if page === 'works'}
        <div in:fade={{duration:500, delay: 500}}>
            <Works  on:unmount={() => navWorksActivated = true} on:next={() => navLinkHandler('home')}/>
        </div>
    {/if}

    {#if page === 'sim'}
        <BackFront 
        on:simulating={() => showNav = false}
        on:exiting ={() => showNav = true}   
        on:unmount={() => navSimActivated = true}
        on:next={() => navLinkHandler('home')}
        />
    {/if}

    {#if page === 'widgets'}
        <Widgets bind:togglerMode={mode}  on:unmount={() => navWidgetsActivated = true}  on:next={() => navLinkHandler('home')}/>
    {/if}

    {#if page === 'contact'}
        <Contact on:unmount={() => navContactActivated = true}/>
    {/if}

{/if}

