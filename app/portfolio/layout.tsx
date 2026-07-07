import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio — Custom Kitchens, Vanities & Built-Ins',
  description:
    'Browse completed custom cabinetry projects by Juniper Cabinetry: modern and traditional kitchens, bathroom vanities, built-ins, and closet systems across Metro Vancouver.',
  alternates: {
    canonical: '/portfolio/',
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
