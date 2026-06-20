import React from 'react';

export default function RealWorldCallout({ children, ...props }: any) {
  return <div {...props}>{children || 'RealWorldCallout'}</div>;
}
