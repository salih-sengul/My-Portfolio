// src/components/DynamicIcon.jsx
import React, { lazy, Suspense } from 'react';

// A simple fallback for when the icon is loading
const IconLoadingFallback = () => (
  <div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse"></div>
);

const DynamicIcon = ({ name, ...props }) => {
  // It's crucial that the path for dynamic imports is a static string
  // for bundlers like Vite/Webpack to analyze and bundle correctly.
  // So, use template literals with a fixed base path.
  const IconComponent = lazy(() =>
    import(`../assets/imgs/${name}.svg?react`)
      .catch((error) => {
        console.error(`Failed to load icon "${name}":`, error);
        // Return a default icon or null if the icon doesn't exist
        return { default: () => <svg className="w-6 h-6 text-red-500" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zM11 7h2v6h-2zm0 8h2v2h-2z"/></svg> }; // A simple error icon
      })
  );

  return (
    <Suspense >
      {/*
        The className prop passed to DynamicIcon will be forwarded to the
        actual SVG component, allowing Tailwind to style it.
        Make sure to apply fill-current or stroke-current to the SVG component
        within the imported SVG, or through the props here.
      */}
      <IconComponent {...props} className={`${props.className || ''} fill-current `} />
    </Suspense>
  );
};

export default DynamicIcon;