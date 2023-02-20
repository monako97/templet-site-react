import type { MockConfiguration } from 'PackageNameByMock';

const conf: MockConfiguration = {
  'POST /api/upload_file': (req, res) => {
    const strBase64 = Buffer.from(req.files[0].buffer).toString('base64');

    const resp = {
      status: 200,
      message: '上传成功',
      result: 'data:image/jpeg;base64,' + strBase64,
    };

    res.status(resp.status).send(resp);
  },
  'POST /api/login_by_username': (req, res) => {
    const resp = {
      status: 200,
      message: '请求成功',
      result: {
        address: '**省,**市,**市,**街道',
        avatar: '',
        birthday: 853718400000,
        create_time: 1576795086000,
        email: 'poi.***@qq.com',
        id: 1,
        last_active_ip: '127.0.0.1',
        last_active_time: new Date().getTime(),
        password: req.body.password,
        phone: '12****2112',
        status: 1,
        update_time: 1612553329000,
        username: req.body.username,
      },
    };

    res.status(resp.status).send(resp);
  },
};

export default conf;
