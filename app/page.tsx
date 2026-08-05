import { UpcomingEvents } from "@/components/upcoming-events";
import Categories from "./component/home/categories";
import Hero from "./component/home/hero";
import TrendingEvents from "./component/home/trendingEvents";
import WhyChooseUs from "./component/home/whyChooseUs";
import Newsletter from "./component/home/newsLetter";
import Footer from "./component/home/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrendingEvents />
      <Categories/>
      <UpcomingEvents/>
      <WhyChooseUs/>
      <Newsletter/>
      <Footer/>
    </main>
  );
}