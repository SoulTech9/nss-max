
<script>
     import {fly} from 'svelte/transition';
    let u;
</script>
<svelte:window bind:scrollY={u}/>
<div id='b12'>
    <div id="jumbotron">
    
    {#if u > -1 }         
     
     <p class="heading1" in:fly|local={{ y: -400,duration: 800 }} out:fly|local={{x:-400, duration: 2000}} > CH-CHEF <br/> HELLO !!!</p><a href="/contact">
     <button id='order' type= 'button'in:fly|local={{ y: 400,duration: 800 }} out:fly|local={{x:-400, duration: 2000}} > CONTACT US</button></a>
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
    #order:hover{
        cursor: pointer;
        color: #dfaf37;
        border: 1px solid #dfaf37;
    }
    
#jumbotron {
    position: relative;
    display: flex;
    z-index: 0;
    background-image: url(/images/Jumbotron/bgmax.jfif);
    background-size: 110%;
    transition: background-size 15s linear;
    background-position: center;
    /* margin-bottom: 1rem; */
    animation: flying 15s linear infinite alternate;
    background-attachment:cover;
    width: 100% ;
    height: 40em;
    /* bottom: 3.2em; */
    overflow: hidden;
   
    
}

@keyframes flying {
    from {
        background-size: 100%;
    }

    to {
        background-size: 115%;
    }
}

@media (max-width:914px){
    #jumbotron{
        height: 60vh;
    }
    .heading1{
        top: 15%;
        left: 25%;
    }
    #order{
        left: 40%
    }
}

@media (max-width:768px){
    #jumbotron{
        height: 50vh;
    }
    .heading1{
        top: 2%;
        align-self: center;
    }
 
}

@media (max-width:591px){
    .heading1{
        font-size: 70px;
        top: 10%;
    }    
    #jumbotron{height:40vh;

}

    }
    @media(max-width:512px){
        #jumbotron{height:30vh;

        }
    }

</style>