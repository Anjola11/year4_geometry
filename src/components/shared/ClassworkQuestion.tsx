import React from 'react';

export default function ClassworkQuestion({ children, ...props }: any) {
  return <div {...props}>{children || 'ClassworkQuestion'}</div>;
}
