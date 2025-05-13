import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function CareerPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Career</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Join our team of passionate professionals and help us shape the future of finance.
          </p>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <Image
                  src="/placeholder.svg?key=6nv43"
                  alt="Team members"
                  width={400}
                  height={400}
                  className="rounded-tl-[100px] rounded-br-[100px] object-cover"
                />
                <div className="absolute -bottom-4 -right-4 w-8 h-20 bg-primary rounded-md"></div>
              </div>
              <div className="relative">
                <Image
                  src="/smiling-professional.png"
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

      {/* Job Description */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Find Your Dream Job in
            <br />
            WeFinance!
          </h2>
          <p className="text-muted-foreground mb-8">
            We're always looking for talented individuals to join our team. Check out our current openings and apply
            today.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-primary hover:bg-primary/90 text-white">Apply Now</Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
              Learn More
            </Button>
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
                exceptional service. Join us in our mission to make finance accessible, understandable, and beneficial
                for everyone.
              </p>

              <div className="flex gap-8 mb-8">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#f4f6f8] border border-[#b8c6d6] rounded-full flex items-center justify-center">
                      <span className="text-primary font-medium">18</span>
                    </div>
                    <span className="text-sm">Years Experience</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#f4f6f8] border border-[#b8c6d6] rounded-full flex items-center justify-center">
                      <span className="text-primary font-medium">240</span>
                    </div>
                    <span className="text-sm">Projects Completed</span>
                  </div>
                </div>
              </div>
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

      {/* Career Opportunities */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-sm text-primary font-medium">Join Our Team</span>
            <h2 className="text-2xl md:text-3xl font-bold mt-2">Career Opportunities</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Accounting Manager", department: "Finance" },
              { title: "Sales Marketing", department: "Marketing" },
              { title: "Tax Accounting", department: "Finance" },
              { title: "UX/UI Designer", department: "Design" },
              { title: "Developer", department: "Technology" },
              { title: "Product Designer", department: "Design" },
            ].map((job, index) => (
              <Card key={index} className="border-none shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold">{job.title}</h3>
                  <p className="text-sm text-muted-foreground">{job.department} Department</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button className="bg-primary hover:bg-primary/90 text-white w-full">Apply</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-primary relative overflow-hidden py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 z-10 mb-8 md:mb-0">
            <span className="text-sm text-white/80 font-medium">Employee Benefits</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Great People
              <br />
              Deserve Great
              <br />
              Benefits.
            </h2>
            <p className="text-white/80 mb-8 max-w-md">
              We value our employees and offer competitive benefits to ensure their well-being and professional growth.
            </p>
            <Button className="bg-white text-primary hover:bg-white/90">Learn More</Button>
          </div>
          <div className="md:w-1/2 z-10">
            <div className="bg-[#5975ff]/20 p-4 rounded-2xl">
              <Image
                src="/placeholder.svg?height=400&width=400&query=professional woman smiling in business attire"
                alt="Employee benefits"
                width={400}
                height={400}
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-sm text-primary font-medium">Our Articles</span>
            <h2 className="text-2xl md:text-3xl font-bold mt-2">Latest News</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="bg-white border shadow-sm overflow-hidden">
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
