import * as core from '@actions/core'
import path from 'path'
import fs from 'fs'

async function getDeploymentUrl() {
  try {
    const cdkOutJsonPath = path.join(process.cwd(), './cdk.out.json')
    if (fs.existsSync(cdkOutJsonPath)) {
      const output = require(path.join(process.cwd(), './cdk.out.json'))
      core.info(JSON.stringify(output))
      const details = output[`${process.env.CDK_STACKNAME}`]
      core.info(JSON.stringify(details))
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
