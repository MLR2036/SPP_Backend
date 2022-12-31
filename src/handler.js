import serverlessExpress from '@vendia/serverless-express'
import {app} from './express.js'
const handler = serverlessExpress({ app })

export {handler}