import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Configuration pour Vercel
  trailingSlash: false,
  // Désactiver le cache statique pour éviter les problèmes de routage
  skipTrailingSlashRedirect: true,
  experimental: {
    // Optimisation pour le déploiement
    optimizePackageImports: ['@heroicons/react']
  },
  // Configuration des headers pour éviter les erreurs de cache
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
