import React from 'react';

export default function HighlightChip({ children, ...props }: any) {
  return <div {...props}>{children || 'HighlightChip'}</div>;
}
