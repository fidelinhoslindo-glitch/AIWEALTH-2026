// PRODUCTS, COURSE_DATA, and helpers

export const PRODUCTS = {
  RENDA_EXTRA: {
    id: 'ebook_ia_renda',
    name: 'E-book: Renda Extra com IA',
    description: 'Estratégias para gerar renda adicional usando ferramentas de IA em 2026.',
    price: 19.90,
    oldPrice: 197.90
  },
  LANCAMENTOS: {
    id: 'ebook_ia_lancamentos',
    name: 'E-book: IA para Lançamentos',
    description: 'Como automatizar seus lançamentos digitais usando inteligência artificial.',
    price: 19.90,
    oldPrice: 197.90
  },
  NEGOCIO_LOCAL: {
    id: 'ebook_ia_negocio_local',
    name: 'E-book: IA para Negócios Locais',
    description: 'Escalando empresas físicas com marketing e automação via IA.',
    price: 19.90,
    oldPrice: 197.90
  },
  AUTOMACAO: {
    id: 'ebook_ia_automacao',
    name: 'E-book: Automação Total',
    description: 'O guia definitivo para automatizar processos e produtividade com IA.',
    price: 19.90,
    oldPrice: 197.90
  },
  KIT_MASTER: {
    id: 'kit_master_ia',
    name: 'Kit Master Wealth 2026',
    description: 'Acesso completo aos 4 e-books + Bônus exclusivos de escala.',
    price: 27.10,
    oldPrice: 2497.00
  }
};

export const COURSE_DATA = {
  'ebook_ia_renda': {
    folder: 'renda extra com IA',
    logo: 'LOGO-RENDA-EXTRA-COM-IA.PNG',
    pdf: 'ebook_renda_extra_com_ia_v2.pdf',
    icon: '💰',
    totalTime: '2h 30min',
    modules: [
      { title: 'O Novo Cenário Digital', desc: 'Entenda como a IA está revolucionando as formas de gerar renda em 2026 e por que agora é o momento certo para começar.', duration: '15 min', content: 'A inteligência artificial não é mais ficção científica — ela está presente em cada aspecto do mercado digital. Empresas de todos os tamanhos estão adotando IA para automatizar processos, criar conteúdo e escalar operações.\n\nNeste módulo, você aprenderá:\n• O panorama atual do mercado de IA em 2026\n• As 5 maiores oportunidades de monetização\n• Como pessoas sem experiência técnica estão faturando com IA\n• O framework "AI-First" para pensar em negócios digitais\n\nA revolução já começou. Quem entender o poder da IA agora terá uma vantagem massiva nos próximos anos.' },
      { title: 'Ferramentas de IA Essenciais', desc: 'As melhores ferramentas de IA gratuitas e pagas para começar a gerar renda imediatamente.', duration: '20 min', content: 'Antes de monetizar, você precisa dominar as ferramentas certas. Existem centenas de opções, mas apenas algumas realmente entregam resultados.\n\n🔧 Ferramentas Essenciais:\n1. ChatGPT/Gemini — Geração de texto, análise e automação\n2. Midjourney/DALL-E — Criação de imagens e designs\n3. Runway ML — Edição e criação de vídeos com IA\n4. ElevenLabs — Geração de áudio e voiceover\n5. Make/Zapier — Automação de fluxos de trabalho\n\nDica de ouro: Comece com as versões gratuitas. Você pode gerar seus primeiros R$ 1.000 sem gastar nada em ferramentas.' },
      { title: 'Freelancing com IA', desc: 'Como usar IA para oferecer serviços de alto valor como freelancer e cobrar 3x mais que a concorrência.', duration: '25 min', content: 'O freelancing com IA é a forma mais rápida de gerar renda extra. Você não precisa ser designer, programador ou copywriter — a IA faz o trabalho pesado.\n\nServiços de alta demanda:\n• Criação de conteúdo para redes sociais (R$ 500-3.000/mês por cliente)\n• Design de logos e materiais gráficos com IA (R$ 200-800/projeto)\n• Copywriting assistido por IA (R$ 1.000-5.000/projeto)\n• Edição de vídeos com IA (R$ 300-1.500/vídeo)\n• Chatbots e automações (R$ 1.000-10.000/projeto)\n\nEstratégia de precificação: Cobre pelo resultado, não pelo tempo. Se a IA te ajuda a entregar em 2 horas o que antes levava 2 dias, seu lucro/hora dispara.' },
      { title: 'Produtos Digitais com IA', desc: 'Crie e-books, cursos e templates usando IA e venda no piloto automático.', duration: '30 min', content: 'Produtos digitais são a chave para renda passiva. Com IA, você pode criar um produto digital completo em questão de horas.\n\nTipos de produtos que vendem:\n📚 E-books nicho (receitas, fitness, finanças) — R$ 17-97\n📋 Templates e planilhas inteligentes — R$ 27-197\n🎓 Mini-cursos em vídeo — R$ 97-497\n🎨 Packs de design (posts, stories, apresentações) — R$ 37-147\n\nO segredo: Valide antes de criar. Use IA para gerar uma landing page de teste, rode tráfego por R$ 50, e só produza o produto completo quando tiver pelo menos 10 vendas. Isso elimina 90% do risco.' },
      { title: 'Escala e Automação', desc: 'Automatize seus processos e transforme renda extra em renda principal com sistemas que trabalham para você.', duration: '20 min', content: 'Depois de validar seu modelo, é hora de escalar. A grande vantagem da IA é que ela permite crescer sem aumentar proporcionalmente o esforço.\n\nFramework de Escala:\n1. Automatize a entrega — Use plataformas como Hotmart, Kiwify\n2. Automatize o marketing — Funis de email com IA\n3. Automatize o atendimento — Chatbots inteligentes\n4. Automatize a criação — Conteúdo recorrente com IA\n\nMeta realista:\n• Mês 1-2: R$ 500-2.000/mês (validação)\n• Mês 3-4: R$ 2.000-5.000/mês (otimização)\n• Mês 5-6: R$ 5.000-15.000/mês (escala)\n• Mês 7+: R$ 15.000+/mês (automação total)' }
    ]
  },
  'ebook_ia_lancamentos': {
    folder: 'viver de lançamentos',
    logo: 'LOGO-VIVER DE LANÇAMENTOS.png',
    pdf: 'ebook_viver_de_lancamentos.pdf',
    icon: '🚀',
    totalTime: '2h 45min',
    modules: [
      { title: 'Anatomia de um Lançamento', desc: 'Entenda a estrutura completa de um lançamento digital que fatura 6 dígitos.', duration: '20 min', content: 'Um lançamento digital bem estruturado segue uma sequência precisa de eventos que criam desejo, urgência e conversão máxima.\n\nAs 4 Fases de um Lançamento:\n1. PPL (Pré-Pré-Lançamento) — Captação de leads e aquecimento\n2. PL (Pré-Lançamento) — CPLs (Conteúdo de Pré-Lançamento) que educam e criam desejo\n3. L (Lançamento) — Abertura de carrinho com urgência real\n4. PV (Pós-Venda) — Upsell, cross-sell e fidelização\n\nCom IA, cada uma dessas fases pode ser automatizada e otimizada para resultados máximos.' },
      { title: 'IA nos Conteúdos de Pré-Lançamento', desc: 'Use IA para criar CPLs magnéticos que geram antecipação e desejo massivo.', duration: '25 min', content: 'Os CPLs são o coração do seu lançamento. Com IA, você pode criar scripts, roteiros e conteúdos que convertem em uma fração do tempo.\n\nCPL 1 — A Oportunidade:\n• Use IA para pesquisar dores e desejos do público\n• Gere scripts de vídeo que prendem a atenção\n• Crie carrosséis e posts de engajamento\n\nCPL 2 — A Transformação:\n• IA gera estudos de caso e depoimentos formatados\n• Crie apresentações visuais impactantes\n• Automatize sequências de email de nurturing\n\nCPL 3 — A Revelação:\n• Scripts de abertura de carrinho com gatilhos mentais\n• IA cria urgência real com dados e escassez\n• Templates de contagem regressiva e lives preparadas' },
      { title: 'Funis de Lançamento com IA', desc: 'Monte funis automatizados que captam leads, nutrem e convertem em vendas.', duration: '30 min', content: 'Um funil de lançamento bem feito é uma máquina de vendas. Com IA, você monta em dias o que antes levava semanas.\n\nEstrutura do Funil:\n📧 Página de Captura → Email de Boas-Vindas → Sequência de CPLs → Página de Vendas → Checkout → Página de Obrigado → Upsell\n\nComo a IA acelera cada etapa:\n• Landing pages: IA escreve copy persuasiva e sugere layouts\n• Emails: Sequências completas geradas em minutos\n• Páginas de vendas: Headlines, bullets, CTAs otimizados\n• Anúncios: Variações de criativos para testes A/B\n\nTecnologia recomendada: Use plataformas como Hotmart, Kiwify ou Eduzz para o checkout, e Make/Zapier para automações.' },
      { title: 'Tráfego e Captação de Leads', desc: 'Estratégias de tráfego pago e orgânico para lotar sua lista de espera.', duration: '25 min', content: 'Sem leads, não existe lançamento. A IA transforma a captação de leads num processo previsível e escalável.\n\nTráfego Pago:\n• Facebook/Instagram Ads: IA cria dezenas de variações de criativos\n• Google Ads: Pesquisa de palavras-chave automatizada\n• YouTube Ads: Scripts de vídeo gerados por IA\n• Budget ideal: R$ 1.000-5.000 para o primeiro lançamento\n\nTráfego Orgânico:\n• Reels/TikToks: IA gera roteiros virais em segundos\n• Posts carrossel: Conteúdo educativo que posiciona autoridade\n• SEO: Artigos de blog otimizados por IA\n\nMeta: 1.000-5.000 leads para um lançamento semente, 10.000+ para lançamentos maiores.' },
      { title: 'Semana de Lançamento', desc: 'O passo a passo da semana mais importante: abertura e fechamento do carrinho.', duration: '25 min', content: 'A semana de lançamento é onde tudo acontece. Cada hora conta.\n\nCronograma Day-by-Day:\n📅 Dia 1 — Abertura: Live de abertura + emails de abertura + remarketing ativo\n📅 Dia 2-3 — Sustentação: Depoimentos, FAQ, objeções, lives tirando dúvidas\n📅 Dia 4-5 — Pressão: Bônus por tempo limitado, últimas vagas, contagem regressiva\n📅 Dia 6 — Encerramento: Live de fechamento, últimas horas, remarketing agressivo\n📅 Dia 7 — Pós: Análise de dados, atendimento aos compradores, planejamento do próximo\n\nCom IA na semana de lançamento:\n• Chatbot responde dúvidas 24h\n• IA gera emails de urgência em tempo real\n• Análise de métricas automatizada\n• Criativos de remarketing gerados na hora' }
    ]
  },
  'ebook_ia_negocio_local': {
    folder: 'escalar negocio local',
    logo: 'escalar negocio local logo.png',
    pdf: 'ebook_escalar_negocio_local.pdf',
    icon: '🏪',
    totalTime: '2h 15min',
    modules: [
      { title: 'Diagnóstico Digital do Negócio', desc: 'Como avaliar a presença digital atual do negócio e identificar oportunidades imediatas.', duration: '15 min', content: 'Antes de escalar, você precisa saber onde está. 73% dos negócios locais estão perdendo clientes por não terem presença digital adequada.\n\nChecklist de Diagnóstico:\n✅ Google Meu Negócio — Perfil otimizado com fotos, horários e avaliações?\n✅ Redes Sociais — Postando com frequência e engajando a comunidade?\n✅ Site/Landing Page — Tem uma página que converte visitantes em clientes?\n✅ WhatsApp Business — Catálogo, respostas automáticas, etiquetas?\n✅ Avaliações — Google, iFood, TripAdvisor com nota acima de 4.5?\n\nUse IA para: Analisar concorrentes locais, identificar gaps e criar um plano de ação em 30 minutos.' },
      { title: 'Marketing Local com IA', desc: 'Crie campanhas de marketing local hipersegmentadas usando inteligência artificial.', duration: '25 min', content: 'Marketing local com IA é o superpoder que 99% dos negócios da sua cidade ainda não descobriram.\n\nEstratégias Comprovadas:\n📍 Google Ads Local: Anúncios que aparecem quando alguém pesquisa "perto de mim"\n📱 Meta Ads por raio: Anúncios no Instagram/Facebook para pessoas em 5km de distância\n📸 Conteúdo Local: IA gera posts sobre eventos, feriados e tendências locais\n🗺️ SEO Local: IA otimiza seu perfil do Google para aparecer no Map Pack\n\nResultados típicos:\n• Restaurante: +40% de reservas em 60 dias\n• Salão de beleza: +25 clientes novos/mês\n• Academia: +50 matrículas em período de campanha\n• Loja de varejo: +35% de fluxo de pessoas' },
      { title: 'Automação de Atendimento', desc: 'Configure chatbots e automações que atendem clientes 24/7 sem você precisar estar presente.', duration: '20 min', content: 'Clientes não esperam. Se sua resposta demora mais de 5 minutos, você perde 50% das oportunidades.\n\nComo automatizar com IA:\n🤖 WhatsApp Bot:\n• Resposta automática de boas-vindas\n• Cardápio/catálogo interativo\n• Agendamento automático\n• FAQ inteligente que aprende com as perguntas\n\n📧 Email/SMS Automático:\n• Confirmação de agendamento\n• Lembrete 24h antes\n• Pós-atendimento (avaliação)\n• Promoções personalizadas\n\nFerramentas recomendadas: Typebot (gratuito), ManyChat, Botpress, ou integre o ChatGPT API no seu WhatsApp Business.' },
      { title: 'Gestão Inteligente com IA', desc: 'Use IA para otimizar estoque, precificação, escalas e decisões do negócio.', duration: '20 min', content: 'IA não é só marketing — ela transforma toda a operação do seu negócio.\n\nAplicações práticas:\n📊 Previsão de Demanda:\n• IA analisa dados históricos e prevê dias de pico\n• Ajuste de estoque automático baseado em tendências\n• Redução de desperdício em até 30%\n\n💰 Precificação Dinâmica:\n• Ajuste preços baseado em demanda e concorrência\n• Promoções inteligentes nos horários certos\n• Maximização de ticket médio com bundles\n\n👥 Gestão de Equipe:\n• Escalas otimizadas por IA\n• Treinamento personalizado com IA\n• KPIs automatizados e dashboards em tempo real' },
      { title: 'Escalando para Múltiplas Unidades', desc: 'O framework para replicar o sucesso do negócio local em novas unidades com processos e IA.', duration: '15 min', content: 'Uma vez que seu negócio é lucrativo e automatizado, está na hora de escalar.\n\nFramework de Escala Local:\n1️⃣ Documentação: IA cria SOPs (Procedimentos Operacionais) de cada processo\n2️⃣ Treinamento: Manuais e vídeos de treinamento gerados por IA\n3️⃣ Marketing Replicável: Templates prontos para cada nova unidade\n4️⃣ Dashboard Central: Monitor todas as unidades em um painel\n5️⃣ Franqueamento: Modelo de franquia documentado e automatizado\n\nCaso de sucesso: Uma clínica de estética usou esse framework para sair de 1 para 4 unidades em 18 meses, mantendo a mesma equipe administrativa central.' }
    ]
  },
  'ebook_ia_automacao': {
    folder: 'Automação total',
    logo: 'automação total.png',
    pdf: 'ebook_automacao_total.pdf',
    icon: '⚙️',
    totalTime: '3h 00min',
    modules: [
      { title: 'Fundamentos da Automação', desc: 'Entenda os princípios da automação inteligente e identifique processos automatizáveis na sua rotina.', duration: '20 min', content: 'Automação não é sobre substituir pessoas — é sobre eliminar trabalho repetitivo e focar no que realmente importa.\n\nRegra 80/20 da Automação:\n• 80% do seu tempo é gasto em tarefas repetitivas\n• 20% é trabalho criativo e estratégico\n• IA inverte essa proporção: 80% estratégia, 20% execução\n\nO que automatizar primeiro (Quick Wins):\n✅ Respostas de email padronizadas\n✅ Agendamentos e lembretes\n✅ Geração de relatórios\n✅ Publicação de conteúdo em redes sociais\n✅ Coleta e organização de dados\n\nPrincípio fundamental: Se você faz algo mais de 3 vezes por semana e segue um padrão, pode ser automatizado.' },
      { title: 'No-Code Automation', desc: 'Crie automações poderosas sem programar usando Make, Zapier e N8N.', duration: '30 min', content: 'Você não precisa ser programador para automatizar. Plataformas no-code democratizaram o poder da automação.\n\n🔧 As 3 Plataformas Essenciais:\n\n1. Make (Integromat)\n• Melhor custo-benefício\n• Interface visual com drag-and-drop\n• 1.000+ integrações\n• Gratuito até 1.000 operações/mês\n\n2. Zapier\n• Mais fácil de usar\n• 5.000+ integrações\n• Automações chamadas "Zaps"\n• Gratuito até 100 tarefas/mês\n\n3. N8N (Self-hosted)\n• Open source e gratuito\n• Controle total dos dados\n• Ideal para quem quer personalização máxima\n\nPrimeira automação: Conecte seu formulário de contato → CRM → Email de boas-vindas → Notificação no Slack. Leva 15 minutos.' },
      { title: 'IA Generativa na Produtividade', desc: 'Use ChatGPT, Gemini e Claude para automatizar criação de conteúdo, análise e decisões.', duration: '25 min', content: 'A IA generativa é a camada de inteligência que faz suas automações pensarem.\n\nCasos de uso práticos:\n\n📝 Conteúdo:\n• Gere 30 posts para o mês inteiro em 1 hora\n• Crie roteiros de vídeo baseados em tendências\n• Artigos de blog otimizados para SEO automaticamente\n\n📊 Análise:\n• Cole uma planilha e peça insights em linguagem natural\n• Análise de sentimento de avaliações de clientes\n• Resumo automático de reuniões gravadas\n\n💡 Decisão:\n• Prós e contras de decisões de negócio\n• Análise de mercado e concorrência\n• Planejamento estratégico assistido\n\nDica de ouro: Crie prompts "mestres" que você reutiliza. Um bom prompt usado 100 vezes vale mais que 100 prompts mediocres.' },
      { title: 'Automação de Marketing Digital', desc: 'Configure funis de marketing que rodam no piloto automático com IA.', duration: '30 min', content: 'Marketing no piloto automático é o santo graal do empreendedor digital.\n\nFunil Automatizado Completo:\n\n1️⃣ Captação (Automática):\n• IA cria anúncios e testa variações\n• Landing pages com copy gerada por IA\n• Lead magnets criados automaticamente\n\n2️⃣ Nutrição (Automática):\n• Sequência de emails personalizados por IA\n• Conteúdo adaptado ao comportamento do lead\n• Score de leads automático\n\n3️⃣ Conversão (Automática):\n• Ofertas personalizadas no momento certo\n• Checkout otimizado com order bumps\n• Follow-up automático para carrinho abandonado\n\n4️⃣ Pós-Venda (Automática):\n• Onboarding automatizado\n• Upsell inteligente baseado em compras anteriores\n• Solicitação de avaliação no momento ideal' },
      { title: 'IA para Operações e Finanças', desc: 'Automatize processos financeiros, relatórios e operações do dia a dia.', duration: '20 min', content: 'Dinheiro adora eficiência. Automatize suas finanças e operações para ter controle total.\n\nAutomações Financeiras:\n💵 Fluxo de Caixa: Integre seu banco com planilhas que se atualizam sozinhas\n📋 Notas Fiscais: Emissão automática após cada venda\n📊 Relatórios: Dashboards que se atualizam em tempo real\n🏦 Cobranças: Faturamento recorrente automatizado\n\nAutomações Operacionais:\n📦 Estoque: Alertas automáticos de reposição\n📅 Agenda: Sincronização automática de calendários\n📞 Atendimento: Chatbot com IA para primeira triagem\n📈 KPIs: Painel de métricas atualizado automaticamente\n\nROI típico: Empresas que implementam automação completa economizam em média 15-20 horas por semana em trabalho manual.' },
      { title: 'Arquitetura de Sistemas', desc: 'Monte uma infraestrutura completa de automação que escala junto com seu negócio.', duration: '15 min', content: 'Um sistema bem arquitetado é a diferença entre caos e escala.\n\nArquitetura Recomendada:\n🏗️ Camada 1 — Dados: CRM central (HubSpot, Pipedrive)\n🏗️ Camada 2 — Automação: Make/N8N conectando tudo\n🏗️ Camada 3 — IA: GPT API para decisões inteligentes\n🏗️ Camada 4 — Interface: Dashboards e notificações\n\nOrdem de implementação:\n1. Comece pelo CRM (organizar dados)\n2. Conecte suas ferramentas existentes\n3. Adicione automações uma por vez\n4. Integre IA nos gargalos\n5. Monitore e otimize\n\nLembre-se: O melhor sistema é o que você realmente vai usar. Comece simples, automatize gradualmente.' }
    ]
  },
  'kit_master_ia': {
    folder: 'kit 4',
    logo: 'LOGO-KIT-4.png',
    pdf: 'ebooks_4_produtos_atualizados.zip',
    icon: '👑',
    totalTime: 'Acesso Total',
    modules: [
      { title: 'Visão Geral do Kit Master', desc: 'Introdução ao Kit Master Wealth 2026: o ecossistema completo de IA para lucrar.', duration: '10 min', content: 'Parabéns! Você tem acesso ao Kit Master Wealth 2026 — o pacote mais completo do mercado.\n\nO que está incluído:\n📚 4 E-books Premium:\n• Renda Extra com IA\n• IA para Lançamentos\n• IA para Negócios Locais\n• Automação Total\n\n🎁 Bônus Exclusivos:\n• Templates de prompts profissionais\n• Planilha de planejamento 2026\n• Acesso à comunidade privada\n• Atualizações vitalícias\n\nRecomendação de estudo: Comece pelo e-book que mais se conecta com seu perfil e depois explore os demais para ter uma visão 360° de como usar IA para lucrar.' },
      { title: 'Roadmap de Implementação', desc: 'O caminho passo a passo para implementar tudo que você aprendeu nos 4 e-books.', duration: '15 min', content: 'Conhecimento sem ação é desperdício. Use este roadmap para transformar teoria em resultados.\n\n🗺️ Semana 1-2: Fundação\n• Escolha seu modelo de negócio principal\n• Configure ferramentas essenciais (GPT, Make, Canva)\n• Crie seu primeiro produto digital ou serviço\n\n🗺️ Semana 3-4: Validação\n• Lance sua oferta mínima viável\n• Teste preços e posicionamento\n• Consiga seus primeiros 10 clientes/vendas\n\n🗺️ Mês 2-3: Otimização\n• Analise dados e otimize conversão\n• Automatize o que funciona\n• Escale tráfego gradualmente\n\n🗺️ Mês 4+: Escala\n• Implemente automação completa\n• Lance produtos complementares\n• Construa equipe e delegue\n\nMeta: Primeiro real faturado em 7 dias. Primeiro R$ 1.000 em 30 dias.' },
      { title: 'Templates e Recursos', desc: 'Acesse todos os templates, planilhas e recursos exclusivos do Kit Master.', duration: '5 min', content: 'Seus recursos exclusivos do Kit Master:\n\n📋 Templates de Prompts:\n• 50 prompts para criação de conteúdo\n• 30 prompts para copywriting\n• 20 prompts para análise de dados\n• 15 prompts para planejamento estratégico\n\n📊 Planilhas:\n• Calculadora de ROI para automações\n• Planejamento financeiro 2026\n• Tracker de projetos e tarefas\n• Dashboard de KPIs\n\n📥 Para acessar todos os arquivos, baixe o Kit Completo usando o botão de download abaixo. O zip contém todos os 4 e-books atualizados mais os materiais bônus.' }
    ]
  }
};

// Helper para buscar produto por chave
export const getProductKeyById = (id) => Object.keys(PRODUCTS).find(key => PRODUCTS[key].id === id);
export const getProductById = (id) => { const key = getProductKeyById(id); return key ? PRODUCTS[key] : null; };
