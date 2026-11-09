import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.{jpg,jpeg,png,webp}', {
  eager: true,
});

const byKey: Record<string, ImageMetadata> = {};
for (const [path, mod] of Object.entries(files)) {
  const key = path.split('/').pop()!.replace(/\.(jpe?g|png|webp)$/i, '');
  byKey[key] = mod.default;
}

const FALLBACK = 'fouta';

/** Returns the key actually used (falls back if a photo file is missing). */
export function resolveKey(key: string): string {
  return byKey[key] ? key : FALLBACK;
}

export function photo(key: string): ImageMetadata {
  return byKey[resolveKey(key)];
}
