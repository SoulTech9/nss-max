<script>
  let zoom;
  
   
    </script>
    <div class='spacer'></div>
<div id='menu-items' class="scroll-pane">  
  <img on:click={zoom} alt='menu' class='orderup' src="/images/brunchmenu.png">
  <img on:click={zoom} alt='menu' class='orderup' src="/images/appetizermenu.png">
  <img on:click={zoom} alt='menu' class='orderup' src="/images/dinnermenu.png">
  <img on:click={zoom} alt='menu' class='orderup' src="/images/dinner4two.png">
</div>

<style>
#menu-items{
display: flex;
overflow-x: scroll;
justify-items: space-around;


background-image: url(/images/Jumbotron/14646.jpg);
} 

.spacer{
  height: 7em;
}
 .orderup{
  width: 30%;
  margin: 5px 20px;
 }
  

   </style>