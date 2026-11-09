import type { ImageMetadata } from 'astro';
import credits from '../data/photo-credits.json';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.{jpg,jpeg,png,webp}', {
  eager: true,
});

const byKey: Record<string, ImageMetadata> = {};
for (const [path, mod] of Object.entries(files)) {
  const key = path.split('/').pop()!.replace(/\.(jpe?g|png|webp)$/i, '');
  byKey[key] = mod.default;
}

const FALLBACK = 'fouta';

export interface PhotoCredit {
  title: string;
  page: string;
  artist: string;
  license: string;
  licenseUrl: string;
}

/** Returns the key actually used (falls back if a photo file is missing). */
export function resolveKey(key: string): string {
  return byKey[key] ? key : FALLBACK;
}

export function photo(key: string): ImageMetadata {
  return byKey[resolveKey(key)];
}

export function credit(key: string): PhotoCredit | undefined {
  return (credits as Record<string, PhotoCredit>)[resolveKey(key)];
}

/** All photos present in the project, with their credits (for the credits page). */
export function allCredits(): Array<{ key: string; image: ImageMetadata; credit: PhotoCredit }> {
  return Object.keys(byKey)
    .filter((k) => (credits as Record<string, PhotoCredit>)[k])
    .sort()
    .map((k) => ({ key: k, image: byKey[k], credit: (credits as Record<string, PhotoCredit>)[k] }));
}
