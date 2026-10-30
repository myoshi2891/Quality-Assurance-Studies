import { defineConfig } from '@playwright/test';
export default defineConfig({ testDir:'./e2e', testMatch:'iso-iec-5338-layout.e2e.ts', workers:1, reporter:'list', use:{browserName:'chromium', channel:'chrome', headless:true} });
