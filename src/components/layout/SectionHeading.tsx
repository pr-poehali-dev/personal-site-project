
import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

const SectionHeading = ({ children, className = "" }: SectionHeadingProps) => {
  return (
    <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center font-playfair ${className}`}>
      {children}
    </h2>
  );
};

export default SectionHeading;
