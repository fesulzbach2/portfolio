export const projectsData = [
  {
    slug: 'concursai',
    title: 'ConcursAI',
    subtitle: 'Estude com inteligência artificial.',
    description: 'Aplicativo inteligente que utiliza Inteligência Artificial para gerar simulados e rotinas de estudos voltados para concursos públicos de alto desempenho.',
    longDescription: `ConcursAI é um aplicativo nativo iOS que revoluciona a preparação para concursos públicos ao integrar inteligência artificial diretamente no fluxo de estudos. O sistema gera automaticamente simulados personalizados baseados no perfil do usuário, identifica pontos fracos e adapta as rotinas de revisão para maximizar a retenção.

A interface foi construída inteiramente em SwiftUI, priorizando interações fluidas, animações suaves e feedback visual imediato. O backend utiliza modelos de linguagem para geração de questões contextualizadas, análise de desempenho e sugestões de estudo personalizadas.

O app inclui cronogramas inteligentes, tracking de progresso com gráficos detalhados, modo simulado com timer e estatísticas por disciplina.`,
    tags: ['SwiftUI', 'AI Integration'],
    image: '/ConcursAIIcon.png',
    screenshots: ['/concursAIAssets/1@3x.png', '/concursAIAssets/2@3x.png', '/concursAIAssets/3@3x.png', '/concursAIAssets/4@3x.png'],
    videoUrl: null,
    technologies: [
      { name: 'SwiftUI', role: 'Interface declarativa nativa iOS' },
      { name: 'Core ML', role: 'Modelos de machine learning on-device' },
      { name: 'OpenAI API', role: 'Geração inteligente de questões e análise' },
      { name: 'Swift Charts', role: 'Visualização de progresso e estatísticas' },
    ],
    developers: [
      { name: 'Fernando Sulzbach', role: 'iOS Developer', avatar: null },
    ],
    links: { github: '#', live: null, appStore: null },
    category: 'Education',
    year: '2024',
  },
  {
    slug: 'overdrive',
    title: 'Overdrive',
    subtitle: 'Performance veicular em outro nível.',
    description: 'Plataforma avançada focada em gerenciamento veicular extremo e performance, trazendo um layout robusto e interfaces de alto contraste.',
    longDescription: `Overdrive é uma plataforma de gerenciamento veicular construída com UIKit e CoreAnimation, oferecendo uma experiência visual impactante com interfaces de alto contraste e animações cinematográficas.

O app permite monitoramento detalhado de performance, manutenção preventiva, tracking de combustível e análise de condução. Cada tela foi projetada para entregar informações densas de forma clara, utilizando gradientes escuros, tipografia bold e transições suaves.

A arquitetura utiliza padrões avançados de UIKit incluindo custom transitions, layout customizado com CollectionView compositional layouts e data sources difáveis para performance extrema em listas longas.`,
    tags: ['UIKit', 'CoreAnimation'],
    image: '/OverdriveIconSet.png',
    screenshots: [],
    videoUrl: null,
    technologies: [
      { name: 'UIKit', role: 'Interface programática de alta performance' },
      { name: 'CoreAnimation', role: 'Animações customizadas e transições fluidas' },
      { name: 'Core Data', role: 'Persistência local de dados veiculares' },
      { name: 'MapKit', role: 'Tracking de rotas e localização' },
    ],
    developers: [
      { name: 'Fernando Sulzbach', role: 'iOS Developer', avatar: null },
    ],
    links: { github: '#', live: null, appStore: null },
    category: 'Automotive',
    year: '2025',
  },
  {
    slug: 'pickture',
    title: 'Pickture!',
    subtitle: 'Fotos com diversão e interação.',
    description: 'Utilitário divertido e social para gerenciar e interagir com fotos. Conta com animações espaciais e processamento assíncrono avançado para fluxos multimídia.',
    longDescription: `Pickture! é um utilitário social de fotos construído em SwiftUI que transforma o gerenciamento de imagens numa experiência divertida e interativa. O app apresenta animações espaciais únicas, transições 3D e processamento assíncrono avançado para manipulação multimídia.

O sistema utiliza PhotosUI para integração nativa com a biblioteca de fotos do dispositivo, permitindo filtragem inteligente, edição rápida e compartilhamento social com efeitos visuais exclusivos.

Destaque para o uso de concorrência estruturada do Swift (async/await, TaskGroups) para processamento paralelo de múltiplas imagens sem bloquear a interface do usuário.`,
    tags: ['SwiftUI', 'PhotosUI'],
    image: '/Pickture!Icon.png',
    screenshots: ['/pickture!Assets/Size 1.png', '/pickture!Assets/Size 1-1.png', '/pickture!Assets/Size 1-2.png', '/pickture!Assets/Size 1-3.png'],
    videoUrl: null,
    technologies: [
      { name: 'SwiftUI', role: 'Interface declarativa com animações espaciais' },
      { name: 'PhotosUI', role: 'Integração nativa com biblioteca de fotos' },
      { name: 'Swift Concurrency', role: 'Processamento assíncrono avançado' },
      { name: 'Core Image', role: 'Filtros e processamento de imagens' },
    ],
    developers: [
      { name: 'Fernando Sulzbach', role: 'iOS Developer', avatar: null },
    ],
    links: { github: '#', live: null, appStore: null },
    category: 'Social',
    year: '2024',
  },
  {
    slug: 'rise-of-the-lich-king',
    title: 'Rise of the Lich King',
    subtitle: 'Jogo imersivo com IA e física customizada.',
    description: 'Um jogo imersivo com física customizada, estados controlados por Inteligência Artificial e arte detalhada rodando nativamente via SpriteKit e Metal.',
    longDescription: `Rise of the Lich King é um jogo de ação nativo para iOS construído com SpriteKit e GameplayKit, apresentando física customizada, IA por state machines e arte detalhada renderizada via Metal.

O jogo implementa um sistema de boss procedural que escala a cada 5 ondas, com padrões de ataque únicos, slow-motion cinematográfico e partículas avançadas. O sistema de aliados inclui níveis visuais, animações dinâmicas e comportamentos controlados por máquinas de estado.

A engine foi otimizada para lidar com centenas de entidades simultâneas com detecção de colisão performática, gerenciamento de memória eficiente e áudio dinâmico via AVFoundation.`,
    tags: ['SpriteKit', 'GameplayKit'],
    image: '/imageIconRiseLichKing.png',
    screenshots: [],
    videoUrl: null,
    technologies: [
      { name: 'SpriteKit', role: 'Engine de renderização e física' },
      { name: 'GameplayKit', role: 'IA por state machines e geração procedural' },
      { name: 'Metal', role: 'Shaders customizados e renderização GPU' },
      { name: 'AVFoundation', role: 'Sistema de áudio dinâmico' },
    ],
    developers: [
      { name: 'Fernando Sulzbach', role: 'Game Developer', avatar: null },
    ],
    links: { github: '#', live: null, appStore: null },
    category: 'Game Development',
    year: '2023',
  },
  {
    slug: 'urbaneye',
    title: 'UrbanEye',
    subtitle: 'Reportar incidentes urbanos em tempo real.',
    description: 'Aplicativo iOS de reporte de incidentes urbanos com backend Node.js. Mapas interativos em tempo real e autenticação via Sign in with Apple.',
    longDescription: `UrbanEye é uma plataforma completa de reporte de incidentes urbanos que combina um frontend nativo iOS com um backend robusto em Node.js. O app permite que cidadãos reportem e acompanhem ocorrências em tempo real através de uma interface interativa baseada em MapKit.

As funcionalidades incluem autenticação segura via Sign in with Apple, mapeamento de incidentes por geolocalização em tempo real, upload de imagens como evidência, sistema de reações da comunidade e capacidades de filtragem administrativa.

O backend roda containerizado via Docker com PostgreSQL para gerenciamento escalável de dados. O projeto demonstra proficiência full-stack completa — do design de schema de banco de dados e arquitetura de API RESTful até interfaces SwiftUI polidas com animações suaves e feedback háptico.`,
    tags: ['SwiftUI', 'Node.js', 'Docker', 'MapKit'],
    image: '/UrbanEyeIcon.png',
    screenshots: [],
    videoUrl: null,
    technologies: [
      { name: 'SwiftUI', role: 'Interface nativa iOS com componentes declarativos' },
      { name: 'Node.js', role: 'Backend RESTful API com Express' },
      { name: 'Docker', role: 'Deploy containerizado e gerenciamento de ambiente' },
      { name: 'MapKit', role: 'Mapa interativo para visualização de incidentes' },
      { name: 'PostgreSQL', role: 'Banco relacional para incidentes, usuários e reações' },
      { name: 'Sign in with Apple', role: 'Fluxo de autenticação segura' },
    ],
    developers: [
      { name: 'Fernando Sulzbach', role: 'Full-Stack Developer', avatar: null },
    ],
    links: { github: '#', live: null, appStore: null },
    category: 'Full-Stack',
    year: '2025',
  },
  {
    slug: 'recapsule',
    title: 'Recapsule',
    subtitle: 'Cápsulas do tempo digitais.',
    description: 'Aplicativo de cápsulas do tempo digitais que permite criar, selar e compartilhar memórias para serem abertas no futuro.',
    longDescription: `Recapsule é um aplicativo iOS que reinventa o conceito de cápsula do tempo para a era digital. Os usuários podem criar cápsulas contendo fotos, vídeos, textos e áudios, selá-las com uma data de abertura futura e compartilhá-las com amigos e família.

A interface foi construída com SwiftUI, oferecendo animações elegantes para o processo de selagem e abertura das cápsulas, criando uma experiência emocional e memorável. Notificações locais lembram o usuário quando uma cápsula está pronta para ser aberta.

O app utiliza CloudKit para sincronização entre dispositivos e compartilhamento de cápsulas entre usuários, garantindo que as memórias estejam sempre seguras e acessíveis.`,
    tags: ['SwiftUI', 'CloudKit'],
    image: '/recapsuleicon  1.png',
    screenshots: [],
    videoUrl: null,
    technologies: [
      { name: 'SwiftUI', role: 'Interface declarativa com animações emotivas' },
      { name: 'CloudKit', role: 'Sincronização e compartilhamento de cápsulas' },
      { name: 'AVFoundation', role: 'Captura e reprodução de áudio e vídeo' },
      { name: 'UserNotifications', role: 'Notificações locais para abertura de cápsulas' },
    ],
    developers: [
      { name: 'Fernando Sulzbach', role: 'iOS Developer', avatar: null },
    ],
    links: { github: '#', live: null, appStore: null },
    category: 'Social',
    year: '2025',
  },
];
