import React, { LabelHTMLAttributes } from 'react';
import clsx from 'clsx';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
  required?: boolean;
}

const Label = ({
  htmlFor,
  children,
  className,
  required = false,
  ...props
}: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={clsx('block mb-2 text-sm font-medium text-gray-900', className)}
      {...props}
    >
      {children}
      {required && <span className="ml-1 text-red-500">*</span>}
    </label>
  );
};

export default Label; 