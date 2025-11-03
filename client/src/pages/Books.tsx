import { Button } from "@/components/ui/button";
import { BookOpen, Download, AlertCircle } from "lucide-react";
import { useLocation } from "wouter";
import { useState } from "react";

export default function Books() {
  const [, setLocation] = useLocation();
  const [selectedBook, setSelectedBook] = useState<number | null>(null);

  const books = [
    {
      id: 1,
      title: "Psychologia Zwyciestwa",
      author: "Karen Tonoyan",
      price: 30,
      description: "Kompletny przewodnik po psychologii sukcesu i zwyciestwa",
      pages: 250,
      format: "PDF",
    },
    {
      id: 2,
      title: "Ethical Hacking - Podstawy",
      author: "Karen Tonoyan",
      price: 50,
      description: "Wprowadzenie do bezpiecznego hakownia i testów penetracyjnych",
      pages: 180,
      format: "PDF",
    },
    {
      id: 3,
      title: "Cyberbezpieczeństwo dla każdego",
      author: "Karen Tonoyan",
      price: 40,
      description: "Praktyczne wskazówki do ochrony danych i systemów",
      pages: 200,
      format: "PDF",
    },
  ];

  const bankAccount = "44 1050 1748 1000 0092 1603 7961";

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur">
        <div className="container flex items-center justify-between py-4">
          <h1 className="text-3xl font-bold text-accent">Książki</h1>
          <Button
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            onClick={() => setLocation("/")}
          >
            Powrót
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <div
              key={book.id}
              className="rounded-lg border border-border bg-card p-6 hover:border-accent transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <BookOpen className="h-8 w-8 text-accent" />
                <span className="text-sm bg-accent/20 text-accent px-3 py-1 rounded-full">
                  {book.format}
                </span>
              </div>

              <h2 className="text-xl font-bold text-foreground mb-2">
                {book.title}
              </h2>
              <p className="text-sm text-muted-foreground mb-2">
                Autor: {book.author}
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                {book.description}
              </p>

              <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                <span>{book.pages} stron</span>
                <span>Format: {book.format}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-accent">
                  {book.price} zł
                </div>
                <Button
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                  onClick={() => setSelectedBook(book.id)}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Kup
                </Button>
              </div>

              <p className="text-xs text-muted-foreground mt-4">
                Podział: 50% Manus, 50% Autor
              </p>
            </div>
          ))}
        </div>

        {/* Payment Instructions */}
        <div className="mt-12 rounded-lg border border-accent bg-card p-8">
          <h2 className="text-2xl font-bold text-accent mb-6 flex items-center">
            <AlertCircle className="mr-3 h-6 w-6" />
            Instrukcja zakupu
          </h2>

          <div className="space-y-6">
            <div className="bg-background rounded-lg p-4">
              <h3 className="font-bold text-foreground mb-2">Krok 1: Wybierz książkę</h3>
              <p className="text-sm text-muted-foreground">
                Kliknij przycisk "Kup" przy wybranej książce
              </p>
            </div>

            <div className="bg-background rounded-lg p-4">
              <h3 className="font-bold text-foreground mb-2">Krok 2: Dokonaj przelewu</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Prześlij przelew bankowy na poniższe konto:
              </p>
              <div className="bg-card border border-border rounded p-3 font-mono text-sm text-accent">
                {bankAccount}
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                W tytule przelewu wpisz: "Książka - [nazwa książki]"
              </p>
            </div>

            <div className="bg-background rounded-lg p-4">
              <h3 className="font-bold text-foreground mb-2">Krok 3: Potwierdzenie</h3>
              <p className="text-sm text-muted-foreground">
                Po potwierdzeniu przelewu (1-2 dni robocze) otrzymasz link do pobrania książki na email
              </p>
            </div>

            <div className="bg-background rounded-lg p-4">
              <h3 className="font-bold text-foreground mb-2">Krok 4: Pobierz</h3>
              <p className="text-sm text-muted-foreground">
                Pobierz książkę w formacie PDF i czytaj na dowolnym urządzeniu
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-accent/10 border border-accent rounded-lg">
            <p className="text-sm text-accent">
              ℹ️ Wszystkie książki są dostępne w formacie PDF. Możesz je czytać na komputerze, tablecie lub telefonie.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-6 mt-12">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2025 Karen Tonoyan. Wszelkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </div>
  );
}
