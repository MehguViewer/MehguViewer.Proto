export const dictionary = {
  en: {
    landing: {
      title: 'MehguViewer.Proto',
      subtitle: 'The Official Protocol Specification & Documentation',
      getStarted: 'Get Started',
      altThumbnail: 'MehguViewer Protocol',
    },
    nav: {
      documentation: 'Documentation',
      coreApi: 'Core API',
      authApi: 'Auth API',
    },
    metadata: {
      title: 'MehguViewer.Proto',
      description: 'The Source of Truth for the Federated Media Ecosystem.',
    },
  },
  'zh-CN': {
    landing: {
      title: 'MehguViewer.Proto',
      subtitle: '官方协议规范与文档',
      getStarted: '开始使用',
      altThumbnail: 'MehguViewer 协议',
    },
    nav: {
      documentation: '文档',
      coreApi: '核心 API',
      authApi: '认证 API',
    },
    metadata: {
      title: 'MehguViewer.Proto',
      description: '联邦媒体生态系统的真理之源。',
    },
  },
} as const;

export type Language = keyof typeof dictionary;
