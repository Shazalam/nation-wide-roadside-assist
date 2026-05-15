'use client';

import React, { createContext, useContext, useState } from 'react';
import { PartnershipModal } from '@/components/partnership/partnership-modal';
import { DispatchModal } from '@/components/modals/dispatch-modal';

interface ModalContextType {
  openPartnershipModal: () => void;
  closePartnershipModal: () => void;
  openDispatchModal: () => void;
  closeDispatchModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const PlatformModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeModal, setActiveModal] = useState<'partnership' | 'dispatch' | null>(null);

  const openPartnershipModal = () => setActiveModal('partnership');
  const closePartnershipModal = () => setActiveModal(null);
  const openDispatchModal = () => setActiveModal('dispatch');
  const closeDispatchModal = () => setActiveModal(null);

  return (
    <ModalContext.Provider value={{ 
      openPartnershipModal, 
      closePartnershipModal, 
      openDispatchModal, 
      closeDispatchModal 
    }}>
      {children}
      <PartnershipModal isOpen={activeModal === 'partnership'} onClose={closePartnershipModal} />
      <DispatchModal isOpen={activeModal === 'dispatch'} onClose={closeDispatchModal} />
    </ModalContext.Provider>
  );
};

export const usePlatformModals = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('usePlatformModals must be used within a PlatformModalProvider');
  }
  return context;
};

// Backward compatibility aliases
export const PartnershipProvider = PlatformModalProvider;
export const usePartnership = usePlatformModals;
