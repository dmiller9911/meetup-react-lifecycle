import { CallReturn } from './call-return-after';
import { HOC } from './hoc';
import { IndexRoute } from './indexRoute';
import { Lifecycle } from './lifecycle';
import { RenderCallback } from './render-callback';

export const index = {
  title: 'Home',
  path: '/',
  component: IndexRoute,
};

export const lifeCycle = {
  title: 'Lifecycle',
  path: '/lifecycle',
  component: Lifecycle,
};

export const hoc = {
  title: 'Higher-Order Components',
  path: '/hoc',
  component: HOC,
};

export const renderCallback = {
  title: 'Render Callback',
  path: '/renderCallback',
  component: RenderCallback,
};

export const callReturn = {
  title: 'React Call Return',
  path: '/callreturn',
  component: CallReturn,
};

export const routesInOrder = [
  lifeCycle,
  hoc,
  renderCallback,
  callReturn,
];
