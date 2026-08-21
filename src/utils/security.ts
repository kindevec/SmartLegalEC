/**
 * Security & Sanitization Utilities for SmartLegalEC
 * Implements XSS protection, anti-spam validation and data sanitization.
 */

export const sanitizeInput = (input: string): string => {
  if (!input) return '';
  return input
    .replace(/[<>]/g, '') // Strip angle brackets to prevent HTML/script injection
    .trim();
};

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email.trim());
};

export const isValidPhone = (phone: string): boolean => {
  if (!phone) return true; // Optional field
  const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  return phoneRegex.test(phone.trim().replace(/\s/g, ''));
};
