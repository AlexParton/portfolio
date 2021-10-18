<script>

</script>

<style>

    header {
        padding: var(--padding);
        margin: 35px 0 0 0;
    }
.img-container {
    width: 140px;
    height: 140px;
    border-radius: 100%;
    overflow: hidden;
    margin: 0 0 0 20px;
    float: left;
    shape-outside: border-box;
}

.text {
    margin: 50px 0 0;
}

.text p {
    line-height: 20px;
    font-weight: 300;

}

.text p:nth-child(1){
    font-size: 23px;
    font-weight: 600;
}
.text p:nth-child(2){
    font-size: 17px;
}
.text p:nth-child(3){
    font-size: 13px;
    font-weight: 200;
}
.text p:nth-child(4){
    font-size: 11px;
    line-height: 14px;
    font-weight: 100;
}

img {
    filter: grayscale(1) brightness(1.4);
    width: 140px;
    height: 140px;
}

@media (min-width: 768px) {
    .img-container {
        width: 250px;
        height: 250px;
        margin: 0 0 0 10%;
    }

    img {
        width: 250px;
        height: 250px;
    }
    .text {
        margin: 96px 0 0;
    }
    .text p:nth-child(1){
        font-size: 46px;
        line-height: 46px;
    }
    .text p:nth-child(2){
        font-size: 32px;
    line-height: 32px;
    }
    .text p:nth-child(3){
        font-size: 24px;
    line-height: 24px;
    }

    .text p:nth-child(4) {
        font-size: 19px;
        line-height: 28px;
    }
    
    header {
        margin-top: 80px;
    }
}
</style>

<header>
    <div class="img-container">
        <img src="assets/alex-1.jpg" alt="avatar">
    </div>
    <div class="text">
        <p>alex parton</p>
        <p>f‧e developer</p>
        <p>madrid, spain</p>
        <p>25 april 1978</p>
    </div>
    
</header>