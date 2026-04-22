import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  use: {
    
    browserName: 'chromium', 
    screenshot: 'only-on-failure',
  },

});