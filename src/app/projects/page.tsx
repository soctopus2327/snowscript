
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { projectDomains } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function ProjectsPage() {
  return (
    <div className="bg-primary/10">
      <div className="container mx-auto px-6 py-16 md:px-24 md:py-24">
        <div className="text-center">
          <h1 className="font-headline text-4xl font-extrabold tracking-tighter text-foreground sm:text-5xl">
            Project Domains
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Choose a domain that sparks your interest and start contributing.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projectDomains.map((domain) => (
            <Card
              key={domain.slug}
              className="group relative flex h-80 transform flex-col items-center justify-center overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <CardHeader className="items-center justify-center p-6 text-center">
                <domain.icon className="h-12 w-12 text-primary" />
                <CardTitle className="font-headline mt-4 text-xl font-bold">
                  {domain.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-muted-foreground text-center px-4">
                  Explore projects in {domain.name}.
                </p>
              </CardContent>
              <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Button asChild>
                  <Link href={`/projects/${domain.slug}`}>
                    Explore Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
