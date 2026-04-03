import { navLinks } from "../../data/site";
import { ButtonLink } from "../ui/ButtonLink";
import { Container } from "./Container";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/55 backdrop-blur-xl">
      <Container>
        <div className="flex items-center justify-between gap-4 py-4">
          <a href="#hero" className="text-sm font-semibold tracking-[0.24em] text-white uppercase">
            Loan Lavigne
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <ButtonLink href="#contact" size="sm">
              Let’s work together
            </ButtonLink>
          </div>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap rounded-full border border-white/10 px-4 py-2 text-xs text-white/80 transition hover:border-white/25 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </Container>
    </header>
  );
}