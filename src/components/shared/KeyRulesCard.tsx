import React from 'react';

export default function KeyRulesCard({ children, ...props }: any) {
  return <div {...props}>{children || 'KeyRulesCard'}</div>;
}
