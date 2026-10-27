# Modul 00: Git a Verzovanie kódu

Vítajte v prvom module kurzu. Tento modul je venovaný **systému správy verzií Git** a platforme **GitHub**.

Schopnosť efektívne spravovať verzie kódu, sledovať zmeny a spolupracovať v tíme patrí medzi základné zručnosti každého moderného programátora a inžiniera.

---

## 🎯 Ciele modulu
Po absolvovaní tohto modulu budete vedieť:
- Vysvetliť rozdiel medzi lokálnym verzovaním a vzdialeným repozitárom (GitHub).
- Nainštalovať a skonfigurovať Git vo vašom prostredí.
- Používať základné príkazy Gitu: `git init`, `git status`, `git add`, `git commit`, `git log`.
- Pracovať so vzdialeným repozitárom: `git clone`, `git push`, `git pull`, `git fetch`.
- Vytvárať vetvy (`git branch`, `git checkout` / `git switch`) a spájať ich (`git merge`).
- Vytvoriť a správne nastaviť súbor `.gitignore`.

---

## 📺 Odporúčané študijné materiály (Informatika s Mišom)

Pri štúdiu odporúčame sledovať série videí z kanála **Informatika s Mišom**:

- 🔗 **YouTube kanál:** [Informatika s Mišom](https://www.youtube.com/@InformatikasMi%C5%A1om)
- 🎓 **Kurz Gitu a GitHubu:** Hľadajte sériu videí zameranú na Git a GitHub na vyššie uvedenom kanáli.

---

## 🛠️ Základné príkazy (Cheat Sheet)

### Configuration (Prvotné nastavenie)
```bash
git config --global user.name "Vaše Meno"
git config --global user.email "vas.email@skola.sk"
```

### Pracovný cyklus (Basic Workflow)
```bash
# Zistenie stavu zmenených súborov
git status

# Pridanie súborov do zoznamu zmien (staging area)
git add názov_súboru.py
git add .               # pridať všetky zmeny

# Vytvorenie commitu (uloženie snímky kódu)
git commit -m "Pridaná funkcia pre výpočet priemeru"

# Zobrazenie histórie commitov
git log --oneline
```

### Práca so vzdialeným repozitárom (Remote Repository)
```bash
# Klonovanie repozitára
git clone https://github.com/cabalad/Programovanie.git

# Odeslanie lokálnych commitov na server
git push origin main

# Stiahnutie najnovších zmien zo servera
git pull origin main
```

---

## 📝 Praktické cvičenia

1. **Cvičenie 1:** Vytvorte si lokálny repozitár, inicializujte ho pomocou `git init` a vytvorte prvý commit so súborom `README.md`.
2. **Cvičenie 2:** Vytvorte súbor `.gitignore` tak, aby ignoroval dočasné súbory Pythonu (`__pycache__/`, `*.pyc`) a kompilované súbory C/C++ (`*.exe`, `*.o`, `*.out`).

---
