import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const mergeClasses = (...classes: ClassValue[]) => {
	return twMerge(clsx(classes));
};
