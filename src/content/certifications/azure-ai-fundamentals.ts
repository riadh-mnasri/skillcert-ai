import type { Certification } from "@/content/types";

const certification: Certification = {
  slug: "azure-ai-fundamentals",
  providerId: "azure",
  code: "AI-900",
  name: "Microsoft Certified: Azure AI Fundamentals",
  level: "Fondamentaux",
  tagline: "La porte d'entrée officielle Microsoft pour comprendre l'intelligence artificielle sur Azure, sans prérequis technique lourd.",
  description:
    "Azure AI Fundamentals (AI-900) valide une compréhension de base des concepts d'IA et de machine learning ainsi que des services Azure qui les mettent en œuvre : vision par ordinateur, traitement du langage naturel, IA générative et IA responsable. Elle s'adresse aux débutants en IA, aux profils non techniques qui travaillent avec des équipes data ou IA, et aux développeurs qui veulent poser des bases solides avant de viser des certifications Azure AI plus avancées. C'est souvent la première certification IA passée dans un parcours Microsoft, avant AI-102 ou DP-100.",
  officialUrl: "https://learn.microsoft.com/fr-fr/credentials/certifications/azure-ai-fundamentals/",
  format: {
    questionCount: 45,
    durationMinutes: 45,
    passingScore: "700/1000 (score mis à l'échelle, le nombre exact de bonnes réponses requis varie selon la session, généralement 40 à 60 questions au total)",
    price: "99 USD",
    deliveryMode: "Centre d'examen Pearson VUE ou surveillance en ligne",
    isOfficialCertification: true,
  },
  domains: [
    {
      id: "workloads-ia",
      title: "Décrire les charges de travail et considérations en IA",
      weightPercent: 20,
      summary:
        "Identifier les grandes familles de charges de travail en intelligence artificielle et appliquer les six principes de l'IA responsable de Microsoft à un scénario donné.",
    },
    {
      id: "fondamentaux-ml",
      title: "Décrire les fondamentaux du machine learning",
      weightPercent: 25,
      summary:
        "Comprendre les types d'apprentissage automatique, les tâches de régression, classification et clustering, et savoir utiliser Azure Machine Learning pour entraîner et évaluer un modèle.",
    },
    {
      id: "ia-generative",
      title: "Décrire les fonctionnalités d'IA générative sur Azure",
      weightPercent: 20,
      summary:
        "Comprendre les modèles de fondation et les grands modèles de langage, et savoir utiliser Azure OpenAI Service ainsi que les techniques de prompt engineering et de RAG.",
    },
    {
      id: "vision-ordinateur",
      title: "Décrire les fonctionnalités de vision par ordinateur sur Azure",
      weightPercent: 18,
      summary:
        "Distinguer classification d'image, détection d'objets et OCR, et savoir quand utiliser Azure AI Vision, Custom Vision ou Azure AI Document Intelligence.",
    },
    {
      id: "traitement-langage",
      title: "Décrire les fonctionnalités de traitement du langage naturel (NLP) sur Azure",
      weightPercent: 17,
      summary:
        "Comprendre les tâches courantes de NLP et savoir mobiliser Azure AI Language, Azure AI Speech et Azure AI Translator selon le scénario.",
    },
  ],
  modules: [
    {
      slug: "charges-travail-ia",
      domainId: "workloads-ia",
      title: "Les charges de travail et les considérations de l'IA sur Azure",
      readMinutes: 8,
      summary:
        "Ce module présente les grandes familles de charges de travail en intelligence artificielle et les six principes de l'IA responsable que Microsoft applique à toutes ses solutions Azure.",
      keyPoints: [
        "Les charges de travail d'IA se répartissent en vision, langage, IA générative, IA de décision et extraction de connaissances.",
        "Les six principes de l'IA responsable de Microsoft sont l'équité, la fiabilité et la sécurité, la confidentialité et la sécurité, l'inclusion, la transparence et la responsabilité.",
        "Azure AI Foundry regroupe les services d'IA de Microsoft dans un portail unique pour créer, tester et déployer des solutions.",
        "Chaque famille de charge de travail correspond à des services Azure spécifiques adaptés au cas d'usage.",
        "L'IA responsable guide la conception d'un projet dès le départ, elle n'est pas ajoutée après coup.",
      ],
      sections: [
        {
          heading: "Les grandes familles de charges de travail en IA",
          body:
            "Une charge de travail d'IA désigne un type de tâche que l'on confie à un système d'intelligence artificielle plutôt qu'à un traitement informatique classique. Microsoft distingue cinq grandes familles de charges de travail que l'on retrouve dans l'examen AI-900.\n\n- La vision par ordinateur analyse des images ou des vidéos pour classifier, détecter des objets, reconnaître du texte ou décrire une scène.\n- Le traitement du langage naturel (NLP) travaille sur du texte ou de la parole pour en extraire du sens : sentiment, entités, intentions, traduction.\n- L'IA générative crée du contenu original, texte, image ou code, à partir de modèles de fondation entraînés sur d'immenses volumes de données.\n- L'IA de décision aide à prendre des décisions automatisées ou à détecter des anomalies, par exemple repérer une transaction bancaire suspecte.\n- L'extraction de connaissances (knowledge mining) consiste à indexer et rechercher de l'information dans de grands volumes de documents non structurés.\n\nChaque famille correspond à des services Azure différents, mais toutes reposent sur les mêmes fondations : des modèles entraînés sur des données, exposés via des API ou des SDK que les développeurs intègrent dans leurs applications.",
        },
        {
          heading: "Les six principes de l'IA responsable selon Microsoft",
          body:
            "Microsoft a formalisé six principes que toute solution d'IA construite sur Azure doit respecter. Ils forment le socle du volet considérations sur l'IA de l'examen AI-900.\n\n- Équité : un système d'IA doit traiter tous les groupes d'utilisateurs de façon comparable, sans introduire ni amplifier de biais discriminatoires liés au genre, à l'origine ethnique ou à d'autres caractéristiques.\n- Fiabilité et sécurité : le système doit fonctionner comme prévu, résister aux cas limites et être testé rigoureusement avant sa mise en production, en particulier pour les usages à fort enjeu comme la santé ou les transports.\n- Confidentialité et sécurité : les données personnelles utilisées pour entraîner ou faire fonctionner le système doivent être protégées conformément aux réglementations, avec un accès restreint et un chiffrement adapté.\n- Inclusion : les solutions doivent être conçues pour répondre aux besoins du plus grand nombre, y compris les personnes en situation de handicap.\n- Transparence : les utilisateurs et les parties prenantes doivent pouvoir comprendre comment un système d'IA prend ses décisions et connaître ses limites.\n- Responsabilité : des personnes doivent rester responsables du comportement du système, avec des mécanismes de gouvernance et de supervision humaine, en particulier pour les décisions automatisées à fort impact.\n\nCes principes s'appliquent aussi bien à un modèle de classification simple qu'à un chatbot génératif déployé à grande échelle.",
        },
        {
          heading: "Azure AI Foundry, le portail unifié des services d'IA",
          body:
            "Azure AI Foundry, anciennement connu sous les noms Azure AI Studio puis Azure AI services, centralise l'accès aux services d'intelligence artificielle de Microsoft dans un portail unique. Il permet de parcourir un catalogue de modèles, incluant les modèles Azure OpenAI et des modèles open source, de les tester directement dans un espace de test avant de les déployer, et de suivre leur comportement en production.\n\nLe portail propose aussi des outils d'évaluation de la qualité et de la sécurité des réponses générées, ainsi que des filtres de contenu configurables pour bloquer les sorties inappropriées. Pour un candidat à l'examen AI-900, il faut retenir qu'Azure AI Foundry n'est pas un service d'IA en soi mais l'environnement de gestion qui réunit vision, langage, parole, IA générative et machine learning sous une même interface de développement.",
        },
        {
          heading: "Associer le bon service Azure au bon cas d'usage",
          body:
            "Une partie de l'examen consiste à reconnaître, à partir d'une description de scénario, quel service Azure correspond au besoin. Quelques repères utiles :\n\n- Analyser des photos de produits en rayon pour vérifier leur bon positionnement : Azure AI Vision.\n- Comprendre le ton d'avis clients laissés sur un site e-commerce : Azure AI Language.\n- Générer automatiquement des résumés de réunions ou rédiger des réponses email : Azure OpenAI Service.\n- Détecter des pics inhabituels de consommation électrique dans un bâtiment : un modèle d'IA de décision de type détection d'anomalies.\n- Retrouver rapidement une clause précise dans des milliers de contrats PDF archivés : Azure AI Search combiné à Azure AI Document Intelligence.\n\nCette capacité à relier un scénario métier à la famille de charge de travail puis au service Azure correspondant est directement testée dans plusieurs questions de l'examen réel.",
        },
      ],
    },
    {
      slug: "fondamentaux-machine-learning",
      domainId: "fondamentaux-ml",
      title: "Les fondamentaux du machine learning",
      readMinutes: 11,
      summary:
        "Ce module couvre les concepts de base de l'apprentissage automatique : types d'apprentissage, régression, classification, clustering, et l'outillage Azure Machine Learning pour entraîner et évaluer des modèles.",
      keyPoints: [
        "L'apprentissage supervisé utilise des données étiquetées, l'apprentissage non supervisé travaille sur des données sans étiquette.",
        "La régression prédit une valeur numérique continue, la classification prédit une catégorie.",
        "Le clustering regroupe des observations similaires sans connaître les catégories à l'avance.",
        "Azure Machine Learning propose un studio avec designer visuel, notebooks et AutoML pour entraîner des modèles.",
        "Le surapprentissage (overfitting) survient quand un modèle mémorise les données d'entraînement au lieu de généraliser.",
        "Les métriques d'évaluation, précision, rappel ou RMSE selon la tâche, permettent de mesurer objectivement la qualité d'un modèle.",
      ],
      sections: [
        {
          heading: "Apprentissage supervisé, non supervisé et par renforcement",
          body:
            "Le machine learning, ou apprentissage automatique, désigne la capacité d'un système à apprendre des motifs à partir de données plutôt qu'à suivre des règles codées explicitement. Il existe trois grandes approches.\n\nL'apprentissage supervisé entraîne un modèle sur des données étiquetées : chaque exemple est composé de caractéristiques (features) et d'une étiquette connue (label), la valeur que l'on cherche à prédire. Un modèle qui apprend à reconnaître un email de spam à partir d'exemples déjà classés spam ou non spam relève de l'apprentissage supervisé.\n\nL'apprentissage non supervisé travaille sur des données sans étiquette. Le modèle cherche lui-même des structures ou des regroupements naturels, par exemple pour segmenter une base de clients en groupes homogènes sans savoir à l'avance combien de groupes existent ni ce qui les caractérise.\n\nL'apprentissage par renforcement entraîne un agent à prendre des décisions séquentielles dans un environnement, en le récompensant ou en le pénalisant selon les résultats de ses actions. Ce mode d'apprentissage est moins présent dans l'examen AI-900 mais reste utile pour situer le paysage du machine learning.",
        },
        {
          heading: "Régression, classification et clustering",
          body:
            "Au sein de l'apprentissage supervisé, on distingue deux tâches principales selon la nature de la valeur à prédire.\n\nLa régression prédit une valeur numérique continue. Estimer le prix de vente d'un bien immobilier à partir de sa surface, de sa localisation et du nombre de pièces est un problème de régression : la sortie peut prendre n'importe quelle valeur dans une plage continue.\n\nLa classification prédit une catégorie parmi un ensemble fini de classes. Déterminer si un email est un spam ou non, ou si une image de radiographie montre une anomalie ou non, sont des problèmes de classification binaire. Quand il y a plus de deux catégories possibles, comme reconnaître le type d'un fruit sur une photo, on parle de classification multiclasse.\n\nLe clustering, propre à l'apprentissage non supervisé, regroupe des observations similaires entre elles sur la base de leurs caractéristiques, sans connaître de catégories prédéfinies. C'est la technique utilisée pour la segmentation client, la détection de groupes à risque ou le regroupement de documents similaires.\n\nDans Azure Machine Learning designer, ces trois familles de tâches correspondent à des modules prêts à l'emploi que l'on peut assembler visuellement dans un pipeline, sans écrire de code.",
        },
        {
          heading: "Le cycle d'entraînement d'un modèle : données, entraînement, validation, test",
          body:
            "Entraîner un modèle suit un cycle en plusieurs étapes. On part d'un jeu de données que l'on divise généralement en trois sous-ensembles : les données d'entraînement, sur lesquelles le modèle apprend ses paramètres ; les données de validation, utilisées pour ajuster les hyperparamètres et comparer plusieurs modèles ; et les données de test, réservées à l'évaluation finale sur des exemples que le modèle n'a jamais vus.\n\nCette séparation est essentielle pour détecter deux problèmes courants. Le sous-apprentissage (underfitting) se produit quand un modèle est trop simple pour capturer les motifs présents dans les données, avec de mauvaises performances aussi bien à l'entraînement qu'au test. Le surapprentissage (overfitting) se produit à l'inverse quand un modèle mémorise les particularités des données d'entraînement, y compris leur bruit, au point de très bien performer sur ces données mais de mal généraliser sur des données nouvelles. Un écart important entre la précision sur les données d'entraînement et celle sur les données de test est le signal caractéristique d'un surapprentissage.\n\nUn jeu de test représentatif, distinct des données d'entraînement, reste la seule façon fiable de savoir si un modèle sera utile en conditions réelles.",
        },
        {
          heading: "Azure Machine Learning : studio, designer, AutoML et notebooks",
          body:
            "Azure Machine Learning est le service Azure dédié à l'entraînement, au déploiement et à la gestion du cycle de vie des modèles de machine learning. Il s'organise autour d'un espace de travail (workspace) qui centralise les données, les expériences, les modèles enregistrés et les ressources de calcul.\n\nPlusieurs façons de travailler coexistent dans le studio Azure Machine Learning. Le designer visuel permet de construire un pipeline d'entraînement par glisser-déposer, en enchaînant des modules de préparation de données, d'entraînement et d'évaluation, sans écrire de code. Les notebooks intégrés, basés sur Python et le SDK Azure Machine Learning, conviennent aux data scientists qui préfèrent une approche code-first. AutoML, ou apprentissage automatique automatisé, teste automatiquement plusieurs algorithmes et combinaisons d'hyperparamètres sur un jeu de données donné, puis classe les modèles obtenus par performance, ce qui permet d'obtenir rapidement un modèle solide sans expertise poussée en science des données.\n\nUne fois entraîné, un modèle peut être enregistré dans le registre de modèles puis déployé comme point de terminaison en temps réel ou en traitement par lot, exposé via une API REST que les applications peuvent appeler.",
        },
        {
          heading: "Évaluer la performance d'un modèle",
          body:
            "Évaluer un modèle nécessite des métriques adaptées à la tâche. Pour un modèle de classification, la matrice de confusion croise les prédictions et les valeurs réelles ; elle permet de calculer la précision globale (accuracy, proportion de prédictions correctes), la précision positive (precision, proportion de prédictions positives réellement correctes) et le rappel (recall, proportion de cas positifs réels correctement détectés). Le score F1 combine precision et recall en une seule valeur, utile quand les classes sont déséquilibrées.\n\nPour un modèle de régression, on utilise plutôt l'erreur quadratique moyenne (RMSE), l'erreur absolue moyenne (MAE) ou le coefficient de détermination R², qui mesure la part de variance expliquée par le modèle.\n\nPour le clustering, faute d'étiquette de référence, on s'appuie sur des métriques internes comme le silhouette score, qui évalue à quel point les observations d'un même groupe sont proches entre elles par rapport aux autres groupes.\n\nChoisir la bonne métrique selon le type de problème est une compétence directement testée dans l'examen AI-900.",
        },
      ],
    },
    {
      slug: "ia-generative-azure",
      domainId: "ia-generative",
      title: "Les fonctionnalités d'IA générative sur Azure",
      readMinutes: 10,
      summary:
        "Ce module explique le fonctionnement des modèles de fondation et des grands modèles de langage, et présente Azure OpenAI Service ainsi que les bonnes pratiques de prompt engineering et de génération augmentée par récupération (RAG).",
      keyPoints: [
        "Les modèles de fondation sont pré-entraînés sur d'immenses volumes de données et réutilisables pour de nombreuses tâches.",
        "Azure OpenAI Service donne accès à des modèles comme GPT et DALL-E via une infrastructure Azure sécurisée.",
        "Le prompt engineering consiste à formuler des instructions précises pour orienter la réponse d'un modèle génératif.",
        "La génération augmentée de récupération (RAG) ancre les réponses d'un modèle dans des documents d'entreprise à jour.",
        "Les modèles génératifs peuvent halluciner, c'est-à-dire produire des réponses fausses avec assurance.",
        "Azure AI Foundry propose des filtres de contenu pour limiter les réponses inappropriées ou dangereuses.",
      ],
      sections: [
        {
          heading: "Des modèles de fondation aux grands modèles de langage",
          body:
            "Un modèle de fondation est un modèle de grande taille, entraîné une seule fois sur d'immenses volumes de données textuelles, de code ou d'images, puis réutilisé tel quel ou légèrement adapté pour de nombreuses tâches différentes, plutôt qu'entraîné à nouveau depuis zéro pour chaque usage. Cette approche s'oppose aux modèles de machine learning classiques, généralement entraînés sur un jeu de données restreint pour une tâche unique et précise.\n\nLa plupart des modèles de fondation utilisés en IA générative reposent sur une architecture de réseau de neurones appelée transformer, qui permet au modèle de traiter le texte en tenant compte du contexte de chaque mot par rapport à l'ensemble de la phrase ou du document, plutôt que mot par mot de façon isolée. C'est cette architecture qui a rendu possible les grands modèles de langage (LLM) comme la famille GPT, capables de générer du texte cohérent, de résumer des documents, de traduire ou d'écrire du code à partir d'une simple instruction en langage naturel.",
        },
        {
          heading: "Azure OpenAI Service",
          body:
            "Azure OpenAI Service donne accès, au sein d'un abonnement Azure, à des modèles développés par OpenAI comme la famille GPT pour la génération de texte et de code, ou DALL-E pour la génération d'images à partir d'une description textuelle. Le service inclut aussi des modèles d'embeddings, qui convertissent un texte en un vecteur numérique représentant son sens, utile pour la recherche sémantique ou le regroupement de documents proches en signification.\n\nL'intérêt principal d'Azure OpenAI Service par rapport à un accès direct à l'API d'OpenAI tient aux garanties d'entreprise apportées par Azure : isolement réseau, conformité réglementaire, résidence des données dans une région choisie, authentification via Microsoft Entra ID et intégration avec les autres services Azure. Les déploiements de modèles se gèrent et se surveillent désormais depuis Azure AI Foundry, qui centralise le choix du modèle, son paramétrage et le suivi de son utilisation.",
        },
        {
          heading: "Le prompt engineering, l'art de bien formuler une requête",
          body:
            "Le prompt engineering désigne la pratique consistant à formuler et affiner l'instruction, le prompt, envoyée à un modèle génératif afin d'obtenir une réponse, la complétion, la plus pertinente possible, sans modifier les paramètres internes du modèle.\n\nQuelques notions techniques reviennent régulièrement à l'examen. Le token est l'unité de texte, mot ou fragment de mot, que le modèle traite pour lire un prompt et générer sa réponse ; la facturation d'Azure OpenAI Service se fait généralement au nombre de tokens consommés. La fenêtre de contexte correspond au nombre maximal de tokens, prompt et réponse compris, que le modèle peut traiter en une seule requête. Le paramètre de température contrôle le degré de créativité ou de déterminisme de la réponse : une température basse produit des réponses plus prévisibles et répétables, une température élevée produit des réponses plus variées et parfois plus originales.\n\nFournir des exemples dans le prompt, une approche dite few-shot, ou décrire précisément le rôle attendu du modèle, par exemple tu es un assistant qui répond uniquement par des phrases courtes, améliore généralement la qualité et la cohérence des réponses obtenues.",
        },
        {
          heading: "La génération augmentée de récupération (RAG)",
          body:
            "Un modèle de fondation a une connaissance figée à la date de son entraînement et ignore par définition les documents internes d'une entreprise ou les événements récents. La génération augmentée de récupération, ou RAG, répond à cette limite en ancrant les réponses du modèle dans une base de connaissances externe et à jour, sans nécessiter de réentraîner le modèle.\n\nLe principe consiste à indexer au préalable les documents d'entreprise sous forme de vecteurs d'embeddings dans une base de recherche, par exemple Azure AI Search. Lorsqu'un utilisateur pose une question, le système recherche d'abord les extraits de documents les plus pertinents par similarité sémantique, puis les insère dans le prompt envoyé au modèle génératif comme contexte supplémentaire. Le modèle génère alors sa réponse en s'appuyant sur ces extraits réels plutôt que sur sa seule mémoire d'entraînement, ce qui réduit le risque de réponse inventée et permet de citer les sources d'origine.",
        },
        {
          heading: "Risques et bonnes pratiques : hallucinations et filtres de contenu",
          body:
            "Un modèle génératif peut produire une hallucination, c'est-à-dire une réponse fausse ou inventée mais formulée avec la même assurance qu'une réponse correcte. Ce phénomène découle du fonctionnement même du modèle, qui génère la suite de mots la plus statistiquement probable sans vérifier la véracité factuelle de ce qu'il produit. C'est pourquoi les scénarios à fort enjeu, comme un conseil médical ou juridique, exigent une supervision humaine avant toute action basée sur une réponse générée.\n\nAzure AI Foundry intègre des filtres de contenu appliqués par défaut aux déploiements de modèles génératifs, qui analysent les entrées et les sorties pour détecter et bloquer des catégories de contenu jugées à risque : haine, violence, contenu sexuel ou auto-mutilation. Ces filtres, ajustables selon le contexte d'usage, illustrent l'application concrète des principes d'IA responsable présentés dans le premier module de ce parcours, en particulier la fiabilité et la sécurité, aux spécificités de l'IA générative.",
        },
      ],
    },
    {
      slug: "vision-par-ordinateur-azure",
      domainId: "vision-ordinateur",
      title: "Les fonctionnalités de vision par ordinateur sur Azure",
      readMinutes: 9,
      summary:
        "Ce module présente les principales tâches de vision par ordinateur, classification, détection d'objets et OCR, et les services Azure associés, dont Azure AI Vision, Custom Vision et Azure AI Document Intelligence.",
      keyPoints: [
        "Les modèles de vision par ordinateur reposent généralement sur des réseaux de neurones convolutifs (CNN) qui analysent les pixels d'une image.",
        "Azure AI Vision fournit des capacités prêtes à l'emploi : description d'image, détection d'objets, OCR, détection de visages.",
        "Custom Vision permet d'entraîner un modèle de classification ou de détection sur des images propres à une entreprise, sans écrire de code de deep learning.",
        "Azure AI Document Intelligence extrait automatiquement des champs structurés depuis des documents comme les factures ou les formulaires.",
        "L'usage de la reconnaissance faciale sur Azure est volontairement restreint pour des raisons d'IA responsable.",
      ],
      sections: [
        {
          heading: "Comment une machine voit une image",
          body:
            "Pour un ordinateur, une image numérique est une matrice de pixels, chacun défini par des valeurs numériques représentant son intensité lumineuse et sa couleur, par exemple trois canaux rouge, vert et bleu pour une image couleur. Un modèle de vision par ordinateur apprend à reconnaître des motifs dans cette matrice de nombres plutôt qu'à voir une image comme un humain.\n\nLa plupart des modèles modernes de vision par ordinateur reposent sur les réseaux de neurones convolutifs (CNN), une architecture de deep learning spécialement conçue pour repérer des motifs locaux, comme des contours, des textures ou des formes, puis les combiner progressivement en concepts de plus haut niveau, jusqu'à reconnaître un objet entier. Entraîner un tel modèle depuis zéro nécessite généralement de grands volumes d'images annotées et une puissance de calcul importante, ce qui explique l'intérêt des services prêts à l'emploi proposés par Azure.",
        },
        {
          heading: "Azure AI Vision, les capacités prêtes à l'emploi",
          body:
            "Azure AI Vision regroupe plusieurs capacités de vision par ordinateur accessibles directement via une API, sans entraînement préalable. La classification d'image attribue une ou plusieurs étiquettes descriptives à une image entière, par exemple plage, coucher de soleil, personne. La détection d'objets va plus loin en identifiant chaque objet présent dans l'image avec un cadre englobant (bounding box) précisant sa position.\n\nLa fonctionnalité OCR, reconnaissance optique de caractères, extrait le texte imprimé ou manuscrit présent dans une image, que ce soit une pancarte photographiée ou un document scanné. Azure AI Vision propose également la génération automatique de légendes descriptives d'une image et la détection de contenu modéré, images explicites ou choquantes, utile pour filtrer du contenu généré par les utilisateurs. La détection de visages, plus sensible, existe mais reste volontairement limitée en accès, comme détaillé dans la dernière section de ce module.",
        },
        {
          heading: "Custom Vision, entraîner son propre modèle sans deep learning",
          body:
            "Custom Vision est le service Azure permettant d'entraîner un modèle de vision par ordinateur adapté à un besoin métier spécifique, sans écrire de code de deep learning. Une entreprise qui souhaite reconnaître ses propres références produits, détecter des défauts sur une chaîne de fabrication ou identifier des types de plantes particuliers peut créer un projet dans le portail Custom Vision, y importer ses propres images, les étiqueter manuellement, puis lancer un entraînement.\n\nLe service prend en charge deux types de tâches : la classification, qui attribue une étiquette à l'image entière, par exemple pièce conforme ou pièce défectueuse, et la détection d'objets, qui localise précisément chaque élément recherché dans l'image. Après entraînement, Custom Vision évalue automatiquement la précision du modèle sur un jeu de test et permet d'itérer en ajoutant davantage d'images pour les catégories les moins bien reconnues, avant de publier le modèle comme point de terminaison utilisable en production.",
        },
        {
          heading: "Azure AI Document Intelligence, extraire des données structurées",
          body:
            "Azure AI Document Intelligence, anciennement Form Recognizer, est le service Azure spécialisé dans l'extraction de données structurées à partir de documents semi-structurés comme les factures, les reçus, les cartes d'identité ou les formulaires professionnels. Contrairement à un simple OCR qui extrait du texte brut, ce service comprend la structure du document : il associe automatiquement chaque valeur à son champ, par exemple le montant total à l'étiquette Total, la date d'émission à l'étiquette Date, ou reconstitue le contenu d'un tableau ligne par ligne.\n\nLe service propose des modèles prédéfinis pour les documents les plus courants, factures, reçus, cartes d'identité, cartes de visite, directement utilisables sans entraînement, ainsi que la possibilité d'entraîner un modèle personnalisé sur un jeu de documents propre à une organisation, quand leur mise en page ne correspond à aucun modèle standard. C'est le service à privilégier dès qu'un scénario évoque l'automatisation du traitement de factures, de bons de commande ou de formulaires administratifs.",
        },
        {
          heading: "Considérations responsables propres à la vision par ordinateur",
          body:
            "La reconnaissance faciale occupe une place particulière parmi les fonctionnalités de vision par ordinateur d'Azure en raison des risques qu'elle soulève en matière de vie privée et d'équité. Des études ont montré que certains modèles de reconnaissance faciale obtenaient des taux d'erreur plus élevés selon le genre ou la couleur de peau des personnes photographiées, ce qui peut conduire à des discriminations si le système est utilisé pour identifier des individus, par exemple dans un contexte de surveillance ou de contrôle d'accès.\n\nPour cette raison, Microsoft a restreint l'accès à certaines capacités avancées de reconnaissance faciale d'Azure AI Vision, comme l'identification d'une personne précise, à des clients validés qui démontrent un cas d'usage conforme aux principes d'IA responsable. Cette restriction illustre concrètement, dans le domaine de la vision par ordinateur, les principes d'équité et de confidentialité et sécurité présentés dans le premier module de ce parcours.",
        },
      ],
    },
    {
      slug: "traitement-langage-naturel-azure",
      domainId: "traitement-langage",
      title: "Les fonctionnalités de traitement du langage naturel (NLP) sur Azure",
      readMinutes: 9,
      summary:
        "Ce module couvre les tâches courantes de NLP, analyse de sentiment, extraction d'entités, compréhension du langage conversationnel, et les services Azure associés : Azure AI Language, Azure AI Speech et Azure AI Translator.",
      keyPoints: [
        "Le NLP regroupe des tâches comme la détection de langue, l'analyse de sentiment, l'extraction de phrases clés et la reconnaissance d'entités nommées.",
        "Azure AI Language centralise ces capacités d'analyse de texte dans un service unique.",
        "Conversational Language Understanding (CLU) a remplacé LUIS pour comprendre les intentions exprimées en langage naturel.",
        "Azure AI Speech convertit la parole en texte et le texte en parole, avec traduction vocale en temps quasi réel.",
        "Azure AI Translator traduit du texte entre plus de 100 langues via une API.",
      ],
      sections: [
        {
          heading: "Les tâches fondamentales du traitement du langage naturel",
          body:
            "Le traitement du langage naturel (NLP) regroupe l'ensemble des techniques permettant à un ordinateur de comprendre, d'analyser ou de générer du texte et de la parole en langage humain. Avant même d'appliquer un modèle d'IA, un texte est généralement décomposé en unités plus petites, une étape appelée tokenisation, puis normalisé, par exemple en ramenant chaque mot à sa forme de base, la lemmatisation, pour réduire la variabilité du vocabulaire à traiter.\n\nPlusieurs tâches reviennent régulièrement dans les scénarios d'examen. La détection de langue identifie automatiquement la langue d'un texte. L'analyse de sentiment évalue si un texte exprime une opinion positive, négative, neutre ou mixte, utile par exemple pour analyser des avis clients à grande échelle. L'extraction de phrases clés résume les idées principales d'un texte sous forme de quelques expressions représentatives. La reconnaissance d'entités nommées (NER) identifie dans un texte des éléments précis comme des noms de personnes, de lieux, d'organisations, de dates ou de montants.",
        },
        {
          heading: "Azure AI Language, le service central d'analyse de texte",
          body:
            "Azure AI Language est le service Azure qui centralise ces capacités d'analyse de texte, en fusionnant ce qui était auparavant réparti entre Text Analytics et d'autres services séparés. Il expose une API unique permettant d'envoyer un texte et de récupérer en retour le sentiment détecté, les entités nommées reconnues, les phrases clés extraites ou la langue identifiée.\n\nLe service propose aussi des fonctionnalités plus avancées comme la détection d'informations personnelles identifiables (PII) dans un texte, utile pour anonymiser des documents avant traitement, et la génération automatique de résumés à partir de textes longs comme des transcriptions de réunion ou des articles. Ces fonctionnalités sont accessibles sans entraînement préalable, ce qui en fait un point d'entrée rapide pour ajouter des capacités de compréhension de texte à une application.",
        },
        {
          heading: "Conversational Language Understanding (CLU) et la compréhension d'intentions",
          body:
            "Conversational Language Understanding, ou CLU, est le service Azure qui permet de construire un modèle capable de comprendre l'intention exprimée par un utilisateur dans une phrase en langage naturel, par exemple distinguer réserver une salle de réunion de annuler un rendez-vous à partir de formulations variées. CLU a progressivement remplacé LUIS, Language Understanding, l'ancien service dédié à cette tâche, en s'intégrant directement dans Azure AI Language.\n\nConstruire un modèle CLU consiste à définir des intentions (intents), qui représentent les actions que l'utilisateur souhaite déclencher, des entités, qui représentent les informations utiles associées à cette action comme une date ou un nom de salle, puis à fournir des exemples de phrases (utterances) illustrant différentes façons d'exprimer chaque intention. Le modèle entraîné peut ensuite être intégré à un chatbot ou un assistant vocal, souvent construit avec Azure AI Bot Service, pour interpréter les commandes des utilisateurs et déclencher l'action correspondante.",
        },
        {
          heading: "Azure AI Speech, entre la parole et le texte",
          body:
            "Azure AI Speech regroupe les fonctionnalités liées à la voix. La reconnaissance vocale (speech-to-text) convertit un flux audio parlé en texte écrit, utile pour transcrire automatiquement une réunion ou permettre une commande vocale. La synthèse vocale (text-to-speech) fait l'inverse en générant une voix de synthèse à partir d'un texte, avec des voix neuronales qui reproduisent des intonations naturelles proches d'une voix humaine.\n\nLe service propose également la traduction vocale, qui combine reconnaissance et traduction pour convertir en temps quasi réel une phrase prononcée dans une langue en texte ou en parole dans une autre langue. Ces fonctionnalités s'appliquent à des scénarios variés : sous-titrage automatique de vidéos, assistants vocaux, outils d'accessibilité pour les personnes malvoyantes ou malentendantes, ou centres d'appel multilingues.",
        },
        {
          heading: "Azure AI Translator, la traduction automatique de texte",
          body:
            "Azure AI Translator fournit une API de traduction automatique de texte prenant en charge plus de 100 langues. Contrairement à Azure AI Speech, qui traite de l'audio, Translator travaille uniquement sur du texte écrit, qu'il s'agisse d'une phrase isolée envoyée via l'API ou de documents entiers grâce à la fonctionnalité de traduction de documents, qui conserve la mise en forme d'origine.\n\nLe service permet aussi de définir un dictionnaire de terminologie personnalisée, pour forcer la traduction de termes spécifiques à un secteur d'activité ou à une entreprise, plutôt que de dépendre uniquement des choix de traduction générique du modèle. Combiné à Azure AI Language pour analyser le sentiment d'un texte une fois traduit, Azure AI Translator permet de construire des flux d'analyse multilingue complets, un scénario que l'on retrouve régulièrement dans les cas pratiques de l'examen AI-900.",
        },
      ],
    },
  ],
  glossary: [
    {
      term: "Azure AI Foundry",
      definition:
        "Portail unifié de Microsoft Azure permettant de découvrir, tester, personnaliser et déployer des modèles d'IA, y compris les modèles génératifs, de vision et de langage.",
      domainId: "workloads-ia",
    },
    {
      term: "IA responsable",
      definition:
        "Ensemble de principes et de pratiques visant à concevoir des systèmes d'IA équitables, fiables, sûrs, transparents, inclusifs et sous supervision humaine.",
      domainId: "workloads-ia",
    },
    {
      term: "Machine learning",
      definition:
        "Discipline de l'IA dans laquelle un modèle apprend des motifs à partir de données plutôt que de suivre des règles codées explicitement.",
      domainId: "fondamentaux-ml",
    },
    {
      term: "Apprentissage supervisé",
      definition:
        "Type d'apprentissage automatique où le modèle est entraîné sur des données étiquetées associant des caractéristiques à une valeur de sortie connue.",
      domainId: "fondamentaux-ml",
    },
    {
      term: "Apprentissage non supervisé",
      definition:
        "Type d'apprentissage automatique où le modèle recherche des structures ou des regroupements dans des données non étiquetées.",
      domainId: "fondamentaux-ml",
    },
    {
      term: "Régression",
      definition:
        "Tâche d'apprentissage supervisé qui consiste à prédire une valeur numérique continue, comme un prix ou une température.",
      domainId: "fondamentaux-ml",
    },
    {
      term: "Classification",
      definition:
        "Tâche d'apprentissage supervisé qui consiste à prédire une catégorie parmi un ensemble fini de classes possibles.",
      domainId: "fondamentaux-ml",
    },
    {
      term: "Clustering",
      definition:
        "Technique d'apprentissage non supervisé qui regroupe des observations similaires sans connaître de catégories prédéfinies.",
      domainId: "fondamentaux-ml",
    },
    {
      term: "Azure Machine Learning",
      definition:
        "Service Azure dédié à l'entraînement, à l'évaluation et au déploiement de modèles de machine learning, via un designer visuel, des notebooks ou AutoML.",
      domainId: "fondamentaux-ml",
    },
    {
      term: "AutoML",
      definition:
        "Fonctionnalité d'Azure Machine Learning qui teste automatiquement plusieurs algorithmes et hyperparamètres pour identifier le modèle le plus performant sur un jeu de données donné.",
      domainId: "fondamentaux-ml",
    },
    {
      term: "Surapprentissage (overfitting)",
      definition:
        "Phénomène où un modèle mémorise les particularités des données d'entraînement au lieu de généraliser, ce qui dégrade ses performances sur des données nouvelles.",
      domainId: "fondamentaux-ml",
    },
    {
      term: "IA générative",
      definition:
        "Branche de l'IA capable de créer du contenu original, texte, image ou code, à partir de modèles de fondation entraînés sur de vastes ensembles de données.",
      domainId: "ia-generative",
    },
    {
      term: "Azure OpenAI Service",
      definition:
        "Service Azure donnant accès, avec les garanties de sécurité et de conformité d'Azure, à des modèles comme la famille GPT pour le texte et DALL-E pour l'image.",
      domainId: "ia-generative",
    },
    {
      term: "Modèle de fondation",
      definition:
        "Modèle de grande taille pré-entraîné sur d'immenses volumes de données, réutilisable tel quel pour de nombreuses tâches sans réentraînement complet.",
      domainId: "ia-generative",
    },
    {
      term: "Prompt engineering",
      definition:
        "Pratique consistant à formuler et affiner les instructions envoyées à un modèle génératif pour obtenir une réponse plus pertinente.",
      domainId: "ia-generative",
    },
    {
      term: "Token",
      definition:
        "Unité de texte, mot ou fragment de mot, utilisée par un modèle de langage pour traiter un prompt et générer sa réponse.",
      domainId: "ia-generative",
    },
    {
      term: "RAG (génération augmentée de récupération)",
      definition:
        "Technique qui ancre les réponses d'un modèle génératif dans des documents externes récupérés au moment de la requête, plutôt que dans sa seule mémoire d'entraînement.",
      domainId: "ia-generative",
    },
    {
      term: "Hallucination",
      definition:
        "Réponse fausse ou inventée qu'un modèle génératif produit avec la même assurance qu'une réponse correcte.",
      domainId: "ia-generative",
    },
    {
      term: "Azure AI Vision",
      definition:
        "Service Azure qui analyse des images pour la classification, la détection d'objets, la génération de légendes et la reconnaissance optique de caractères.",
      domainId: "vision-ordinateur",
    },
    {
      term: "Custom Vision",
      definition:
        "Service Azure permettant d'entraîner un modèle de classification ou de détection d'objets sur des images propres à une organisation, sans écrire de code de deep learning.",
      domainId: "vision-ordinateur",
    },
    {
      term: "OCR",
      definition:
        "Reconnaissance optique de caractères, technique qui extrait du texte imprimé ou manuscrit présent dans une image.",
      domainId: "vision-ordinateur",
    },
    {
      term: "Azure AI Document Intelligence",
      definition:
        "Service Azure qui extrait automatiquement des champs structurés, comme les montants ou les dates, à partir de documents tels que factures et formulaires.",
      domainId: "vision-ordinateur",
    },
    {
      term: "Azure AI Language",
      definition:
        "Service Azure qui analyse du texte pour en extraire le sentiment, les entités nommées, les phrases clés ou la langue utilisée.",
      domainId: "traitement-langage",
    },
    {
      term: "Conversational Language Understanding (CLU)",
      definition:
        "Service Azure qui entraîne un modèle à comprendre l'intention exprimée par un utilisateur dans une phrase en langage naturel, en remplacement de LUIS.",
      domainId: "traitement-langage",
    },
    {
      term: "Azure AI Speech",
      definition:
        "Service Azure regroupant la reconnaissance vocale, la synthèse vocale et la traduction vocale en temps quasi réel.",
      domainId: "traitement-langage",
    },
  ],
  quizBank: [
    {
      id: "azure-ai900-q01",
      domainId: "workloads-ia",
      difficulty: "facile",
      question:
        "Quel principe de l'IA responsable de Microsoft garantit que les systèmes d'IA traitent tous les groupes d'utilisateurs de manière comparable, sans biais de discrimination ?",
      options: ["Équité", "Inclusion", "Transparence", "Responsabilité"],
      correctIndex: 0,
      explanation:
        "L'équité vise à éviter que le système ne favorise ou ne désavantage certains groupes selon des caractéristiques comme le genre ou l'origine ethnique.",
    },
    {
      id: "azure-ai900-q02",
      domainId: "workloads-ia",
      difficulty: "moyen",
      question:
        "Une banque veut détecter en temps réel des transactions inhabituelles pouvant indiquer une fraude. À quel type de charge de travail d'IA cela correspond-il le mieux ?",
      options: [
        "Vision par ordinateur",
        "IA de décision (détection d'anomalies)",
        "Traitement du langage naturel",
        "IA générative",
      ],
      correctIndex: 1,
      explanation:
        "Repérer des transactions atypiques par rapport à un comportement habituel est un cas typique de détection d'anomalies, une charge de travail d'IA de décision.",
    },
    {
      id: "azure-ai900-q03",
      domainId: "workloads-ia",
      difficulty: "facile",
      question:
        "Quel service Azure sert de portail unifié pour créer, tester et déployer des solutions d'IA incluant modèles génératifs, vision et langage ?",
      options: ["Azure AI Foundry", "Azure DevOps", "Azure Monitor", "Azure Data Factory"],
      correctIndex: 0,
      explanation:
        "Azure AI Foundry centralise le catalogue de modèles, les espaces de test et le déploiement des services d'IA de Microsoft dans un seul portail.",
    },
    {
      id: "azure-ai900-q04",
      domainId: "workloads-ia",
      difficulty: "moyen",
      question:
        "Un hôpital déploie un système d'IA d'aide au diagnostic et veut que les médecins comprennent toujours pourquoi une recommandation a été formulée. Quel principe d'IA responsable est ici prioritairement concerné ?",
      options: ["Confidentialité et sécurité", "Transparence", "Inclusion", "Fiabilité et sécurité"],
      correctIndex: 1,
      explanation:
        "La transparence exige que les utilisateurs puissent comprendre le fonctionnement et les limites d'un système d'IA, ce qui est essentiel avant d'agir sur ses recommandations.",
    },
    {
      id: "azure-ai900-q05",
      domainId: "workloads-ia",
      difficulty: "difficile",
      question:
        "Une entreprise déploie un chatbot d'IA générative en production sans aucune supervision humaine sur les décisions de remboursement client. Quel principe d'IA responsable est le plus directement mis en cause si le système prend des décisions erronées sans recours possible ?",
      options: ["Inclusion", "Responsabilité", "Équité", "Confidentialité et sécurité"],
      correctIndex: 1,
      explanation:
        "Le principe de responsabilité exige que des personnes restent garantes du comportement du système et que des mécanismes de supervision et de recours existent pour les décisions à fort impact.",
    },
    {
      id: "azure-ai900-q06",
      domainId: "workloads-ia",
      difficulty: "facile",
      question: "Laquelle de ces tâches relève de l'IA de connaissance (knowledge mining) ?",
      options: [
        "Extraire automatiquement des informations structurées à partir de milliers de documents PDF archivés",
        "Générer une image à partir d'une description textuelle",
        "Traduire un texte de l'anglais vers le français",
        "Détecter des visages dans une photo",
      ],
      correctIndex: 0,
      explanation:
        "L'IA de connaissance consiste à indexer et rendre exploitable de grands volumes de documents non structurés, comme des archives PDF.",
    },
    {
      id: "azure-ai900-q07",
      domainId: "workloads-ia",
      difficulty: "moyen",
      question:
        "Quel principe d'IA responsable de Microsoft impose que les systèmes d'IA soient conçus pour répondre aux besoins de tous les utilisateurs, y compris les personnes en situation de handicap ?",
      options: ["Fiabilité et sécurité", "Inclusion", "Transparence", "Équité"],
      correctIndex: 1,
      explanation:
        "L'inclusion vise à concevoir des solutions accessibles au plus grand nombre, quelles que soient les capacités physiques ou cognitives des utilisateurs.",
    },
    {
      id: "azure-ai900-q08",
      domainId: "fondamentaux-ml",
      difficulty: "facile",
      question:
        "Quel type d'apprentissage automatique utilise des données étiquetées pour entraîner un modèle à prédire une valeur de sortie connue ?",
      options: ["Apprentissage supervisé", "Apprentissage non supervisé", "Apprentissage par renforcement", "Clustering"],
      correctIndex: 0,
      explanation:
        "L'apprentissage supervisé s'appuie sur des paires caractéristiques-étiquette pour apprendre à prédire la bonne sortie sur de nouvelles données.",
    },
    {
      id: "azure-ai900-q09",
      domainId: "fondamentaux-ml",
      difficulty: "facile",
      question:
        "Une entreprise veut prédire le prix de vente d'une maison à partir de sa surface, de son quartier et de son nombre de pièces. Quel type de modèle est adapté ?",
      options: ["Classification", "Régression", "Clustering", "Détection d'objets"],
      correctIndex: 1,
      explanation:
        "Prédire une valeur numérique continue comme un prix est un problème de régression.",
    },
    {
      id: "azure-ai900-q10",
      domainId: "fondamentaux-ml",
      difficulty: "moyen",
      question:
        "Un supermarché veut regrouper ses clients en segments homogènes à partir de leurs habitudes d'achat, sans connaître à l'avance le nombre ni la nature des groupes. Quelle technique convient ?",
      options: ["Régression", "Classification binaire", "Clustering", "Apprentissage supervisé"],
      correctIndex: 2,
      explanation:
        "Le clustering, une technique d'apprentissage non supervisé, regroupe des observations similaires sans catégories prédéfinies.",
    },
    {
      id: "azure-ai900-q11",
      domainId: "fondamentaux-ml",
      difficulty: "moyen",
      question:
        "Dans Azure Machine Learning, quel outil permet de créer un pipeline d'entraînement de modèle par glisser-déposer, sans écrire de code ?",
      options: ["Les notebooks Jupyter", "Le designer visuel", "Azure CLI", "Azure Data Factory"],
      correctIndex: 1,
      explanation:
        "Le designer visuel d'Azure Machine Learning permet d'assembler un pipeline d'entraînement en enchaînant des modules, sans code.",
    },
    {
      id: "azure-ai900-q12",
      domainId: "fondamentaux-ml",
      difficulty: "difficile",
      question:
        "Un modèle atteint 99 % de précision sur les données d'entraînement mais seulement 62 % sur les données de test. Quel phénomène cela illustre-t-il ?",
      options: ["Sous-apprentissage (underfitting)", "Surapprentissage (overfitting)", "Apprentissage non supervisé", "Biais d'échantillonnage uniquement"],
      correctIndex: 1,
      explanation:
        "Un écart important entre performance à l'entraînement et performance au test est le signal typique d'un surapprentissage : le modèle a mémorisé les données d'entraînement au lieu de généraliser.",
    },
    {
      id: "azure-ai900-q13",
      domainId: "fondamentaux-ml",
      difficulty: "moyen",
      question:
        "Quelle fonctionnalité d'Azure Machine Learning teste automatiquement plusieurs algorithmes et combinaisons d'hyperparamètres pour trouver le meilleur modèle, sans réglage manuel poussé ?",
      options: ["Azure AI Search", "AutoML (apprentissage automatique automatisé)", "Azure AI Vision", "Custom Vision"],
      correctIndex: 1,
      explanation:
        "AutoML automatise la sélection d'algorithmes et le réglage des hyperparamètres pour identifier rapidement un modèle performant.",
    },
    {
      id: "azure-ai900-q14",
      domainId: "fondamentaux-ml",
      difficulty: "facile",
      question:
        "Pour évaluer un modèle de classification qui détecte des emails de spam, laquelle de ces métriques est couramment utilisée ?",
      options: ["RMSE (erreur quadratique moyenne)", "Précision (accuracy)", "Coefficient de corrélation R²", "Silhouette score"],
      correctIndex: 1,
      explanation:
        "La précision (accuracy), ainsi que precision, recall et F1, sont les métriques standard pour évaluer un modèle de classification.",
    },
    {
      id: "azure-ai900-q15",
      domainId: "ia-generative",
      difficulty: "facile",
      question: "Qu'est-ce qu'un modèle de fondation dans le contexte de l'IA générative ?",
      options: [
        "Un petit modèle entraîné uniquement sur les données d'une entreprise",
        "Un modèle de grande taille pré-entraîné sur d'immenses volumes de données, réutilisable pour de nombreuses tâches",
        "Un modèle de clustering non supervisé",
        "Un service de stockage de données Azure",
      ],
      correctIndex: 1,
      explanation:
        "Un modèle de fondation est entraîné une fois sur de vastes volumes de données puis réutilisé, tel quel ou adapté, pour de nombreux usages différents.",
    },
    {
      id: "azure-ai900-q16",
      domainId: "ia-generative",
      difficulty: "facile",
      question: "Quel service Azure permet d'accéder à des modèles comme GPT pour générer du texte, du code ou des images ?",
      options: ["Azure AI Speech", "Azure OpenAI Service", "Azure AI Vision", "Azure AI Document Intelligence"],
      correctIndex: 1,
      explanation:
        "Azure OpenAI Service donne accès aux modèles GPT et DALL-E avec les garanties de sécurité et de conformité d'Azure.",
    },
    {
      id: "azure-ai900-q17",
      domainId: "ia-generative",
      difficulty: "moyen",
      question:
        "Une équipe veut que son assistant IA réponde en s'appuyant sur la documentation interne récente de l'entreprise plutôt que sur les seules connaissances générales figées du modèle. Quelle approche est la plus adaptée ?",
      options: [
        "Augmenter le nombre de tokens du prompt",
        "Utiliser une architecture RAG (génération augmentée de récupération) s'appuyant sur une base documentaire indexée",
        "Réentraîner entièrement le modèle depuis zéro",
        "Réduire la température du modèle",
      ],
      correctIndex: 1,
      explanation:
        "Le RAG permet d'ancrer les réponses dans des documents d'entreprise à jour, récupérés au moment de la requête, sans réentraîner le modèle.",
    },
    {
      id: "azure-ai900-q18",
      domainId: "ia-generative",
      difficulty: "moyen",
      question: "Dans Azure OpenAI Service, que désigne un token ?",
      options: [
        "Une clé d'authentification API",
        "Une unité de texte, mot ou fragment de mot, utilisée par le modèle pour traiter le langage",
        "Un identifiant unique de déploiement de modèle",
        "Un crédit de facturation mensuel fixe",
      ],
      correctIndex: 1,
      explanation:
        "Un token est l'unité de base de texte que le modèle traite pour lire un prompt et générer sa réponse, et sert aussi de base à la facturation.",
    },
    {
      id: "azure-ai900-q19",
      domainId: "ia-generative",
      difficulty: "difficile",
      question:
        "Un modèle génératif produit une réponse factuellement incorrecte mais formulée avec beaucoup d'assurance. Comment appelle-t-on ce phénomène ?",
      options: ["Overfitting", "Hallucination", "Underfitting", "Clustering"],
      correctIndex: 1,
      explanation:
        "Une hallucination est une réponse fausse ou inventée que le modèle génère avec la même confiance qu'une réponse correcte, car il ne vérifie pas la véracité factuelle de ce qu'il produit.",
    },
    {
      id: "azure-ai900-q20",
      domainId: "ia-generative",
      difficulty: "moyen",
      question:
        "Quelle pratique consiste à formuler et affiner soigneusement les instructions données à un modèle génératif pour obtenir une réponse plus pertinente ?",
      options: ["Le prompt engineering", "Le clustering", "Le feature engineering", "Le transfer learning"],
      correctIndex: 0,
      explanation:
        "Le prompt engineering consiste à ajuster la formulation de l'instruction envoyée au modèle sans modifier ses paramètres internes.",
    },
    {
      id: "azure-ai900-q21",
      domainId: "ia-generative",
      difficulty: "difficile",
      question:
        "Une entreprise déploie un chatbot basé sur Azure OpenAI Service et veut réduire le risque que le modèle génère du contenu haineux ou dangereux avant qu'il n'atteigne l'utilisateur. Quel mécanisme Azure met-il en place par défaut à cet effet ?",
      options: [
        "Le chiffrement au repos",
        "Les filtres de contenu intégrés à Azure AI Foundry",
        "La mise en cache des réponses",
        "Le versionnement des modèles",
      ],
      correctIndex: 1,
      explanation:
        "Les filtres de contenu d'Azure AI Foundry analysent entrées et sorties pour détecter et bloquer des catégories de contenu à risque comme la haine ou la violence.",
    },
    {
      id: "azure-ai900-q22",
      domainId: "vision-ordinateur",
      difficulty: "facile",
      question:
        "Quel service Azure permet d'analyser une image pour générer automatiquement une description, détecter des objets et identifier des tags ?",
      options: ["Azure AI Vision", "Azure AI Language", "Azure AI Speech", "Azure Machine Learning designer"],
      correctIndex: 0,
      explanation:
        "Azure AI Vision fournit des capacités prêtes à l'emploi d'analyse d'image : classification, détection d'objets, description et tags.",
    },
    {
      id: "azure-ai900-q23",
      domainId: "vision-ordinateur",
      difficulty: "facile",
      question: "Quelle technologie permet d'extraire du texte imprimé ou manuscrit à partir d'une image scannée ?",
      options: ["OCR (reconnaissance optique de caractères)", "Clustering", "Analyse de sentiment", "Traduction automatique"],
      correctIndex: 0,
      explanation:
        "L'OCR extrait du texte, imprimé ou manuscrit, présent dans une image ou un document scanné.",
    },
    {
      id: "azure-ai900-q24",
      domainId: "vision-ordinateur",
      difficulty: "moyen",
      question:
        "Une entreprise veut entraîner un modèle capable de reconnaître ses propres produits sur des photos, avec seulement quelques dizaines d'images par catégorie et sans écrire de code de deep learning. Quel service Azure est le plus adapté ?",
      options: ["Azure AI Document Intelligence", "Custom Vision", "Azure AI Speech", "Azure AI Language"],
      correctIndex: 1,
      explanation:
        "Custom Vision permet d'entraîner un modèle de classification ou de détection d'objets sur des images propres à l'entreprise, sans code de deep learning.",
    },
    {
      id: "azure-ai900-q25",
      domainId: "vision-ordinateur",
      difficulty: "moyen",
      question: "Quelle différence principale distingue la classification d'image de la détection d'objets ?",
      options: [
        "La classification d'image identifie plusieurs objets avec leurs positions, la détection d'objets n'en identifie qu'un seul",
        "La classification d'image attribue une ou plusieurs étiquettes à l'image entière, la détection d'objets localise chaque objet avec un cadre englobant",
        "Ce sont deux noms pour la même fonctionnalité",
        "La détection d'objets ne fonctionne que sur des vidéos",
      ],
      correctIndex: 1,
      explanation:
        "La classification étiquette l'image dans son ensemble, tandis que la détection d'objets localise précisément chaque élément avec un cadre englobant.",
    },
    {
      id: "azure-ai900-q26",
      domainId: "vision-ordinateur",
      difficulty: "difficile",
      question:
        "Un cabinet comptable veut extraire automatiquement les champs clés, montant, date, fournisseur, de milliers de factures scannées de formats variés. Quel service Azure est spécifiquement conçu pour ce cas d'usage ?",
      options: ["Azure AI Vision (analyse d'image générique)", "Azure AI Document Intelligence", "Custom Vision", "Azure AI Speech"],
      correctIndex: 1,
      explanation:
        "Azure AI Document Intelligence est spécialisé dans l'extraction de champs structurés à partir de documents comme les factures, contrairement à un OCR générique.",
    },
    {
      id: "azure-ai900-q27",
      domainId: "vision-ordinateur",
      difficulty: "facile",
      question:
        "Sur quel type d'architecture de deep learning reposent typiquement les modèles de vision par ordinateur modernes pour analyser les pixels d'une image ?",
      options: ["Réseaux de neurones convolutifs (CNN)", "Arbres de décision", "Régression linéaire simple", "K-means"],
      correctIndex: 0,
      explanation:
        "Les réseaux de neurones convolutifs (CNN) sont l'architecture de référence pour repérer des motifs visuels et reconnaître des objets dans une image.",
    },
    {
      id: "azure-ai900-q28",
      domainId: "vision-ordinateur",
      difficulty: "moyen",
      question:
        "Pour des raisons d'IA responsable, Microsoft a restreint l'accès à certaines fonctionnalités de reconnaissance faciale d'Azure AI Vision. Quelle est la principale raison invoquée ?",
      options: [
        "Le coût de calcul trop élevé",
        "Les risques d'atteinte à la vie privée et de biais discriminatoire liés à l'identification de personnes",
        "Le manque de précision technique du modèle",
        "L'absence de demande du marché",
      ],
      correctIndex: 1,
      explanation:
        "La reconnaissance faciale soulève des risques de vie privée et de biais selon le genre ou la couleur de peau, ce qui a conduit Microsoft à en restreindre l'accès aux clients validés.",
    },
    {
      id: "azure-ai900-q29",
      domainId: "traitement-langage",
      difficulty: "facile",
      question:
        "Quel service Azure permet d'analyser un texte pour en extraire le sentiment, les phrases clés et les entités nommées ?",
      options: ["Azure AI Language", "Azure AI Vision", "Azure Machine Learning", "Azure AI Document Intelligence"],
      correctIndex: 0,
      explanation:
        "Azure AI Language centralise les capacités d'analyse de texte : sentiment, entités nommées, phrases clés et détection de langue.",
    },
    {
      id: "azure-ai900-q30",
      domainId: "traitement-langage",
      difficulty: "facile",
      question:
        "Quelle tâche de NLP consiste à identifier dans un texte des éléments comme des noms de personnes, de lieux ou d'organisations ?",
      options: ["La reconnaissance d'entités nommées (NER)", "La détection d'objets", "Le clustering", "La régression"],
      correctIndex: 0,
      explanation:
        "La reconnaissance d'entités nommées identifie des éléments précis dans un texte, comme des noms de personnes, de lieux ou d'organisations.",
    },
    {
      id: "azure-ai900-q31",
      domainId: "traitement-langage",
      difficulty: "moyen",
      question:
        "Une entreprise veut créer un assistant vocal capable de comprendre des intentions comme réserver une salle ou annuler un rendez-vous à partir de phrases prononcées naturellement. Quel service Azure convient le mieux ?",
      options: ["Azure AI Vision", "Conversational Language Understanding (CLU)", "Azure AI Document Intelligence", "Custom Vision"],
      correctIndex: 1,
      explanation:
        "CLU entraîne un modèle à reconnaître des intentions à partir de phrases en langage naturel, en remplacement de l'ancien service LUIS.",
    },
    {
      id: "azure-ai900-q32",
      domainId: "traitement-langage",
      difficulty: "moyen",
      question: "Quel service Azure convertit un flux audio parlé en texte, et inversement du texte en parole synthétisée ?",
      options: ["Azure AI Speech", "Azure AI Language", "Azure AI Translator", "Azure AI Search"],
      correctIndex: 0,
      explanation:
        "Azure AI Speech regroupe la reconnaissance vocale (speech-to-text) et la synthèse vocale (text-to-speech).",
    },
    {
      id: "azure-ai900-q33",
      domainId: "traitement-langage",
      difficulty: "difficile",
      question:
        "LUIS (Language Understanding) a été progressivement retiré au profit de quel service Azure plus récent, intégré à Azure AI Language ?",
      options: ["Azure AI Document Intelligence", "Conversational Language Understanding (CLU)", "Custom Vision", "Azure AI Speech"],
      correctIndex: 1,
      explanation:
        "CLU a remplacé LUIS pour la compréhension des intentions exprimées en langage naturel, en s'intégrant directement dans Azure AI Language.",
    },
    {
      id: "azure-ai900-q34",
      domainId: "traitement-langage",
      difficulty: "moyen",
      question:
        "Quelle tâche de NLP permet de résumer automatiquement les idées principales d'un texte long sous forme de quelques mots ou expressions ?",
      options: ["L'extraction de phrases clés (key phrase extraction)", "La détection d'objets", "La reconnaissance faciale", "Le clustering d'images"],
      correctIndex: 0,
      explanation:
        "L'extraction de phrases clés identifie les expressions les plus représentatives d'un texte pour en résumer les idées principales.",
    },
    {
      id: "azure-ai900-q35",
      domainId: "traitement-langage",
      difficulty: "difficile",
      question:
        "Un site e-commerce international veut traduire automatiquement les avis clients de plusieurs langues vers le français, puis analyser le sentiment de chaque avis traduit avec un service séparé. Quels sont les deux services Azure à combiner ?",
      options: [
        "Azure AI Vision et Custom Vision",
        "Azure AI Translator et Azure AI Language",
        "Azure AI Speech et Azure AI Document Intelligence",
        "Azure Machine Learning et Azure AI Search",
      ],
      correctIndex: 1,
      explanation:
        "Azure AI Translator traduit le texte des avis, puis Azure AI Language analyse le sentiment du texte traduit : les deux services se combinent naturellement pour ce scénario.",
    },
  ],
  studyPlan: [
    {
      label: "Semaine 1 : poser les bases conceptuelles",
      detail:
        "Lire les modules charges de travail en IA et fondamentaux du machine learning, en insistant sur les six principes de l'IA responsable et la différence entre régression, classification et clustering.",
    },
    {
      label: "Semaine 1 : manipuler Azure Machine Learning",
      detail:
        "Créer un espace de travail Azure Machine Learning en essai gratuit et lancer un pipeline AutoML simple pour visualiser concrètement le cycle entraînement, validation, évaluation.",
    },
    {
      label: "Semaine 2 : approfondir l'IA générative",
      detail:
        "Lire le module IA générative, tester le playground d'Azure AI Foundry pour observer l'effet du prompt et de la température, et comprendre le principe du RAG.",
    },
    {
      label: "Semaine 2 : vision par ordinateur et NLP",
      detail:
        "Lire les modules vision par ordinateur et traitement du langage naturel, puis tester gratuitement les démonstrations en ligne d'Azure AI Vision et d'Azure AI Language.",
    },
    {
      label: "Semaine 3 : glossaire et quiz blancs",
      detail:
        "Revoir l'ensemble du glossaire, faire les 35 questions du quiz bank en conditions chronométrées et identifier les domaines où le taux d'erreur reste élevé.",
    },
    {
      label: "Semaine 3 : révision finale et passage",
      detail:
        "Refaire uniquement les questions ratées, relire la page officielle Microsoft Learn du parcours AI-900, puis réserver la session d'examen chez Pearson VUE.",
    },
  ],
};

export default certification;
