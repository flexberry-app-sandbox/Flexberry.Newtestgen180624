import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПланОперацияТОMixin
} from '../mixins/regenerated/models/scheduled-maintenance-operation';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПланОперацияТОMixin, Validations, {
});

defineProjections(Model);

export default Model;
