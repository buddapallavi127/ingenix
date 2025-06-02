import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronLeft, ChevronRight, ArrowRight, Mail, BookOpen, Cpu, Lightbulb, Code2, ChevronDown, Brain, Settings } from 'lucide-react';
import { useState, useEffect, useRef } from 'react'; // Import useRef
import { motion, AnimatePresence } from 'framer-motion';
import bg7 from '@/assets/bg10.png'; // Ensure this path is correct for your project structure
import { Link } from 'react-router-dom';
import blog2 from '@/assets/blog2.png';
import img3 from '@/assets/img3.png';
import blogs4 from '@/assets/blogs4.png';
import blogs5 from '@/assets/blogs5.png';
import blogs6 from '@/assets/blogs6.png';
import blogs7 from '@/assets/blogs7.png';
import blogs8 from '@/assets/blogs8.png';
import blogs1 from '@/assets/blogs_1.1.png';    
import blogs2_5 from '@/assets/blogs2_5.png';
import blogs2_4 from '@/assets/blogs2_4.png';
import blogs2_3 from '@/assets/blogs2_3.png';
import blogs3_1 from '@/assets/blogs3_1.png';
import blogs3_2 from '@/assets/blogs3_2.png';
import blogs3_3 from '@/assets/blogs3_3.png';
import blogs3_4 from '@/assets/blogs3_4.png';
import blogs4_1 from '@/assets/blogs4_1.png';
import blogs4_2 from '@/assets/blogs4_2.png';
import blogs4_3 from '@/assets/blogs4_3.png';
import blogs4_4 from '@/assets/blogs4_4.png';
import blogs5_1 from '@/assets/blogs5_1.png';
import blogs5_2 from '@/assets/blogs5_2.png';
import blogs5_3 from '@/assets/blogs5_3.png';
import blogs5_4 from '@/assets/blogs5_4.png';
import { Linkedin } from 'lucide-react';

// Define types for API news articles
interface NewsArticle {
  id: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  source: {
    name: string;
  };
  author?: string;
}

const Blog = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [openArticle, setOpenArticle] = useState(null); // Modal state
  const [articlesToShow, setArticlesToShow] = useState(6); // State for "Load More" functionality
  const [isLoading, setIsLoading] = useState(false);
  const [apiArticles, setApiArticles] = useState<NewsArticle[]>([]);
  const [error, setError] = useState<string | null>(null);

  // All articles organized by category
  // IMPORTANT: You need to add 'fullContent' for each article for the modal to display it.
  // I've added an example for the first article.
  const [allArticles, setAllArticles] = useState({
    'AI Trends': [
      {
        id: 1,
        date: 'May 20, 2025',
        title: 'NVIDIA 800 V HVDC Architecture Will Power the Next Generation of AI',
        excerpt: 'The exponential growth of AI workloads is increasing data center power demands. Traditional 54 V architectures are being replaced with more efficient 800 V systems.',
        fullContent: `
          <p>The demand for computational power in AI data centers is skyrocketing, driving innovations in every layer of the infrastructure stack. One of the most significant shifts on the horizon is the move towards higher voltage architectures, specifically 800 V High Voltage Direct Current (HVDC) systems, which NVIDIA is championing.</p>
          <p>Traditionally, data centers have relied on 54 V power delivery. While effective for previous generations of hardware, the sheer scale and power consumption of modern AI accelerators like NVIDIA's Blackwell and subsequent architectures make lower voltages increasingly inefficient. Higher currents lead to greater resistive losses (I²R losses) in power distribution, translating to wasted energy and increased cooling requirements.</p>
          <h3>Why 800 V HVDC?</h3>
          <ul>
            <li><strong>Increased Efficiency:</strong> By stepping up the voltage, the current required to deliver the same power is significantly reduced. This directly lowers I²R losses, leading to more power reaching the GPUs and less dissipated as heat.</li>
            <li><strong>Reduced Cabling Requirements:</strong> Lower currents mean thinner, lighter, and less expensive cabling can be used, simplifying infrastructure deployment and reducing material costs.</li>
            <li><strong>Enhanced Power Density:</strong> Higher efficiency allows for more computing power to be packed into the same physical footprint, maximizing the utilization of valuable data center space.</li>
            <li><strong>Scalability:</strong> The 800 V architecture is designed to be more scalable for future generations of AI hardware, which are expected to consume even more power per rack.</li>
          </ul>
          <p>NVIDIA's focus on an end-to-end 800 V HVDC solution from the power distribution unit (PDU) to the chip itself ensures optimal power delivery and minimal conversion losses. This integrated approach is critical for hyperscale AI deployments where every watt counts.</p>
          <p>This transition will require significant investment in new power supply units, busbars, and internal server components designed to handle the higher voltage. However, the long-term benefits in terms of operational efficiency, cost savings, and the ability to scale AI compute resources are compelling. Data centers built on this new architecture will be more environmentally friendly and economically viable for the demanding AI workloads of tomorrow.</p>
        `,
        readTime: '6 MIN READ',
        category: 'AI Trends',
        image: blog2
      },
      {
        id: 2,
        date: 'June 5, 2025',
        title: 'The Rise of Multimodal Foundation Models in 2025',
        excerpt: 'How combining vision, language, and audio modalities is creating more versatile AI systems that understand context like ever before.',
        fullContent: `
    <p>Artificial intelligence in 2025 is defined by the rise of multimodal foundation models—AI systems capable of understanding and generating content across text, images, audio, and more. Unlike earlier models that specialized in one data type, these new architectures can process and relate information from multiple modalities, making them vastly more versatile and context-aware.</p>
<h3>What Are Multimodal Foundation Models?</h3>
<p>Foundation models are large, pre-trained neural networks trained on massive datasets that include text, images, code, and more. Multimodal models extend this concept by learning from and reasoning about several data types at once. For example, a single model can answer questions about an image, generate captions, or even interpret audio clips—all within the same architecture.</p>
<h3>Real-World Applications</h3>
<ul>
  <li><strong>Enterprise Automation:</strong> Multimodal models power advanced search engines, customer support bots, and digital document analyzers that can process text, images, and charts together.</li>
  <li><strong>Accessibility:</strong> These models can describe images for visually impaired users or transcribe audio in real time.</li>
  <li><strong>Creative Tools:</strong> Artists and designers use multimodal AI to generate images from text prompts, remix music, or create interactive storytelling experiences.</li>
</ul>
<h3>Technical Innovations</h3>
<p>Recent advances include unified neural architectures, cross-modal attention mechanisms, and efficient training on diverse datasets. Models like GPT-4o and Gemini can seamlessly blend information from different sources, providing richer and more accurate outputs.</p>
<h3>Challenges and Outlook</h3>
<p>Despite their promise, multimodal models face challenges in aligning data from different modalities, mitigating bias, and ensuring transparency. Ongoing research focuses on improving data curation, model interpretability, and energy efficiency. As these models mature, expect them to become the backbone of next-generation AI applications, enabling machines to understand and interact with the world as humans do—through a blend of senses.</p>

  `,
        readTime: '6 MIN READ',
        category: 'AI Trends',
        image: img3
      },
      {
        id: 3,
        date: 'June 12, 2025',
        title: 'Edge AI: Bringing Intelligence to IoT Devices',
        excerpt: 'The latest breakthroughs in tinyML are enabling powerful AI models to run on microcontrollers with less than 1MB of memory.',
        fullContent: `<p>Edge AI is transforming the Internet of Things (IoT) by enabling devices to process data locally, right where it is generated, instead of sending everything to the cloud. This approach reduces latency, improves privacy, and enables real-time decision-making for applications ranging from smart homes to industrial automation.</p>
<h3>Why Edge AI?</h3>
<p>Traditional IoT systems transmit raw data to central servers for analysis, leading to network congestion, higher costs, and delays—problems that are unacceptable in time-sensitive scenarios like autonomous vehicles or critical infrastructure. Edge AI solves this by running AI models directly on microcontrollers or edge devices, often with less than 1MB of memory.</p>
<h3>Breakthroughs in TinyML</h3>
<ul>
  <li><strong>Model Compression:</strong> Advances in quantization and pruning allow complex models to run efficiently on limited hardware.</li>
  <li><strong>Specialized Hardware:</strong> New chips are optimized for AI inference at the edge, balancing performance and energy consumption.</li>
  <li><strong>On-Device Learning:</strong> Some edge AI systems can adapt to new data, enabling personalized experiences without cloud retraining.</li>
</ul>
<h3>Use Cases</h3>
<ul>
  <li><strong>Smart Cameras:</strong> Detect anomalies, recognize faces, or monitor safety in real time.</li>
  <li><strong>Wearables:</strong> Analyze health data and provide instant feedback without uploading sensitive information.</li>
  <li><strong>Industrial IoT:</strong> Predict equipment failures, optimize energy usage, and automate quality control.</li>
</ul>
<h3>Challenges</h3>
<p>Edge AI must overcome constraints in compute, memory, and power, as well as ensure security and privacy. The future will see even more capable models running at the edge, unlocking new possibilities for autonomous, intelligent systems everywhere.</p>
`,
        readTime: '5 MIN READ',
        category: 'AI Trends',
        image: blogs4
      },
      {
        id: 4,
        date: 'June 18, 2025',
        title: 'Generative AI in Creative Industries: Beyond Hype',
        excerpt: 'How studios and agencies are actually implementing generative tools in their workflows, with measurable productivity gains.',
        fullContent: `<p>Generative AI is reshaping creative industries by automating content creation, enhancing productivity, and enabling new forms of artistic expression. Far from being just a buzzword, generative models are now integral to workflows in art, music, design, and entertainment.</p>
<h3>What Is Generative AI?</h3>
<p>Generative AI refers to algorithms—like GANs and VAEs—that can produce new content resembling their training data. These models learn patterns from vast datasets and generate art, music, text, or even fashion designs that are novel yet coherent.</p>
<h3>Real-World Adoption</h3>
<ul>
  <li><strong>Film & Animation:</strong> Studios use AI to generate storyboards, backgrounds, and even animate characters, speeding up production cycles.</li>
  <li><strong>Music:</strong> AI systems compose melodies, suggest harmonies, or remix tracks, serving as creative partners for musicians.</li>
  <li><strong>Advertising:</strong> Agencies generate personalized ad copy and visuals at scale, optimizing campaigns in real time.</li>
</ul>
<h3>Measurable Productivity Gains</h3>
<p>Organizations report faster turnaround times, reduced costs, and enhanced creative output. AI assists with ideation, automates repetitive tasks, and enables rapid prototyping, freeing human creators to focus on high-level vision and refinement.</p>
<h3>Challenges and Considerations</h3>
<p>Despite the benefits, generative AI raises questions about authorship, copyright, and potential job displacement. Successful adoption requires clear policies, human oversight, and ongoing training to ensure ethical and effective use.</p>
<p>As generative AI continues to mature, expect it to become a staple in creative toolkits, driving innovation across industries and empowering creators to push the boundaries of what’s possible.</p>
`,
        readTime: '4 MIN READ',
        category: 'AI Trends',
        image: blogs5
      },
      {
        id: 21,
        date: 'July 1, 2025',
        title: 'The Future of AI in Healthcare',
        excerpt: 'Exploring how AI is revolutionizing diagnostics, drug discovery, and personalized medicine.',
        fullContent: `<p>AI is revolutionizing healthcare by improving diagnostics, accelerating drug discovery, and personalizing medicine. From analyzing medical images to predicting disease outbreaks, AI is enhancing every stage of the healthcare value chain.</p>
<h3>AI in Diagnostics</h3>
<p>Machine learning algorithms can analyze X-rays, MRIs, and histopathology slides with high accuracy, helping clinicians identify conditions earlier and more reliably. AI-powered tools also expedite the analysis of complex data, reducing diagnostic errors and enabling faster treatment decisions.</p>
<h3>Drug Discovery and Clinical Trials</h3>
<ul>
  <li><strong>Target Identification:</strong> AI analyzes genetic and molecular data to identify new drug targets, speeding up the discovery process.</li>
  <li><strong>Patient Recruitment:</strong> Algorithms match patients to clinical trials based on eligibility, improving enrollment and trial outcomes.</li>
  <li><strong>Real-Time Monitoring:</strong> AI tracks patient data and adverse events during trials, ensuring safety and compliance.</li>
</ul>
<h3>Personalized Medicine</h3>
<p>AI integrates genetic, clinical, and lifestyle data to tailor treatment plans for individual patients, maximizing efficacy and minimizing side effects. Wearable devices and telemedicine platforms powered by AI enable continuous monitoring and early intervention, improving patient outcomes and engagement.</p>
<h3>Challenges and the Road Ahead</h3>
<p>Key challenges include data privacy, regulatory compliance, and the need for transparent, explainable AI systems. As these hurdles are addressed, AI will become an indispensable partner in healthcare, driving better outcomes for patients and providers alike.</p>
`,
        readTime: '5 MIN READ',
        category: 'AI Trends',
        image: blogs6 // Assuming you have more images
      },
      {
        id: 22,
        date: 'July 8, 2025',
        title: 'Quantum Computing Meets AI: A New Frontier',
        excerpt: 'How quantum algorithms could supercharge machine learning in the coming decades.',
        fullContent: `<p>Quantum computing and artificial intelligence are converging to create a new frontier of innovation. Quantum computers, which use qubits capable of existing in multiple states simultaneously, promise to solve problems that are intractable for classical computers—potentially transforming the future of AI.</p>
<h3>What Is Quantum Computing?</h3>
<p>Unlike traditional bits, qubits leverage quantum mechanics to represent and process vast amounts of information in parallel. This capability enables quantum computers to tackle complex optimization, simulation, and cryptography problems exponentially faster than classical machines.</p>
<h3>How Quantum Will Supercharge AI</h3>
<ul>
  <li><strong>Faster Model Training:</strong> Quantum algorithms could reduce the time required to train large AI models from weeks to hours, making AI development more efficient and accessible.</li>
  <li><strong>Smarter Optimization:</strong> Quantum computers excel at solving optimization problems, which are central to tasks like supply chain management and financial modeling.</li>
  <li><strong>Quantum Machine Learning:</strong> New algorithms may enable AI systems to learn from fewer data points, reduce noise, and generalize better—pushing the boundaries of what’s possible with current machine learning techniques.</li>
</ul>
<h3>Challenges</h3>
<p>Quantum computing is still in its infancy, with significant technical hurdles to overcome, including error correction, qubit stability, and hardware scalability. Yet, as research progresses, the synergy between quantum computing and AI could unlock breakthroughs in fields ranging from drug discovery to climate modeling.</p>
<h3>The Road Ahead</h3>
<p>Expect the next decade to bring hybrid quantum-classical AI systems, new algorithms, and entirely new applications—ushering in an era where the most powerful forms of computation and intelligence work hand in hand.</p>
`,
        readTime: '7 MIN READ',
        category: 'AI Trends',
        image: blogs7
      },
      {
        id: 23,
        date: 'July 15, 2025',
        title: 'AI Ethics and Governance: Navigating the Complexities',
        excerpt: 'Discussing the frameworks and policies needed to ensure responsible AI development and deployment.',
        fullContent: `<p>As artificial intelligence becomes deeply embedded in society, robust frameworks for AI ethics and governance are essential. These frameworks ensure that AI technologies are developed and deployed responsibly, balancing innovation with ethical considerations and regulatory compliance.</p>
<h3>Why Governance Matters</h3>
<p>AI systems can amplify biases, infringe on privacy, and make decisions that impact lives. Effective governance addresses these risks by embedding ethical guidelines, transparency, and accountability into every stage of AI development and deployment.</p>
<h3>Key Principles</h3>
<ul>
  <li><strong>Ethical Design:</strong> Preventing bias, promoting fairness, and ensuring inclusivity are foundational to responsible AI.</li>
  <li><strong>Transparency:</strong> Clear explanations of how AI decisions are made help build trust and facilitate oversight.</li>
  <li><strong>Accountability:</strong> Defining roles and responsibilities for AI outcomes ensures that organizations remain answerable for their systems.</li>
</ul>
<h3>Implementing Governance</h3>
<p>Organizations should establish comprehensive policies, conduct regular impact assessments, and engage diverse stakeholders in the governance process. Ongoing training, transparent monitoring, and regular audits are necessary to maintain compliance and adapt to evolving standards.</p>
<h3>The Path Forward</h3>
<p>As AI technologies continue to advance, governance must evolve to address new challenges. By prioritizing ethics and accountability, organizations can harness AI’s potential while safeguarding individual rights and societal values.</p>
`,
        readTime: '4 MIN READ',
        category: 'AI Trends',
        image: blogs8
      }
    ],
    'Technical Explainers': [
      {
        id: 5,
        date: 'May 23, 2025',
        title: 'Understanding Mixture of Experts Architecture',
        excerpt: 'Deep dive into how MoE models like Google\'s Switch Transformer achieve better performance with lower compute costs.',
        fullContent: `<p>Mixture of Experts (MoE) architectures represent a breakthrough in scaling deep learning models efficiently. Unlike traditional dense models, MoE selectively activates only portions of the network for each input, drastically reducing computation while maintaining or improving accuracy.</p>
<h3>Core Principles of MoE</h3>
<p>At the heart of MoE is a gating mechanism that routes each input token to a subset of specialized "expert" subnetworks. This allows the model to scale up the number of parameters without a proportional increase in computation.</p>
<h3>Google’s Switch Transformer</h3>
<p>The Switch Transformer is a prominent MoE model that demonstrated how activating just one expert per token could achieve state-of-the-art results with a fraction of the compute cost of dense models. The architecture enables models with over a trillion parameters to be trained and deployed efficiently.</p>
<h3>Benefits and Trade-offs</h3>
<ul>
  <li><strong>Efficiency:</strong> Only a small fraction of the model is active per inference, reducing resource usage.</li>
  <li><strong>Specialization:</strong> Experts can specialize in handling different types of data or tasks, improving performance.</li>
  <li><strong>Complexity:</strong> Training and deploying MoE models require sophisticated routing and load balancing strategies.</li>
</ul>
<h3>Implementation and Use Cases</h3>
<p>MoE architectures are increasingly used in natural language processing, recommendation systems, and large-scale vision models. Their ability to scale efficiently makes them ideal for cloud-based AI services.</p>
<h3>Conclusion</h3>
<p>As AI models continue to grow, MoE will play a key role in making large-scale intelligence both feasible and sustainable.</p>
`,
        readTime: '7 MIN READ',
        category: 'Technical Explainers',
        image: blogs1
      },
      {
        id: 6,
        date: 'May 28, 2025',
        title: 'The Math Behind Diffusion Models',
        excerpt: 'From stochastic differential equations to practical implementations, we break down the theory powering image generation models.',
        fullContent: `<p>Diffusion models have emerged as a powerful approach for generative modeling, particularly in image synthesis. Their mathematical foundation is rooted in stochastic processes, variational inference, and deep learning.</p>
<h3>The Diffusion Process</h3>
<p>Diffusion models work by gradually adding noise to data (the forward process) and then learning to reverse this process to generate new samples from noise (the reverse process). The forward process is modeled as a Markov chain, where the data distribution is transformed into pure noise over T steps, parameterized by a variance schedule.</p>
<h3>Variational Lower Bound and Training</h3>
<p>The model is trained to minimize the difference between the true data distribution and the distribution generated by reversing the diffusion process. This is formalized as a variational lower bound (VLB) objective, similar to that used in variational autoencoders. The loss function encourages the model to accurately denoise at each step.</p>
<h3>Reverse Samplers</h3>
<ul>
  <li><strong>DDPM (Denoising Diffusion Probabilistic Models):</strong> Uses a learned neural network to predict the noise added at each step, enabling the generation of high-quality samples.</li>
  <li><strong>DDIM (Deterministic Denoising):</strong> Provides faster sampling by skipping some stochastic steps, trading off diversity for speed.</li>
</ul>
<h3>Text Prompting and Conditioning</h3>
<p>Modern diffusion models can be conditioned on text or other inputs, enabling controllable generation. Techniques like classifier guidance and classifier-free guidance further improve sample quality and alignment with prompts.</p>
<h3>Current Trends</h3>
<p>Recent research focuses on improving efficiency, sample diversity, and fidelity, as well as applying diffusion models to modalities beyond images, such as audio and video.</p>
<h3>Conclusion</h3>
<p>Understanding the math behind diffusion models is key to leveraging their full potential in generative AI applications.</p>
`,
        readTime: '9 MIN READ',
        category: 'Technical Explainers',
        image: blogs2_5
      },
      {
        id: 7,
        date: 'June 3, 2025',
        title: 'Optimizing Transformer Inference: Key Techniques',
        excerpt: 'Practical guide to reducing latency and memory usage for production LLM deployments.',
        fullContent: `<p>Transformer models have become the backbone of modern AI, but their inference phase can be resource-intensive. Optimizing inference is critical for deploying large language models (LLMs) in production with low latency and cost.</p>
<h3>Phases of Transformer Inference</h3>
<ul>
  <li><strong>Prefill Phase:</strong> Processes the entire input sequence in parallel, leveraging GPU efficiency for batch operations.</li>
  <li><strong>Decode Phase:</strong> Generates output tokens sequentially, which can become a bottleneck in real-time applications.</li>
</ul>
<h3>Key Optimization Techniques</h3>
<ul>
  <li><strong>KV Caching:</strong> Stores key-value pairs from previous tokens, reducing redundant computation during decoding.</li>
  <li><strong>Speculative Decoding:</strong> Uses a smaller draft model to predict multiple tokens ahead, verifying them with the main model to reduce latency.</li>
  <li><strong>Batching:</strong> Processes multiple requests simultaneously, maximizing GPU utilization and throughput.</li>
  <li><strong>Quantization:</strong> Reduces model precision (e.g., from FP32 to INT8 or lower), shrinking memory footprint and accelerating inference.</li>
</ul>
<h3>Best Practices</h3>
<p>Choosing the right mix of techniques depends on the application’s latency, throughput, and hardware constraints. Careful profiling and tuning are essential for optimal results.</p>
<h3>Conclusion</h3>
<p>With these optimizations, organizations can deploy powerful transformer models at scale, delivering fast and efficient AI services to users.</p>
`,
        readTime: '7 MIN READ',
        category: 'Technical Explainers',
        image: blogs2_4
      },
      {
        id: 8,
        date: 'June 10, 2025',
        title: 'Quantization: From FP32 to INT4 Without Losing Accuracy',
        excerpt: 'Comprehensive look at modern quantization approaches that maintain model quality while drastically reducing size.',
        fullContent: `<p>Quantization is a powerful technique for reducing the size and computational requirements of deep learning models by representing weights and activations with lower-precision data types. Modern quantization methods enable reductions from FP32 (32-bit floating point) to INT4 (4-bit integer) with minimal loss in model accuracy.</p>
<h3>Why Quantize?</h3>
<p>Quantization shrinks model size, lowers memory bandwidth, and accelerates inference—making it possible to run large models on edge devices and in latency-sensitive environments.</p>
<h3>Techniques</h3>
<ul>
  <li><strong>Post-Training Quantization:</strong> Converts a trained FP32 model to lower precision, often with minimal calibration data.</li>
  <li><strong>Quantization-Aware Training:</strong> Simulates quantization effects during training, allowing the model to adapt and preserve accuracy.</li>
  <li><strong>Block Quantization:</strong> Applies different scales to blocks of weights, improving representational power at very low bit-widths (e.g., INT4, FP4).</li>
</ul>
<h3>Modern Approaches</h3>
<p>State-of-the-art frameworks support mixed-precision and per-channel quantization, further reducing accuracy loss. Hardware accelerators are increasingly optimized for low-bit inference, enabling practical deployment at scale.</p>
<h3>Challenges</h3>
<p>Quantization can introduce rounding errors and dynamic range limitations. Careful selection of quantization parameters and calibration methods is essential to maintain model quality.</p>
<h3>Conclusion</h3>
<p>With the right techniques, quantization enables efficient, high-performance AI on a wide range of devices—without sacrificing accuracy.</p>
`,
        readTime: '10 MIN READ',
        category: 'Technical Explainers',
        image: blogs2_3
      }
    ],
    'Use Cases': [
      {
        id: 9,
        date: 'May 25, 2025',
        title: 'AI-Powered Drug Discovery at AstraZeneca',
        excerpt: 'Case study on how machine learning accelerated their small molecule discovery pipeline by 40%.',
        fullContent: `<p>AstraZeneca is at the forefront of using AI to accelerate drug discovery, making the process faster, more efficient, and more targeted. By leveraging machine learning and advanced analytics, the company has achieved a 40% acceleration in its small molecule discovery pipeline.</p>
<h3>How AI Accelerates Discovery</h3>
<ul>
  <li><strong>Target Identification:</strong> AI algorithms analyze vast datasets to identify promising drug targets and predict disease mechanisms.</li>
  <li><strong>Protein Structure Analysis:</strong> Deep learning models help understand protein folding and interactions, aiding in drug design.</li>
  <li><strong>Patient Recruitment:</strong> AI matches patient profiles to clinical trials, improving enrollment efficiency and trial outcomes.</li>
</ul>
<h3>Real-Time Data Analysis</h3>
<p>AI systems monitor ongoing trials, detect adverse events, and ensure regulatory compliance, enabling faster and safer decision-making.</p>
<h3>Impact</h3>
<p>The integration of AI has led to more effective drug candidates, reduced costs, and a significant acceleration in bringing new therapies to market.</p>
`,
        readTime: '6 MIN READ',
        category: 'Use Cases',
        image: blogs3_1
      },
      {
        id: 10,
        date: 'May 30, 2025',
        title: 'Automating Financial Reporting with LLMs',
        excerpt: 'How JP Morgan reduced quarterly report preparation time from 2 weeks to 3 days.',
        fullContent: `<p>Large language models (LLMs) are transforming financial reporting by automating data analysis, report generation, and compliance checks. JP Morgan, for example, reduced its quarterly report preparation time from two weeks to just three days by leveraging AI-powered automation.</p>
<h3>How It Works</h3>
<ul>
  <li><strong>Data Extraction:</strong> LLMs can ingest structured and unstructured data from diverse sources, including financial statements and news articles.</li>
  <li><strong>Report Generation:</strong> AI models generate draft reports, summaries, and insights, which are then reviewed and finalized by analysts.</li>
  <li><strong>Sentiment Analysis:</strong> LLMs extract and analyze sentiment from market news, providing real-time context for reporting.</li>
</ul>
<h3>Benefits</h3>
<p>Automating routine tasks allows finance teams to focus on higher-value analysis, improves accuracy, and ensures faster compliance with regulatory requirements.</p>
<h3>Future Outlook</h3>
<p>As LLMs become more capable, expect further reductions in reporting cycles and new applications in risk assessment and forecasting.</p>
`,
        readTime: '5 MIN READ',
        category: 'Use Cases',
        image: blogs3_2
      },
      {
        id: 11,
        date: 'June 7, 2025',
        title: 'Computer Vision in Precision Agriculture',
        excerpt: 'Monitoring crop health and predicting yields with drone imagery and deep learning.',
        fullContent: `<p>Computer vision is revolutionizing precision agriculture by enabling farmers to monitor crop health, predict yields, and optimize resource use with unprecedented accuracy. Drones and satellites capture high-resolution imagery, which AI models analyze to extract actionable insights.</p>
<h3>Applications</h3>
<ul>
  <li><strong>Crop Monitoring:</strong> AI detects diseases, pests, and nutrient deficiencies early, allowing timely intervention.</li>
  <li><strong>Yield Prediction:</strong> Machine learning models analyze growth patterns and environmental data to forecast yields and inform planning.</li>
  <li><strong>Resource Optimization:</strong> Computer vision helps optimize irrigation, fertilization, and pesticide application, reducing waste and environmental impact.</li>
</ul>
<h3>Challenges</h3>
<p>Key challenges include variability in image quality, changing weather conditions, and the need for large, annotated datasets. Ongoing research focuses on improving model robustness and integrating multi-modal data sources.</p>
<p>With continued innovation, computer vision will play a central role in making agriculture more efficient, sustainable, and resilient.</p>
`,
        readTime: '5 MIN READ',
        category: 'Use Cases',
        image: blogs3_3
      },
      {
        id: 12,
        date: 'June 15, 2025',
        title: 'AI for Personalized Education',
        excerpt: 'How Khan Academy\'s AI tutor adapts to individual learning styles in real-time.',
        fullContent: `<p>AI is transforming education by enabling personalized learning experiences that adapt to each student's needs, pace, and style. Platforms like Khan Academy’s AI tutor use real-time data to tailor lessons, provide instant feedback, and support mastery-based progression.</p>
<h3>How AI Personalizes Learning</h3>
<ul>
  <li><strong>Adaptive Content:</strong> AI analyzes student performance and adjusts lesson difficulty, ensuring optimal challenge and engagement.</li>
  <li><strong>Real-Time Feedback:</strong> Intelligent tutors provide hints, explanations, and encouragement, helping students overcome obstacles instantly.</li>
  <li><strong>Progress Tracking:</strong> Detailed analytics help teachers identify learning gaps and intervene proactively.</li>
</ul>
<h3>Benefits</h3>
<p>Personalized education improves outcomes, boosts motivation, and supports lifelong learning. It also enables teachers to focus on high-impact instruction and mentoring.</p>
<h3>Challenges</h3>
<p>Ensuring data privacy, equity, and accessibility are ongoing concerns. As AI in education evolves, collaboration between educators, technologists, and policymakers will be key to maximizing benefits for all learners.</p>
`,
        readTime: '4 MIN READ',
        category: 'Use Cases',
        image: blogs3_4
      }
    ],
    'Thought Leadership': [
      {
        id: 13,
        date: 'May 27, 2025',
        title: 'The Ethical Imperative of Explainable AI',
        excerpt: 'Why interpretability isn\'t just nice-to-have but essential for responsible deployment.',
        fullContent: `<p>Explainable AI (XAI) is essential for building trust, ensuring accountability, and enabling responsible deployment of AI systems. As AI becomes more complex and influential, understanding how models make decisions is no longer optional—it is a moral and practical necessity.</p>
<h3>Why Interpretability Matters</h3>
<ul>
  <li><strong>Trust:</strong> Transparent models are easier to trust, especially in high-stakes domains like healthcare and finance.</li>
  <li><strong>Accountability:</strong> Clear explanations enable organizations to justify decisions and comply with regulations.</li>
  <li><strong>Debugging:</strong> Interpretability helps identify and correct errors or biases in AI systems.</li>
</ul>
<h3>Approaches to Explainability</h3>
<ul>
  <li><strong>Model Transparency:</strong> Using inherently interpretable models where possible.</li>
  <li><strong>Post-Hoc Explanations:</strong> Applying techniques like LIME or SHAP to explain complex models after training.</li>
  <li><strong>Visualization:</strong> Tools that highlight important features or decision pathways.</li>
</ul>
<h3>The Path Forward</h3>
<p>Organizations must prioritize explainability in AI design, invest in research, and foster a culture of transparency. Only then can AI systems be deployed ethically and effectively in society.</p>
`,
        readTime: '7 MIN READ',
        category: 'Thought Leadership',
        image: blogs4_1
      },
      {
        id: 14,
        date: 'June 1, 2025',
        title: 'Preparing for Artificial General Intelligence',
        excerpt: 'A framework for gradual, safe development of more capable AI systems.',
        fullContent: `<p>Artificial General Intelligence (AGI)—AI systems with human-level or greater capability across a wide range of tasks—remains a long-term goal. Preparing for AGI requires a framework for gradual, safe development and deployment.</p>
<h3>Defining AGI</h3>
<p>AGI differs from today's narrow AI in its ability to transfer knowledge, reason abstractly, and adapt to new domains without retraining. The path to AGI involves advances in reasoning, memory, and self-supervised learning.</p>
<h3>Framework for Safe Development</h3>
<ul>
  <li><strong>Capability Monitoring:</strong> Track progress and emerging risks as systems become more general and autonomous.</li>
  <li><strong>Robust Alignment:</strong> Ensure AI objectives remain aligned with human values at every stage.</li>
  <li><strong>Governance:</strong> Establish oversight mechanisms, transparency, and international collaboration to guide AGI development.</li>
</ul>
<h3>Gradual Deployment</h3>
<p>AGI should be introduced in controlled phases, with ongoing evaluation and adaptation of safety protocols. Engaging diverse stakeholders—including ethicists, policymakers, and the public—is essential to anticipate and mitigate risks.</p>
<h3>Conclusion</h3>
<p>By preparing now, we can maximize the benefits of AGI while minimizing potential harms, ensuring a future where advanced AI serves humanity’s best interests.</p>
`,
        readTime: '6 MIN READ',
        category: 'Thought Leadership',
        image: blogs4_2
      },
      {
        id: 15,
        date: 'June 8, 2025',
        title: 'The Future of Human-AI Collaboration',
        excerpt: 'Moving beyond tools to true partners: how AI will augment human capabilities.',
        fullContent: `<p>The next wave of AI innovation will move beyond tools to true partnership between humans and machines. Human-AI collaboration is set to augment human capabilities, enabling individuals and teams to achieve more than ever before.</p>
<h3>From Automation to Augmentation</h3>
<p>Early AI focused on automating repetitive tasks. Today, collaborative AI systems act as copilots, advisors, and creative partners, enhancing human decision-making and creativity.</p>
<h3>Key Collaboration Models</h3>
<ul>
  <li><strong>Decision Support:</strong> AI analyzes data and suggests actions, while humans provide judgment and context.</li>
  <li><strong>Co-Creation:</strong> Artists, writers, and engineers use AI to brainstorm, prototype, and refine ideas.</li>
  <li><strong>Adaptive Workflows:</strong> AI systems learn from users and adapt to their preferences, creating personalized experiences.</li>
</ul>
<h3>Challenges</h3>
<p>Effective collaboration requires trust, transparency, and clear communication between humans and AI. Ethical considerations, such as autonomy and accountability, must be addressed.</p>
<h3>The Road Ahead</h3>
<p>As AI capabilities expand, the most successful organizations will be those that foster seamless, ethical, and productive human-AI partnerships.</p>
`,
        readTime: '5 MIN READ',
        category: 'Thought Leadership',
        image: blogs4_3
      },
      {
        id: 16,
        date: 'June 17, 2025',
        title: 'Regulating AI Without Stifling Innovation',
        excerpt: 'A balanced approach to governance that protects society while allowing progress.',
        fullContent: `<p>Balancing innovation and regulation is one of the greatest challenges in AI governance. Effective regulation protects society from harm while enabling the continued growth and benefits of AI technologies.</p>
<h3>The Need for Regulation</h3>
<p>AI systems can introduce risks related to bias, privacy, and accountability. Regulation is necessary to ensure ethical development, prevent misuse, and maintain public trust.</p>
<h3>Principles for Balanced Governance</h3>
<ul>
  <li><strong>Risk-Based Approach:</strong> Tailor regulations to the level of risk posed by different AI applications.</li>
  <li><strong>Transparency and Accountability:</strong> Require clear documentation and assign responsibility for AI outcomes.</li>
  <li><strong>Stakeholder Engagement:</strong> Involve industry, academia, and civil society in policy development.</li>
</ul>
<h3>Global Perspectives</h3>
<p>Different regions are adopting varied approaches to AI regulation, from the EU’s comprehensive AI Act to more flexible frameworks in the US and Asia. Harmonizing standards and promoting international cooperation will be key to effective governance.</p>
<h3>Conclusion</h3>
<p>With thoughtful, adaptive regulation, we can harness AI’s transformative potential while safeguarding fundamental rights and values.</p>
`,
        readTime: '5 MIN READ',
        category: 'Thought Leadership',
        image: blogs4_4
      }
    ],
    'How We Built It': [
      {
        id: 17,
        date: 'May 29, 2025',
        title: 'Building Our Real-Time Video Analysis Pipeline',
        excerpt: 'Architecture deep dive into our distributed system processing 1K+ video streams daily.',
        fullContent: `<p>Building a real-time video analysis pipeline capable of processing over 1,000 video streams daily requires robust architecture, scalable infrastructure, and efficient algorithms. Here’s how we designed and deployed our distributed system.</p>
<h3>System Architecture</h3>
<ul>
  <li><strong>Ingestion Layer:</strong> Handles incoming video streams using scalable message queues and load balancers.</li>
  <li><strong>Processing Layer:</strong> Distributed compute nodes run AI models for object detection, tracking, and event recognition in real time.</li>
  <li><strong>Storage and Analytics:</strong> Results are stored in a time-series database, enabling fast querying and dashboard visualization.</li>
</ul>
<h3>Key Challenges</h3>
<ul>
  <li><strong>Latency:</strong> Optimized model inference and data transfer to keep end-to-end latency under 500ms.</li>
  <li><strong>Scalability:</strong> Auto-scaling clusters handle variable workloads, ensuring reliability and cost efficiency.</li>
  <li><strong>Fault Tolerance:</strong> Redundant components and health monitoring minimize downtime and data loss.</li>
</ul>
<h3>Lessons Learned</h3>
<p>Investing in observability, continuous integration, and automated testing was critical for maintaining performance at scale. Ongoing optimization and hardware upgrades keep the system ahead of growing demand.</p>
`,
        readTime: '6 MIN READ',
        category: 'How We Built It',
        image: blogs5_1
      },
      {
        id: 18,
        date: 'June 4, 2025',
        title: 'Scaling Our Recommendation System to 10K+ Users',
        excerpt: 'Lessons learned from evolving our architecture to handle exponential growth.',
        fullContent: `<p>Scaling a recommendation system to serve over 10,000 users required architectural evolution, robust data pipelines, and continuous optimization. Here’s what we learned along the way.</p>
<h3>Architecture Evolution</h3>
<ul>
  <li><strong>Microservices:</strong> Decoupled components for data ingestion, feature engineering, model inference, and user feedback.</li>
  <li><strong>Data Pipeline:</strong> Real-time ETL processes aggregate and transform user interactions, enabling up-to-date recommendations.</li>
  <li><strong>Model Serving:</strong> Deployed models using scalable APIs with load balancing and caching for low-latency responses.</li>
</ul>
<h3>Lessons Learned</h3>
<ul>
  <li><strong>Monitoring:</strong> Implemented detailed logging and metrics to track system health and user engagement.</li>
  <li><strong>Personalization:</strong> Incorporated contextual and behavioral signals to improve relevance and diversity.</li>
  <li><strong>Continuous Improvement:</strong> Regular A/B testing and feedback loops drive ongoing model refinement.</li>
</ul>
<h3>Conclusion</h3>
<p>With the right architecture and practices, recommendation systems can scale to meet the needs of rapidly growing user bases.</p>
`,
        readTime: '6 MIN READ',
        category: 'How We Built It',
        image: blogs5_2
      },
      {
        id: 19,
        date: 'June 9, 2025',
        title: 'Migrating Our ML Platform to Kubernetes',
        excerpt: 'The good, the bad, and the ugly of containerizing our machine learning workloads.',
        fullContent: `<p>Migrating our machine learning platform to Kubernetes enabled us to containerize workloads, improve scalability, and streamline deployment. The journey, however, involved overcoming technical and organizational challenges.</p>
<h3>Why Kubernetes?</h3>
<ul>
  <li><strong>Portability:</strong> Containers encapsulate dependencies, making it easier to move workloads across environments.</li>
  <li><strong>Scalability:</strong> Kubernetes orchestrates resources, auto-scales pods, and manages failover for high availability.</li>
  <li><strong>DevOps Integration:</strong> CI/CD pipelines automate testing, deployment, and rollback, accelerating innovation.</li>
</ul>
<h3>Challenges</h3>
<ul>
  <li><strong>Resource Management:</strong> Tuning resource requests and limits to balance cost and performance.</li>
  <li><strong>Stateful Workloads:</strong> Managing persistent storage and data consistency for ML experiments.</li>
  <li><strong>Team Training:</strong> Upskilling engineers in Kubernetes concepts and best practices.</li>
</ul>
<h3>Outcomes</h3>
<p>The migration improved system reliability, reduced deployment times, and enabled faster iteration. Ongoing investment in observability and automation continues to pay dividends.</p>
`,
        readTime: '7 MIN READ',
        category: 'How We Built It',
        image: blogs5_3
      },
      {
        id: 20,
        date: 'June 20, 2025',
        title: 'Implementing Continuous Training for Our Fraud Detection Models',
        excerpt: 'How we reduced false positives by 30% with automated model retraining.',
        fullContent: `<p>Continuous training is essential for keeping fraud detection models effective as fraud patterns evolve. Our automated retraining pipeline reduced false positives by 30% and improved detection rates.</p>
<h3>Pipeline Overview</h3>
<ul>
  <li><strong>Data Collection:</strong> Real-time ingestion of transaction data and feedback from analysts.</li>
  <li><strong>Model Retraining:</strong> Scheduled retraining jobs incorporate new data, ensuring models remain up to date.</li>
  <li><strong>Validation and Deployment:</strong> Automated testing and canary deployments minimize risk and downtime.</li>
</ul>
<h3>Key Lessons</h3>
<ul>
  <li><strong>Monitoring:</strong> Continuous evaluation of model performance detects drift and triggers retraining as needed.</li>
  <li><strong>Collaboration:</strong> Close cooperation between data scientists, engineers, and fraud analysts ensures practical, actionable models.</li>
  <li><strong>Automation:</strong> Investing in automation reduces manual workload and accelerates response to emerging threats.</li>
</ul>
<h3>Conclusion</h3>
<p>Continuous training is a cornerstone of modern fraud detection, enabling organizations to stay ahead of adversaries and protect customers effectively.</p>
`,
        readTime: '5 MIN READ',
        category: 'How We Built It',
        image: blogs5_4
      }
    ]
  });
  // Fetch news from API
const fetchSectionSpecificNews = async () => {
  setIsLoading(true);
  setError(null);

  try {
    const apiKey = '09f3c2e13d92488182679c7d6cff694d';
    
    // Define queries for each section
    const sectionQueries = {
      'AI Trends': 'AI OR "Artificial Intelligence" OR "Machine Learning"',
      'Technical Explainers': '"AI technical" OR "ML explainer" OR "Neural Networks"',
      'Use Cases': '"AI in healthcare" OR "AI finance" OR "AI manufacturing"',
      'Thought Leadership': '"AI ethics" OR "Future of AI" OR "AI policy"',
      'How We Built It': '"AI system architecture" OR "ML pipeline" OR "AI implementation"'
    };

    // Fetch news for each section
    const sectionUpdates = await Promise.all(
      Object.entries(sectionQueries).map(async ([section, query]) => {
        const response = await fetch(
           `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&sortBy=publishedAt&pageSize=3&language=en&apiKey=${apiKey}`
        );
        
        if (!response.ok) throw new Error(`Failed to fetch ${section} news`);
        const data = await response.json();
        
        return {
          section,
          articles: data.articles?.map((article: NewsArticle, index: number) => ({
            id: `api-${section}-${index}-${Date.now()}`,
            date: new Date(article.publishedAt).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            }),
            title: article.title,
            excerpt: article.description || 'No description available',
            fullContent: `
              <p>${article.content || article.description || 'No content available'}</p>
              ${article.urlToImage ? `<img src="${article.urlToImage}" alt="${article.title}" style="max-width: 100%; border-radius: 8px; margin: 1rem 0;" />` : ''}
              <p>Source: ${article.source?.name || 'Unknown'}</p>
              ${article.author ? `<p>Author: ${article.author}</p>` : ''}
              <p><a href="${article.url}" target="_blank" rel="noopener noreferrer" style="color: #a78bfa;">Read original article</a></p>
            `,
            readTime: '4 MIN READ',
            category: section,
            image: article.urlToImage || getDefaultImage(section)
          })) || []
        };
      })
    );

    // Update state with section-specific news
    setAllArticles(prev => {
      const updated = {...prev};
      sectionUpdates.forEach(({section, articles}) => {
        updated[section] = [
          ...articles.slice(0, 3), // Keep 3 newest articles per section
          ...prev[section].filter(article => {
            // Safely check if article has an id and it's not an API article
            if (!article.id) return true; // Keep if no id exists (original articles)
            if (typeof article.id !== 'string') return true; // Keep if id isn't string
            return !article.id.startsWith('api-'); // Filter out existing API articles
          })
        ];
      });
      return updated;
    });

  } catch (err) {
    console.error('Full error object:', err);
    console.error('Error message:', err.message);
    console.error('Response status:', err.response?.status);
    setError(`Failed to load news. Details: ${err.message}`);
  } finally {
    setIsLoading(false);
  }
};

// Helper function to get default images per section
const getDefaultImage = (section: string) => {
  switch(section) {
    case 'AI Trends': return blog2;
    case 'Technical Explainers': return blogs1;
    case 'Use Cases': return blogs3_1;
    case 'Thought Leadership': return blogs4_1;
    case 'How We Built It': return blogs5_1;
    default: return blog2;
  }
};

// Update your useEffect to use the new function
useEffect(() => {
  fetchSectionSpecificNews();
  const interval = setInterval(fetchSectionSpecificNews, 3600000); // 1 hour
  return () => clearInterval(interval);
}, []);

  
///////
  const categories = Object.keys(allArticles);
  const [selectedCategory, setSelectedCategory] = useState('AI Trends'); // Default to AI Trends
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);

  
  // Expanded taglines for the hero section
  const taglines = [
    "Unleash the Power of AI: Deep Dive into the Future.",
    "Mastering Machine Learning: Technical Explainers & Practical Insights.",
    "Real-World AI: Discover Transformative Use Cases & Solutions.",
    "Shaping Tomorrow: Thought Leadership in Artificial Intelligence.",
    "Engineered for Excellence: Behind the Scenes of Our AI Innovations."
  ];

  const filteredArticles = allArticles[selectedCategory] || [];

  const nextSlide = () => {
    setCurrentSlide(prev => (prev === filteredArticles.length - 1 ? 0 : prev + 1));
  };
  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? filteredArticles.length - 1 : prev - 1));
  };

  // Handle touch events for mobile swipe
  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) nextSlide();
    if (touchStart - touchEnd < -50) prevSlide();
  };

  // Auto-rotate slides and taglines
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 8000); // Rotate featured articles
    const taglineInterval = setInterval(() => {
      setCurrentTaglineIndex(prev => (prev + 1) % taglines.length);
    }, 3500); // Rotate taglines
    return () => {
      clearInterval(slideInterval);
      clearInterval(taglineInterval);
    };
  }, [currentSlide, filteredArticles.length, taglines.length]);

  // Get 3 latest articles from all categories for the sidebar
  const latestArticles = Object.values(allArticles)
    .flat()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  // Effect to reset articlesToShow when category changes
  useEffect(() => {
    setArticlesToShow(6); // Reset to initial 6 articles when category changes
  }, [selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a12] text-white">
      <Navbar />

      <main className="flex-grow pt-16">
        {" "}
        {/* Adjust pt- to account for fixed navbar height */}
        {isLoading && (
          <div className="fixed top-0 left-0 w-full h-1 bg-purple-500 z-50">
            <div className="h-full bg-purple-400 animate-pulse" style={{ width: '80%' }}></div>
          </div>
        )}
        
        {/* Add error message */}
        {error && (
          <div className="bg-yellow-900/50 text-yellow-200 p-4 text-center">
            {error}
          </div>
        )}
        {/* Hero Section */}
        <div className="relative py-24 overflow-hidden">
          {/* Background with smoother gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a12] via-[#12121e] to-[#1a1a2e]"></div>
          <div className="absolute inset-0 opacity-20">
            <div
              className="absolute inset-0 z-0 opacity-120"
              style={{
                backgroundImage: `url(${bg7})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-[length:40px_40px]"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-transparent"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-6xl font-bold pb-3 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-violet-400"
            >
              AI Insights Hub
            </motion.h1>
            <div className="h-24 flex items-center justify-center">
              {" "}
              {/* Increased height for more tagline space */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentTaglineIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-3xl text-purple-400 font-extrabold max-w-2xl mx-auto"
                >
                  {taglines[currentTaglineIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-gray-300 max-w-4xl mx-auto text-lg md:text-xl leading-relaxed mt-4"
            >
              Dive deep into expert analysis on cutting-edge artificial
              intelligence technologies, real-world applications, and their
              transformative impact on businesses and society.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-10 flex flex-wrap justify-center gap-6"
            >
              {/* Primary Call to Action - Scrolls to latest articles */}
              <button
                onClick={() => {
                  document
                    .getElementById("latest-articles-section")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-4 rounded-full font-bold text-lg bg-gradient-to-r from-purple-600 to-violet-500 text-white shadow-lg shadow-purple-500/40 hover:from-purple-700 hover:to-violet-600 transition-all transform hover:scale-105 flex items-center gap-2"
              >
                Explore Insights <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </div>
        {/* Featured Articles Slider */}
        <section
          id="featured-section"
          className="bg-gradient-to-b from-[#1a1a2e] via-[#161627] to-[#12121e] py-16 relative overflow-hidden"
        >
          {" "}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] bg-[length:300px_300px]"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="flex justify-between items-center mb-8">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold flex items-center gap-3 text-purple-300"
              >
                {/* Icons based on selected category for Featured section */}
                {selectedCategory === "AI Trends" && (
                  <Lightbulb className="w-7 h-7 text-purple-400" />
                )}
                {selectedCategory === "Technical Explainers" && (
                  <Cpu className="w-7 h-7 text-purple-400" />
                )}
                {selectedCategory === "Use Cases" && (
                  <BookOpen className="w-7 h-7 text-purple-400" />
                )}
                {selectedCategory === "Thought Leadership" && (
                  <Brain className="w-7 h-7 text-purple-400" />
                )}
                {selectedCategory === "How We Built It" && (
                  <Settings className="w-7 h-7 text-purple-400" />
                )}
                Featured {selectedCategory} Articles
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex space-x-2"
              >
                <button
                  onClick={prevSlide}
                  className="p-3 rounded-full hover:bg-[#2d2d42] transition-colors hover:shadow-md"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-3 rounded-full hover:bg-[#2d2d42] transition-colors hover:shadow-md"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </motion.div>
            </div>
            <div className="relative overflow-hidden rounded-xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {filteredArticles.map((article) => (
                  <div key={article.id} className="w-full flex-shrink-0 px-2">
                    <motion.div
                      className="border border-[#3a3a57] rounded-xl overflow-hidden hover:shadow-xl transition-all bg-[#1e1e2e] h-full relative group"
                      whileHover={{ y: -5 }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="h-48 bg-[#2d2d42] relative overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          // Consider using Next.js <Image> component for optimization:
                          // import Image from 'next/image'; <Image src={article.image} ... />
                          className="absolute inset-0 object-cover w-full h-full opacity-80 transform transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#1e1e2e] to-transparent"></div>
                        <div className="absolute top-4 left-4 bg-purple-600/90 text-white px-3 py-1 rounded-full text-xs font-medium">
                          {article.category}
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <span className="text-sm text-gray-400">
                            {article.date}
                          </span>
                          <span className="text-sm text-gray-400">
                            {article.readTime}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 line-clamp-2 text-purple-200">
                          {article.title}
                        </h3>
                        <p className="text-gray-300 mb-4 line-clamp-3">
                          {article.excerpt}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">
                            {article.readTime}
                          </span>
                          <button
                            className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                            onClick={() => setOpenArticle(article)}
                          >
                            Read More <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-8 space-x-2">
              {filteredArticles.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index
                      ? "bg-purple-500 w-6"
                      : "bg-[#3a3a57]"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
        {/* Blog Content Sections */}
        <div className="bg-[#12121e] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <section className="md:col-span-3" id="latest-articles-section">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-purple-300">
                    Latest Articles
                  </h2>
                  {/* Category selection is now handled by Navbar, so removed the select dropdown here */}
                  {selectedCategory === 'AI Trends' && (
                    <button 
                      onClick={fetchSectionSpecificNews}
                      className="text-sm bg-[#2d2d42] hover:bg-[#3a3a57] px-3 py-1 rounded-lg flex items-center gap-1 transition-colors"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Refreshing...' : 'Refresh News'}
                    </button>
                  )}
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredArticles
                    .slice(0, articlesToShow)
                    .map((article, index) => (
                      <motion.article
                        key={article.id}
                        className="border border-[#3a3a57] rounded-xl overflow-hidden bg-[#1e1e2e] hover:shadow-lg transition-all relative group"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true, amount: 0.1 }}
                      >
                        <div className="h-48 bg-[#2d2d42] relative overflow-hidden">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="absolute inset-0 object-cover w-full h-full opacity-80 transform transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#1e1e2e] to-transparent"></div>
                        </div>
                        <div className="p-5">
                          <div className="flex justify-between items-start mb-2">
                            <span className="text-xs text-purple-400 font-medium">
                              {article.category}
                            </span>
                            <span className="text-xs text-gray-400">
                              {article.date}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold mb-2 line-clamp-2 text-purple-200">
                            {article.title}
                          </h3>
                          <p className="text-gray-300 text-sm mb-3 line-clamp-3">
                            {article.excerpt}
                          </p>
                          <div className="flex justify-between items-center mt-3">
                            <span className="text-xs text-gray-400">
                              {article.readTime}
                            </span>
                            <button
                              className="text-purple-400 hover:text-purple-300 text-xs font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                              onClick={() => setOpenArticle(article)}
                            >
                              Read More <ArrowRight className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </motion.article>
                    ))}
                </div>
                {articlesToShow < filteredArticles.length && (
                  <div className="mt-10 flex justify-center">
                    <button
                      onClick={() => setArticlesToShow((prev) => prev + 6)}
                      className="px-8 py-4 rounded-full font-medium bg-gradient-to-r from-purple-600 to-violet-500 text-white hover:from-purple-700 hover:to-violet-600 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      Load More Articles <ChevronDown className="w-4 h-4" />{" "}
                      {/* Changed icon to ChevronDown */}
                    </button>
                  </div>
                )}
              </section>
              <aside className="space-y-10">
                <motion.div
                  className="bg-[#1e1e2e] p-8 rounded-2xl border border-[#3a3a57] shadow-xl sticky top-24" // Made sticky
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-bold text-xl md:text-2xl mb-6 text-purple-300 flex items-center gap-3">
                    <Code2 className="w-6 h-6 text-purple-400" /> Popular
                    Categories
                  </h3>
                  <ul className="space-y-3">
                    {categories.map((category) => (
                      <li key={category}>
                        <button
                          onClick={() => setSelectedCategory(category)}
                          className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center justify-between text-base md:text-lg
                            ${
                              selectedCategory === category
                                ? "bg-purple-600/30 text-purple-300 font-semibold"
                                : "hover:bg-[#2d2d42] text-gray-200"
                            }`}
                        >
                          <span>{category}</span>
                          <span className="text-sm bg-[#4a4a67] px-3 py-1 rounded-full text-gray-300">
                            {allArticles[category].length}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div
                  className="bg-[#1e1e2e] p-8 rounded-2xl border border-[#3a3a57] shadow-xl sticky top-[calc(24px_+_300px)]" // Adjust top for sticky behavior, assuming 300px height for first sticky
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-bold text-xl md:text-2xl mb-6 text-purple-300 flex items-center gap-3">
                    <BookOpen className="w-6 h-6 text-purple-400" /> Recently
                    Published
                  </h3>
                  <div className="space-y-6">
                    {latestArticles.map((article) => (
                      <div
                        key={article.id}
                        className="flex gap-4 items-start group"
                      >
                        <div className="flex-shrink-0 w-20 h-20 bg-[#2d2d42] rounded-xl overflow-hidden relative border border-[#3a3a57]">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="absolute inset-0 object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <div>
                          <h4 className="text-base font-medium line-clamp-2 text-purple-200 group-hover:text-purple-300 transition-colors">
                            {article.title}
                          </h4>
                          <p className="text-sm text-gray-400 mt-1">
                            {article.date}
                          </p>
                          <button
                            className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center gap-1 mt-2"
                            onClick={() => setOpenArticle(article)}
                          >
                            Read <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </aside>
            </div>
          </div>
        </div>
        {/* Modal for "Read More" */}
        <AnimatePresence>
          {openArticle && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenArticle(null)}
            >
              <motion.div
                className="bg-[#1e1e2e] rounded-2xl shadow-2xl border border-[#3a3a57] max-w-3xl w-full mx-auto p-8 relative max-h-[90vh] overflow-y-auto custom-scrollbar"
                initial={{ scale: 0.95, y: 40 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 40 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-gray-400 hover:text-purple-400 text-3xl font-bold z-10"
                  onClick={() => setOpenArticle(null)}
                  aria-label="Close"
                >
                  &times;
                </button>
                <img
                  src={openArticle.image}
                  alt={openArticle.title}
                  className="rounded-xl w-full h-64 object-cover mb-6 border border-[#3a3a57]"
                />
                <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
                  <span className="text-sm bg-purple-600/90 text-white px-4 py-2 rounded-full font-medium">
                    {openArticle.category}
                  </span>
                  <span className="text-sm text-gray-400">
                    {openArticle.date} • {openArticle.readTime}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-purple-200">
                  {openArticle.title}
                </h2>
                {/*
                  IMPORTANT: openArticle.fullContent is where your full article text should be.
                  Ensure it's populated in your allArticles data.
                  Use dangerouslySetInnerHTML with caution and only with trusted content.
                */}
                <div
                  className="text-gray-300 text-base leading-relaxed space-y-4 prose prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: openArticle.fullContent }}
                />
                {/* You might want to style the 'prose' class from @tailwindcss/typography plugin for better content formatting */}
                <div className="mt-8 pt-6 border-t border-[#3a3a57] text-center">
                  <p className="text-gray-400 text-lg mb-3">
                    Found this insightful? Share it!
                  </p>
                  {/* Add social sharing icons here (e.g., Twitter, LinkedIn) */}
                  <div className="flex justify-center gap-4">
                    <a
                      href="https://x.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-[#2d2d42] hover:bg-[#3a3a57] transition-colors flex items-center justify-center"
                      aria-label="Share on X"
                    >
                      <span
                        className="text-xl font-bold text-white"
                        style={{ fontFamily: "sans-serif" }}
                      >
                        X
                      </span>
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-[#2d2d42] hover:bg-[#3a3a57] transition-colors flex items-center justify-center"
                      aria-label="Share on LinkedIn"
                    >
                      <Linkedin className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-800/60 to-violet-800/60 py-20 relative overflow-hidden rounded-xl mx-auto max-w-6xl mt-16 shadow-2xl mb-16">
          <div className="absolute inset-0 opacity-15">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-[length:60px_60px]"></div>
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200"
            >
              Never Miss an AI Breakthrough.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-200 mb-10 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
            >
              Subscribe to our newsletter for exclusive articles, cutting-edge
              research summaries, and expert insights delivered directly to your
              inbox.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto"
            >
              <Link to="/contact">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-600 to-violet-500 hover:from-purple-700 hover:to-violet-600 text-white py-3 px-8 rounded-xl transition-all font-bold text-base md:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Subscribe Now <Mail className="w-5 h-5" />
                </button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
