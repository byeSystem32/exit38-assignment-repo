
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";

  // Add diagnostic logging
  console.log("Main script loaded");
  console.log("Base URL:", import.meta.env.BASE_URL);
  console.log("Mode:", import.meta.env.MODE);

  const rootElement = document.getElementById("root");
  if (!rootElement) {
    const errorMsg = "Root element not found";
    console.error(errorMsg);
    document.body.innerHTML = `<div style="padding: 20px; font-family: sans-serif; color: red;"><h1>Error: ${errorMsg}</h1></div>`;
    throw new Error(errorMsg);
  }

  console.log("Root element found, creating React root...");

  try {
    const root = createRoot(rootElement);
    console.log("React root created, rendering App...");
    root.render(<App />);
    console.log("App rendered successfully");
  } catch (error) {
    console.error("Failed to render app:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    const errorStack = error instanceof Error ? error.stack : "";
    rootElement.innerHTML = `
      <div style="padding: 20px; font-family: sans-serif; background: #fee; border: 2px solid #f00; margin: 20px;">
        <h1 style="color: #c00;">Error loading application</h1>
        <p><strong>Error:</strong> ${errorMessage}</p>
        ${errorStack ? `<pre style="background: #fff; padding: 10px; overflow: auto;">${errorStack}</pre>` : ''}
        <p>Please check the browser console (F12) for more details.</p>
        <p>Base URL: ${import.meta.env.BASE_URL}</p>
      </div>
    `;
  }

  // Global error handlers
  window.addEventListener("error", (event) => {
    console.error("Global error:", event.error);
    if (rootElement && !rootElement.querySelector("h1")) {
      rootElement.innerHTML = `
        <div style="padding: 20px; font-family: sans-serif; background: #fee; border: 2px solid #f00;">
          <h1>JavaScript Error</h1>
          <p><strong>Message:</strong> ${event.message}</p>
          <p><strong>File:</strong> ${event.filename}</p>
          <p><strong>Line:</strong> ${event.lineno}</p>
        </div>
      `;
    }
  });

  window.addEventListener("unhandledrejection", (event) => {
    console.error("Unhandled promise rejection:", event.reason);
  });
  