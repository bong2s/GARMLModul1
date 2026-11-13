import { AppProvider, useAppState } from '@/state/AppContext';
import { IntroScreen } from '@/components/ar/IntroScreen';
import { ARScene } from '@/components/ar/ARScene';
import { TimelineScreen } from '@/components/screens/TimelineScreen';
import { PerformanceScreen } from '@/components/screens/PerformanceScreen';
import { ComparisonScreen } from '@/components/screens/ComparisonScreen';
import { AboutScreen } from '@/components/screens/AboutScreen';

function ScreenRouter() {
  const { currentScreen } = useAppState();

  switch (currentScreen) {
    case 'intro':
      return <IntroScreen />;
    case 'ar':
      return (
        <div className="fixed inset-0 h-full w-full overflow-hidden bg-ink-950">
          <ARScene key="ar-scene" />
        </div>
      );
    case 'timeline':
      return <TimelineScreen />;
    case 'performance':
      return <PerformanceScreen />;
    case 'comparison':
      return <ComparisonScreen />;
    case 'about':
      return <AboutScreen />;
    default:
      return <IntroScreen />;
  }
}

export default function App() {
  return (
    <AppProvider>
      <ScreenRouter />
    </AppProvider>
  );
}
