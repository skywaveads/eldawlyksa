import React, { useState } from 'react';
import clsx from 'clsx';

export interface AccordionItem {
  id: string | number;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
  allowMultiple?: boolean;
}

const Accordion = ({ 
  items, 
  className,
  allowMultiple = false 
}: AccordionProps) => {
  const [openItems, setOpenItems] = useState<(string | number)[]>([]);

  const toggleItem = (id: string | number) => {
    if (allowMultiple) {
      setOpenItems(prev => 
        prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
      );
    } else {
      setOpenItems(prev => prev.includes(id) ? [] : [id]);
    }
  };

  const isOpen = (id: string | number) => openItems.includes(id);

  return (
    <div className={clsx('space-y-2', className)}>
      {items.map((item) => (
        <div 
          key={item.id} 
          className="border border-gray-200 rounded-md overflow-hidden"
        >
          <button
            type="button"
            onClick={() => toggleItem(item.id)}
            className={clsx(
              'flex justify-between items-center w-full px-6 py-4 text-right',
              'font-medium text-gray-900 bg-gray-50 hover:bg-gray-100 focus:outline-none transition-all',
              isOpen(item.id) && 'bg-gray-100'
            )}
            aria-expanded={isOpen(item.id)}
          >
            <span>{item.title}</span>
            <svg
              className={clsx(
                'w-4 h-4 transition-transform duration-200',
                isOpen(item.id) ? 'transform rotate-180' : ''
              )}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className={clsx(
              'overflow-hidden transition-all duration-300 max-h-0',
              isOpen(item.id) && 'max-h-96'
            )}
          >
            <div className="px-6 py-4 text-gray-700">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion; 