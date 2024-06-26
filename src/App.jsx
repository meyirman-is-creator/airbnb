// routes
import Router from "./routes";
// theme
import ThemeProvider from "./theme";
// components
import Settings from "./components/settings";
import RtlLayout from "./components/RtlLayout";
import { ChartStyle } from "./components/chart";
import ScrollToTop from "./components/ScrollToTop";
import { ProgressBarStyle } from "./components/ProgressBar";
import NotistackProvider from "./components/NotistackProvider";
import ThemeColorPresets from "./components/ThemeColorPresets";
import MotionLazyContainer from "./components/animate/MotionLazyContainer";
import './App.css'
function App() {
  return (
    <>
      <ThemeProvider>
        <ThemeColorPresets>
          <RtlLayout>
            <NotistackProvider>
              <MotionLazyContainer>
                <ProgressBarStyle />
                <ChartStyle />
                <Settings />
                <ScrollToTop />
                <Router />
              </MotionLazyContainer>
            </NotistackProvider>
          </RtlLayout>
        </ThemeColorPresets>
      </ThemeProvider>
    </>
  );
}

export default App;
