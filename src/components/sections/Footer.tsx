import { socials } from "../../data/site";
import { Container } from "../layout/Container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-white">Loan Lavigne</p>
            <p className="mt-1 text-sm text-white/50">
              Freelance video editor for UGC, paid ads, and short-form creative.
            </p>
          </div>

          <div className="flex items-center gap-5">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                className="text-sm text-white/65 transition hover:text-white"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}