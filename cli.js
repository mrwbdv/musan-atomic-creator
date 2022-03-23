#!/usr/bin/env node
import { createComponent } from './dist/index.js';

const arg = process.argv[2];

switch (arg) {
  case 'create-component':
    createComponent();
    break;
  default:
    break;
}
