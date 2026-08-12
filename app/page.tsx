import Categories from "./component/home/categories";
import Hero from "./component/home/hero";
import WhyChooseUs from "./component/home/whyChooseUs";
import Newsletter from "./component/home/newsLetter";
import Footer from "./component/home/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories/>
     
      <WhyChooseUs/>
      <Newsletter/>
      <Footer/>
    </main>
  );
}