import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Award, 
  Target, 
  TrendingUp, 
  Database,
  Zap,
  BarChart3,
  Shield,
  Code,
  Wrench,
  BookOpen,
  Mail,
  Linkedin,
  Github,
  Youtube
} from "lucide-react";

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { icon: Award, label: "IT Diplomas Completed", value: "20+" },
    { icon: Target, label: "Accuracy in Campaigns & Sales Funnels", value: "95%" },
    { icon: TrendingUp, label: "Years of Business Development Experience", value: "3+" },
    { icon: Database, label: "Data-Driven Projects Delivered", value: "10+" }
  ];

  const portfolio = [
    {
      category: "Marketing Automation",
      icon: Zap,
      company: "UK Client (Freelance)",
      title: "Automated Sales Funnel & Campaign Infrastructure",
      description: "Designed and implemented a complete sales funnel using GoHighLevel (GHL) — including CRM setup, lead nurturing, automated workflows, and ad campaigns. Achieved a 95% accuracy rate in campaign targeting and boosted conversion rates through hyper-targeted automation.",
      link: "#"
    },
    {
      category: "Data Analytics",
      icon: BarChart3,
      company: "Freelance Project",
      title: "Sales Data Visualization Dashboard",
      description: "Built a Power BI dashboard for a retail client to analyze sales trends, optimize inventory, and increase overall revenue.",
      link: "#"
    },
    {
      category: "Business Development",
      icon: Shield,
      company: "Auxcube",
      title: "Email Validation & Enrichment System",
      description: "Automated data validation pipelines that improved outreach accuracy by 70%, supporting high-conversion email campaigns and lead scoring.",
      link: "#"
    },
    {
      category: "Web Development",
      icon: Code,
      company: "Riffonix Solutions",
      title: "Company Website",
      description: "Developed a modern business website integrated with cloud-based CRM and analytics tools to showcase company services and portfolio.",
      link: "https://riffonix.com"
    },
    {
      category: "AI Tools",
      icon: Wrench,
      company: "Personal Project",
      title: "Data Extraction & Manipulation Tool",
      description: "Created a Python-based tool for automated data extraction and cleaning, improving workflow efficiency for analytics teams.",
      link: "#"
    },
    {
      category: "Education",
      icon: BookOpen,
      company: "Riffat Empowerment Network",
      title: "Complete Roadmap to Data Science Book",
      description: "Authoring a beginner-friendly guide for aspiring data scientists, covering fundamentals to advanced ML and AI concepts.",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-lg">
                MS
              </div>
              <span className="font-semibold text-gray-900">M Shoaib Shah</span>
            </div>
            
            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('portfolio')} className="text-gray-600 hover:text-blue-600 transition-colors">
                Portfolio
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-blue-600 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600 transition-colors">
                Contact
              </button>
            </nav>

            <div className="flex items-center gap-3">
              <a href="https://www.linkedin.com/in/mshoaibshah/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@shoaibshah" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              M Shoaib Shah
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Business Developer & Data Science Student helping startups and agencies scale through <span className="text-blue-600 font-semibold">automation</span>, <span className="text-blue-600 font-semibold">AI</span>, and <span className="text-blue-600 font-semibold">hyper-targeted marketing campaigns</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8"
                onClick={() => scrollToSection('portfolio')}
              >
                View Portfolio
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <Icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                      <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">My Portfolio</h2>
            <p className="text-lg text-gray-600">
              Showcasing high-impact projects that drive results for startups, agencies, and businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {portfolio.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card key={index} className="border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                          {project.category}
                        </div>
                        <div className="text-xs text-gray-500">{project.company}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {project.link !== "#" && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700"
                      >
                        View Project →
                      </a>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Hey, I'm Shoaib — a <strong className="text-gray-900">Business Developer</strong> and <strong className="text-gray-900">Data Science student</strong> passionate about blending marketing, automation, and analytics to drive real growth.
                  </p>
                  <p>
                    With <strong className="text-gray-900">20+ diplomas in IT</strong> and hands-on experience in sales funnels, GHL automation, and data-driven strategies, I help businesses build systems that convert.
                  </p>
                  <p>
                    Currently, I'm working at <strong className="text-gray-900">Auxcube</strong>, leading outreach and data enrichment campaigns, and building my own company <strong className="text-gray-900">Riffonix Solutions</strong> — focused on integrating AI and automation in business growth.
                  </p>
                  <p>
                    Outside work, I'm establishing <strong className="text-gray-900">Riffat Foundation</strong> to empower underprivileged individuals through tech education and skills training.
                  </p>
                </div>
              </div>
              
              <div className="flex justify-center lg:justify-end">
                <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-500">
                  <img 
                    src="/profile.png" 
                    alt="M Shoaib Shah - Professional Photo" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to scale your business with automation and data-driven strategies? Let's discuss your project and build something amazing together.
            </p>
            
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 mb-12"
              onClick={() => window.location.href = 'mailto:syedmshoaibhashmi@gmail.com'}
            >
              <Mail className="w-4 h-4 mr-2" />
              Start a Project
            </Button>

            <div className="flex items-center justify-center gap-6">
              <a 
                href="https://www.linkedin.com/in/mshoaibshah/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-blue-600 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/sshoaibshah/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-blue-600 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.youtube.com/@shoaibshah" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-blue-600 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-50 border-t border-gray-200">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-sm">
                MS
              </div>
              <span className="text-sm text-gray-600">
                © 2025 M Shoaib Shah. All rights reserved.
              </span>
            </div>
            <div className="text-sm text-gray-500">
              Crafted with passion and precision
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
