"use client";
import { Toaster } from "react-hot-toast";

import { store } from "@/redux/store";
import "./globals.css";
import { Provider } from "react-redux";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body>
          <Toaster />
          <main>{children}</main>
        </body>
      </Provider>
    </html>
  );
}
