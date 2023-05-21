import React from 'react';

import { TextVariant } from '@app/types';

interface TextProps {
  variant: TextVariant;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const Text = ({ variant, className, onClick, children }: TextProps) => {
  return React.createElement(variant, { className, onClick }, children);
};

export default Text;
