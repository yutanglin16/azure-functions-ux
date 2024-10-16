/// <reference types="react-scripts" />

import { ITeachingBubbleProps } from '@fluentui/react';

declare module '@fluentui/react/Coachmark' {
  const Coachmark: React.StatelessComponent<ICoachmarkProps>;
}

declare module '@fluentui/react/TeachingBubble' {
  const TeachingBubbleContent: React.StatelessComponent<ITeachingBubbleProps>;
}

interface Environment {
  hostName: string;
  runtimeType: 'OnPrem' | 'Azure';
  azureResourceManagerEndpoint?: string;
  armToken?: string;
  appName: string;
}

interface AppSvc {
  env: Environment;
  version: string;
  sessionId: string;
  trustedDomains?: string[];
  resourceId?: string;
  feature?: string;
  cdn?: string;
  cacheBreakQuery?: string;
  frameId?: string;
  officeFabricIconsCdn?: string;
}

declare global {
  interface Window {
    /**
     * Formats a string based on its key value pair object.
     *
     * @param args The list of arguments format arguments. For example: "String with params {0} and {1}".format("val1", "val2");.
     * @return Formatted string.
     */
    appsvc?: AppSvc;
    updateAuthToken?: (type: string) => Promise<string>;
  }
}
