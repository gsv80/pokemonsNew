
import s from './style.module.css';

import MenuHeader from '../../components/Header/MenuHeader';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import PokemonCard from '../../components/PokemonCard';
import pokemonCards from '../../data/pokemonCards.json';

import urlBg from '../../assets/bg3.jpg';


const pokemons = pokemonCards;
console.log("#### the pokemons imported from PokemonCards ", pokemons);

function HomePage({onChangePage}) {

  const handleClickButton = (page)=> {
    // console.log('#### <HomePage/>')
    onChangePage &&onChangePage(page);

  }

    
  return (
    <div >
      <MenuHeader />
      <Header 
          title = "This is Pokemon Card Game" 
          desc="Simple Triple Triad Card Game"
          onClickButton = {handleClickButton}
      />
      <Layout  
          title ="Game rules"  
          colorBg ='#e2e2e2'
          urlBg = {urlBg}
      >
        <p>
            In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
            Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.
        </p>
        <p>
            To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead. 
        </p>
      </Layout>    
      
      <Layout  
          title ="Pokemon Cards"  
          
          colorBg ='#e2e2e2'
          // urlBg = {urlBg}
      >
        <div className={s.flex}>

              {
                pokemons.map((item) => 
                  
                  <PokemonCard 
                 
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    values={item.values}
                    type={item.type}
                    img={item.img}
                
                />) 
              }    
              </div> 
      </Layout>    
          
      <Footer 
          title="Finish Page"
          desc =  "Thanks for visiting"
      />
    </div>
  );
}

export default HomePage;
