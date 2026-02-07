import { ICorso, IPartecipante, IAzienda } from "../interfaces/IIncluDO";

export class Partecipante implements IPartecipante {
    constructor(
        public nome: string,
        public cognome: string,
        public paeseOrigine: string,
        public livelloIstruzione: string,
        public competenzeLinguistiche: string[],
        public ambitoInteresse: string
    ) {}

    iscrivitiCorso(c: ICorso): void {
        if (c.iscritti.includes(this)) {
            console.log(`[AVVISO] ${this.nome} è già iscritto al corso "${c.titolo}".`);
            return;
        }
        console.log(`\n[AZIONE] Richiesta iscrizione: ${this.nome} -> ${c.titolo}`);
        c.aggiungiPartecipante(this);
    }
}

export class Corso implements ICorso {
    public iscritti: IPartecipante[] = [];
    constructor(
        public titolo: string,
        public descrizione: string,
        public settoreProfessionale: string,
        public durata: string
    ) {}

    aggiungiPartecipante(p: IPartecipante): void {
        this.iscritti.push(p);
        console.log(`[CONFERMA] Iscrizione completata per ${p.nome}.`);
    }
}

export class Azienda implements IAzienda {
    constructor(
        public nomeAzienda: string,
        public settoreAttivita: string,
        public descrizione: string,
        public posizioniAperte: string[]
    ) {}

    offriPosizione(p: IPartecipante, pos: string): void {
        if (this.posizioniAperte.includes(pos)) {
            console.log(`[OFFERTA] ${this.nomeAzienda} offre un posto come "${pos}" a ${p.nome}.`);
        } else {
            console.log(`[ERRORE] La posizione "${pos}" non è disponibile presso ${this.nomeAzienda}.`);
        }
    }
}

// NUOVA CLASSE CONTENITORE
export class PiattaformaIncluDO {
    public partecipanti: Partecipante[] = [];
    public corsi: Corso[] = [];

    registraPartecipante(p: Partecipante): void {
        this.partecipanti.push(p);
        console.log(`[SISTEMA] Registrato: ${p.nome} ${p.cognome}`);
    }

    pubblicaCorso(c: Corso): void {
        this.corsi.push(c);
        console.log(`[SISTEMA] Corso pubblicato: ${c.titolo}`);
    }

    filtraCandidatiPerInteresse(settore: string): Partecipante[] {
        return this.partecipanti.filter(p => p.ambitoInteresse === settore);
    }
}