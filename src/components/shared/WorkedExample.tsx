import React from 'react';

export default function WorkedExample({ children, ...props }: any) {
  return <div {...props}>{children || 'WorkedExample'}</div>;
}
