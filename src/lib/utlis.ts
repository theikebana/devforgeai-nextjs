type ClassValue = string | number | null | boolean | undefined | ClassArray | ClassObject;
interface ClassObject {
  [key: string]: string | number | boolean | null | undefined;
}
type ClassArray = ClassValue[];

function clsx(...inputs: ClassValue[]): string {
  const result: string[] = [];

  const process = (item: ClassValue): void => {
    if (item == null || item === false) {
      return;
    }
    if (typeof item === "string" || typeof item === "number") {
      result.push(String(item));
    } else if (Array.isArray(item)) {
      item.forEach(process);
    } else if (typeof item === "object") {
      for (const key in item) {
        if (Object.prototype.hasOwnProperty.call(item, key) && item[key]) {
          result.push(key);
        }
      }
    }
    // ignore booleans and other types
  };

  inputs.forEach(process);

  return result.join(" ");
}

// Simple twMerge: removes duplicate classes, preserves last occurrence
function twMerge(classNames: string): string {
  const seen = new Set<string>();
  return classNames
    .split(/\s+/)
    .reverse()
    .filter((cls) => {
      if (!cls) return false;
      if (seen.has(cls)) return false;
      seen.add(cls);
      return true;
    })
    .reverse()
    .join(" ");
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}

/** Use for next/image src so assets work on live (basePath + URL-encoding). */
export function getPublicAssetUrl(path: string): string {
  if (path.startsWith("http")) return path;
  const base = (typeof process !== "undefined" && process.env?.NEXT_PUBLIC_BASE_PATH) || "";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return base + encodeURI(normalized);
}