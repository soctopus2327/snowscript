import Image from 'next/image';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { faqs, timeline } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  ArrowRight,
  CheckCircle,
  Instagram,
  MessageCircle,
} from 'lucide-react';
import { GdgLogo } from '@/components/icons/GdgLogo';
import { DiscordIcon } from '@/components/icons/DiscordIcon';

export default function Home() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-gdg');

  return (
    <div className="flex flex-col items-center">
      <section className="w-full bg-primary/10 py-20 md:py-32">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:px-6">
          <div className="space-y-6 text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <GdgLogo className="h-12 w-auto text-primary" />
            </div>
            <h1 className="font-headline text-4xl font-extrabold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              SnowScript
              <br />
              <span className="text-primary">Winter of Code</span>
            </h1>
            <p className="mx-auto max-w-[600px] text-lg text-muted-foreground md:mx-0 md:text-xl">
              Join developers, designers, and innovators for a month of coding,
              learning, and building amazing projects.
            </p>
          </div>
          <div className="relative flex h-64 items-center justify-center rounded-lg border-2 border-dashed border-primary/50 bg-primary/5 md:h-96">
            <div className="text-center text-muted-foreground">
              <p className="font-semibold">3D Snowflake</p>
              <p className="text-sm">Iframe will be added here</p>
              <script type="module" src="https://unpkg.com/@splinetool/viewer@1.12.29/build/spline-viewer.js" async></script>
              <spline-viewer url="https://prod.spline.design/ylg0umHggHeNVFJO/scene.splinecode"><img src="data:image/png;base64,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" alt="Spline preview" style={{width: '100%', height: '100%'}}/></spline-viewer>
            </div>
          </div>
        </div>
      </section>

      <section
        id="register"
        className="w-full bg-accent py-16 text-accent-foreground"
      >
        <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Build?
          </h2>
          <p className="max-w-2xl text-lg">
            Registration is now open! Secure your spot and get ready to code.
          </p>
          <Button
            size="lg"
            className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90"
            asChild
          >
            <Link href="#">
              Register Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <section id="about" className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <Card className="overflow-hidden shadow-lg md:grid md:grid-cols-2">
            <div className="relative h-64 w-full md:h-auto">
              {aboutImage && (
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  data-ai-hint={aboutImage.imageHint}
                  fill
                  className="object-cover"
                />
              )}
            </div>
            <div className="p-8 md:p-12">
              <CardHeader className="p-0">
                <CardTitle className="font-headline text-3xl font-bold">
                  About Us!
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 pt-6">
                <p className="text-base text-muted-foreground">
                GDG Snowscript Winter of Code is here!
                <br/>
                <br/>
                It is the most extensive open-source program ever organized at IGDTUW, centered around learning opportunities for aspiring developers in technology!
                <br/>
                <br/>
                Our aim is to inspire, challenge and motivate passionate innovators, especially women, to pursue their careers in Open Source and develop solutions to current world problems. We believe that together we can make a difference. Participants can work on numerous projects under our guidance. Our skilled mentors will help all the participants in nurturing and polishing their technical skills and contributing to various projects from the comfort of their homes over our fifty-day contribution period.
                <br/>
                <br/>
                Join us at GDG IGDTUW SNOW SCRIPT - Winter of Code ❄️ to revolutionize the Open Source domain by contributing, inspiring and empowering every individual!
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button asChild variant="outline">
                    <Link href="#" target="_blank">
                      <MessageCircle className="mr-2" /> WhatsApp
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="#" target="_blank">
                      <DiscordIcon className="mr-2" /> Discord
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="#" target="_blank">
                      <Instagram className="mr-2" /> Instagram
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      <section id="contribute" className="w-full bg-primary/10 py-16 md:py-24">
        <div className="container mx-auto space-y-12 px-4 md:px-6">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              How to Contribute
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Follow these simple steps to start contributing to SnowScript projects.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold">Explore Projects</h3>
              <p className="mt-2 text-muted-foreground">
                Browse the project domains and find a project that excites you.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold">Join the Community</h3>
              <p className="mt-2 text-muted-foreground">
                Connect with mentors and fellow participants on our community platforms.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold">Start Contributing</h3>
              <p className="mt-2 text-muted-foreground">
                Request an issue, and once its assigned, code it out and make a pull request and start your coding journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="timeline" className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Event Timeline
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Key dates and milestones for the Winter of Code.
            </p>
          </div>
          <div className="relative mt-12">
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"></div>
            {timeline.map((event, index) => (
              <div
                key={index}
                className={`relative mb-8 flex w-full items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'
                  }`}
                >
                  <Card className="shadow-md">
                    <CardContent className="p-6">
                      <p className="text-sm font-semibold text-primary">{event.date}</p>
                      <h3 className="mt-1 text-lg font-bold">{event.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-1/2 top-1/2 z-10 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-background">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="w-full bg-primary/10 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Got questions? We've got answers.
            </p>
          </div>
          <Accordion type="single" collapsible className="mt-12 w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-semibold text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
