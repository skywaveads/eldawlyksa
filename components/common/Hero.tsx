import React, { ReactNode } from 'react';
import Image from 'next/image';
import Button from '../ui/Button';
import clsx from 'clsx';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  onPrimaryButtonClick?: () => void;
  onSecondaryButtonClick?: () => void;
  reverse?: boolean;
  className?: string;
  imageClassName?: string;
  contentClassName?: string;
  children?: ReactNode;
}

const Hero = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  onPrimaryButtonClick,
  onSecondaryButtonClick,
  reverse = false,
  className,
  imageClassName,
  contentClassName,
  children,
}: HeroProps) => {
  return (
    <section className={clsx('py-16 md:py-24', className)}>
      <div className="container">
        <div 
          className={clsx(
            'grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center',
            reverse && 'md:flex md:flex-row-reverse'
          )}
        >
          {/* Content Section */}
          <div className={clsx('flex flex-col', contentClassName)}>
            {subtitle && (
              <span className="text-primary-cyan font-medium mb-2">{subtitle}</span>
            )}
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight text-primary-navy">
              {title}
            </h1>
            
            {description && (
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                {description}
              </p>
            )}
            
            {(primaryButtonText || secondaryButtonText) && (
              <div className="flex flex-wrap gap-4 mt-2">
                {primaryButtonText && (
                  primaryButtonHref ? (
                    <a href={primaryButtonHref}>
                      <Button variant="primary">{primaryButtonText}</Button>
                    </a>
                  ) : (
                    <Button 
                      variant="primary" 
                      onClick={onPrimaryButtonClick}
                    >
                      {primaryButtonText}
                    </Button>
                  )
                )}
                
                {secondaryButtonText && (
                  secondaryButtonHref ? (
                    <a href={secondaryButtonHref}>
                      <Button variant="outline">{secondaryButtonText}</Button>
                    </a>
                  ) : (
                    <Button 
                      variant="outline" 
                      onClick={onSecondaryButtonClick}
                    >
                      {secondaryButtonText}
                    </Button>
                  )
                )}
              </div>
            )}
            
            {children}
          </div>
          
          {/* Image Section */}
          <div className={clsx('relative w-full h-64 md:h-96 lg:h-[500px]', imageClassName)}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 