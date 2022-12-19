<script>
	import {fade} from 'svelte/transition'

	let click;
	let clicked ='';
  let img0 = '/images/brunchmenu.png';
  let img1 = '/images/appetizermenu.png';
  let img2 = '/images/dinnermenu.png'
  let img3 = '/images/dinner4two.png';
  const imgMenus = [img0,img1,img2,img3];

</script>
   
 
    <div class='spacer'></div>
    
<div id='menu-items' class="scroll-pane">  
 {#each imgMenus as imgMenu} <img class="image orderup" loading="lazy" on:click={()=>{clicked = imgMenu;}} alt='menu' src={imgMenu} />
 {/each}
</div>

{#if clicked !== ''}
<div class="modal" transition:fade={{duration: 100}}>
	<div on:click={() => {clicked = ''}} class="close">
		x
	</div>
	
	<div class="modal-image">
		<img class="m-image" loading="lazy" src={clicked} alt="img"/>
	</div>
</div>
{/if}


<style>
#menu-items{
display: flex;
overflow-x: scroll;

justify-items: space-around;


background-color:whitesmoke;
} 

.spacer{
  height: 7em;
}
 .orderup{
  width: 30%;
  margin: 5px 20px;
 }
  
 img:before {
background:black;
	}
	.m-image{

		width:100%;
		height:auto;
		max-height:500px;
		object-fit: scale-down;
	}
	.close {
		cursor: pointer;
		font-size: 3rem;
		position: absolute;
		right: 0;
		color: white;
		margin-right:1.5rem;
		top:0;
	}
	.image {
		cursor: pointer;
		width:100%;
		max-width:400px;
		max-height:400px;
  	transition: 0.125s;
	}
	
	.image:hover {
		opacity: 0.7;
	}
	
	img:active {
		opacity: 0.5;
	}
	
	.modal-image {
	  margin: auto;
  	display: block;
  	width: 100%;
  	max-width: 100%;	
	}
	.modal {
  	position: fixed;
		z-index: 2;
  	padding-top: 100px;
  	left: 0;
  	top: 0;
  	width: 100%;
  	height: 100%;
  	overflow: auto;
  	background-color: rgb(0,0,0);
  	background-color: rgba(0,0,0,0.9);
	}
   </style>