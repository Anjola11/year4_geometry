import React from 'react';

export default function SummaryCard({ children, ...props }: any) {
  return <div {...props}>{children || 'SummaryCard'}</div>;
}
