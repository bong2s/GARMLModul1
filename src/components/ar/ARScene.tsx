import { useRef, useEffect, useCallback, useState } from 'react';
import { ARSceneManager } from '@/three/ARSceneManager';
import type { InteractionMode } from '@/three/ARInteractionController';
import { useAppState } from '@/state/AppContext';
import { getTimelineObjectById, getAllTimelineObjects } from '@/data/arObjects';
import type { ARSessionState, ObjectInstanceId } from '@/data/types';
import { ARObjectInfoPanel } from './ARObjectInfoPanel';
import { ARCameraHUD, type CategoryId } from './ARCameraHUD';
import { ARMenu } from './ARMenu';
import { CameraPermission } from './CameraPermission';

export function ARScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const managerRef = useRef<ARSceneManager | null>(null);

  const {
    arSessionState,
    setARSessionState,
    interactionMode,
    setInteractionMode,
    isMenuOpen,
    setMenuOpen,
    isInfoOpen,
    setInfoOpen,
    selectedObject,
    setSelectedObject,
    closeInfo,
  } = useAppState();

  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');

  const handleStateChange = useCallback(
    (state: 'searching' | 'detected' | 'placed' | 'demo' | 'loading') => {
      setARSessionState(state as ARSessionState);
    },
    [setARSessionState]
  );

  const handleObjectSelect = useCallback(
    (id: ObjectInstanceId | null) => {
      setSelectedObject(id);
      setInfoOpen(id !== null);
    },
    [setSelectedObject, setInfoOpen]
  );

  const handleModeChange = useCallback(
    (mode: InteractionMode) => {
      setInteractionMode(mode);
    },
    [setInteractionMode]
  );

  useEffect(() => {
    if (!containerRef.current) return;

    const manager = new ARSceneManager(containerRef.current, {
      onStateChange: handleStateChange,
      onObjectSelect: handleObjectSelect,
      onModeChange: handleModeChange,
    });
    managerRef.current = manager;

    const initCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'environment' },
          audio: false,
        });
        const video = document.createElement('video');
        video.srcObject = stream;
        video.autoplay = true;
        video.playsInline = true;
        video.muted = true;
        video.style.position = 'absolute';
        video.style.inset = '0';
        video.style.width = '100%';
        video.style.height = '100%';
        video.style.objectFit = 'cover';
        video.style.zIndex = '0';
        containerRef.current?.insertBefore(video, containerRef.current.firstChild);

        video.addEventListener('loadeddata', () => {
          manager.autoPlaceTimeline();
        }, { once: true });
        setTimeout(() => manager.autoPlaceTimeline(), 3000);
      } catch {
        setARSessionState('unsupported');
      }
    };

    initCamera();

    return () => {
      manager.dispose();
      managerRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDemoMode = () => {
    if (managerRef.current) managerRef.current.enableDemoMode();
    setARSessionState('demo');
  };

  const handleRetryCamera = () => {
    setARSessionState('starting');
    if (managerRef.current) {
      managerRef.current.reset();
      setTimeout(() => managerRef.current?.autoPlaceTimeline(), 800);
    }
  };

  const handleSetMode = (mode: InteractionMode) => {
    if (managerRef.current) managerRef.current.setMode(mode);
  };

  const handleReturnToTimeline = () => {
    if (managerRef.current) managerRef.current.returnToTimeline();
  };

  const handleCategoryChange = (cat: CategoryId, ids: ObjectInstanceId[] | null) => {
    setActiveCategory(cat);
    if (managerRef.current) {
      managerRef.current.filterByCategory(ids);
    }
  };

  const handleResetView = () => {
    if (managerRef.current) {
      managerRef.current.resetTimeline();
      managerRef.current.filterByCategory(null);
    }
    setActiveCategory('all');
  };

  const handleCloseInfo = () => {
    closeInfo();
  };

  if (arSessionState === 'unsupported' || arSessionState === 'permission_denied') {
    return (
      <CameraPermission
        state={arSessionState}
        onDemoMode={handleDemoMode}
        onRetry={handleRetryCamera}
      />
    );
  }

  const selectedObj = selectedObject ? getTimelineObjectById(selectedObject) : null;
  const objectCount = getAllTimelineObjects().length;

  return (
    <div className="relative h-full w-full overflow-hidden bg-ink-950">
      <div ref={containerRef} className="absolute inset-0 z-10" />
      <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-b from-ink-950/30 via-transparent to-ink-950/40" />

      <ARCameraHUD
        instruction=""
        sessionState={arSessionState}
        interactionMode={interactionMode}
        hasSelection={selectedObject !== null}
        objectCount={objectCount}
        activeCategory={activeCategory}
        onOpenMenu={() => setMenuOpen(true)}
        onSetMode={handleSetMode}
        onReturnToTimeline={handleReturnToTimeline}
        onCategoryChange={handleCategoryChange}
        onResetView={handleResetView}
      />

      {isInfoOpen && selectedObj && (
        <ARObjectInfoPanel
          object={selectedObj}
          onClose={handleCloseInfo}
        />
      )}

      {isMenuOpen && <ARMenu onClose={() => setMenuOpen(false)} />}
    </div>
  );
}
