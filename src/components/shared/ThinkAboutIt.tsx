import React from 'react';

export default function ThinkAboutIt({ children, ...props }: any) {
  return <div {...props}>{children || 'ThinkAboutIt'}</div>;
}
