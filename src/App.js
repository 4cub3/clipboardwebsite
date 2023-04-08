import Header from "./components/header/Header";
import Snippet from "./components/snippet/Snippet";
import Features from "./components/features/Features";
import Access from "./components/access/Access";
import SuperCharge from "./components/supercharge/SuperCharge";
import References from "./components/referrences/References";
import Bottom from "./components/bottom/Bottom";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Snippet />
        <Features />
        <Access />
        <SuperCharge />
        <References />
        <Bottom />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
