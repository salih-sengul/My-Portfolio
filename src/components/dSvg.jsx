// src/components/MySvgComponentWrapper.jsx
import React from 'react';

// Dynamically import all SVGs as React components from a directory
const svgComponentsModules = import.meta.glob('../assets/imgs/*.svg', { query: '?react', eager: true });


// Optional: A fallback component
const FallbackSvgComponent = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor">
    <circle cx="12" cy="12" r="10" fill="lightgray"/>
    <text x="12" y="16" text-anchor="middle" font-family="Arial" font-size="10" fill="black">Error</text>
  </svg>
);


export default function DynamicSvg({ imageName, ...props }) { // props like fill, className, width, height
  const modulePath = `../assets/imgs/${imageName}`;
  const SvgComponent = svgComponentsModules[modulePath]?.default || svgComponentsModules[modulePath] || FallbackSvgComponent;
  // .default may or may not be needed based on svgr options and vite version

  if (!SvgComponent) {
      console.warn(`SVG component for "${imageName}" not found.`);
      return <FallbackSvgComponent {...props} />;
  }

  return <SvgComponent {...props} />;
}

// Usage:
// <MySvgComponentWrapper imageName="user-icon.svg" className="my-icon" fill="blue" width="24" />
// <MySvgComponentWrapper imageName="nonexistent.svg" fill="red" /> {/* Shows FallbackSvgComponent */}