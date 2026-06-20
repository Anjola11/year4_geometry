import React from 'react';

export default function HomeworkCard({ children, ...props }: any) {
  return <div {...props}>{children || 'HomeworkCard'}</div>;
}
