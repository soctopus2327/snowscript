import Link from "next/link";
import { GdgLogo } from "../icons/GdgLogo";
import { DiscordIcon } from "../icons/DiscordIcon";
import { Instagram, MessageCircle } from "lucide-react";
import { Button } from "../ui/button";

export function Footer() {
  return (
    <footer className="w-full border-t bg-primary/10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row md:px-8">
        <div className="flex items-center gap-3">
          <GdgLogo className="h-8 w-24" />
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} GDG. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-2">
           <Button asChild variant="ghost" size="icon">
              <Link href="#" target="_blank">
                <MessageCircle className="h-5 w-5 text-muted-foreground" />
                <span className="sr-only">WhatsApp</span>
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <Link href="#" target="_blank">
                <DiscordIcon className="h-5 w-5 text-muted-foreground" />
                <span className="sr-only">Discord</span>
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <Link href="#" target="_blank">
                <Instagram className="h-5 w-5 text-muted-foreground" />
                <span className="sr-only">Instagram</span>
              </Link>
            </Button>
        </div>
      </div>
    </footer>
  );
}
