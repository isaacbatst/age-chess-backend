import AdminBro from 'admin-bro'
import AdminBroExpress from '@admin-bro/express'
import { Database, Resource } from '@admin-bro/typeorm';
import express from 'express';
import { createConnection } from 'typeorm';
import { Unit } from './entities/Unit';

AdminBro.registerAdapter({ Database, Resource });

init();

async function init() {
  try {
    const connection = await createConnection();
    const adminBro = new AdminBro({
      databases: [connection],
      rootPath: '/admin',
      resources: [
        { resource: Unit, options: { navigation: { icon: 'Person' } } }
      ],
    })

    const app = express();
    const router = AdminBroExpress.buildRouter(adminBro)
    app.use(adminBro.options.rootPath, router)

    app.listen(8080, () => console.log('AdminBro is under localhost:8080/admin'))
  } catch(err) {
    console.log(err)
  }
}