import type { Certification } from "@/content/types";

const certification: Certification = {
  slug: "anthropic-claude-certified-associate",
  providerId: "anthropic",
  code: "CCA",
  name: "Claude Certified Associate",
  level: "Associate",
  tagline:
    "Maitrisez les modèles Claude et l'API Anthropic pour valider une certification associate exigeante et concrete.",
  description:
    "Cette preparation à la certification Claude Certified Associate (CCA) d'Anthropic couvre les fondamentaux des modèles Claude, l'ingénierie de prompt, l'intégration technique avec l'API Anthropic, l'IA responsable et les bonnes pratiques métier autour des agents et du RAG. Elle s'adresse aux développeurs, product managers et consultants qui utilisent ou deploient Claude en entreprise et veulent structurer leur revision autour de cas concrets plutôt que de généralités. Ce contenu est une preparation independante realisee par SkillCert AI, non affiliee ni approuvee par Anthropic : les modalites d'examen (prix, duree, nombre de questions, score de passage) sont indicatives et doivent etre vérifiées sur le site officiel avant toute inscription.",
  officialUrl: "https://www.anthropic.com/learn/certifications",
  format: {
    questionCount: 60,
    durationMinutes: 90,
    passingScore: "75% (indicatif)",
    price: "Indicatif, à vérifier sur le site officiel Anthropic",
    deliveryMode: "Examen en ligne surveille à distance",
    isOfficialCertification: true,
  },
  domains: [
    {
      id: "fondamentaux-modeles",
      title: "Fondamentaux des modèles Claude et positionnement produit",
      weightPercent: 18,
      summary:
        "Connaître les familles de modèles Claude, leurs compromis vitesse/coût/intelligence, la fenêtre de contexte et les canaux d'acces disponibles pour choisir le bon modèle selon le cas d'usage.",
    },
    {
      id: "ingenierie-prompt",
      title: "Ingénierie de prompt",
      weightPercent: 24,
      summary:
        "Structurer des prompts fiables avec system prompts, balises XML, exemples few-shot et raisonnement guide (chain-of-thought) pour obtenir des réponses précises et reproductibles.",
    },
    {
      id: "integration-api",
      title: "Intégration technique avec l'API Anthropic",
      weightPercent: 28,
      summary:
        "Utiliser la Messages API au quotidien : streaming, tool use, vision, gestion des tokens et optimisation des coûts dans une application reelle.",
    },
    {
      id: "ia-responsable",
      title: "IA responsable et politique d'usage",
      weightPercent: 16,
      summary:
        "Comprendre le Constitutional AI, le red teaming, la politique d'usage d'Anthropic et les bonnes pratiques pour limiter les risques de sécurité et d'hallucination.",
    },
    {
      id: "cas-usage-metier",
      title: "Cas d'usage et bonnes pratiques métier",
      weightPercent: 14,
      summary:
        "Savoir quand construire un simple appel, un pipeline RAG ou un agent complet, et comment évaluer la qualité des réponses avant une mise en production.",
    },
  ],
  modules: [
    {
      slug: "panorama-modeles-claude",
      domainId: "fondamentaux-modeles",
      title: "Panorama des modèles Claude et positionnement produit",
      readMinutes: 9,
      summary:
        "Ce module présente les familles de modèles Claude, leurs compromis de performance, la fenêtre de contexte, les capacités multimodales et les différents canaux d'acces à la plateforme Anthropic.",
      keyPoints: [
        "Claude se decline en plusieurs familles de modèles offrant des compromis différents entre intelligence, vitesse et coût.",
        "La fenêtre de contexte determine le volume de texte que le modèle peut prendre en compte dans une seule requête.",
        "Claude peut analyser des images et, sur certaines configurations, interagir avec une interface graphique via le computer use.",
        "L'acces à Claude passe par claude.ai, Claude Code, l'API Anthropic directe, ou des plateformes cloud partenaires comme Amazon Bedrock, Google Cloud Vertex AI ou Microsoft Foundry.",
        "Les connaissances du modèle sont figées à une date de coupure d'entrainement sauf si des outils externes (recherche web, documents fournis) sont utilises.",
      ],
      sections: [
        {
          heading: "Les familles de modèles Claude",
          body: "La gamme Claude d'Anthropic se structure autour de plusieurs familles de modèles, historiquement nommees Opus, Sonnet et Haiku, chacune repondant à un profil d'usage différent. Les modèles de la famille Opus visent la capacité de raisonnement la plus élevée : ils sont adaptés aux tâches complexes, au raisonnement multi-étapes, à l'analyse approfondie de documents ou au pilotage d'agents autonomes sur des problèmes ouverts. Leur coût par token est plus élevé et leur latence plus importante que les autres familles.\n\nLes modèles de la famille Sonnet offrent un compromis equilibre entre intelligence, vitesse et coût. Ils conviennent à la majorité des usages professionnels : assistants conversationnels, génération de contenu, analyse de code, support client automatise. C'est souvent le point de depart recommandé avant d'évaluer si un modèle plus capable ou plus economique est nécessaire.\n\nLes modèles de la famille Haiku privilegient la vitesse et le coût le plus bas. Ils sont adaptés aux tâches simples et répétitives à fort volume : classification, extraction d'information courte, moderation de contenu, routage de requêtes. Pour l'examen, il faut retenir que le choix du modèle n'est pas une question de qualité absolue mais d'adequation entre la complexité de la tâche, le budget disponible et les contraintes de latence.",
        },
        {
          heading: "Fenêtre de contexte et capacités multimodales",
          body: "La fenêtre de contexte désigne le nombre maximal de tokens, unites de texte utilisées par le modèle, qu'une requête peut contenir en cumulant les instructions système, l'historique de conversation et les documents fournis. Les modèles Claude recents proposent des fenêtres de contexte très larges, permettant de faire tenir dans une seule requête un document long, une base de code entiere ou un historique de conversation étendu, là où des generations anterieures de modèles de langage nécessitaient de decouper le contenu en petits morceaux.\n\nAu-dela du texte, Claude est multimodal en entrée : il peut analyser des images fournies en base64 ou via une URL, ce qui permet des cas d'usage comme la lecture de graphiques, l'analyse de captures d'ecran ou la description de photos. Certaines configurations avancees permettent également le computer use, ou Claude observe des captures d'ecran successives d'une interface et emet des actions (clic, saisie clavier) pour automatiser une tâche sur un ordinateur, un cas d'usage utile pour l'automatisation de tests ou de processus métier repetitifs.",
        },
        {
          heading: "Ou et comment acceder à Claude",
          body: "Un même modèle Claude peut etre consomme par plusieurs canaux distincts. L'interface claude.ai s'adresse aux utilisateurs finaux pour un usage conversationnel direct. Claude Code est un outil en ligne de commande destine aux développeurs pour assister l'ecriture et la maintenance de code directement dans un terminal. L'API Anthropic, parfois appelée Claude Developer Platform, permet d'intégrer Claude de manière programmatique dans une application via des appels HTTP structures autour de la Messages API.\n\nPour les entreprises déjà engagees aupres d'un fournisseur cloud, Claude est également disponible via des plateformes partenaires : Amazon Bedrock, Google Cloud Vertex AI et Microsoft Foundry. Ces integrations permettent de beneficier de la facturation, de la gouvernance et des outils de sécurité déjà en place chez ce fournisseur cloud, tout en utilisant les memes modèles Claude. Un candidat à la certification doit savoir identifier quel canal convient à quel contexte : prototypage rapide via claude.ai, intégration produit via l'API directe, ou déploiement dans un environnement cloud regule via un partenaire.",
        },
        {
          heading: "Cas d'usage typiques et limites à connaître",
          body: "Claude est utilise en entreprise pour l'assistance à la redaction, le support client, la synthèse de documents, l'analyse de données non structurees, la génération et la revue de code, ainsi que la construction d'agents capables d'exécuter des tâches en plusieurs étapes. Ces usages partagent un point commun : ils tirent parti de la capacité du modèle à comprendre du langage naturel et à produire une sortie structuree ou conversationnelle.\n\nIl est tout aussi important de connaître les limites du modèle. Les connaissances de Claude sont figées à une date de coupure d'entrainement : sans acces à un outil de recherche web ou à des documents fournis en contexte, le modèle ne peut pas connaître des événements survenus apres cette date. Comme tout grand modèle de langage, Claude peut produire des hallucinations, c'est-à-dire des affirmations formulees avec assurance mais factuellement incorrectes, ce qui impose une vigilance particulière sur les cas d'usage à fort enjeu. Enfin, le coût d'utilisation croit avec le volume de tokens traites, ce qui rend le choix du modèle et l'optimisation des prompts directement liés à la viabilité economique d'un projet.",
        },
      ],
    },
    {
      slug: "techniques-ingenierie-prompt",
      domainId: "ingenierie-prompt",
      title: "Techniques d'ingénierie de prompt pour Claude",
      readMinutes: 10,
      summary:
        "Ce module détaillé les techniques de prompting qui améliorent la fiabilité des réponses de Claude : system prompts, balises XML, exemples few-shot, chain-of-thought et bonnes pratiques de structuration.",
      keyPoints: [
        "Le system prompt définit le rôle, le ton et les contraintes durables de l'assistant pour toute la conversation.",
        "Les balises XML structurent clairement les différentes parties d'un prompt (instructions, documents, exemples) et améliorent la fiabilité du parsing par le modèle.",
        "Les exemples few-shot améliorent la cohérence du format de sortie plus efficacement qu'une longue description textuelle.",
        "Le chain-of-thought, demander au modèle de raisonner étape par étape, améliore la qualité sur les tâches de raisonnement complexe.",
        "Placer le contenu stable avant le contenu variable dans un prompt favorise la réutilisation du cache et réduit les coûts.",
      ],
      sections: [
        {
          heading: "Le rôle du system prompt",
          body: "Dans la Messages API, le system prompt est un champ distinct des messages de conversation. Il sert à définir des instructions durables : le rôle que doit jouer Claude, le ton attendu, le format de sortie souhaite, les contraintes métier à respecter, ou encore les limites de ce que l'assistant doit ou ne doit pas faire. Contrairement aux messages utilisateur qui varient à chaque tour de conversation, le system prompt reste généralement stable sur l'ensemble d'une session, ce qui en fait un bon candidat pour la mise en cache de prompt.\n\nUn system prompt efficace est précis et actionnable plutôt que vague. Plutôt que d'écrire une consigne générale comme réponds de manière utile, un prompt bien conçu précise par exemple le public cible, la longueur attendue de la réponse, le registre de langue, et les cas ou l'assistant doit refuser de répondre ou demander une clarification. Cette précision réduit la variabilité des réponses et facilite les tests de non-régression sur un produit en production.",
        },
        {
          heading: "Structurer un prompt avec des balises XML",
          body: "Claude à été entraîné à bien reconnaître les structures balisées de type XML dans un prompt. Utiliser des balises comme <document>, <instructions>, <exemple> ou <contexte> permet de séparer clairement les différentes composantes d'une requête complexe : le contenu source à traiter, les instructions à suivre, et les exemples de référence. Cette structuration réduit les ambiguites, notamment lorsque le prompt mélange plusieurs types de contenu, par exemple un document long suivi d'une question précise à son sujet.\n\nCette pratique est particulierement utile pour les prompts générés automatiquement par une application, ou le contenu variable (une question utilisateur, un document téléversé) doit etre clairement isole des instructions fixes pour eviter toute confusion, voire toute tentative d'injection de prompt ou l'utilisateur chercherait à faire passer du contenu comme une instruction système.",
        },
        {
          heading: "Exemples few-shot et prompting zero-shot",
          body: "Le zero-shot prompting consiste à demander une réponse sans fournir d'exemple préalable, en s'appuyant uniquement sur des instructions textuelles. Cette approche fonctionne bien pour des tâches simples ou generiques. Pour des tâches ou le format de sortie doit etre précis et constant, comme extraire des champs structures à partir d'un texte libre, le few-shot prompting, qui consiste à fournir deux ou trois exemples représentatifs d'entrée et de sortie attendue, améliore généralement la fiabilité plus efficacement qu'une description textuelle du format, aussi detaillee soit-elle.\n\nLe choix des exemples compte autant que leur nombre : des exemples variés couvrant les cas limites typiques (valeurs manquantes, formats ambigus) donnent au modèle une meilleure idée de la marge de manoeuvre attendue qu'une série d'exemples trop similaires entre eux.",
        },
        {
          heading: "Raisonnement guide avec le chain-of-thought",
          body: "Pour les tâches qui demandent plusieurs étapes de raisonnement, comme un calcul, une analyse logique ou une décision impliquant plusieurs criteres, demander explicitement à Claude de raisonner étape par étape avant de donner sa réponse finale améliore généralement la justesse du résultat. Cette technique, appelée chain-of-thought, permet au modèle de décomposer le problème plutôt que de sauter directement à une conclusion.\n\nSur les modèles Claude recents, un mécanisme de raisonnement étendu peut également etre active au niveau de la requête API pour laisser le modèle deliberer davantage avant de répondre, ce qui est utile sur des problèmes difficiles mais augmente la consommation de tokens et donc le coût. Un bon réflexe d'ingénierie de prompt consiste à réserver ce raisonnement approfondi aux tâches qui en ont reellement besoin plutôt que de l'appliquer systématiquement.",
        },
        {
          heading: "Stabilite du prompt et bonnes pratiques générales",
          body: "Un prompt bien conçu séparé le contenu stable, comme le system prompt et la description des outils disponibles, du contenu variable, comme la question specifique posée par l'utilisateur à cet instant. Cette organisation n'est pas seulement une question de lisibilite : elle conditionne directement l'efficacite du prompt caching côté API, puisque le cache fonctionne par correspondance de préfixe et qu'un seul octet différent en début de prompt invalide tout ce qui suit.\n\nEnfin, il est recommandé d'iterer sur les prompts de manière mesurée, en comparant les réponses obtenues sur un petit jeu de cas représentatifs plutôt qu'en jugeant sur un seul exemple, et de documenter les versions de prompt utilisées en production comme on documenterait une dépendance logicielle.",
        },
      ],
    },
    {
      slug: "integration-messages-api",
      domainId: "integration-api",
      title: "Intégrer la Messages API : streaming, tool use, vision et coûts",
      readMinutes: 12,
      summary:
        "Ce module couvre l'utilisation pratique de la Messages API d'Anthropic : structure des requêtes, streaming, appel d'outils, entrée d'images, et gestion des tokens et des coûts.",
      keyPoints: [
        "Toute interaction avec Claude via l'API passe par un point d'entrée unique, la Messages API, qui accepte des messages avec un rôle utilisateur ou assistant.",
        "Le champ stop_reason de la réponse indique pourquoi le modèle s'est arrêté de générer, par exemple end_turn, max_tokens ou tool_use.",
        "Le tool use permet à Claude d'appeler des fonctions définies par le développeur en renvoyant un bloc structure que l'application doit exécuter puis retourner sous forme de résultat.",
        "Le mode streaming renvoie la réponse progressivement et evite les delais d'attente sur les réponses longues.",
        "Le prompt caching et la Batch API sont deux leviers directs pour réduire le coût d'utilisation de l'API à volume élevé.",
      ],
      sections: [
        {
          heading: "La Messages API en pratique",
          body: "L'ensemble des interactions programmatiques avec Claude passe par un point d'entrée unique, la Messages API. Une requête comprend au minimum un modèle cible, un nombre maximal de tokens de sortie et une liste de messages, chacun associé à un rôle, utilisateur ou assistant. La réponse renvoyée contient un ou plusieurs blocs de contenu, généralement du texte, mais potentiellement d'autres types de blocs selon les fonctionnalités activées, comme des blocs de raisonnement ou des appels d'outils.\n\nLa conversation est geree de manière sans état côté serveur : c'est à l'application d'envoyer à chaque nouvelle requête l'historique complet des messages pertinents pour que le modèle dispose du contexte nécessaire. Cette conception simple permet une grande flexibilité, par exemple pour resumer ou filtrer l'historique avant de le renvoyer, mais impose de gérer soi-même la persistance de la conversation.",
        },
        {
          heading: "Streaming pour les réponses longues",
          body: "Par defaut, une requête à l'API attend que la réponse complète soit generee avant de la renvoyer, ce qui peut prendre du temps pour des réponses longues et risque de déclencher des delais d'attente côté client ou côté infrastructure réseau. Le mode streaming résout ce problème en renvoyant la réponse progressivement, événement par événement, au fur et à mesure que le modèle genere du texte.\n\nLe streaming est recommandé des que la réponse attendue peut etre longue, ou pour toute interface utilisateur ou l'on souhaite afficher le texte au fur et à mesure qu'il est produit, comme dans un assistant conversationnel. Il est également utile pour observer en temps reel les appels d'outils demandes par le modèle dans une boucle agentique.",
        },
        {
          heading: "Tool use : donner des capacités à Claude",
          body: "Le tool use, aussi appele function calling, permet de decrire à Claude un ensemble d'outils disponibles, chacun avec un nom, une description et un schéma des paramètres attendus. Lorsque le modèle juge qu'un outil est nécessaire pour répondre à la demande, il retourne un bloc de type tool_use contenant le nom de l'outil et les paramètres à utiliser, et le champ stop_reason de la réponse prend la valeur tool_use.\n\nC'est alors à l'application d'exécuter reellement cet outil, par exemple interroger une base de données ou appeler une API externe, puis de renvoyer le résultat au modèle sous la forme d'un bloc tool_result dans un nouveau message utilisateur. Le modèle peut alors poursuivre la conversation en tenant compte de ce résultat, ou demander l'appel d'un autre outil. Cette boucle requête, execution, résultat, nouvelle requête constitue la base de la plupart des agents construits avec l'API Claude. Plusieurs appels d'outils peuvent etre demandes en parallele dans une seule réponse et doivent etre exécutés puis retournés ensemble.",
        },
        {
          heading: "Entrée d'images et contenu multimodal",
          body: "La Messages API accepte des blocs de contenu de type image en plus du texte, avec une source fournie soit en base64, soit sous forme d'URL publique. Ce mécanisme permet de construire des applications qui mélangent texte et image dans une même requête, par exemple pour demander à Claude de decrire une capture d'ecran, d'extraire des informations d'un graphique, ou de comparer plusieurs images entre elles.\n\nLe traitement d'une image consomme un nombre de tokens qui dépend de sa résolution, ce qui doit etre pris en compte dans l'estimation du coût d'une requête lorsque des images volumineuses sont envoyees régulièrement.",
        },
        {
          heading: "Gestion des tokens et optimisation des coûts",
          body: "Le coût d'une requête à l'API Claude dépend du nombre de tokens en entrée et en sortie, avec des tarifs généralement différents pour chaque sens et selon le modèle choisi. Un token represente une unite de texte, approximativement une portion de mot, et non un caractère ou un mot entier. Avant d'envoyer une requête coûteuse en volume, il est possible d'estimer le nombre de tokens d'un prompt via un point d'entrée dédié de comptage de tokens.\n\nDeux leviers principaux permettent de réduire les coûts à l'échelle. Le prompt caching permet de mettre en cache une partie stable et repetee du prompt, comme un system prompt long ou la description des outils, pour eviter de la refacturer integralement à chaque requête. La Batch API permet de soumettre un grand nombre de requêtes non urgentes pour un traitement asynchrone à coût réduit par rapport à des appels synchrones equivalents, un choix pertinent pour des tâches comme la classification en masse de documents qui n'exigent pas une réponse immediate.",
        },
      ],
    },
    {
      slug: "securite-ia-responsable",
      domainId: "ia-responsable",
      title: "Sécurité, Constitutional AI et politique d'usage responsable",
      readMinutes: 8,
      summary:
        "Ce module présente les principes de sécurité d'Anthropic : Constitutional AI, red teaming, politique d'usage, gestion des refus du modèle et bonnes pratiques face aux hallucinations.",
      keyPoints: [
        "Le Constitutional AI entraîné le modèle à respecter un ensemble explicite de principes plutôt que de dépendre uniquement d'un retour humain direct.",
        "Le red teaming consiste à tester de manière adversariale un modèle avant son déploiement pour identifier les facons dont il pourrait etre detourne.",
        "L'Usage Policy d'Anthropic définit les utilisations autorisées et interdites de l'API et s'applique à tout développeur intégrant Claude.",
        "Un refus du modèle, signalé par stop_reason à la valeur refusal, doit etre traite comme une information utile et non comme une erreur à contourner.",
        "Les hallucinations restent possibles sur tout grand modèle de langage et imposent une vérification humaine sur les cas d'usage à fort enjeu.",
      ],
      sections: [
        {
          heading: "Le principe du Constitutional AI",
          body: "Anthropic à développé une approche d'entrainement appelée Constitutional AI, ou le modèle apprend à évaluer et corriger ses propres réponses au regard d'un ensemble explicite de principes, une forme de constitution, plutôt que de reposer uniquement sur un volume massif de retours humains directs sur chaque réponse individuelle. L'idée est de rendre le comportement du modèle plus previsible et plus facile à faire évoluer, en explicitant les valeurs recherchées plutôt qu'en les laissant implicites dans des données d'entrainement.\n\nPour un candidat à la certification, l'element important à retenir n'est pas le detail technique de la methode, mais le fait qu'Anthropic met en avant une approche de sécurité intégrée des l'entrainement du modèle, plutôt que geree uniquement à posteriori via des filtres externes.",
        },
        {
          heading: "Red teaming et tests de robustesse",
          body: "Avant la mise à disposition d'un modèle, Anthropic et des equipes externes mènent des campagnes de red teaming : des tests adversariaux ou des experts cherchent volontairement à faire produire au modèle des sorties dangereuses, biaisées ou non conformes, afin d'identifier les faiblesses avant un déploiement à grande échelle. Ces tests couvrent des domaines variés, allant de la génération de contenu dangereux à la manipulation ou au contournement des instructions système par des utilisateurs malveillants.\n\nLes enseignements de ces campagnes alimentent les ajustements ultérieurs du modèle et des mécanismes de sécurité au niveau de la plateforme. Une entreprise qui déploie Claude dans un produit peut s'inspirer de la même logique en menant ses propres tests adversariaux sur son cas d'usage specifique avant une mise en production.",
        },
        {
          heading: "La politique d'usage d'Anthropic",
          body: "L'Usage Policy publiee par Anthropic définit les utilisations autorisées et explicitement interdites de ses modèles, qu'il s'agisse d'un usage via claude.ai ou via l'API. Elle couvre par exemple l'interdiction de générer du contenu visant à nuire à des personnes, de contourner des mesures de sécurité critiques, ou d'utiliser le modèle dans des contextes à haut risque sans supervision humaine appropriée, comme certaines decisions médicales ou juridiques automatisées.\n\nTout développeur intégrant l'API Claude dans une application est responsable du respect de cette politique pour son propre cas d'usage, y compris lorsque ce sont les utilisateurs finaux de l'application qui interagissent indirectement avec le modèle. Ignorer cette responsabilité expose non seulement à un risque de suspension d'acces à l'API, mais aussi à un risque réputationnel et légal pour l'entreprise déployant l'application.",
        },
        {
          heading: "Refus du modèle et gestion des hallucinations",
          body: "Lorsque Claude estime qu'une demande viole ses principes de sécurité, la réponse peut se terminer avec un stop_reason à la valeur refusal, accompagné d'informations structurees permettant de comprendre la categorie du refus. Une application bien conçue vérifié ce champ avant de traiter la réponse comme une sortie normale, et adapte le message affiché à l'utilisateur final plutôt que de considerer ce refus comme une erreur technique à retenter en boucle.\n\nIndependamment des refus explicites, tout grand modèle de langage, y compris Claude, peut produire des hallucinations : des affirmations énoncées avec assurance mais incorrectes. Pour limiter ce risque sur des cas d'usage à fort enjeu, les bonnes pratiques consistent à ancrer les réponses dans des documents vérifiés fournis en contexte, à demander des citations vérifiables lorsque c'est pertinent, et à maintenir une supervision humaine sur les decisions critiques plutôt que de presenter la sortie du modèle comme une vérité absolue.",
        },
      ],
    },
    {
      slug: "agents-rag-bonnes-pratiques",
      domainId: "cas-usage-metier",
      title: "Construire des agents, assistants et systèmes RAG avec Claude",
      readMinutes: 9,
      summary:
        "Ce module présente les patterns d'usage métier les plus courants avec Claude : agents avec boucle d'outils, assistants conversationnels, génération augmentee par récupération (RAG), et evaluation de la qualité des réponses.",
      keyPoints: [
        "Un agent combine un modèle Claude avec une boucle d'appel d'outils pour accomplir des tâches ouvertes et multi-étapes.",
        "Le RAG (retrieval augmented génération) consiste à injecter dans le contexte de Claude des documents pertinents recuperes dynamiquement plutôt que de réentraîner le modèle.",
        "Un pipeline RAG réduit le risque d'hallucination en ancrant les réponses dans des sources vérifiables.",
        "Il est recommandé de commencer par le niveau le plus simple, un appel API unique, avant de justifier le passage à un pipeline puis à un agent complet.",
        "Un jeu d'evaluation (eval set) représentatif permet de mesurer objectivement la qualité d'une application avant sa mise en production.",
      ],
      sections: [
        {
          heading: "Choisir le bon niveau de complexité",
          body: "Face à un nouveau cas d'usage, la premiere question à se poser n'est pas quel outil sophistiqué utiliser, mais quel est le niveau de complexité minimal nécessaire. Un simple appel à l'API, sans outil ni boucle agentique, suffit pour la majorité des tâches de classification, de synthèse ou de génération de contenu. Un pipeline avec quelques étapes orchestrées par le code de l'application convient lorsque la logique métier est connue à l'avance et peut etre codée explicitement.\n\nLe recours à un agent complet, ou Claude decide lui-même des outils à appeler et de l'ordre des étapes, se justifie surtout lorsque la tâche est ouverte, multi-étapes, et difficile à specifier entierement à l'avance, par exemple explorer un problème, chercher de l'information dans plusieurs sources, puis produire une synthèse adaptée. Construire un agent là où un pipeline simple suffirait ajoute de la complexité, du coût et des risques d'erreur sans bénéfice proportionnel.",
        },
        {
          heading: "Agents et boucle d'outils",
          body: "Un agent construit avec l'API Claude repose sur la boucle de tool use décrite dans le domaine d'intégration technique : le modèle demande l'execution d'un outil, l'application l'execute et retourne le résultat, et le modèle decide de l'étape suivante en fonction de ce résultat, jusqu'a produire une réponse finale. Cette boucle peut inclure des outils variés : recherche documentaire, execution de code, interrogation d'une base de données, ou appel à une API métier.\n\nLa conception des outils mis à disposition de l'agent est déterminante pour la fiabilité du système : des descriptions d'outils précises, des schémas de paramètres stricts, et une gestion explicite des erreurs renvoyées par un outil améliorent nettement le comportement de l'agent par rapport à une configuration ou l'ensemble des tâches serait laissé au seul jugement du modèle.",
        },
        {
          heading: "Génération augmentee par récupération (RAG)",
          body: "Le RAG est une architecture qui consiste à rechercher, au moment de la requête, les documents ou passages les plus pertinents dans une base de connaissances, puis à les injecter dans le contexte envoye à Claude avant de générer la réponse. Cette approche permet de doter le modèle de connaissances spécifiques à jour, par exemple la documentation interne d'une entreprise, sans avoir à réentraîner ou modifier le modèle lui-même.\n\nUn pipeline RAG bien conçu améliore à la fois la pertinence des réponses et leur fiabilité factuelle, puisque le modèle peut s'appuyer sur des sources identifiées plutôt que sur sa seule mémoire paramétrique, et permet d'inclure des citations renvoyant aux documents sources. La qualité du RAG dépend fortement de l'étape de récupération elle-même : un mauvais choix de documents en amont limite la qualité de la réponse, quelle que soit la capacité du modèle utilise ensuite.",
        },
        {
          heading: "Évaluer la qualité avant la mise en production",
          body: "Avant de déployer une application basee sur Claude, il est recommandé de constituer un jeu d'evaluation, ou eval set, composé d'exemples représentatifs des cas réels que l'application devra traiter, y compris des cas limites et des cas d'echec attendus. Ce jeu de test permet de mesurer objectivement l'impact d'un changement de prompt, de modèle ou de pipeline, plutôt que de se fier à une impression subjective sur quelques exemples testés manuellement.\n\nCette evaluation peut combiner des criteres automatisés, comme la correspondance à un format attendu, et un jugement qualitatif, parfois réalisé par un autre appel à Claude configuré comme évaluateur. Intégrer cette pratique tot dans le cycle de developpement permet de detecter les régressions avant qu'elles n'atteignent les utilisateurs finaux et de justifier objectivement les choix d'architecture, comme le passage d'un simple appel à un pipeline RAG ou à un agent complet.",
        },
      ],
    },
  ],
  glossary: [
    {
      term: "Messages API",
      definition:
        "Point d'entrée unique de l'API Anthropic pour dialoguer avec un modèle Claude, ou chaque requête contient une liste de messages avec un rôle utilisateur ou assistant.",
      domainId: "integration-api",
    },
    {
      term: "System prompt",
      definition:
        "Champ distinct des messages de conversation qui définit le rôle, le ton et les contraintes durables de l'assistant pour l'ensemble d'une session.",
      domainId: "ingenierie-prompt",
    },
    {
      term: "Fenêtre de contexte",
      definition:
        "Nombre maximal de tokens qu'un modèle peut prendre en compte en une seule requête, incluant les instructions, l'historique et les documents fournis.",
      domainId: "fondamentaux-modeles",
    },
    {
      term: "Token",
      definition:
        "Unite de texte utilisée pour mesurer et facturer l'entrée et la sortie d'un modèle, correspondant approximativement à une portion de mot.",
      domainId: "integration-api",
    },
    {
      term: "Tool use",
      definition:
        "Mécanisme, aussi appele function calling, permettant à Claude de demander l'execution d'une fonction définie par le développeur puis d'exploiter son résultat pour poursuivre la conversation.",
      domainId: "integration-api",
    },
    {
      term: "Prompt caching",
      definition:
        "Fonctionnalité de l'API qui met en cache la portion stable et repetee d'un prompt pour réduire le coût et la latence des requêtes suivantes.",
      domainId: "integration-api",
    },
    {
      term: "Streaming",
      definition:
        "Mode de réponse de l'API qui renvoie le contenu genere progressivement plutôt que d'attendre la fin complète de la génération.",
      domainId: "integration-api",
    },
    {
      term: "Constitutional AI",
      definition:
        "Approche d'entrainement d'Anthropic ou le modèle apprend à évaluer et corriger ses réponses au regard d'un ensemble explicite de principes plutôt que de reposer uniquement sur un retour humain direct.",
      domainId: "ia-responsable",
    },
    {
      term: "Red teaming",
      definition:
        "Ensemble de tests adversariaux menées avant le déploiement d'un modèle pour identifier les facons dont il pourrait produire des sorties dangereuses ou etre detourne.",
      domainId: "ia-responsable",
    },
    {
      term: "Hallucination",
      definition:
        "Réponse produite par un modèle de langage avec assurance mais factuellement incorrecte ou inventee.",
      domainId: "ia-responsable",
    },
    {
      term: "RAG (génération augmentee par récupération)",
      definition:
        "Architecture qui récupère dynamiquement des documents pertinents et les injecte dans le contexte du modèle avant génération, plutôt que de réentraîner le modèle sur ces connaissances.",
      domainId: "cas-usage-metier",
    },
    {
      term: "Chain-of-thought",
      definition:
        "Technique de prompting consistant à demander explicitement au modèle de raisonner étape par étape avant de donner sa réponse finale, utile sur les tâches de raisonnement complexe.",
      domainId: "ingenierie-prompt",
    },
    {
      term: "Few-shot prompting",
      definition:
        "Technique de prompting consistant à fournir quelques exemples représentatifs d'entrée et de sortie attendue pour améliorer la cohérence du format de réponse.",
      domainId: "ingenierie-prompt",
    },
    {
      term: "Zero-shot prompting",
      definition:
        "Technique de prompting consistant à demander une réponse en se basant uniquement sur des instructions textuelles, sans fournir d'exemple préalable.",
      domainId: "ingenierie-prompt",
    },
    {
      term: "Balisage XML",
      definition:
        "Utilisation de balises de type XML dans un prompt pour séparer clairement les instructions, le contexte et les exemples fournis au modèle.",
      domainId: "ingenierie-prompt",
    },
    {
      term: "Claude Opus",
      definition:
        "Famille de modèles Claude offrant la capacité de raisonnement la plus élevée, adaptée aux tâches complexes et aux agents autonomes, au prix d'un coût et d'une latence plus importants.",
      domainId: "fondamentaux-modeles",
    },
    {
      term: "Claude Sonnet",
      definition:
        "Famille de modèles Claude offrant un compromis equilibre entre intelligence, vitesse et coût, adaptée à la majorité des usages professionnels courants.",
      domainId: "fondamentaux-modeles",
    },
    {
      term: "Claude Haiku",
      definition:
        "Famille de modèles Claude privilégiant la vitesse et le coût le plus bas, adaptée aux tâches simples et répétitives à fort volume.",
      domainId: "fondamentaux-modeles",
    },
    {
      term: "Vision (multimodalité)",
      definition:
        "Capacité de Claude à analyser des images fournies en base64 ou via une URL en complément du texte dans une même requête.",
      domainId: "fondamentaux-modeles",
    },
    {
      term: "Agent",
      definition:
        "Système combinant un modèle Claude avec une boucle d'appel d'outils pour accomplir de manière autonome des tâches ouvertes et multi-étapes.",
      domainId: "cas-usage-metier",
    },
    {
      term: "stop_reason",
      definition:
        "Champ de la réponse de l'API indiquant pourquoi le modèle à arrêté de générer, par exemple end_turn, max_tokens, tool_use ou refusal.",
      domainId: "integration-api",
    },
    {
      term: "Usage Policy",
      definition:
        "Politique publiee par Anthropic définissant les utilisations autorisées et interdites de ses modèles, applicable à tout développeur intégrant l'API Claude.",
      domainId: "ia-responsable",
    },
    {
      term: "Batch API",
      definition:
        "Point d'entrée de l'API permettant de soumettre un grand nombre de requêtes non urgentes pour un traitement asynchrone à coût réduit.",
      domainId: "integration-api",
    },
    {
      term: "Raisonnement étendu",
      definition:
        "Mécanisme permettant à Claude de deliberer davantage avant de répondre sur des problèmes difficiles, au prix d'une consommation de tokens accrue.",
      domainId: "ingenierie-prompt",
    },
    {
      term: "Eval set (jeu d'evaluation)",
      definition:
        "Ensemble d'exemples représentatifs, y compris des cas limites, utilise pour mesurer objectivement la qualité des réponses d'une application avant sa mise en production.",
      domainId: "cas-usage-metier",
    },
  ],
  quizBank: [
    {
      id: "anthropic-cca-q01",
      domainId: "fondamentaux-modeles",
      difficulty: "facile",
      question:
        "Quelle famille de modèles Claude est généralement recommandee pour des tâches simples et à fort volume ou la vitesse et le coût sont prioritaires ?",
      options: ["Claude Opus", "Claude Sonnet", "Claude Haiku", "Claude Fable"],
      correctIndex: 2,
      explanation:
        "Claude Haiku privilégie la vitesse et le coût le plus bas, ce qui en fait le choix adapte pour des tâches simples et répétitives à fort volume.",
    },
    {
      id: "anthropic-cca-q02",
      domainId: "fondamentaux-modeles",
      difficulty: "moyen",
      question:
        "Une entreprise doit resumer des milliers de tickets support par jour avec une latence minimale et un budget serré. Quelle recommandation est la plus adaptée ?",
      options: [
        "Utiliser systématiquement Claude Opus pour maximiser la qualité",
        "Utiliser Claude Haiku pour son rapport vitesse et coût adapte à un fort volume",
        "Utiliser Claude Sonnet car il est toujours moins cher que les autres modèles",
        "Le choix du modèle n'a aucun impact sur le coût ou la latence",
      ],
      correctIndex: 1,
      explanation:
        "Pour un fort volume de tâches simples et une latence minimale, Claude Haiku offre le meilleur compromis vitesse et coût.",
    },
    {
      id: "anthropic-cca-q03",
      domainId: "fondamentaux-modeles",
      difficulty: "facile",
      question: "Que désigne la fenêtre de contexte d'un modèle Claude ?",
      options: [
        "La duree pendant laquelle l'API reste disponible",
        "Le volume maximal de texte, en tokens, pris en compte dans une seule requête",
        "Le nombre de requêtes autorisées par minute",
        "La taille du modèle exprimée en paramètres",
      ],
      correctIndex: 1,
      explanation:
        "La fenêtre de contexte correspond au nombre maximal de tokens que le modèle peut traiter en une seule requête, en cumulant instructions, historique et documents.",
    },
    {
      id: "anthropic-cca-q04",
      domainId: "fondamentaux-modeles",
      difficulty: "moyen",
      question:
        "Un développeur veut faire analyser un contrat de plusieurs centaines de pages par Claude en une seule requête, sans le decouper. Quelle caractéristique rend cela possible ?",
      options: [
        "Le tool use",
        "La fenêtre de contexte étendue",
        "Le prompt caching",
        "Le mode streaming",
      ],
      correctIndex: 1,
      explanation:
        "C'est la taille de la fenêtre de contexte qui determine le volume de texte pouvant etre traite en une seule requête.",
    },
    {
      id: "anthropic-cca-q05",
      domainId: "fondamentaux-modeles",
      difficulty: "difficile",
      question:
        "Pourquoi Claude peut-il répondre de manière incorrecte à une question portant sur un événement très recent, même s'il est globalement performant ?",
      options: [
        "Le modèle refuse par principe toute question d'actualite",
        "Ses connaissances sont figées à une date de coupure d'entrainement, sauf s'il dispose d'un outil de recherche web ou de documents fournis",
        "Claude ne peut traiter que du texte rédigé en anglais",
        "La fenêtre de contexte est systématiquement trop petite pour ce type de question",
      ],
      correctIndex: 1,
      explanation:
        "Sans outil externe permettant d'acceder à des informations récentes, les connaissances du modèle restent limitées à sa date de coupure d'entrainement.",
    },
    {
      id: "anthropic-cca-q06",
      domainId: "fondamentaux-modeles",
      difficulty: "moyen",
      question:
        "Outre l'API Anthropic directe, sur quelles plateformes cloud peut-on également acceder aux modèles Claude ?",
      options: [
        "Uniquement via une interface web grand public",
        "Notamment Amazon Bedrock et Google Cloud Vertex AI",
        "Uniquement via un partenariat exclusif avec un seul fournisseur cloud",
        "Claude n'est jamais disponible en dehors de l'API Anthropic",
      ],
      correctIndex: 1,
      explanation:
        "Claude est également accessible via des plateformes cloud partenaires comme Amazon Bedrock, Google Cloud Vertex AI ou Microsoft Foundry.",
    },
    {
      id: "anthropic-cca-q07",
      domainId: "fondamentaux-modeles",
      difficulty: "facile",
      question:
        "Quelle affirmation décrit le mieux le compromis général entre les différentes familles de modèles Claude ?",
      options: [
        "Plus un modèle est cher, plus il est lent à répondre",
        "Il existe un compromis entre intelligence, vitesse et coût selon la famille de modèle choisie",
        "Toutes les familles de modèles Claude offrent exactement les memes performances",
        "Seule la famille de modèle la plus chère peut analyser des images",
      ],
      correctIndex: 1,
      explanation:
        "Le choix d'une famille de modèle repose sur un arbitrage entre capacité de raisonnement, vitesse de réponse et coût par token.",
    },
    {
      id: "anthropic-cca-q08",
      domainId: "ingenierie-prompt",
      difficulty: "facile",
      question: "Quel est le rôle principal du system prompt dans une requête à l'API Claude ?",
      options: [
        "Contenir la premiere question posée par l'utilisateur",
        "Définir le rôle, le ton et les contraintes durables de l'assistant pour toute la conversation",
        "Stocker l'integralite de l'historique de conversation",
        "Remplacer le paramètre max_tokens de la requête",
      ],
      correctIndex: 1,
      explanation:
        "Le system prompt est un champ distinct utilise pour fixer des instructions stables valables pour l'ensemble de la session.",
    },
    {
      id: "anthropic-cca-q09",
      domainId: "ingenierie-prompt",
      difficulty: "moyen",
      question:
        "Un développeur veut que Claude renvoie systématiquement une réponse dans un format précis à partir d'un texte libre. Quelle technique de prompting améliore le plus la fiabilité du format ?",
      options: [
        "Allonger au maximum le system prompt",
        "Fournir quelques exemples few-shot illustrant le format attendu",
        "Formuler la question en lettres majuscules",
        "Augmenter uniquement la valeur de max_tokens",
      ],
      correctIndex: 1,
      explanation:
        "Fournir des exemples représentatifs d'entrée et de sortie améliore généralement la cohérence du format plus efficacement qu'une description textuelle detaillee.",
    },
    {
      id: "anthropic-cca-q10",
      domainId: "ingenierie-prompt",
      difficulty: "facile",
      question:
        "A quoi servent des balises comme <document> ou <instructions> dans un prompt envoye à Claude ?",
      options: [
        "Elles sont obligatoires pour que l'API accepte la requête",
        "Elles aident à structurer clairement les différentes parties du prompt pour le modèle",
        "Elles remplacent le format JSON attendu dans la réponse",
        "Elles servent uniquement à la mise en forme visuelle côté client",
      ],
      correctIndex: 1,
      explanation:
        "Le balisage de type XML permet de séparer clairement instructions, contexte et exemples, ce qui réduit les ambiguites pour le modèle.",
    },
    {
      id: "anthropic-cca-q11",
      domainId: "ingenierie-prompt",
      difficulty: "moyen",
      question:
        "Pour un problème de raisonnement en plusieurs étapes, quelle technique de prompting aide généralement le plus Claude à produire une réponse correcte ?",
      options: [
        "Demander une réponse en un seul mot",
        "Demander explicitement au modèle de raisonner étape par étape avant de conclure",
        "Répéter la question trois fois dans le même message",
        "Supprimer le system prompt de la requête",
      ],
      correctIndex: 1,
      explanation:
        "Le chain-of-thought, qui consiste à demander un raisonnement explicite avant la conclusion, améliore généralement la justesse sur les tâches complexes.",
    },
    {
      id: "anthropic-cca-q12",
      domainId: "ingenierie-prompt",
      difficulty: "difficile",
      question:
        "Une equipe constate que son cache de prompt n'est presque jamais utilise, alors qu'elle envoie un prompt quasiment identique à chaque requête. Quelle cause est la plus probable ?",
      options: [
        "Le cache ne fonctionne que certains jours de la semaine",
        "Un element variable, comme un horodatage, est inséré tot dans le prompt et invalide tout ce qui suit",
        "Le modèle utilise est trop recent pour beneficier du cache",
        "Les balises XML empêchent par nature la mise en cache",
      ],
      correctIndex: 1,
      explanation:
        "Le cache fonctionne par correspondance de préfixe : un seul element variable place tot dans le prompt invalide la mise en cache de tout le contenu qui suit.",
    },
    {
      id: "anthropic-cca-q13",
      domainId: "ingenierie-prompt",
      difficulty: "moyen",
      question:
        "Quelle pratique est recommandee pour illustrer à Claude le style ou la structure de sortie attendue sans écrire de longues règles textuelles ?",
      options: [
        "Activer uniquement le prompt caching",
        "Fournir quelques exemples représentatifs, une approche few-shot",
        "Réduire volontairement la fenêtre de contexte",
        "N'utiliser que des instructions formulees à la négative",
      ],
      correctIndex: 1,
      explanation:
        "Le few-shot prompting, via quelques exemples bien choisis, est une methode efficace pour transmettre un format ou un style attendu.",
    },
    {
      id: "anthropic-cca-q14",
      domainId: "ingenierie-prompt",
      difficulty: "facile",
      question: "Que désigne la pratique du zero-shot prompting ?",
      options: [
        "Demander une réponse sans fournir aucun exemple préalable",
        "Fournir dix exemples avant de poser la question",
        "Désactiver totalement le system prompt",
        "Envoyer le prompt en plusieurs requêtes successives",
      ],
      correctIndex: 0,
      explanation:
        "Le zero-shot prompting consiste à formuler une demande en s'appuyant uniquement sur des instructions, sans exemple fourni au préalable.",
    },
    {
      id: "anthropic-cca-q15",
      domainId: "ingenierie-prompt",
      difficulty: "moyen",
      question:
        "Pourquoi est-il recommandé de placer les instructions stables avant le contenu variable dans une requête envoyee à Claude ?",
      options: [
        "Cela n'a aucun effet mesurable sur les performances",
        "Cela maximise les chances de réutiliser le cache de prompt et réduit les coûts",
        "C'est une obligation technique pour que l'API accepte la requête",
        "Cela empêche mecaniquement toute hallucination",
      ],
      correctIndex: 1,
      explanation:
        "Placer le contenu stable avant le contenu variable favorise la correspondance de préfixe nécessaire au prompt caching, ce qui réduit la latence et le coût.",
    },
    {
      id: "anthropic-cca-q16",
      domainId: "integration-api",
      difficulty: "facile",
      question:
        "Quel est l'unique point d'entrée principal utilise pour dialoguer avec un modèle Claude via l'API Anthropic ?",
      options: ["/v1/chat", "/v1/completions", "/v1/messages", "/v1/generate"],
      correctIndex: 2,
      explanation:
        "L'ensemble des interactions avec un modèle Claude passe par la Messages API, exposee au point d'entrée /v1/messages.",
    },
    {
      id: "anthropic-cca-q17",
      domainId: "integration-api",
      difficulty: "moyen",
      question: "Que signifie un stop_reason egal à tool_use dans une réponse de l'API ?",
      options: [
        "Le modèle à rencontre une erreur interne irrecuperable",
        "Le modèle souhaite qu'un outil defini par le développeur soit execute et attend son résultat",
        "La conversation est definitivement terminee",
        "Le quota de tokens de l'organisation est épuisé",
      ],
      correctIndex: 1,
      explanation:
        "Un stop_reason à la valeur tool_use indique que le modèle a genere un appel d'outil et attend que l'application execute cet outil puis retourne le résultat.",
    },
    {
      id: "anthropic-cca-q18",
      domainId: "integration-api",
      difficulty: "moyen",
      question:
        "Apres avoir execute l'outil demande par Claude, comment le développeur doit-il renvoyer le résultat pour poursuivre la boucle agentique ?",
      options: [
        "En le plaçant dans un nouveau champ system",
        "Sous forme de bloc tool_result dans un message utilisateur suivant",
        "En modifiant directement le contenu de la réponse précédente du modèle",
        "Aucun résultat ne doit etre renvoye, le modèle poursuit seul",
      ],
      correctIndex: 1,
      explanation:
        "Le résultat de l'outil execute doit etre renvoye sous forme de bloc tool_result dans un nouveau message utilisateur pour que le modèle puisse poursuivre.",
    },
    {
      id: "anthropic-cca-q19",
      domainId: "integration-api",
      difficulty: "difficile",
      question:
        "Une application doit traiter des réponses potentiellement très longues sans risquer de dépassement de délai HTTP. Quelle pratique est la plus adaptée ?",
      options: [
        "Réduire max_tokens à une valeur arbitrairement basse",
        "Utiliser le mode streaming plutôt qu'une requête bloquante classique",
        "Désactiver completement le system prompt",
        "Envoyer la même requête plusieurs fois en parallele",
      ],
      correctIndex: 1,
      explanation:
        "Le streaming renvoie la réponse progressivement et evite les risques de timeout associés à l'attente d'une réponse longue generee en une seule fois.",
    },
    {
      id: "anthropic-cca-q20",
      domainId: "integration-api",
      difficulty: "facile",
      question:
        "Quels formats de source sont couramment acceptes pour permettre à Claude d'analyser une image ?",
      options: [
        "Uniquement des liens vers des plateformes de video en direct",
        "Une image encodee en base64 ou fournie via une URL publique",
        "Uniquement des fichiers au format PDF",
        "Un flux video en temps reel",
      ],
      correctIndex: 1,
      explanation:
        "Un bloc de contenu de type image accepte une source encodee en base64 ou une URL publique pointant vers l'image.",
    },
    {
      id: "anthropic-cca-q21",
      domainId: "integration-api",
      difficulty: "moyen",
      question:
        "Pour classifier un très grand volume de documents sans contrainte de latence immediate, quelle fonctionnalité de l'API réduit le plus efficacement le coût ?",
      options: [
        "Le mode streaming",
        "La Batch API, qui traite les requêtes de manière asynchrone à coût réduit",
        "L'augmentation systematique de la taille du system prompt",
        "La désactivation du tool use",
      ],
      correctIndex: 1,
      explanation:
        "La Batch API est conçue pour les traitements à grande échelle non urgents et propose un tarif réduit par rapport à des appels synchrones equivalents.",
    },
    {
      id: "anthropic-cca-q22",
      domainId: "integration-api",
      difficulty: "difficile",
      question:
        "Une equipe observe une facture API élevée alors que le volume de requêtes est stable, et renvoie integralement un system prompt de plusieurs milliers de tokens à chaque appel sans cache actif. Quelle est la cause la plus probable ?",
      options: [
        "Ce comportement n'a aucun impact sur le coût final",
        "Chaque requête facture l'integralite du system prompt en tokens d'entrée, ce qui peut etre réduit en activant le prompt caching",
        "Le coût ne dépend que du nombre de tokens de sortie générés",
        "L'API applique un tarif fixe indépendant du volume de tokens envoyés",
      ],
      correctIndex: 1,
      explanation:
        "Sans mise en cache, un system prompt long est facture integralement en tokens d'entrée à chaque requête, ce qui peut représenter un coût important à volume élevé.",
    },
    {
      id: "anthropic-cca-q23",
      domainId: "integration-api",
      difficulty: "facile",
      question: "Que represente un token dans le contexte de la tarification de l'API Claude ?",
      options: [
        "Une clé API valable pendant un mois",
        "Une unite de texte utilisée pour mesurer et facturer l'entrée et la sortie du modèle",
        "Un identifiant unique attribué à chaque conversation",
        "Une image compressée envoyee au modèle",
      ],
      correctIndex: 1,
      explanation:
        "Le token est l'unite de base utilisée pour mesurer le volume de texte traite et calculer le coût d'une requête.",
    },
    {
      id: "anthropic-cca-q24",
      domainId: "ia-responsable",
      difficulty: "facile",
      question: "Qu'est-ce que le Constitutional AI, approche utilisée par Anthropic pour entraîner Claude ?",
      options: [
        "Une methode de compression technique des modèles",
        "Une approche entraînant le modèle à respecter un ensemble explicite de principes plutôt que de reposer uniquement sur un retour humain direct",
        "Un protocole de chiffrement des requêtes envoyees à l'API",
        "Une certification légale obligatoire pour utiliser l'API Anthropic",
      ],
      correctIndex: 1,
      explanation:
        "Le Constitutional AI vise à rendre le comportement du modèle plus previsible en explicitant les principes qu'il doit respecter plutôt que de s'appuyer uniquement sur un retour humain direct sur chaque réponse.",
    },
    {
      id: "anthropic-cca-q25",
      domainId: "ia-responsable",
      difficulty: "moyen",
      question:
        "Quel est l'objectif principal du red teaming applique à un modèle comme Claude avant son déploiement ?",
      options: [
        "Améliorer la vitesse d'inference du modèle",
        "Identifier de manière proactive les facons dont le modèle pourrait etre detourne ou produire des sorties dangereuses",
        "Réduire le coût des tokens de sortie",
        "Augmenter la taille de la fenêtre de contexte",
      ],
      correctIndex: 1,
      explanation:
        "Le red teaming consiste à tester de manière adversariale un modèle afin de repérer ses faiblesses de sécurité avant un déploiement à grande échelle.",
    },
    {
      id: "anthropic-cca-q26",
      domainId: "ia-responsable",
      difficulty: "moyen",
      question:
        "Une startup envisage un cas d'usage de l'API Claude qui pourrait entrer en conflit avec la politique d'usage d'Anthropic. Quelle est la bonne pratique attendue d'un professionnel certifié ?",
      options: [
        "Contourner les refus du modèle par des reformulations successives",
        "Consulter et respecter l'Usage Policy d'Anthropic avant de déployer ce cas d'usage",
        "Ignorer la politique tant que le modèle accepte techniquement de répondre",
        "Désactiver les mécanismes de sécurité via un paramètre de l'API",
      ],
      correctIndex: 1,
      explanation:
        "Tout développeur intégrant l'API Claude est responsable du respect de l'Usage Policy d'Anthropic pour son propre cas d'usage.",
    },
    {
      id: "anthropic-cca-q27",
      domainId: "ia-responsable",
      difficulty: "difficile",
      question:
        "Une réponse de l'API contient un stop_reason egal à refusal. Quel comportement est attendu côté application ?",
      options: [
        "Ignorer ce champ et traiter la réponse comme une réponse normale",
        "Consulter les informations associées pour comprendre la categorie du refus avant de décider de l'affichage à l'utilisateur",
        "Relancer automatiquement la même requête en boucle jusqu'a obtenir une réponse",
        "Considerer cela systématiquement comme une simple erreur réseau à retenter",
      ],
      correctIndex: 1,
      explanation:
        "Un refus doit etre traite comme une information structuree utile, permettant d'adapter le comportement de l'application plutôt que d'etre ignore ou retente aveuglément.",
    },
    {
      id: "anthropic-cca-q28",
      domainId: "ia-responsable",
      difficulty: "facile",
      question: "Qu'est-ce qu'une hallucination dans le contexte d'un modèle de langage comme Claude ?",
      options: [
        "Un bug d'affichage côté interface utilisateur",
        "Une réponse formulée avec assurance mais factuellement incorrecte ou inventee",
        "Un temps de latence anormalement long",
        "Une erreur de connexion au serveur de l'API",
      ],
      correctIndex: 1,
      explanation:
        "Une hallucination est une réponse produite avec assurance par le modèle mais qui ne correspond pas à la réalité des faits.",
    },
    {
      id: "anthropic-cca-q29",
      domainId: "ia-responsable",
      difficulty: "moyen",
      question:
        "Pour réduire le risque d'hallucination sur des questions factuelles précises, quelle pratique est recommandee ?",
      options: [
        "Augmenter uniquement la température du modèle",
        "Ancrer la réponse dans des documents fournis en contexte ou demander des citations vérifiables",
        "Poser la même question plusieurs fois et ne garder que la premiere réponse",
        "Supprimer completement le system prompt",
      ],
      correctIndex: 1,
      explanation:
        "Ancrer les réponses dans des sources vérifiables, par exemple via un pipeline RAG, réduit le risque de réponses factuellement incorrectes.",
    },
    {
      id: "anthropic-cca-q30",
      domainId: "ia-responsable",
      difficulty: "difficile",
      question:
        "Une application médicale utilise Claude pour proposer des resumes de dossiers patients à des médecins. Quelle mesure de gouvernance est la plus alignée avec une approche d'IA responsable ?",
      options: [
        "Publier les resumes directement sans relecture humaine pour gagner du temps",
        "Maintenir une supervision humaine systematique et ne jamais presenter la sortie du modèle comme un diagnostic définitif",
        "Désactiver tout enregistrement des échanges pour préserver la confidentialité",
        "Retirer le system prompt pour accélérer les temps de réponse",
      ],
      correctIndex: 1,
      explanation:
        "Sur un cas d'usage à fort enjeu comme la santé, une supervision humaine systematique reste indispensable et le modèle ne doit pas se substituer à un diagnostic médical.",
    },
    {
      id: "anthropic-cca-q31",
      domainId: "ia-responsable",
      difficulty: "facile",
      question: "Que définit concrètement l'Usage Policy publiee par Anthropic pour l'API Claude ?",
      options: [
        "Uniquement les tarifs applicables à l'API",
        "Les utilisations autorisées et interdites du modèle que les développeurs doivent respecter",
        "Uniquement les formats de fichiers acceptes par l'API",
        "Une politique concernant exclusivement les utilisateurs de claude.ai et non l'API",
      ],
      correctIndex: 1,
      explanation:
        "L'Usage Policy définit le cadre des utilisations autorisées et interdites des modèles Claude, applicable à tout usage, y compris via l'API.",
    },
    {
      id: "anthropic-cca-q32",
      domainId: "cas-usage-metier",
      difficulty: "facile",
      question:
        "Dans une architecture RAG utilisant Claude, quel est le rôle de l'étape de récupération (retrieval) ?",
      options: [
        "Générer directement la réponse finale à la place du modèle",
        "Aller chercher les documents ou passages pertinents à injecter dans le contexte du modèle avant génération",
        "Compresser le modèle pour réduire son coût d'inference",
        "Traduire automatiquement la question posée par l'utilisateur",
      ],
      correctIndex: 1,
      explanation:
        "L'étape de récupération consiste à identifier et fournir au modèle les documents pertinents qui serviront de base à sa réponse.",
    },
    {
      id: "anthropic-cca-q33",
      domainId: "cas-usage-metier",
      difficulty: "moyen",
      question:
        "Une equipe hésite entre un simple appel à l'API Claude et la construction d'un agent avec boucle d'outils. Quel critère justifie le recours à un agent ?",
      options: [
        "La tâche est simple et entierement spécifiable à l'avance",
        "La tâche est multi-étapes, ouverte, et nécessite une exploration guidée par le modèle",
        "Le budget disponible est illimité quel que soit le contexte",
        "Un agent est par définition toujours moins coûteux qu'un appel simple",
      ],
      correctIndex: 1,
      explanation:
        "Le recours à un agent se justifie surtout pour des tâches ouvertes et multi-étapes, difficiles à specifier entierement à l'avance.",
    },
    {
      id: "anthropic-cca-q34",
      domainId: "cas-usage-metier",
      difficulty: "facile",
      question:
        "Avant de mettre en production une application basee sur Claude, quelle pratique permet de mesurer objectivement la qualité des réponses ?",
      options: [
        "Se fier uniquement à l'impression subjective d'un seul testeur",
        "Construire un jeu d'evaluation représentatif et mesurer les resultats dessus",
        "Ne tester l'application qu'une fois déjà en production",
        "Ignorer les tests et se fier uniquement à la réputation du modèle",
      ],
      correctIndex: 1,
      explanation:
        "Un jeu d'evaluation représentatif permet de mesurer objectivement la qualité d'une application et de detecter les régressions avant la mise en production.",
    },
    {
      id: "anthropic-cca-q35",
      domainId: "cas-usage-metier",
      difficulty: "moyen",
      question:
        "Pour un assistant conversationnel multi-tours, comment le contexte de la conversation est-il géré, sachant que l'API Claude est sans état ?",
      options: [
        "Le serveur Anthropic mémorise automatiquement toutes les conversations passées",
        "L'application doit renvoyer l'historique pertinent des messages à chaque nouvelle requête",
        "Il est impossible de construire une conversation multi-tours avec l'API Claude",
        "Chaque message doit obligatoirement etre envoye sur une connexion réseau distincte",
      ],
      correctIndex: 1,
      explanation:
        "L'API étant sans état, c'est à l'application de renvoyer l'historique pertinent de la conversation à chaque nouvelle requête pour maintenir le contexte.",
    },
    {
      id: "anthropic-cca-q36",
      domainId: "cas-usage-metier",
      difficulty: "difficile",
      question:
        "Une entreprise veut faire remonter automatiquement des insights à partir de milliers de documents internes hétérogènes. Quelle approche est la plus adaptée avant de généraliser à un système complexe ?",
      options: [
        "Déployer directement un agent autonome multi-outils sans test préalable",
        "Commencer par un pipeline simple de récupération et de génération, l'évaluer sur un echantillon représentatif, puis complexifier si nécessaire",
        "Ignorer l'étape d'evaluation pour gagner du temps de developpement",
        "Utiliser uniquement le modèle le moins capable sans jamais mesurer la qualité obtenue",
      ],
      correctIndex: 1,
      explanation:
        "La bonne pratique consiste à commencer simple, mesurer la qualité sur un echantillon représentatif, puis justifier une complexité supplémentaire seulement si elle est nécessaire.",
    },
    {
      id: "anthropic-cca-q37",
      domainId: "cas-usage-metier",
      difficulty: "moyen",
      question:
        "Quel est l'avantage principal du RAG par rapport à un réentraînement complet du modèle pour intégrer des connaissances propres à une entreprise ?",
      options: [
        "Le RAG produit toujours des resultats identiques quel que soit le contexte fourni",
        "Le RAG permet de mettre à jour les connaissances utilisées sans réentraîner le modèle, en changeant simplement les documents indexés",
        "Le réentraînement d'un modèle Claude n'existe pas et n'est jamais propose par Anthropic",
        "Le RAG élimine completement tout risque d'hallucination",
      ],
      correctIndex: 1,
      explanation:
        "Le RAG permet de mettre à jour les connaissances mobilisées par le modèle en modifiant la base documentaire, sans avoir à réentraîner le modèle lui-même.",
    },
    {
      id: "anthropic-cca-q38",
      domainId: "cas-usage-metier",
      difficulty: "facile",
      question:
        "Pourquoi est-il recommandé de commencer par le niveau le plus simple, un appel API unique, avant de construire un agent complexe ?",
      options: [
        "Parce qu'un agent est systématiquement interdit par la politique d'usage",
        "Parce que la complexité, la valeur, la faisabilité et le coût d'erreur doivent justifier le passage à un niveau plus complexe",
        "Parce que les appels API simples sont toujours gratuits contrairement aux agents",
        "Parce que Claude ne supporte techniquement pas les architectures d'agents",
      ],
      correctIndex: 1,
      explanation:
        "Le passage à une architecture plus complexe, comme un agent, doit etre justifie par la nature de la tâche et non adopté par defaut.",
    },
  ],
  studyPlan: [
    {
      label: "Semaine 1, jours 1 à 3 : fondamentaux du produit",
      detail:
        "Lire le programme officiel de la certification, comprendre les familles de modèles Opus, Sonnet et Haiku, la notion de fenêtre de contexte et les différents canaux d'acces à Claude (claude.ai, Claude Code, API directe, plateformes cloud partenaires).",
    },
    {
      label: "Semaine 1, jours 4 à 7 : ingénierie de prompt",
      detail:
        "Travailler le module sur le prompting structure : system prompts, balises XML, few-shot, chain-of-thought. Réécrire trois prompts personnels en appliquant ces techniques et comparer les resultats obtenus.",
    },
    {
      label: "Semaine 2, jours 1 à 4 : intégration technique avec l'API",
      detail:
        "Etudier la Messages API en detail : streaming, tool use, entrée d'images, gestion des tokens. Réaliser de petits exercices pratiques d'appel à l'API si possible, en particulier une boucle de tool use complète.",
    },
    {
      label: "Semaine 2, jours 5 à 7 : IA responsable",
      detail:
        "Lire le module sur le Constitutional AI, le red teaming et l'Usage Policy d'Anthropic. Passer en revue les questions du quiz sur ce domaine et noter les points encore flous pour les retravailler.",
    },
    {
      label: "Semaine 3, jours 1 à 4 : cas d'usage métier et glossaire",
      detail:
        "Etudier les patterns agents, assistants et RAG, ainsi que la construction d'un jeu d'evaluation. Relire l'ensemble du glossaire une fois en entier pour consolider le vocabulaire technique de l'examen.",
    },
    {
      label: "Semaine 3, jours 5 à 7 : examens blancs et revision ciblée",
      detail:
        "Faire l'ensemble du quiz bank en conditions chronométrées, identifier les domaines les plus faibles, puis concentrer la dernière revision sur le domaine d'intégration technique avec l'API, le plus pondéré de la certification.",
    },
  ],
};

export default certification;
