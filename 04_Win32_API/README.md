# Modul 04: Win32 API – Vývoj desktopových aplikácií pre Windows

Vítajte v piatom module. **Win32 API** (Windows Application Programming Interface) je natívne C/C++ rozhranie poskytované operačným systémom Microsoft Windows. Umožňuje vytvárať grafické používateľské rozhrania (GUI), správu okien, spracovanie udalostí a nízkoúrovňový prístup k systému.

---

## 🎯 Ciele modulu
Po absolvovaní tohto modulu budete vedieť:
- Porozumieť architektúre riadenej udalosťami (**Event-driven architecture**).
- Pochopiť funkciu hlavného vstupného bodu `WinMain` a správu okien.
- Registrovať triedu okna (`RegisterClassEx`) a vytvoriť okno (`CreateWindowEx`).
- Implementovať procedúru okna (`WndProc`) a spracovávať správy Windows (`WM_PAINT`, `WM_COMMAND`, `WM_DESTROY`, `WM_LBUTTONDOWN`).
- Vytvárať a obsluhovať ovládacie prvky (tlačidlá, textové polia, štítky).

---

## 🛠️ Vývojové prostredie a kompilácia

### 1. Microsoft Visual Studio (Odporúčané)
1. Otvorte Visual Studio a vytvorte nový projekt typu **Windows Desktop Application** (C++).
2. Pridajte kód zo súboru `main.cpp`.
3. Sostavte a spustite projekt (`F5`).

### 2. Kompilácia pomocou GCC (MinGW-w64) v CLI
```bash
g++ -Wall main.cpp -o app.exe -mwindows -luser32 -lgdi32
./app.exe
```

---

## 💻 Štruktúra Win32 Aplikácie

Win32 aplikácia sa skladá zo štyroch hlavných častí:
1. **`WinMain`**: Vstupný bod aplikácie (obdoba `main` v konzolových aplikáciách).
2. **`WNDCLASSEX`**: Registrácia vlastností a vzhľadu okna.
3. **Message Loop**: Cyklus na odchytávanie a odosielanie správ od OS Windows (`GetMessage`, `TranslateMessage`, `DispatchMessage`).
4. **`WndProc`**: Funkcia (procedúra), ktorá reaguje na správy z používateľského rozhrania (kliknutie, kreslenie, zatvorenie).

---

## 📚 Odporúčané študijné zdroje

- [Microsoft Learn - Get Started with Win32 and C++](https://learn.microsoft.com/en-us/windows/win32/learnwin32/learn-to-program-for-windows)
- [Win32 Programming Tutorial (Charles Petzold - Programming Windows)](https://learn.microsoft.com/en-us/windows/win32/apiindex/windows-api-list)

---

## 📝 Cvičenia a úlohy

1. **Úloha 1:** Pridajte do okna tlačidlo (`BUTTON`) a pri kliknutí naň zobrazte správu pomocou `MessageBox()`.
2. **Úloha 2:** Zachyťte správu `WM_LBUTTONDOWN` a zobrazte súradnice X a Y miesta, kde používateľ klikol myšou.
