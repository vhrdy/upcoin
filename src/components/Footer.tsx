import React from 'react'
const socialLinks = [
    {
      name: "X (Twitter)",
      href: "https://x.com/thiscoingoesup",
      icon: "𝕏",
    },
    {
      name: "X (Twitter) Community",
      href: "https://x.com/i/communities/1984364609004847412",
      icon: "𝕏",
    },
    {
      name: "MemeDepot",
      href: "https://memedepot.com/d/upcoin",
      icon: "",
    },
    {
      name: "Buy on Jup",
      href: "https://jup.ag/?buy=CgwW9y8aLVJKGSLbjRr23mY1iGSDpwgbQetLAph15fRk&sell=So11111111111111111111111111111111111111112"
    },
    {
      name: "Dexscreener",
      href: "https://dexscreener.com/solana/bs1jgwgbwqia2p3zvbaispmvkco3e33y7qwl7vghawgv"
    }
  ];
export default function Footer() {
  return (
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
  )
}
