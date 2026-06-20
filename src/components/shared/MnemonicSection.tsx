import React from 'react';

export default function MnemonicSection({ children, ...props }: any) {
  return <div {...props}>{children || 'MnemonicSection'}</div>;
}
