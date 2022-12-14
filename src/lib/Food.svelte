<div class="food-box">
    <img id=ing3 alt='ingredient' src="/images/Jumbotron/a9.png"/>
        <h1 id="food-title">
            FEATURED MENUS</h1>

        <div class="menupic-row">
            
             <img class="dimg" alt= 'brunch menu'src="/images/ft-food1.png" />
           <img class="dimg" alt= 'appetizer menu' src="/images/ft-food1.png" />
           <img class="dimg" alt= 'dinner menu' src="/images/ft-food1.png" />
            
        </div>
        <div class="menutext-row">
            <a class="amenu" href='/menu'><h3 id="dtitle">BRUNCH</h3></a>
            <a class="amenu" href='/menu'><h3 id="dtitle">APPETIZERS</h3></a>
            <a class="amenu" href='/menu'><h3 id="dtitle">DINNER</h3></a>
            
        </div> 
        </div>

        <style>
            #ing3{
        position: absolute;
        width: 20%;
        top: 5.5em;
        left: -4em;
        transform: rotate(50deg);
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
    color: #ffffff;
}


.dimg{
    max-width: 20em;
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