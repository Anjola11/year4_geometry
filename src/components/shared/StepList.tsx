import React from 'react';

export default function StepList({ children, ...props }: any) {
  return <div {...props}>{children || 'StepList'}</div>;
}
