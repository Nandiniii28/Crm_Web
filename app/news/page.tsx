import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function NewsPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">News</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Stay updated with the latest news, insights, and trends in the financial industry.
          </p>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=400&query=professional woman smiling in business attire"
                  alt="News image"
                  width={400}
                  height={400}
                  className="rounded-tl-[100px] rounded-br-[100px] object-cover"
                />
                <div className="absolute -bottom-4 -right-4 w-8 h-20 bg-primary rounded-md"></div>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=400&query=business team in meeting"
                  alt="News image"
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

      {/* Latest News */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-sm text-primary font-medium">Our Articles</span>
            <h2 className="text-2xl md:text-3xl font-bold mt-2">Latest News</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Financial Planning for Small Businesses",
                category: "Business Finance",
                date: "May 15, 2023",
              },
              {
                title: "How to Build Wealth with Smart Investments",
                category: "Investment",
                date: "May 10, 2023",
              },
              {
                title: "Tax Saving Strategies for Entrepreneurs",
                category: "Tax Planning",
                date: "May 5, 2023",
              },
              {
                title: "Understanding Market Trends in 2023",
                category: "Market Analysis",
                date: "April 28, 2023",
              },
              {
                title: "How to Create a Solid Financial Foundation",
                category: "Personal Finance",
                date: "April 22, 2023",
              },
              {
                title: "The Future of Digital Banking",
                category: "Banking",
                date: "April 15, 2023",
              },
            ].map((article, index) => (
              <Card key={index} className="bg-white border shadow-sm overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=200&width=400&query=business finance meeting ${index + 1}`}
                  alt="News image"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-primary font-medium">{article.category}</span>
                    <span className="text-xs text-muted-foreground">{article.date}</span>
                  </div>
                  <h3 className="font-semibold mb-4">{article.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Learn essential strategies and insights to improve your financial decision-making and achieve your
                    goals.
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

      {/* Company Facts */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <span className="text-sm text-primary font-medium">Learn More</span>
            <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4">
              A Few Facts About
              <br />
              Our Company
            </h2>
            <p className="text-muted-foreground mb-8">
              WeFinance has been providing exceptional financial services for over 18 years. We've helped hundreds of
              businesses and individuals achieve their financial goals through strategic planning and expert advice.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white">Learn More</Button>
          </div>

          <div className="flex items-center justify-center">
            <div className="bg-[#f4f6f8] p-8 rounded-lg w-full">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <ul className="space-y-4 mt-8">
                <li className="p-4 bg-white rounded-lg">
                  <span className="font-medium">Founded in 2005</span>
                </li>
                <li className="p-4 bg-white rounded-lg">
                  <span className="font-medium">240+ Projects Completed</span>
                </li>
                <li className="p-4 bg-white rounded-lg">
                  <span className="font-medium">50+ Expert Team Members</span>
                </li>
                <li className="p-4 bg-white rounded-lg">
                  <span className="font-medium">15+ Industry Awards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Planning */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-sm text-primary font-medium">Our Services</span>
            <h2 className="text-2xl md:text-3xl font-bold mt-2">
              Financial Planning
              <br />
              For Safe Investment
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500&query=financial planning meeting with charts"
                alt="Financial planning"
                width={500}
                height={400}
                className="object-cover rounded-lg"
              />
            </div>

            <div>
              <p className="text-muted-foreground mb-8">
                Our financial planning services are designed to help you make informed investment decisions that align
                with your goals and risk tolerance. We provide comprehensive analysis and personalized strategies to
                ensure your investments are safe and profitable.
              </p>
              <p className="text-muted-foreground mb-8">
                With our expert guidance, you can navigate the complex world of investments with confidence and peace of
                mind.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-white">Learn More</Button>
            </div>
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
