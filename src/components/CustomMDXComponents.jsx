// components/CustomMDXComponents.jsx

import Image from 'next/image';
import Link from 'next/link';
import Callout from './Callout';

// Custom image component
export const CustomImage = ({ src, alt, align, ...props }) => {
  let alignmentClass = '';
  if (align === 'left') {
    alignmentClass = 'float-left mr-4';
  } else if (align === 'right') {
    alignmentClass = 'float-right ml-4';
  }
  
  return (
    <img
      src={src}
      alt={alt}
      className={`my-4 w-full h-auto rounded-3xl ${alignmentClass}`} // Example Tailwind styling
      {...props}
    />
  );
};

// Custom link component
export const CustomLink = (props) => {
  return (
    <Link href={props.href}>
      {props.children}
    </Link>
  );
};

const createHeaderComponent = (Tag, level) => ({ children, ...props }) => {
  const hashes = '#'.repeat(level);
  return (
    <Tag className="relative group" {...props}>
      <span className="text-blue-500 mr-2">{hashes}</span>
      <span className="transition-transform duration-300 group-hover:scale-105">
        {children}
      </span>
      <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
    </Tag>
  );
};

export const H1 = createHeaderComponent('h1', 1);
export const H2 = createHeaderComponent('h2', 2);
export const H3 = createHeaderComponent('h3', 3);
export const H4 = createHeaderComponent('h4', 4);

export const components = {
  img: CustomImage,
  a: CustomLink,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  Callout,
};
