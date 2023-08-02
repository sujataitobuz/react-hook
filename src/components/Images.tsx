import React from 'react'


interface ImageProps {
    width?: number;
    height?: number;
    size?: number
    alt: string;
    src: string;
}

export default function Images({width, height, size, alt, src} :ImageProps) {
  return (
    <>
    <img alt={alt} width={width || size} height={height || size} src={src} />
    </>
  )
}
