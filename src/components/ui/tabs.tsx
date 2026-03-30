import React, { ReactNode } from 'react';
import { Tabs as RadixTabs, TabList, Tab, TabPanels, TabPanel } from '@radix-ui/react-tabs';

export const Tabs = ({ children }: { children: ReactNode }) => {
  return <RadixTabs>{children}</RadixTabs>;
};

export const TabsList = ({ children }: { children: ReactNode }) => {
  return <TabList>{children}</TabList>;
};

export const TabsTrigger = ({ children }: { children: ReactNode }) => {
  return <Tab>{children}</Tab>;
};

export const TabsContent = ({ children }: { children: ReactNode }) => {
  return <TabPanels><TabPanel>{children}</TabPanel></TabPanels>;
};