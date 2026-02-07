/**
 * Constructs a public asset URL that works with the app's base path.
 * This ensures assets load correctly when the app is served from a subpath.
 */
export function getAssetUrl(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Use import.meta.env.BASE_URL which Vite provides
  // It defaults to '/' but can be configured for subpath deployments
  const base = import.meta.env.BASE_URL || '/';
  
  // Ensure proper path joining
  return base.endsWith('/') ? `${base}${cleanPath}` : `${base}/${cleanPath}`;
}
