import React from 'react';

export default function DefinitionBox({ children, ...props }: any) {
  return <div {...props}>{children || 'DefinitionBox'}</div>;
}
