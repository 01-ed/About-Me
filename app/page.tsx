"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Square, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const achievements = [
    {
      title: "Apricity Organization",
      subtitle: "Co-Founder & Social Impact Leader",
      description:
        "Co-founded nonprofit for autism awareness, organized comprehensive autism awareness seminar reaching 100+ students. Secured 10,000 ETB funding from Brighter Generation, partnered with Nia Foundation and GETFACT.",
      period: "2022-Present",
      category: "Leadership",
      number: "01",
      images: [
        "/images/autism-seminar-poster.png",
        "/images/autism-seminar-classroom.png",
        "/images/autism-seminar-team.png",
      ],
    },
    {
      title: "Mathematics Olympiad",
      subtitle: "National Finalist",
      description:
        "Quarter-finalist (Grade 9) and Finalist (Grade 10) in Ethiopian and National Mathematics Olympiads.",
      period: "2022-2023",
      category: "Academic",
      number: "02",
    },
    {
      title: "Model UN Leadership",
      subtitle: "President & Award Winner",
      description:
        "MUN Club President, organized large-scale UNECA conference with 100+ delegates. 3rd place Advocate Delegate, 2nd place Honorable Delegate.",
      period: "2023-2025",
      category: "Diplomacy",
      number: "03",
      images: ["/images/mun-uneca-conference.jpeg", "/images/mun-committee-session.jpeg"],
    },
    {
      title: "BG Tech Project",
      subtitle: "Developer & Scholar",
      description:
        "Mentored by MIT student, completed certified Python programming and leadership development program. Developed inventory management system for local businesses with BG funding.",
      period: "2023",
      category: "Technology",
      number: "04",
      images: ["/images/bg-python-certificate.png", "/images/bg-program-certificate.png"],
    },
    {
      title: "Africa Celebrates",
      subtitle: "AI Technology Panelist",
      description:
        "Participated as a panelist sharing my insights on AI technology trends, the future of digitalization, startup innovation, and their socio-economic impact on women. Contributed to a vibrant discussion that informed and inspired attendees on the evolving tech world.",
      period: "2024",
      category: "Speaking",
      number: "05",
      images: ["/images/africa-celebrates-certificate.jpeg"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 via-gray-100 to-orange-300 relative overflow-hidden">
      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="relative w-full h-full">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Enlarged view"
                width={1200}
                height={800}
                className="object-contain max-w-full max-h-[90vh] rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </div>
      )}

      {/* Decorative Pattern - Square Grid with Gradient Fade */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-25">
        <div
          className="grid grid-cols-8 gap-4 h-full p-8"
          style={{
            maskImage:
              "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.1) 80%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage:
              "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.1) 80%, rgba(0,0,0,0) 100%)",
          }}
        >
          {Array.from({ length: 64 }).map((_, i) => (
            <div
              key={i}
              className="w-6 h-6 bg-orange-500 opacity-45 rounded-sm shadow-md transform hover:scale-105 hover:opacity-60 transition-all duration-300"
            />
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 flex justify-between items-center p-6 lg:p-8">
        <div className="flex items-center">
          <Square className="h-8 w-8 text-gray-700 fill-none stroke-2" />
        </div>
        <nav className="flex gap-8">
          <button
            onClick={() => setActiveSection("work")}
            className={`text-lg font-medium transition-colors font-mono ${
              activeSection === "work" ? "text-red-600" : "text-red-500 hover:text-red-600"
            }`}
          >
            Work
          </button>
          <button
            onClick={() => setActiveSection("about")}
            className={`text-lg font-medium transition-colors font-mono ${
              activeSection === "about" ? "text-red-600" : "text-red-500 hover:text-red-600"
            }`}
          >
            About
          </button>
        </nav>
      </header>

      {/* Status Update */}
      <div className="relative z-10 flex justify-center mb-12">
        <div className="bg-gray-800 text-white px-6 py-3 rounded-md text-sm max-w-sm text-center border-2 border-gray-700">
          <span className="text-gray-400 text-xs font-mono">current update</span>
          <br />
          <span className="font-mono">{"I'm actively seeking new opportunities and collaborations."}</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        {activeSection === "about" && (
          <div className="space-y-12">
            {/* Hero Section */}
            <section className="max-w-2xl">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight font-mono">
                Hello, I'm Edomias.
                <br />
                I'm a student leader.
              </h1>

              <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-sans">
                <p>
                  I have experience in <strong className="font-mono text-orange-600">mathematics competitions</strong>,{" "}
                  <strong className="font-mono text-orange-600">social entrepreneurship</strong>,{" "}
                  <strong className="font-mono text-orange-600">Model UN diplomacy</strong>, and{" "}
                  <strong className="font-mono text-orange-600">technology development</strong>.
                </p>

                <p>
                  I value <strong className="font-mono text-orange-600">innovation</strong>,{" "}
                  <strong className="font-mono text-orange-600">social impact</strong>, and{" "}
                  <strong className="font-mono text-orange-600">academic excellence</strong> above all else. These
                  ideals guide my approach to leadership and community building.
                </p>
              </div>
            </section>

            {/* Separator */}
            <div className="w-full h-1 bg-gray-400 my-16 rounded-sm" />

            {/* Contact Section */}
            <section className="grid md:grid-cols-2 gap-8 mb-16">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-mono">Get in touch</h3>
                <p className="text-gray-600 mb-6 font-sans">
                  Available for academic collaborations, leadership opportunities, and meaningful projects.
                </p>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left border-2 border-gray-400 hover:bg-gray-50 bg-white text-gray-700 rounded-md font-mono"
                    onClick={() => (window.location.href = "mailto:edomiaskehali@icloud.com")}
                  >
                    <Mail className="h-4 w-4 mr-3" />
                    edomiaskehali@icloud.com
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left border-2 border-gray-400 hover:bg-gray-50 bg-white text-gray-700 rounded-md font-mono"
                    onClick={() => (window.location.href = "tel:+251989792905")}
                  >
                    <Phone className="h-4 w-4 mr-3" />
                    +251 989 792 905
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-mono">Current focus</h3>
                <div className="space-y-3">
                  <Badge
                    variant="secondary"
                    className="bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-md border-2 border-orange-300 font-mono"
                  >
                    LCC MUN Conference Scholar
                  </Badge>
                  <p className="text-gray-600 font-sans">
                    Preparing for the LCC Model United Nations conference with a merit-based scholarship.
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeSection === "work" && (
          <div className="space-y-12">
            <section className="max-w-2xl">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight font-mono">
                My work &
                <br />
                achievements.
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed font-sans">
                A collection of my academic achievements, leadership roles, and projects that demonstrate my commitment
                to excellence and social impact.
              </p>
            </section>

            {/* Separator */}
            <div className="w-full h-1 bg-gray-400 my-16 rounded-sm" />

            {/* Achievements Grid */}
            <section className="space-y-16">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="grid md:grid-cols-3 gap-8 items-start border-2 border-gray-300 p-6 bg-white/50 rounded-lg hover:bg-white/70 transition-all duration-300"
                >
                  <div className="md:col-span-2">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2 font-mono">{achievement.title}</h3>
                    <p className="text-lg text-orange-600 mb-4 font-mono">{achievement.subtitle}</p>
                    <p className="text-gray-700 leading-relaxed font-sans mb-4">{achievement.description}</p>

                    {/* Clickable Images */}
                    {achievement.images && (
                      <div className="grid grid-cols-1 gap-4 mb-4">
                        <div className="grid grid-cols-3 gap-2">
                          {achievement.images.map((image, imgIndex) => (
                            <div
                              key={imgIndex}
                              className="relative aspect-video rounded-md overflow-hidden border-2 border-gray-200 cursor-pointer group"
                              onClick={() => setSelectedImage(image)}
                            >
                              <Image
                                src={image || "/placeholder.svg"}
                                alt={`${achievement.title} - Image ${imgIndex + 1}`}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-mono">
                                  Click to enlarge
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-4 flex gap-4">
                      <Badge
                        variant="outline"
                        className="text-xs border-2 border-gray-400 text-gray-600 rounded-md font-mono"
                      >
                        {achievement.period}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="text-xs border-2 border-gray-400 text-gray-600 rounded-md font-mono"
                      >
                        {achievement.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="text-6xl font-bold text-gray-300 font-mono border-4 border-gray-300 w-20 h-20 flex items-center justify-center rounded-lg">
                      {achievement.number}
                    </div>
                  </div>
                </div>
              ))}
            </section>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-24 py-8 text-center">
        <p className="text-gray-500 text-sm font-mono">© 2025 Edomias Kehali</p>
      </footer>
    </div>
  )
}
