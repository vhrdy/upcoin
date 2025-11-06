import Marquee from "@/components/Marquee";
import Terminal from "@/components/Terminal";
import Gallery from "@/components/Gallery";
import { GradientText } from "@/components/ui/shadcn-io/gradient-text";

const socialLinks = [
  {
    name: "X (Twitter)",
    href: "https://x.com/",
    icon: "𝕏",
  },
  {
    name: "X (Twitter) Community",
    href: "https://x.com/",
    icon: "𝕏",
  },
  {
    name: "MemeDepot",
    href: "https://x.com/",
    icon: "",
  },
  {
    name: "Buy on Jup",
    href: "https://jup.ag/?buy=CgwW9y8aLVJKGSLbjRr23mY1iGSDpwgbQetLAph15fRk&sell=So11111111111111111111111111111111111111112"
  }
];

export default function Home() {
  return (
    <div className="mx-auto grid grid-cols-1 md:grid-cols-2">
      <div className="h-auto md:h-screen border-r border-muted-foreground flex flex-col items-center justify-center relative">
        <div className="w-full">
          <Marquee />
          <div className="flex flex-col px-4 gap-4">
            <Terminal />
            <Gallery />
          <footer className="h-auto mt-12 mt-4  pt-3 flex flex-wrap items-center justify-center gap-4 text-sm text-foreground/70">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <span>{link.icon}</span>
                <span>{link.name}</span>
              </a>
            ))}
          </footer>
          </div>
        </div>

      </div>
      <div className="h-auto md:h-screen grid grid-rows-2">
        <div className="h-auto md:h-full flex items-center justify-center px-4">
          <p className="text-4xl font-bold">
          <GradientText
  text="The coin that goes up forever"
  gradient="linear-gradient(90deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)"
/><br/>
upcoin (n.) - mental condition where you still believe in a coin that only goes up.

symptoms: compulsive refresh, euphoria, deep depression.

treatment: buy more.
          </p>
        </div>
        <div className="h-auto md:h-full md:border-t border-white flex items-center justify-center">
          Bottom Right
        </div>
      </div>
    </div>
  );
}
