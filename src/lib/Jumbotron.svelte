
<script>
     import {fly} from 'svelte/transition';
    let u;
</script>
<svelte:window bind:scrollY={u}/>
<div id='b12'>
    <div id="jumbotron">
    
    {#if u > -1 }         
     
     <p class="heading1" in:fly|local={{ y: -400,duration: 800 }} out:fly|local={{x:-400, duration: 2000}} > CH-CHEF <br/> HELLO !!!</p> 
     <button id='order' type= 'button'in:fly|local={{ y: 400,duration: 800 }} out:fly|local={{x:-400, duration: 2000}} > CONTACT US</button>
     {/if}
    </div>
    </div>


<style>

#order{

    position: absolute;
    color: rgb(255, 255, 255);
        font-size: 25px;
        top: 80%;
        justify-items: center;
        left: 45%;
        font-family: 'Roboto', sans-serif;
        font-weight: bolder;
        background-color: rgb(255, 255, 255,0);
        border: 1px solid white;
        border-radius: 1px;
        opacity: .98;
    } 
    
   .heading1{
        font-family: 'Josefin Sans', sans-serif;
        position: absolute;
        color: rgb(255, 255, 255);
        font-size: 94px;
        top: 30%;
        left: 34%;
        font-weight: bolder;
        opacity: .95;
    } 
    
    
#jumbotron {
    position: relative;
    display: flex;
    z-index: 0;
    background-image: url(/images/Jumbotron/bgmax.jfif);
    background-size: 110%, 115%;
    transition: background-size 15s linear;
    background-position: center;
    /* margin-bottom: 1rem; */
    animation: flying 15s linear infinite alternate;
    background-attachment: fixed;
    width: 100% ;
    height: 40em;
    /* bottom: 3.2em; */
    overflow: hidden;

   
    
}

@keyframes flying {
    from {
        background-size: 110%, 80%;
    }

    to {
        background-size: 125%, 115%;
    }
}

/* #core-tron {
    padding-left: 10%;
    width: 80%;
    z-index: 1;

} */

</style>