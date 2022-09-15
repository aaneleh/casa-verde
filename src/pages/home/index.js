import Header from '../../components/header';
import Hero from '../../components/hero';
import ComoConseguir from '../../components/como-conseguir';
import Ofertas from '../../components/ofertas';

function Home() {
  return (
    <div className="home">
      <Header/>
      <Hero/>
      <ComoConseguir/>
      <Ofertas/>
    </div>
  );
}

export default Home;