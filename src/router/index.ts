import { lazy } from 'react';
import { Navigate, type RouterProps } from 'PackageNameByCore';

const routers: Partial<RouterProps>[] = [
  {
    path: '*',
    root: true,
    children: [
      {
        path: 'home',
        children: [
          {
            path: 'dynamic/:id',
            element: lazy(() => import('@/pages/dynamic/$id')),
          },
          {
            path: 'dynamic/:id/:name',
            element: lazy(() => import('@/pages/dynamic/$id/$name')),
          },
        ],
      },
      {
        path: '*',
        element: Navigate,
        props: {
          to: '/home',
          path: '/home',
          replace: true,
        },
      },
    ] as RouterProps[],
  },
];

export default routers;
