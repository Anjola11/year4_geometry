import React from 'react';

export default function MnemonicMiniCard({ children, ...props }: any) {
  return <div {...props}>{children || 'MnemonicMiniCard'}</div>;
}
