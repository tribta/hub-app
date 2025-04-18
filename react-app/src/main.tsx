import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "./components/ui/provider.tsx";
import { ColorModeProvider } from "./components/ui/color-mode.tsx";
import { Theme } from "@chakra-ui/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <ColorModeProvider>
        <Theme appearance="dark">
          <App />
        </Theme>
      </ColorModeProvider>
    </Provider>
  </StrictMode>
);
