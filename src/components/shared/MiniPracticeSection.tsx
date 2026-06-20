import React from 'react';

export default function MiniPracticeSection({ children, ...props }: any) {
  return <div {...props}>{children || 'MiniPracticeSection'}</div>;
}
