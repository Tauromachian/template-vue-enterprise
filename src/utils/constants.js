import https from 'https'

export const SERVER_DIR = process.env.VUE_APP_BE_HOST

export const APPLICATION = process.env.VUE_APP_APPLICATION

const API_NAME = '/apps/bienestar/api/'

export const APP_TAG = 'ticket'

export const BIENESTAR_DIR = SERVER_DIR + API_NAME

// export const BIENESTAR_DIR = 'http://127.0.0.1:8000/api/'

export const BIENESTAR_DIR_2 = SERVER_DIR + API_NAME

// export const BIENESTAR_DIR = 'http://127.0.0.1:8000/' + 'api/'

export const NOM_DIR = BIENESTAR_DIR + 'nom/'

export const CLIENT_ID = process.env.VUE_APP_CLIENT_ID

export const CLIENT_SECRET = process.env.VUE_APP_CLIENT_SECRET

export const AUTH_TOKEN = '/oauth2/'

export const TOKEN_DIR = SERVER_DIR + AUTH_TOKEN

export const EXAMPLE_JSON = [
  {
    name: 'PortalApp.Portal',
    parent: null,
    children: [
      {
        name: 'PortalApp.Faq',
        parent: 'PortalApp.Portal',
        children: [
          {
            name: 'PortalApp.Faq',
            parent: 'PortalApp.Portal',
            children: [],
          },
          {
            name: 'PortalApp.About',
            parent: 'PortalApp.Portal',
            children: [],
          },
        ],
      },
      {
        name: 'PortalApp.Login',
        parent: 'PortalApp.Portal',
        children: [],
      },
    ],
  },
]

export const USER_INFO_JSON =
  '{["id": null, "name": "Prueba", "lastname": null, "email": null, "dni": null, "gender": null, "mobile": null, "address": null, "ocupation": null, "id_provincia": null, "id_municipio": null, "id_workspace": 4]}'

export const AUTHORIZE_DIR =
  SERVER_DIR +
  '/oauth2/authorize?client_id=' +
  CLIENT_ID +
  '&redirect_uri=' +
  SERVER_DIR +
  '&scope=openid&response_type=code'

const ONE_DAY = 24 * 60 * 60 * 1000

export const EXPIRES_TIME = '; expires=' + ONE_DAY

export const TYPESERVICEJSON =
  '[{"id":1,"name":"Duane Lehner","description":"A rerum qui nobis omnis sed ut. Neque inventore blanditiis laboriosam praesentium asperiores aliquam. Similique quaerat sit aliquam sapiente.","date_start":"1982-02-04","date_end":"1982-02-04","created_at":"2020-03-14 13:43:41","updated_at":"2020-03-14 13:43:41"},{"id":2,"name":"Joey Hill","description":"Omnis in voluptatem sequi. Quibusdam ut a eveniet et. Corrupti dolor placeat qui esse beatae. Rem repudiandae qui ex aut. Repellendus enim at dignissimos. Provident eum consectetur provident.","date_start":"1972-08-02","date_end":"1982-02-04","created_at":"2020-03-14 13:43:41","updated_at":"2020-03-14 13:43:41"},{"id":3,"name":"Amira Hilpert","description":"Et iusto officia doloremque nam. Quibusdam quam quidem quo aliquid deserunt aut voluptatibus. Praesentium reiciendis qui expedita. Doloremque architecto explicabo possimus et quasi.","date_start":"2007-07-28","date_end":null,"created_at":"2020-03-14 13:43:41","updated_at":"2020-03-14 13:43:41"},{"id":4,"name":"Aisha Dickinson Jr.","description":"Dolorem nulla quia corporis sed. Esse maiores doloremque quaerat illum consequatur qui. Alias facilis eligendi est voluptatum.","date_start":"1980-01-23","date_end":null,"created_at":"2020-03-14 13:43:42","updated_at":"2020-03-14 13:43:42"},{"id":5,"name":"Breanna Anderson","description":"Accusantium sit atque corrupti. Iusto sit et tempore facere. Totam dolorem alias numquam quidem eos magnam explicabo.","date_start":"2009-11-02","date_end":null,"created_at":"2020-03-14 13:43:42","updated_at":"2020-03-14 13:43:42"},{"id":6,"name":"Mrs. Paula Gutkowski DDS","description":"Alias magni odio occaecati cupiditate sed ut. Ut voluptatem deserunt esse dicta. Ea sint dolores rem inventore perferendis aut qui. Animi laudantium error quia esse ipsa possimus.","date_start":"2011-10-14","date_end":null,"created_at":"2020-03-14 13:43:42","updated_at":"2020-03-14 13:43:42"},{"id":7,"name":"Mrs. Amina Lang","description":"Quis est autem fugit enim totam. Autem ab qui quasi consectetur odit voluptatibus. Aliquid sunt dolor sed qui voluptatem et enim. Nihil alias debitis earum.","date_start":"1989-05-27","date_end":null,"created_at":"2020-03-14 13:43:42","updated_at":"2020-03-14 13:43:42"},{"id":8,"name":"Dr. Tate Walker","description":"Dolorum ut et perspiciatis quas architecto. Enim ea ab hic voluptatem tenetur. Similique qui veniam nobis perspiciatis doloribus. Omnis error quo reprehenderit debitis voluptatum doloremque in.","date_start":"2018-04-25","date_end":null,"created_at":"2020-03-14 13:43:42","updated_at":"2020-03-14 13:43:42"},{"id":9,"name":"Joannie Gleason","description":"Id eos quasi libero neque praesentium. At delectus officiis fuga et soluta non aut. Non molestias aut et quod asperiores. Ipsa voluptas magnam veniam sapiente et.","date_start":"2005-04-12","date_end":null,"created_at":"2020-03-14 13:43:42","updated_at":"2020-03-14 13:43:42"},{"id":10,"name":"Dr. Rosetta Strosin","description":"Nihil mollitia nulla voluptatem cumque. Exercitationem nihil et itaque eius dolore aut animi.","date_start":"1996-02-27","date_end":null,"created_at":"2020-03-14 13:43:42","updated_at":"2020-03-14 13:43:42"}]'

export const object = JSON.parse(TYPESERVICEJSON)

export const AGENT = new https.Agent({
  rejectUnauthorized: false,
})

export const SOCKET_IO_DIR = 'localhost'

export const NO_AVATAR_INFO =
  ' data:image/png;base64,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'

export const NO_AVATAR =
  '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'

export const REGISTER_DIR = SERVER_DIR + '/api/register'