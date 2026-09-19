import type { Certification } from "@/content/types";

const certification: Certification = {
  slug: "aws-ai-practitioner",
  providerId: "aws",
  code: "AIF-C01",
  name: "AWS Certified AI Practitioner",
  level: "Fondamentaux",
  tagline: "La porte d'entrée officielle AWS pour prouver sa culture de l'IA et du machine learning en environnement cloud.",
  description:
    "La certification AWS Certified AI Practitioner valide une compréhension générale de l'intelligence artificielle, du machine learning et de l'IA générative, ainsi que la connaissance des services AWS qui les mettent en oeuvre. Elle s'adresse aux profils non techniques comme aux développeurs qui veulent structurer leur vocabulaire et leurs repères avant d'aller plus loin, par exemple vers les certifications AWS Machine Learning Engineer ou AWS Solutions Architect. C'est un excellent point de départ pour un chef de projet, un product manager ou un développeur qui doit dialoguer avec des équipes data sans forcément coder de modèle lui-même.",
  officialUrl: "https://aws.amazon.com/certification/certified-ai-practitioner/",
  format: {
    questionCount: 65,
    durationMinutes: 90,
    passingScore: "700/1000 (score mis à l'échelle)",
    price: "100 USD",
    deliveryMode: "Centre d'examen Pearson VUE ou surveillance en ligne",
    isOfficialCertification: true,
  },
  domains: [
    {
      id: "fondamentaux-ia-ml",
      title: "Fondamentaux de l'IA et du machine learning",
      weightPercent: 20,
      summary:
        "Les définitions de base de l'IA, du machine learning et du deep learning, les types d'apprentissage et le cycle de vie d'un projet ML.",
    },
    {
      id: "fondamentaux-ia-generative",
      title: "Fondamentaux de l'IA générative",
      weightPercent: 24,
      summary:
        "Les modèles de fondation, l'architecture transformer, les concepts de prompt et les cas d'usage typiques de l'IA générative.",
    },
    {
      id: "applications-modeles-fondation",
      title: "Applications des modèles de fondation",
      weightPercent: 28,
      summary:
        "La conception concrète de solutions avec des modèles de fondation : prompt engineering, RAG, fine-tuning, agents et services AWS associés.",
    },
    {
      id: "ia-responsable",
      title: "Bonnes pratiques d'IA responsable",
      weightPercent: 14,
      summary:
        "Les principes d'équité, d'explicabilité et de transparence, ainsi que les outils AWS qui aident à détecter et limiter les biais.",
    },
    {
      id: "securite-conformite-gouvernance",
      title: "Sécurité, conformité et gouvernance pour les solutions IA",
      weightPercent: 14,
      summary:
        "La protection des données utilisées par les systèmes d'IA, les obligations réglementaires et les mécanismes de gouvernance sur AWS.",
    },
  ],
  modules: [
    {
      slug: "comprendre-ia-et-ml",
      domainId: "fondamentaux-ia-ml",
      title: "Comprendre l'intelligence artificielle et le machine learning",
      readMinutes: 9,
      summary:
        "Les définitions de base de l'IA, du machine learning et du deep learning, les trois grands types d'apprentissage et le cycle de vie complet d'un projet ML sur AWS.",
      keyPoints: [
        "L'IA, le machine learning, le deep learning et l'IA générative s'emboîtent : chacun est un sous-ensemble du précédent.",
        "Les trois grands types d'apprentissage sont supervisé, non supervisé et par renforcement, chacun adapté à des problèmes différents.",
        "Un projet ML suit un cycle répétable : collecte et préparation des données, entraînement, évaluation, déploiement, surveillance.",
        "Amazon SageMaker couvre l'ensemble de ce cycle de vie avec un outil dédié à chaque étape.",
        "Le choix des bonnes métriques (précision, rappel, F1, RMSE) dépend du type de problème et de son contexte métier.",
      ],
      sections: [
        {
          heading: "Intelligence artificielle, machine learning et deep learning",
          body: "L'intelligence artificielle regroupe l'ensemble des techniques qui permettent à un système informatique d'imiter des capacités cognitives humaines comme le raisonnement, la perception ou la prise de décision. Le machine learning est une sous-catégorie de l'IA dans laquelle le système apprend des motifs à partir de données plutôt que de suivre des règles codées à la main par un développeur. Le deep learning est lui-même une sous-catégorie du machine learning qui s'appuie sur des réseaux de neurones à plusieurs couches, capables de traiter des données complexes comme des images, du son ou du texte brut.\n\nL'IA générative est une branche récente du deep learning. Contrairement à un modèle de classification qui prédit une étiquette parmi un ensemble connu, un modèle génératif produit du contenu nouveau : texte, image, code ou audio. Cette hiérarchie de concepts revient souvent à l'examen AIF-C01, qui teste la capacité à situer un cas d'usage dans la bonne catégorie plutôt que la maîtrise de formules mathématiques.",
        },
        {
          heading: "Les trois grands types d'apprentissage",
          body: "L'apprentissage supervisé entraîne un modèle sur des données étiquetées : chaque exemple contient à la fois les variables d'entrée et le résultat attendu. C'est le cas d'une détection de fraude bancaire entraînée sur des transactions déjà classées comme frauduleuses ou légitimes, ou d'une prédiction de prix immobilier à partir de ventes passées.\n\nL'apprentissage non supervisé travaille sur des données sans étiquette. L'objectif est de découvrir une structure cachée : regrouper des clients par comportement d'achat (clustering) ou détecter des transactions anormales sans exemple préalable de fraude (détection d'anomalies).\n\nL'apprentissage par renforcement fait apprendre un agent par essais et erreurs dans un environnement, en maximisant une récompense cumulée. AWS DeepRacer, la voiture autonome miniature utilisée dans les compétitions AWS, illustre ce principe : le véhicule apprend à suivre une piste en étant récompensé quand il reste sur la trajectoire.",
        },
        {
          heading: "Le cycle de vie d'un projet de machine learning",
          body: "Un projet ML suit une séquence d'étapes qui se répète à chaque itération. La collecte et la préparation des données couvrent le nettoyage, la gestion des valeurs manquantes et la création de nouvelles variables utiles (feature engineering). Vient ensuite l'entraînement, où le jeu de données est divisé en un ensemble d'entraînement, un ensemble de validation pour ajuster les hyperparamètres, et un ensemble de test réservé à l'évaluation finale.\n\nL'évaluation compare les prédictions du modèle à la réalité à l'aide de métriques adaptées au problème. Le déploiement expose ensuite le modèle, soit via un point de terminaison temps réel pour des prédictions unitaires, soit via une transformation par lots (batch) pour traiter de gros volumes en différé. Enfin la surveillance détecte la dérive des données (data drift) ou la dégradation de la performance dans le temps, ce qui déclenche un nouveau cycle d'entraînement.",
        },
        {
          heading: "Amazon SageMaker et l'écosystème AWS pour le ML",
          body: "Amazon SageMaker est le service managé central d'AWS pour construire, entraîner et déployer des modèles de machine learning. SageMaker Studio offre un environnement de développement intégré unique pour l'ensemble du cycle de vie. SageMaker Autopilot automatise la sélection d'algorithme et le réglage d'hyperparamètres pour produire un modèle sans écrire de code de bas niveau (AutoML).\n\nSageMaker Data Wrangler simplifie la préparation et la transformation des données directement depuis une interface visuelle. SageMaker Feature Store centralise et partage les variables (features) entre plusieurs équipes et modèles pour éviter de recalculer les mêmes transformations. SageMaker Clarify détecte les biais dans les données et les prédictions, et explique les décisions du modèle. SageMaker Model Monitor surveille en continu un modèle déployé pour détecter une dérive de qualité. SageMaker Ground Truth aide à constituer des jeux de données étiquetés avec l'appui d'annotateurs humains.",
        },
        {
          heading: "Mesurer la performance d'un modèle",
          body: "Pour un problème de classification, la matrice de confusion sert de base à plusieurs métriques : l'exactitude (accuracy) mesure la proportion de prédictions correctes, la précision mesure la fiabilité des prédictions positives, le rappel (recall) mesure la capacité à retrouver tous les cas positifs réels, et le score F1 combine précision et rappel en une seule valeur. L'aire sous la courbe ROC (AUC-ROC) évalue la capacité globale du modèle à distinguer les classes.\n\nPour un problème de régression, on utilise plutôt l'erreur quadratique moyenne (RMSE), l'erreur absolue moyenne (MAE) ou le coefficient de détermination (R²). Le choix de la métrique dépend toujours du contexte métier : pour une détection de fraude, un rappel élevé est souvent prioritaire même au prix d'un peu de précision, car laisser passer une fraude coûte plus cher qu'une fausse alerte à vérifier.",
        },
      ],
    },
    {
      slug: "bases-ia-generative",
      domainId: "fondamentaux-ia-generative",
      title: "Les bases de l'IA générative",
      readMinutes: 10,
      summary:
        "Les modèles de fondation, l'architecture transformer, les paramètres d'inférence, les cas d'usage courants et les limites de l'IA générative, avec un premier aperçu d'Amazon Bedrock.",
      keyPoints: [
        "Un modèle de fondation est entraîné sur d'immenses volumes de données puis adapté à de nombreuses tâches en aval.",
        "L'architecture transformer et son mécanisme d'attention permettent aux grands modèles de langage de traiter le contexte d'un texte entier.",
        "Les paramètres d'inférence (température, top-p, top-k, longueur de sortie) contrôlent la créativité et la longueur des réponses générées.",
        "L'IA générative excite pour la rédaction, le résumé, la génération de code, la conversation et la création d'images, mais reste sujette aux hallucinations.",
        "Amazon Bedrock donne accès via une API unique à plusieurs modèles de fondation, dont la famille Amazon Titan.",
      ],
      sections: [
        {
          heading: "Qu'est-ce qu'un modèle de fondation",
          body: "Un modèle de fondation est un modèle de très grande taille, entraîné sur des volumes massifs de données non étiquetées ou faiblement étiquetées, et conçu pour être réutilisé sur de nombreuses tâches différentes sans devoir repartir de zéro. Cette polyvalence le distingue des modèles de machine learning traditionnels, entraînés spécifiquement pour une seule tâche comme la classification d'e-mails ou la prévision de ventes.\n\nLes grands modèles de langage (LLM, large language models) sont la famille de modèles de fondation la plus connue du grand public, capables de comprendre et de générer du texte. D'autres familles existent pour l'image, comme les modèles de diffusion utilisés par des outils de génération d'images, ou pour l'audio et la vidéo. AWS propose l'accès à plusieurs de ces familles via Amazon Bedrock, sans avoir à gérer d'infrastructure de calcul dédiée.",
        },
        {
          heading: "L'architecture transformer et le vocabulaire de base",
          body: "L'architecture transformer, introduite en 2017, est à la base de la quasi-totalité des grands modèles de langage actuels. Son mécanisme central, l'attention, permet au modèle de pondérer l'importance relative de chaque mot d'un texte par rapport à tous les autres, ce qui lui donne une bonne compréhension du contexte, y compris sur de longs passages.\n\nQuelques termes reviennent constamment à l'examen. Un token est une unité de texte, souvent un mot ou un fragment de mot, que le modèle manipule en interne. Un embedding est une représentation numérique d'un mot, d'une phrase ou d'un document sous forme de vecteur, qui capture le sens de façon à ce que des concepts proches aient des vecteurs proches. La fenêtre de contexte désigne la quantité maximale de texte (mesurée en tokens) que le modèle peut prendre en compte en une seule fois, à la fois en entrée et en sortie.",
        },
        {
          heading: "Contrôler la génération : les paramètres d'inférence",
          body: "Plusieurs paramètres permettent d'ajuster le comportement d'un modèle génératif sans le réentraîner. La température contrôle le niveau d'aléatoire de la génération : une température basse produit des réponses plus déterministes et prévisibles, une température haute produit des réponses plus variées et parfois plus créatives.\n\nLe top-p (nucleus sampling) et le top-k limitent l'ensemble des mots candidats à chaque étape de génération, respectivement en fixant un seuil de probabilité cumulée ou un nombre fixe de candidats. La longueur maximale de sortie borne le nombre de tokens générés dans la réponse. Ces paramètres se règlent au cas par cas selon l'usage : une température basse convient à un résumé factuel, une température plus haute convient à un brainstorming créatif.",
        },
        {
          heading: "Cas d'usage et limites de l'IA générative",
          body: "Les cas d'usage les plus courants de l'IA générative en entreprise sont la rédaction et la reformulation de texte, le résumé de documents longs, la génération et l'explication de code, les agents conversationnels de support client, la recherche augmentée par le langage naturel, et la génération d'images ou de variantes visuelles pour le marketing.\n\nCes modèles restent toutefois limités. Une hallucination désigne une réponse générée avec assurance mais factuellement fausse ou inventée, un risque particulièrement sensible dans des domaines réglementés comme la santé ou la finance. Les modèles peuvent aussi reproduire des biais présents dans leurs données d'entraînement, et leur usage à grande échelle a un coût de calcul et une latence à prendre en compte dès la conception d'une solution.",
        },
        {
          heading: "Amazon Bedrock et la famille Amazon Titan",
          body: "Amazon Bedrock est le service managé d'AWS qui donne accès, via une API unique, à des modèles de fondation de plusieurs fournisseurs (par exemple Anthropic, Meta, Mistral AI, Amazon lui-même) sans avoir à provisionner ni gérer de serveurs de calcul. Bedrock permet de comparer facilement plusieurs modèles sur un même cas d'usage et de personnaliser certains modèles avec ses propres données.\n\nAmazon Titan est la famille de modèles de fondation développée directement par AWS, disponible dans Bedrock. Elle comprend notamment des modèles de génération de texte, des modèles d'embeddings pour la recherche sémantique, et des modèles de génération et d'édition d'images. Retenir qu'Amazon Bedrock est la porte d'entrée unique vers ces modèles, et qu'Amazon Titan est une des familles de modèles disponibles à l'intérieur de Bedrock, est un point fréquemment testé à l'examen.",
        },
      ],
    },
    {
      slug: "applications-modeles-fondation",
      domainId: "applications-modeles-fondation",
      title: "Concevoir des applications avec des modèles de fondation",
      readMinutes: 12,
      summary:
        "Les techniques concrètes pour construire une application autour d'un modèle de fondation : prompt engineering, RAG, fine-tuning, agents, et le panorama des services AWS d'IA appliquée.",
      keyPoints: [
        "Le prompt engineering (zero-shot, few-shot, chain-of-thought) améliore la qualité des réponses sans modifier le modèle lui-même.",
        "Le RAG connecte un modèle à des données à jour et propres à l'entreprise, en réduisant le risque d'hallucination.",
        "Le fine-tuning ajuste les poids d'un modèle sur des données propriétaires quand un prompt seul ne suffit plus.",
        "Les agents Bedrock orchestrent plusieurs étapes de raisonnement et peuvent appeler des outils ou des API externes.",
        "AWS propose des services d'IA prêts à l'emploi (Comprehend, Textract, Rekognition, Transcribe, Polly, Amazon Q) pour des tâches spécifiques sans construire de modèle.",
      ],
      sections: [
        {
          heading: "Le prompt engineering",
          body: "Le prompt engineering consiste à formuler l'instruction envoyée à un modèle de façon à obtenir la meilleure réponse possible, sans changer les poids du modèle. La technique zero-shot demande directement une tâche sans exemple. La technique few-shot fournit quelques exemples de paires question-réponse dans le prompt pour guider le format et le style attendus. Le chain-of-thought (raisonnement en chaîne) invite explicitement le modèle à détailler ses étapes de raisonnement avant de donner sa réponse finale, ce qui améliore la fiabilité sur des tâches de logique ou de calcul.\n\nUn prompt template structure ces instructions de façon réutilisable, avec des variables à remplacer selon le contexte. Bien conçu, le prompt engineering est souvent la première étape à essayer avant d'envisager un fine-tuning, car il ne nécessite ni données d'entraînement supplémentaires ni coût de calcul additionnel.",
        },
        {
          heading: "La génération augmentée par récupération (RAG)",
          body: "Le RAG (retrieval augmented generation) connecte un modèle de fondation à une base de connaissances externe au moment de l'inférence. Plutôt que de compter uniquement sur ce que le modèle a mémorisé pendant son entraînement, le système récupère d'abord les documents les plus pertinents pour la question posée, puis les injecte dans le prompt envoyé au modèle. Cette approche réduit fortement le risque d'hallucination et permet de répondre avec des informations à jour ou propres à l'entreprise, sans réentraîner le modèle.\n\nSur AWS, Amazon Bedrock Knowledge Bases automatise ce pipeline : il découpe les documents, calcule leurs embeddings, les stocke dans un magasin vectoriel (par exemple Amazon OpenSearch Service ou Amazon Aurora avec pgvector) et orchestre la recherche puis l'appel au modèle. Le RAG est généralement la solution à privilégier quand le besoin est de répondre à partir d'une documentation d'entreprise plutôt que de changer le comportement ou le style du modèle.",
        },
        {
          heading: "Le fine-tuning et la personnalisation de modèles",
          body: "Le fine-tuning ajuste les poids d'un modèle de fondation pré-entraîné à partir d'un jeu de données propriétaire, pour spécialiser son comportement sur un domaine, un ton ou un format précis. Il est pertinent quand le prompt engineering et le RAG ne suffisent plus, par exemple pour faire adopter à un modèle le vocabulaire très spécifique d'un secteur ou un format de sortie strict.\n\nAmazon Bedrock permet de personnaliser certains modèles de deux façons : le fine-tuning classique avec des exemples étiquetés, et le continued pre-training qui poursuit l'entraînement du modèle sur un large corpus de texte non étiqueté propre à l'entreprise. Le fine-tuning demande plus de données, de temps et de budget qu'un simple ajustement de prompt, et doit être réservé aux cas où le gain de qualité le justifie.",
        },
        {
          heading: "Les agents et l'orchestration d'outils",
          body: "Un agent d'IA générative va au-delà d'une simple question-réponse : il décompose une tâche complexe en plusieurs étapes, décide quand appeler un outil externe (une API, une base de données, une fonction de calcul), puis assemble les résultats pour produire une réponse finale cohérente. Cette capacité à appeler des outils est souvent désignée par function calling ou tool use.\n\nAmazon Bedrock Agents automatise cette orchestration : l'agent interprète la demande de l'utilisateur, planifie les actions nécessaires, invoque des fonctions AWS Lambda pour exécuter des tâches concrètes, et peut interroger une base de connaissances via RAG au passage. Un exemple typique est un agent de support client capable de consulter le statut d'une commande dans une base de données, puis de rédiger une réponse personnalisée au client.",
        },
        {
          heading: "Le panorama des services AWS d'IA appliquée",
          body: "AWS propose une gamme de services d'IA managés qui n'exigent pas de construire ni d'entraîner de modèle. Amazon Comprehend extrait des informations d'un texte : sentiment, entités nommées, expressions clés, langue détectée. Amazon Textract extrait du texte structuré et des données de formulaires ou de tableaux depuis des documents scannés. Amazon Rekognition analyse des images et des vidéos pour détecter des objets, des visages ou du texte incrusté. Amazon Transcribe convertit de la parole en texte, et Amazon Polly fait l'inverse en convertissant du texte en parole naturelle.\n\nAmazon Q décline cette logique en assistants génératifs prêts à l'emploi : Amazon Q Business répond aux questions des employés en s'appuyant sur les données internes de l'entreprise, et Amazon Q Developer aide les développeurs à écrire, comprendre et migrer du code directement dans leur environnement de développement. Pour choisir entre un service prêt à l'emploi et une solution bâtie sur Bedrock, le critère principal est le niveau de personnalisation requis : un besoin standard se couvre avec un service managé, un besoin sur mesure justifie de construire sur des modèles de fondation.",
        },
      ],
    },
    {
      slug: "ia-responsable-principes",
      domainId: "ia-responsable",
      title: "IA responsable : principes et mise en oeuvre",
      readMinutes: 8,
      summary:
        "Les piliers de l'IA responsable défendus par AWS, les sources de biais dans un système d'IA, et les outils concrets (SageMaker Clarify, Bedrock Guardrails, AI Service Cards) pour les limiter.",
      keyPoints: [
        "AWS structure l'IA responsable autour de huit dimensions : équité, explicabilité, confidentialité et sécurité, robustesse, gouvernance, transparence, sécurité, durabilité.",
        "Les biais peuvent venir des données d'entraînement, du choix des variables ou de la façon dont le modèle est évalué.",
        "SageMaker Clarify détecte les biais avant et après l'entraînement, et produit des explications sur les décisions d'un modèle.",
        "Amazon Bedrock Guardrails filtre les contenus indésirables en entrée et en sortie d'un modèle génératif.",
        "Les AWS AI Service Cards documentent publiquement les cas d'usage prévus, les limites et les considérations de performance de chaque modèle ou service d'IA.",
      ],
      sections: [
        {
          heading: "Les piliers de l'IA responsable selon AWS",
          body: "AWS structure sa vision de l'IA responsable autour de plusieurs dimensions complémentaires. L'équité vise à limiter les traitements défavorables systématiques envers certains groupes de personnes. L'explicabilité cherche à rendre compréhensibles les décisions d'un modèle, en particulier dans des contextes à fort enjeu comme le crédit ou le recrutement. La robustesse garantit qu'un système continue à fonctionner correctement face à des données inhabituelles ou à des tentatives de manipulation.\n\nLa gouvernance encadre les processus de décision, de validation et de responsabilité autour d'un système d'IA tout au long de son cycle de vie. La transparence consiste à documenter clairement les capacités et les limites d'un système pour ses utilisateurs. La confidentialité et la sécurité protègent les données utilisées par le système, et la durabilité prend en compte l'impact environnemental des ressources de calcul mobilisées. Ces dimensions ne s'opposent pas à la performance d'un modèle, elles font partie intégrante d'un déploiement réussi et pérenne.",
        },
        {
          heading: "D'où viennent les biais dans un système d'IA",
          body: "Un biais algorithmique désigne un écart de traitement systématique et non désiré entre différents groupes, qui peut apparaître à plusieurs étapes du cycle de vie d'un modèle. Le biais peut déjà exister dans les données d'entraînement, si celles-ci reflètent des inégalités historiques ou sous-représentent certains groupes. Il peut aussi venir du choix des variables utilisées par le modèle, si une variable corrèle indirectement avec une caractéristique sensible comme l'origine géographique ou le genre.\n\nLe biais peut enfin apparaître lors de l'évaluation, si les métriques choisies ne mesurent pas la performance séparément pour chaque sous-groupe concerné. Un modèle peut afficher une excellente précision globale tout en se trompant beaucoup plus souvent pour un sous-groupe particulier, un phénomène invisible si l'on ne regarde que la métrique agrégée.",
        },
        {
          heading: "Les outils AWS pour détecter et limiter les biais",
          body: "Amazon SageMaker Clarify s'intègre à plusieurs étapes du cycle de vie ML. Avant l'entraînement, il mesure des déséquilibres statistiques dans le jeu de données, par exemple une sous-représentation d'un groupe. Après l'entraînement, il calcule des métriques de biais sur les prédictions elles-mêmes et fournit des explications d'importance des variables, notamment via la méthode SHAP, pour comprendre quels facteurs pèsent le plus dans une décision.\n\nPour l'IA générative, Amazon Bedrock Guardrails permet de définir des règles de filtrage appliquées en entrée comme en sortie d'un modèle : blocage de sujets sensibles, filtrage de contenu toxique ou violent, masquage d'informations personnelles identifiables, et détection de tentatives de contournement des instructions du système (prompt injection). Ces garde-fous s'appliquent indépendamment du modèle sous-jacent choisi dans Bedrock.",
        },
        {
          heading: "Documenter la transparence : les AWS AI Service Cards",
          body: "Les AWS AI Service Cards sont des fiches publiques publiées par AWS pour certains services et modèles d'IA. Chaque fiche décrit les cas d'usage prévus, les cas d'usage déconseillés, les limites connues du système, ainsi que les considérations de performance et d'équité mesurées par AWS lui-même. Elles s'inspirent de la pratique des model cards popularisée dans la recherche en IA.\n\nCes fiches sont un outil concret de transparence envers les équipes qui construisent une solution sur AWS : elles permettent de vérifier, avant de choisir un service, qu'il correspond bien au cas d'usage envisagé et d'anticiper ses limites plutôt que de les découvrir en production. À l'examen, retenir qu'une AI Service Card documente un service existant, elle ne remplace pas une évaluation propre à l'application finale construite par l'entreprise.",
        },
      ],
    },
    {
      slug: "securite-conformite-gouvernance-ia",
      domainId: "securite-conformite-gouvernance",
      title: "Sécuriser et gouverner les solutions d'IA",
      readMinutes: 9,
      summary:
        "La protection des données utilisées par une solution d'IA sur AWS, les obligations de conformité réglementaire, et les mécanismes de gouvernance qui encadrent le cycle de vie d'un modèle.",
      keyPoints: [
        "Le chiffrement au repos et en transit, combiné à IAM et aux VPC, forme la base de la sécurité d'une solution d'IA sur AWS.",
        "AWS applique un modèle de responsabilité partagée : AWS sécurise l'infrastructure, le client reste responsable de la configuration et des données.",
        "Amazon Macie détecte automatiquement les données sensibles ou personnelles stockées dans Amazon S3.",
        "AWS CloudTrail et AWS Config permettent de tracer les actions effectuées sur un système d'IA et de vérifier sa conformité dans la durée.",
        "La conformité réglementaire (RGPD, cadres sectoriels) doit être pensée dès la conception d'une solution d'IA, pas ajoutée après coup.",
      ],
      sections: [
        {
          heading: "Protéger les données utilisées par un système d'IA",
          body: "Les données d'entraînement, les prompts envoyés à un modèle et les réponses générées sont des données sensibles à protéger comme n'importe quelle autre donnée d'entreprise. Le chiffrement au repos protège les données stockées, par exemple dans Amazon S3 ou dans une base vectorielle, à l'aide d'AWS Key Management Service (KMS) pour gérer les clés de chiffrement. Le chiffrement en transit protège les données lors de leur transmission entre services, via TLS.\n\nAWS Identity and Access Management (IAM) contrôle précisément qui peut invoquer un modèle, consulter des données d'entraînement ou modifier une configuration, en appliquant le principe du moindre privilège. Un VPC (Virtual Private Cloud) permet d'isoler réseau les ressources de calcul utilisées par une solution d'IA, en évitant toute exposition directe à internet quand ce n'est pas nécessaire.",
        },
        {
          heading: "Le modèle de responsabilité partagée",
          body: "AWS applique le modèle de responsabilité partagée à ses services d'IA comme au reste de sa plateforme. AWS est responsable de la sécurité de l'infrastructure sous-jacente : les centres de données, le matériel, le réseau et la couche de virtualisation. Le client reste responsable de la sécurité dans le cloud : la configuration des accès IAM, le chiffrement des données qu'il y stocke, la classification de ses données sensibles, et la conformité de son usage aux réglementations qui s'appliquent à son secteur.\n\nCette distinction est régulièrement testée à l'examen sous forme de mise en situation : un client qui laisse un compartiment S3 public engage sa propre responsabilité, même si l'infrastructure AWS elle-même reste sécurisée.",
        },
        {
          heading: "Détecter les données sensibles et tracer les actions",
          body: "Amazon Macie utilise le machine learning pour scanner automatiquement les données stockées dans Amazon S3 et identifier des informations sensibles ou personnellement identifiables, comme des numéros de carte bancaire ou des données de santé. Ce type d'outil est particulièrement utile avant d'utiliser un jeu de données pour entraîner ou personnaliser un modèle, afin de vérifier qu'aucune donnée sensible non anonymisée ne s'y trouve.\n\nAWS CloudTrail enregistre l'historique des appels effectués sur les services AWS, ce qui permet de savoir qui a invoqué un modèle, modifié une configuration Bedrock ou accédé à un jeu de données, et à quel moment. AWS Config évalue en continu la conformité de la configuration des ressources par rapport à des règles définies, par exemple pour vérifier qu'un compartiment S3 contenant des données d'entraînement reste bien privé.",
        },
        {
          heading: "Conformité réglementaire et gouvernance du cycle de vie",
          body: "Une solution d'IA qui traite des données personnelles doit respecter les cadres réglementaires applicables, comme le RGPD en Europe, ainsi que d'éventuelles règles sectorielles plus strictes dans la santé ou la finance. Ces obligations concernent aussi bien les données d'entraînement que les données envoyées en inférence, et doivent être anticipées dès la conception de la solution plutôt que traitées après coup.\n\nLa gouvernance d'un système d'IA couvre l'ensemble de son cycle de vie : la traçabilité des versions de modèle utilisées, la documentation des décisions de conception, la définition claire des rôles et responsabilités entre les équipes data, sécurité et métier, et la mise en place de processus de revue avant chaque mise en production. Amazon Bedrock Guardrails et les AWS AI Service Cards, déjà vus dans le domaine de l'IA responsable, participent aussi à cette gouvernance en documentant et en encadrant le comportement des modèles utilisés.",
        },
      ],
    },
  ],
  glossary: [
    {
      term: "Intelligence artificielle (IA)",
      definition:
        "Ensemble des techniques permettant à un système informatique d'imiter des capacités cognitives humaines comme le raisonnement ou la perception.",
      domainId: "fondamentaux-ia-ml",
    },
    {
      term: "Machine learning (ML)",
      definition:
        "Sous-catégorie de l'IA où un système apprend des motifs à partir de données plutôt que de suivre des règles codées manuellement.",
      domainId: "fondamentaux-ia-ml",
    },
    {
      term: "Deep learning",
      definition:
        "Sous-catégorie du machine learning reposant sur des réseaux de neurones à plusieurs couches, adaptée aux données complexes comme l'image ou le texte.",
      domainId: "fondamentaux-ia-ml",
    },
    {
      term: "Apprentissage supervisé",
      definition:
        "Type d'apprentissage où le modèle est entraîné sur des données étiquetées contenant à la fois les entrées et le résultat attendu.",
      domainId: "fondamentaux-ia-ml",
    },
    {
      term: "Apprentissage non supervisé",
      definition:
        "Type d'apprentissage où le modèle découvre une structure cachée dans des données sans étiquette, par exemple via un regroupement (clustering).",
      domainId: "fondamentaux-ia-ml",
    },
    {
      term: "Apprentissage par renforcement",
      definition:
        "Type d'apprentissage où un agent apprend par essais et erreurs dans un environnement, en maximisant une récompense cumulée.",
      domainId: "fondamentaux-ia-ml",
    },
    {
      term: "Amazon SageMaker",
      definition:
        "Service managé AWS regroupant les outils nécessaires pour construire, entraîner, évaluer et déployer des modèles de machine learning.",
      domainId: "fondamentaux-ia-ml",
    },
    {
      term: "Modèle de fondation",
      definition:
        "Modèle de très grande taille entraîné sur des volumes massifs de données et réutilisable sur de nombreuses tâches sans être réentraîné à chaque fois.",
      domainId: "fondamentaux-ia-generative",
    },
    {
      term: "IA générative",
      definition:
        "Branche de l'IA dont les modèles produisent du contenu nouveau (texte, image, code, audio) plutôt que de simplement classifier ou prédire une valeur.",
      domainId: "fondamentaux-ia-generative",
    },
    {
      term: "Grand modèle de langage (LLM)",
      definition:
        "Modèle de fondation entraîné sur de vastes corpus de texte, capable de comprendre et de générer du langage naturel.",
      domainId: "fondamentaux-ia-generative",
    },
    {
      term: "Transformer",
      definition:
        "Architecture de réseau de neurones, basée sur un mécanisme d'attention, à l'origine de la quasi-totalité des grands modèles de langage actuels.",
      domainId: "fondamentaux-ia-generative",
    },
    {
      term: "Token",
      definition:
        "Unité de texte, souvent un mot ou un fragment de mot, que manipule un modèle de langage en interne.",
      domainId: "fondamentaux-ia-generative",
    },
    {
      term: "Embedding",
      definition:
        "Représentation numérique d'un mot, d'une phrase ou d'un document sous forme de vecteur, qui rapproche les concepts de sens proche.",
      domainId: "fondamentaux-ia-generative",
    },
    {
      term: "Amazon Bedrock",
      definition:
        "Service managé AWS donnant accès via une API unique à des modèles de fondation de plusieurs fournisseurs, sans gestion d'infrastructure.",
      domainId: "fondamentaux-ia-generative",
    },
    {
      term: "Amazon Titan",
      definition:
        "Famille de modèles de fondation développée par AWS, disponible dans Amazon Bedrock, couvrant le texte, les embeddings et l'image.",
      domainId: "fondamentaux-ia-generative",
    },
    {
      term: "Prompt engineering",
      definition:
        "Ensemble de techniques pour formuler l'instruction envoyée à un modèle afin d'obtenir la meilleure réponse possible, sans modifier ses poids.",
      domainId: "applications-modeles-fondation",
    },
    {
      term: "RAG (génération augmentée par récupération)",
      definition:
        "Technique qui récupère des documents pertinents dans une base de connaissances et les injecte dans le prompt avant de générer une réponse.",
      domainId: "applications-modeles-fondation",
    },
    {
      term: "Fine-tuning",
      definition:
        "Ajustement des poids d'un modèle de fondation pré-entraîné à partir d'un jeu de données propriétaire, pour spécialiser son comportement.",
      domainId: "applications-modeles-fondation",
    },
    {
      term: "Hallucination",
      definition:
        "Réponse générée par un modèle avec assurance mais factuellement fausse ou inventée.",
      domainId: "applications-modeles-fondation",
    },
    {
      term: "Amazon Q",
      definition:
        "Famille d'assistants génératifs prêts à l'emploi d'AWS, déclinée pour les employés (Q Business) et pour les développeurs (Q Developer).",
      domainId: "applications-modeles-fondation",
    },
    {
      term: "Amazon Comprehend",
      definition:
        "Service AWS de traitement du langage naturel qui extrait le sentiment, les entités nommées et les expressions clés d'un texte.",
      domainId: "applications-modeles-fondation",
    },
    {
      term: "Amazon Rekognition",
      definition:
        "Service AWS d'analyse d'images et de vidéos qui détecte des objets, des visages ou du texte incrusté.",
      domainId: "applications-modeles-fondation",
    },
    {
      term: "Biais algorithmique",
      definition:
        "Écart de traitement systématique et non désiré entre différents groupes, pouvant apparaître dans les données, les variables ou l'évaluation d'un modèle.",
      domainId: "ia-responsable",
    },
    {
      term: "Amazon Bedrock Guardrails",
      definition:
        "Fonctionnalité de Bedrock qui filtre les contenus indésirables en entrée et en sortie d'un modèle génératif, selon des règles configurables.",
      domainId: "ia-responsable",
    },
    {
      term: "Gouvernance de l'IA",
      definition:
        "Ensemble des processus qui encadrent la traçabilité, la validation et la responsabilité d'un système d'IA tout au long de son cycle de vie.",
      domainId: "securite-conformite-gouvernance",
    },
  ],
  quizBank: [
    {
      id: "aws-aip-q01",
      domainId: "fondamentaux-ia-ml",
      difficulty: "facile",
      question:
        "Une entreprise veut regrouper ses clients en segments similaires sans disposer d'étiquettes préexistantes sur ces segments. Quel type d'apprentissage correspond le mieux à ce besoin ?",
      options: [
        "Apprentissage supervisé",
        "Apprentissage non supervisé",
        "Apprentissage par renforcement",
        "Apprentissage semi-supervisé profond",
      ],
      correctIndex: 1,
      explanation:
        "Le clustering de clients sans étiquette préexistante est un cas typique d'apprentissage non supervisé, qui découvre une structure cachée dans des données non étiquetées.",
    },
    {
      id: "aws-aip-q02",
      domainId: "fondamentaux-ia-ml",
      difficulty: "moyen",
      question:
        "Une équipe entraîne un modèle de détection de fraude bancaire. Le taux de fraude réel est très faible (moins de 1 % des transactions). Quelle métrique est la plus pertinente pour évaluer la capacité du modèle à ne pas manquer de fraude réelle ?",
      options: [
        "L'exactitude globale (accuracy)",
        "Le rappel (recall)",
        "Le coefficient de détermination (R²)",
        "L'erreur quadratique moyenne (RMSE)",
      ],
      correctIndex: 1,
      explanation:
        "Sur un jeu de données très déséquilibré, l'exactitude globale est trompeuse. Le rappel mesure la proportion de fraudes réelles correctement détectées, ce qui est l'enjeu principal ici.",
    },
    {
      id: "aws-aip-q03",
      domainId: "fondamentaux-ia-ml",
      difficulty: "facile",
      question:
        "Quel service AWS permet de constituer un jeu de données étiqueté avec l'aide d'annotateurs humains ?",
      options: [
        "Amazon SageMaker Ground Truth",
        "Amazon SageMaker Clarify",
        "Amazon SageMaker Feature Store",
        "Amazon SageMaker Model Monitor",
      ],
      correctIndex: 0,
      explanation:
        "Amazon SageMaker Ground Truth aide à créer des jeux de données étiquetés en s'appuyant sur des annotateurs humains ou une automatisation assistée.",
    },
    {
      id: "aws-aip-q04",
      domainId: "fondamentaux-ia-ml",
      difficulty: "moyen",
      question:
        "Une équipe data veut automatiser le choix d'algorithme et le réglage des hyperparamètres pour produire rapidement un modèle sans écrire de code de bas niveau. Quel outil SageMaker répond à ce besoin ?",
      options: [
        "SageMaker Data Wrangler",
        "SageMaker Autopilot",
        "SageMaker Studio",
        "SageMaker Feature Store",
      ],
      correctIndex: 1,
      explanation:
        "SageMaker Autopilot automatise la sélection d'algorithme et le réglage d'hyperparamètres, c'est la brique AutoML de SageMaker.",
    },
    {
      id: "aws-aip-q05",
      domainId: "fondamentaux-ia-ml",
      difficulty: "difficile",
      question:
        "Après plusieurs mois en production, un modèle de scoring voit sa performance se dégrader alors que son code n'a pas changé. Quelle explication est la plus probable ?",
      options: [
        "Une dérive des données (data drift) entre les données d'entraînement et les données récentes",
        "Un changement de la fenêtre de contexte du modèle",
        "Une baisse de la température d'inférence",
        "Une modification du mécanisme d'attention du modèle",
      ],
      correctIndex: 0,
      explanation:
        "Une dégradation progressive de la performance sans changement de code est le symptôme typique d'une dérive des données, quand la distribution des données réelles s'éloigne de celle utilisée à l'entraînement.",
    },
    {
      id: "aws-aip-q06",
      domainId: "fondamentaux-ia-ml",
      difficulty: "facile",
      question:
        "Quelle affirmation décrit correctement la relation entre IA, machine learning et deep learning ?",
      options: [
        "Le deep learning est une catégorie plus large qui contient le machine learning",
        "Le machine learning est une sous-catégorie de l'IA, et le deep learning est une sous-catégorie du machine learning",
        "L'IA, le machine learning et le deep learning désignent exactement la même chose",
        "Le deep learning et l'IA générative sont deux termes strictement interchangeables",
      ],
      correctIndex: 1,
      explanation:
        "L'IA est la catégorie la plus large, le machine learning en est une sous-catégorie, et le deep learning est une sous-catégorie du machine learning basée sur des réseaux de neurones profonds.",
    },
    {
      id: "aws-aip-q07",
      domainId: "fondamentaux-ia-ml",
      difficulty: "moyen",
      question:
        "Quel outil SageMaker centralise et partage des variables (features) déjà calculées entre plusieurs équipes et plusieurs modèles ?",
      options: [
        "SageMaker Feature Store",
        "SageMaker Clarify",
        "SageMaker Ground Truth",
        "SageMaker Autopilot",
      ],
      correctIndex: 0,
      explanation:
        "SageMaker Feature Store centralise les features calculées pour éviter que chaque équipe ne recalcule les mêmes transformations de données.",
    },
    {
      id: "aws-aip-q08",
      domainId: "fondamentaux-ia-ml",
      difficulty: "difficile",
      question:
        "Une entreprise veut prédire le prix de vente d'un bien immobilier à partir de sa surface, de sa localisation et de son année de construction, en s'appuyant sur des ventes passées déjà connues. Quel type de problème de machine learning correspond le mieux à ce cas ?",
      options: [
        "Un problème de classification non supervisée",
        "Un problème de régression supervisée",
        "Un problème d'apprentissage par renforcement",
        "Un problème de génération de texte",
      ],
      correctIndex: 1,
      explanation:
        "Prédire une valeur numérique continue (le prix) à partir de données étiquetées (des ventes passées avec leur prix connu) est un problème de régression supervisée.",
    },
    {
      id: "aws-aip-q09",
      domainId: "fondamentaux-ia-generative",
      difficulty: "facile",
      question: "Qu'est-ce qu'un modèle de fondation ?",
      options: [
        "Un modèle entraîné sur une seule tâche précise et non réutilisable ailleurs",
        "Un modèle de très grande taille entraîné sur d'immenses volumes de données et réutilisable sur de nombreuses tâches",
        "Un algorithme de clustering utilisé uniquement en apprentissage non supervisé",
        "Un service AWS de stockage de données d'entraînement",
      ],
      correctIndex: 1,
      explanation:
        "Un modèle de fondation est entraîné sur de vastes volumes de données et conçu pour être adapté à de nombreuses tâches en aval, contrairement à un modèle spécialisé sur une seule tâche.",
    },
    {
      id: "aws-aip-q10",
      domainId: "fondamentaux-ia-generative",
      difficulty: "moyen",
      question:
        "Un utilisateur souhaite obtenir des réponses très créatives et variées d'un modèle génératif pour une session de brainstorming. Quel réglage de paramètre d'inférence favorise ce résultat ?",
      options: [
        "Une température basse",
        "Une température élevée",
        "Une fenêtre de contexte réduite",
        "Un nombre de tokens de sortie égal à zéro",
      ],
      correctIndex: 1,
      explanation:
        "Une température élevée augmente l'aléatoire de la génération et produit des réponses plus variées et créatives, adaptées à un brainstorming.",
    },
    {
      id: "aws-aip-q11",
      domainId: "fondamentaux-ia-generative",
      difficulty: "facile",
      question: "Quel service AWS donne accès via une API unique à des modèles de fondation de plusieurs fournisseurs ?",
      options: [
        "Amazon Bedrock",
        "Amazon Comprehend",
        "Amazon Textract",
        "Amazon Macie",
      ],
      correctIndex: 0,
      explanation:
        "Amazon Bedrock est le service managé qui centralise l'accès à des modèles de fondation de plusieurs fournisseurs via une API unique, sans gestion d'infrastructure.",
    },
    {
      id: "aws-aip-q12",
      domainId: "fondamentaux-ia-generative",
      difficulty: "moyen",
      question:
        "Dans l'architecture transformer, quel mécanisme permet au modèle de pondérer l'importance relative de chaque mot d'un texte par rapport aux autres ?",
      options: [
        "Le mécanisme d'attention",
        "Le top-k sampling",
        "Le fine-tuning",
        "Le prompt template",
      ],
      correctIndex: 0,
      explanation:
        "Le mécanisme d'attention est au coeur de l'architecture transformer : il permet au modèle de pondérer l'importance de chaque mot par rapport aux autres dans le contexte.",
    },
    {
      id: "aws-aip-q13",
      domainId: "fondamentaux-ia-generative",
      difficulty: "difficile",
      question:
        "Amazon Titan et Amazon Bedrock apparaissent souvent ensemble dans les questions d'examen. Laquelle des affirmations suivantes décrit correctement leur relation ?",
      options: [
        "Amazon Titan est le service qui héberge Amazon Bedrock",
        "Amazon Bedrock est une des familles de modèles disponibles à l'intérieur d'Amazon Titan",
        "Amazon Titan est une famille de modèles de fondation développée par AWS et disponible dans Amazon Bedrock",
        "Amazon Titan et Amazon Bedrock désignent exactement le même service",
      ],
      correctIndex: 2,
      explanation:
        "Amazon Bedrock est le service qui donne accès à plusieurs familles de modèles de fondation, dont Amazon Titan, la famille développée par AWS lui-même.",
    },
    {
      id: "aws-aip-q14",
      domainId: "fondamentaux-ia-generative",
      difficulty: "facile",
      question: "Quel terme désigne une unité de texte, souvent un mot ou un fragment de mot, manipulée en interne par un modèle de langage ?",
      options: ["Un embedding", "Un token", "Un guardrail", "Un endpoint"],
      correctIndex: 1,
      explanation:
        "Un token est l'unité de texte de base que traite un modèle de langage, qu'il s'agisse d'un mot entier ou d'un fragment de mot.",
    },
    {
      id: "aws-aip-q15",
      domainId: "fondamentaux-ia-generative",
      difficulty: "moyen",
      question:
        "Un assistant conversationnel donne régulièrement des réponses fausses présentées avec beaucoup d'assurance sur des faits qu'il n'a jamais vus dans ses données d'entraînement. Comment nomme-t-on ce phénomène ?",
      options: ["Une dérive de données", "Une hallucination", "Un biais algorithmique", "Un fine-tuning excessif"],
      correctIndex: 1,
      explanation:
        "Une hallucination désigne une réponse générée avec assurance par un modèle mais factuellement fausse ou inventée, un risque caractéristique des modèles génératifs.",
    },
    {
      id: "aws-aip-q16",
      domainId: "fondamentaux-ia-generative",
      difficulty: "difficile",
      question:
        "Quelle est la différence principale entre un modèle de machine learning traditionnel et un modèle de fondation utilisé en IA générative ?",
      options: [
        "Un modèle de fondation ne peut traiter que des données numériques, contrairement à un modèle traditionnel",
        "Un modèle traditionnel est généralement spécialisé sur une seule tâche, tandis qu'un modèle de fondation est réutilisable sur de nombreuses tâches",
        "Un modèle de fondation n'a jamais besoin de données d'entraînement",
        "Un modèle traditionnel utilise toujours une architecture transformer, contrairement à un modèle de fondation",
      ],
      correctIndex: 1,
      explanation:
        "Un modèle de machine learning traditionnel est entraîné pour une tâche précise, alors qu'un modèle de fondation, entraîné sur d'immenses volumes de données, est conçu pour être réutilisé sur de multiples tâches.",
    },
    {
      id: "aws-aip-q17",
      domainId: "applications-modeles-fondation",
      difficulty: "moyen",
      question:
        "Une entreprise veut que son assistant réponde aux questions des employés en s'appuyant sur sa documentation interne à jour, sans réentraîner le modèle et en minimisant le risque d'hallucination. Quelle approche est la plus adaptée ?",
      options: [
        "Le fine-tuning complet du modèle",
        "Le RAG (génération augmentée par récupération)",
        "L'augmentation de la température d'inférence",
        "Le continued pre-training sur un corpus généraliste",
      ],
      correctIndex: 1,
      explanation:
        "Le RAG connecte le modèle à la documentation interne au moment de la question, ce qui permet de répondre avec des informations à jour sans réentraîner le modèle et en réduisant le risque d'hallucination.",
    },
    {
      id: "aws-aip-q18",
      domainId: "applications-modeles-fondation",
      difficulty: "facile",
      question: "Quel service AWS extrait automatiquement du texte structuré et des données de tableaux depuis des documents scannés ?",
      options: ["Amazon Rekognition", "Amazon Textract", "Amazon Polly", "Amazon Transcribe"],
      correctIndex: 1,
      explanation:
        "Amazon Textract est le service dédié à l'extraction de texte structuré, de formulaires et de tableaux depuis des documents scannés.",
    },
    {
      id: "aws-aip-q19",
      domainId: "applications-modeles-fondation",
      difficulty: "difficile",
      question:
        "Un fournisseur d'assistance technique veut un agent capable de consulter le statut d'une commande dans une base de données interne, puis de rédiger une réponse personnalisée au client. Quel service Bedrock correspond le mieux à ce besoin ?",
      options: ["Amazon Bedrock Knowledge Bases seul", "Amazon Bedrock Guardrails seul", "Amazon Bedrock Agents", "Amazon Bedrock Model Evaluation"],
      correctIndex: 2,
      explanation:
        "Amazon Bedrock Agents orchestre plusieurs étapes de raisonnement, peut appeler des fonctions Lambda pour consulter une base de données, puis générer la réponse finale, ce qui correspond exactement à ce scénario.",
    },
    {
      id: "aws-aip-q20",
      domainId: "applications-modeles-fondation",
      difficulty: "moyen",
      question:
        "Quelle technique de prompt engineering consiste à fournir quelques exemples de paires question-réponse directement dans le prompt pour guider le format attendu ?",
      options: ["Le zero-shot prompting", "Le few-shot prompting", "Le chain-of-thought prompting", "Le fine-tuning"],
      correctIndex: 1,
      explanation:
        "Le few-shot prompting fournit quelques exemples de paires question-réponse dans le prompt, ce qui guide le modèle sur le format et le style attendus sans le réentraîner.",
    },
    {
      id: "aws-aip-q21",
      domainId: "applications-modeles-fondation",
      difficulty: "facile",
      question: "Quel service AWS aide les développeurs à écrire, comprendre et migrer du code directement dans leur environnement de développement ?",
      options: ["Amazon Q Business", "Amazon Q Developer", "Amazon Comprehend", "Amazon Textract"],
      correctIndex: 1,
      explanation:
        "Amazon Q Developer est l'assistant génératif d'AWS dédié aux développeurs, intégré dans les environnements de développement pour aider à écrire et migrer du code.",
    },
    {
      id: "aws-aip-q22",
      domainId: "applications-modeles-fondation",
      difficulty: "difficile",
      question:
        "Une équipe veut qu'un modèle adopte durablement le vocabulaire très spécifique d'un secteur réglementé et un format de sortie strict, après avoir déjà essayé le prompt engineering et le RAG sans résultat satisfaisant. Quelle est la prochaine étape la plus logique ?",
      options: [
        "Augmenter uniquement la température d'inférence",
        "Réduire la fenêtre de contexte du modèle",
        "Envisager un fine-tuning du modèle sur des données propriétaires",
        "Désactiver les guardrails du modèle",
      ],
      correctIndex: 2,
      explanation:
        "Quand le prompt engineering et le RAG ne suffisent plus à obtenir le comportement souhaité, le fine-tuning permet d'ajuster durablement les poids du modèle sur des données propriétaires spécifiques au domaine.",
    },
    {
      id: "aws-aip-q23",
      domainId: "applications-modeles-fondation",
      difficulty: "moyen",
      question:
        "Quel composant technique stocke généralement les embeddings des documents dans une architecture RAG sur AWS ?",
      options: [
        "Un magasin vectoriel comme Amazon OpenSearch Service",
        "Amazon Polly",
        "AWS CloudTrail",
        "Amazon Rekognition",
      ],
      correctIndex: 0,
      explanation:
        "Dans une architecture RAG, les embeddings des documents sont stockés dans un magasin vectoriel, par exemple Amazon OpenSearch Service ou Amazon Aurora avec pgvector, pour permettre une recherche de similarité rapide.",
    },
    {
      id: "aws-aip-q24",
      domainId: "applications-modeles-fondation",
      difficulty: "facile",
      question: "Quel service AWS convertit du texte en parole naturelle ?",
      options: ["Amazon Transcribe", "Amazon Polly", "Amazon Comprehend", "Amazon Lex"],
      correctIndex: 1,
      explanation:
        "Amazon Polly convertit du texte en parole naturelle, tandis qu'Amazon Transcribe fait l'inverse en convertissant de la parole en texte.",
    },
    {
      id: "aws-aip-q25",
      domainId: "ia-responsable",
      difficulty: "facile",
      question: "Quel outil AWS détecte les biais dans un jeu de données avant l'entraînement et dans les prédictions après l'entraînement ?",
      options: ["Amazon SageMaker Clarify", "Amazon SageMaker Autopilot", "Amazon Macie", "AWS Config"],
      correctIndex: 0,
      explanation:
        "Amazon SageMaker Clarify mesure les déséquilibres statistiques avant l'entraînement et calcule des métriques de biais ainsi que des explications après l'entraînement.",
    },
    {
      id: "aws-aip-q26",
      domainId: "ia-responsable",
      difficulty: "moyen",
      question:
        "Un modèle de scoring de crédit affiche une excellente exactitude globale, mais se trompe beaucoup plus souvent pour un sous-groupe démographique particulier. Quel pilier de l'IA responsable est directement concerné ?",
      options: ["La durabilité", "L'équité", "La robustesse face aux attaques", "La fenêtre de contexte"],
      correctIndex: 1,
      explanation:
        "Un écart de performance systématique entre sous-groupes est un problème d'équité, même si la métrique globale du modèle semble bonne.",
    },
    {
      id: "aws-aip-q27",
      domainId: "ia-responsable",
      difficulty: "facile",
      question: "Quelle fonctionnalité d'Amazon Bedrock permet de filtrer les contenus indésirables en entrée et en sortie d'un modèle génératif ?",
      options: ["Amazon Bedrock Guardrails", "Amazon Bedrock Knowledge Bases", "Amazon Bedrock Agents", "Amazon Bedrock Model Evaluation"],
      correctIndex: 0,
      explanation:
        "Amazon Bedrock Guardrails applique des règles de filtrage configurables sur les entrées et les sorties d'un modèle génératif, indépendamment du modèle sous-jacent choisi.",
    },
    {
      id: "aws-aip-q28",
      domainId: "ia-responsable",
      difficulty: "difficile",
      question:
        "À quelle étape du cycle de vie d'un modèle un biais peut-il apparaître, selon le contenu du cours ?",
      options: [
        "Uniquement dans les données d'entraînement",
        "Uniquement lors du déploiement en production",
        "Dans les données d'entraînement, dans le choix des variables, ou dans l'évaluation du modèle",
        "Uniquement dans le choix de la température d'inférence",
      ],
      correctIndex: 2,
      explanation:
        "Un biais peut apparaître à plusieurs étapes : dans les données d'entraînement elles-mêmes, dans le choix des variables utilisées par le modèle, ou dans la façon dont le modèle est évalué.",
    },
    {
      id: "aws-aip-q29",
      domainId: "ia-responsable",
      difficulty: "moyen",
      question: "À quoi servent les AWS AI Service Cards ?",
      options: [
        "À chiffrer les données d'entraînement d'un modèle",
        "À documenter publiquement les cas d'usage prévus, les limites et les considérations de performance d'un service ou modèle d'IA",
        "À automatiser le déploiement d'un modèle sur SageMaker",
        "À remplacer l'évaluation propre à l'application finale construite par l'entreprise",
      ],
      correctIndex: 1,
      explanation:
        "Les AWS AI Service Cards documentent publiquement les cas d'usage prévus et déconseillés, les limites connues et les considérations de performance et d'équité d'un service ou modèle, sans remplacer l'évaluation propre à chaque application.",
    },
    {
      id: "aws-aip-q30",
      domainId: "ia-responsable",
      difficulty: "facile",
      question: "Quel pilier de l'IA responsable vise à rendre compréhensibles les décisions d'un modèle, en particulier dans des contextes à fort enjeu ?",
      options: ["La durabilité", "L'explicabilité", "La sécurité réseau", "La latence"],
      correctIndex: 1,
      explanation:
        "L'explicabilité cherche à rendre compréhensibles les décisions d'un modèle, ce qui est particulièrement important dans des domaines comme le crédit ou le recrutement.",
    },
    {
      id: "aws-aip-q31",
      domainId: "ia-responsable",
      difficulty: "difficile",
      question:
        "Une équipe veut détecter des tentatives de contournement des instructions système d'un chatbot (prompt injection). Quel mécanisme AWS est spécifiquement conçu pour cela ?",
      options: ["Amazon Bedrock Guardrails", "Amazon SageMaker Feature Store", "AWS Config", "Amazon Comprehend"],
      correctIndex: 0,
      explanation:
        "Amazon Bedrock Guardrails inclut la détection de tentatives de contournement des instructions du système, en plus du filtrage de contenu toxique ou du masquage d'informations personnelles.",
    },
    {
      id: "aws-aip-q32",
      domainId: "ia-responsable",
      difficulty: "moyen",
      question: "Quelle méthode d'explicabilité, utilisée par SageMaker Clarify, aide à comprendre quels facteurs pèsent le plus dans une décision d'un modèle ?",
      options: ["La méthode SHAP", "Le top-p sampling", "Le fine-tuning complet", "Le chain-of-thought prompting"],
      correctIndex: 0,
      explanation:
        "SageMaker Clarify s'appuie notamment sur la méthode SHAP pour calculer l'importance des variables et expliquer les décisions d'un modèle.",
    },
    {
      id: "aws-aip-q33",
      domainId: "securite-conformite-gouvernance",
      difficulty: "facile",
      question: "Dans le modèle de responsabilité partagée AWS, qui est responsable de la configuration des accès IAM à une solution d'IA construite sur Bedrock ?",
      options: ["AWS uniquement", "Le client uniquement", "Ni AWS ni le client", "Uniquement Pearson VUE"],
      correctIndex: 1,
      explanation:
        "Dans le modèle de responsabilité partagée, le client reste responsable de la sécurité dans le cloud, y compris la configuration des accès IAM, tandis qu'AWS sécurise l'infrastructure sous-jacente.",
    },
    {
      id: "aws-aip-q34",
      domainId: "securite-conformite-gouvernance",
      difficulty: "moyen",
      question:
        "Une équipe veut vérifier qu'aucune donnée sensible non anonymisée n'est présente dans un jeu de données stocké sur Amazon S3 avant de l'utiliser pour un fine-tuning. Quel service AWS répond à ce besoin ?",
      options: ["Amazon Macie", "Amazon Polly", "AWS CloudTrail", "Amazon Rekognition"],
      correctIndex: 0,
      explanation:
        "Amazon Macie utilise le machine learning pour scanner automatiquement les données S3 et identifier des informations sensibles ou personnellement identifiables.",
    },
    {
      id: "aws-aip-q35",
      domainId: "securite-conformite-gouvernance",
      difficulty: "facile",
      question: "Quel service AWS enregistre l'historique des appels effectués sur les services AWS, y compris qui a invoqué un modèle et à quel moment ?",
      options: ["AWS CloudTrail", "Amazon Comprehend", "AWS Config", "Amazon Textract"],
      correctIndex: 0,
      explanation:
        "AWS CloudTrail enregistre l'historique des appels effectués sur les services AWS, ce qui permet de tracer qui a invoqué un modèle ou modifié une configuration.",
    },
    {
      id: "aws-aip-q36",
      domainId: "securite-conformite-gouvernance",
      difficulty: "difficile",
      question:
        "Un client laisse par erreur un compartiment S3 contenant des données d'entraînement accessible publiquement. Selon le modèle de responsabilité partagée, qui porte la responsabilité de cet incident ?",
      options: [
        "AWS, car l'infrastructure de stockage est sous sa responsabilité",
        "Le client, car la configuration des accès à ses données relève de sa responsabilité dans le cloud",
        "Ni AWS ni le client, car il s'agit d'un cas de force majeure",
        "Pearson VUE, car il administre l'examen de certification",
      ],
      correctIndex: 1,
      explanation:
        "La configuration des accès et la protection des données stockées relèvent de la responsabilité du client dans le modèle de responsabilité partagée, même si l'infrastructure AWS elle-même reste sécurisée.",
    },
    {
      id: "aws-aip-q37",
      domainId: "securite-conformite-gouvernance",
      difficulty: "moyen",
      question: "Quel service AWS évalue en continu la conformité de la configuration des ressources par rapport à des règles définies ?",
      options: ["AWS Config", "Amazon Polly", "Amazon Bedrock Guardrails", "SageMaker Ground Truth"],
      correctIndex: 0,
      explanation:
        "AWS Config évalue en continu la conformité de la configuration des ressources AWS par rapport à des règles définies, par exemple pour vérifier qu'un compartiment reste privé.",
    },
    {
      id: "aws-aip-q38",
      domainId: "securite-conformite-gouvernance",
      difficulty: "facile",
      question: "Quel service AWS gère les clés utilisées pour chiffrer les données au repos, par exemple dans Amazon S3 ?",
      options: ["AWS Key Management Service (KMS)", "Amazon Macie", "Amazon Q", "AWS CloudTrail"],
      correctIndex: 0,
      explanation:
        "AWS Key Management Service (KMS) gère les clés de chiffrement utilisées pour protéger les données au repos, notamment dans Amazon S3.",
    },
    {
      id: "aws-aip-q39",
      domainId: "securite-conformite-gouvernance",
      difficulty: "difficile",
      question:
        "Une entreprise européenne veut déployer un chatbot basé sur un modèle de fondation traitant des données personnelles de ses clients. À quel moment doit-elle prendre en compte les obligations du RGPD ?",
      options: [
        "Uniquement après la mise en production, si un incident survient",
        "Dès la conception de la solution, avant même de choisir le modèle et l'architecture technique",
        "Uniquement si le modèle est hébergé en dehors d'AWS",
        "Le RGPD ne s'applique pas aux solutions d'IA générative",
      ],
      correctIndex: 1,
      explanation:
        "La conformité réglementaire, y compris le RGPD, doit être pensée dès la conception d'une solution d'IA qui traite des données personnelles, pas ajoutée après coup une fois le système en production.",
    },
    {
      id: "aws-aip-q40",
      domainId: "securite-conformite-gouvernance",
      difficulty: "moyen",
      question: "Quel élément fait partie de la gouvernance du cycle de vie d'un système d'IA, selon le contenu du cours ?",
      options: [
        "Le réglage de la température d'inférence pour chaque requête",
        "La traçabilité des versions de modèle et la définition claire des rôles entre équipes",
        "Le choix du nombre de couches d'un réseau de neurones",
        "Le format des embeddings générés par le modèle",
      ],
      correctIndex: 1,
      explanation:
        "La gouvernance du cycle de vie d'un système d'IA couvre la traçabilité des versions de modèle, la documentation des décisions et la définition claire des rôles et responsabilités entre équipes.",
    },
  ],
  studyPlan: [
    {
      label: "Semaine 1 : poser les bases IA et ML",
      detail:
        "Lire le module Fondamentaux de l'IA et du machine learning, mémoriser la hiérarchie IA/ML/deep learning et les trois types d'apprentissage, puis s'exercer sur les questions faciles du domaine correspondant.",
    },
    {
      label: "Semaine 1-2 : entrer dans l'IA générative",
      detail:
        "Lire le module sur les fondamentaux de l'IA générative, bien distinguer modèle de fondation, LLM, token et embedding, et comprendre le rôle d'Amazon Bedrock et d'Amazon Titan.",
    },
    {
      label: "Semaine 2 : maîtriser les applications concrètes",
      detail:
        "Approfondir le module le plus lourd (28 % de l'examen) sur le prompt engineering, le RAG, le fine-tuning et les agents Bedrock, en s'assurant de savoir quand choisir chaque technique face à un scénario donné.",
    },
    {
      label: "Semaine 3 : IA responsable et gouvernance",
      detail:
        "Lire les modules sur l'IA responsable et sur la sécurité, la conformité et la gouvernance, en insistant sur SageMaker Clarify, Bedrock Guardrails, le modèle de responsabilité partagée et les AWS AI Service Cards.",
    },
    {
      label: "Semaine 3-4 : révision du glossaire et quiz complets",
      detail:
        "Repasser tout le glossaire à voix haute sans regarder les définitions, puis enchaîner le quiz bank en entier en conditions d'examen (90 minutes, 65 questions simulées) et noter les domaines les plus faibles.",
    },
    {
      label: "Semaine 4 : dernière ligne droite ciblée",
      detail:
        "Refaire uniquement les questions ratées lors de la révision précédente, relire les sections correspondantes des modules concernés, puis planifier l'examen une fois un score de confiance stable atteint sur chaque domaine.",
    },
  ],
};

export default certification;
