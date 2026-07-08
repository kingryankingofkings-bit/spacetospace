import { create } from 'zustand';

export interface VendorItem {
  id: string;
  name: string;
  price: number;
  type?: string;
  icon?: string;
  rarity?: string;
}

interface VendorState {
  isOpen: boolean;
  vendorId: string | null;
  vendorName: string | null;
  items: VendorItem[];
  openVendor: (vendorId: string, vendorName: string, items: VendorItem[]) => void;
  closeVendor: () => void;
}

export const useVendorStore = create<VendorState>((set) => ({
  isOpen: false,
  vendorId: null,
  vendorName: null,
  items: [],
  openVendor: (vendorId, vendorName, items) => set({ isOpen: true, vendorId, vendorName, items }),
  closeVendor: () => set({ isOpen: false, vendorId: null, vendorName: null, items: [] })
}));
