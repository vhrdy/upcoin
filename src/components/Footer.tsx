import React from 'react'
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
