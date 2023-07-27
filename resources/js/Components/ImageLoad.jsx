import React, { useEffect } from 'react';

const ImageLoader = () => {
  useEffect(() => {
    const replaceLazyImages = () => {
      const lazyImages = document.querySelectorAll('img[data-lazy-src]');

      lazyImages.forEach((img) => {
        const lazySrc = img.getAttribute('data-lazy-src');
        const srcset = img.getAttribute('data-lazy-srcset');
        const sizes = img.getAttribute('data-lazy-sizes');

        // Set the `src` attribute to the value of `data-lazy-src`
        if (lazySrc) {
          img.src = lazySrc;
          img.removeAttribute('data-lazy-src');
        }

        // Set the `srcset` attribute to the value of `data-lazy-srcset`
        if (srcset) {
          img.srcset = srcset;
          img.removeAttribute('data-lazy-srcset');
        }

        // Set the `sizes` attribute to the value of `data-lazy-sizes`
        if (sizes) {
          img.sizes = sizes;
          img.removeAttribute('data-lazy-sizes');
        }
      });
    };

    // Call the image replacement function when the component mounts
    replaceLazyImages();

    // Call the image replacement function again if the content changes
    const observer = new MutationObserver(replaceLazyImages);
    observer.observe(document.body, { subtree: true, childList: true });

    // Clean up the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      {/* Your other React components and content */}
    </div>
  );
};

export default ImageLoader;
