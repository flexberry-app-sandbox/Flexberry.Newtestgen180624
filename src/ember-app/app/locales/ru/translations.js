import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import DataLineNewtestgen180624MaintenanceOperationLForm from './forms/data-line-newtestgen180624-maintenance-operation-l';
import DataLineNewtestgen180624PeriodicityLForm from './forms/data-line-newtestgen180624-periodicity-l';
import DataLineNewtestgen180624ScheduledMaintenanceOperationLForm from './forms/data-line-newtestgen180624-scheduled-maintenance-operation-l';
import DataLineNewtestgen180624ДоговорLForm from './forms/data-line-newtestgen180624-договор-l';
import DataLineNewtestgen180624МодельОборудованияLForm from './forms/data-line-newtestgen180624-модель-оборудования-l';
import DataLineNewtestgen180624ОборудованиеLForm from './forms/data-line-newtestgen180624-оборудование-l';
import DataLineNewtestgen180624ОрганизацияLForm from './forms/data-line-newtestgen180624-организация-l';
import DataLineNewtestgen180624ПланТОLForm from './forms/data-line-newtestgen180624-план-т-о-l';
import DataLineNewtestgen180624ПрограммаТОLForm from './forms/data-line-newtestgen180624-программа-т-о-l';
import DataLineNewtestgen180624РасположениеLForm from './forms/data-line-newtestgen180624-расположение-l';
import DataLineNewtestgen180624СотрудникLForm from './forms/data-line-newtestgen180624-сотрудник-l';
import DataLineNewtestgen180624СтатусОборудованияLForm from './forms/data-line-newtestgen180624-статус-оборудования-l';
import DataLineNewtestgen180624ТипОборудованияLForm from './forms/data-line-newtestgen180624-тип-оборудования-l';
import DataLineNewtestgen180624ФактТОLForm from './forms/data-line-newtestgen180624-факт-т-о-l';
import DataLineNewtestgen180624PeriodicityEForm from './forms/data-line-newtestgen180624-periodicity-e';
import DataLineNewtestgen180624ДоговорEForm from './forms/data-line-newtestgen180624-договор-e';
import DataLineNewtestgen180624МодельОборудованияEForm from './forms/data-line-newtestgen180624-модель-оборудования-e';
import DataLineNewtestgen180624ОборудованиеEForm from './forms/data-line-newtestgen180624-оборудование-e';
import DataLineNewtestgen180624ОрганизацияEForm from './forms/data-line-newtestgen180624-организация-e';
import DataLineNewtestgen180624ПланТОEForm from './forms/data-line-newtestgen180624-план-т-о-e';
import DataLineNewtestgen180624ПрограммаТОEForm from './forms/data-line-newtestgen180624-программа-т-о-e';
import DataLineNewtestgen180624РасположениеEForm from './forms/data-line-newtestgen180624-расположение-e';
import DataLineNewtestgen180624СотрудникEForm from './forms/data-line-newtestgen180624-сотрудник-e';
import DataLineNewtestgen180624СтатусОборудованияEForm from './forms/data-line-newtestgen180624-статус-оборудования-e';
import DataLineNewtestgen180624ТипОборудованияEForm from './forms/data-line-newtestgen180624-тип-оборудования-e';
import DataLineNewtestgen180624ФактТОEForm from './forms/data-line-newtestgen180624-факт-т-о-e';
import ContractModel from './models/contract';
import DocumentToTheModelModel from './models/document-to-the-model';
import EmployeeModel from './models/employee';
import EquipmentModelModel from './models/equipment-model';
import EquipmentStatusModel from './models/equipment-status';
import EquipmentTypeModel from './models/equipment-type';
import FactOfTheMaintenanceModel from './models/fact-of-the-maintenance';
import FactOperationOfTheMaintenanceModel from './models/fact-operation-of-the-maintenance';
import HardwareModel from './models/hardware';
import LocationModel from './models/location';
import MaintenanceOperationModel from './models/maintenance-operation';
import MaintenancePlanModel from './models/maintenance-plan';
import MaintenanceProgramModel from './models/maintenance-program';
import OrganizationModel from './models/organization';
import PeriodicityModel from './models/periodicity';
import PurposeOfTheMaintenanceModelModel from './models/purpose-of-the-maintenance-model';
import ScheduledMaintenanceOperationModel from './models/scheduled-maintenance-operation';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'contract': ContractModel,
    'document-to-the-model': DocumentToTheModelModel,
    'employee': EmployeeModel,
    'equipment-model': EquipmentModelModel,
    'equipment-status': EquipmentStatusModel,
    'equipment-type': EquipmentTypeModel,
    'fact-of-the-maintenance': FactOfTheMaintenanceModel,
    'fact-operation-of-the-maintenance': FactOperationOfTheMaintenanceModel,
    'hardware': HardwareModel,
    'location': LocationModel,
    'maintenance-operation': MaintenanceOperationModel,
    'maintenance-plan': MaintenancePlanModel,
    'maintenance-program': MaintenanceProgramModel,
    'organization': OrganizationModel,
    'periodicity': PeriodicityModel,
    'purpose-of-the-maintenance-model': PurposeOfTheMaintenanceModelModel,
    'scheduled-maintenance-operation': ScheduledMaintenanceOperationModel
  },

  'application-name': 'Maintenance Management System',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Maintenance Management System',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Maintenance Management System',
          title: 'Maintenance'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        оборудование: {
          caption: 'Оборудование',
          title: 'Оборудование',
          'data-line-newtestgen180624-оборудование-l': {
            caption: 'Оборудование',
            title: ''
          },
          'data-line-newtestgen180624-договор-l': {
            caption: 'Договоры',
            title: ''
          }
        },
        'журнал-т-о': {
          caption: 'Журнал ТО',
          title: 'Журнал ТО',
          'data-line-newtestgen180624-программа-т-о-l': {
            caption: 'Программа ТО',
            title: ''
          },
          'data-line-newtestgen180624-план-т-о-l': {
            caption: 'План ТО',
            title: ''
          },
          'data-line-newtestgen180624-факт-т-о-l': {
            caption: 'Факт ТО',
            title: ''
          }
        },
        справочники: {
          caption: 'Справочники',
          title: 'Справочники',
          'data-line-newtestgen180624-periodicity-l': {
            caption: 'Периоды',
            title: ''
          },
          'data-line-newtestgen180624-модель-оборудования-l': {
            caption: 'Модели оборудования',
            title: ''
          },
          'data-line-newtestgen180624-организация-l': {
            caption: 'Организации',
            title: ''
          },
          'data-line-newtestgen180624-расположение-l': {
            caption: 'Расположение',
            title: ''
          },
          'data-line-newtestgen180624-сотрудник-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'data-line-newtestgen180624-статус-оборудования-l': {
            caption: 'Статусы оборудования',
            title: ''
          },
          'data-line-newtestgen180624-тип-оборудования-l': {
            caption: 'Типы оборудования',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'data-line-newtestgen180624-maintenance-operation-l': DataLineNewtestgen180624MaintenanceOperationLForm,
    'data-line-newtestgen180624-periodicity-l': DataLineNewtestgen180624PeriodicityLForm,
    'data-line-newtestgen180624-scheduled-maintenance-operation-l': DataLineNewtestgen180624ScheduledMaintenanceOperationLForm,
    'data-line-newtestgen180624-договор-l': DataLineNewtestgen180624ДоговорLForm,
    'data-line-newtestgen180624-модель-оборудования-l': DataLineNewtestgen180624МодельОборудованияLForm,
    'data-line-newtestgen180624-оборудование-l': DataLineNewtestgen180624ОборудованиеLForm,
    'data-line-newtestgen180624-организация-l': DataLineNewtestgen180624ОрганизацияLForm,
    'data-line-newtestgen180624-план-т-о-l': DataLineNewtestgen180624ПланТОLForm,
    'data-line-newtestgen180624-программа-т-о-l': DataLineNewtestgen180624ПрограммаТОLForm,
    'data-line-newtestgen180624-расположение-l': DataLineNewtestgen180624РасположениеLForm,
    'data-line-newtestgen180624-сотрудник-l': DataLineNewtestgen180624СотрудникLForm,
    'data-line-newtestgen180624-статус-оборудования-l': DataLineNewtestgen180624СтатусОборудованияLForm,
    'data-line-newtestgen180624-тип-оборудования-l': DataLineNewtestgen180624ТипОборудованияLForm,
    'data-line-newtestgen180624-факт-т-о-l': DataLineNewtestgen180624ФактТОLForm,
    'data-line-newtestgen180624-periodicity-e': DataLineNewtestgen180624PeriodicityEForm,
    'data-line-newtestgen180624-договор-e': DataLineNewtestgen180624ДоговорEForm,
    'data-line-newtestgen180624-модель-оборудования-e': DataLineNewtestgen180624МодельОборудованияEForm,
    'data-line-newtestgen180624-оборудование-e': DataLineNewtestgen180624ОборудованиеEForm,
    'data-line-newtestgen180624-организация-e': DataLineNewtestgen180624ОрганизацияEForm,
    'data-line-newtestgen180624-план-т-о-e': DataLineNewtestgen180624ПланТОEForm,
    'data-line-newtestgen180624-программа-т-о-e': DataLineNewtestgen180624ПрограммаТОEForm,
    'data-line-newtestgen180624-расположение-e': DataLineNewtestgen180624РасположениеEForm,
    'data-line-newtestgen180624-сотрудник-e': DataLineNewtestgen180624СотрудникEForm,
    'data-line-newtestgen180624-статус-оборудования-e': DataLineNewtestgen180624СтатусОборудованияEForm,
    'data-line-newtestgen180624-тип-оборудования-e': DataLineNewtestgen180624ТипОборудованияEForm,
    'data-line-newtestgen180624-факт-т-о-e': DataLineNewtestgen180624ФактТОEForm
  },

});

export default translations;
