import { createRoot } from "react-dom/client";

// Styles
import "./index.css";
import "@mantine/core/styles.css";

// Importing the router
import { router } from "./Router.jsx";
import { RouterProvider } from "react-router";

// React Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Toast
import { Toaster } from "sonner";

// Importing Mantine Provider
import { MantineProvider, createTheme } from "@mantine/core";

const theme = createTheme({
  cursorType: "pointer",
});

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  // Mantine Provider
  <MantineProvider theme={theme}>
    {/* Query Provider */}
    <QueryClientProvider client={queryClient}>
      {/* Router Provider */}
      <RouterProvider router={router} />
    </QueryClientProvider>

    {/* Toast Provider */}
    <Toaster />
  </MantineProvider>
);
