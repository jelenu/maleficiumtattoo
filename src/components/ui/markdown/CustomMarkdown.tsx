import { JSX, useMemo } from "react";
import { remark } from "remark";
import remarkParse from "remark-parse";
import Text from "@/components/ui/basics/Text";
import Image from "next/image";

// Tipo para nodos de Markdown
type MarkdownNode = {
  type: string;
  value?: string;
  depth?: number;
  url?: string;
  alt?: string;
  ordered?: boolean;
  children?: MarkdownNode[];
};

type CustomMarkdownProps = {
  content: string;
};

export default function CustomMarkdown({ content }: CustomMarkdownProps) {
  const ast = useMemo(
    () => remark().use(remarkParse).parse(content) as MarkdownNode,
    [content]
  );

  const renderNode = (node: MarkdownNode, index: number): React.ReactNode => {
    switch (node.type) {
      case "heading": {
        const Tag = `h${node.depth}` as keyof JSX.IntrinsicElements;
        return (
          <Text
            as={Tag}
            key={index}
            variant={node.depth === 1 ? "h1" : node.depth === 2 ? "h2" : "h3"}
            className="mb-4 mt-6"
          >
            {node.children?.map(renderNode)}
          </Text>
        );
      }

      case "paragraph":
        return (
          <Text key={index} as="div" className="mb-4">
            {node.children?.map(renderNode)}
          </Text>
        );

      case "text":
        return node.value;

      case "link":
        return (
          <a
            key={index}
            href={node.url}
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 underline"
          >
            {node.children?.map(renderNode)}
          </a>
        );

      case "image": {
        // Parsear ancho y alto desde la URL
        let width = 800;
        let height = 400;
        let src = node.url || "";

        const urlParts = src.split("=");
        if (urlParts[1]) {
          const [w, h] = urlParts[1].split("x").map(Number);
          if (w) width = w;
          if (h) height = h;
          src = urlParts[0]; // quitar el "=600x400" de la URL
        }

        return (
          <div key={index} className="my-4">
            <Image
              src={src}
              alt={node.alt || ""}
              width={width}
              height={height}
              className="rounded-md object-cover"
            />
          </div>
        );
      }

      case "list": {
        const ListTag = node.ordered ? "ol" : "ul";
        return (
          <ListTag
            key={index}
            className={`ml-6 mb-4 ${node.ordered ? "list-decimal" : "list-disc"} list-inside`}
          >
            {node.children?.map(renderNode)}
          </ListTag>
        );
      }

      case "listItem":
        return (
          <li key={index} className="mb-1">
            {node.children?.map(child =>
              child.type === "paragraph"
                ? child.children?.map(renderNode)
                : renderNode(child, 0)
            )}
          </li>
        );

      case "code":
        return (
          <pre
            key={index}
            className="bg-zinc-900 text-zinc-100 p-4 rounded mb-4 overflow-x-auto"
          >
            <code>{node.value}</code>
          </pre>
        );

      default:
        return null;
    }
  };

  return <div className="prose prose-invert max-w-none">{(ast.children || []).map(renderNode)}</div>;
}
