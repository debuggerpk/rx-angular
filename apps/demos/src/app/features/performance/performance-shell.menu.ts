import { RXLET_VS_PUSH_MENU_ITEMS } from './rx-let-vs-push/rx-let-vs-push.menu';
import { ALPHAS_COMPARE_MENU_ITEMS } from './alphas-compare/alphas-compare.menu';
import { MENU_ITEMS as CONCURRENT_STRATEGIES_MENU_ITEMS } from './concurrent-strategies/concurrent-strategies.menu';

export const MENU_ITEMS = [
  ...RXLET_VS_PUSH_MENU_ITEMS,
  ...ALPHAS_COMPARE_MENU_ITEMS,
  {
    label: 'Nested Component Structure',
    link: 'nested-component-structure'
  },
  {
    label: 'Sibling Component Structure',
    link: 'sibling-component-structure'
  },
  {
    label: 'Concurrent Strategies',
    link: 'concurrent-strategies',
    children: [
      ...CONCURRENT_STRATEGIES_MENU_ITEMS
    ]
  }
];
