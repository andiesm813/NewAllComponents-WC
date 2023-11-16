import { expect } from '@open-wc/testing';
import AllComponents from './all-components.js';

describe('AllComponents', () => {
  it('<app-all-components> is an instance of AllComponents', async () => {
    const element = document.createElement('app-all-components');
    expect(element).to.be.instanceOf(AllComponents);
  });
});
