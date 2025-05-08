import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import clsx from 'clsx';

interface StatsCounterProps {
  targetNumber: number;
  label: string;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
  labelClassName?: string;
  numberClassName?: string;
  showPlus?: boolean;
}

const StatsCounter = ({
  targetNumber,
  label,
  prefix = '',
  suffix = '',
  duration = 2000,
  className,
  labelClassName,
  numberClassName,
  showPlus = false,
}: StatsCounterProps) => {
  // Always display the target number without animation to ensure numbers are shown
  return (
    <div className={clsx('text-center', className)}>
      <div 
        className={clsx(
          'text-4xl md:text-5xl font-bold mb-2 text-white',
          numberClassName
        )}
      >
        {prefix}{targetNumber.toLocaleString()}{showPlus && '+'}{suffix}
      </div>
      <div className={clsx('text-gray-200', labelClassName)}>
        {label}
      </div>
    </div>
  );
};

export default StatsCounter; 