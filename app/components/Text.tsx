import React from 'react';

import { TextVariant } from '@app/types';

interface TextProps {
  variant: TextVariant;
  className?: string;
  children: React.ReactNode;
}

const Text = ({ variant, className, children }: TextProps) => {
  return React.createElement(variant, { className }, children);
};

export default Text;
