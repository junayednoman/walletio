import Footer from "./layout/Footer";
import Header from "./layout/Header";
import About from "./sections/About";
import Banner from "./sections/Banner";
import Features from "./sections/Features";
import Testimonial from "./sections/Testimonial";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Banner />
      <About />
      <Features />
      <Testimonial />
      <Footer></Footer>
    </div>
  );
}