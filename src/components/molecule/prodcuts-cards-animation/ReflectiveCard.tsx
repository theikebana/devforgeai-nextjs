"use client";
import Lottie from "lottie-react";
import animationData from "@/assets/facereco.json";
import React, { useEffect, useRef, useState } from 'react';
import { Fingerprint, Activity, Lock } from 'lucide-react';

interface ReflectiveCardProps {
  blurStrength?: number;
  color?: string;
  metalness?: number;
  roughness?: number;
  overlayColor?: string;
  displacementStrength?: number;
  noiseScale?: number;
  specularConstant?: number;
  grayscale?: number;
  glassDistortion?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ReflectiveCard: React.FC<ReflectiveCardProps> = ({
  blurStrength = 5,
  color = '#ffffff',
  metalness = 0.8,
  roughness = 0.25,
  overlayColor = 'rgba(0,0,0,0.2)',
  displacementStrength = 10,
  noiseScale = 1,
  specularConstant = 1,
  grayscale = 0.9,
  glassDistortion = 1.2,
  className = '',
  style = {}
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [, setStreamActive] = useState(false);

  useEffect(() => {
    let stream: MediaStream | null = null;
    const startWebcam = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { width: { ideal: 640 }, height: { ideal: 480 }, facingMode: 'user' },
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setStreamActive(true);
        }
      } catch (err) {
        console.error('Error accessing webcam:', err);
      }
    };
    startWebcam();
    return () => {
      if (stream) stream.getTracks().forEach(track => track.stop());
    };
  }, []);

  const baseFrequency = 0.03 / Math.max(0.1, noiseScale);
  const saturation = 1 - Math.max(0, Math.min(1, grayscale));

  const cssVariables = {
    '--blur-strength': `${blurStrength}px`,
    '--metalness': metalness,
    '--roughness': roughness,
    '--overlay-color': overlayColor,
    '--text-color': color,
    '--saturation': saturation
  } as React.CSSProperties;

  return (
    <div
      className={`relative w-full h-[220px] border border-white/4 rounded-lg overflow-hidden bg-black shadow-[0_10px_25px_rgba(0,0,0,0.8),0_0_0_1px_rgba(100,100,255,0.05)_inset] isolate font-sans ${className}`}
      style={{ ...style, ...cssVariables }}
    >
      <svg className="absolute w-0 h-0 pointer-events-none opacity-0" aria-hidden="true">
        <defs>
          <filter id="metallic-displacement" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="turbulence" baseFrequency={baseFrequency} numOctaves="2" result="noise" />
            <feColorMatrix in="noise" type="luminanceToAlpha" result="noiseAlpha" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={displacementStrength}
              xChannelSelector="R"
              yChannelSelector="G"
              result="rippled"
            />
            <feSpecularLighting
              in="noiseAlpha"
              surfaceScale={displacementStrength}
              specularConstant={specularConstant}
              specularExponent="15"
              lightingColor="#8888ff"
              result="light"
            >
              <fePointLight x="0" y="0" z="300" />
            </feSpecularLighting>
            <feComposite in="light" in2="rippled" operator="in" result="light-effect" />
            <feBlend in="light-effect" in2="rippled" mode="screen" result="metallic-result" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"
              result="solidAlpha"
            />
            <feMorphology in="solidAlpha" operator="erode" radius="15" result="erodedAlpha" />
            <feGaussianBlur in="erodedAlpha" stdDeviation="5" result="blurredMap" />
            <feComponentTransfer in="blurredMap" result="glassMap">
              <feFuncA type="linear" slope="0.4" intercept="0" />
            </feComponentTransfer>
            <feDisplacementMap
              in="metallic-result"
              in2="glassMap"
              scale={glassDistortion}
              xChannelSelector="A"
              yChannelSelector="A"
              result="final"
            />
          </filter>
        </defs>
      </svg>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
  <Lottie
    animationData={animationData}
    loop
    autoplay
    className="w-full h-32  -scale-x-100 "
   
  />
</div>
    
      <div className="relative z-10 h-full flex flex-col justify-between p-3 text-[var(--text-color,#fff)] bg-[var(--overlay-color,rgba(0,0,0,0.2))]">
        <div className="flex justify-between items-center border-b border-white/10 pb-1">
          <div className="flex items-center gap-1 text-[7px] font-semibold tracking-[0.05em] px-2 py-0.5 bg-white/5 rounded border border-white/10">
            <Lock size={10} className="opacity-60" />
            <span>DARK ACCESS</span>
          </div>
          <Activity className="opacity-60" size={16} />
        </div>

        <div className="flex-1 flex flex-col justify-end items-center text-center gap-1 mb-2">
          <h2 className="text-sm tracking-[0.02em] m-0 drop-shadow text-gray-600">
            ALEXANDER DOE
          </h2>
          <p className="text-[8px] tracking-[0.1em] opacity-60 m-0 uppercase text-gray-400">
            SENIOR DEVELOPER
          </p>
        </div>

        <div className="flex justify-between items-end border-t border-white/10 pt-1">
          <div className="flex flex-col gap-0.5">
            <span className="text-[6px] tracking-[0.05em] opacity-50">ID NUMBER</span>
            <span className="font-mono text-[8px] tracking-[0.02em] text-gray-300">8901-2345-6789</span>
          </div>
          <div className="opacity-50">
            <Fingerprint size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReflectiveCard;