import { execSyncCmd, getNetworkConfig } from '@/lib'

export const createLb = async (projectId: string, appName: string) => {
  const appConf = await getNetworkConfig(projectId, appName)
  const shCmd = [
    'gcloud',
    'compute',
    'url-maps',
    'create',
    appConf.loadBalancerName,
    '--default-service',
    appConf.defaultBackendServiceName,
    '--project',
    projectId,
  ]
  await execSyncCmd(shCmd)
}
