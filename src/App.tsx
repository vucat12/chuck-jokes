import { StrictMode, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./pages/shared/Routes";

export const queryClient = new QueryClient();

const App = () => {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Suspense>
            <Routes />
          </Suspense>
        </Router>
      </QueryClientProvider>
    </StrictMode>
  );
};

export default App;
