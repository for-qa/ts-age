import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface SidebarSection {
  href: string;
  label: string;
  isGroup?: boolean;
}

interface SidebarContextValue {
  sections: SidebarSection[];
  setSections: (sections: SidebarSection[]) => void;
}

const SidebarContext = createContext<SidebarContextValue>({
  sections: [],
  setSections: () => {},
});

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [sections, setSections] = useState<SidebarSection[]>([]);
  return (
    <SidebarContext.Provider value={{ sections, setSections }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  return useContext(SidebarContext);
}
