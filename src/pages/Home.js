import { Hero } from "../components/Hero";
import { Featured } from "../components/Featured";
import { Faq } from "../components/faq";

export const Home = () => {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* The Leaning Green Rectangle In The Background */}
      <div 
        className="absolute top-[-10%] right-[1%] w-[1600px] h-[600px] 
                   bg-green-500/20 -rotate-12 rounded-2xl z-[-3]"
      />
        <Hero />
        <Featured />
        <Faq />       
    </main>
  )
}
