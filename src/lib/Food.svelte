<script>import {fly} from 'svelte/transition'
    let w;
    </script>
<svelte:window bind:scrollY={w}/>


<div class="food-box">
   {#if w> 850}  <img id=ing3 alt='ingredient' in:fly|local= {{x:-400, duration: 600}} out:fly|local={{x:400}} src="/images/Jumbotron/a9.png"/> {/if}

   {#if w> 1150}  <img id=ing4 alt='ingredient' in:fly|local= {{x:400, duration: 870}} out:fly|local={{x:400}} src="/images/Jumbotron/a4.png"/> {/if}
        <h1 id="food-title">
            Featured Menus</h1>

        {#if w > 560}
        <div class="menupic-row">          
            <img class="dimg" alt= 'brunch menu' in:fly|local= {{x:400}} out:fly|local={{x:400}} src="/images/brunch.jpg" />
           <img class="dimg" alt= 'appetizer menu' in:fly|local={{y:400}} out:fly|local={{y:400}} src="/images/appetizers.jpg" />
           <img class="dimg" alt= 'dinner menu' in:fly|local={{x:-400}} out:fly|local={{x:-400}} src="/images/dinner.jpg" />            
        </div>
        {/if}
        <div class="menutext-row">
            <a class="amenu" href='/menu'><h3 id="dtitle">BRUNCH</h3></a>
            <a class="amenu" href='/menu'><h3 id="dtitle">APPETIZERS</h3></a>
            <a class="amenu" href='/menu'><h3 id="dtitle">DINNER</h3></a>
            
        </div> 
        </div>

        <style>
        
          
          #ing3{
        position: absolute;
        width: 25%;
        top: 24.5em;
        left: -4em;
        transform: rotate(50deg);
    }
          
          #ing4{
        position: absolute;
        width: 15%;
        top: 46.5em;
        left: 61em;
        transform: rotate(7deg); /*breaks page at 8deg or more*/
        
    }
            .food-box{
                position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ffffff;
    background-color: white;
    background-image: url(/images/ft-food1.png);
    background-size: cover;
    background-attachment: fixed;
    /* margin-bottom: 1.5em; */
     animation: flying 15s linear infinite alternate;
    font-family: 'Roboto', sans-serif;
            }
    @keyframes flying {
    from {
        background-size: 125%, 80%;
    }

    to {
        background-size: 130%, 115%;
    }
}
.menupic-row{
    display: flex;
    width: 100%;
    justify-content: space-around;

    
}

#food-title{
    color:#fff;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 40px;
    opacity: .93;
}


.dimg{
    max-width: 20em;
    border: solid 8px;
    border-image-source: url(/images/bl123.jpg);
    border-image-slice: 10 30;
    animation: bordertxtr 5s linear infinite alternate;
}
@keyframes bordertxtr {
    from {
        border-image-slice: 60 100;
    }

    to {
        border-image-slice:60 30;
    }


    /* clip-path: polygon(50% 5%, 61% 35%, 85% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 11% 35%, 39% 35%); */
}


.menutext-row{
    display: flex;
    width: 100%;
    justify-content: space-around;
    color: #ffffff;
    
}
.amenu{
    text-decoration: none;
    color: #fff;
}
        </style>