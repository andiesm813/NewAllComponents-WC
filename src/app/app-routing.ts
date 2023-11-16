import { Route } from '@vaadin/router';
import './not-found/not-found.js';
import './all-components/all-components';
import './calendar/calendar';

export const routes: Route[] = [
  { path: 'all-components', component: 'app-all-components', name: 'All Components' },
  { path: 'calendar', component: 'app-calendar', name: 'Calendar' },
  // The fallback route should always be after other alternatives.
  { path: '(.*)', component: 'app-not-found' }
];
