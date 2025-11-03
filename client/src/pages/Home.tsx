import { Button } from "@/components/ui/button";
import { Download, Mail, MapPin, Phone } from "lucide-react";

export default function Home() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="container flex items-center justify-between py-4">
          <h1 className="text-3xl font-bold text-accent">Karen Tonoyan</h1>
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="sm"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              onClick={handlePrint}
            >
              <Download className="mr-2 h-4 w-4" />
              CV
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              List Motywacyjny
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Left Sidebar */}
          <aside className="lg:col-span-1">
            {/* Profile Photo */}
            <div className="mb-6 overflow-hidden rounded-lg border-2 border-accent bg-card p-4">
              <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl font-bold text-accent">KT</div>
                  <p className="text-sm text-muted-foreground mt-2">Zdjęcie profilowe</p>
                </div>
              </div>
            </div>

            {/* Personal Info */}
            <div className="space-y-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <h3 className="mb-3 text-lg font-bold text-accent">Karen Tonoyan</h3>
                <p className="mb-4 text-sm text-foreground">
                  Profesjonalista z wieloletnim doświadczeniem
                </p>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-accent font-bold">📅</span>
                    <span>06.06.1986</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Marsa 1/3, 59-220 Legnica</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>796 230 413</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Mail className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="break-all">karen.tonoyan@email.com</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <section className="lg:col-span-3 space-y-6">
            {/* Education */}
            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="mb-4 flex items-center text-2xl font-bold text-accent">
                <span className="mr-2">⭐</span>
                Wykształcenie
              </h2>
              <div className="space-y-4 border-l-2 border-accent pl-4">
                <div>
                  <p className="font-bold text-accent">2003-2005</p>
                  <p className="text-foreground">
                    Technikum Medyczne w Armenii "Hipokrat"
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Specjalność: technik protetyk
                  </p>
                </div>
                <div>
                  <p className="font-bold text-accent">2005-2007</p>
                  <p className="text-foreground">
                    Jednostki Specjalne Rezerwowe (SAPER)
                  </p>
                </div>
              </div>
            </div>

            {/* Work Experience */}
            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="mb-4 flex items-center text-2xl font-bold text-accent">
                <span className="mr-2">💼</span>
                Doświadczenie Zawodowe
              </h2>
              <div className="space-y-4 border-l-2 border-accent pl-4">
                <div>
                  <p className="font-bold text-accent">2024 - 2025</p>
                  <p className="text-foreground">Castorama - Kierowca</p>
                </div>
                <div>
                  <p className="font-bold text-accent">2023</p>
                  <p className="text-foreground">DPD - Kurier do 3,5t</p>
                </div>
                <div>
                  <p className="font-bold text-accent">2019 - 2023</p>
                  <p className="text-foreground">Opiekun Medyczny w Niemczech</p>
                </div>
                <div>
                  <p className="font-bold text-accent">2018 - 2019</p>
                  <p className="text-foreground">Hurtownia Gordon - Dostawca części</p>
                </div>
                <div>
                  <p className="font-bold text-accent">2015 - 2018</p>
                  <p className="text-foreground">Multi grup - Magazynier, kierowca</p>
                </div>
                <div>
                  <p className="font-bold text-accent">2013 - 2015</p>
                  <p className="text-foreground">Pizzeria "Hallo Pizza" - Pizzerman</p>
                </div>
                <div>
                  <p className="font-bold text-accent">2010 - 2013</p>
                  <p className="text-foreground">Pizzeria "Valentino" - Pizzerman</p>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="mb-4 flex items-center text-2xl font-bold text-accent">
                <span className="mr-2">🌐</span>
                Języki Obce
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="font-bold text-accent">Angielski</p>
                  <p className="text-sm text-muted-foreground">
                    Podstawowy, komunikatywny
                  </p>
                </div>
                <div>
                  <p className="font-bold text-accent">Rosyjski</p>
                  <p className="text-sm text-muted-foreground">Bardzo dobrze</p>
                </div>
                <div>
                  <p className="font-bold text-accent">Ormiański</p>
                  <p className="text-sm text-muted-foreground">Celujący</p>
                </div>
                <div>
                  <p className="font-bold text-accent">Niemiecki</p>
                  <p className="text-sm text-muted-foreground">Komunikatywny</p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="mb-4 flex items-center text-2xl font-bold text-accent">
                <span className="mr-2">⚙️</span>
                Umiejętności
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="font-bold text-accent mb-2">Obsługa komputera</p>
                  <p className="text-sm text-foreground">
                    Word, Excel, Photoshop, Corel Draw, Internet
                  </p>
                </div>
                <div>
                  <p className="font-bold text-accent mb-2">Inne umiejętności</p>
                  <p className="text-sm text-foreground">
                    Grafik dizajner, Fotograf, Ratownik (1 pomoc)
                  </p>
                </div>
                <div>
                  <p className="font-bold text-accent mb-2">Nowe technologie</p>
                  <p className="text-sm text-foreground">
                    Machine Learning, AI Development, Automatyzacja firm
                  </p>
                </div>
                <div>
                  <p className="font-bold text-accent mb-2">Bezpieczeństwo IT</p>
                  <p className="text-sm text-foreground">
                    Ethical Hacking, Cyberbezpieczeństwo
                  </p>
                </div>
                <div>
                  <p className="font-bold text-accent mb-2">Twórczość</p>
                  <p className="text-sm text-foreground">
                    Pisanie e-booków, Książek
                  </p>
                </div>
                <div>
                  <p className="font-bold text-accent mb-2">Prawo jazdy</p>
                  <p className="text-sm text-foreground">Kategoria B</p>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="mb-4 flex items-center text-2xl font-bold text-accent">
                <span className="mr-2">✨</span>
                Zainteresowania
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="font-bold text-accent">Rozwój AI i ML</p>
                  <p className="text-sm text-muted-foreground">
                    Trenowanie modeli maszynowych, Tworzenie systemów AI
                  </p>
                </div>
                <div>
                  <p className="font-bold text-accent">Automatyzacja</p>
                  <p className="text-sm text-muted-foreground">
                    Optymalizacja procesów biznesowych
                  </p>
                </div>
                <div>
                  <p className="font-bold text-accent">Cyberbezpieczeństwo</p>
                  <p className="text-sm text-muted-foreground">
                    Ethical Hacking, Zabezpieczenia systemów
                  </p>
                </div>
                <div>
                  <p className="font-bold text-accent">Psychologia</p>
                  <p className="text-sm text-muted-foreground">
                    Uczenie i praktyka psychologiczna
                  </p>
                </div>
                <div>
                  <p className="font-bold text-accent">Pisanie</p>
                  <p className="text-sm text-muted-foreground">
                    Tworzenie książek i e-booków
                  </p>
                </div>
                <div>
                  <p className="font-bold text-accent">Edukacja</p>
                  <p className="text-sm text-muted-foreground">
                    Nauczanie nowych technologii
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-6 mt-12">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2025 Karen Tonoyan. Wszelkie prawa zastrzeżone.</p>
        </div>
      </footer>

      {/* Print Styles */}
      <style>{`
        @media print {
          header, footer {
            display: none;
          }
          body {
            background: white;
            color: black;
          }
          .border-accent {
            border-color: #d4af37 !important;
          }
          .text-accent {
            color: #d4af37 !important;
          }
          .bg-accent {
            background-color: #d4af37 !important;
          }
        }
      `}</style>
    </div>
  );
}
