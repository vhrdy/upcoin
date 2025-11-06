import Marquee from "@/components/Marquee";
import Terminal from "@/components/Terminal";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import TextTopRight from "@/components/TextTopRight";
import PriceChart from "@/components/PriceChart";


export default function Home() {
  return (
    <div className="mx-auto grid grid-cols-1 gap-y-12 md:grid-cols-2">
      <div className="h-auto md:h-screen border-r border-muted-foreground flex flex-col items-center justify-center relative">
        <div className="w-full">
          <Marquee />
          <div className="flex flex-col px-4 gap-12">
            <Terminal />
            <Gallery />
         <Footer/>
          </div>
        </div>
      </div>
      <div className="h-auto md:h-screen grid grid-rows-2">
        <div className="h-auto md:h-full flex items-center justify-center px-4">
         <TextTopRight/>
        </div>
        <div className="h-auto md:h-full md:border-t border-white flex flex-col items-center justify-center py-4">
        <p className="text-2xl mb-2 font-bold italic">up only data</p>
          <PriceChart/>
        </div>
      </div>
    </div>
  );
}
