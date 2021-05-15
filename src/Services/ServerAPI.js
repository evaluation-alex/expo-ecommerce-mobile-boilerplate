import {create as createAPI} from 'apisauce';


export default class ServerAPI {
  constructor(projectID) {
    this._api = createAPI({
      baseURL: 'http://menu.quicktouch.ru/android/',
      timeout: 10000,
    });

    this._api.addRequestTransform((request) => {
      request.params.login = projectID;
    });
  }

  async getAppSettings() {
    const res = await this._api.get('get_settings.php');
    if (!res.ok) {
      return null;
    }
    const data = res.data[0];

    return {
      version: data.version,
      updatedAt: data.last_sign_in_at,
      features: {
        smartAssistant: data.smart_assistant,
      },
    };
  }

  static create(projectID) {
    return new ServerAPI(projectID);
  }
}
