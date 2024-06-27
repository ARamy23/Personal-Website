// components/CustomMDXComponents.jsx

import Image from 'next/image';
import Link from 'next/link';
import Callout from './Callout';

export const CustomImage = ({ src, alt, align, ...props }) => {
  let alignmentClass = '';
  if (align === 'left') {
    alignmentClass = 'float-left mr-4';
  } else if (align === 'right') {
    alignmentClass = 'float-right ml-4';
  }
  
  CustomImage.displayName = 'CustomImage';

  return (
    <div className={`my-4 ${alignmentClass}`} style={{ position: 'relative', width: '100%', height: 'auto' }}>
      <Image
        src={src}
        alt={alt}
        layout="responsive"
        width={700} // You can adjust the width and height according to your needs
        height={475} // You can adjust the width and height according to your needs
        className="rounded-3xl" // Example Tailwind styling
        {...props}
      />
    </div>
  );
};
// Custom link component
const CustomLink = (props) => {
  return (
    <Link href={props.href}>
      {props.children}
    </Link>
  );
};
CustomLink.displayName = 'CustomLink';

const createHeaderComponent = (Tag, level) => {
  const HeaderComponent = ({ children, ...props }) => {
    const hashes = '#'.repeat(level);
    return (
      <Tag className="relative group" {...props}>
        <span className="text-blue-500 mr-2">{hashes}</span>
        <span className="transition-transform duration-300 group-hover:scale-105">{children}</span>
        <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
      </Tag>
    );
  };

  HeaderComponent.displayName = `H${level}`;
  return HeaderComponent;
};

const H1 = createHeaderComponent('h1', 1);
const H2 = createHeaderComponent('h2', 2);
const H3 = createHeaderComponent('h3', 3);
const H4 = createHeaderComponent('h4', 4);

export const components = {
  img: CustomImage,
  a: CustomLink,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  Callout,
};