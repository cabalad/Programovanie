# Modul 02: C – Základy procedurálneho programovania

Vítajte v treťom module. Jazyk **C** je nízkoúrovňový, efektívny a procedurálny programovací jazyk, ktorý tvorí základ systémového programovania, vývoja operačných systémov a mikrokontrolérov v mechatronike.

---

## 🎯 Ciele modulu
Po absolvovaní tohto modulu budete vedieť:
- Porozumieť štruktúre programu v C (`main`, hlavičkové súbory `#include`, preprocesor).
- Používať základné dátové typy (`int`, `char`, `float`, `double`) a formátovaný vstup/výstup (`printf`, `scanf`).
- Pracovať s jednorozmernými a dvojrozmernými poľami a reťazcami.
- **Pochopiť prácu s pamäťou:** adresná operácia (`&`), dereferencia (`*`), ukazovatele (pointers).
- Používať dynamickú alokáciu pamäte (`malloc`, `calloc`, `realloc`, `free`).
- Defingovať vlastné štruktúry (`struct`) a používateľské typy (`typedef`).

---

## 🛠️ Kompilácia a spustenie

Pre kompiláciu programov v jazyku C použijeme kompilátor **GCC**:

```bash
# Kompilácia programu main.c do spustiteľného súboru main (alebo main.exe na Windows)
gcc -Wall -std=c99 main.c -o main

# Spustenie kompilovaného programu
./main          # Linux / macOS
main.exe        # Windows
```

---

## 💻 Ukážka kódu

Súbor [`main.c`](./main.c) obsahuje prácu s pointermi a alokáciou pamäte:

```c
#include <stdio.h>

void zmen_hodnotu(int *pointer_na_cislo) {
    *pointer_na_cislo = 42;
}

int main(void) {
    int x = 10;
    printf("Pôvodná hodnota x: %d\n", x);
    zmen_hodnotu(&x);
    printf("Nová hodnota x po zmene cez pointer: %d\n", x);
    return 0;
}
```

---

## 📚 Odporúčané študijné zdroje

- [cppreference.com - C reference](https://en.cppreference.com/w/c)
- Referenčná literatúra: *Brian W. Kernighan, Dennis M. Ritchie - Programovací jazyk C*

---

## 📝 Cvičenia a úlohy

1. **Úloha 1:** Napíšte funkciu `void zameni(int *a, int *b)`, ktorá prehodí hodnoty dvoch premenných pomocou ukazovateľov.
2. **Úloha 2:** Vytvorte program, ktorý dynamicky alokuje pole `n` celých čísel, načíta ich od používateľa a vypočíta ich súčet. Nezabudnite uvoľniť pamäť pomocou `free()`.
