import { remove } from "nprogress";

export const PATHS = {
  AUTH: {
    login: 'api/v1.0/auth/login',
    changePassword: 'api/v1.0/cms/auth/change-password',
    refreshToken: 'api/v1.0/auth/refresh-token'
  },
  CONFIG:{
    INTENT:{
      create: 'api/v1.0/cms/intents/',
      fetch: 'api/v1.0/cms/intents/',
      update: 'api/v1.0/cms/intents/{intent_id}',
      detail: 'api/v1.0/cms/intents/{intentName}/detail',
    },
    ACTION:{
      create: 'api/v1.0/cms/actions/',
      fetch: 'api/v1.0/cms/actions/',
      update: 'api/v1.0/cms/actions/{action_id}',
      detail: 'api/v1.0/cms/actions/{actionName}/detail',
      addAnswer:'api/v1.0/cms/actions/{actionName}/answers',
    },
    RULES:{
      create: 'api/v1.0/cms/rules/',
      fetch: 'api/v1.0/cms/rules/',
      update: 'api/v1.0/cms/rules/{ruleId}',
      detail: 'api/v1.0/cms/rules/{ruleId}',
      remove: 'api/v1.0/cms/rules/{ruleId}',
      listIntentUnused: 'api/v1.0/cms/rules/intents/unused'
    }
  }
  
} as const;