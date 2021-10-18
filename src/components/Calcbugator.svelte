<script>
let screener = ''
let results = ['Terminator 2', 'Copenhagen', 'Sigourney Weaver', 'Watermelon', 'Josh Baskin', 'Nachos with guacamole', 'Scissors', 'Lightning McQueen', 'Boo-Chan', 'Rocket League']
let resultGiven = false
let dotCounter = 0

export let togglerMode

const resultHandler = () => {
    const random = Math.floor(Math.random() * results.length)
    screener = results[random]
    resultGiven = true
    dotCounter = 0
}

const operatorHandler = (operator) => {
    const isSymbol = (operator === '+' || operator === '-' || operator === '/' || operator === '*')
   
    if ((isSymbol) && (screener[screener.length-1] === '+' || screener[screener.length-1] === '-' || screener[screener.length-1] === '/' || screener[screener.length-1] === '*' || screener.length === 0)) {

    } else {
        if ((operator === '.' && dotCounter < 1) || operator !== '.') {
        if (!resultGiven) {
            screener = screener + operator 
        } else {
            screener = operator
            resultGiven = false
        }
    }   
    (operator === '.') && dotCounter++
    }
}

</script>

<style>
.calcbugator-wrapper {
    padding: var(--padding)
}

.calculator {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    border-radius: 10px;
    border: 1px solid black;
    margin: 20px auto;
    background: #e2e2e2;
    padding: 10px;
}

.calculator ul {
    list-style: none;
}

.calculator-screen {
    margin: 5px 0 15px;
    background: #eaf9e4;
    width: 100%;
    border-radius: 5px;
    height: 40px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    overflow: hidden;
}

.calculator-screen p {
    padding: 0 10px 0 0;
    font-size: 20px;
}

.controls {
    width: 100%;
}

.controls, .ints {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
}

.numbers {
    width: 80%;
}

li {
    width: 29%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    border: 1px solid black;
    border-radius: 5px;
    margin: 0 0 10px;
    font-size: 18px;
    font-weight: 600;
}

.operators {
    width: 20%;
}

.operators li {
    width: 100%;
}

.zero {
    display: flex;
    justify-content: space-around;
}

button {
    width: 95%;
    height: 40px;
    font-size: 30px;
    border-radius: 25px;
    border: none;
    background: grey;
    color: white;
    margin: 10px auto;
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

  .early .calculator {
    background: green;
  }

  .early li {
    color: chartreuse;
  }

  .early button {
    background: blue;
  }

  @media(min-width:768px) {

      h2 {
          margin-bottom: 30px;
      }

      .calculator {
        padding: 20px;
    margin: 40px auto;
      }

      .calculator-screen {
        margin: 0 0 25px;
    height: 50px;
      }

      .calculator-screen p {
          font-size: 24px;
      }

      li {
          height: 40px;
          font-size: 22px;
          cursor: pointer;
      }
  }
</style>

<div class={`calcbugator-wrapper ${togglerMode}`}>
    <div class="header">
        <h2>Calcbugator</h2>
        <p>Not sure why but I have the feeling this calculator does not work 100% as expected</p>
    </div>
    <div class="calculator">
        <div class="calculator-screen">
            <p>{screener}</p>
        </div>
        <div class="controls">
            <div class="numbers">
                <ul class="ints">
                    <li on:click="{() => operatorHandler('1')}">1</li>
                    <li on:click="{() => operatorHandler('2')}">2</li>
                    <li on:click="{() => operatorHandler('3')}">3</li>
                    <li on:click="{() => operatorHandler('4')}">4</li>
                    <li on:click="{() => operatorHandler('5')}">5</li>
                    <li on:click="{() => operatorHandler('6')}">6</li>
                    <li on:click="{() => operatorHandler('7')}">7</li>
                    <li on:click="{() => operatorHandler('8')}">8</li>
                    <li on:click="{() => operatorHandler('9')}">9</li>
                </ul>
                <ul class="zero">
                    <li on:click="{() => screener = screener.slice(0, -1)}">C</li>
                    <li on:click="{() => operatorHandler('0')}">0</li>
                    <li on:click="{() => operatorHandler('.')}">.</li>
                </ul>
            </div>
            <div class="operators">
                <ul>
                    <li on:click="{() => operatorHandler('+')}">+</li>
                    <li on:click="{() => operatorHandler('-')}">-</li>
                    <li on:click="{() => operatorHandler('/')}">/</li>
                    <li on:click="{() => operatorHandler('*')}">*</li>
                </ul>
            </div>
            <button on:click="{resultHandler}">=</button>
        </div>
    </div>
</div>