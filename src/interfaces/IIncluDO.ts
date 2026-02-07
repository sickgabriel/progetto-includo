export interface ICorso {
    titolo: string;
    descrizione: string;
    settoreProfessionale: string;
    durata: string;
    iscritti: IPartecipante[];
    aggiungiPartecipante(p: IPartecipante): void;
}

export interface IPartecipante {
    nome: string;
    cognome: string;
    paeseOrigine: string;
    livelloIstruzione: string;
    competenzeLinguistiche: string[];
    ambitoInteresse: string;
    iscrivitiCorso(c: ICorso): void;
}

export interface IAzienda {
    nomeAzienda: string;
    settoreAttivita: string;
    descrizione: string;
    posizioniAperte: string[];
    offriPosizione(p: IPartecipante, pos: string): void;
}