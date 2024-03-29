import Footer from "./layout/Footer";
import Header from "./layout/Header";
import About from "./sections/About";
import Banner from "./sections/Banner";
import Features from "./sections/Features";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Banner />
      <About />
      <Features />
      <Footer></Footer>
    </div>
  );
}