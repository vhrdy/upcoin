"use client";

import React from 'react';
import { ImageZoom } from '@/components/ui/shadcn-io/image-zoom';

export default function Gallery() {
  return (
    <div className="relative">
      <p className="text-2xl mb-2 font-bold italic">up only memes</p>
      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4 max-h-[550px] overflow-y-auto scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <ImageZoom>
          <img src="/assets/ster.jpg" alt="" className="rounded-lg object-cover w-full h-full" />
        </ImageZoom>
        <video
          src="/assets/IMG_8013.mp4"
          className="rounded-lg object-cover w-full h-full"
          controls
          autoPlay
          muted
          loop
        />
        <ImageZoom>
          <img src="/assets/JAV.jpg" alt="" className="rounded-lg object-cover w-full h-full" />
        </ImageZoom>
        <ImageZoom>
          <img src="/assets/character.jpg" alt="" className="rounded-lg object-cover w-full h-full" />
        </ImageZoom>
        <ImageZoom>
          <img src="/assets/logo.png" alt="" className="rounded-lg object-cover w-full h-full" />
        </ImageZoom>
        <ImageZoom>
          <img src="/assets/mf.jpg" alt="" className="rounded-lg object-cover w-full h-full" />
        </ImageZoom>
        <ImageZoom>
          <img src="/assets/zeff.jpg" alt="" className="rounded-lg object-cover w-full h-full" />
        </ImageZoom>
        <ImageZoom>
          <img src="/assets/trump.jpg" alt="" className="rounded-lg object-cover w-full h-full" />
        </ImageZoom>
        <ImageZoom>
          <img src="/assets/kirby.jpg" alt="" className="rounded-lg object-cover w-full h-full" />
        </ImageZoom>
      </div>

      {/* Dégradé en bas */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#09090b] to-transparent pointer-events-none" />
    </div>
  );
}
