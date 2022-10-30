import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import clsx from 'clsx'
import CodeBlock from '@/components/CodeBlock'
import Link from 'next/link';

const ResponsiveImage = (props) => (
    <Image alt={props.alt} layout="responsive" {...props} />
  )
  
  const HeaderClassNames = "font-bold transition ease-in-out duration-300 text-zinc-400 hover:text-zinc-900 hover:transition-all dark:text-zinc-400 hover:dark:text-zinc-200"
  const SpanHeaderClassNames = "text-base font-bold transition ease-in-out duration-300 text-blue-500 hover:text-blue-600 dark:text-teal-500 hover:transition-all"
  
  const H1 = (children) => (
    <p className={clsx('text-4xl', HeaderClassNames)}>
      <span className={clsx('hover:text-2xl', SpanHeaderClassNames)}>
        #
      </span>
      <span> </span>
      {children}
    </p>
  )
  
  const H2 = (children) => (
    <p className={clsx('text-3xl', HeaderClassNames)}>
      <span className={clsx('hover:text-xl', SpanHeaderClassNames)}>
        ##
      </span>
      <span> </span>
      {children}
    </p>
  )
  
  const H3 = (children) => (
    <p className={clsx('text-2xl', HeaderClassNames)}>
      <span className={clsx('hover:text-xl', SpanHeaderClassNames)}>
        ###
      </span>
      <span> </span>
      {children}
    </p>
  )
  
  const H4 = (children) => (
    <p className={clsx('text-xl', HeaderClassNames)}>
      <span className={clsx('hover:text-lg', SpanHeaderClassNames)}>
        ####
      </span>
      <span> </span>
      {children}
    </p>
  )
  
  const H5 = (children) => (
    <p className={clsx('text-lg', HeaderClassNames)}>
      <span className={clsx('hover:text-md', SpanHeaderClassNames)}>
        #####
      </span>
      <span> </span>
      {children}
    </p>
  )
  
  const H6 = (children) => (
    <p className={clsx('text-md', HeaderClassNames)}>
      <span className={clsx('hover:text-md', SpanHeaderClassNames)}>
        ######
      </span>
      <span> </span>
      {children}
    </p>
  )
  
  const Blockquote = (children) => (
    <blockquote className="p-4 my-4 transition ease-in-out duration-300 text-lg font-semibold italic text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 hover:dark:text-zinc-200 border-l-4 border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 hover:dark:border-zinc-500">
      <svg
        aria-hidden="true"
        className="h-4 w-4 transition duration-300 text-blue-400 dark:text-teal-500 hover:scale-150 hover:translate-x-1 hover:-translate-y-1"
        viewBox="0 0 24 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
          fill="currentColor"
        />
      </svg>
      {children}
    </blockquote>
  )

    const linkLightModeClassName =
      'text-blue-400 border-2 p-1 bg-gray-600 rounded-md border-blue-500 hover:text-blue-600 hover:bg-zinc-200 hover:border-blue-200'
      const linkDarkModeClassName =
      'dark:text-teal-400 dark:bg-gray-900 dark:border-teal-500 dark:hover:text-teal-600 dark:hover:bg-zinc-800 dark:hover:border-teal-200'

  const EmbeddedLink = (href, children) => (
    <Link href={href} className={clsx('transition ease-in-out duration-300', linkLightModeClassName, linkDarkModeClassName)}>
        {children}
    </Link>
  )

export default function Markdown({ value }) {
  return (
    <ReactMarkdown
        children={value}
        remarkPlugins={[
            remarkGfm,
            ]}
        rehypePlugins={[
            rehypeHighlight
            ]}
        components={{
            h1: ({ node, children }) => H1(children),
            h2: ({ node, children }) => H2(children),
            h3: ({ node, children }) => H3(children),
            h4: ({ node, children }) => H4(children),
            h5: ({ node, children }) => H5(children),
            h6: ({ node, children }) => H6(children),
            blockquote: ({ node, children }) => Blockquote(children),
            a: ({href, children}) => EmbeddedLink(href, children),
            code: CodeBlock,
        }}
    />
  );
}

Markdown.propTypes = {
  value: PropTypes.string.isRequired,
};