import React from 'react';

export default function LearningObjectivesList({ children, ...props }: any) {
  return <div {...props}>{children || 'LearningObjectivesList'}</div>;
}
