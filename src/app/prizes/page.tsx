import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { prizes } from '@/lib/data';

export default function PrizesPage() {
  return (
    <div className="bg-primary/10">
      <div className="container mx-auto px-6 py-16 md:px-24 md:py-24">
        <div className="text-center">
          <h1 className="font-headline text-4xl font-extrabold tracking-tighter text-foreground sm:text-5xl">
            Prizes & Recognition
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Your hard work and dedication will be rewarded.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {prizes.map((prize, index) => (
            <Card
              key={prize.category}
              className="flex w-full max-w-sm transform flex-col text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
            >
              <CardHeader className="items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <prize.icon className="h-8 w-8" />
                </div>
              </CardHeader>
              <CardContent className="flex flex-grow flex-col">
                <CardTitle className="font-headline text-2xl font-bold">
                  {prize.category}
                </CardTitle>
                <p className="mt-2 flex-grow text-muted-foreground">
                  {prize.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
