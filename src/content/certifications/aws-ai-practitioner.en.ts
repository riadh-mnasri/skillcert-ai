import type { Certification } from "@/content/types";

const certification: Certification = {
  slug: "aws-ai-practitioner",
  providerId: "aws",
  code: "AIF-C01",
  name: "AWS Certified AI Practitioner",
  level: "Fondamentaux",
  tagline: "AWS's official entry point for proving your grasp of AI and machine learning in a cloud environment.",
  description:
    "The AWS Certified AI Practitioner certification validates a general understanding of artificial intelligence, machine learning, and generative AI, along with knowledge of the AWS services that put them into practice. It targets non-technical profiles as well as developers who want to build up their vocabulary and reference points before going further, for example toward the AWS Machine Learning Engineer or AWS Solutions Architect certifications. It's an excellent starting point for a project manager, product manager, or developer who needs to talk to data teams without necessarily coding a model themselves.",
  officialUrl: "https://aws.amazon.com/certification/certified-ai-practitioner/",
  format: {
    questionCount: 65,
    durationMinutes: 90,
    passingScore: "700/1000 (scaled score)",
    price: "100 USD",
    deliveryMode: "Pearson VUE testing center or online proctoring",
    isOfficialCertification: true,
  },
  domains: [
    {
      id: "fondamentaux-ia-ml",
      title: "Fundamentals of AI and Machine Learning",
      weightPercent: 20,
      summary:
        "The basic definitions of AI, machine learning, and deep learning, the types of learning, and the lifecycle of an ML project.",
    },
    {
      id: "fondamentaux-ia-generative",
      title: "Fundamentals of Generative AI",
      weightPercent: 24,
      summary:
        "Foundation models, the transformer architecture, prompting concepts, and typical use cases for generative AI.",
    },
    {
      id: "applications-modeles-fondation",
      title: "Applications of Foundation Models",
      weightPercent: 28,
      summary:
        "Practical solution design with foundation models: prompt engineering, RAG, fine-tuning, agents, and the related AWS services.",
    },
    {
      id: "ia-responsable",
      title: "Responsible AI Best Practices",
      weightPercent: 14,
      summary:
        "The principles of fairness, explainability, and transparency, along with the AWS tools that help detect and limit bias.",
    },
    {
      id: "securite-conformite-gouvernance",
      title: "Security, Compliance, and Governance for AI Solutions",
      weightPercent: 14,
      summary:
        "Protecting the data used by AI systems, regulatory obligations, and governance mechanisms on AWS.",
    },
  ],
  modules: [
    {
      slug: "comprendre-ia-et-ml",
      domainId: "fondamentaux-ia-ml",
      title: "Understanding Artificial Intelligence and Machine Learning",
      readMinutes: 9,
      summary:
        "The basic definitions of AI, machine learning, and deep learning, the three main types of learning, and the complete lifecycle of an ML project on AWS.",
      keyPoints: [
        "AI, machine learning, deep learning, and generative AI nest inside one another: each is a subset of the previous one.",
        "The three main types of learning are supervised, unsupervised, and reinforcement, each suited to different problems.",
        "An ML project follows a repeatable cycle: data collection and preparation, training, evaluation, deployment, monitoring.",
        "Amazon SageMaker covers this entire lifecycle with a dedicated tool for each step.",
        "Choosing the right metrics (precision, recall, F1, RMSE) depends on the type of problem and its business context.",
      ],
      sections: [
        {
          heading: "Artificial Intelligence, Machine Learning, and Deep Learning",
          body: "Artificial intelligence covers the full range of techniques that let a computer system imitate human cognitive abilities such as reasoning, perception, or decision-making. Machine learning is a subcategory of AI in which the system learns patterns from data rather than following rules hand-coded by a developer. Deep learning is itself a subcategory of machine learning that relies on multi-layer neural networks, capable of processing complex data such as images, sound, or raw text.\n\nGenerative AI is a recent branch of deep learning. Unlike a classification model that predicts a label from a known set, a generative model produces new content: text, images, code, or audio. This hierarchy of concepts comes up often on the AIF-C01 exam, which tests the ability to place a use case in the right category rather than mastery of mathematical formulas.",
        },
        {
          heading: "The Three Main Types of Learning",
          body: "Supervised learning trains a model on labeled data: each example contains both the input variables and the expected outcome. This is the case for bank fraud detection trained on transactions already classified as fraudulent or legitimate, or for predicting real estate prices from past sales.\n\nUnsupervised learning works on unlabeled data. The goal is to discover hidden structure: grouping customers by purchasing behavior (clustering) or detecting abnormal transactions without any prior example of fraud (anomaly detection).\n\nReinforcement learning has an agent learn by trial and error in an environment, maximizing a cumulative reward. AWS DeepRacer, the miniature autonomous car used in AWS competitions, illustrates this principle: the vehicle learns to follow a track by being rewarded when it stays on course.",
        },
        {
          heading: "The Lifecycle of a Machine Learning Project",
          body: "An ML project follows a sequence of steps that repeats with each iteration. Data collection and preparation cover cleaning, handling missing values, and creating useful new variables (feature engineering). Next comes training, where the dataset is split into a training set, a validation set for tuning hyperparameters, and a test set reserved for the final evaluation.\n\nEvaluation compares the model's predictions to reality using metrics suited to the problem. Deployment then exposes the model, either through a real-time endpoint for individual predictions or through a batch transform to process large volumes offline. Finally, monitoring detects data drift or performance degradation over time, which triggers a new training cycle.",
        },
        {
          heading: "Amazon SageMaker and the AWS ML Ecosystem",
          body: "Amazon SageMaker is AWS's central managed service for building, training, and deploying machine learning models. SageMaker Studio offers a single integrated development environment for the entire lifecycle. SageMaker Autopilot automates algorithm selection and hyperparameter tuning to produce a model without writing low-level code (AutoML).\n\nSageMaker Data Wrangler simplifies data preparation and transformation directly from a visual interface. SageMaker Feature Store centralizes and shares features across multiple teams and models to avoid recomputing the same transformations. SageMaker Clarify detects bias in data and predictions, and explains the model's decisions. SageMaker Model Monitor continuously watches a deployed model to detect quality drift. SageMaker Ground Truth helps build labeled datasets with the help of human annotators.",
        },
        {
          heading: "Measuring a Model's Performance",
          body: "For a classification problem, the confusion matrix underlies several metrics: accuracy measures the proportion of correct predictions, precision measures the reliability of positive predictions, recall measures the ability to find all actual positive cases, and the F1 score combines precision and recall into a single value. The area under the ROC curve (AUC-ROC) evaluates the model's overall ability to distinguish between classes.\n\nFor a regression problem, root mean squared error (RMSE), mean absolute error (MAE), or the coefficient of determination (R²) are used instead. The choice of metric always depends on the business context: for fraud detection, a high recall is often prioritized even at the cost of some precision, because letting fraud slip through costs more than a false alert that needs checking.",
        },
      ],
    },
    {
      slug: "bases-ia-generative",
      domainId: "fondamentaux-ia-generative",
      title: "The Basics of Generative AI",
      readMinutes: 10,
      summary:
        "Foundation models, the transformer architecture, inference parameters, common use cases, and the limits of generative AI, with a first look at Amazon Bedrock.",
      keyPoints: [
        "A foundation model is trained on massive volumes of data and then adapted to many downstream tasks.",
        "The transformer architecture and its attention mechanism let large language models process the context of an entire text.",
        "Inference parameters (temperature, top-p, top-k, output length) control the creativity and length of generated responses.",
        "Generative AI excels at writing, summarization, code generation, conversation, and image creation, but remains prone to hallucinations.",
        "Amazon Bedrock provides access through a single API to several foundation models, including the Amazon Titan family.",
      ],
      sections: [
        {
          heading: "What Is a Foundation Model",
          body: "A foundation model is a very large model, trained on massive volumes of unlabeled or weakly labeled data, and designed to be reused across many different tasks without having to start from scratch. This versatility sets it apart from traditional machine learning models, which are trained specifically for a single task such as email classification or sales forecasting.\n\nLarge language models (LLMs) are the best-known family of foundation models to the general public, capable of understanding and generating text. Other families exist for images, such as the diffusion models used by image-generation tools, or for audio and video. AWS provides access to several of these families through Amazon Bedrock, without having to manage any dedicated compute infrastructure.",
        },
        {
          heading: "The Transformer Architecture and Core Vocabulary",
          body: "The transformer architecture, introduced in 2017, underlies nearly all of today's large language models. Its central mechanism, attention, lets the model weigh the relative importance of each word in a text against all the others, which gives it a strong grasp of context, even over long passages.\n\nA few terms come up constantly on the exam. A token is a unit of text, often a word or part of a word, that the model manipulates internally. An embedding is a numerical representation of a word, sentence, or document as a vector, which captures meaning so that related concepts have vectors close to one another. The context window refers to the maximum amount of text (measured in tokens) the model can take into account at once, both as input and output.",
        },
        {
          heading: "Controlling Generation: Inference Parameters",
          body: "Several parameters let you adjust the behavior of a generative model without retraining it. Temperature controls the level of randomness in generation: a low temperature produces more deterministic and predictable responses, while a high temperature produces more varied and sometimes more creative responses.\n\nTop-p (nucleus sampling) and top-k limit the set of candidate words at each generation step, respectively by setting a cumulative probability threshold or a fixed number of candidates. The maximum output length caps the number of tokens generated in the response. These parameters are tuned case by case depending on the use: a low temperature suits a factual summary, while a higher temperature suits creative brainstorming.",
        },
        {
          heading: "Use Cases and Limits of Generative AI",
          body: "The most common enterprise use cases for generative AI are writing and rewording text, summarizing long documents, generating and explaining code, customer support chatbots, natural-language-augmented search, and generating images or visual variants for marketing.\n\nThese models remain limited, however. A hallucination is a response generated with confidence but that is factually wrong or made up, a particularly sensitive risk in regulated fields like healthcare or finance. Models can also reproduce biases present in their training data, and using them at scale carries a compute cost and latency that must be factored in from the design stage of a solution.",
        },
        {
          heading: "Amazon Bedrock and the Amazon Titan Family",
          body: "Amazon Bedrock is AWS's managed service that provides access, through a single API, to foundation models from multiple providers (for example Anthropic, Meta, Mistral AI, and Amazon itself) without having to provision or manage compute servers. Bedrock makes it easy to compare several models on the same use case and to customize certain models with your own data.\n\nAmazon Titan is the family of foundation models developed directly by AWS, available in Bedrock. It includes text generation models, embedding models for semantic search, and image generation and editing models. Remembering that Amazon Bedrock is the single entry point to these models, and that Amazon Titan is one of the model families available inside Bedrock, is a point frequently tested on the exam.",
        },
      ],
    },
    {
      slug: "applications-modeles-fondation",
      domainId: "applications-modeles-fondation",
      title: "Designing Applications with Foundation Models",
      readMinutes: 12,
      summary:
        "The practical techniques for building an application around a foundation model: prompt engineering, RAG, fine-tuning, agents, and an overview of applied AI services on AWS.",
      keyPoints: [
        "Prompt engineering (zero-shot, few-shot, chain-of-thought) improves response quality without modifying the model itself.",
        "RAG connects a model to up-to-date, company-specific data, reducing the risk of hallucination.",
        "Fine-tuning adjusts a model's weights on proprietary data when prompting alone is no longer enough.",
        "Bedrock agents orchestrate multiple reasoning steps and can call external tools or APIs.",
        "AWS offers ready-to-use AI services (Comprehend, Textract, Rekognition, Transcribe, Polly, Amazon Q) for specific tasks without building a model.",
      ],
      sections: [
        {
          heading: "Prompt Engineering",
          body: "Prompt engineering consists of phrasing the instruction sent to a model so as to get the best possible response, without changing the model's weights. The zero-shot technique asks for a task directly with no example. The few-shot technique provides a few example question-answer pairs in the prompt to guide the expected format and style. Chain-of-thought prompting explicitly invites the model to spell out its reasoning steps before giving its final answer, which improves reliability on logic or calculation tasks.\n\nA prompt template structures these instructions in a reusable way, with variables to fill in depending on the context. Well designed, prompt engineering is often the first step to try before considering fine-tuning, since it requires no additional training data or extra compute cost.",
        },
        {
          heading: "Retrieval Augmented Generation (RAG)",
          body: "RAG (retrieval augmented generation) connects a foundation model to an external knowledge base at inference time. Rather than relying solely on what the model memorized during training, the system first retrieves the documents most relevant to the question asked, then injects them into the prompt sent to the model. This approach greatly reduces the risk of hallucination and allows answers based on up-to-date or company-specific information, without retraining the model.\n\nOn AWS, Amazon Bedrock Knowledge Bases automates this pipeline: it chunks documents, computes their embeddings, stores them in a vector store (for example Amazon OpenSearch Service or Amazon Aurora with pgvector), and orchestrates the search and the call to the model. RAG is generally the preferred solution when the need is to answer from company documentation rather than to change the model's behavior or style.",
        },
        {
          heading: "Fine-Tuning and Model Customization",
          body: "Fine-tuning adjusts the weights of a pre-trained foundation model using a proprietary dataset, to specialize its behavior for a particular domain, tone, or format. It is relevant when prompt engineering and RAG are no longer enough, for example to get a model to adopt a sector's very specific vocabulary or a strict output format.\n\nAmazon Bedrock allows customizing certain models in two ways: classic fine-tuning with labeled examples, and continued pre-training, which continues training the model on a large corpus of unlabeled text specific to the company. Fine-tuning requires more data, time, and budget than a simple prompt adjustment, and should be reserved for cases where the quality gain justifies it.",
        },
        {
          heading: "Agents and Tool Orchestration",
          body: "A generative AI agent goes beyond simple question-answering: it breaks a complex task down into several steps, decides when to call an external tool (an API, a database, a computation function), then assembles the results to produce a coherent final answer. This ability to call tools is often referred to as function calling or tool use.\n\nAmazon Bedrock Agents automates this orchestration: the agent interprets the user's request, plans the necessary actions, invokes AWS Lambda functions to carry out concrete tasks, and can query a knowledge base via RAG along the way. A typical example is a customer support agent able to check an order's status in a database, then draft a personalized response to the customer.",
        },
        {
          heading: "Overview of AWS Applied AI Services",
          body: "AWS offers a range of managed AI services that don't require building or training a model. Amazon Comprehend extracts information from text: sentiment, named entities, key phrases, detected language. Amazon Textract extracts structured text and data from forms or tables in scanned documents. Amazon Rekognition analyzes images and videos to detect objects, faces, or embedded text. Amazon Transcribe converts speech to text, and Amazon Polly does the reverse, converting text into natural-sounding speech.\n\nAmazon Q extends this logic into ready-to-use generative assistants: Amazon Q Business answers employee questions by drawing on the company's internal data, and Amazon Q Developer helps developers write, understand, and migrate code directly within their development environment. To choose between a ready-to-use service and a solution built on Bedrock, the main criterion is the level of customization required: a standard need is covered by a managed service, while a bespoke need justifies building on foundation models.",
        },
      ],
    },
    {
      slug: "ia-responsable-principes",
      domainId: "ia-responsable",
      title: "Responsible AI: Principles and Implementation",
      readMinutes: 8,
      summary:
        "The pillars of responsible AI championed by AWS, the sources of bias in an AI system, and the concrete tools (SageMaker Clarify, Bedrock Guardrails, AI Service Cards) used to limit them.",
      keyPoints: [
        "AWS structures responsible AI around eight dimensions: fairness, explainability, privacy and security, robustness, governance, transparency, safety, and sustainability.",
        "Bias can come from the training data, the choice of variables, or the way the model is evaluated.",
        "SageMaker Clarify detects bias before and after training, and produces explanations of a model's decisions.",
        "Amazon Bedrock Guardrails filters unwanted content on both the input and output of a generative model.",
        "AWS AI Service Cards publicly document the intended use cases, limits, and performance considerations of each AI model or service.",
      ],
      sections: [
        {
          heading: "The Pillars of Responsible AI According to AWS",
          body: "AWS structures its vision of responsible AI around several complementary dimensions. Fairness aims to limit systematic unfavorable treatment of certain groups of people. Explainability seeks to make a model's decisions understandable, especially in high-stakes contexts such as credit or hiring. Robustness ensures that a system keeps working correctly in the face of unusual data or attempts at manipulation.\n\nGovernance frames the decision-making, validation, and accountability processes around an AI system throughout its lifecycle. Transparency means clearly documenting a system's capabilities and limits for its users. Privacy and security protect the data used by the system, and sustainability accounts for the environmental impact of the compute resources involved. These dimensions don't work against a model's performance; they are an integral part of a successful, lasting deployment.",
        },
        {
          heading: "Where Bias in an AI System Comes From",
          body: "Algorithmic bias refers to a systematic and unwanted difference in treatment between different groups, which can appear at several stages of a model's lifecycle. Bias may already exist in the training data if it reflects historical inequalities or underrepresents certain groups. It can also come from the choice of variables used by the model, if a variable indirectly correlates with a sensitive characteristic such as geographic origin or gender.\n\nBias can finally appear during evaluation, if the chosen metrics don't measure performance separately for each affected subgroup. A model can show excellent overall accuracy while being far more often wrong for a particular subgroup, a phenomenon that stays invisible if you only look at the aggregated metric.",
        },
        {
          heading: "AWS Tools for Detecting and Limiting Bias",
          body: "Amazon SageMaker Clarify integrates at several stages of the ML lifecycle. Before training, it measures statistical imbalances in the dataset, for example an underrepresentation of a group. After training, it computes bias metrics on the predictions themselves and provides feature-importance explanations, notably via the SHAP method, to understand which factors weigh most heavily in a decision.\n\nFor generative AI, Amazon Bedrock Guardrails lets you define filtering rules applied to both the input and output of a model: blocking sensitive topics, filtering toxic or violent content, masking personally identifiable information, and detecting attempts to bypass system instructions (prompt injection). These guardrails apply regardless of the underlying model chosen in Bedrock.",
        },
        {
          heading: "Documenting Transparency: AWS AI Service Cards",
          body: "AWS AI Service Cards are public fact sheets published by AWS for certain AI services and models. Each card describes the intended use cases, discouraged use cases, known limits of the system, as well as the performance and fairness considerations measured by AWS itself. They draw inspiration from the practice of model cards popularized in AI research.\n\nThese cards are a concrete transparency tool for teams building a solution on AWS: they let you check, before choosing a service, that it truly fits the intended use case, and anticipate its limits rather than discovering them in production. For the exam, remember that an AI Service Card documents an existing service; it does not replace an evaluation specific to the final application built by the company.",
        },
      ],
    },
    {
      slug: "securite-conformite-gouvernance-ia",
      domainId: "securite-conformite-gouvernance",
      title: "Securing and Governing AI Solutions",
      readMinutes: 9,
      summary:
        "Protecting the data used by an AI solution on AWS, regulatory compliance obligations, and the governance mechanisms that frame a model's lifecycle.",
      keyPoints: [
        "Encryption at rest and in transit, combined with IAM and VPCs, forms the foundation of security for an AI solution on AWS.",
        "AWS applies a shared responsibility model: AWS secures the infrastructure, the customer remains responsible for configuration and data.",
        "Amazon Macie automatically detects sensitive or personal data stored in Amazon S3.",
        "AWS CloudTrail and AWS Config make it possible to trace actions performed on an AI system and to check its compliance over time.",
        "Regulatory compliance (GDPR, sector-specific frameworks) must be designed in from the start of an AI solution, not bolted on afterward.",
      ],
      sections: [
        {
          heading: "Protecting the Data Used by an AI System",
          body: "Training data, prompts sent to a model, and generated responses are sensitive data that must be protected like any other company data. Encryption at rest protects stored data, for example in Amazon S3 or in a vector database, using AWS Key Management Service (KMS) to manage encryption keys. Encryption in transit protects data as it moves between services, via TLS.\n\nAWS Identity and Access Management (IAM) precisely controls who can invoke a model, view training data, or change a configuration, applying the principle of least privilege. A VPC (Virtual Private Cloud) lets you network-isolate the compute resources used by an AI solution, avoiding any direct exposure to the internet when it isn't necessary.",
        },
        {
          heading: "The Shared Responsibility Model",
          body: "AWS applies the shared responsibility model to its AI services just as it does to the rest of its platform. AWS is responsible for the security of the underlying infrastructure: data centers, hardware, networking, and the virtualization layer. The customer remains responsible for security in the cloud: configuring IAM access, encrypting the data they store there, classifying their sensitive data, and ensuring their use complies with the regulations that apply to their industry.\n\nThis distinction is regularly tested on the exam through scenario-based questions: a customer who leaves an S3 bucket public bears their own responsibility, even though the AWS infrastructure itself remains secure.",
        },
        {
          heading: "Detecting Sensitive Data and Tracing Actions",
          body: "Amazon Macie uses machine learning to automatically scan data stored in Amazon S3 and identify sensitive or personally identifiable information, such as credit card numbers or health data. This kind of tool is especially useful before using a dataset to train or customize a model, to check that no unanonymized sensitive data is present.\n\nAWS CloudTrail records the history of calls made to AWS services, which makes it possible to know who invoked a model, changed a Bedrock configuration, or accessed a dataset, and when. AWS Config continuously evaluates the compliance of resource configurations against defined rules, for example to check that an S3 bucket containing training data stays private.",
        },
        {
          heading: "Regulatory Compliance and Lifecycle Governance",
          body: "An AI solution that processes personal data must comply with the applicable regulatory frameworks, such as GDPR in Europe, as well as any stricter sector-specific rules in healthcare or finance. These obligations concern both training data and data sent at inference time, and must be anticipated from the design of the solution rather than dealt with afterward.\n\nGovernance of an AI system covers its entire lifecycle: tracking the model versions used, documenting design decisions, clearly defining roles and responsibilities among data, security, and business teams, and setting up review processes before each production release. Amazon Bedrock Guardrails and AWS AI Service Cards, already covered in the responsible AI domain, also contribute to this governance by documenting and framing the behavior of the models used.",
        },
      ],
    },
  ],
  glossary: [
    {
      term: "Artificial Intelligence (AI)",
      definition:
        "The set of techniques that let a computer system imitate human cognitive abilities such as reasoning or perception.",
      domainId: "fondamentaux-ia-ml",
    },
    {
      term: "Machine Learning (ML)",
      definition:
        "A subcategory of AI in which a system learns patterns from data rather than following manually coded rules.",
      domainId: "fondamentaux-ia-ml",
    },
    {
      term: "Deep Learning",
      definition:
        "A subcategory of machine learning based on multi-layer neural networks, suited to complex data such as images or text.",
      domainId: "fondamentaux-ia-ml",
    },
    {
      term: "Supervised Learning",
      definition:
        "A type of learning in which the model is trained on labeled data containing both the inputs and the expected outcome.",
      domainId: "fondamentaux-ia-ml",
    },
    {
      term: "Unsupervised Learning",
      definition:
        "A type of learning in which the model discovers hidden structure in unlabeled data, for example through clustering.",
      domainId: "fondamentaux-ia-ml",
    },
    {
      term: "Reinforcement Learning",
      definition:
        "A type of learning in which an agent learns by trial and error in an environment, maximizing a cumulative reward.",
      domainId: "fondamentaux-ia-ml",
    },
    {
      term: "Amazon SageMaker",
      definition:
        "AWS's managed service bundling the tools needed to build, train, evaluate, and deploy machine learning models.",
      domainId: "fondamentaux-ia-ml",
    },
    {
      term: "Foundation Model",
      definition:
        "A very large model trained on massive volumes of data and reusable across many tasks without being retrained each time.",
      domainId: "fondamentaux-ia-generative",
    },
    {
      term: "Generative AI",
      definition:
        "A branch of AI whose models produce new content (text, images, code, audio) rather than simply classifying or predicting a value.",
      domainId: "fondamentaux-ia-generative",
    },
    {
      term: "Large Language Model (LLM)",
      definition:
        "A foundation model trained on vast text corpora, capable of understanding and generating natural language.",
      domainId: "fondamentaux-ia-generative",
    },
    {
      term: "Transformer",
      definition:
        "A neural network architecture, based on an attention mechanism, behind nearly all of today's large language models.",
      domainId: "fondamentaux-ia-generative",
    },
    {
      term: "Token",
      definition:
        "A unit of text, often a word or part of a word, manipulated internally by a language model.",
      domainId: "fondamentaux-ia-generative",
    },
    {
      term: "Embedding",
      definition:
        "A numerical representation of a word, sentence, or document as a vector, which brings concepts of similar meaning closer together.",
      domainId: "fondamentaux-ia-generative",
    },
    {
      term: "Amazon Bedrock",
      definition:
        "AWS's managed service giving access through a single API to foundation models from multiple providers, with no infrastructure to manage.",
      domainId: "fondamentaux-ia-generative",
    },
    {
      term: "Amazon Titan",
      definition:
        "A family of foundation models developed by AWS, available in Amazon Bedrock, covering text, embeddings, and images.",
      domainId: "fondamentaux-ia-generative",
    },
    {
      term: "Prompt Engineering",
      definition:
        "A set of techniques for phrasing the instruction sent to a model to get the best possible response, without modifying its weights.",
      domainId: "applications-modeles-fondation",
    },
    {
      term: "RAG (Retrieval Augmented Generation)",
      definition:
        "A technique that retrieves relevant documents from a knowledge base and injects them into the prompt before generating a response.",
      domainId: "applications-modeles-fondation",
    },
    {
      term: "Fine-Tuning",
      definition:
        "Adjusting the weights of a pre-trained foundation model using a proprietary dataset, to specialize its behavior.",
      domainId: "applications-modeles-fondation",
    },
    {
      term: "Hallucination",
      definition:
        "A response generated by a model with confidence but that is factually wrong or made up.",
      domainId: "applications-modeles-fondation",
    },
    {
      term: "Amazon Q",
      definition:
        "AWS's family of ready-to-use generative assistants, available for employees (Q Business) and for developers (Q Developer).",
      domainId: "applications-modeles-fondation",
    },
    {
      term: "Amazon Comprehend",
      definition:
        "An AWS natural language processing service that extracts sentiment, named entities, and key phrases from text.",
      domainId: "applications-modeles-fondation",
    },
    {
      term: "Amazon Rekognition",
      definition:
        "An AWS image and video analysis service that detects objects, faces, or embedded text.",
      domainId: "applications-modeles-fondation",
    },
    {
      term: "Algorithmic Bias",
      definition:
        "A systematic and unwanted difference in treatment between different groups, which can appear in the data, the variables, or the evaluation of a model.",
      domainId: "ia-responsable",
    },
    {
      term: "Amazon Bedrock Guardrails",
      definition:
        "A Bedrock feature that filters unwanted content on the input and output of a generative model, according to configurable rules.",
      domainId: "ia-responsable",
    },
    {
      term: "AI Governance",
      definition:
        "The set of processes that frame the traceability, validation, and accountability of an AI system throughout its lifecycle.",
      domainId: "securite-conformite-gouvernance",
    },
  ],
  quizBank: [
    {
      id: "aws-aip-q01",
      domainId: "fondamentaux-ia-ml",
      difficulty: "facile",
      question:
        "A company wants to group its customers into similar segments without having any pre-existing labels for those segments. Which type of learning best fits this need?",
      options: [
        "Supervised learning",
        "Unsupervised learning",
        "Reinforcement learning",
        "Deep semi-supervised learning",
      ],
      correctIndex: 1,
      explanation:
        "Clustering customers with no pre-existing label is a classic case of unsupervised learning, which uncovers hidden structure in unlabeled data.",
    },
    {
      id: "aws-aip-q02",
      domainId: "fondamentaux-ia-ml",
      difficulty: "moyen",
      question:
        "A team is training a bank fraud detection model. The actual fraud rate is very low (under 1% of transactions). Which metric is most relevant for evaluating the model's ability to not miss actual fraud?",
      options: [
        "Overall accuracy",
        "Recall",
        "The coefficient of determination (R²)",
        "Root mean squared error (RMSE)",
      ],
      correctIndex: 1,
      explanation:
        "On a heavily imbalanced dataset, overall accuracy is misleading. Recall measures the proportion of actual fraud correctly detected, which is the main concern here.",
    },
    {
      id: "aws-aip-q03",
      domainId: "fondamentaux-ia-ml",
      difficulty: "facile",
      question:
        "Which AWS service helps build a labeled dataset with the help of human annotators?",
      options: [
        "Amazon SageMaker Ground Truth",
        "Amazon SageMaker Clarify",
        "Amazon SageMaker Feature Store",
        "Amazon SageMaker Model Monitor",
      ],
      correctIndex: 0,
      explanation:
        "Amazon SageMaker Ground Truth helps create labeled datasets by relying on human annotators or assisted automation.",
    },
    {
      id: "aws-aip-q04",
      domainId: "fondamentaux-ia-ml",
      difficulty: "moyen",
      question:
        "A data team wants to automate algorithm selection and hyperparameter tuning to quickly produce a model without writing low-level code. Which SageMaker tool fits this need?",
      options: [
        "SageMaker Data Wrangler",
        "SageMaker Autopilot",
        "SageMaker Studio",
        "SageMaker Feature Store",
      ],
      correctIndex: 1,
      explanation:
        "SageMaker Autopilot automates algorithm selection and hyperparameter tuning; it's SageMaker's AutoML component.",
    },
    {
      id: "aws-aip-q05",
      domainId: "fondamentaux-ia-ml",
      difficulty: "difficile",
      question:
        "After several months in production, a scoring model's performance degrades even though its code hasn't changed. What is the most likely explanation?",
      options: [
        "Data drift between the training data and recent data",
        "A change in the model's context window",
        "A decrease in inference temperature",
        "A modification of the model's attention mechanism",
      ],
      correctIndex: 0,
      explanation:
        "A gradual performance decline with no code change is the typical symptom of data drift, when the distribution of real-world data moves away from what was used at training time.",
    },
    {
      id: "aws-aip-q06",
      domainId: "fondamentaux-ia-ml",
      difficulty: "facile",
      question:
        "Which statement correctly describes the relationship between AI, machine learning, and deep learning?",
      options: [
        "Deep learning is a broader category that contains machine learning",
        "Machine learning is a subcategory of AI, and deep learning is a subcategory of machine learning",
        "AI, machine learning, and deep learning mean exactly the same thing",
        "Deep learning and generative AI are strictly interchangeable terms",
      ],
      correctIndex: 1,
      explanation:
        "AI is the broadest category, machine learning is a subcategory of it, and deep learning is a subcategory of machine learning based on deep neural networks.",
    },
    {
      id: "aws-aip-q07",
      domainId: "fondamentaux-ia-ml",
      difficulty: "moyen",
      question:
        "Which SageMaker tool centralizes and shares already-computed features across multiple teams and multiple models?",
      options: [
        "SageMaker Feature Store",
        "SageMaker Clarify",
        "SageMaker Ground Truth",
        "SageMaker Autopilot",
      ],
      correctIndex: 0,
      explanation:
        "SageMaker Feature Store centralizes computed features so that different teams don't recompute the same data transformations.",
    },
    {
      id: "aws-aip-q08",
      domainId: "fondamentaux-ia-ml",
      difficulty: "difficile",
      question:
        "A company wants to predict a property's sale price from its size, location, and year built, using already-known past sales. Which type of machine learning problem best fits this case?",
      options: [
        "An unsupervised classification problem",
        "A supervised regression problem",
        "A reinforcement learning problem",
        "A text generation problem",
      ],
      correctIndex: 1,
      explanation:
        "Predicting a continuous numeric value (the price) from labeled data (past sales with a known price) is a supervised regression problem.",
    },
    {
      id: "aws-aip-q09",
      domainId: "fondamentaux-ia-generative",
      difficulty: "facile",
      question: "What is a foundation model?",
      options: [
        "A model trained on a single specific task and not reusable elsewhere",
        "A very large model trained on immense volumes of data and reusable across many tasks",
        "A clustering algorithm used only in unsupervised learning",
        "An AWS service for storing training data",
      ],
      correctIndex: 1,
      explanation:
        "A foundation model is trained on vast volumes of data and designed to be adapted to many downstream tasks, unlike a model specialized for a single task.",
    },
    {
      id: "aws-aip-q10",
      domainId: "fondamentaux-ia-generative",
      difficulty: "moyen",
      question:
        "A user wants very creative and varied responses from a generative model for a brainstorming session. Which inference parameter setting favors this result?",
      options: [
        "A low temperature",
        "A high temperature",
        "A reduced context window",
        "An output token count of zero",
      ],
      correctIndex: 1,
      explanation:
        "A high temperature increases the randomness of generation and produces more varied, creative responses, suited to brainstorming.",
    },
    {
      id: "aws-aip-q11",
      domainId: "fondamentaux-ia-generative",
      difficulty: "facile",
      question: "Which AWS service provides access through a single API to foundation models from multiple providers?",
      options: [
        "Amazon Bedrock",
        "Amazon Comprehend",
        "Amazon Textract",
        "Amazon Macie",
      ],
      correctIndex: 0,
      explanation:
        "Amazon Bedrock is the managed service that centralizes access to foundation models from multiple providers through a single API, with no infrastructure to manage.",
    },
    {
      id: "aws-aip-q12",
      domainId: "fondamentaux-ia-generative",
      difficulty: "moyen",
      question:
        "In the transformer architecture, which mechanism lets the model weigh the relative importance of each word in a text against the others?",
      options: [
        "The attention mechanism",
        "Top-k sampling",
        "Fine-tuning",
        "The prompt template",
      ],
      correctIndex: 0,
      explanation:
        "The attention mechanism is at the heart of the transformer architecture: it lets the model weigh the importance of each word relative to the others in context.",
    },
    {
      id: "aws-aip-q13",
      domainId: "fondamentaux-ia-generative",
      difficulty: "difficile",
      question:
        "Amazon Titan and Amazon Bedrock often appear together in exam questions. Which statement correctly describes their relationship?",
      options: [
        "Amazon Titan is the service that hosts Amazon Bedrock",
        "Amazon Bedrock is one of the model families available inside Amazon Titan",
        "Amazon Titan is a family of foundation models developed by AWS and available in Amazon Bedrock",
        "Amazon Titan and Amazon Bedrock refer to exactly the same service",
      ],
      correctIndex: 2,
      explanation:
        "Amazon Bedrock is the service that provides access to several families of foundation models, including Amazon Titan, the family developed by AWS itself.",
    },
    {
      id: "aws-aip-q14",
      domainId: "fondamentaux-ia-generative",
      difficulty: "facile",
      question: "Which term refers to a unit of text, often a word or part of a word, manipulated internally by a language model?",
      options: ["An embedding", "A token", "A guardrail", "An endpoint"],
      correctIndex: 1,
      explanation:
        "A token is the basic unit of text a language model processes, whether a whole word or part of a word.",
    },
    {
      id: "aws-aip-q15",
      domainId: "fondamentaux-ia-generative",
      difficulty: "moyen",
      question:
        "A conversational assistant regularly gives confidently stated but false answers about facts it never saw in its training data. What is this phenomenon called?",
      options: ["Data drift", "A hallucination", "Algorithmic bias", "Excessive fine-tuning"],
      correctIndex: 1,
      explanation:
        "A hallucination is a response generated with confidence by a model but that is factually wrong or made up, a characteristic risk of generative models.",
    },
    {
      id: "aws-aip-q16",
      domainId: "fondamentaux-ia-generative",
      difficulty: "difficile",
      question:
        "What is the main difference between a traditional machine learning model and a foundation model used in generative AI?",
      options: [
        "A foundation model can only process numeric data, unlike a traditional model",
        "A traditional model is generally specialized for a single task, while a foundation model is reusable across many tasks",
        "A foundation model never needs training data",
        "A traditional model always uses a transformer architecture, unlike a foundation model",
      ],
      correctIndex: 1,
      explanation:
        "A traditional machine learning model is trained for a specific task, while a foundation model, trained on immense volumes of data, is designed to be reused across multiple tasks.",
    },
    {
      id: "aws-aip-q17",
      domainId: "applications-modeles-fondation",
      difficulty: "moyen",
      question:
        "A company wants its assistant to answer employee questions using its up-to-date internal documentation, without retraining the model and while minimizing the risk of hallucination. Which approach fits best?",
      options: [
        "Full fine-tuning of the model",
        "RAG (retrieval augmented generation)",
        "Increasing the inference temperature",
        "Continued pre-training on a general-purpose corpus",
      ],
      correctIndex: 1,
      explanation:
        "RAG connects the model to internal documentation at the moment of the question, which makes it possible to answer with up-to-date information without retraining the model and while reducing the risk of hallucination.",
    },
    {
      id: "aws-aip-q18",
      domainId: "applications-modeles-fondation",
      difficulty: "facile",
      question: "Which AWS service automatically extracts structured text and table data from scanned documents?",
      options: ["Amazon Rekognition", "Amazon Textract", "Amazon Polly", "Amazon Transcribe"],
      correctIndex: 1,
      explanation:
        "Amazon Textract is the service dedicated to extracting structured text, forms, and tables from scanned documents.",
    },
    {
      id: "aws-aip-q19",
      domainId: "applications-modeles-fondation",
      difficulty: "difficile",
      question:
        "A technical support provider wants an agent capable of checking an order's status in an internal database, then drafting a personalized response to the customer. Which Bedrock service fits this need best?",
      options: ["Amazon Bedrock Knowledge Bases alone", "Amazon Bedrock Guardrails alone", "Amazon Bedrock Agents", "Amazon Bedrock Model Evaluation"],
      correctIndex: 2,
      explanation:
        "Amazon Bedrock Agents orchestrates multiple reasoning steps, can call Lambda functions to check a database, then generate the final response, which exactly matches this scenario.",
    },
    {
      id: "aws-aip-q20",
      domainId: "applications-modeles-fondation",
      difficulty: "moyen",
      question:
        "Which prompt engineering technique consists of providing a few example question-answer pairs directly in the prompt to guide the expected format?",
      options: ["Zero-shot prompting", "Few-shot prompting", "Chain-of-thought prompting", "Fine-tuning"],
      correctIndex: 1,
      explanation:
        "Few-shot prompting provides a few example question-answer pairs in the prompt, which guides the model on the expected format and style without retraining it.",
    },
    {
      id: "aws-aip-q21",
      domainId: "applications-modeles-fondation",
      difficulty: "facile",
      question: "Which AWS service helps developers write, understand, and migrate code directly within their development environment?",
      options: ["Amazon Q Business", "Amazon Q Developer", "Amazon Comprehend", "Amazon Textract"],
      correctIndex: 1,
      explanation:
        "Amazon Q Developer is AWS's generative assistant for developers, integrated into development environments to help write and migrate code.",
    },
    {
      id: "aws-aip-q22",
      domainId: "applications-modeles-fondation",
      difficulty: "difficile",
      question:
        "A team wants a model to durably adopt the very specific vocabulary of a regulated industry and a strict output format, after already trying prompt engineering and RAG without satisfactory results. What is the most logical next step?",
      options: [
        "Only increase the inference temperature",
        "Reduce the model's context window",
        "Consider fine-tuning the model on proprietary data",
        "Disable the model's guardrails",
      ],
      correctIndex: 2,
      explanation:
        "When prompt engineering and RAG are no longer enough to achieve the desired behavior, fine-tuning makes it possible to durably adjust the model's weights on proprietary data specific to the domain.",
    },
    {
      id: "aws-aip-q23",
      domainId: "applications-modeles-fondation",
      difficulty: "moyen",
      question:
        "Which technical component typically stores document embeddings in a RAG architecture on AWS?",
      options: [
        "A vector store such as Amazon OpenSearch Service",
        "Amazon Polly",
        "AWS CloudTrail",
        "Amazon Rekognition",
      ],
      correctIndex: 0,
      explanation:
        "In a RAG architecture, document embeddings are stored in a vector store, for example Amazon OpenSearch Service or Amazon Aurora with pgvector, to enable fast similarity search.",
    },
    {
      id: "aws-aip-q24",
      domainId: "applications-modeles-fondation",
      difficulty: "facile",
      question: "Which AWS service converts text into natural-sounding speech?",
      options: ["Amazon Transcribe", "Amazon Polly", "Amazon Comprehend", "Amazon Lex"],
      correctIndex: 1,
      explanation:
        "Amazon Polly converts text into natural-sounding speech, while Amazon Transcribe does the reverse, converting speech into text.",
    },
    {
      id: "aws-aip-q25",
      domainId: "ia-responsable",
      difficulty: "facile",
      question: "Which AWS tool detects bias in a dataset before training and in predictions after training?",
      options: ["Amazon SageMaker Clarify", "Amazon SageMaker Autopilot", "Amazon Macie", "AWS Config"],
      correctIndex: 0,
      explanation:
        "Amazon SageMaker Clarify measures statistical imbalances before training and computes bias metrics along with explanations after training.",
    },
    {
      id: "aws-aip-q26",
      domainId: "ia-responsable",
      difficulty: "moyen",
      question:
        "A credit scoring model shows excellent overall accuracy, but is much more often wrong for a particular demographic subgroup. Which pillar of responsible AI is directly involved?",
      options: ["Sustainability", "Fairness", "Robustness against attacks", "Context window"],
      correctIndex: 1,
      explanation:
        "A systematic performance gap between subgroups is a fairness issue, even if the model's overall metric looks good.",
    },
    {
      id: "aws-aip-q27",
      domainId: "ia-responsable",
      difficulty: "facile",
      question: "Which Amazon Bedrock feature lets you filter unwanted content on the input and output of a generative model?",
      options: ["Amazon Bedrock Guardrails", "Amazon Bedrock Knowledge Bases", "Amazon Bedrock Agents", "Amazon Bedrock Model Evaluation"],
      correctIndex: 0,
      explanation:
        "Amazon Bedrock Guardrails applies configurable filtering rules to the inputs and outputs of a generative model, independent of the underlying model chosen.",
    },
    {
      id: "aws-aip-q28",
      domainId: "ia-responsable",
      difficulty: "difficile",
      question:
        "At which stage of a model's lifecycle can bias appear, according to the course content?",
      options: [
        "Only in the training data",
        "Only during production deployment",
        "In the training data, in the choice of variables, or in the model's evaluation",
        "Only in the choice of inference temperature",
      ],
      correctIndex: 2,
      explanation:
        "Bias can appear at several stages: in the training data itself, in the choice of variables used by the model, or in how the model is evaluated.",
    },
    {
      id: "aws-aip-q29",
      domainId: "ia-responsable",
      difficulty: "moyen",
      question: "What are AWS AI Service Cards used for?",
      options: [
        "To encrypt a model's training data",
        "To publicly document the intended use cases, limits, and performance considerations of an AI service or model",
        "To automate deploying a model on SageMaker",
        "To replace the evaluation specific to the final application built by the company",
      ],
      correctIndex: 1,
      explanation:
        "AWS AI Service Cards publicly document the intended and discouraged use cases, the known limits, and the performance and fairness considerations of a service or model, without replacing an evaluation specific to each application.",
    },
    {
      id: "aws-aip-q30",
      domainId: "ia-responsable",
      difficulty: "facile",
      question: "Which pillar of responsible AI aims to make a model's decisions understandable, especially in high-stakes contexts?",
      options: ["Sustainability", "Explainability", "Network security", "Latency"],
      correctIndex: 1,
      explanation:
        "Explainability seeks to make a model's decisions understandable, which is especially important in areas like credit or hiring.",
    },
    {
      id: "aws-aip-q31",
      domainId: "ia-responsable",
      difficulty: "difficile",
      question:
        "A team wants to detect attempts to bypass a chatbot's system instructions (prompt injection). Which AWS mechanism is specifically designed for this?",
      options: ["Amazon Bedrock Guardrails", "Amazon SageMaker Feature Store", "AWS Config", "Amazon Comprehend"],
      correctIndex: 0,
      explanation:
        "Amazon Bedrock Guardrails includes detection of attempts to bypass system instructions, in addition to filtering toxic content or masking personal information.",
    },
    {
      id: "aws-aip-q32",
      domainId: "ia-responsable",
      difficulty: "moyen",
      question: "Which explainability method, used by SageMaker Clarify, helps understand which factors weigh most heavily in a model's decision?",
      options: ["The SHAP method", "Top-p sampling", "Full fine-tuning", "Chain-of-thought prompting"],
      correctIndex: 0,
      explanation:
        "SageMaker Clarify relies notably on the SHAP method to compute feature importance and explain a model's decisions.",
    },
    {
      id: "aws-aip-q33",
      domainId: "securite-conformite-gouvernance",
      difficulty: "facile",
      question: "In the AWS shared responsibility model, who is responsible for configuring IAM access to an AI solution built on Bedrock?",
      options: ["AWS only", "The customer only", "Neither AWS nor the customer", "Only Pearson VUE"],
      correctIndex: 1,
      explanation:
        "In the shared responsibility model, the customer remains responsible for security in the cloud, including IAM access configuration, while AWS secures the underlying infrastructure.",
    },
    {
      id: "aws-aip-q34",
      domainId: "securite-conformite-gouvernance",
      difficulty: "moyen",
      question:
        "A team wants to check that no unanonymized sensitive data is present in a dataset stored on Amazon S3 before using it for fine-tuning. Which AWS service fits this need?",
      options: ["Amazon Macie", "Amazon Polly", "AWS CloudTrail", "Amazon Rekognition"],
      correctIndex: 0,
      explanation:
        "Amazon Macie uses machine learning to automatically scan S3 data and identify sensitive or personally identifiable information.",
    },
    {
      id: "aws-aip-q35",
      domainId: "securite-conformite-gouvernance",
      difficulty: "facile",
      question: "Which AWS service records the history of calls made to AWS services, including who invoked a model and when?",
      options: ["AWS CloudTrail", "Amazon Comprehend", "AWS Config", "Amazon Textract"],
      correctIndex: 0,
      explanation:
        "AWS CloudTrail records the history of calls made to AWS services, making it possible to trace who invoked a model or changed a configuration.",
    },
    {
      id: "aws-aip-q36",
      domainId: "securite-conformite-gouvernance",
      difficulty: "difficile",
      question:
        "A customer mistakenly leaves an S3 bucket containing training data publicly accessible. Under the shared responsibility model, who bears responsibility for this incident?",
      options: [
        "AWS, because the storage infrastructure is its responsibility",
        "The customer, because configuring access to their data is their responsibility in the cloud",
        "Neither AWS nor the customer, because it's a case of force majeure",
        "Pearson VUE, because it administers the certification exam",
      ],
      correctIndex: 1,
      explanation:
        "Configuring access and protecting stored data falls under the customer's responsibility in the shared responsibility model, even though the AWS infrastructure itself remains secure.",
    },
    {
      id: "aws-aip-q37",
      domainId: "securite-conformite-gouvernance",
      difficulty: "moyen",
      question: "Which AWS service continuously evaluates the compliance of resource configurations against defined rules?",
      options: ["AWS Config", "Amazon Polly", "Amazon Bedrock Guardrails", "SageMaker Ground Truth"],
      correctIndex: 0,
      explanation:
        "AWS Config continuously evaluates the compliance of AWS resource configurations against defined rules, for example to check that a bucket stays private.",
    },
    {
      id: "aws-aip-q38",
      domainId: "securite-conformite-gouvernance",
      difficulty: "facile",
      question: "Which AWS service manages the keys used to encrypt data at rest, for example in Amazon S3?",
      options: ["AWS Key Management Service (KMS)", "Amazon Macie", "Amazon Q", "AWS CloudTrail"],
      correctIndex: 0,
      explanation:
        "AWS Key Management Service (KMS) manages the encryption keys used to protect data at rest, notably in Amazon S3.",
    },
    {
      id: "aws-aip-q39",
      domainId: "securite-conformite-gouvernance",
      difficulty: "difficile",
      question:
        "A European company wants to deploy a chatbot based on a foundation model that processes its customers' personal data. At what point must it factor in GDPR obligations?",
      options: [
        "Only after going into production, if an incident occurs",
        "From the design of the solution, even before choosing the model and technical architecture",
        "Only if the model is hosted outside of AWS",
        "GDPR does not apply to generative AI solutions",
      ],
      correctIndex: 1,
      explanation:
        "Regulatory compliance, including GDPR, must be designed in from the start of an AI solution that processes personal data, not added afterward once the system is in production.",
    },
    {
      id: "aws-aip-q40",
      domainId: "securite-conformite-gouvernance",
      difficulty: "moyen",
      question: "Which element is part of the governance of an AI system's lifecycle, according to the course content?",
      options: [
        "Tuning the inference temperature for each request",
        "Tracking model versions and clearly defining roles between teams",
        "Choosing the number of layers in a neural network",
        "The format of the embeddings generated by the model",
      ],
      correctIndex: 1,
      explanation:
        "Governance of an AI system's lifecycle covers tracking model versions, documenting decisions, and clearly defining roles and responsibilities across teams.",
    },
  ],
  studyPlan: [
    {
      label: "Week 1: Lay the AI and ML Foundations",
      detail:
        "Read the Fundamentals of AI and Machine Learning module, memorize the AI/ML/deep learning hierarchy and the three types of learning, then practice with the easy questions from the corresponding domain.",
    },
    {
      label: "Week 1-2: Get into Generative AI",
      detail:
        "Read the module on the fundamentals of generative AI, clearly distinguish foundation model, LLM, token, and embedding, and understand the roles of Amazon Bedrock and Amazon Titan.",
    },
    {
      label: "Week 2: Master Real-World Applications",
      detail:
        "Go deep on the heaviest module (28% of the exam) covering prompt engineering, RAG, fine-tuning, and Bedrock agents, making sure you know which technique to choose for a given scenario.",
    },
    {
      label: "Week 3: Responsible AI and Governance",
      detail:
        "Read the modules on responsible AI and on security, compliance, and governance, focusing on SageMaker Clarify, Bedrock Guardrails, the shared responsibility model, and AWS AI Service Cards.",
    },
    {
      label: "Week 3-4: Review the Glossary and Full Quizzes",
      detail:
        "Go through the entire glossary out loud without looking at the definitions, then run through the full quiz bank under exam conditions (90 minutes, 65 simulated questions) and note the weakest domains.",
    },
    {
      label: "Week 4: Final Targeted Sprint",
      detail:
        "Redo only the questions missed in the previous review, reread the corresponding sections of the relevant modules, then schedule the exam once a stable confidence score is reached across every domain.",
    },
  ],
};

export default certification;
