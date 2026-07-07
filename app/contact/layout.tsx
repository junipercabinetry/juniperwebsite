import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Book a Free Design Consultation',
  description:
    'Start your custom cabinetry project. Contact Juniper Cabinetry in Richmond, BC for a complimentary design consultation — kitchens, vanities, built-ins, and closets across Metro Vancouver.',
  alternates: {
    canonical: '/contact/',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
