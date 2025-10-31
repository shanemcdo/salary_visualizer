/* @refresh reload */
import type { Component, JSX } from 'solid-js';
import { render } from 'solid-js/web';
import './index.scss';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => <div />, root!);
