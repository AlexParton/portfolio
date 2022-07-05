<script>

</script>

<style>

header {
    padding: var(--padding);
    margin: var(--top) 0 0 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.img-container {
    width: 40vw;
    height: 40vw;
    border-radius: 100%;
    overflow: hidden;
}

.text {
    margin: 12vw 0 0;
    width: calc(100% - 40vw);
}

.text p {
    line-height:1.2;
    font-weight: 300;

}

.text p:nth-child(1){
    font-size: 6vw;
    font-weight: 600;
}
.text p:nth-child(2){
    font-size: 6vw;
    line-height: 1;
}
.text p:nth-child(3){
    font-size: 3vw;
    font-weight: 200;
    padding: 1vw 0 0;
}
.text p:nth-child(4){
    font-size: 11px;
    line-height: 14px;
    font-weight: 100;
}

img {
    filter: grayscale(1) brightness(1.4);
    width: 100%;
    height: 100%;
}

@media (min-width: 768px) {

    .img-container {
        max-width: 250px;
        max-height: 250px;
    }
    .text {
        margin: 10vw 0 0;
        width: calc(100% - 250px);
    }
    .text p:nth-child(2){
        font-size: 32px;
    }
    .text p:nth-child(3){
        font-size: 24px;
        line-height: 24px;
    }
}

@media (min-width: 1000px) {
    .text {
        margin: 50px 0 0;
    }
}
</style>

<header>
    <div class="img-container">
        <img src="assets/alex-1.jpg" alt="avatar">
    </div>
    <div class="text">
        <p>alex parton</p>
        <p>web & app developer</p>
        <p>madrid, spain</p>
    </div>
    
</header>