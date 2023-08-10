export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const demos: { name: string; items: Item[] }[] = [
  {
    name: 'Forfaits mobiles',
    items: [
      {
        name: 'Forfaits Mobiles Abordables',
        slug: 'moins-cher',
        description: 'Create UI that is shared across routes',
      },
      {
        name: 'Flexibles Sans Engagement',
        slug: 'sans-engagement',
        description: 'Organize routes without affecting URL paths',
      },
      {
        name: 'Ultra-rapides en 5G',
        slug: 'page',
        description: 'Render multiple pages in the same layout',
      },
      {
        name: 'Usage illimité',
        slug: 'page',
        description: 'Render multiple pages in the same layout',
      },
      {
        name: 'Mobiles à prix réduit',
        slug: 'page',
        description: 'Render multiple pages in the same layout',
      },
      {
        name: 'Communication internationale',
        slug: 'page',
        description: 'Render multiple pages in the same layout',
      },
      {
        name: '100 Go de données',
        slug: 'page',
        description: 'Render multiple pages in the same layout',
      },
      {
        name: 'Seulement 5 euros',
        slug: 'page',
        description: 'Render multiple pages in the same layout',
      },
    ],
  },
  {
    name: 'Offres Box Internet',
    items: [
      {
        name: 'Box Internet Abordables',
        slug: 'layouts',
        description: 'Options internet économiques',
      },
      {
        name: 'Box Internet Sans Engagement',
        slug: 'route-groups',
        description: 'Connexions internet flexibles sans contrat à long terme',
      },
      {
        name: 'Box Internet En Promo',
        slug: 'parallel-routes',
        description: 'Promotions sur les abonnements internet',
      },
      {
        name: 'Box Internet avec la Fibre',
        slug: 'parallel-routes',
        description: 'Connexions internet à haut débit en fibre optique',
      },
      {
        name: 'Box Internet avec Forfait Mobile',
        slug: 'parallel-routes',
        description: 'Forfaits combinant internet et mobile',
      },
      {
        name: 'Box Internet Seule (Sans TV)',
        slug: 'parallel-routes',
        description: 'Options internet indépendantes de la TV',
      },
      {
        name: 'Box Internet 4G',
        slug: 'parallel-routes',
        description: 'Connexions internet utilisant la technologie 4G',
      },
      {
        name: 'Box Internet avec l\'ADSL',
        slug: 'parallel-routes',
        description: 'Connexions internet utilisant l\'ADSL',
      },
    ],
  },
  {
    name: 'Operateur',
    items: [
      {
        name: 'Orange',
        slug: 'hooks',
        description: 'Preview the routing hooks available in Client Components',
      },
      {
        name: 'SFR',
        slug: 'styling',
        description: 'Preview the supported styling solutions',
      },
      {
        name: 'Bouygues',
        slug: 'snippets',
        description: 'A collection of useful App Router code snippets',
      },
      {
        name: 'Free',
        slug: 'snippets',
        description: 'A collection of useful App Router code snippets',
      },
      {
        name: 'Coriolis',
        slug: 'snippets',
        description: 'A collection of useful App Router code snippets',
      },
    ],
  },
];
