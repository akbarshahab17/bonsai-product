import { Hero } from "../components/Hero";
import { Featured } from "../components/Featured";
import { Faq } from "../components/faq";

export const Home = () => {
  return (
    <main>
        <Hero />
        <Featured />
        <Faq />       
    </main>
  )
}
