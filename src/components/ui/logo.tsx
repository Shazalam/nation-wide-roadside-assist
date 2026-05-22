import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo = ({ className, size = 36 }: LogoProps) => {
  return (
    <img
      src="/assets/images/logo.jpg"
      alt="Nationwide Roadside Assist Logo"
      width={size}
      height={size}
      className={`${className} rounded-2xl object-cover`}
      style={{ width: size, height: size }}
    />
  );
};
