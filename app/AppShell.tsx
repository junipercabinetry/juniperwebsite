'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import { ModalProvider } from '@/contexts/ModalContext';

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  return (
    <ModalProvider>
      <Preloader onDone={() => setLoading(false)} />

      {!loading && <Navigation />}

      <main>{children}</main>

      {!loading && <Footer />}
    </ModalProvider>
  );
}
