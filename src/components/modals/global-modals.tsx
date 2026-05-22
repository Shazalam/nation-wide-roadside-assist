'use client';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, setPartnershipOpen, setDispatchOpen } from '@/store';
import { PartnershipModal } from '@/components/partnership/partnership-modal';
import { DispatchModal } from '@/components/modals/dispatch-modal';

export const GlobalModals = () => {
  const dispatch = useDispatch();
  const { isPartnershipOpen, isDispatchOpen } = useSelector((state: RootState) => state.modals);

  return (
    <>
      <PartnershipModal 
        isOpen={isPartnershipOpen} 
        onClose={() => dispatch(setPartnershipOpen(false))} 
      />
      <DispatchModal 
        isOpen={isDispatchOpen} 
        onClose={() => dispatch(setDispatchOpen(false))} 
      />
    </>
  );
};
