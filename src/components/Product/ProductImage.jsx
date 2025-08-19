import React from "react";

function ProductImage({ src, alt, className, onOpen }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full h-48 object-cover rounded-md mb-4 cursor-pointer ${className}`}
      onClick={onOpen}
    />
  );
}

export default ProductImage;
