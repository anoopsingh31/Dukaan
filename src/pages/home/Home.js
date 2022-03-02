import Homehero from '../../components/home/homehero/Homehero';
import Howitworks from '../../components/home/howitworks/Howitworks';
import Freeproducts from '../../components/home/freeproducts/Freeproducts';


function Home() {
    return (
      <div className="App">
        <Homehero />
        <Howitworks /> 
        <Freeproducts />
      </div>
    );
  }

  export default Home;