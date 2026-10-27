# Modul 03: C++ – Objektovo Orientované Programovanie (OOP)

Vítajte v štvrtom module. Jazyk **C++** stavia na základoch jazyka C a prináša paradigma **objektovo orientovaného programovania (OOP)**, šablóny (templates) a štandardnú knižnicu STL.

---

## 🎯 Ciele modulu
Po absolvovaní tohto modulu budete vedieť:
- Rozumieť základy paradigmy OOP: **Puzdrenie (Encapsulation)**, **Dedičnosť (Inheritance)** a **Polymorfizmus (Polymorphism)**.
- Vytvárať vlastné triedy (`class`), definovať konštruktory, deštruktory a metódy.
- Pracovať s prístupovými právami (`public`, `private`, `protected`).
- Používať Štandardnú knižnicu šablón (**STL**): `std::vector`, `std::string`, `std::map`.
- Správne spravovať pamäť pomocou smart pointerov (`std::unique_ptr`, `std::shared_ptr`).

---

## 🛠️ Kompilácia a spustenie

Pre kompiláciu C++ programov použijeme kompilátor **g++**:

```bash
# Kompilácia s podporou štandardu C++17
g++ -Wall -std=c++17 main.cpp -o main

# Spustenie
./main          # Linux / macOS
main.exe        # Windows
```

---

## 💻 Ukážka kódu

Súbor [`main.cpp`](./main.cpp) demonštruje triedu, konštruktor a metódy v C++:

```cpp
#include <iostream>
#include <string>

class Senzor {
private:
    std::string nazov;
    double hodnota;

public:
    Senzor(const std::string& n) : nazov(n), hodnota(0.0) {}

    void nastavitHodnotu(double h) { hodnota = h; }
    void vypis() const {
        std::cout << "Senzor " << nazov << ": " << hodnota << std::endl;
    }
};
```

---

## 📚 Odporúčané študijné zdroje

- [cppreference.com - C++ reference](https://en.cppreference.com/w/cpp)
- [learncpp.com - Free C++ Tutorials](https://www.learncpp.com/)

---

## 📝 Cvičenia a úlohy

1. **Úloha 1:** Vytvorte základnú triedu `Vozidlo` a odvodene triedy `Automobil` a `Motocykel`. Implementujte virtuálnu metódu `vypisInformacie()`.
2. **Úloha 2:** Použite `std::vector<Vozidlo*>` na uloženie rôznych typov vozidiel a demonštrujte polymorfizmus pri prechádzaní zoznamu.
