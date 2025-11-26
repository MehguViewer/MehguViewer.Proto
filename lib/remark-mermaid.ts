import { visit } from 'unist-util-visit';

export function remarkMermaid() {
  return (tree: any) => {
    visit(tree, 'code', (node: any, index: any, parent: any) => {
      if (node.lang === 'mermaid') {
        const value = node.value;
        parent.children.splice(index, 1, {
          type: 'mdxJsxFlowElement',
          name: 'Mermaid',
          attributes: [
            {
              type: 'mdxJsxAttribute',
              name: 'chart',
              value: value,
            },
          ],
        });
      }
    });
  };
}
