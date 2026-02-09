import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import React from 'react'

function SocialIcons({size}:{size?:"sm" | undefined}) {
  return (
     <div className="flex justify-center gap-4">
                  {[
                    { name: "Facebook", emoji: Facebook, color: "bg-secondary" },
                    { name: "Instagram", emoji: Instagram, color: "bg-pink" },
                    { name: "Twitter", emoji: Twitter, color: "bg-secondary" },
                    { name: "YouTube", emoji: Youtube, color: "bg-destructive" },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href="#"
                      className={`${social.color} ${size === "sm" ? "p-2" : "p-3"} rounded-full hover:scale-110 transition-transform shadow-lg`}
                      title={social.name}
                    >
                      <span className="text-2xl">{<social.emoji className="h-6 w-6 text-white" />}</span>
                    </a>
                  ))}
                </div>
  )
}

export default SocialIcons