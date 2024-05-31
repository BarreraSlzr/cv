import AvatarProfile from "@/components/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ContactInfo } from "@/lib/types";
import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';
import Link from "next/link";
import { Badge } from '@/components/ui/badge';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { DateTime } from "luxon";
import { TimerIcon } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const iconMapping: Record<string, any> = {
  email: faEnvelope,
  phone: faPhone,
  linkedin: faLinkedin,
  github: faGithub,
  twitter: faTwitter,
  whatsapp: faWhatsapp,
  web: faGlobe
};

type Props = {
  contact: ContactInfo,
  currentDate: DateTime,
}

export default function ContactForm({ className, contact, currentDate }: React.ComponentProps<"form"> & Props) {
  return (
    <div className="bg-gray-100 grid items-start gap-4 rounded-lg m-2 p-2 max-h-20vh overflow-y-auto">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>

            <div className="flex gap-2">
              <AvatarProfile isOnline={contact.isOnline} className="rounded-full overflow-hidden size-16" />
              <div className="flex flex-col gap-1">
                <h1 className="text-xl font-bold text-justify">{contact.fullname}</h1>
                <div className="flex grow flex-wrap items-start justify-start gap-4">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Badge className="bg-gray-200 text-gray-700 hover:bg-gray-300 text-sm px-2.5 py-0.5 rounded">
                          {contact.timezone}
                        </Badge>
                      </TooltipTrigger>
                      <TooltipContent className="flex gap-1 items-center">
                        <TimerIcon className="w-4 h-4 mb-1" />
                        {currentDate.toFormat('HH:mm a')}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <Link title="Send email" href={`mailto:${contact.email}`} className="size-6 mt-1">
                    <FontAwesomeIcon icon={faEnvelope} className="text-gray-400 hover:text-blue-400" />
                  </Link>
                  <Link title="Make a call" href={`tel:${contact.phone}`} className="size-5 mt-1">
                    <FontAwesomeIcon icon={faPhone} className="text-gray-400 hover:text-blue-400" />
                  </Link>
                  {contact.urls.map((url, index) => (
                    <Link title={url.title} key={index} href={url.url} className="size-5 mt-1" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={iconMapping[url.icon]} className="text-blue-600 hover:text-blue-400" />
                    </Link>
                  ))}

                </div>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="grid gap-1 px-3 text-gray-700">{
            contact.bio.split('. ').map((line, index) =>
              <p key={index}>
                {line + ". "}
              </p>)
          }</AccordionContent>
        </AccordionItem>
      </Accordion>
      <p className="text-gray-800">{"      "}</p>
      <form className={cn("grid items-start gap-4 p-2", className)}>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="your@mail.xyz" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" placeholder="Hi @barreraslzr" />
        </div>
        <Button type="submit">Send</Button>
      </form>
    </div >
  )
}