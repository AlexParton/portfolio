<script>
    import { fade } from 'svelte/transition'
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher()
export let marsImage
export let camera = 'fhaz'
export let sol = '1000'
export let rovername
export let launched
export let landing
export let cameraName
export let isDefault
export let togglerMode
let showDetails = false
</script>

<style>
.header {
    padding: var(--padding);
}

.control {
    padding: 0 var(--Hpadding) 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
}

.select-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    width: 30%;
}

select {
    width: 100%;
    height: 26px;
    border-radius: 4px;
    font-size: 12px;
}

label {
    width: 100%;
    font-weight: 300;
}

button {
    width: 30%;
    height: 28px;
    border-radius: 8px;
    border: none;
    background: #464646;
    color: white;
}
.img-container {
    width: 280px;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    border-radius: 35px;
    height: 250px;
}

.img-container .text {
    position: absolute;
    top: 20px;
    left: 20px;
    max-width: 80%;
}

.img-container p {
    
    color: lime;
    font-size: 18px;
    font-weight: 500;
    text-shadow: 1px 1px 10px black;
}

.details {
    position: absolute;
    bottom: 20px;
    right: 10px;
    width: 45px;
    height: 40px;
    font-size: 10px;
   
}

.details.show {
    background: #00000082;
    border: 1px solid lime;
    color: lime;
}

.details.hide {
    background: #00000082;
    border: 1px solid white;
    color: white;
}

.image-wrapper {
    width: 100%;
    position: relative;
    height: 300px;
    background: black;
    margin-bottom: 20px;
}

.early h2 {
    text-shadow: none;
    animation: pulse 2s steps(1) infinite;
}

@keyframes pulse {
    0%, 100% {
        color: #04bf04;
    }
    50% {
        color: #fffb00;
    }
  }

  .early p {
    color: #ff0000
  }

  .early select {
    background: green;
    color: yellow;
    border: 2px solid red;
  }

  .early button {
    background: red;
    color: #0802ff;
    font-weight: 900;
    font-size: 16px;
  }
  @media(min-width:768px) {
      .header {
          padding-bottom: 20px;
      }

      .control {
        padding: 0 var(--Hpadding) 30px;
      }

      label {
          font-size: 18px;
      }

      select {
        height: 35px;
    font-size: 15px;
    padding: 0 5px;
      }

      button {
        height: 35px;
        font-size: 15px;
      }

      .image-wrapper {
          height: 550px;
          margin-bottom: 60px;
      }

      .img-container {
          height: 500px;
          width: 500px;
      }

      .details {
        width: 60px;
    height: 50px;
    font-size: 13px;
      }

      .img-container p {
          font-size: 24px;
      }

      h2 {
          margin-bottom: 30px;
      }
  }

</style>

<div class={`mars-wrapper ${togglerMode}`}>
    <div class="header">
        <h2>Api Call</h2>
        <p>Select a camera and a Sol (martian day) and see whats going on on Mars thanks to this wonderful API offered by NASA.</p>
    </div>
    <div class="control">
        <div class="select-wrapper">
            <label for="camera">Camera</label>
            <select name="camera" id="camera" bind:value={camera} >
                <option value="fhaz">FHAZ</option>
                <option value="rhaz">RHAZ</option>
                <option value="mast">MAST</option>
                <option value="chemcam">CHEMCAM</option>
            </select>
        </div>
        <div class="select-wrapper">
            <label for="sol">Sol</label>
            <select name="sol" id="sol" bind:value={sol}>
                <option value="1000">1000</option>
                <option value="766">766</option>
                <option value="634">634</option>
                <option value="573">573</option>
                <option value="423">423</option>
                <option value="303">303</option>
            </select>
        </div>
        
        
        <button on:click="{() => dispatch('camera', [camera, sol])}">Get Image</button>
    </div>

   
    <div transition:fade class="image-wrapper">
        <div transition:fade class="img-container">
            <img src="{marsImage}" alt="mars">
            {#if showDetails}
            <div class="text">
                <p>Rover name:{(rovername) && rovername}</p>
                <p>Launched date:{(launched) && launched}</p>
                <p>Landing date:{(landing) && landing}</p>
                <p>Camera name:{(cameraName) && cameraName}</p>
            </div>
            {/if}
            {#if !isDefault}
                <button on:click="{() => showDetails = !showDetails}" class={(showDetails) ? 'show details' : 'hide details'}>{(showDetails) ? 'Hide details' : 'Show details'}</button>
            {/if}
        </div>
    </div>
</div>