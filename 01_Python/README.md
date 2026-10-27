# Modul 01: Python – Základy programovania

Vítajte v druhom module. Python je vysokoúrovňový, interpretovaný a vysoko čitateľný programovací jazyk, ktorý je ideálny na úvod do algoritmizácie, skriptovania, zberu dát aj riadenia mechatronických systémov.

---

## 🎯 Ciele modulu
Po absolvovaní tohto modulu budete vedieť:
- Rozumieť základnej syntaxi Pythonu a pravidlám odsadenia kódu (indentácia).
- Pracovať so základnými dátovými typmi: `int`, `float`, `str`, `bool`.
- Používať riadiace štruktúry: podmienky (`if`, `elif`, `else`) a cykly (`for`, `while`).
- Pracovať s dátovými štruktúrami: zoznamy (`list`), n-tice (`tuple`), množiny (`set`) a slovníky (`dict`).
- Definovať vlastné funkcie (`def`) a odovzdávať parametre.
- Pracovať so súbormi (čítanie a zápis) a spracovávať výnimky (`try`, `except`).

---

## 📺 Odporúčané študijné materiály (Informatika s Mišom)

Pre výučbu Pythonu využívame sériu videonávodov z kanála **Informatika s Mišom**:

- 🔗 **YouTube kanál:** [Informatika s Mišom](https://www.youtube.com/@InformatikasMi%C5%A1om)
- 🐍 **Kurz Pythonu v Slovenčine:** Pozrite si kompletný playlist *Kurz Pythonu v Slovenčine* na kanáli Informatika s Mišom.

---

## 🛠️ Ako spustiť Python skript

1. Uistite sa, že máte nainštalovaný Python 3 (`python --version`).
2. Skript spustíte v termináli príkazom:
   ```bash
   python main.py
   ```

---

## 💻 Ukážka kódu

Súbor [`main.py`](./main.py) v tomto adresári obsahuje ukážkový štartovací program demonštrujúci základy Pythonu:

```python
def pozdrav(meno: str) -> str:
    return f"Ahoj, {meno}! Vítaj v kurze Pythonu."

if __name__ == "__main__":
    pouzivatel = "Študent"
    print(pozdrav(pouzivatel))
```

---

## 📝 Cvičenia a úlohy

1. **Úloha 1:** Napíšte program, ktorý načíta polomer kruhu od používateľa a vypočíta jeho obsah a obvod.
2. **Úloha 2:** Vytvorte funkciu, ktorá prijme zoznam čísel a vráti ich priemer, minimum a maximum.
