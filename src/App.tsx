import React, { useEffect, useState, useRef } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigation
} from "react-router-dom";

import Index from "./pages/Index";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import Industries from "./pages/Industries";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import TermsOfService from "./pages/termsofservice"; // Fixed variable name (should be PascalCase)
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/ui/back_to_top";
import LoadingScreen from './components/LoadingScreen';
import { LoadingProvider, useLoading } from './context/LoadingContext';

const queryClient = new QueryClient();

const MIN_LOADING_DISPLAY_TIME_MS = 2000;
const PROGRESS_ANIMATION_DURATION_MS = MIN_LOADING_DISPLAY_TIME_MS * 0.8;

const AppLayout = () => {
  const { setLoading: setContextLoading } = useLoading();
  const navigation = useNavigation();

  const [isScreenVisible, setIsScreenVisible] = useState(true);
  const [simulatedProgress, setSimulatedProgress] = useState(0);

  const hideTimerRef = useRef<NodeJS.Timeout | null>(null);
  const navigationStartRef = useRef<number>(Date.now());
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const isNavBusy = navigation.state === 'loading' || navigation.state === 'submitting';
    console.log(`Navigation state: ${navigation.state}, Is Nav Busy: ${isNavBusy}, Is Screen Visible: ${isScreenVisible}, Progress: ${simulatedProgress}`);

    setContextLoading(isNavBusy);

    if (isNavBusy) {
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      setIsScreenVisible(true);
      navigationStartRef.current = Date.now();

      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      setSimulatedProgress(0);

      const startTime = Date.now();
      progressIntervalRef.current = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        const currentProgress = Math.min(100, (elapsedTime / PROGRESS_ANIMATION_DURATION_MS) * 100);
        setSimulatedProgress(currentProgress);
        if (currentProgress >= 100) {
          if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
        }
      }, 30);
    } else {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      setSimulatedProgress(100);

      const timeSinceNavStart = Date.now() - navigationStartRef.current;
      const remainingMinTime = MIN_LOADING_DISPLAY_TIME_MS - timeSinceNavStart;

      if (remainingMinTime > 0) {
        if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
        hideTimerRef.current = setTimeout(() => {
          setIsScreenVisible(false);
          setSimulatedProgress(0);
        }, remainingMinTime);
      } else {
        setIsScreenVisible(false);
        setSimulatedProgress(0);
      }
    }

    return () => {
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [navigation.state, setContextLoading]);

  return (
    <>
      <LoadingScreen isLoading={isScreenVisible} actualProgress={simulatedProgress} />
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ScrollToTop />
        <Outlet />
        <BackToTop />
      </TooltipProvider>
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    loader: async () => {
      console.log("AppLayout root loader executing...");
      return null;
    },
    children: [
      { path: "/", element: <Index /> },
      { path: "/about", element: <About /> },
      { path: "/solutions", element: <Solutions /> },
      { path: "/industries", element: <Industries /> },
      { path: "/contact", element: <Contact /> },
      { path: "/blog", element: <Blog /> },
      { path: "/terms", element: <TermsOfService /> }, // Fixed component reference
    ],
  },
]);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LoadingProvider>
      <RouterProvider router={router} />
    </LoadingProvider>
  </QueryClientProvider>
);

export default App;