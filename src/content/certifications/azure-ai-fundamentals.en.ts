import type { Certification } from "@/content/types";

const certification: Certification = {
  slug: "azure-ai-fundamentals",
  providerId: "azure",
  code: "AI-900",
  name: "Microsoft Certified: Azure AI Fundamentals",
  level: "Fondamentaux",
  tagline: "Microsoft's official entry point for understanding artificial intelligence on Azure, with no heavy technical prerequisites.",
  description:
    "Azure AI Fundamentals (AI-900) validates a basic understanding of AI and machine learning concepts, along with the Azure services that implement them: computer vision, natural language processing, generative AI, and responsible AI. It's aimed at AI beginners, non-technical people who work alongside data or AI teams, and developers who want to build a solid foundation before pursuing more advanced Azure AI certifications. It's often the first AI certification taken on a Microsoft path, ahead of AI-102 or DP-100.",
  officialUrl: "https://learn.microsoft.com/fr-fr/credentials/certifications/azure-ai-fundamentals/",
  format: {
    questionCount: 45,
    durationMinutes: 45,
    passingScore: "700/1000 (scaled score; the exact number of correct answers required varies by session, typically out of 40 to 60 questions total)",
    price: "99 USD",
    deliveryMode: "Pearson VUE testing center or online proctoring",
    isOfficialCertification: true,
  },
  domains: [
    {
      id: "workloads-ia",
      title: "Describe AI workloads and considerations",
      weightPercent: 20,
      summary:
        "Identify the main families of artificial intelligence workloads and apply Microsoft's six responsible AI principles to a given scenario.",
    },
    {
      id: "fondamentaux-ml",
      title: "Describe fundamental machine learning concepts",
      weightPercent: 25,
      summary:
        "Understand the types of machine learning, regression, classification, and clustering tasks, and know how to use Azure Machine Learning to train and evaluate a model.",
    },
    {
      id: "ia-generative",
      title: "Describe generative AI capabilities on Azure",
      weightPercent: 20,
      summary:
        "Understand foundation models and large language models, and know how to use Azure OpenAI Service along with prompt engineering and RAG techniques.",
    },
    {
      id: "vision-ordinateur",
      title: "Describe computer vision capabilities on Azure",
      weightPercent: 18,
      summary:
        "Distinguish between image classification, object detection, and OCR, and know when to use Azure AI Vision, Custom Vision, or Azure AI Document Intelligence.",
    },
    {
      id: "traitement-langage",
      title: "Describe natural language processing (NLP) capabilities on Azure",
      weightPercent: 17,
      summary:
        "Understand common NLP tasks and know how to apply Azure AI Language, Azure AI Speech, and Azure AI Translator depending on the scenario.",
    },
  ],
  modules: [
    {
      slug: "charges-travail-ia",
      domainId: "workloads-ia",
      title: "AI Workloads and Considerations on Azure",
      readMinutes: 8,
      summary:
        "This module introduces the main families of artificial intelligence workloads and the six responsible AI principles that Microsoft applies across all of its Azure solutions.",
      keyPoints: [
        "AI workloads fall into vision, language, generative AI, decision-making AI, and knowledge mining.",
        "Microsoft's six responsible AI principles are fairness, reliability and safety, privacy and security, inclusiveness, transparency, and accountability.",
        "Azure AI Foundry brings Microsoft's AI services together in a single portal for building, testing, and deploying solutions.",
        "Each workload family maps to specific Azure services suited to that use case.",
        "Responsible AI shapes a project's design from the start, it isn't bolted on afterward.",
      ],
      sections: [
        {
          heading: "The main families of AI workloads",
          body:
            "An AI workload is a type of task handed off to an artificial intelligence system rather than to traditional computing. Microsoft distinguishes five main workload families that show up throughout the AI-900 exam.\n\n- Computer vision analyzes images or video to classify content, detect objects, recognize text, or describe a scene.\n- Natural language processing (NLP) works on text or speech to extract meaning: sentiment, entities, intent, translation.\n- Generative AI creates original content, text, image, or code, from foundation models trained on massive volumes of data.\n- Decision-making AI helps make automated decisions or detect anomalies, for example flagging a suspicious bank transaction.\n- Knowledge mining involves indexing and searching information across large volumes of unstructured documents.\n\nEach family maps to different Azure services, but they all rest on the same foundation: models trained on data, exposed through APIs or SDKs that developers integrate into their applications.",
        },
        {
          heading: "Microsoft's six responsible AI principles",
          body:
            "Microsoft has formalized six principles that any AI solution built on Azure must respect. They form the backbone of the AI considerations portion of the AI-900 exam.\n\n- Fairness: an AI system must treat all groups of users comparably, without introducing or amplifying discriminatory biases related to gender, ethnicity, or other characteristics.\n- Reliability and safety: the system must perform as intended, hold up under edge cases, and be rigorously tested before going into production, particularly for high-stakes uses like healthcare or transportation.\n- Privacy and security: personal data used to train or run the system must be protected in line with regulations, with restricted access and appropriate encryption.\n- Inclusiveness: solutions must be designed to meet the needs of as many people as possible, including people with disabilities.\n- Transparency: users and stakeholders should be able to understand how an AI system makes its decisions and know its limitations.\n- Accountability: people must remain responsible for the system's behavior, with governance mechanisms and human oversight, particularly for high-impact automated decisions.\n\nThese principles apply just as much to a simple classification model as to a generative chatbot deployed at scale.",
        },
        {
          heading: "Azure AI Foundry, the unified portal for AI services",
          body:
            "Azure AI Foundry, formerly known as Azure AI Studio and before that Azure AI services, centralizes access to Microsoft's artificial intelligence services in a single portal. It lets you browse a catalog of models, including Azure OpenAI models and open-source models, test them directly in a playground before deploying them, and monitor their behavior in production.\n\nThe portal also offers tools for evaluating the quality and safety of generated responses, along with configurable content filters to block inappropriate output. For an AI-900 candidate, the key takeaway is that Azure AI Foundry isn't an AI service in itself but the management environment that brings vision, language, speech, generative AI, and machine learning together under one development interface.",
        },
        {
          heading: "Matching the right Azure service to the right use case",
          body:
            "Part of the exam involves recognizing, from a scenario description, which Azure service fits the need. A few useful reference points:\n\n- Analyzing photos of products on a shelf to check they're positioned correctly: Azure AI Vision.\n- Understanding the tone of customer reviews left on an e-commerce site: Azure AI Language.\n- Automatically generating meeting summaries or drafting email replies: Azure OpenAI Service.\n- Detecting unusual spikes in a building's electricity consumption: an anomaly-detection decision AI model.\n- Quickly finding a specific clause across thousands of archived PDF contracts: Azure AI Search combined with Azure AI Document Intelligence.\n\nThis ability to connect a business scenario to its workload family and then to the matching Azure service is directly tested in several questions on the real exam.",
        },
      ],
    },
    {
      slug: "fondamentaux-machine-learning",
      domainId: "fondamentaux-ml",
      title: "Machine Learning Fundamentals",
      readMinutes: 11,
      summary:
        "This module covers the basic concepts of machine learning: types of learning, regression, classification, clustering, and the Azure Machine Learning tooling used to train and evaluate models.",
      keyPoints: [
        "Supervised learning uses labeled data, unsupervised learning works on unlabeled data.",
        "Regression predicts a continuous numeric value, classification predicts a category.",
        "Clustering groups similar observations together without knowing the categories in advance.",
        "Azure Machine Learning offers a studio with a visual designer, notebooks, and AutoML for training models.",
        "Overfitting happens when a model memorizes the training data instead of generalizing.",
        "Evaluation metrics, such as precision, recall, or RMSE depending on the task, let you objectively measure a model's quality.",
      ],
      sections: [
        {
          heading: "Supervised, unsupervised, and reinforcement learning",
          body:
            "Machine learning is a system's ability to learn patterns from data rather than follow explicitly coded rules. There are three main approaches.\n\nSupervised learning trains a model on labeled data: each example consists of features and a known label, the value you're trying to predict. A model that learns to recognize spam email from examples already classified as spam or not spam is an example of supervised learning.\n\nUnsupervised learning works on unlabeled data. The model looks for structures or natural groupings on its own, for example segmenting a customer base into homogeneous groups without knowing in advance how many groups exist or what characterizes them.\n\nReinforcement learning trains an agent to make sequential decisions in an environment, rewarding or penalizing it based on the outcomes of its actions. This learning mode gets less coverage on the AI-900 exam but is still useful for placing machine learning in context.",
        },
        {
          heading: "Regression, classification, and clustering",
          body:
            "Within supervised learning, two main tasks stand out depending on the nature of the value being predicted.\n\nRegression predicts a continuous numeric value. Estimating a home's sale price from its square footage, location, and number of rooms is a regression problem: the output can take any value within a continuous range.\n\nClassification predicts a category from a finite set of classes. Determining whether an email is spam or not, or whether an X-ray image shows an abnormality or not, are binary classification problems. When there are more than two possible categories, such as recognizing the type of fruit in a photo, it's called multiclass classification.\n\nClustering, which belongs to unsupervised learning, groups similar observations together based on their features, without knowing any predefined categories. This is the technique used for customer segmentation, detecting at-risk groups, or grouping similar documents.\n\nIn Azure Machine Learning designer, these three task families map to ready-made modules that you can assemble visually into a pipeline, without writing any code.",
        },
        {
          heading: "The model training cycle: data, training, validation, testing",
          body:
            "Training a model follows a multi-step cycle. You start with a dataset that's typically split into three subsets: the training data, on which the model learns its parameters; the validation data, used to tune hyperparameters and compare multiple models; and the test data, reserved for a final evaluation on examples the model has never seen.\n\nThis split is essential for catching two common problems. Underfitting occurs when a model is too simple to capture the patterns present in the data, resulting in poor performance on both the training and test sets. Overfitting, conversely, occurs when a model memorizes the quirks of the training data, including its noise, to the point of performing very well on that data but generalizing poorly to new data. A large gap between accuracy on the training data and accuracy on the test data is the telltale sign of overfitting.\n\nA representative test set, kept separate from the training data, remains the only reliable way to know whether a model will actually be useful in real-world conditions.",
        },
        {
          heading: "Azure Machine Learning: studio, designer, AutoML, and notebooks",
          body:
            "Azure Machine Learning is the Azure service dedicated to training, deploying, and managing the lifecycle of machine learning models. It's organized around a workspace that centralizes data, experiments, registered models, and compute resources.\n\nSeveral ways of working coexist in the Azure Machine Learning studio. The visual designer lets you build a training pipeline by dragging and dropping, chaining together data preparation, training, and evaluation modules, without writing any code. The built-in notebooks, based on Python and the Azure Machine Learning SDK, suit data scientists who prefer a code-first approach. AutoML, or automated machine learning, automatically tests multiple algorithms and hyperparameter combinations on a given dataset, then ranks the resulting models by performance, which makes it possible to quickly get a solid model without deep data science expertise.\n\nOnce trained, a model can be registered in the model registry and then deployed as a real-time or batch endpoint, exposed through a REST API that applications can call.",
        },
        {
          heading: "Evaluating model performance",
          body:
            "Evaluating a model requires metrics suited to the task. For a classification model, the confusion matrix cross-references predictions with actual values; it's used to calculate overall accuracy (the proportion of correct predictions), precision (the proportion of positive predictions that are actually correct), and recall (the proportion of actual positive cases correctly detected). The F1 score combines precision and recall into a single value, useful when classes are imbalanced.\n\nFor a regression model, you instead use root mean squared error (RMSE), mean absolute error (MAE), or the coefficient of determination R², which measures the share of variance explained by the model.\n\nFor clustering, with no ground-truth labels available, you rely on internal metrics like the silhouette score, which evaluates how close observations within the same group are to each other relative to other groups.\n\nChoosing the right metric for the type of problem is a skill directly tested on the AI-900 exam.",
        },
      ],
    },
    {
      slug: "ia-generative-azure",
      domainId: "ia-generative",
      title: "Generative AI Capabilities on Azure",
      readMinutes: 10,
      summary:
        "This module explains how foundation models and large language models work, and introduces Azure OpenAI Service along with best practices for prompt engineering and retrieval-augmented generation (RAG).",
      keyPoints: [
        "Foundation models are pretrained on massive volumes of data and can be reused across many tasks.",
        "Azure OpenAI Service provides access to models like GPT and DALL-E through a secure Azure infrastructure.",
        "Prompt engineering involves crafting precise instructions to guide a generative model's response.",
        "Retrieval-augmented generation (RAG) grounds a model's responses in up-to-date company documents.",
        "Generative models can hallucinate, meaning they can produce false answers with confidence.",
        "Azure AI Foundry provides content filters to limit inappropriate or dangerous responses.",
      ],
      sections: [
        {
          heading: "From foundation models to large language models",
          body:
            "A foundation model is a large model, trained once on massive volumes of text, code, or image data, then reused as-is or lightly adapted for many different tasks, rather than retrained from scratch for each use. This approach contrasts with classic machine learning models, which are usually trained on a narrow dataset for a single, specific task.\n\nMost foundation models used in generative AI rely on a neural network architecture called the transformer, which lets the model process text while taking into account the context of each word relative to the whole sentence or document, rather than word by word in isolation. This architecture is what made large language models (LLMs) like the GPT family possible, capable of generating coherent text, summarizing documents, translating, or writing code from a simple natural language instruction.",
        },
        {
          heading: "Azure OpenAI Service",
          body:
            "Azure OpenAI Service provides access, within an Azure subscription, to models developed by OpenAI such as the GPT family for text and code generation, or DALL-E for generating images from a text description. The service also includes embedding models, which convert text into a numeric vector representing its meaning, useful for semantic search or grouping documents that are close in meaning.\n\nThe main advantage of Azure OpenAI Service over direct access to the OpenAI API lies in the enterprise-grade guarantees provided by Azure: network isolation, regulatory compliance, data residency in a chosen region, authentication through Microsoft Entra ID, and integration with other Azure services. Model deployments are now managed and monitored from Azure AI Foundry, which centralizes model selection, configuration, and usage tracking.",
        },
        {
          heading: "Prompt engineering, the art of asking well",
          body:
            "Prompt engineering is the practice of crafting and refining the instruction, the prompt, sent to a generative model in order to get the most relevant response possible, the completion, without changing the model's internal parameters.\n\nA few technical concepts come up regularly on the exam. A token is the unit of text, a word or word fragment, that the model processes to read a prompt and generate its response; Azure OpenAI Service billing is generally based on the number of tokens consumed. The context window is the maximum number of tokens, prompt and response combined, that the model can process in a single request. The temperature parameter controls how creative or deterministic the response is: a low temperature produces more predictable, repeatable responses, while a high temperature produces more varied, sometimes more original responses.\n\nProviding examples in the prompt, an approach known as few-shot prompting, or precisely describing the role the model should play, for example you are an assistant who only answers in short sentences, generally improves the quality and consistency of the responses obtained.",
        },
        {
          heading: "Retrieval-augmented generation (RAG)",
          body:
            "A foundation model has knowledge frozen at the time of its training and, by definition, knows nothing about a company's internal documents or recent events. Retrieval-augmented generation, or RAG, addresses this limitation by grounding the model's responses in an external, up-to-date knowledge base, without needing to retrain the model.\n\nThe principle involves first indexing company documents as embedding vectors in a search store, such as Azure AI Search. When a user asks a question, the system first searches for the most relevant document excerpts by semantic similarity, then inserts them into the prompt sent to the generative model as additional context. The model then generates its response based on these real excerpts rather than solely on its training memory, which reduces the risk of a fabricated answer and allows the original sources to be cited.",
        },
        {
          heading: "Risks and best practices: hallucinations and content filters",
          body:
            "A generative model can produce a hallucination, meaning a false or fabricated response stated with the same confidence as a correct one. This phenomenon stems from how the model works: it generates the most statistically likely sequence of words without checking the factual accuracy of what it produces. That's why high-stakes scenarios, such as medical or legal advice, require human oversight before any action is taken based on a generated response.\n\nAzure AI Foundry includes content filters applied by default to generative model deployments, which analyze inputs and outputs to detect and block categories of content deemed risky: hate, violence, sexual content, or self-harm. These filters, which can be adjusted based on the context of use, are a concrete application of the responsible AI principles introduced in the first module of this course, particularly reliability and safety, to the specifics of generative AI.",
        },
      ],
    },
    {
      slug: "vision-par-ordinateur-azure",
      domainId: "vision-ordinateur",
      title: "Computer Vision Capabilities on Azure",
      readMinutes: 9,
      summary:
        "This module covers the main computer vision tasks, classification, object detection, and OCR, along with the associated Azure services, including Azure AI Vision, Custom Vision, and Azure AI Document Intelligence.",
      keyPoints: [
        "Computer vision models generally rely on convolutional neural networks (CNNs) that analyze an image's pixels.",
        "Azure AI Vision provides ready-to-use capabilities: image description, object detection, OCR, face detection.",
        "Custom Vision lets you train a classification or detection model on a company's own images, without writing any deep learning code.",
        "Azure AI Document Intelligence automatically extracts structured fields from documents like invoices or forms.",
        "The use of facial recognition on Azure is deliberately restricted for responsible AI reasons.",
      ],
      sections: [
        {
          heading: "How a machine sees an image",
          body:
            "To a computer, a digital image is a matrix of pixels, each defined by numeric values representing its brightness and color, for example three channels, red, green, and blue, for a color image. A computer vision model learns to recognize patterns in this matrix of numbers rather than seeing an image the way a human does.\n\nMost modern computer vision models rely on convolutional neural networks (CNNs), a deep learning architecture specifically designed to spot local patterns, such as edges, textures, or shapes, and then progressively combine them into higher-level concepts, up to recognizing an entire object. Training such a model from scratch generally requires large volumes of annotated images and significant computing power, which explains the appeal of the ready-to-use services offered by Azure.",
        },
        {
          heading: "Azure AI Vision, ready-to-use capabilities",
          body:
            "Azure AI Vision brings together several computer vision capabilities accessible directly through an API, with no training required. Image classification assigns one or more descriptive labels to an entire image, for example beach, sunset, person. Object detection goes further by identifying each object present in the image with a bounding box marking its position.\n\nThe OCR feature, optical character recognition, extracts printed or handwritten text present in an image, whether it's a photographed sign or a scanned document. Azure AI Vision also offers automatic generation of descriptive image captions and detection of moderated content, explicit or shocking images, useful for filtering user-generated content. Face detection, which is more sensitive, does exist but remains deliberately limited in access, as detailed in the last section of this module.",
        },
        {
          heading: "Custom Vision: training your own model without deep learning",
          body:
            "Custom Vision is the Azure service for training a computer vision model tailored to a specific business need, without writing any deep learning code. A company that wants to recognize its own product references, detect defects on a manufacturing line, or identify specific plant types can create a project in the Custom Vision portal, upload its own images, label them manually, and then run a training job.\n\nThe service supports two types of tasks: classification, which assigns a label to the entire image, for example conforming part or defective part, and object detection, which precisely locates each target element within the image. After training, Custom Vision automatically evaluates the model's accuracy on a test set and lets you iterate by adding more images for the categories that are recognized least reliably, before publishing the model as a production-ready endpoint.",
        },
        {
          heading: "Azure AI Document Intelligence: extracting structured data",
          body:
            "Azure AI Document Intelligence, formerly Form Recognizer, is the Azure service specialized in extracting structured data from semi-structured documents like invoices, receipts, ID cards, or business forms. Unlike plain OCR, which extracts raw text, this service understands the document's structure: it automatically maps each value to its field, for example the total amount to the Total label, the issue date to the Date label, or reconstructs a table's contents row by row.\n\nThe service offers prebuilt models for the most common document types, invoices, receipts, ID cards, business cards, ready to use with no training required, as well as the option to train a custom model on a set of documents specific to an organization when their layout doesn't match any standard model. This is the service to reach for whenever a scenario involves automating the processing of invoices, purchase orders, or administrative forms.",
        },
        {
          heading: "Responsible AI considerations specific to computer vision",
          body:
            "Facial recognition holds a special place among Azure's computer vision capabilities because of the risks it raises around privacy and fairness. Studies have shown that some facial recognition models have higher error rates depending on the gender or skin tone of the people photographed, which can lead to discrimination if the system is used to identify individuals, for example in a surveillance or access control context.\n\nFor this reason, Microsoft has restricted access to certain advanced facial recognition capabilities in Azure AI Vision, such as identifying a specific person, to vetted customers who can demonstrate a use case that aligns with responsible AI principles. This restriction is a concrete, computer-vision-specific application of the fairness and privacy and security principles introduced in the first module of this course.",
        },
      ],
    },
    {
      slug: "traitement-langage-naturel-azure",
      domainId: "traitement-langage",
      title: "Natural Language Processing (NLP) Capabilities on Azure",
      readMinutes: 9,
      summary:
        "This module covers common NLP tasks, sentiment analysis, entity extraction, conversational language understanding, and the associated Azure services: Azure AI Language, Azure AI Speech, and Azure AI Translator.",
      keyPoints: [
        "NLP covers tasks such as language detection, sentiment analysis, key phrase extraction, and named entity recognition.",
        "Azure AI Language centralizes these text analysis capabilities in a single service.",
        "Conversational Language Understanding (CLU) has replaced LUIS for understanding intents expressed in natural language.",
        "Azure AI Speech converts speech to text and text to speech, with near real-time speech translation.",
        "Azure AI Translator translates text across more than 100 languages through an API.",
      ],
      sections: [
        {
          heading: "The fundamental tasks of natural language processing",
          body:
            "Natural language processing (NLP) covers the full set of techniques that let a computer understand, analyze, or generate text and speech in human language. Even before an AI model is applied, a text is generally broken down into smaller units, a step called tokenization, and then normalized, for example by reducing each word to its base form, lemmatization, to cut down on the vocabulary variability to process.\n\nSeveral tasks come up regularly in exam scenarios. Language detection automatically identifies the language of a text. Sentiment analysis assesses whether a text expresses a positive, negative, neutral, or mixed opinion, useful for example when analyzing customer reviews at scale. Key phrase extraction summarizes a text's main ideas as a handful of representative expressions. Named entity recognition (NER) identifies specific elements in a text such as names of people, places, organizations, dates, or amounts.",
        },
        {
          heading: "Azure AI Language, the central text analysis service",
          body:
            "Azure AI Language is the Azure service that centralizes these text analysis capabilities, merging what used to be split between Text Analytics and other separate services. It exposes a single API for sending a piece of text and getting back the detected sentiment, the recognized named entities, the extracted key phrases, or the identified language.\n\nThe service also offers more advanced features such as detecting personally identifiable information (PII) in a text, useful for anonymizing documents before processing, and automatically generating summaries from long texts such as meeting transcripts or articles. These features are available with no training required, making it a quick entry point for adding text understanding capabilities to an application.",
        },
        {
          heading: "Conversational Language Understanding (CLU) and intent understanding",
          body:
            "Conversational Language Understanding, or CLU, is the Azure service used to build a model capable of understanding the intent expressed by a user in a natural language sentence, for example distinguishing book a meeting room from cancel an appointment across varied phrasings. CLU has progressively replaced LUIS, Language Understanding, the older service dedicated to this task, by integrating directly into Azure AI Language.\n\nBuilding a CLU model involves defining intents, which represent the actions the user wants to trigger, entities, which represent the useful pieces of information tied to that action such as a date or a room name, and then providing example sentences (utterances) illustrating different ways of expressing each intent. The trained model can then be integrated into a chatbot or voice assistant, often built with Azure AI Bot Service, to interpret user commands and trigger the corresponding action.",
        },
        {
          heading: "Azure AI Speech, bridging speech and text",
          body:
            "Azure AI Speech brings together voice-related capabilities. Speech recognition (speech-to-text) converts a spoken audio stream into written text, useful for automatically transcribing a meeting or enabling voice commands. Text-to-speech does the opposite by generating a synthesized voice from text, with neural voices that reproduce natural intonation close to a human voice.\n\nThe service also offers speech translation, which combines recognition and translation to convert a phrase spoken in one language into text or speech in another language in near real time. These features apply to a variety of scenarios: automatic video captioning, voice assistants, accessibility tools for people who are visually or hearing impaired, or multilingual call centers.",
        },
        {
          heading: "Azure AI Translator, automatic text translation",
          body:
            "Azure AI Translator provides an automatic text translation API supporting more than 100 languages. Unlike Azure AI Speech, which handles audio, Translator works only with written text, whether that's a single sentence sent through the API or entire documents through the document translation feature, which preserves the original formatting.\n\nThe service also lets you define a custom terminology dictionary, to force the translation of terms specific to an industry or a company rather than relying solely on the model's generic translation choices. Combined with Azure AI Language to analyze the sentiment of a text once translated, Azure AI Translator makes it possible to build complete multilingual analysis pipelines, a scenario that comes up regularly in AI-900 exam case studies.",
        },
      ],
    },
  ],
  glossary: [
    {
      term: "Azure AI Foundry",
      definition:
        "Microsoft Azure's unified portal for discovering, testing, customizing, and deploying AI models, including generative, vision, and language models.",
      domainId: "workloads-ia",
    },
    {
      term: "Responsible AI",
      definition:
        "A set of principles and practices aimed at designing AI systems that are fair, reliable, safe, transparent, inclusive, and subject to human oversight.",
      domainId: "workloads-ia",
    },
    {
      term: "Machine learning",
      definition:
        "A branch of AI in which a model learns patterns from data rather than following explicitly coded rules.",
      domainId: "fondamentaux-ml",
    },
    {
      term: "Supervised learning",
      definition:
        "A type of machine learning in which the model is trained on labeled data pairing features with a known output value.",
      domainId: "fondamentaux-ml",
    },
    {
      term: "Unsupervised learning",
      definition:
        "A type of machine learning in which the model looks for structures or groupings within unlabeled data.",
      domainId: "fondamentaux-ml",
    },
    {
      term: "Regression",
      definition:
        "A supervised learning task that involves predicting a continuous numeric value, such as a price or a temperature.",
      domainId: "fondamentaux-ml",
    },
    {
      term: "Classification",
      definition:
        "A supervised learning task that involves predicting a category from a finite set of possible classes.",
      domainId: "fondamentaux-ml",
    },
    {
      term: "Clustering",
      definition:
        "An unsupervised learning technique that groups similar observations together without knowing any predefined categories.",
      domainId: "fondamentaux-ml",
    },
    {
      term: "Azure Machine Learning",
      definition:
        "An Azure service dedicated to training, evaluating, and deploying machine learning models, using a visual designer, notebooks, or AutoML.",
      domainId: "fondamentaux-ml",
    },
    {
      term: "AutoML",
      definition:
        "An Azure Machine Learning feature that automatically tests multiple algorithms and hyperparameters to identify the best-performing model on a given dataset.",
      domainId: "fondamentaux-ml",
    },
    {
      term: "Overfitting",
      definition:
        "A phenomenon in which a model memorizes the quirks of the training data instead of generalizing, which degrades its performance on new data.",
      domainId: "fondamentaux-ml",
    },
    {
      term: "Generative AI",
      definition:
        "A branch of AI capable of creating original content, text, image, or code, from foundation models trained on vast datasets.",
      domainId: "ia-generative",
    },
    {
      term: "Azure OpenAI Service",
      definition:
        "An Azure service providing access, with Azure's security and compliance guarantees, to models such as the GPT family for text and DALL-E for images.",
      domainId: "ia-generative",
    },
    {
      term: "Foundation model",
      definition:
        "A large model pretrained on massive volumes of data, reusable as-is across many tasks without full retraining.",
      domainId: "ia-generative",
    },
    {
      term: "Prompt engineering",
      definition:
        "The practice of crafting and refining the instructions sent to a generative model to get a more relevant response.",
      domainId: "ia-generative",
    },
    {
      term: "Token",
      definition:
        "A unit of text, a word or word fragment, used by a language model to process a prompt and generate its response.",
      domainId: "ia-generative",
    },
    {
      term: "RAG (retrieval-augmented generation)",
      definition:
        "A technique that grounds a generative model's responses in external documents retrieved at query time, rather than relying solely on its training memory.",
      domainId: "ia-generative",
    },
    {
      term: "Hallucination",
      definition:
        "A false or fabricated response that a generative model produces with the same confidence as a correct one.",
      domainId: "ia-generative",
    },
    {
      term: "Azure AI Vision",
      definition:
        "An Azure service that analyzes images for classification, object detection, caption generation, and optical character recognition.",
      domainId: "vision-ordinateur",
    },
    {
      term: "Custom Vision",
      definition:
        "An Azure service for training a classification or object detection model on an organization's own images, without writing any deep learning code.",
      domainId: "vision-ordinateur",
    },
    {
      term: "OCR",
      definition:
        "Optical character recognition, a technique that extracts printed or handwritten text present in an image.",
      domainId: "vision-ordinateur",
    },
    {
      term: "Azure AI Document Intelligence",
      definition:
        "An Azure service that automatically extracts structured fields, such as amounts or dates, from documents like invoices and forms.",
      domainId: "vision-ordinateur",
    },
    {
      term: "Azure AI Language",
      definition:
        "An Azure service that analyzes text to extract sentiment, named entities, key phrases, or the language used.",
      domainId: "traitement-langage",
    },
    {
      term: "Conversational Language Understanding (CLU)",
      definition:
        "An Azure service that trains a model to understand the intent expressed by a user in a natural language sentence, replacing LUIS.",
      domainId: "traitement-langage",
    },
    {
      term: "Azure AI Speech",
      definition:
        "An Azure service combining speech recognition, speech synthesis, and near real-time speech translation.",
      domainId: "traitement-langage",
    },
  ],
  quizBank: [
    {
      id: "azure-ai900-q01",
      domainId: "workloads-ia",
      difficulty: "facile",
      question:
        "Which of Microsoft's responsible AI principles ensures that AI systems treat all groups of users comparably, without discriminatory bias?",
      options: ["Fairness", "Inclusiveness", "Transparency", "Accountability"],
      correctIndex: 0,
      explanation:
        "Fairness aims to prevent the system from favoring or disadvantaging certain groups based on characteristics such as gender or ethnicity.",
    },
    {
      id: "azure-ai900-q02",
      domainId: "workloads-ia",
      difficulty: "moyen",
      question:
        "A bank wants to detect unusual transactions in real time that could indicate fraud. Which type of AI workload does this best correspond to?",
      options: [
        "Computer vision",
        "Decision-making AI (anomaly detection)",
        "Natural language processing",
        "Generative AI",
      ],
      correctIndex: 1,
      explanation:
        "Spotting transactions that deviate from typical behavior is a classic anomaly detection case, a decision-making AI workload.",
    },
    {
      id: "azure-ai900-q03",
      domainId: "workloads-ia",
      difficulty: "facile",
      question:
        "Which Azure service acts as a unified portal for building, testing, and deploying AI solutions, including generative, vision, and language models?",
      options: ["Azure AI Foundry", "Azure DevOps", "Azure Monitor", "Azure Data Factory"],
      correctIndex: 0,
      explanation:
        "Azure AI Foundry centralizes the model catalog, playgrounds, and deployment of Microsoft's AI services in a single portal.",
    },
    {
      id: "azure-ai900-q04",
      domainId: "workloads-ia",
      difficulty: "moyen",
      question:
        "A hospital deploys an AI diagnostic support system and wants doctors to always understand why a recommendation was made. Which responsible AI principle is primarily at stake here?",
      options: ["Privacy and security", "Transparency", "Inclusiveness", "Reliability and safety"],
      correctIndex: 1,
      explanation:
        "Transparency requires that users be able to understand how an AI system works and its limitations, which is essential before acting on its recommendations.",
    },
    {
      id: "azure-ai900-q05",
      domainId: "workloads-ia",
      difficulty: "difficile",
      question:
        "A company deploys a generative AI chatbot in production with no human oversight over customer refund decisions. Which responsible AI principle is most directly at stake if the system makes erroneous decisions with no possible recourse?",
      options: ["Inclusiveness", "Accountability", "Fairness", "Privacy and security"],
      correctIndex: 1,
      explanation:
        "The accountability principle requires that people remain answerable for the system's behavior and that oversight and appeal mechanisms exist for high-impact decisions.",
    },
    {
      id: "azure-ai900-q06",
      domainId: "workloads-ia",
      difficulty: "facile",
      question: "Which of these tasks falls under knowledge mining?",
      options: [
        "Automatically extracting structured information from thousands of archived PDF documents",
        "Generating an image from a text description",
        "Translating text from English to French",
        "Detecting faces in a photo",
      ],
      correctIndex: 0,
      explanation:
        "Knowledge mining involves indexing and making large volumes of unstructured documents, like PDF archives, searchable and usable.",
    },
    {
      id: "azure-ai900-q07",
      domainId: "workloads-ia",
      difficulty: "moyen",
      question:
        "Which of Microsoft's responsible AI principles requires that AI systems be designed to meet the needs of all users, including people with disabilities?",
      options: ["Reliability and safety", "Inclusiveness", "Transparency", "Fairness"],
      correctIndex: 1,
      explanation:
        "Inclusiveness aims to design solutions that are accessible to as many people as possible, regardless of users' physical or cognitive abilities.",
    },
    {
      id: "azure-ai900-q08",
      domainId: "fondamentaux-ml",
      difficulty: "facile",
      question:
        "Which type of machine learning uses labeled data to train a model to predict a known output value?",
      options: ["Supervised learning", "Unsupervised learning", "Reinforcement learning", "Clustering"],
      correctIndex: 0,
      explanation:
        "Supervised learning relies on feature-label pairs to learn how to predict the correct output on new data.",
    },
    {
      id: "azure-ai900-q09",
      domainId: "fondamentaux-ml",
      difficulty: "facile",
      question:
        "A company wants to predict a house's sale price from its square footage, neighborhood, and number of rooms. Which type of model is suited to this?",
      options: ["Classification", "Regression", "Clustering", "Object detection"],
      correctIndex: 1,
      explanation:
        "Predicting a continuous numeric value like a price is a regression problem.",
    },
    {
      id: "azure-ai900-q10",
      domainId: "fondamentaux-ml",
      difficulty: "moyen",
      question:
        "A supermarket wants to group its customers into homogeneous segments based on their purchasing habits, without knowing in advance the number or nature of the groups. Which technique fits?",
      options: ["Regression", "Binary classification", "Clustering", "Supervised learning"],
      correctIndex: 2,
      explanation:
        "Clustering, an unsupervised learning technique, groups similar observations together without predefined categories.",
    },
    {
      id: "azure-ai900-q11",
      domainId: "fondamentaux-ml",
      difficulty: "moyen",
      question:
        "In Azure Machine Learning, which tool lets you build a model training pipeline by dragging and dropping, without writing code?",
      options: ["Jupyter notebooks", "The visual designer", "Azure CLI", "Azure Data Factory"],
      correctIndex: 1,
      explanation:
        "Azure Machine Learning's visual designer lets you assemble a training pipeline by chaining modules together, with no code.",
    },
    {
      id: "azure-ai900-q12",
      domainId: "fondamentaux-ml",
      difficulty: "difficile",
      question:
        "A model achieves 99% accuracy on the training data but only 62% on the test data. What does this illustrate?",
      options: ["Underfitting", "Overfitting", "Unsupervised learning", "Sampling bias only"],
      correctIndex: 1,
      explanation:
        "A large gap between training performance and test performance is the typical sign of overfitting: the model memorized the training data instead of generalizing.",
    },
    {
      id: "azure-ai900-q13",
      domainId: "fondamentaux-ml",
      difficulty: "moyen",
      question:
        "Which Azure Machine Learning feature automatically tests multiple algorithms and hyperparameter combinations to find the best model, without extensive manual tuning?",
      options: ["Azure AI Search", "AutoML (automated machine learning)", "Azure AI Vision", "Custom Vision"],
      correctIndex: 1,
      explanation:
        "AutoML automates algorithm selection and hyperparameter tuning to quickly identify a well-performing model.",
    },
    {
      id: "azure-ai900-q14",
      domainId: "fondamentaux-ml",
      difficulty: "facile",
      question:
        "To evaluate a classification model that detects spam emails, which of these metrics is commonly used?",
      options: ["RMSE (root mean squared error)", "Accuracy", "R² correlation coefficient", "Silhouette score"],
      correctIndex: 1,
      explanation:
        "Accuracy, along with precision, recall, and F1, are the standard metrics for evaluating a classification model.",
    },
    {
      id: "azure-ai900-q15",
      domainId: "ia-generative",
      difficulty: "facile",
      question: "What is a foundation model in the context of generative AI?",
      options: [
        "A small model trained only on a company's own data",
        "A large model pretrained on massive volumes of data, reusable across many tasks",
        "An unsupervised clustering model",
        "An Azure data storage service",
      ],
      correctIndex: 1,
      explanation:
        "A foundation model is trained once on vast volumes of data and then reused, as-is or adapted, for many different uses.",
    },
    {
      id: "azure-ai900-q16",
      domainId: "ia-generative",
      difficulty: "facile",
      question: "Which Azure service provides access to models like GPT for generating text, code, or images?",
      options: ["Azure AI Speech", "Azure OpenAI Service", "Azure AI Vision", "Azure AI Document Intelligence"],
      correctIndex: 1,
      explanation:
        "Azure OpenAI Service provides access to GPT and DALL-E models with Azure's security and compliance guarantees.",
    },
    {
      id: "azure-ai900-q17",
      domainId: "ia-generative",
      difficulty: "moyen",
      question:
        "A team wants its AI assistant to answer based on the company's recent internal documentation rather than solely on the model's fixed general knowledge. Which approach is best suited to this?",
      options: [
        "Increasing the number of tokens in the prompt",
        "Using a RAG (retrieval-augmented generation) architecture built on an indexed document store",
        "Fully retraining the model from scratch",
        "Lowering the model's temperature",
      ],
      correctIndex: 1,
      explanation:
        "RAG grounds responses in up-to-date company documents retrieved at query time, without retraining the model.",
    },
    {
      id: "azure-ai900-q18",
      domainId: "ia-generative",
      difficulty: "moyen",
      question: "In Azure OpenAI Service, what does a token refer to?",
      options: [
        "An API authentication key",
        "A unit of text, a word or word fragment, used by the model to process language",
        "A unique model deployment identifier",
        "A fixed monthly billing credit",
      ],
      correctIndex: 1,
      explanation:
        "A token is the basic unit of text that the model processes to read a prompt and generate its response, and it also serves as the basis for billing.",
    },
    {
      id: "azure-ai900-q19",
      domainId: "ia-generative",
      difficulty: "difficile",
      question:
        "A generative model produces a factually incorrect response but states it with a lot of confidence. What is this phenomenon called?",
      options: ["Overfitting", "Hallucination", "Underfitting", "Clustering"],
      correctIndex: 1,
      explanation:
        "A hallucination is a false or fabricated response the model generates with the same confidence as a correct one, since it doesn't verify the factual accuracy of what it produces.",
    },
    {
      id: "azure-ai900-q20",
      domainId: "ia-generative",
      difficulty: "moyen",
      question:
        "Which practice involves carefully crafting and refining the instructions given to a generative model to get a more relevant response?",
      options: ["Prompt engineering", "Clustering", "Feature engineering", "Transfer learning"],
      correctIndex: 0,
      explanation:
        "Prompt engineering involves adjusting the wording of the instruction sent to the model without changing its internal parameters.",
    },
    {
      id: "azure-ai900-q21",
      domainId: "ia-generative",
      difficulty: "difficile",
      question:
        "A company deploys a chatbot based on Azure OpenAI Service and wants to reduce the risk of the model generating hateful or dangerous content before it reaches the user. Which mechanism does Azure provide by default for this purpose?",
      options: [
        "Encryption at rest",
        "The content filters built into Azure AI Foundry",
        "Response caching",
        "Model versioning",
      ],
      correctIndex: 1,
      explanation:
        "Azure AI Foundry's content filters analyze inputs and outputs to detect and block categories of risky content such as hate or violence.",
    },
    {
      id: "azure-ai900-q22",
      domainId: "vision-ordinateur",
      difficulty: "facile",
      question:
        "Which Azure service can analyze an image to automatically generate a description, detect objects, and identify tags?",
      options: ["Azure AI Vision", "Azure AI Language", "Azure AI Speech", "Azure Machine Learning designer"],
      correctIndex: 0,
      explanation:
        "Azure AI Vision provides ready-to-use image analysis capabilities: classification, object detection, description, and tags.",
    },
    {
      id: "azure-ai900-q23",
      domainId: "vision-ordinateur",
      difficulty: "facile",
      question: "Which technology extracts printed or handwritten text from a scanned image?",
      options: ["OCR (optical character recognition)", "Clustering", "Sentiment analysis", "Machine translation"],
      correctIndex: 0,
      explanation:
        "OCR extracts text, printed or handwritten, present in an image or a scanned document.",
    },
    {
      id: "azure-ai900-q24",
      domainId: "vision-ordinateur",
      difficulty: "moyen",
      question:
        "A company wants to train a model that can recognize its own products in photos, with only a few dozen images per category and without writing any deep learning code. Which Azure service is best suited to this?",
      options: ["Azure AI Document Intelligence", "Custom Vision", "Azure AI Speech", "Azure AI Language"],
      correctIndex: 1,
      explanation:
        "Custom Vision lets you train a classification or object detection model on the company's own images, without deep learning code.",
    },
    {
      id: "azure-ai900-q25",
      domainId: "vision-ordinateur",
      difficulty: "moyen",
      question: "What is the main difference between image classification and object detection?",
      options: [
        "Image classification identifies multiple objects with their positions, object detection identifies only one",
        "Image classification assigns one or more labels to the entire image, object detection locates each object with a bounding box",
        "They are two names for the same feature",
        "Object detection only works on video",
      ],
      correctIndex: 1,
      explanation:
        "Classification labels the image as a whole, while object detection precisely locates each element with a bounding box.",
    },
    {
      id: "azure-ai900-q26",
      domainId: "vision-ordinateur",
      difficulty: "difficile",
      question:
        "An accounting firm wants to automatically extract key fields, amount, date, vendor, from thousands of scanned invoices in varying formats. Which Azure service is specifically designed for this use case?",
      options: ["Azure AI Vision (generic image analysis)", "Azure AI Document Intelligence", "Custom Vision", "Azure AI Speech"],
      correctIndex: 1,
      explanation:
        "Azure AI Document Intelligence specializes in extracting structured fields from documents like invoices, unlike a generic OCR.",
    },
    {
      id: "azure-ai900-q27",
      domainId: "vision-ordinateur",
      difficulty: "facile",
      question:
        "Which deep learning architecture do modern computer vision models typically rely on to analyze an image's pixels?",
      options: ["Convolutional neural networks (CNNs)", "Decision trees", "Simple linear regression", "K-means"],
      correctIndex: 0,
      explanation:
        "Convolutional neural networks (CNNs) are the reference architecture for spotting visual patterns and recognizing objects in an image.",
    },
    {
      id: "azure-ai900-q28",
      domainId: "vision-ordinateur",
      difficulty: "moyen",
      question:
        "For responsible AI reasons, Microsoft has restricted access to certain facial recognition features in Azure AI Vision. What is the main reason cited?",
      options: [
        "The computing cost is too high",
        "The risks to privacy and discriminatory bias tied to identifying individuals",
        "A lack of technical accuracy in the model",
        "A lack of market demand",
      ],
      correctIndex: 1,
      explanation:
        "Facial recognition raises privacy and bias risks based on gender or skin tone, which led Microsoft to restrict its access to vetted customers.",
    },
    {
      id: "azure-ai900-q29",
      domainId: "traitement-langage",
      difficulty: "facile",
      question:
        "Which Azure service can analyze text to extract sentiment, key phrases, and named entities?",
      options: ["Azure AI Language", "Azure AI Vision", "Azure Machine Learning", "Azure AI Document Intelligence"],
      correctIndex: 0,
      explanation:
        "Azure AI Language centralizes text analysis capabilities: sentiment, named entities, key phrases, and language detection.",
    },
    {
      id: "azure-ai900-q30",
      domainId: "traitement-langage",
      difficulty: "facile",
      question:
        "Which NLP task involves identifying elements in a text such as names of people, places, or organizations?",
      options: ["Named entity recognition (NER)", "Object detection", "Clustering", "Regression"],
      correctIndex: 0,
      explanation:
        "Named entity recognition identifies specific elements in a text, such as names of people, places, or organizations.",
    },
    {
      id: "azure-ai900-q31",
      domainId: "traitement-langage",
      difficulty: "moyen",
      question:
        "A company wants to build a voice assistant capable of understanding intents like booking a room or canceling an appointment from naturally spoken sentences. Which Azure service best fits this?",
      options: ["Azure AI Vision", "Conversational Language Understanding (CLU)", "Azure AI Document Intelligence", "Custom Vision"],
      correctIndex: 1,
      explanation:
        "CLU trains a model to recognize intents from natural language sentences, replacing the older LUIS service.",
    },
    {
      id: "azure-ai900-q32",
      domainId: "traitement-langage",
      difficulty: "moyen",
      question: "Which Azure service converts a spoken audio stream into text, and conversely text into synthesized speech?",
      options: ["Azure AI Speech", "Azure AI Language", "Azure AI Translator", "Azure AI Search"],
      correctIndex: 0,
      explanation:
        "Azure AI Speech combines speech recognition (speech-to-text) and speech synthesis (text-to-speech).",
    },
    {
      id: "azure-ai900-q33",
      domainId: "traitement-langage",
      difficulty: "difficile",
      question:
        "LUIS (Language Understanding) was progressively phased out in favor of which more recent Azure service, integrated into Azure AI Language?",
      options: ["Azure AI Document Intelligence", "Conversational Language Understanding (CLU)", "Custom Vision", "Azure AI Speech"],
      correctIndex: 1,
      explanation:
        "CLU replaced LUIS for understanding intents expressed in natural language, integrating directly into Azure AI Language.",
    },
    {
      id: "azure-ai900-q34",
      domainId: "traitement-langage",
      difficulty: "moyen",
      question:
        "Which NLP task automatically summarizes the main ideas of a long text as a handful of words or expressions?",
      options: ["Key phrase extraction", "Object detection", "Facial recognition", "Image clustering"],
      correctIndex: 0,
      explanation:
        "Key phrase extraction identifies the most representative expressions in a text to summarize its main ideas.",
    },
    {
      id: "azure-ai900-q35",
      domainId: "traitement-langage",
      difficulty: "difficile",
      question:
        "An international e-commerce site wants to automatically translate customer reviews from multiple languages into French, then analyze the sentiment of each translated review with a separate service. Which two Azure services should be combined?",
      options: [
        "Azure AI Vision and Custom Vision",
        "Azure AI Translator and Azure AI Language",
        "Azure AI Speech and Azure AI Document Intelligence",
        "Azure Machine Learning and Azure AI Search",
      ],
      correctIndex: 1,
      explanation:
        "Azure AI Translator translates the reviews' text, then Azure AI Language analyzes the sentiment of the translated text: the two services naturally combine for this scenario.",
    },
  ],
  studyPlan: [
    {
      label: "Week 1: laying the conceptual groundwork",
      detail:
        "Read the AI workloads and machine learning fundamentals modules, focusing on the six responsible AI principles and the difference between regression, classification, and clustering.",
    },
    {
      label: "Week 1: hands-on with Azure Machine Learning",
      detail:
        "Create an Azure Machine Learning workspace on a free trial and run a simple AutoML pipeline to see the training, validation, and evaluation cycle in action.",
    },
    {
      label: "Week 2: deepening generative AI knowledge",
      detail:
        "Read the generative AI module, try the Azure AI Foundry playground to see the effect of prompts and temperature, and make sure you understand how RAG works.",
    },
    {
      label: "Week 2: computer vision and NLP",
      detail:
        "Read the computer vision and natural language processing modules, then try the free online demos for Azure AI Vision and Azure AI Language.",
    },
    {
      label: "Week 3: glossary review and practice quizzes",
      detail:
        "Review the entire glossary, work through all 35 questions in the quiz bank under timed conditions, and identify the domains where your error rate stays high.",
    },
    {
      label: "Week 3: final review and taking the exam",
      detail:
        "Redo only the questions you got wrong, reread the official Microsoft Learn AI-900 page, and book your exam session with Pearson VUE.",
    },
  ],
};

export default certification;
