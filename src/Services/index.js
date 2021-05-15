/* @flow */

import Storage from '../Utilities/Storage';

import CatalogService from './CatalogService';
import ServerAPI from './ServerAPI';
import SettingsService from './SettingsService';


const globalStorage = Storage.create();
const serverAPI = ServerAPI.create('dmalakhov');

const settingsStorage = globalStorage.substorage('Settings');
export const settingsService = SettingsService.create({
  storage: settingsStorage,
  serverAPI,
});

const catalogStorage = globalStorage.substorage('Catalog');
export const catalogService = CatalogService.create({
  storage: catalogStorage,
  serverAPI,
  settingsService,
});
