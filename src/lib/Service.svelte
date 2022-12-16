<script>import {fly} from 'svelte/transition'
let z;</script>

<svelte:window bind:scrollY={z}/>
<div class="service-box">
    <h1 id="service-title">
        SERVICES
    </h1>

    {#if z > 150 } 
    <div class="img-icons">
        <img alt='chef icon' id="service-img1" in:fly= {{x:400}} src="/images/service-icon1.png" />
        <img alt='vip table icon' id="service-img2" in:fly={{y:-400}} src='/images/service-icon2.png' />
        <img alt= 'car icon' id="service-img3" in:fly= {{x:-400}} src='./images/service-icon3.png' />
    </div>
    {/if}
    <div class="stitle-row">
        <h3 id="stitle1">CATORING</h3>
        <h3 id="stitle2">EVENT HOSTING</h3>
        <h3 id="stitle3">DELIVERY</h3>
    </div>
    <div class="stext-row" in:fly= {{x:400}}>
        <p class='text-format' id="stext1">5 star personal chef brings you the flavor you need to calm the crave. </p> 
        <p class='text-format' id="stext2">Full service package includes event space, DJ and more. </p>
        <p class='text-format' id="stext3"> Mouth watering extravaganza brought to your doorsteps (in select areas only). </p>
    </div>
    </div>

    <style>
      .service-box{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fdfdfd;
    background-color: #262626;
    font-family: 'Roboto', sans-serif;
    background-image: url(/images/Jumbotron/blacktexture1.jpg);
    background-size: cover;
    
}
.img-icons{
    display: flex;
    width: 100%;
    justify-content: space-around;   
}
.stitle-row{
    display: flex;
    width: 100%;
    justify-content: space-around;   
    
}
.stext-row{
    display: flex;
    width: 100%;
    justify-content: space-around;
    padding-left: 2.5em;
        
}
.text-format{
    max-width: 20%;
}

#service-img1 {
    max-width: 5em;
}

#service-img2 {
    position: relative;
    max-width: 5em;
    
    
 
}

#service-img3 {
    position:  relative;
    max-width: 5.5em;
    left:1em;  
}
  
    </style>