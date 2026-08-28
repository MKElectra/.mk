import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const PHONE_PRIMARY = "+918220660081";
export const PHONE_SECONDARY = "+919790630883";
export const DISPLAY_PHONE_PRIMARY = "+91 8220660081";
export const DISPLAY_PHONE_SECONDARY = "+91 9790630883";

export function getWhatsAppLink(phone: string = PHONE_PRIMARY, message?: string) {
  const cleanPhone = phone.replace(/[^0-9]/g, "");
  const defaultMsg = "Hello MK Electra, I would like to discuss an engineering project.";
  const encoded = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/${cleanPhone}?text=${encoded}`;
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}
