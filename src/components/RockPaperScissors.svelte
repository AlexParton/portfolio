<script>
    import {scale} from 'svelte/transition'
let soundOn = false
let onGame = false
let weaponSelected = false
let weaponMode = ''
let fightResult = ''
let picIntval
let picCounter = 0
let playAgainShow = false

export let togglerMode

const randomPic = (flag) => {
    if (flag) {
        picIntval = setInterval(() => {
            if (picCounter === 2) {
                picCounter = 0
            } else {
                picCounter ++
            }
        }, 100)
    } else {
        clearInterval(picIntval)
    }
    
}

const startGameHandler = () => {
    onGame = true
    randomPic(true)
}

const resetGame = () => {
    setTimeout(() => {
        fightResult = ''
        playAgainShow = true
    }, 2000)
}

const rePlay = () => {
    playAgainShow = false
    randomPic(true)
    weaponMode = ''
    weaponSelected = false
}

const playAudio = (audioSrc) => {
    if (soundOn) {
        let audio = new Audio(audioSrc)
    setTimeout(() => { audio.play()}, 500)
    } else {
        console.log('Sound is off :(')
    }
}

const fightHandler = (weaponSelected) => {
    if (weaponSelected === 'rock') {
        if (picCounter === 0) {
            fightResult = 'draw'
            playAudio('assets/audio/draw.mp3')
        } else if (picCounter === 1) {
            fightResult = 'lose'
            playAudio('assets/audio/lose.mp3')
        } else {
            fightResult = 'win'
            playAudio('assets/audio/win.mp3')
        }
    }

    if (weaponSelected === 'paper') {
        if (picCounter === 1) {
            fightResult = 'draw'
            playAudio('assets/audio/draw.mp3')
        } else if (picCounter === 2) {
            fightResult = 'lose'
            playAudio('assets/audio/lose.mp3')
        } else {
            fightResult = 'win'
            playAudio('assets/audio/win.mp3')
        }
    }

    if (weaponSelected === 'scissors') {
        if (picCounter === 2) {
            fightResult = 'draw'
            playAudio('assets/audio/draw.mp3')
        } else if (picCounter === 0) {
            fightResult = 'lose'
            playAudio('assets/audio/lose.mp3')
        } else {
            fightResult = 'win'
            playAudio('assets/audio/win.mp3')
        }
    }

    resetGame()
}

const weaponSelectHandler = (weapon) => {
    weaponSelected = true
    weaponMode = weapon
    randomPic(false)
    setTimeout(() => {
        fightHandler(weapon)
    }, 1000)
}

let weaponImg = ['assets/rock.png', 'assets/paper.png', 'assets/scissors.png']
$: weaponImgSrc = weaponImg[picCounter]
</script>

<style>
.rps-wrapper {
    padding: var(--padding);
}

.game-wrapper {
    text-align: center;
    border: 1px solid;
    width: 100%;
    margin: 20px auto;
    position: relative;
    border-radius: 10px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.starter {
    width: 150px;
    aspect-ratio: 1;
    border-radius: 100%;
    margin: 0 auto;
}

.sound-toggler {
    border: none;
    position: absolute;
    width: 25px;
    height: 25px;
    right: 15px;
    top: 15px;
    background: none;
}

.weaponery {
    width: 90%;
    border: 1px solid black;
    border-radius: 20px;
    display: flex;
    height: 30px;
    overflow: hidden;
    justify-content: space-evenly;
    transform: translateY(-10px);
}

.weaponery span {
    width: 33.4%;
    border-right: 1px solid;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.weaponery span.on {
    background: #008052;
    color: white;
    font-weight: bold
}

.weaponery span:nth-child(3) {
    border: none;
}

.arena {
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.arena h2 {
    position: absolute;
    width: 90%;
    height: 35px;
    background: #0000009e;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    color: white;
}

.weapon-container {
    width: 160px;
    height: 100%;
}

img.result {
    position: absolute;
    top: 0;
    bottom: 25px;
    left: 0;
    right: 0;
    margin: auto;
    width: 80%;
    max-width: 300px;
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

  .early .game-wrapper {
    border: 1px solid rebeccapurple;
  }

  .early .sound-toggler img {
    background: white
  }

  .early .starter {
    background: green;
    color: cyan;
    font-size: 30px;
  }

  @media(min-width: 768px) {
   
    h2 {
          margin-bottom: 30px;
      }

      .game-wrapper {
        width: 100%;
        margin: 40px 0 0;
        height: 350px;
      }

      .sound-toggler {
          top:20px;
          right:20px;
      }

      .starter {
          font-size: 18px;
      }

      .weapon-container {
        width: 230px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
      }

      .weaponery {
          height: 40px;
          max-width: 400px;
      }

      .weaponery span {
          font-size: 20px;
          cursor: pointer;
      }

      .arena h2 {
        max-width: 400px;
        cursor: pointer;
        height: 50px;
        font-size: 22px;
        margin-bottom: 0;
      }
  } 

  @media (min-width:1000px) {
    .starter {
        width: 250px;
        height: 250px;
        font-size: 25px;
        box-shadow: 0 0 11px #ff00e15e;
        border: none;
    }
  }
</style>

<div class={`rps-wrapper ${togglerMode}`}>
    <div class="header">
        <h2>Rock, Paper, Scissors</h2>
        <p>Maybe not GTA V, but this game could also be very exciting! Turn sound on for even more fun.</p>
    </div>
    <div class="game-wrapper">
        <button on:click="{() => soundOn = !soundOn }" class="sound-toggler"><img src="{(soundOn) ? 'assets/volume.svg' : 'assets/mute.svg'}" alt="speaker"></button>
        {#if !onGame}
            <button on:click="{startGameHandler}" class="starter">START GAME</button>
        
        {:else}
        <div class="arena">
                {#if !weaponSelected}
                    <h2>Select your weapon</h2>
                {/if}
                <div class="weapon-container">
                    <img src="{weaponImgSrc}" alt="weapon">
                </div>
                {#if fightResult === 'win'}
                    <img transition:scale class="result" src="assets/win.png" alt="result">
                {:else if fightResult === 'lose'}
                    <img transition:scale class="result" src="assets/lose.png" alt="result">
                {:else if fightResult === 'draw'}
                    <img transition:scale class="result" src="assets/draw.png" alt="result">
                {/if}

                {#if playAgainShow}
                    <h2 on:click="{rePlay}">PLAY AGAIN</h2>
                {/if}
            </div>
            <div class="weaponery">
                <span class={(weaponMode === 'rock' ? 'on' : '')} on:click="{() => (weaponMode === '') && weaponSelectHandler('rock')}">ROCK</span>
                <span class={(weaponMode === 'paper' ? 'on' : '')} on:click="{() => (weaponMode === '') && weaponSelectHandler('paper')}">PAPER</span>
                <span class={(weaponMode === 'scissors' ? 'on' : '')} on:click="{() => (weaponMode === '') && weaponSelectHandler('scissors')}">SCISSORS</span>
            </div>
        {/if}
    </div>  
</div>