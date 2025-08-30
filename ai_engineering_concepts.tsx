import React, { useState } from 'react';
import { Search, BookOpen, Brain, Code, Database, Zap, Shield, Target, TrendingUp, Users } from 'lucide-react';

const AIConceptsApp = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedConcept, setExpandedConcept] = useState(null);

  const concepts = [
    {
      id: 1,
      title: "Large Language Models (LLMs)",
      category: "foundation",
      icon: <Brain className="w-5 h-5" />,
      definition: "Neural networks trained on vast amounts of text data to understand and generate human-like text.",
      examples: [
        "ChatGPT for conversational AI",
        "GitHub Copilot for code generation",
        "GPT-4 for content creation and analysis"
      ]
    },
    {
      id: 2,
      title: "Prompt Engineering",
      category: "engineering",
      icon: <Code className="w-5 h-5" />,
      definition: "The practice of designing and optimizing input prompts to get desired outputs from AI models.",
      examples: [
        "Chain-of-thought prompting for complex reasoning",
        "Few-shot learning with examples",
        "Role-based prompts for specific tasks"
      ]
    },
    {
      id: 3,
      title: "Fine-tuning",
      category: "training",
      icon: <Target className="w-5 h-5" />,
      definition: "Adapting a pre-trained model to perform specific tasks by training on domain-specific data.",
      examples: [
        "Medical diagnosis models trained on clinical data",
        "Legal document analysis systems",
        "Customer service chatbots for specific companies"
      ]
    },
    {
      id: 4,
      title: "Retrieval Augmented Generation (RAG)",
      category: "architecture",
      icon: <Database className="w-5 h-5" />,
      definition: "Combining LLMs with external knowledge retrieval to provide accurate, up-to-date information.",
      examples: [
        "Customer support systems with company knowledge bases",
        "Research assistants with access to scientific papers",
        "Legal AI with case law databases"
      ]
    },
    {
      id: 5,
      title: "Vector Embeddings",
      category: "foundation",
      icon: <TrendingUp className="w-5 h-5" />,
      definition: "Mathematical representations of text, images, or other data as high-dimensional vectors for similarity comparison.",
      examples: [
        "Semantic search in documents",
        "Recommendation systems",
        "Content clustering and categorization"
      ]
    },
    {
      id: 6,
      title: "API Integration",
      category: "engineering",
      icon: <Zap className="w-5 h-5" />,
      definition: "Connecting AI models to applications through Application Programming Interfaces.",
      examples: [
        "OpenAI API integration in web apps",
        "Hugging Face model deployment",
        "Azure Cognitive Services integration"
      ]
    },
    {
      id: 7,
      title: "Token Management",
      category: "optimization",
      icon: <Database className="w-5 h-5" />,
      definition: "Understanding and optimizing the units of text (tokens) that AI models process, affecting cost and performance.",
      examples: [
        "Context window optimization",
        "Cost management in API calls",
        "Efficient prompt design"
      ]
    },
    {
      id: 8,
      title: "AI Safety & Alignment",
      category: "ethics",
      icon: <Shield className="w-5 h-5" />,
      definition: "Ensuring AI systems behave safely and align with human values and intentions.",
      examples: [
        "Content filtering systems",
        "Bias detection and mitigation",
        "Constitutional AI approaches"
      ]
    },
    {
      id: 9,
      title: "Model Evaluation",
      category: "testing",
      icon: <Target className="w-5 h-5" />,
      definition: "Methods to assess AI model performance, accuracy, and reliability across different tasks.",
      examples: [
        "BLEU scores for translation models",
        "Human evaluation for creative tasks",
        "Benchmark datasets like GLUE"
      ]
    },
    {
      id: 10,
      title: "Hallucination Detection",
      category: "reliability",
      icon: <Shield className="w-5 h-5" />,
      definition: "Identifying when AI models generate false or fabricated information not supported by training data.",
      examples: [
        "Fact-checking systems",
        "Citation verification tools",
        "Confidence scoring mechanisms"
      ]
    },
    {
      id: 11,
      title: "Transfer Learning",
      category: "training",
      icon: <Brain className="w-5 h-5" />,
      definition: "Using knowledge from pre-trained models to solve new, related tasks with less data and training time.",
      examples: [
        "Using BERT for custom NLP tasks",
        "Computer vision models for medical imaging",
        "Multilingual models for new languages"
      ]
    },
    {
      id: 12,
      title: "Multimodal AI",
      category: "architecture",
      icon: <Users className="w-5 h-5" />,
      definition: "AI systems that can process and understand multiple types of data like text, images, audio, and video.",
      examples: [
        "GPT-4V for image and text understanding",
        "DALL-E for text-to-image generation",
        "Speech recognition with visual context"
      ]
    },
    {
      id: 13,
      title: "Context Windows",
      category: "foundation",
      icon: <BookOpen className="w-5 h-5" />,
      definition: "The maximum amount of text an AI model can consider at once when generating responses.",
      examples: [
        "GPT-4's 128k token context",
        "Long document analysis",
        "Multi-turn conversation memory"
      ]
    },
    {
      id: 14,
      title: "Temperature & Sampling",
      category: "optimization",
      icon: <TrendingUp className="w-5 h-5" />,
      definition: "Parameters that control the randomness and creativity of AI-generated outputs.",
      examples: [
        "Low temperature for factual responses",
        "High temperature for creative writing",
        "Top-k sampling for balanced outputs"
      ]
    },
    {
      id: 15,
      title: "Inference Optimization",
      category: "optimization",
      icon: <Zap className="w-5 h-5" />,
      definition: "Techniques to make AI model predictions faster and more efficient in production.",
      examples: [
        "Model quantization for mobile deployment",
        "Caching frequent queries",
        "Batch processing for efficiency"
      ]
    },
    {
      id: 16,
      title: "AI Agents",
      category: "architecture",
      icon: <Users className="w-5 h-5" />,
      definition: "AI systems that can autonomously plan, execute, and adapt their actions to achieve goals.",
      examples: [
        "AutoGPT for task automation",
        "Code generation agents",
        "Research and analysis assistants"
      ]
    },
    {
      id: 17,
      title: "Guardrails",
      category: "safety",
      icon: <Shield className="w-5 h-5" />,
      definition: "Safety mechanisms to prevent AI systems from generating harmful or inappropriate content.",
      examples: [
        "Content moderation filters",
        "Output validation systems",
        "Human-in-the-loop verification"
      ]
    },
    {
      id: 18,
      title: "Model Compression",
      category: "optimization",
      icon: <Target className="w-5 h-5" />,
      definition: "Techniques to reduce model size while maintaining performance for deployment efficiency.",
      examples: [
        "Knowledge distillation",
        "Pruning unnecessary parameters",
        "Quantization for mobile devices"
      ]
    },
    {
      id: 19,
      title: "Federated Learning",
      category: "training",
      icon: <Users className="w-5 h-5" />,
      definition: "Training AI models across distributed data sources without centralizing sensitive data.",
      examples: [
        "Mobile keyboard prediction",
        "Healthcare AI with patient privacy",
        "Financial fraud detection"
      ]
    },
    {
      id: 20,
      title: "Edge AI",
      category: "deployment",
      icon: <Zap className="w-5 h-5" />,
      definition: "Running AI models on local devices rather than cloud servers for speed and privacy.",
      examples: [
        "Smartphone camera AI",
        "Autonomous vehicle processing",
        "IoT device intelligence"
      ]
    },
    {
      id: 21,
      title: "AI Orchestration",
      category: "architecture",
      icon: <Code className="w-5 h-5" />,
      definition: "Coordinating multiple AI models and services to work together in complex workflows.",
      examples: [
        "Multi-step document processing pipelines",
        "Ensemble model predictions",
        "AI-driven business process automation"
      ]
    },
    {
      id: 22,
      title: "Attention Mechanisms",
      category: "foundation",
      icon: <Brain className="w-5 h-5" />,
      definition: "Neural network components that help models focus on relevant parts of input data.",
      examples: [
        "Transformer architecture in GPT models",
        "Machine translation quality improvements",
        "Document summarization focus"
      ]
    },
    {
      id: 23,
      title: "Few-Shot Learning",
      category: "training",
      icon: <Target className="w-5 h-5" />,
      definition: "Training AI models to perform new tasks with only a few examples.",
      examples: [
        "In-context learning with GPT models",
        "Quick adaptation to new domains",
        "Personalized AI assistants"
      ]
    },
    {
      id: 24,
      title: "Model Serving",
      category: "deployment",
      icon: <Zap className="w-5 h-5" />,
      definition: "Infrastructure and techniques for deploying AI models to handle real-time requests at scale.",
      examples: [
        "REST API endpoints for model access",
        "Auto-scaling model instances",
        "Load balancing for high traffic"
      ]
    },
    {
      id: 25,
      title: "Data Preprocessing",
      category: "data",
      icon: <Database className="w-5 h-5" />,
      definition: "Cleaning, formatting, and preparing raw data for AI model training and inference.",
      examples: [
        "Text tokenization and normalization",
        "Image resizing and augmentation",
        "Handling missing data points"
      ]
    },
    {
      id: 26,
      title: "Bias Detection & Mitigation",
      category: "ethics",
      icon: <Shield className="w-5 h-5" />,
      definition: "Identifying and reducing unfair discrimination in AI model outputs and decisions.",
      examples: [
        "Fairness metrics in hiring AI",
        "Demographic parity in loan approval",
        "Inclusive image recognition systems"
      ]
    },
    {
      id: 27,
      title: "MLOps",
      category: "engineering",
      icon: <Code className="w-5 h-5" />,
      definition: "Practices for deploying, monitoring, and maintaining machine learning models in production.",
      examples: [
        "Automated model retraining pipelines",
        "Performance monitoring dashboards",
        "A/B testing for model improvements"
      ]
    },
    {
      id: 28,
      title: "Synthetic Data Generation",
      category: "data",
      icon: <Database className="w-5 h-5" />,
      definition: "Creating artificial training data when real data is scarce, expensive, or privacy-sensitive.",
      examples: [
        "GANs for image generation",
        "Simulated text conversations",
        "Privacy-preserving training datasets"
      ]
    },
    {
      id: 29,
      title: "Model Interpretability",
      category: "explainability",
      icon: <BookOpen className="w-5 h-5" />,
      definition: "Techniques to understand and explain how AI models make decisions.",
      examples: [
        "LIME for local explanations",
        "SHAP values for feature importance",
        "Attention visualization in transformers"
      ]
    },
    {
      id: 30,
      title: "Adversarial Attacks",
      category: "security",
      icon: <Shield className="w-5 h-5" />,
      definition: "Malicious inputs designed to fool AI models into making incorrect predictions.",
      examples: [
        "Image perturbations fooling classifiers",
        "Prompt injection attacks",
        "Evasion attacks on spam filters"
      ]
    },
    {
      id: 31,
      title: "Constitutional AI",
      category: "safety",
      icon: <Shield className="w-5 h-5" />,
      definition: "Training AI systems to follow a set of principles or constitution for safe behavior.",
      examples: [
        "Anthropic's Constitutional AI approach",
        "Rule-based content moderation",
        "Ethical decision-making frameworks"
      ]
    },
    {
      id: 32,
      title: "Reinforcement Learning from Human Feedback (RLHF)",
      category: "training",
      icon: <Users className="w-5 h-5" />,
      definition: "Training AI models using human preferences and feedback to improve alignment.",
      examples: [
        "ChatGPT's training process",
        "Content ranking optimization",
        "Game AI that learns from player feedback"
      ]
    },
    {
      id: 33,
      title: "Model Monitoring",
      category: "reliability",
      icon: <TrendingUp className="w-5 h-5" />,
      definition: "Continuously tracking AI model performance and behavior in production environments.",
      examples: [
        "Drift detection in recommendation systems",
        "Performance degradation alerts",
        "Usage pattern analysis"
      ]
    },
    {
      id: 34,
      title: "Prompt Injection",
      category: "security",
      icon: <Shield className="w-5 h-5" />,
      definition: "Security vulnerability where malicious prompts override intended AI system behavior.",
      examples: [
        "Jailbreaking chatbots",
        "Data extraction attacks",
        "Bypassing content filters"
      ]
    },
    {
      id: 35,
      title: "Chain of Thought",
      category: "reasoning",
      icon: <Brain className="w-5 h-5" />,
      definition: "Prompting technique where models show step-by-step reasoning for complex problems.",
      examples: [
        "Mathematical problem solving",
        "Multi-step logical reasoning",
        "Complex planning tasks"
      ]
    },
    {
      id: 36,
      title: "Model Distillation",
      category: "optimization",
      icon: <Target className="w-5 h-5" />,
      definition: "Training smaller, faster models to mimic the behavior of larger, more complex models.",
      examples: [
        "Mobile app AI with reduced size",
        "Real-time inference systems",
        "Cost-effective deployment solutions"
      ]
    },
    {
      id: 37,
      title: "Embedding Spaces",
      category: "foundation",
      icon: <TrendingUp className="w-5 h-5" />,
      definition: "High-dimensional mathematical spaces where similar concepts are positioned close together.",
      examples: [
        "Word2Vec for language understanding",
        "Image similarity search",
        "Product recommendation systems"
      ]
    },
    {
      id: 38,
      title: "AI Pipelines",
      category: "engineering",
      icon: <Code className="w-5 h-5" />,
      definition: "Automated workflows that chain together multiple AI processing steps.",
      examples: [
        "Document processing: OCR → NLP → Classification",
        "Content moderation pipelines",
        "Data ingestion and analysis workflows"
      ]
    },
    {
      id: 39,
      title: "Model Versioning",
      category: "engineering",
      icon: <Code className="w-5 h-5" />,
      definition: "Managing different versions of AI models throughout development and deployment lifecycle.",
      examples: [
        "A/B testing different model versions",
        "Rollback capabilities for failed deployments",
        "Experiment tracking and comparison"
      ]
    },
    {
      id: 40,
      title: "Latency Optimization",
      category: "performance",
      icon: <Zap className="w-5 h-5" />,
      definition: "Reducing the time between input and AI model response for better user experience.",
      examples: [
        "Real-time chatbot responses",
        "Video streaming AI processing",
        "Interactive AI applications"
      ]
    },
    {
      id: 41,
      title: "Data Privacy in AI",
      category: "ethics",
      icon: <Shield className="w-5 h-5" />,
      definition: "Protecting sensitive information when training and deploying AI systems.",
      examples: [
        "Differential privacy techniques",
        "On-device processing",
        "Data anonymization methods"
      ]
    },
    {
      id: 42,
      title: "Model Governance",
      category: "management",
      icon: <Users className="w-5 h-5" />,
      definition: "Policies and processes for responsible AI model development, deployment, and maintenance.",
      examples: [
        "Model approval workflows",
        "Risk assessment frameworks",
        "Compliance documentation"
      ]
    },
    {
      id: 43,
      title: "Automated ML (AutoML)",
      category: "automation",
      icon: <Zap className="w-5 h-5" />,
      definition: "Tools and techniques that automate machine learning workflow steps like model selection and hyperparameter tuning.",
      examples: [
        "Google AutoML for custom models",
        "Automated feature engineering",
        "Neural architecture search"
      ]
    },
    {
      id: 44,
      title: "Model Compression",
      category: "optimization",
      icon: <Target className="w-5 h-5" />,
      definition: "Reducing model size and computational requirements while preserving performance.",
      examples: [
        "Quantization for mobile deployment",
        "Pruning unused neural connections",
        "Knowledge distillation"
      ]
    },
    {
      id: 45,
      title: "AI Testing Strategies",
      category: "testing",
      icon: <Target className="w-5 h-5" />,
      definition: "Systematic approaches to validate AI model behavior across different scenarios and edge cases.",
      examples: [
        "Adversarial testing",
        "Performance regression testing",
        "Ethical bias testing"
      ]
    },
    {
      id: 46,
      title: "Human-in-the-Loop",
      category: "architecture",
      icon: <Users className="w-5 h-5" />,
      definition: "AI systems that incorporate human oversight and intervention in critical decision points.",
      examples: [
        "Medical diagnosis assistance",
        "Content moderation review",
        "High-stakes financial decisions"
      ]
    },
    {
      id: 47,
      title: "Model Deployment Strategies",
      category: "deployment",
      icon: <Zap className="w-5 h-5" />,
      definition: "Different approaches for releasing AI models to production environments safely and efficiently.",
      examples: [
        "Blue-green deployments",
        "Canary releases",
        "Shadow mode testing"
      ]
    },
    {
      id: 48,
      title: "AI Model Cards",
      category: "documentation",
      icon: <BookOpen className="w-5 h-5" />,
      definition: "Standardized documentation describing AI model capabilities, limitations, and intended use.",
      examples: [
        "Google's model card template",
        "Bias and fairness reporting",
        "Performance metrics documentation"
      ]
    },
    {
      id: 49,
      title: "Continuous Learning",
      category: "adaptation",
      icon: <TrendingUp className="w-5 h-5" />,
      definition: "AI systems that adapt and improve over time based on new data and user interactions.",
      examples: [
        "Recommendation systems learning preferences",
        "Chatbots improving from conversations",
        "Fraud detection adapting to new patterns"
      ]
    },
    {
      id: 50,
      title: "AI Explainability",
      category: "explainability",
      icon: <BookOpen className="w-5 h-5" />,
      definition: "Making AI decision-making processes transparent and understandable to humans.",
      examples: [
        "Medical diagnosis explanations",
        "Loan rejection reasoning",
        "Recommendation justifications"
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Concepts', count: concepts.length },
    { id: 'foundation', name: 'Foundation', count: concepts.filter(c => c.category === 'foundation').length },
    { id: 'engineering', name: 'Engineering', count: concepts.filter(c => c.category === 'engineering').length },
    { id: 'training', name: 'Training', count: concepts.filter(c => c.category === 'training').length },
    { id: 'architecture', name: 'Architecture', count: concepts.filter(c => c.category === 'architecture').length },
    { id: 'optimization', name: 'Optimization', count: concepts.filter(c => c.category === 'optimization').length },
    { id: 'safety', name: 'Safety', count: concepts.filter(c => c.category === 'safety').length },
    { id: 'ethics', name: 'Ethics', count: concepts.filter(c => c.category === 'ethics').length }
  ];

  const filteredConcepts = concepts.filter(concept => {
    const matchesSearch = concept.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         concept.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || concept.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleConcept = (id) => {
    setExpandedConcept(expandedConcept === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Brain className="w-8 h-8 text-indigo-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-800">AI Engineering Mastery</h1>
          </div>
          <p className="text-lg text-gray-600">Master the 50 most critical concepts for building with AI</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search concepts..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Learning Progress</span>
            <span className="text-sm text-gray-500">
              {expandedConcept ? '1' : '0'} / {filteredConcepts.length} concepts explored
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{ width: expandedConcept ? `${(1 / filteredConcepts.length) * 100}%` : '0%' }}
            ></div>
          </div>
        </div>

        {/* Concepts Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredConcepts.map(concept => (
            <div
              key={concept.id}
              className={`bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer ${
                expandedConcept === concept.id ? 'ring-2 ring-indigo-500' : ''
              }`}
              onClick={() => toggleConcept(concept.id)}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="bg-indigo-100 p-2 rounded-lg mr-3">
                      {concept.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm">{concept.title}</h3>
                      <span className="text-xs text-indigo-600 capitalize">{concept.category}</span>
                    </div>
                  </div>
                  <div className="text-xs bg-gray-100 px-2 py-1 rounded">#{concept.id}</div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{concept.definition}</p>

                {expandedConcept === concept.id && (
                  <div className="border-t pt-4 mt-4">
                    <h4 className="font-medium text-gray-800 mb-3">Real-World Use Cases:</h4>
                    <div className="space-y-2">
                      {concept.examples.map((example, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-sm text-gray-700">{example}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-4 text-center">
                  <span className="text-xs text-indigo-600">
                    {expandedConcept === concept.id ? 'Click to collapse' : 'Click to explore'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredConcepts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">No concepts found</h3>
            <p className="text-gray-500">Try adjusting your search terms or category filter</p>
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>Click on any concept card to explore detailed definitions and real-world examples</p>
        </div>
      </div>
    </div>
  );
};

export default AIConceptsApp;