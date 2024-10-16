import 'core-js/es6/symbol';
import { FunctionsVersionInfo } from '../app/shared/models/functions-version-info';

interface Environment {
  hostName: string;
  runtimeType: 'OnPrem' | 'Azure' | 'Standalone';
  azureResourceManagerEndpoint: string;
  armToken?: string;
  appName: string;
}

interface AppSvc {
  env: Environment;
  functionsVersionInfo: FunctionsVersionInfo;
  version: string;
  cacheBreakQuery: string;
  resourceId?: string;
  feature?: string;
  cdn?: string;
  frameId?: string;
  trustedDomains?: string[];
}

declare global {
  interface Window {
    appsvc: AppSvc;
  }
}
