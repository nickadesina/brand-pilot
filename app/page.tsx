import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Play,
  Heart,
  MessageCircle,
  Share,
  Eye,
  TrendingUp,
  Users,
  Zap,
  Star,
  CheckCircle2,
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <Zap className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">ContentFlow AI</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#showcase" className="text-muted-foreground hover:text-foreground transition-colors">
                See It Work
              </a>
              <a href="#case-studies" className="text-muted-foreground hover:text-foreground transition-colors">
                Case Studies
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </a>
              <Button variant="outline" size="sm">
                Sign In
              </Button>
              <Button size="sm">Start Free Trial</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <Badge variant="secondary" className="mb-6 bg-secondary/10 text-secondary border-secondary/20">
              <TrendingUp className="h-3 w-3 mr-1" />
              AI Creates. Humans Direct. Brands Win.
            </Badge>
            <h1 className="text-4xl lg:text-7xl font-bold text-balance mb-6 leading-tight">
              Your AI Content Army Creates <span className="text-primary">10,000 Posts</span> While You Sleep
            </h1>
            <p className="text-xl text-muted-foreground text-pretty mb-8 max-w-3xl mx-auto leading-relaxed">
              Watch AI agents create viral TikToks, Instagram carousels, and product reviews in your brand voice. One
              human creator manages 50+ AI agents. Scale from 10 posts to 10,000 without hiring an army.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8 h-14">
                See AI in Action
                <Play className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 h-14 bg-transparent">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* TikTok Video Mockup */}
              <Card className="border-border hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <CardHeader className="p-0">
                  <div className="relative bg-gradient-to-br from-chart-2/20 to-chart-1/20 rounded-t-lg h-48 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/20 rounded-t-lg"></div>
                    <Play className="h-12 w-12 text-white z-10 group-hover:scale-110 transition-transform" />
                    <div className="absolute bottom-3 left-3 right-3 text-white text-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <Heart className="h-4 w-4" />
                        <span>47.2K</span>
                        <MessageCircle className="h-4 w-4 ml-2" />
                        <span>1.8K</span>
                        <Share className="h-4 w-4 ml-2" />
                        <span>892</span>
                      </div>
                      <p className="text-xs opacity-90">"This AI-generated skincare routine is actually fire 🔥"</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <CardTitle className="text-sm font-semibold mb-1">AI TikTok Creator</CardTitle>
                    <CardDescription className="text-xs">Generated 47 viral videos this week</CardDescription>
                  </div>
                </CardHeader>
              </Card>

              {/* Instagram Post Mockup */}
              <Card className="border-border hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <CardHeader className="p-0">
                  <div className="relative bg-gradient-to-br from-chart-3/20 to-secondary/20 rounded-t-lg h-48">
                    <div className="absolute inset-4 bg-white rounded-lg shadow-sm p-3">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-6 bg-primary rounded-full"></div>
                        <span className="text-xs font-medium">@brandname_official</span>
                      </div>
                      <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded h-20 mb-2"></div>
                      <div className="flex gap-2 mb-2">
                        <Heart className="h-4 w-4" />
                        <MessageCircle className="h-4 w-4" />
                        <Share className="h-4 w-4" />
                      </div>
                      <div className="text-xs text-muted-foreground">
                        <p className="font-medium">12,847 likes</p>
                        <p className="mt-1">Perfect morning routine essentials ✨</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <CardTitle className="text-sm font-semibold mb-1">Instagram AI Agent</CardTitle>
                    <CardDescription className="text-xs">Posted 23 carousel posts today</CardDescription>
                  </div>
                </CardHeader>
              </Card>

              {/* Product Review Mockup */}
              <Card className="border-border hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <CardHeader className="p-0">
                  <div className="relative bg-gradient-to-br from-chart-4/20 to-chart-5/20 rounded-t-lg h-48 p-4">
                    <div className="bg-white rounded-lg p-3 h-full shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-5 h-5 bg-secondary rounded-full"></div>
                        <span className="text-xs font-medium">Sarah M.</span>
                        <div className="flex ml-auto">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-chart-4 text-chart-4" />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        "This product completely transformed my skincare routine! The texture is amazing and I saw
                        results in just 2 weeks. Highly recommend for anyone with sensitive skin..."
                      </p>
                      <div className="mt-2 text-xs text-muted-foreground">
                        <span>Verified Purchase • 2 days ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <CardTitle className="text-sm font-semibold mb-1">Review AI Generator</CardTitle>
                    <CardDescription className="text-xs">Created 156 authentic reviews</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="showcase" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">See What Your AI Army Can Create</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Real examples from brands using ContentFlow AI to generate thousands of pieces of content daily
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <Badge className="mb-4 bg-chart-1/10 text-chart-1 border-chart-1/20">TikTok Content Factory</Badge>
              <h3 className="text-2xl font-bold mb-4">50 Viral Videos Per Day, Zero Burnout</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Beauty brand "GlowUp" uses 12 AI agents to create product demos, tutorials, and trend-jacking content.
                Each agent specializes in different video styles - from GRWM to product unboxings.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary" />
                  <span>AI learns trending sounds and hashtags automatically</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary" />
                  <span>Human creator approves 10 videos in 5 minutes</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary" />
                  <span>Each agent has unique personality and style</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="border-border hover:shadow-md transition-shadow">
                  <CardHeader className="p-3">
                    <div className="bg-gradient-to-br from-chart-1/20 to-chart-2/20 rounded h-32 mb-2 flex items-center justify-center">
                      <Play className="h-8 w-8 text-chart-1" />
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium">Agent {i}</span>
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        <span>{(Math.random() * 100 + 10).toFixed(1)}K</span>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 gap-4">
                {[
                  { platform: "Instagram", posts: "847", engagement: "12.4%" },
                  { platform: "Twitter", posts: "1,203", engagement: "8.7%" },
                  { platform: "LinkedIn", posts: "156", engagement: "15.2%" },
                ].map((stat, i) => (
                  <Card key={i} className="border-border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">{stat.platform}</p>
                        <p className="text-sm text-muted-foreground">{stat.posts} posts this month</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-secondary">{stat.engagement}</p>
                        <p className="text-xs text-muted-foreground">avg engagement</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">Multi-Platform Mastery</Badge>
              <h3 className="text-2xl font-bold mb-4">One Creator, 15 AI Agents, Every Platform</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                SaaS company "ProductFlow" has one part-time creator managing AI agents across Instagram, Twitter,
                LinkedIn, and TikTok. Each platform gets native content optimized for its audience and algorithm.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary" />
                  <span>Platform-specific AI training for each channel</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary" />
                  <span>Cross-platform content repurposing with AI adaptation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary" />
                  <span>Real-time performance optimization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="case-studies" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">Brands Scaling With AI Content</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Real results from companies using ContentFlow AI to transform their content operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">FitnessPro</CardTitle>
                    <CardDescription>Health & Wellness Brand</CardDescription>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Monthly Content</span>
                    <span className="font-bold text-2xl text-primary">2,847</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Engagement Rate</span>
                    <span className="font-bold text-2xl text-secondary">+340%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Team Size</span>
                    <span className="font-bold text-2xl">3 → 1</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                  "We went from struggling to post daily to creating 100+ pieces of content per day. Our AI agents
                  understand fitness trends better than most humans."
                </p>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">TechStartup Co</CardTitle>
                    <CardDescription>B2B SaaS Platform</CardDescription>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Lead Generation</span>
                    <span className="font-bold text-2xl text-primary">+580%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Content Cost</span>
                    <span className="font-bold text-2xl text-secondary">-75%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Platforms</span>
                    <span className="font-bold text-2xl">12</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                  "Our AI agents create LinkedIn thought leadership, Twitter threads, and case studies. We're now the
                  most visible brand in our space."
                </p>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-chart-3/10 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-chart-3" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">StyleBrand</CardTitle>
                    <CardDescription>Fashion E-commerce</CardDescription>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">UGC Videos</span>
                    <span className="font-bold text-2xl text-primary">1,200/mo</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Conversion Rate</span>
                    <span className="font-bold text-2xl text-secondary">+290%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">ROI</span>
                    <span className="font-bold text-2xl">847%</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                  "AI creates product styling videos, outfit ideas, and trend content. Our customers can't tell the
                  difference from human creators."
                </p>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">Ready to Build Your AI Content Army?</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join 500+ brands already using AI to create thousands of pieces of content daily. Start with 3 AI agents
              free for 14 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="text-lg px-8 h-14">
                Start Free Trial - 3 AI Agents
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 h-14 bg-transparent">
                Watch 5-Min Demo
                <Play className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              No credit card required • Setup in under 10 minutes • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <Zap className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">ContentFlow AI</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Scale your content creation with AI-powered orchestration that actually works.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    AI Agents
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Content Types
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Analytics
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Use Cases</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    TikTok Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Instagram Growth
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Product Reviews
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    B2B Content
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 ContentFlow AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
