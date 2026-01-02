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
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {domain.projects.map((project) => (
            <Card
              key={project.name}
              className="group relative flex transform flex-col overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl h-64"
            >
              <div className="flex h-full flex-col p-6">
                <CardHeader className="p-0">
                  <CardTitle className="font-headline text-xl font-bold">
                    {project.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 pt-4 flex-grow">
                  {/* The description is hidden by default and shown on hover */}
                  <div className="relative h-full">
                     <p className="text-muted-foreground transition-opacity duration-300 group-hover:opacity-0">Hover to see details</p>
                    <div className="absolute inset-0 flex flex-col items-start justify-center bg-card p-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <p className="text-muted-foreground">
                        {project.description}
                      </p>
                       <Button asChild size="sm" className="mt-4">
                        <Link href={project.contributeUrl}>
                          Contribute <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </div>
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
