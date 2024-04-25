import { ColumnDef } from "@tanstack/react-table";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formDataToObject(formData: FormData): {
  [key: string]: string | string[];
} {
  let object: { [key: string]: string | string[] } = {};
  formData.forEach((value: FormDataEntryValue, key: string) => {
    // Check if the key already exists in the object
    if (object.hasOwnProperty(key)) {
      // If the key already exists, make the value an array
      if (!Array.isArray(object[key])) {
        object[key] = [object[key] as string];
      }
      // Add the new value to the array
      object[key].push(value as string);
    } else {
      // If the key doesn't exist, simply add the key-value pair
      object[key] = value as string;
    }
  });
  return object;
}
