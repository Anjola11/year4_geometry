import React from 'react';

export default function WatchOutBox({ children, ...props }: any) {
  return <div {...props}>{children || 'WatchOutBox'}</div>;
}
