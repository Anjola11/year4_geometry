import React, { ReactNode } from "react";
import { InlineMath } from "react-katex";

export function renderWithLatex(text: string): ReactNode {
  // Regex to match {{latex: ...}}
  const regex = /\{\{latex:\s*(.*?)\s*\}\}/g;
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(<React.Fragment key={`text-${lastIndex}`}>{text.substring(lastIndex, match.index)}</React.Fragment>);
    }
    parts.push(
      <InlineMath key={`latex-${match.index}`} math={match[1]} />
    );
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(<React.Fragment key={`text-${lastIndex}`}>{text.substring(lastIndex)}</React.Fragment>);
  }

  return parts.length > 0 ? <>{parts}</> : <>{text}</>;
}
