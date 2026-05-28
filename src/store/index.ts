import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  isPartnershipOpen: boolean;
  isDispatchOpen: boolean;
}

const initialState: ModalState = {
  isPartnershipOpen: false,
  isDispatchOpen: false,
};

const modalSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setPartnershipOpen: (state, action: PayloadAction<boolean>) => {
      state.isPartnershipOpen = action.payload;
    },
    setDispatchOpen: (state, action: PayloadAction<boolean>) => {
      state.isDispatchOpen = action.payload;
    },
    closeAllModals: (state) => {
      state.isPartnershipOpen = false;
      state.isDispatchOpen = false;
    },
  },
});

export const { setPartnershipOpen, setDispatchOpen, closeAllModals } = modalSlice.actions;

export const store = configureStore({
  reducer: {
    modals: modalSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
