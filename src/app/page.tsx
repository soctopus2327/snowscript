
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
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:px-24">
          <div className="space-y-6 text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <GdgLogo className="w-90 " />
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
          <div className="relative flex h-64 items-center justify-center rounded-lg border-0 border-dashed border-primary/50 bg-primary/5 md:h-96 overflow-hidden">
            <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              src="/snowflake.mp4" 
            />
          </div>
        </div>
      </section>

      <section
        id="register"
        className="w-full bg-accent py-16 text-accent-foreground"
      >
        <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-6 text-center md:px-24">
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
        <div className="container mx-auto px-6 md:px-24">
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
                    <Link href="https://chat.whatsapp.com/DAci48ElBXrAWtadPgHw63" target="_blank">
                      <MessageCircle className="mr-2" /> WhatsApp
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="https://discord.gg/vwsMEn5DgM" target="_blank">
                      <DiscordIcon className="mr-2" /> Discord
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="https://www.instagram.com/gdg_igdtuw/?hl=en" target="_blank">
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
        <div className="container mx-auto space-y-12 px-6 md:px-24">
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
        <div className="container mx-auto px-6 md:px-24">
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
        <div className="container mx-auto max-w-4xl px-6 md:px-24">
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
