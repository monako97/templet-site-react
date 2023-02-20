import type { Model, ModelAction, ModelEffect } from 'PackageNameByCore';
import type { ResponseBody } from 'PackageNameByRequest';
import { loginByUserName } from '@/services/user';

const model: Model<AccountModel> = {
  // model名称，view层用于提取state的key，需要保证唯一
  namespace: 'account',
  // 初始state状态
  state: {},
  effects: {
    // 用户名登录
    *fetchLogin(
      { payload }: Partial<ModelAction>,
      { call, put }: ModelEffect
    ): Generator<unknown, void, ResponseBody> {
      const resp: ResponseBody = yield call(() => loginByUserName(payload));

      yield put({
        type: 'account/saveUserInfo',
        payload: resp.result,
      });
    },
  },
  reducers: {
    saveUserInfo(state: AccountModel, action: ModelAction): AccountModel {
      return { ...state, info: action.payload };
    },
  },
};

export default model;
