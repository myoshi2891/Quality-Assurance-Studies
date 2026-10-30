import { defineConfig } from '@playwright/test';
export default defineConfig({ testDir:'./e2e', testMatch:'iso-30130-layout.e2e.ts', workers:1, reporter:'list', use:{browserName:'chromium', channel:'chrome', headless:true} });
