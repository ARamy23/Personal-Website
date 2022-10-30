import PropTypes from 'prop-types';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { theme } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { swift } from 'react-syntax-highlighter/dist/cjs/languages/prism/swift.js'

SyntaxHighlighter.registerLanguage('swift', swift)

export default function CodeBlock({ value }) {
  return (
    <SyntaxHighlighter 
    language='swift' 
    style={theme}
    showLineNumbers={false}
    wrapLines={true}
    >
      {value}
    </SyntaxHighlighter>
  );
}

CodeBlock.propTypes = {
  value: PropTypes.string.isRequired,
}