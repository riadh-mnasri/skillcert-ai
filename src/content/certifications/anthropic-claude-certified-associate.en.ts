import type { Certification } from "@/content/types";

const certification: Certification = {
  slug: "anthropic-claude-certified-associate",
  providerId: "anthropic",
  code: "CCA",
  name: "Claude Certified Associate",
  level: "Associate",
  tagline:
    "Master Claude models and the Anthropic API to earn a rigorous, hands-on associate-level certification.",
  description:
    "This prep course for Anthropic's Claude Certified Associate (CCA) certification covers the fundamentals of Claude models, prompt engineering, technical integration with the Anthropic API, responsible AI, and business best practices around agents and RAG. It's designed for developers, product managers, and consultants who use or deploy Claude in the enterprise and want to structure their studying around concrete cases rather than generalities. This content is an independent prep course produced by SkillCert AI, not affiliated with or endorsed by Anthropic: exam details (price, duration, number of questions, passing score) are indicative and should be verified on the official website before registering.",
  officialUrl: "https://www.anthropic.com/learn/certifications",
  format: {
    questionCount: 60,
    durationMinutes: 90,
    passingScore: "75% (indicative)",
    price: "Indicative, verify on the official Anthropic website",
    deliveryMode: "Online, remotely proctored exam",
    isOfficialCertification: true,
  },
  domains: [
    {
      id: "fondamentaux-modeles",
      title: "Claude Model Fundamentals and Product Positioning",
      weightPercent: 18,
      summary:
        "Know the Claude model families, their speed/cost/intelligence trade-offs, the context window, and the available access channels to choose the right model for the use case.",
    },
    {
      id: "ingenierie-prompt",
      title: "Prompt Engineering",
      weightPercent: 24,
      summary:
        "Structure reliable prompts using system prompts, XML tags, few-shot examples, and guided reasoning (chain-of-thought) to get precise, reproducible responses.",
    },
    {
      id: "integration-api",
      title: "Technical Integration with the Anthropic API",
      weightPercent: 28,
      summary:
        "Use the Messages API day to day: streaming, tool use, vision, token management, and cost optimization in a real application.",
    },
    {
      id: "ia-responsable",
      title: "Responsible AI and Usage Policy",
      weightPercent: 16,
      summary:
        "Understand Constitutional AI, red teaming, Anthropic's Usage Policy, and best practices for limiting safety and hallucination risks.",
    },
    {
      id: "cas-usage-metier",
      title: "Business Use Cases and Best Practices",
      weightPercent: 14,
      summary:
        "Know when to build a simple API call, a RAG pipeline, or a full agent, and how to evaluate response quality before going to production.",
    },
  ],
  modules: [
    {
      slug: "panorama-modeles-claude",
      domainId: "fondamentaux-modeles",
      title: "Overview of Claude Models and Product Positioning",
      readMinutes: 9,
      summary:
        "This module introduces the Claude model families, their performance trade-offs, the context window, multimodal capabilities, and the different channels for accessing the Anthropic platform.",
      keyPoints: [
        "Claude comes in several model families offering different trade-offs between intelligence, speed, and cost.",
        "The context window determines how much text the model can take into account in a single request.",
        "Claude can analyze images and, in certain configurations, interact with a graphical interface through computer use.",
        "Access to Claude goes through claude.ai, Claude Code, the direct Anthropic API, or partner cloud platforms like Amazon Bedrock, Google Cloud Vertex AI, or Microsoft Foundry.",
        "The model's knowledge is fixed at a training cutoff date unless external tools (web search, provided documents) are used.",
      ],
      sections: [
        {
          heading: "The Claude Model Families",
          body: "Anthropic's Claude lineup is organized into several model families, historically named Opus, Sonnet, and Haiku, each addressing a different usage profile. Models in the Opus family aim for the highest level of reasoning ability: they're well suited to complex tasks, multi-step reasoning, in-depth document analysis, or driving autonomous agents on open-ended problems. Their cost per token is higher and their latency greater than the other families.\n\nModels in the Sonnet family offer a balanced trade-off between intelligence, speed, and cost. They suit the majority of professional use cases: conversational assistants, content generation, code analysis, automated customer support. It's often the recommended starting point before evaluating whether a more capable or more economical model is needed.\n\nModels in the Haiku family prioritize speed and the lowest cost. They're well suited to simple, repetitive, high-volume tasks: classification, short information extraction, content moderation, request routing. For the exam, keep in mind that choosing a model isn't a question of absolute quality but of matching task complexity, available budget, and latency constraints.",
        },
        {
          heading: "Context Window and Multimodal Capabilities",
          body: "The context window refers to the maximum number of tokens — units of text used by the model — that a request can contain, combining system instructions, conversation history, and provided documents. Recent Claude models offer very large context windows, making it possible to fit a long document, an entire codebase, or an extended conversation history into a single request, where earlier generations of language models required splitting content into small chunks.\n\nBeyond text, Claude is multimodal on input: it can analyze images provided as base64 or via a URL, enabling use cases like reading charts, analyzing screenshots, or describing photos. Certain advanced configurations also support computer use, where Claude observes successive screenshots of an interface and issues actions (clicks, keystrokes) to automate a task on a computer — a use case valuable for automating tests or repetitive business processes.",
        },
        {
          heading: "Where and How to Access Claude",
          body: "The same Claude model can be consumed through several distinct channels. The claude.ai interface targets end users for direct conversational use. Claude Code is a command-line tool built for developers to assist with writing and maintaining code directly in a terminal. The Anthropic API, sometimes called the Claude Developer Platform, lets you integrate Claude programmatically into an application through structured HTTP calls built around the Messages API.\n\nFor companies already committed to a cloud provider, Claude is also available through partner platforms: Amazon Bedrock, Google Cloud Vertex AI, and Microsoft Foundry. These integrations let you take advantage of the billing, governance, and security tooling already in place with that cloud provider, while using the same Claude models. A certification candidate should be able to identify which channel fits which context: rapid prototyping via claude.ai, product integration via the direct API, or deployment in a regulated cloud environment via a partner.",
        },
        {
          heading: "Typical Use Cases and Limits to Know",
          body: "Claude is used in the enterprise for writing assistance, customer support, document summarization, unstructured data analysis, code generation and review, as well as building agents capable of executing multi-step tasks. These use cases share a common thread: they leverage the model's ability to understand natural language and produce structured or conversational output.\n\nIt's just as important to know the model's limits. Claude's knowledge is fixed at a training cutoff date: without access to a web search tool or documents provided in context, the model can't know about events that occurred after that date. Like any large language model, Claude can produce hallucinations — confidently stated but factually incorrect claims — which calls for particular vigilance on high-stakes use cases. Finally, usage cost grows with the volume of tokens processed, which directly ties model choice and prompt optimization to a project's economic viability.",
        },
      ],
    },
    {
      slug: "techniques-ingenierie-prompt",
      domainId: "ingenierie-prompt",
      title: "Prompt Engineering Techniques for Claude",
      readMinutes: 10,
      summary:
        "This module details the prompting techniques that improve the reliability of Claude's responses: system prompts, XML tags, few-shot examples, chain-of-thought, and structuring best practices.",
      keyPoints: [
        "The system prompt defines the assistant's role, tone, and durable constraints for the entire conversation.",
        "XML tags clearly structure the different parts of a prompt (instructions, documents, examples) and improve the model's parsing reliability.",
        "Few-shot examples improve output format consistency more effectively than a long text description.",
        "Chain-of-thought — asking the model to reason step by step — improves quality on complex reasoning tasks.",
        "Placing stable content before variable content in a prompt favors cache reuse and reduces costs.",
      ],
      sections: [
        {
          heading: "The Role of the System Prompt",
          body: "In the Messages API, the system prompt is a field distinct from the conversation messages. It's used to define durable instructions: the role Claude should play, the expected tone, the desired output format, the business constraints to respect, or the limits of what the assistant should or shouldn't do. Unlike user messages, which vary with every conversation turn, the system prompt generally stays stable across an entire session, which makes it a good candidate for prompt caching.\n\nAn effective system prompt is precise and actionable rather than vague. Rather than writing a generic instruction like \"answer helpfully,\" a well-designed prompt specifies, for example, the target audience, the expected response length, the register of language, and the cases where the assistant should refuse to answer or ask for clarification. This precision reduces response variability and makes regression testing easier on a production product.",
        },
        {
          heading: "Structuring a Prompt with XML Tags",
          body: "Claude has been trained to reliably recognize XML-style tagged structures in a prompt. Using tags like <document>, <instructions>, <example>, or <context> makes it possible to clearly separate the different components of a complex request: the source content to process, the instructions to follow, and reference examples. This structuring reduces ambiguity, especially when the prompt mixes several types of content, for example a long document followed by a specific question about it.\n\nThis practice is particularly useful for prompts generated automatically by an application, where variable content (a user question, an uploaded document) needs to be clearly isolated from fixed instructions to avoid confusion, or even an attempted prompt injection where a user tries to pass off content as a system instruction.",
        },
        {
          heading: "Few-Shot Examples and Zero-Shot Prompting",
          body: "Zero-shot prompting means asking for a response without providing a prior example, relying solely on text instructions. This approach works well for simple or generic tasks. For tasks where the output format needs to be precise and consistent, such as extracting structured fields from free text, few-shot prompting — providing two or three representative input/output examples — generally improves reliability more effectively than a text description of the format, however detailed.\n\nThe choice of examples matters as much as their number: varied examples covering typical edge cases (missing values, ambiguous formats) give the model a better sense of the expected range of behavior than a series of examples that are too similar to one another.",
        },
        {
          heading: "Guided Reasoning with Chain-of-Thought",
          body: "For tasks that require multiple reasoning steps, such as a calculation, a logical analysis, or a decision involving several criteria, explicitly asking Claude to reason step by step before giving its final answer generally improves the accuracy of the result. This technique, called chain-of-thought, lets the model break the problem down rather than jumping straight to a conclusion.\n\nOn recent Claude models, an extended thinking mechanism can also be enabled at the API request level to let the model deliberate more before answering, which is useful on difficult problems but increases token consumption and therefore cost. A good prompt engineering instinct is to reserve this deeper reasoning for tasks that genuinely need it rather than applying it across the board.",
        },
        {
          heading: "Prompt Stability and General Best Practices",
          body: "A well-designed prompt separates stable content, like the system prompt and the description of available tools, from variable content, like the specific question the user is asking at that moment. This organization isn't just a matter of readability: it directly affects the effectiveness of prompt caching on the API side, since the cache works by prefix matching and a single differing byte at the start of the prompt invalidates everything that follows.\n\nFinally, it's recommended to iterate on prompts in a measured way, comparing the responses obtained on a small set of representative cases rather than judging from a single example, and to document the prompt versions used in production the way you would document a software dependency.",
        },
      ],
    },
    {
      slug: "integration-messages-api",
      domainId: "integration-api",
      title: "Integrating the Messages API: Streaming, Tool Use, Vision, and Costs",
      readMinutes: 12,
      summary:
        "This module covers the practical use of Anthropic's Messages API: request structure, streaming, tool calling, image input, and token and cost management.",
      keyPoints: [
        "Every interaction with Claude through the API goes through a single endpoint, the Messages API, which accepts messages with a user or assistant role.",
        "The response's stop_reason field indicates why the model stopped generating, for example end_turn, max_tokens, or tool_use.",
        "Tool use lets Claude call functions defined by the developer by returning a structured block that the application must execute and then return as a result.",
        "Streaming mode returns the response progressively and avoids timeouts on long responses.",
        "Prompt caching and the Batch API are two direct levers for reducing API usage costs at high volume.",
      ],
      sections: [
        {
          heading: "The Messages API in Practice",
          body: "All programmatic interactions with Claude go through a single endpoint, the Messages API. A request includes at minimum a target model, a maximum number of output tokens, and a list of messages, each associated with a role, user or assistant. The response returned contains one or more content blocks, generally text, but potentially other block types depending on the features enabled, such as thinking blocks or tool calls.\n\nThe conversation is managed statelessly on the server side: it's up to the application to send the full history of relevant messages with each new request so the model has the context it needs. This simple design allows for a great deal of flexibility, for example to summarize or filter the history before sending it back, but it does require the application to manage conversation persistence itself.",
        },
        {
          heading: "Streaming for Long Responses",
          body: "By default, an API request waits for the complete response to be generated before returning it, which can take time for long responses and risks triggering timeouts on the client side or across the network infrastructure. Streaming mode solves this problem by returning the response progressively, event by event, as the model generates text.\n\nStreaming is recommended whenever the expected response might be long, or for any user interface where you want to display text as it's produced, as in a conversational assistant. It's also useful for observing, in real time, the tool calls requested by the model within an agentic loop.",
        },
        {
          heading: "Tool Use: Giving Claude Capabilities",
          body: "Tool use, also called function calling, lets you describe to Claude a set of available tools, each with a name, a description, and a schema of expected parameters. When the model determines that a tool is needed to answer the request, it returns a block of type tool_use containing the tool's name and the parameters to use, and the response's stop_reason field takes the value tool_use.\n\nIt's then up to the application to actually execute that tool, for example querying a database or calling an external API, and then return the result to the model as a tool_result block in a new user message. The model can then continue the conversation taking that result into account, or request another tool call. This loop — request, execution, result, new request — forms the basis of most agents built with the Claude API. Several tool calls can be requested in parallel within a single response and must be executed and returned together.",
        },
        {
          heading: "Image Input and Multimodal Content",
          body: "The Messages API accepts content blocks of type image in addition to text, with a source provided either as base64 or as a public URL. This mechanism makes it possible to build applications that mix text and images in a single request, for example to ask Claude to describe a screenshot, extract information from a chart, or compare several images with one another.\n\nProcessing an image consumes a number of tokens that depends on its resolution, which needs to be factored into the cost estimate of a request when large images are sent regularly.",
        },
        {
          heading: "Token Management and Cost Optimization",
          body: "The cost of a request to the Claude API depends on the number of input and output tokens, generally with different rates for each direction and depending on the model chosen. A token represents a unit of text, roughly a portion of a word, not a full character or word. Before sending a request that's costly at volume, it's possible to estimate a prompt's token count through a dedicated token-counting endpoint.\n\nTwo main levers help reduce costs at scale. Prompt caching lets you cache a stable, repeated portion of the prompt, like a long system prompt or the tool descriptions, to avoid being billed for it in full on every request. The Batch API lets you submit a large number of non-urgent requests for asynchronous processing at a reduced cost compared to equivalent synchronous calls — a good fit for tasks like bulk document classification that don't require an immediate response.",
        },
      ],
    },
    {
      slug: "securite-ia-responsable",
      domainId: "ia-responsable",
      title: "Safety, Constitutional AI, and Responsible Usage Policy",
      readMinutes: 8,
      summary:
        "This module presents Anthropic's safety principles: Constitutional AI, red teaming, usage policy, handling model refusals, and best practices around hallucinations.",
      keyPoints: [
        "Constitutional AI trains the model to follow an explicit set of principles rather than relying solely on direct human feedback.",
        "Red teaming involves adversarially testing a model before deployment to identify ways it could be misused.",
        "Anthropic's Usage Policy defines the permitted and prohibited uses of the API and applies to every developer integrating Claude.",
        "A model refusal, signaled by stop_reason set to refusal, should be treated as useful information rather than an error to work around.",
        "Hallucinations remain possible with any large language model and call for human verification on high-stakes use cases.",
      ],
      sections: [
        {
          heading: "The Principle of Constitutional AI",
          body: "Anthropic developed a training approach called Constitutional AI, in which the model learns to evaluate and correct its own responses against an explicit set of principles, a kind of constitution, rather than relying solely on a massive volume of direct human feedback on each individual response. The idea is to make the model's behavior more predictable and easier to evolve, by making the desired values explicit rather than leaving them implicit in training data.\n\nFor a certification candidate, the important thing to remember isn't the technical detail of the method, but the fact that Anthropic emphasizes a safety approach built into training itself, rather than handled solely after the fact through external filters.",
        },
        {
          heading: "Red Teaming and Robustness Testing",
          body: "Before a model is made available, Anthropic and external teams run red teaming campaigns: adversarial tests where experts deliberately try to get the model to produce dangerous, biased, or non-compliant output, in order to identify weaknesses before a large-scale deployment. These tests cover a range of areas, from generating dangerous content to manipulating or bypassing system instructions through malicious users.\n\nThe findings from these campaigns feed into later adjustments to the model and to platform-level safety mechanisms. A company deploying Claude in a product can apply the same logic by running its own adversarial tests on its specific use case before going to production.",
        },
        {
          heading: "Anthropic's Usage Policy",
          body: "The Usage Policy published by Anthropic defines the permitted and explicitly prohibited uses of its models, whether through claude.ai or through the API. It covers, for example, a prohibition on generating content intended to harm people, on bypassing critical safety measures, or on using the model in high-risk contexts without appropriate human oversight, such as certain automated medical or legal decisions.\n\nAny developer integrating the Claude API into an application is responsible for complying with this policy for their own use case, including when it's the application's end users who interact with the model indirectly. Ignoring this responsibility risks not only having API access suspended, but also reputational and legal risk for the company deploying the application.",
        },
        {
          heading: "Model Refusals and Handling Hallucinations",
          body: "When Claude determines that a request violates its safety principles, the response may end with stop_reason set to refusal, along with structured information to help understand the refusal category. A well-designed application checks this field before treating the response as normal output, and adapts the message shown to the end user rather than treating the refusal as a technical error to retry in a loop.\n\nIndependent of explicit refusals, any large language model, including Claude, can produce hallucinations: statements made confidently but incorrectly. To limit this risk on high-stakes use cases, best practices include grounding responses in verified documents provided in context, requesting verifiable citations when relevant, and maintaining human oversight on critical decisions rather than presenting the model's output as absolute truth.",
        },
      ],
    },
    {
      slug: "agents-rag-bonnes-pratiques",
      domainId: "cas-usage-metier",
      title: "Building Agents, Assistants, and RAG Systems with Claude",
      readMinutes: 9,
      summary:
        "This module presents the most common business usage patterns with Claude: agents with a tool-calling loop, conversational assistants, retrieval-augmented generation (RAG), and evaluating response quality.",
      keyPoints: [
        "An agent combines a Claude model with a tool-calling loop to accomplish open-ended, multi-step tasks.",
        "RAG (retrieval-augmented generation) involves injecting dynamically retrieved, relevant documents into Claude's context rather than retraining the model.",
        "A RAG pipeline reduces the risk of hallucination by grounding responses in verifiable sources.",
        "It's recommended to start at the simplest level, a single API call, before justifying a move to a pipeline and then to a full agent.",
        "A representative evaluation set (eval set) makes it possible to objectively measure an application's quality before it goes to production.",
      ],
      sections: [
        {
          heading: "Choosing the Right Level of Complexity",
          body: "Faced with a new use case, the first question to ask isn't which sophisticated tool to use, but what the minimum necessary level of complexity is. A simple API call, with no tool or agentic loop, is enough for most classification, summarization, or content generation tasks. A pipeline with a few steps orchestrated by the application's code works well when the business logic is known in advance and can be coded explicitly.\n\nUsing a full agent, where Claude itself decides which tools to call and in what order, is mainly justified when the task is open-ended, multi-step, and hard to fully specify in advance — for example, exploring a problem, searching for information across several sources, and then producing a tailored summary. Building an agent where a simple pipeline would suffice adds complexity, cost, and error risk without a proportional benefit.",
        },
        {
          heading: "Agents and the Tool-Calling Loop",
          body: "An agent built with the Claude API relies on the tool use loop described in the technical integration domain: the model requests that a tool be executed, the application executes it and returns the result, and the model decides on the next step based on that result, until it produces a final answer. This loop can include a variety of tools: document search, code execution, database queries, or calls to a business API.\n\nThe design of the tools made available to the agent is critical to the system's reliability: precise tool descriptions, strict parameter schemas, and explicit handling of errors returned by a tool noticeably improve the agent's behavior compared to a setup where the entire task is left to the model's judgment alone.",
        },
        {
          heading: "Retrieval-Augmented Generation (RAG)",
          body: "RAG is an architecture that involves searching, at request time, for the most relevant documents or passages in a knowledge base, then injecting them into the context sent to Claude before generating the response. This approach lets you equip the model with specific, up-to-date knowledge, for example a company's internal documentation, without having to retrain or modify the model itself.\n\nA well-designed RAG pipeline improves both the relevance of responses and their factual reliability, since the model can rely on identified sources rather than solely on its parametric memory, and it allows for citations pointing back to source documents. RAG quality depends heavily on the retrieval step itself: a poor choice of documents upstream limits response quality regardless of the capability of the model used afterward.",
        },
        {
          heading: "Evaluating Quality Before Production",
          body: "Before deploying a Claude-based application, it's recommended to build an evaluation set, or eval set, made up of examples representative of the real cases the application will need to handle, including edge cases and expected failure cases. This test set makes it possible to objectively measure the impact of a change in prompt, model, or pipeline, rather than relying on a subjective impression from a few manually tested examples.\n\nThis evaluation can combine automated criteria, such as matching an expected format, with qualitative judgment, sometimes carried out by another call to Claude configured as an evaluator. Building this practice into the development cycle early makes it possible to catch regressions before they reach end users and to objectively justify architecture choices, such as moving from a simple call to a RAG pipeline or a full agent.",
        },
      ],
    },
  ],
  glossary: [
    {
      term: "Messages API",
      definition:
        "The single endpoint of the Anthropic API for interacting with a Claude model, where each request contains a list of messages with a user or assistant role.",
      domainId: "integration-api",
    },
    {
      term: "System prompt",
      definition:
        "A field distinct from the conversation messages that defines the assistant's role, tone, and durable constraints for an entire session.",
      domainId: "ingenierie-prompt",
    },
    {
      term: "Context window",
      definition:
        "The maximum number of tokens a model can take into account in a single request, including instructions, history, and provided documents.",
      domainId: "fondamentaux-modeles",
    },
    {
      term: "Token",
      definition:
        "A unit of text used to measure and bill a model's input and output, roughly corresponding to a portion of a word.",
      domainId: "integration-api",
    },
    {
      term: "Tool use",
      definition:
        "A mechanism, also called function calling, that lets Claude request the execution of a function defined by the developer and then use its result to continue the conversation.",
      domainId: "integration-api",
    },
    {
      term: "Prompt caching",
      definition:
        "An API feature that caches the stable, repeated portion of a prompt to reduce the cost and latency of subsequent requests.",
      domainId: "integration-api",
    },
    {
      term: "Streaming",
      definition:
        "An API response mode that returns generated content progressively rather than waiting for generation to fully complete.",
      domainId: "integration-api",
    },
    {
      term: "Constitutional AI",
      definition:
        "An Anthropic training approach in which the model learns to evaluate and correct its responses against an explicit set of principles rather than relying solely on direct human feedback.",
      domainId: "ia-responsable",
    },
    {
      term: "Red teaming",
      definition:
        "A set of adversarial tests carried out before a model is deployed to identify ways it could produce dangerous output or be misused.",
      domainId: "ia-responsable",
    },
    {
      term: "Hallucination",
      definition:
        "A response produced confidently by a language model but factually incorrect or fabricated.",
      domainId: "ia-responsable",
    },
    {
      term: "RAG (retrieval-augmented generation)",
      definition:
        "An architecture that dynamically retrieves relevant documents and injects them into the model's context before generation, rather than retraining the model on that knowledge.",
      domainId: "cas-usage-metier",
    },
    {
      term: "Chain-of-thought",
      definition:
        "A prompting technique that explicitly asks the model to reason step by step before giving its final answer, useful for complex reasoning tasks.",
      domainId: "ingenierie-prompt",
    },
    {
      term: "Few-shot prompting",
      definition:
        "A prompting technique that provides a few representative input/output examples to improve response format consistency.",
      domainId: "ingenierie-prompt",
    },
    {
      term: "Zero-shot prompting",
      definition:
        "A prompting technique that asks for a response based solely on text instructions, without providing a prior example.",
      domainId: "ingenierie-prompt",
    },
    {
      term: "XML tagging",
      definition:
        "The use of XML-style tags in a prompt to clearly separate the instructions, context, and examples provided to the model.",
      domainId: "ingenierie-prompt",
    },
    {
      term: "Claude Opus",
      definition:
        "The Claude model family offering the highest level of reasoning ability, suited to complex tasks and autonomous agents, at the cost of higher latency and price.",
      domainId: "fondamentaux-modeles",
    },
    {
      term: "Claude Sonnet",
      definition:
        "The Claude model family offering a balanced trade-off between intelligence, speed, and cost, suited to most common professional use cases.",
      domainId: "fondamentaux-modeles",
    },
    {
      term: "Claude Haiku",
      definition:
        "The Claude model family that prioritizes speed and the lowest cost, suited to simple, repetitive, high-volume tasks.",
      domainId: "fondamentaux-modeles",
    },
    {
      term: "Vision (multimodality)",
      definition:
        "Claude's ability to analyze images provided as base64 or via a URL alongside text within the same request.",
      domainId: "fondamentaux-modeles",
    },
    {
      term: "Agent",
      definition:
        "A system that combines a Claude model with a tool-calling loop to autonomously accomplish open-ended, multi-step tasks.",
      domainId: "cas-usage-metier",
    },
    {
      term: "stop_reason",
      definition:
        "A field in the API response indicating why the model stopped generating, for example end_turn, max_tokens, tool_use, or refusal.",
      domainId: "integration-api",
    },
    {
      term: "Usage Policy",
      definition:
        "The policy published by Anthropic defining the permitted and prohibited uses of its models, applicable to every developer integrating the Claude API.",
      domainId: "ia-responsable",
    },
    {
      term: "Batch API",
      definition:
        "An API endpoint that lets you submit a large number of non-urgent requests for asynchronous processing at a reduced cost.",
      domainId: "integration-api",
    },
    {
      term: "Extended thinking",
      definition:
        "A mechanism that lets Claude deliberate more before answering on difficult problems, at the cost of increased token consumption.",
      domainId: "ingenierie-prompt",
    },
    {
      term: "Eval set (evaluation set)",
      definition:
        "A set of representative examples, including edge cases, used to objectively measure the quality of an application's responses before it goes to production.",
      domainId: "cas-usage-metier",
    },
  ],
  quizBank: [
    {
      id: "anthropic-cca-q01",
      domainId: "fondamentaux-modeles",
      difficulty: "facile",
      question:
        "Which Claude model family is generally recommended for simple, high-volume tasks where speed and cost are the priority?",
      options: ["Claude Opus", "Claude Sonnet", "Claude Haiku", "Claude Fable"],
      correctIndex: 2,
      explanation:
        "Claude Haiku prioritizes speed and the lowest cost, making it the right choice for simple, repetitive, high-volume tasks.",
    },
    {
      id: "anthropic-cca-q02",
      domainId: "fondamentaux-modeles",
      difficulty: "moyen",
      question:
        "A company needs to summarize thousands of support tickets a day with minimal latency and a tight budget. Which recommendation fits best?",
      options: [
        "Always use Claude Opus to maximize quality",
        "Use Claude Haiku for its speed-and-cost profile suited to high volume",
        "Use Claude Sonnet because it's always cheaper than the other models",
        "Model choice has no impact on cost or latency",
      ],
      correctIndex: 1,
      explanation:
        "For a high volume of simple tasks and minimal latency, Claude Haiku offers the best speed-and-cost trade-off.",
    },
    {
      id: "anthropic-cca-q03",
      domainId: "fondamentaux-modeles",
      difficulty: "facile",
      question: "What does a Claude model's context window refer to?",
      options: [
        "The length of time the API stays available",
        "The maximum volume of text, in tokens, taken into account in a single request",
        "The number of requests allowed per minute",
        "The size of the model measured in parameters",
      ],
      correctIndex: 1,
      explanation:
        "The context window corresponds to the maximum number of tokens the model can process in a single request, combining instructions, history, and documents.",
    },
    {
      id: "anthropic-cca-q04",
      domainId: "fondamentaux-modeles",
      difficulty: "moyen",
      question:
        "A developer wants Claude to analyze a several-hundred-page contract in a single request without splitting it up. Which characteristic makes this possible?",
      options: [
        "Tool use",
        "The extended context window",
        "Prompt caching",
        "Streaming mode",
      ],
      correctIndex: 1,
      explanation:
        "It's the size of the context window that determines how much text can be processed in a single request.",
    },
    {
      id: "anthropic-cca-q05",
      domainId: "fondamentaux-modeles",
      difficulty: "difficile",
      question:
        "Why might Claude answer incorrectly about a very recent event, even though it's generally high-performing?",
      options: [
        "The model refuses on principle to answer any question about current events",
        "Its knowledge is fixed at a training cutoff date unless it has access to a web search tool or provided documents",
        "Claude can only process text written in English",
        "The context window is always too small for this type of question",
      ],
      correctIndex: 1,
      explanation:
        "Without an external tool for accessing recent information, the model's knowledge remains limited to its training cutoff date.",
    },
    {
      id: "anthropic-cca-q06",
      domainId: "fondamentaux-modeles",
      difficulty: "moyen",
      question:
        "Besides the direct Anthropic API, which cloud platforms also provide access to Claude models?",
      options: [
        "Only through a consumer-facing web interface",
        "Notably Amazon Bedrock and Google Cloud Vertex AI",
        "Only through an exclusive partnership with a single cloud provider",
        "Claude is never available outside the Anthropic API",
      ],
      correctIndex: 1,
      explanation:
        "Claude is also accessible through partner cloud platforms such as Amazon Bedrock, Google Cloud Vertex AI, or Microsoft Foundry.",
    },
    {
      id: "anthropic-cca-q07",
      domainId: "fondamentaux-modeles",
      difficulty: "facile",
      question:
        "Which statement best describes the general trade-off between the different Claude model families?",
      options: [
        "The more expensive a model, the slower it is to respond",
        "There is a trade-off between intelligence, speed, and cost depending on the model family chosen",
        "All Claude model families offer exactly the same performance",
        "Only the most expensive model family can analyze images",
      ],
      correctIndex: 1,
      explanation:
        "Choosing a model family involves balancing reasoning ability, response speed, and cost per token.",
    },
    {
      id: "anthropic-cca-q08",
      domainId: "ingenierie-prompt",
      difficulty: "facile",
      question: "What is the main role of the system prompt in a request to the Claude API?",
      options: [
        "Hold the first question asked by the user",
        "Define the assistant's role, tone, and durable constraints for the entire conversation",
        "Store the entire conversation history",
        "Replace the request's max_tokens parameter",
      ],
      correctIndex: 1,
      explanation:
        "The system prompt is a distinct field used to set stable instructions that hold for the entire session.",
    },
    {
      id: "anthropic-cca-q09",
      domainId: "ingenierie-prompt",
      difficulty: "moyen",
      question:
        "A developer wants Claude to consistently return a response in a precise format from free-form text. Which prompting technique improves format reliability the most?",
      options: [
        "Making the system prompt as long as possible",
        "Providing a few few-shot examples illustrating the expected format",
        "Phrasing the question in all caps",
        "Only increasing the value of max_tokens",
      ],
      correctIndex: 1,
      explanation:
        "Providing representative input/output examples generally improves format consistency more effectively than a detailed text description.",
    },
    {
      id: "anthropic-cca-q10",
      domainId: "ingenierie-prompt",
      difficulty: "facile",
      question:
        "What is the purpose of tags like <document> or <instructions> in a prompt sent to Claude?",
      options: [
        "They are required for the API to accept the request",
        "They help clearly structure the different parts of the prompt for the model",
        "They replace the JSON format expected in the response",
        "They are only used for visual formatting on the client side",
      ],
      correctIndex: 1,
      explanation:
        "XML-style tagging clearly separates instructions, context, and examples, which reduces ambiguity for the model.",
    },
    {
      id: "anthropic-cca-q11",
      domainId: "ingenierie-prompt",
      difficulty: "moyen",
      question:
        "For a multi-step reasoning problem, which prompting technique generally helps Claude produce a correct answer the most?",
      options: [
        "Asking for a one-word answer",
        "Explicitly asking the model to reason step by step before concluding",
        "Repeating the question three times in the same message",
        "Removing the system prompt from the request",
      ],
      correctIndex: 1,
      explanation:
        "Chain-of-thought, which asks for explicit reasoning before the conclusion, generally improves accuracy on complex tasks.",
    },
    {
      id: "anthropic-cca-q12",
      domainId: "ingenierie-prompt",
      difficulty: "difficile",
      question:
        "A team notices that its prompt cache is almost never used, even though it sends a nearly identical prompt with every request. What is the most likely cause?",
      options: [
        "The cache only works on certain days of the week",
        "A variable element, like a timestamp, is inserted early in the prompt and invalidates everything after it",
        "The model used is too recent to benefit from caching",
        "XML tags inherently prevent caching",
      ],
      correctIndex: 1,
      explanation:
        "The cache works by prefix matching: a single variable element placed early in the prompt invalidates caching for all the content that follows.",
    },
    {
      id: "anthropic-cca-q13",
      domainId: "ingenierie-prompt",
      difficulty: "moyen",
      question:
        "Which practice is recommended for showing Claude the style or output structure expected without writing long text-based rules?",
      options: [
        "Only enable prompt caching",
        "Provide a few representative examples, a few-shot approach",
        "Deliberately shrink the context window",
        "Only use instructions phrased in the negative",
      ],
      correctIndex: 1,
      explanation:
        "Few-shot prompting, using a handful of well-chosen examples, is an effective way to convey an expected format or style.",
    },
    {
      id: "anthropic-cca-q14",
      domainId: "ingenierie-prompt",
      difficulty: "facile",
      question: "What does zero-shot prompting refer to?",
      options: [
        "Asking for a response without providing any prior example",
        "Providing ten examples before asking the question",
        "Completely disabling the system prompt",
        "Sending the prompt across several successive requests",
      ],
      correctIndex: 0,
      explanation:
        "Zero-shot prompting means phrasing a request relying solely on instructions, without an example provided beforehand.",
    },
    {
      id: "anthropic-cca-q15",
      domainId: "ingenierie-prompt",
      difficulty: "moyen",
      question:
        "Why is it recommended to place stable instructions before variable content in a request sent to Claude?",
      options: [
        "It has no measurable effect on performance",
        "It maximizes the chances of reusing the prompt cache and reduces costs",
        "It's a technical requirement for the API to accept the request",
        "It mechanically prevents any hallucination",
      ],
      correctIndex: 1,
      explanation:
        "Placing stable content before variable content favors the prefix matching needed for prompt caching, which reduces latency and cost.",
    },
    {
      id: "anthropic-cca-q16",
      domainId: "integration-api",
      difficulty: "facile",
      question:
        "What is the single main endpoint used to interact with a Claude model through the Anthropic API?",
      options: ["/v1/chat", "/v1/completions", "/v1/messages", "/v1/generate"],
      correctIndex: 2,
      explanation:
        "All interactions with a Claude model go through the Messages API, exposed at the /v1/messages endpoint.",
    },
    {
      id: "anthropic-cca-q17",
      domainId: "integration-api",
      difficulty: "moyen",
      question: "What does a stop_reason equal to tool_use mean in an API response?",
      options: [
        "The model has encountered an unrecoverable internal error",
        "The model wants a tool defined by the developer to be executed and is waiting for its result",
        "The conversation is permanently over",
        "The organization's token quota has been exhausted",
      ],
      correctIndex: 1,
      explanation:
        "A stop_reason of tool_use indicates that the model has generated a tool call and is waiting for the application to execute that tool and return the result.",
    },
    {
      id: "anthropic-cca-q18",
      domainId: "integration-api",
      difficulty: "moyen",
      question:
        "After executing the tool Claude requested, how should the developer return the result to continue the agentic loop?",
      options: [
        "By placing it in a new system field",
        "As a tool_result block in a following user message",
        "By directly editing the content of the model's previous response",
        "No result needs to be returned; the model continues on its own",
      ],
      correctIndex: 1,
      explanation:
        "The result of the executed tool must be returned as a tool_result block in a new user message so the model can continue.",
    },
    {
      id: "anthropic-cca-q19",
      domainId: "integration-api",
      difficulty: "difficile",
      question:
        "An application needs to handle potentially very long responses without risking an HTTP timeout. Which practice fits best?",
      options: [
        "Reduce max_tokens to an arbitrarily low value",
        "Use streaming mode rather than a classic blocking request",
        "Completely disable the system prompt",
        "Send the same request several times in parallel",
      ],
      correctIndex: 1,
      explanation:
        "Streaming returns the response progressively and avoids the timeout risks associated with waiting for a long response generated all at once.",
    },
    {
      id: "anthropic-cca-q20",
      domainId: "integration-api",
      difficulty: "facile",
      question:
        "Which source formats are commonly accepted to let Claude analyze an image?",
      options: [
        "Only links to live video platforms",
        "An image encoded in base64 or provided via a public URL",
        "Only files in PDF format",
        "A real-time video stream",
      ],
      correctIndex: 1,
      explanation:
        "An image content block accepts a source encoded in base64 or a public URL pointing to the image.",
    },
    {
      id: "anthropic-cca-q21",
      domainId: "integration-api",
      difficulty: "moyen",
      question:
        "To classify a very large volume of documents with no immediate latency constraint, which API feature reduces cost most effectively?",
      options: [
        "Streaming mode",
        "The Batch API, which processes requests asynchronously at a reduced cost",
        "Systematically increasing the size of the system prompt",
        "Disabling tool use",
      ],
      correctIndex: 1,
      explanation:
        "The Batch API is designed for large-scale, non-urgent processing and offers a reduced rate compared to equivalent synchronous calls.",
    },
    {
      id: "anthropic-cca-q22",
      domainId: "integration-api",
      difficulty: "difficile",
      question:
        "A team notices a high API bill even though request volume is stable, and it resends a system prompt of several thousand tokens in full with every call with no cache active. What is the most likely cause?",
      options: [
        "This behavior has no impact on the final cost",
        "Every request bills the entire system prompt as input tokens, which can be reduced by enabling prompt caching",
        "Cost depends only on the number of output tokens generated",
        "The API applies a flat rate regardless of the volume of tokens sent",
      ],
      correctIndex: 1,
      explanation:
        "Without caching, a long system prompt is billed in full as input tokens on every request, which can add up to significant cost at high volume.",
    },
    {
      id: "anthropic-cca-q23",
      domainId: "integration-api",
      difficulty: "facile",
      question: "What does a token represent in the context of Claude API pricing?",
      options: [
        "An API key valid for one month",
        "A unit of text used to measure and bill the model's input and output",
        "A unique identifier assigned to each conversation",
        "A compressed image sent to the model",
      ],
      correctIndex: 1,
      explanation:
        "The token is the basic unit used to measure the volume of text processed and calculate the cost of a request.",
    },
    {
      id: "anthropic-cca-q24",
      domainId: "ia-responsable",
      difficulty: "facile",
      question: "What is Constitutional AI, the approach Anthropic uses to train Claude?",
      options: [
        "A technical method for compressing models",
        "An approach that trains the model to follow an explicit set of principles rather than relying solely on direct human feedback",
        "An encryption protocol for requests sent to the API",
        "A legal certification required to use the Anthropic API",
      ],
      correctIndex: 1,
      explanation:
        "Constitutional AI aims to make the model's behavior more predictable by making the principles it should follow explicit, rather than relying solely on direct human feedback on each response.",
    },
    {
      id: "anthropic-cca-q25",
      domainId: "ia-responsable",
      difficulty: "moyen",
      question:
        "What is the main goal of red teaming applied to a model like Claude before it's deployed?",
      options: [
        "Improve the model's inference speed",
        "Proactively identify ways the model could be misused or produce dangerous output",
        "Reduce the cost of output tokens",
        "Increase the size of the context window",
      ],
      correctIndex: 1,
      explanation:
        "Red teaming involves adversarially testing a model to spot safety weaknesses before a large-scale deployment.",
    },
    {
      id: "anthropic-cca-q26",
      domainId: "ia-responsable",
      difficulty: "moyen",
      question:
        "A startup is considering a use case for the Claude API that might conflict with Anthropic's Usage Policy. What is the expected best practice for a certified professional?",
      options: [
        "Work around the model's refusals through repeated rephrasing",
        "Review and comply with Anthropic's Usage Policy before deploying this use case",
        "Ignore the policy as long as the model technically agrees to respond",
        "Disable the safety mechanisms through an API parameter",
      ],
      correctIndex: 1,
      explanation:
        "Any developer integrating the Claude API is responsible for complying with Anthropic's Usage Policy for their own use case.",
    },
    {
      id: "anthropic-cca-q27",
      domainId: "ia-responsable",
      difficulty: "difficile",
      question:
        "An API response contains a stop_reason equal to refusal. What behavior is expected on the application side?",
      options: [
        "Ignore this field and treat the response as a normal response",
        "Review the associated information to understand the refusal category before deciding what to show the user",
        "Automatically retry the same request in a loop until a response is obtained",
        "Always treat this as a simple network error to retry",
      ],
      correctIndex: 1,
      explanation:
        "A refusal should be treated as useful structured information, allowing the application's behavior to be adapted rather than being ignored or blindly retried.",
    },
    {
      id: "anthropic-cca-q28",
      domainId: "ia-responsable",
      difficulty: "facile",
      question: "What is a hallucination in the context of a language model like Claude?",
      options: [
        "A display bug on the user interface",
        "A response stated with confidence but factually incorrect or fabricated",
        "An abnormally long latency",
        "A connection error to the API server",
      ],
      correctIndex: 1,
      explanation:
        "A hallucination is a response produced confidently by the model that doesn't match the actual facts.",
    },
    {
      id: "anthropic-cca-q29",
      domainId: "ia-responsable",
      difficulty: "moyen",
      question:
        "To reduce the risk of hallucination on precise factual questions, which practice is recommended?",
      options: [
        "Only increase the model's temperature",
        "Ground the response in documents provided in context or request verifiable citations",
        "Ask the same question several times and only keep the first response",
        "Completely remove the system prompt",
      ],
      correctIndex: 1,
      explanation:
        "Grounding responses in verifiable sources, for example through a RAG pipeline, reduces the risk of factually incorrect responses.",
    },
    {
      id: "anthropic-cca-q30",
      domainId: "ia-responsable",
      difficulty: "difficile",
      question:
        "A medical application uses Claude to draft summaries of patient records for doctors. Which governance measure best aligns with a responsible AI approach?",
      options: [
        "Publish the summaries directly without human review to save time",
        "Maintain systematic human oversight and never present the model's output as a definitive diagnosis",
        "Disable all logging of exchanges to preserve confidentiality",
        "Remove the system prompt to speed up response times",
      ],
      correctIndex: 1,
      explanation:
        "For a high-stakes use case like healthcare, systematic human oversight remains essential, and the model must not substitute for a medical diagnosis.",
    },
    {
      id: "anthropic-cca-q31",
      domainId: "ia-responsable",
      difficulty: "facile",
      question: "What does Anthropic's Usage Policy for the Claude API concretely define?",
      options: [
        "Only the pricing applicable to the API",
        "The permitted and prohibited uses of the model that developers must comply with",
        "Only the file formats accepted by the API",
        "A policy that applies exclusively to claude.ai users and not the API",
      ],
      correctIndex: 1,
      explanation:
        "The Usage Policy defines the framework of permitted and prohibited uses of Claude models, applicable to any use, including through the API.",
    },
    {
      id: "anthropic-cca-q32",
      domainId: "cas-usage-metier",
      difficulty: "facile",
      question:
        "In a RAG architecture using Claude, what is the role of the retrieval step?",
      options: [
        "Generate the final response directly in place of the model",
        "Find the relevant documents or passages to inject into the model's context before generation",
        "Compress the model to reduce its inference cost",
        "Automatically translate the question asked by the user",
      ],
      correctIndex: 1,
      explanation:
        "The retrieval step consists of identifying and supplying the model with the relevant documents that will serve as the basis for its response.",
    },
    {
      id: "anthropic-cca-q33",
      domainId: "cas-usage-metier",
      difficulty: "moyen",
      question:
        "A team is torn between a simple call to the Claude API and building an agent with a tool-calling loop. Which criterion justifies using an agent?",
      options: [
        "The task is simple and can be fully specified in advance",
        "The task is multi-step, open-ended, and requires exploration guided by the model",
        "The available budget is unlimited regardless of context",
        "An agent is by definition always cheaper than a simple call",
      ],
      correctIndex: 1,
      explanation:
        "Using an agent is mainly justified for open-ended, multi-step tasks that are hard to fully specify in advance.",
    },
    {
      id: "anthropic-cca-q34",
      domainId: "cas-usage-metier",
      difficulty: "facile",
      question:
        "Before deploying a Claude-based application to production, which practice makes it possible to objectively measure response quality?",
      options: [
        "Rely solely on the subjective impression of a single tester",
        "Build a representative evaluation set and measure results against it",
        "Only test the application once it's already in production",
        "Skip testing and rely solely on the model's reputation",
      ],
      correctIndex: 1,
      explanation:
        "A representative evaluation set makes it possible to objectively measure an application's quality and catch regressions before it goes to production.",
    },
    {
      id: "anthropic-cca-q35",
      domainId: "cas-usage-metier",
      difficulty: "moyen",
      question:
        "For a multi-turn conversational assistant, how is the conversation's context managed, given that the Claude API is stateless?",
      options: [
        "The Anthropic server automatically remembers all past conversations",
        "The application must resend the relevant message history with every new request",
        "It's impossible to build a multi-turn conversation with the Claude API",
        "Every message must be sent over a separate network connection",
      ],
      correctIndex: 1,
      explanation:
        "Since the API is stateless, it's up to the application to resend the relevant conversation history with each new request to maintain context.",
    },
    {
      id: "anthropic-cca-q36",
      domainId: "cas-usage-metier",
      difficulty: "difficile",
      question:
        "A company wants to automatically surface insights from thousands of heterogeneous internal documents. Which approach fits best before scaling up to a complex system?",
      options: [
        "Deploy a fully autonomous, multi-tool agent directly without prior testing",
        "Start with a simple retrieval-and-generation pipeline, evaluate it on a representative sample, and then add complexity if needed",
        "Skip the evaluation step to save development time",
        "Only use the least capable model without ever measuring the quality obtained",
      ],
      correctIndex: 1,
      explanation:
        "Best practice is to start simple, measure quality on a representative sample, and only justify additional complexity when it's actually needed.",
    },
    {
      id: "anthropic-cca-q37",
      domainId: "cas-usage-metier",
      difficulty: "moyen",
      question:
        "What is the main advantage of RAG over fully retraining the model to incorporate knowledge specific to a company?",
      options: [
        "RAG always produces identical results regardless of the context provided",
        "RAG makes it possible to update the knowledge used without retraining the model, simply by changing the indexed documents",
        "Retraining a Claude model doesn't exist and is never offered by Anthropic",
        "RAG completely eliminates any risk of hallucination",
      ],
      correctIndex: 1,
      explanation:
        "RAG makes it possible to update the knowledge the model draws on by modifying the document base, without having to retrain the model itself.",
    },
    {
      id: "anthropic-cca-q38",
      domainId: "cas-usage-metier",
      difficulty: "facile",
      question:
        "Why is it recommended to start at the simplest level, a single API call, before building a complex agent?",
      options: [
        "Because an agent is systematically forbidden by the usage policy",
        "Because complexity, value, feasibility, and the cost of errors should justify moving to a more complex level",
        "Because simple API calls are always free unlike agents",
        "Because Claude technically doesn't support agent architectures",
      ],
      correctIndex: 1,
      explanation:
        "Moving to a more complex architecture, like an agent, should be justified by the nature of the task rather than adopted by default.",
    },
  ],
  studyPlan: [
    {
      label: "Week 1, days 1-3: product fundamentals",
      detail:
        "Read the certification's official syllabus, understand the Opus, Sonnet, and Haiku model families, the concept of the context window, and the different channels for accessing Claude (claude.ai, Claude Code, direct API, partner cloud platforms).",
    },
    {
      label: "Week 1, days 4-7: prompt engineering",
      detail:
        "Work through the module on structured prompting: system prompts, XML tags, few-shot, chain-of-thought. Rewrite three of your own prompts applying these techniques and compare the results.",
    },
    {
      label: "Week 2, days 1-4: technical integration with the API",
      detail:
        "Study the Messages API in detail: streaming, tool use, image input, token management. Do small hands-on API exercises if possible, especially a complete tool use loop.",
    },
    {
      label: "Week 2, days 5-7: responsible AI",
      detail:
        "Read the module on Constitutional AI, red teaming, and Anthropic's Usage Policy. Review the quiz questions on this domain and note any points that are still unclear to revisit.",
    },
    {
      label: "Week 3, days 1-4: business use cases and glossary",
      detail:
        "Study the agent, assistant, and RAG patterns, as well as building an evaluation set. Reread the entire glossary once through to consolidate the technical vocabulary for the exam.",
    },
    {
      label: "Week 3, days 5-7: practice exams and targeted review",
      detail:
        "Take the entire quiz bank under timed conditions, identify the weakest domains, then focus your final review on the technical API integration domain, the most heavily weighted in the certification.",
    },
  ],
};

export default certification;
