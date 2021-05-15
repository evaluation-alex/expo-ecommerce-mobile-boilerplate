import {actions} from './Reducer';
import {catalogService, settingsService} from './Services';
import {updateAppSettings} from './Modules/Settings/Actions';


export const startup = () => async (dispatch) => {
  dispatch(actions.update.started());

  const appSettings = await settingsService.updateAppSettings();
  if (!appSettings || !appSettings.isActual) {
    // TODO: add inactual or null application settings handling
    throw Error('Error while updating application settings!');
  }
  dispatch(updateAppSettings(appSettings));

  await catalogService.update();

  dispatch(actions.update.finished());
};
