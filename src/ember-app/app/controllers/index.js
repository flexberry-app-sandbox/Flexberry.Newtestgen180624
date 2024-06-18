import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.оборудование.caption'),
          title: i18n.t('forms.application.sitemap.оборудование.title'),
          children: [{
            link: 'data-line-newtestgen180624-оборудование-l',
            caption: i18n.t('forms.application.sitemap.оборудование.data-line-newtestgen180624-оборудование-l.caption'),
            title: i18n.t('forms.application.sitemap.оборудование.data-line-newtestgen180624-оборудование-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'data-line-newtestgen180624-договор-l',
            caption: i18n.t('forms.application.sitemap.оборудование.data-line-newtestgen180624-договор-l.caption'),
            title: i18n.t('forms.application.sitemap.оборудование.data-line-newtestgen180624-договор-l.title'),
            icon: 'phone',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.журнал-т-о.caption'),
          title: i18n.t('forms.application.sitemap.журнал-т-о.title'),
          children: [{
            link: 'data-line-newtestgen180624-программа-т-о-l',
            caption: i18n.t('forms.application.sitemap.журнал-т-о.data-line-newtestgen180624-программа-т-о-l.caption'),
            title: i18n.t('forms.application.sitemap.журнал-т-о.data-line-newtestgen180624-программа-т-о-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'data-line-newtestgen180624-план-т-о-l',
            caption: i18n.t('forms.application.sitemap.журнал-т-о.data-line-newtestgen180624-план-т-о-l.caption'),
            title: i18n.t('forms.application.sitemap.журнал-т-о.data-line-newtestgen180624-план-т-о-l.title'),
            children: null
          }, {
            link: 'data-line-newtestgen180624-факт-т-о-l',
            caption: i18n.t('forms.application.sitemap.журнал-т-о.data-line-newtestgen180624-факт-т-о-l.caption'),
            title: i18n.t('forms.application.sitemap.журнал-т-о.data-line-newtestgen180624-факт-т-о-l.title'),
            icon: 'briefcase',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочники.caption'),
          title: i18n.t('forms.application.sitemap.справочники.title'),
          children: [{
            link: 'data-line-newtestgen180624-periodicity-l',
            caption: i18n.t('forms.application.sitemap.справочники.data-line-newtestgen180624-periodicity-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.data-line-newtestgen180624-periodicity-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'data-line-newtestgen180624-модель-оборудования-l',
            caption: i18n.t('forms.application.sitemap.справочники.data-line-newtestgen180624-модель-оборудования-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.data-line-newtestgen180624-модель-оборудования-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'data-line-newtestgen180624-организация-l',
            caption: i18n.t('forms.application.sitemap.справочники.data-line-newtestgen180624-организация-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.data-line-newtestgen180624-организация-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'data-line-newtestgen180624-расположение-l',
            caption: i18n.t('forms.application.sitemap.справочники.data-line-newtestgen180624-расположение-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.data-line-newtestgen180624-расположение-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'data-line-newtestgen180624-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.справочники.data-line-newtestgen180624-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.data-line-newtestgen180624-сотрудник-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'data-line-newtestgen180624-статус-оборудования-l',
            caption: i18n.t('forms.application.sitemap.справочники.data-line-newtestgen180624-статус-оборудования-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.data-line-newtestgen180624-статус-оборудования-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'data-line-newtestgen180624-тип-оборудования-l',
            caption: i18n.t('forms.application.sitemap.справочники.data-line-newtestgen180624-тип-оборудования-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.data-line-newtestgen180624-тип-оборудования-l.title'),
            children: null
          }]
        }
      ]
    };
  }),
})