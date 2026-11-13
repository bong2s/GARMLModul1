import { createContext, useContext, useState, useCallback, useMemo, type ReactNode } from 'react';
import type { ScreenId, ObjectInstanceId, ARSessionState } from '@/data/types';
import type { InteractionMode } from '@/three/ARInteractionController';

interface AppState {
  currentScreen: ScreenId;
  arSessionState: ARSessionState;
  interactionMode: InteractionMode;
  isMenuOpen: boolean;
  isInfoOpen: boolean;
  selectedObject: ObjectInstanceId | null;

  setScreen: (screen: ScreenId) => void;
  setARSessionState: (state: ARSessionState) => void;
  setInteractionMode: (mode: InteractionMode) => void;
  setMenuOpen: (open: boolean) => void;
  setInfoOpen: (open: boolean) => void;
  setSelectedObject: (id: ObjectInstanceId | null) => void;
  closeInfo: () => void;
}

const AppContext = createContext<AppState | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [currentScreen, setScreen] = useState<ScreenId>('ar');
  const [arSessionState, setARSessionState] = useState<ARSessionState>('idle');
  const [interactionMode, setInteractionMode] = useState<InteractionMode>('group');
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [selectedObject, setSelectedObject] = useState<ObjectInstanceId | null>(null);

  const closeInfo = useCallback(() => {
    setIsInfoOpen(false);
  }, []);

  const value = useMemo<AppState>(
    () => ({
      currentScreen,
      arSessionState,
      interactionMode,
      isMenuOpen,
      isInfoOpen,
      selectedObject,
      setScreen,
      setARSessionState,
      setInteractionMode,
      setMenuOpen,
      setInfoOpen: setIsInfoOpen,
      setSelectedObject,
      closeInfo,
    }),
    [currentScreen, arSessionState, interactionMode, isMenuOpen, isInfoOpen, selectedObject, closeInfo]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppState() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useAppState must be used within AppProvider');
  return ctx;
}
