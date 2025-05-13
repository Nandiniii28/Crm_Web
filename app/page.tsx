import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart3, MessageSquare, ShieldCheck } from "lucide-react"

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 md:px-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Financial
              <br />
              Solutions.
            </h1>
            <p className="text-white/80 mb-8 max-w-md">
              We provide innovative financial solutions to help your business grow and succeed in today's competitive
              market.
            </p>
            <Button className="bg-white text-primary hover:bg-white/90">Get Started</Button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 z-10">
            <Image
              src="/placeholder.svg?key=858ia"
              alt="Financial professional"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>

          {/* Decorative elements */}
          <div className="absolute top-20 right-20 w-16 h-16 bg-[#5975ff] rounded-full opacity-50"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-[#5975ff] rounded-full opacity-50"></div>
          <div className="absolute top-40 left-40 w-8 h-8 bg-white rounded-full opacity-30"></div>
        </div>
      </section>

      {/* Agile Section */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-sm text-primary font-medium">Our Focus</span>
            <h2 className="text-2xl md:text-3xl font-bold mt-2">
              We are Agile, Constantly
              <br />
              Focused on Growth and
              <br />
              Being better
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#f4f6f8] rounded-xl p-6 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold">18</span>
              <span className="text-sm text-muted-foreground">Years Experience</span>
            </div>

            <div className="bg-[#f4f6f8] rounded-xl p-6 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold">240+</span>
              <span className="text-sm text-muted-foreground">Projects Completed</span>
            </div>

            <div className="bg-[#f4f6f8] rounded-xl p-6 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold">150+</span>
              <span className="text-sm text-muted-foreground">Happy Clients</span>
            </div>
          </div>

          <div className="mt-8 bg-[#f4f6f8] rounded-xl p-6 inline-flex items-center">
            <span className="text-2xl font-bold mr-2">9.5/10</span>
            <span className="text-sm text-muted-foreground">Client Satisfaction</span>
          </div>

          <div className="mt-8">
            <Button className="bg-primary hover:bg-primary/90 text-white">Learn More</Button>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 px-6 md:px-12 bg-[#f4f6f8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm text-primary font-medium">Our Services</span>
            <h2 className="text-2xl md:text-3xl font-bold mt-2">What We Offer</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white border-none shadow-sm">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-[#f4f6f8] rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-[#111849]" />
                </div>
                <h3 className="font-semibold mb-2">Financial Reports</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive financial reports to help you make informed decisions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary border-none shadow-sm">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2 text-white">Strategic Consultation</h3>
                <p className="text-sm text-white/80">
                  Expert advice to guide your business through financial challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#111849] border-none shadow-sm">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2 text-white">Financial Support</h3>
                <p className="text-sm text-white/80">Ongoing support to ensure your financial stability and growth.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Manage Your Finances */}
      <section className="bg-primary relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 md:px-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 z-10">
            <span className="text-sm text-white/80 font-medium">Easy Management</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Manage Your
              <br />
              Finances From
              <br />
              one Place
            </h2>
            <p className="text-white/80 mb-8 max-w-md">
              Our platform allows you to manage all your financial activities in one place, making it easier to track,
              analyze, and optimize your finances.
            </p>
            <Button className="bg-white text-primary hover:bg-white/90">Get Started</Button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 z-10">
            <div className="bg-[#b8c6d6]/20 p-4 rounded-2xl">
              <Image
                src="/financial-data-laptop.png"
                alt="Managing finances"
                width={400}
                height={400}
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Start Now Section */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col">
            <span className="text-sm text-primary font-medium">Get Started</span>
            <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4">
              Start Now & Make
              <br />
              Your Finances
              <br />
              Clear & Organized
            </h2>
            <p className="text-muted-foreground mb-8">
              Take control of your financial future with our comprehensive tools and expert guidance. We make it easy to
              organize, track, and optimize your finances.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white w-fit">Learn More</Button>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center gap-4 p-4 border rounded-lg">
              <div className="w-10 h-10 bg-[#f4f6f8] rounded-full flex items-center justify-center">
                <span className="text-primary font-medium">1</span>
              </div>
              <div>
                <h4 className="font-medium">Financial Solutions</h4>
                <p className="text-sm text-muted-foreground">Comprehensive financial solutions</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 border rounded-lg">
              <div className="w-10 h-10 bg-[#f4f6f8] rounded-full flex items-center justify-center">
                <span className="text-primary font-medium">2</span>
              </div>
              <div>
                <h4 className="font-medium">Professional Team</h4>
                <p className="text-sm text-muted-foreground">Expert financial advisors</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 border rounded-lg">
              <div className="w-10 h-10 bg-[#f4f6f8] rounded-full flex items-center justify-center">
                <span className="text-primary font-medium">3</span>
              </div>
              <div>
                <h4 className="font-medium">Support</h4>
                <p className="text-sm text-muted-foreground">24/7 customer support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 px-6 md:px-12 bg-[#f4f6f8]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-sm text-primary font-medium">Our Articles</span>
            <h2 className="text-2xl md:text-3xl font-bold mt-2">Latest News</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="bg-white border-none shadow-sm overflow-hidden">
                <Image
                  src={`/business-team-meeting.png?height=200&width=400&query=business team meeting ${item}`}
                  alt="News image"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="mb-4">
                    <span className="text-xs text-primary font-medium">Finance</span>
                    <h3 className="font-semibold mt-2">How to Start a Successful Business in 2023</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Learn the essential steps to launch and grow a successful business in today's competitive market.
                  </p>
                  <Button variant="outline" className="text-primary border-primary hover:bg-primary/5">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#111849] py-16 px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-sm text-white/80 font-medium">Interested?</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-2 mb-8">Let's Start a Projects Together</h2>
          <Button className="bg-primary hover:bg-primary/90 text-white">Contact Us</Button>
        </div>
      </section>
    </div>
  )
}
