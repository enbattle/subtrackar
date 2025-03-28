/**
 * Utility functions for the application.
 * This file contains helper functions for common operations.
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names and merges Tailwind CSS classes.
 *
 * This utility function:
 * 1. Takes multiple class name arguments (strings, objects, arrays)
 * 2. Uses clsx to combine them
 * 3. Uses tailwind-merge to properly merge Tailwind CSS classes
 *
 * @param {...ClassValue[]} inputs - Class names to combine
 * @returns {string} Combined and merged class names
 *
 * @example
 * cn("text-red-500", "bg-blue-500") // "text-red-500 bg-blue-500"
 * cn("text-red-500", { "bg-blue-500": true }) // "text-red-500 bg-blue-500"
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
