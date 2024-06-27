export function convertCallouts(content) {
    return content.replace(/```callout-(\w+)\n([\s\S]+?)\n```/g, (_, type, value) => {
      return `<Callout type="${type}">${value.trim()}</Callout>`;
    });
  }
  