import React from 'react';

export default function MathLogo({ children, ...props }: any) {
  return <div {...props}>{children || 'MathLogo'}</div>;
}
