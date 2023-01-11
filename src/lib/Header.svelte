<script> 
import{fly} from 'svelte/transition';
    let y = 0 ;
    let lastY = 0;
    let isScrollingDown = false;
    function onScroll(val){
        isScrollingDown = (lastY < val)
        lastY = val;
    }
    $: console.log(y)
    $ : onScroll(y)

    let active = false;

	export let click = '';
	export let toggle = 'true';

</script>

<svelte:window bind:scrollY={y}/>


{#if !isScrollingDown }
<header class = 'page-header active' in:fly|local ={{ x: -400, duration: 1000}} out:fly|local={{x:-400, duration: 1000}}>
	<div class='logo'>
        
		<img src='/images/logo.png' alt="logo" />
	</div>
	<div class='square'></div>
  
  
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<ul class="nav" class:active on:click={()=> active = !active}>
		<li class="nav-list"><a href="/">MAIN</a></li>
		<li class="nav-list"><a href="/services">SERVICES</a></li>
		<li class="nav-list"><a href="/menu">MENUS</a></li>
		<li class="nav-list"><a href="/contact">CONTACT</a></li>
        
    </ul>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class='hamburger' class:active= {active} on:click={()=> active = !active}>
        <span class= 'bar'></span>
        <span class= 'bar'></span>
        <span class= 'bar'></span>
    </div>
    
  </header>
{/if}
<!-- <div id="spacer1"></div> -->




<style>
    

    .hamburger{
        display: none;
        cursor: pointer;
    }
    .bar{
        display: block;
        width: 25px;
        height: 3px; 
        margin: 5px auto;
        -webkit-transition:all 0.3s ease-in-out ;
        transition:all 0.3s ease-in-out ;
        background-color: #262626;
    }
    #spacer1{height:7em ;}

header {
width: 100%;
height: 7em;
position: fixed;
display: flex;
background-color: #ffffff;
box-shadow: 0 3px 10px 1px rgb(0 0 0 / 0.8);
justify-content:space-between;
background-image: url(/images/Jumbotron/texture1.jpg);
background-size: cover;
background-position: center;

z-index: 2;
}


.logo {
display: flex;
width: 5.5em;
height: 5.5em;
object-fit: cover;
justify-self: flex-start;
position: relative;
left: 2.4em;
top: .5em;
z-index: 4;
}
.square {
position: absolute;
height: 7em;
width: 11.1em;
background-color: #171717;
background-image: url(/images/Jumbotron/blacktexture1.jpg);
background-size: cover;
z-index: 3;
}



.nav {
display: flex;
justify-self: flex-end;
align-self: flex-end;
position: relative;
right: 1em;

}

.nav-list {
display: inline;
color: #080808;
}

.nav li a {
padding: 0px 5px;
font-family: 'Roboto', sans-serif;
font-size: .8rem;
color: black;
text-decoration: none;
/* transition: color 200ms linear, font-size 200ms linear; */
}

.nav li a:hover {
color: #dfaf37;
text-decoration: underline;

}
    @media (max-width: 768px){
        .hamburger{
            display: block;
        }
    
        .hamburger.active .bar:nth-child(2){
            opacity:0;
        }
        .hamburger.active .bar:nth-child(1){
            transform: translateY(8px) rotate(45deg);
        }
        .hamburger.active .bar:nth-child(3){
            transform: translateY(-8px) rotate(-45deg);
        }
        header{
            height: 3.5em;
        }
        .logo{
            height: 3em;
            top: 1px;
        }
        .square{
            height: 3.5em;
            width: 8em ;
        }
        .nav{
            position: fixed;
            left:-110%;
            top: 39.7px;
            gap: 0;
            flex-direction: column;
            background-color: #262626 ;
            background-image: url(/images/Jumbotron/texture1.jpg);
            width: 100%;
            height: 100vh;
            text-align: center;
            transition: 0.4s;
            z-index: -2;
            box-shadow: 0 3px 5px 0px rgb(0 0 0 / 0.8);
        }
        .nav-list{
            margin: 16px 0;
        }
        .nav.active{
            left: 0;
            
        }
       
    }

  

</style>
