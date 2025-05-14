import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import clsx from 'clsx';
import Input from '../ui/Input';
import Label from '../ui/Label';
import Button from '../ui/Button';

interface ContactFormProps {
  className?: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const ContactForm = ({ className }: ContactFormProps) => {
  const t = useTranslations('common');
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear the error for this field when user types
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Phone validation (optional, but validate format if provided)
    if (formData.phone && !/^\+?[0-9\s\-()]{8,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call with a delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset form and show success message
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      setIsSuccess(true);
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className={clsx('bg-white p-6 md:p-8 rounded-lg shadow-md', className)}>
      <h3 className="text-2xl font-bold mb-6 text-primary-navy">
        تواصل معنا
      </h3>
      
      {isSuccess && (
        <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-md">
          {t('contact.successMessage')}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name" required>
            {t('contact.name')}
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            disabled={isSubmitting}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="email" required>
            {t('contact.email')}
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            disabled={isSubmitting}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="phone">
            {t('contact.phone')}
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            disabled={isSubmitting}
          />
        </div>
        
        <div>
          <Label htmlFor="message" required>
            {t('contact.message')}
          </Label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className={clsx(
              'block w-full px-4 py-3 text-gray-900 bg-white border rounded-md',
              'focus:outline-none focus:ring-2 focus:ring-primary-cyan focus:border-transparent',
              'placeholder:text-gray-400 transition-all resize-y',
              errors.message ? 'border-red-500' : 'border-gray-300'
            )}
            disabled={isSubmitting}
            required
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">
              {errors.message}
            </p>
          )}
        </div>
        
        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            className="w-full"
            isLoading={isSubmitting}
          >
            {t('buttons.sendMessage')}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm; 