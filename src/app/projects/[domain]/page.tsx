
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { projectDomains } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

type ProjectDomainPageProps = {
  params: {
    domain: string;
  };
};

export function generateStaticParams() {
  return projectDomains.map((domain) => ({
    domain: domain.slug,
  }));
}

export default function ProjectDomainPage({ params }: ProjectDomainPageProps) {
  const domain = projectDomains.find((d) => d.slug === params.domain);

  if (!domain) {
    notFound();
  }

  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 py-16 md:px-24 md:py-24">
        <div className="text-center">
          <domain.icon className="mx-auto h-12 w-12 text-primary" />
          <h1 className="font-headline mt-4 text-4xl font-extrabold tracking-tighter text-foreground sm:text-5xl">
            {domain.name} Projects
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Find an issue and make your first contribution.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {domain.projects.map((project) => (
            <Card
              key={project.name}
              className="flex transform flex-col overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <CardHeader>
                <CardTitle className="font-headline text-xl font-bold">
                  {project.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-grow flex-col justify-between">
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <Button asChild size="sm" className="mt-auto w-full">
                  <Link href={project.contributeUrl}>
                    Contribute <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
         <div className="mt-16 text-center">
            <Button variant="outline" asChild>
                <Link href="/projects">
                    Back to All Domains
                </Link>
            </Button>
        </div>
      </div>
    </div>
  );
}
