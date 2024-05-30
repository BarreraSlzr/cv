import AvatarProfile from "@/components/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ContactInfo } from "@/lib/types";
import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';
import Link from "next/link";

const iconMapping: Record<string, any> = {
  email: faEnvelope,
  phone: faPhone,
  linkedin: faLinkedin,
  github: faGithub,
  twitter: faTwitter,
  whatsapp: faWhatsapp
};

type Props = { contact: ContactInfo }

export default function ContactForm({ className, contact }: React.ComponentProps<"form"> & Props) {
  return (
    <div className="bg-gray-100 grid items-start gap-4 rounded-lg m-2 p-2">
      <div className="flex gap-2">
        <AvatarProfile className="rounded-full overflow-hidden w-10" />
        <h1 className="text-xl font-bold">{contact.fullname}</h1>
      </div>
      <p className="text-gray-700">{contact.bio}</p>
      <div className="flex justify-center">
        <Link href={`mailto:${contact.email}`} className="mr-4">
          <FontAwesomeIcon icon={faEnvelope} className="text-gray-700" size="lg" />
        </Link>
        <Link href={`tel:${contact.phone}`} className="mr-4">
          <FontAwesomeIcon icon={faPhone} className="text-gray-700" size="lg" />
        </Link>
        {contact.urls.map((url, index) => (
          <Link key={index} href={url.url} className="mr-4" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={iconMapping[url.icon]} className="text-gray-700" size="lg" />
          </Link>
        ))}
      </div>
      <form className={cn("grid items-start gap-4 p-2", className)}>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" defaultValue="your@mail.xyz" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" defaultValue="Hi @barreraslzr" />
        </div>
        <Button type="submit">Send</Button>
      </form>
    </div>
  )
}