import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import clsx from 'clsx';
import Button from '../ui/Button';

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
  className?: string;
}

const ServiceCard = ({
  title,
  description,
  imageSrc,
  link,
  className,
}: ServiceCardProps) => {
  const t = useTranslations('common');
  
  return (
    <div 
      className={clsx(
        'bg-white shadow-md overflow-hidden transition-all duration-300',
        'hover:shadow-lg hover:scale-[1.03] group',
        'rounded-[30px]',
        className
      )}
    >
      <div className="relative">
        {/* Image with triangular mask */}
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Diagonal overlay/mask using CSS clip-path */}
          <div 
            className="absolute inset-0 bg-gradient-to-tr from-primary-navy/80 to-transparent"
            style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
          />
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-primary-navy">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button
          variant="primary"
          onClick={() => window.location.href = 'tel:+966561475554'}
          className="mt-2"
        >
          اتصل بنا
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard; 