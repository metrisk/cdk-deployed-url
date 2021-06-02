import * as core from '@actions/core'
import path from 'path'
import fs from 'fs'

async function getDeploymentUrl() {
  try {
    const cdkOutJsonPath = path.join(process.cwd(), './cdk.out.json')
    if (fs.existsSync(cdkOutJsonPath)) {
      const output = require(path.join(process.cwd(), './cdk.out.json'))
      const details = output[`${process.env.CDK_STACKNAME}-${process.env.STAGE}`]
      core.setOutput('cdk_deployment_url', Object.values(details)[0])
      return
    } else {
      core.setFailed("JSON file not found")
      return
    }
  } catch (err) {
    core.error(err)
    core.setFailed(err)
    return
  }
}

getDeploymentUrl()
