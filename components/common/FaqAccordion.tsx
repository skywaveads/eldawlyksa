import React from 'react';
import Accordion, { AccordionItem } from '../ui/Accordion';
import clsx from 'clsx';

interface FaqItem {
  id: string | number;
  question: string;
  answer: React.ReactNode;
}

interface FaqAccordionProps {
  items: FaqItem[];
  title?: string;
  description?: string;
  className?: string;
}

const FaqAccordion = ({ 
  items, 
  title, 
  description, 
  className 
}: FaqAccordionProps) => {
  // Convert FaqItems to AccordionItems
  const accordionItems: AccordionItem[] = items.map((item) => ({
    id: item.id,
    title: item.question,
    content: item.answer,
  }));

  return (
    <div className={clsx('', className)}>
      {title && (
        <h3 className="text-2xl font-bold mb-4 text-primary-navy">{title}</h3>
      )}
      
      {description && (
        <p className="text-gray-600 mb-6">{description}</p>
      )}
      
      <Accordion items={accordionItems} />
    </div>
  );
};

export default FaqAccordion; 