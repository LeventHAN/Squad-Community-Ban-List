import { typedef as banTypeDef } from './ban/index.js';
import { typedef as banListTypeDef } from './ban-list/index.js';
import { typedef as directivesTypeDef } from './directives/index.js';
import { typedef as exportBanList } from './export-ban-list/index.js';
import { typedef as mutationTypeDef } from './mutation/index.js';
import { typedef as organizationTypeDef } from './organization/index.js';
import { typedef as queryTypeDef } from './query/index.js';
import { typedef as scalarsTypeDef } from './scalars/index.js';
import { typedef as steamUserTypeDef } from './steam-user/index.js';

export default [
  banTypeDef,
  banListTypeDef,
  directivesTypeDef,
  exportBanList,
  mutationTypeDef,
  organizationTypeDef,
  queryTypeDef,
  scalarsTypeDef,
  steamUserTypeDef
];
