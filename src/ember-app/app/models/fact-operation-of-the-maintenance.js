import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ФактОперацияТОMixin
} from '../mixins/regenerated/models/fact-operation-of-the-maintenance';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ФактОперацияТОMixin, Validations, {
});

defineProjections(Model);

export default Model;
