export namespace ApiModel {
    export class Benutzer {
      BenutzerID?: number;
      Benutzername?: string;
      Passwort?: string;
      istAdmin?: boolean;
      istVorgesetzter?: boolean;
      Vorgesetzter?: number;
      Vorname?: string;
      Nachname?: string;
      Geburtsdatum?: Date;
      Email?: string;
      Eintrittsdatum?: Date;
      arbeitstage?: Arbeitstage;
      bundesland?: Bundesland;
      anträge?: Urlaubsantrag[];
    }
  
    export class Urlaubsantrag {
      AntragID?: number;
      Urlaubart?: string;
      Status?: string;
      von?: Date;
      bis?: Date;
      Grund?: string;
      informiert?: boolean;
      benutzer?: Benutzer;
    }
  
    export class Arbeitstage {
      TageID?: number;
      Montag?: boolean;
      Dienstag?: boolean;
      Mittwoch?: boolean;
      Donnerstag?: boolean;
      Freitag?: boolean;
      Samstag?: boolean;
      Sonntga?: boolean;
      alleBneutzer?: Benutzer[];
    }
  
    export class Bundesland {
      BundeslandID?: number;
      Abkürzung?: string;
      Name?: string;
      alleBenutzer?: Benutzer[];
    }

  }