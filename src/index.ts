import { Partecipante, Corso, Azienda, PiattaformaIncluDO } from "./models/Classes";

// 1. Inizializzazione della piattaforma
const app = new PiattaformaIncluDO();

console.log("--- 🚀 BENVENUTO IN INCLUDO V1.0 🚀 ---");

// 2. Creazione e registrazione dati
const amir = new Partecipante("Amir", "Rahmani", "Siria", "Laurea", ["Italiano A2"], "Legno");
const fatima = new Partecipante("Fatima", "Zaid", "Marocco", "Diploma", ["Italiano B1"], "Sartoria");

app.registraPartecipante(amir);
app.registraPartecipante(fatima);

// 3. Creazione e pubblicazione corsi
const corsoEbanisteria = new Corso("Ebanisteria Moderna", "Tecniche base", "Artigianato", "6 mesi");
app.pubblicaCorso(corsoEbanisteria);

// 4. Simulazione Operazioni
console.log("\n--- ⚙️ ELABORAZIONE IN CORSO ---");
amir.iscrivitiCorso(corsoEbanisteria);

// 5. Utilizzo del Sistema di Filtraggio
console.log("\n--- 🔍 RICERCA CANDIDATI ---");
const espertiLegno = app.filtraCandidatiPerInteresse("Legno");

if (espertiLegno.length > 0) {
    console.log(`Trovati ${espertiLegno.length} candidati interessati al Legno:`);
    espertiLegno.forEach(p => console.log(`- ${p.nome} ${p.cognome}`));
} else {
    console.log("Nessun candidato trovato per questo settore.");
}

console.log("\n--- ✅ SESSIONE CONCLUSA CON SUCCESSO ---");