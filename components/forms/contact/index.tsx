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

const iconMapping: Record<string, any> = {
  email: faEnvelope,
  phone: faPhone,
  linkedin: faLinkedin,
  github: faGithub,
  twitter: faTwitter,
  whatsapp: faWhatsapp,
  web: faGlobe
};

type Props = { contact: ContactInfo }

export default function ContactForm({ className, contact }: React.ComponentProps<"form"> & Props) {
  return (
    <div className="bg-gray-100 grid items-start gap-4 rounded-lg m-2 p-2">
      <div className="flex gap-2 mt-2">
        <AvatarProfile className="rounded-full overflow-hidden w-10" />
        <h1 className="text-xl font-bold">{contact.fullname}</h1>
      </div>
      <p className="text-gray-700">{contact.bio}</p>
      <div className="flex gap-4">
        <Link title="Send email" href={`mailto:${contact.email}`} className="w-6 h-6">
          <FontAwesomeIcon icon={faEnvelope} className="text-gray-300 hover:text-blue-400" />
        </Link>
        <Link title="Make a call" href={`tel:${contact.phone}`} className="w-6 h-6">
          <FontAwesomeIcon icon={faPhone} className="text-gray-300 hover:text-blue-400" />
        </Link>
        {contact.urls.map((url, index) => (
          <Link title={url.title} key={index} href={url.url} className="w-6 h-6" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={iconMapping[url.icon]} className="text-gray-300 hover:text-blue-400" />
          </Link>
        ))}
      </div>
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
    </div>
  )
}