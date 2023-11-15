import { Route } from '@vaadin/router';
import './not-found/not-found.js';
import './view1/view1';
import './view3/view3';

export const routes: Route[] = [
  { path: 'view1', component: 'app-view1', name: 'View1' },
  { path: 'view3', component: 'app-view3', name: 'View3' },
  // The fallback route should always be after other alternatives.
  { path: '(.*)', component: 'app-not-found' }
];
