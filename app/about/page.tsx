import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Learn more about our mission, vision, and the team behind WeFinance.
          </p>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=400&query=diverse business team in office"
                  alt="Team members"
                  width={400}
                  height={400}
                  className="rounded-tl-[100px] rounded-br-[100px] object-cover"
                />
                <div className="absolute -bottom-4 -right-4 w-8 h-20 bg-primary rounded-md"></div>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=400&query=professional woman in business attire"
                  alt="Team members"
                  width={400}
                  height={400}
                  className="rounded-tr-[100px] rounded-bl-[100px] object-cover"
                />
                <div className="absolute -bottom-4 -left-4 w-8 h-20 bg-primary rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discover Section */}
      <section className="py-16 px-6 md:px-12 bg-[#f4f6f8]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <span className="text-sm text-primary font-medium">Our Mission</span>
            <h2 className="text-2xl md:text-3xl font-bold mt-2">
              Discover The World
              <br />
              of Finance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-muted-foreground mb-8">
                At WeFinance, we're dedicated to revolutionizing the financial industry through innovative solutions and
                exceptional service. Our mission is to make finance accessible, understandable, and beneficial for
                everyone.
              </p>

              <p className="text-muted-foreground mb-8">
                With years of experience and a team of dedicated professionals, we provide comprehensive financial
                services tailored to meet the unique needs of our clients.
              </p>
            </div>

            <div>
              <Image
                src="/placeholder.svg?height=400&width=500&query=financial charts and graphs with people"
                alt="Financial world"
                width={500}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=500&width=1200&query=business team meeting in conference room"
              alt="Company video"
              width={1200}
              height={500}
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <Button className="w-16 h-16 rounded-full bg-primary hover:bg-primary/90 text-white">
                <Play className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Curiosity Section */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm text-primary font-medium">Our Values</span>
            <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4">
              We Start From
              <br />
              Curiosity
            </h2>
            <p className="text-muted-foreground mb-8">
              Curiosity drives our innovation. We constantly explore new ideas, technologies, and approaches to provide
              the best financial solutions for our clients. Our team is committed to continuous learning and
              improvement.
            </p>
            <p className="text-muted-foreground mb-8">
              We believe that by asking the right questions and seeking deeper understanding, we can develop more
              effective strategies and solutions for our clients' financial needs.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white">Learn More</Button>
          </div>

          <div>
            <Image
              src="/placeholder.svg?height=400&width=500&query=business professionals brainstorming"
              alt="Curiosity in action"
              width={500}
              height={400}
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Professional Finance */}
      <section className="bg-primary relative overflow-hidden py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="z-10">
              <span className="text-sm text-white/80 font-medium">Our Services</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
                Professional
                <br />
                Finance for Your
                <br />
                Business
              </h2>
              <p className="text-white/80 mb-8">
                We provide comprehensive financial services tailored to meet the unique needs of your business. Our team
                of experts will work with you to develop strategies that drive growth and ensure financial stability.
              </p>
              <Button className="bg-white text-primary hover:bg-white/90">Get Started</Button>
            </div>

            <div className="grid grid-cols-2 gap-4 z-10">
              <Image
                src="/placeholder.svg?height=200&width=200&query=professional man in business attire"
                alt="Team member"
                width={200}
                height={200}
                className="rounded-full object-cover"
              />
              <Image
                src="/placeholder.svg?height=200&width=200&query=professional woman in business attire"
                alt="Team member"
                width={200}
                height={200}
                className="rounded-full object-cover mt-8"
              />
              <Image
                src="/placeholder.svg?height=200&width=200&query=young professional in casual business attire"
                alt="Team member"
                width={200}
                height={200}
                className="rounded-full object-cover mt-4"
              />
              <Image
                src="/placeholder.svg?height=200&width=200&query=senior business professional"
                alt="Team member"
                width={200}
                height={200}
                className="rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Skills */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <span className="text-sm text-primary font-medium">Who We Are</span>
            <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4">
              Our Professional
              <br />
              Skills
            </h2>
            <p className="text-muted-foreground mb-8">
              Our team consists of highly skilled professionals with expertise in various areas of finance. We combine
              our knowledge and experience to provide comprehensive solutions for our clients.
            </p>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Financial Analysis</span>
                  <span className="text-sm font-medium">95%</span>
                </div>
                <div className="w-full bg-[#f4f6f8] rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "95%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Business Consulting</span>
                  <span className="text-sm font-medium">90%</span>
                </div>
                <div className="w-full bg-[#f4f6f8] rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "90%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Investment Planning</span>
                  <span className="text-sm font-medium">85%</span>
                </div>
                <div className="w-full bg-[#f4f6f8] rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Financial Marketing</span>
                  <span className="text-sm font-medium">80%</span>
                </div>
                <div className="w-full bg-[#f4f6f8] rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "80%" }}></div>
                </div>
              </div>
            </div>

            <Button className="mt-8 bg-primary hover:bg-primary/90 text-white">Learn More</Button>
          </div>

          <div className="flex items-center justify-center">
            <div className="bg-[#f4f6f8] p-8 rounded-lg">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 md:px-12 bg-[#111849]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-sm text-white/80 font-medium">Testimonials</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
              What Our
              <br />
              Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#0b1131] p-8 rounded-lg">
              <p className="text-white/80 mb-6">
                "WeFinance has been instrumental in helping our business achieve financial stability and growth. Their
                expert advice and personalized approach have made a significant difference in our financial planning."
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="/placeholder.svg?height=60&width=60&query=professional man headshot"
                  alt="Client"
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
                <div>
                  <h4 className="text-white font-medium">John Smith</h4>
                  <p className="text-white/60 text-sm">CEO, Tech Solutions</p>
                </div>
              </div>
            </div>

            <div className="hidden md:block">{/* Empty for layout purposes */}</div>
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

// Import for the MessageSquare icon
import { MessageSquare } from "lucide-react"
