import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About — A Family Cabinetry Workshop Since 2012',
  description:
    'Founded in 2012 by master craftsman Benny Phung, Juniper Cabinetry is a family-run custom cabinetry workshop in Richmond, BC, now led by Ricky Dang. Meet the team and our values.',
  alternates: {
    canonical: '/about/',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
