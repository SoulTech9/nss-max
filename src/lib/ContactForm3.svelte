<script>
    import{fly} from 'svelte/transition'; 
    let xf; 
    
  </script>
  <svelte:window bind:scrollY={xf}/>
  
  
  
  
  <div class="container">
       {#if xf > -1}
          <img id="ingleft" in:fly|local={{ x: -400, duration: 600 }}
          out:fly|local={{ x: -400, duration: 2000 }} src="/images/Jumbotron/a6.png">
          {/if}
          {#if xf > 5}
          <img id="ingright" in:fly|local={{ x: 400, duration: 600 }}
          out:fly|local={{ x: 400 }} src="/images/Jumbotron/a2.png">
          {/if}
              
      <form action="action_page.php">
          <h1 id="contact-title"> CONTACT US</h1>
  
          
          <input type="text" id="fname" name="fname" placeholder="Your name..">
  
          
          <input type="text" id="phone" name="phone" placeholder="Your phone number..">
  
        
          <input type="text" id='location' name="location" placeholder="Your city...">
  
          
          <input type="text" id='email' name="email" placeholder="Your email...">
          
          
          <select id="event" name="event">
            <option value="catering">Catering Event</option>
            <option value="viphosting">VIP Host Package</option>
            <option value="delivery">Delivery</option>
          </select>
  
          
          <textarea id="subject" name="subject" placeholder="Please provide some details" style="height:200px"></textarea>
  
          <input type="submit" value="Submit">
  
      </form>
  </div>
  
  <style>
      #ingleft{
      position: absolute;
      width: 9%;
      left: 3.5%;
      top:13%;
      transform: rotate(-3deg);
      z-index: 39;
  }
  
  #ingright{
      position: absolute;
      width: 9%;
      left: 81%;
      top: 65%;
      transform: rotate(49deg);
      z-index: 39;
      
  }
     
  #contact-title{
    font-family: 'Roboto', sans-serif;
  }
  
  form{
      display: flex;  
      flex-direction: column; 
      align-items: center;
   
       color: #f0f0f0;
   }
   
   input[type=text], select, textarea {
       width: 80%; /* Full width */
       padding: 12px; /* Some padding */ 
       border: 1px solid #ccc; /* Gray border */
       border-radius: 4px; /* Rounded borders */
       box-sizing: border-box; /* Make sure that padding and width stays in place */
       margin-top: 6px; /* Add a top margin */
       margin-bottom: 16px; /* Bottom margin */
       resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
     }
     
     /* Style the submit button with a specific background color etc */
     input[type=submit] {
     
       background-color: #dfaf37;
       color: white;
       padding: 12px 20px;
       border: none;
       border-radius: 4px;
       cursor: pointer;
      
     
     }
     
     /* When moving the mouse over the submit button, add a darker green color */
     input[type=submit]:hover {
       background-color: #262626;
     }
     
     /* Add a background color and some padding around the form */
     .container {
      position: relative;
       background-color: #2a2a2a;
       background-image: url(/images/Jumbotron/blacktexture1.jpg);
       padding: 20px;
       background-size: cover;
       overflow: hidden;
     }</style>