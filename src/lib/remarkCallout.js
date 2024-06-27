import { visit } from 'unist-util-visit';

export default function remarkCallout() {
  return (tree) => {
    visit(tree, 'code', (node, index, parent) => {
      const match = /callout-(\w+)/.exec(node.lang);
      if (match) {
        const type = match[1];
        parent.children[index] = {
          type: 'jsx',
          value: `<Callout type="${type}">\n${node.value}\n</Callout>`,
        };
      }
    });
  };
}