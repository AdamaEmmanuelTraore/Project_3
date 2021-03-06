import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class ServiceCard {
    // SERVIZIO PER VISUALIZZARE TUTTI I GIOCATORI
    getService() {
        let subject = new Subject()
        setTimeout(() => {subject.next(PLAYERS); subject.complete();}, 1000)
        return subject
    }
    // SERVIZIO PER VISUALIZZARE TUTTI I GIOCATORI
    getDirectors() {
        let subject = new Subject()
        setTimeout(()=> {subject.next(DIRIGENZA); subject.complete();}, 2000)
        return subject
    }
    // SERVIZIO PER VISUALIZZARE UN SINGOLO CALCIATORE
    getElement(id: number) {
        return PLAYERS.find(card => card.id === id)
    }
    // SERVIZIO PER VISUALIZZARE UN SINGOLO CALCIATORE
    getStaff() {
        let subject = new Subject()
        setTimeout(()=> {subject.next(STAFF); subject.complete();}, 1000)
        return subject
    }
}

const PLAYERS = [
    {
        id: 1,
        img: '/assets/images/mike.png',
        gif: 'assets/images/maignan-maignan-milan.gif',
        logo: '/assets/images/milan.png',
        ruolo: 'Portiere',
        numero_maglia: 16,
        nome: 'Mike',
        cognome: 'Maignan',
        nazionalita: 'Francia',
        eta: '27 anni',
        reti: 0,
        assist: 1,
        detail: "Inizialmente centrocampista, è stato poi spostato in quello che è il suo attuale ruolo di portiere da Ramon Damiano, che è stato uno dei suoi primi allenatori. Dotato di ottima personalità, atletismo e riflessi, è molto abile in uscita. A questo unisce anche una buona capacità nel parare i rigori. Si distingue anche per le sue capacità nel giocare con i piedi."
    },
    {
        id: 2,
        img: '/assets/images/tata.png',
        logo: '/assets/images/milan.png',
        gif: 'assets/images/tatarusanu.gif',
        ruolo: 'Portiere',
        numero_maglia: 1,
        nome: 'Ciprian',
        cognome: 'Tatarusanu',
        nazionalita: 'Romania',
        eta: '36 anni',
        reti: 0,
        assist: 0,
        detail: "Chiamato l'Uomo Ragno in patria, a dispetto del fisico imponente, è abile non solo sui palloni alti, ma anche sui tiri rasoterra. Sicuro nelle uscite, possiede una buona reputazione a livello internazionale ed è uno specialista nel parare i calci di rigore."
    },
    {
        id: 3,
        img: '/assets/images/calabria.png',
        gif: 'assets/images/davide-calabria-calabria.gif',
        logo: '/assets/images/milan.png',
        ruolo: 'Difensore',
        numero_maglia: 2,
        nome: 'Davive',
        cognome: 'Calabria',
        nazionalita: 'Italia',
        eta: '25 anni',
        reti: 2,
        assist: 3,
        detail: "Nato centrocampista, ricopre a partire dal settore Allievi prevalentemente il ruolo di terzino destro, nonostante sappia destreggiarsi anche sulla fascia sinistra. Occasionalmente è stato utilizzato come mezzala o mediano in situazioni di emergenza. Dotato di velocità e resistenza, si trova a proprio agio anche nel ruolo di esterno di centrocampo. A fronte di una prestanza fisica non eccelsa, si distingue invece per grinta, velocità, e intelligenza tattica motivo per cui è sovente soprannominato dai suoi tifosi con l'appellativo di Frisbee o Boomerang; tale appellativo gli fu attribuito per la prima volta dal telecronista Carlo Pellegatti."
    },
    {
        id: 4,
        img: '/assets/images/florenzi.png',
        logo: '/assets/images/milan.png',
        gif: 'assets/images/florenzi.gif',
        ruolo: 'Difensore',
        numero_maglia: 25,
        nome: 'Alessandro',
        cognome: 'Florenzi',
        nazionalita: 'Italia',
        eta: '31 anni',
        reti: 1,
        assist: 0
    },
    {
        id: 5,
        img: '/assets/images/kjaer.png',
        logo: '/assets/images/milan.png',
        gif: 'assets/images/kjaer.gif',
        ruolo: 'Difensore',
        numero_maglia: 24,
        nome: 'Simon',
        cognome: 'Kjaer',
        nazionalita: 'Danimarca',
        eta: '33 anni',
        reti: 0,
        assist: 0
    },
    {
        id: 6,
        img: '/assets/images/tomori.png',
        logo: '/assets/images/milan.png',
        gif: 'assets/images/tomori.gif',
        ruolo: 'Difensore',
        numero_maglia: 23,
        nome: 'Fikayo',
        cognome: 'Tomori',
        nazionalita: 'Inghilterra',
        eta: '24 anni',
        reti: 0,
        assist: 0
    },
    {
        id: 7,
        img: '/assets/images/romagnoli.png',
        logo: '/assets/images/milan.png',
        gif: 'assets/images/romagnoli.gif',
        ruolo: 'Difensore',
        numero_maglia: 13,
        nome: 'Alessio',
        cognome: 'Romagnoli',
        nazionalita: 'Italia',
        eta: '27 anni',
        reti: 1,
        assist: 0
    },
    {
        id: 8,
        img: '/assets/images/gabbia.png',
        logo: '/assets/images/milan.png',
        gif: 'assets/images/gabbia.gif',
        ruolo: 'Difensore',
        numero_maglia: 46,
        nome: 'Matteo',
        cognome: 'Gabbia',
        nazionalita: 'Italia',
        eta: '22 anni',
        reti: 0,
        assist: 0
    },
    {
        id: 9,
        img: '/assets/images/theo.png',
        logo: '/assets/images/milan.png',
        gif: 'assets/images/theo.gif',
        ruolo: 'Difensore',
        numero_maglia: 19,
        nome: 'Theo',
        cognome: 'Hernandez',
        nazionalita: 'Francia',
        eta: '24 anni',
        reti: 4,
        assist: 6
    },
    {
        id: 10,
        img: '/assets/images/toure.png',
        logo: '/assets/images/milan.png',
        gif: 'assets/images/toure.gif',
        ruolo: 'Difensore',
        numero_maglia: 5,
        nome: 'Ballo',
        cognome: 'Touré',
        nazionalita: 'Senegal',
        eta: '25 anni',
        reti: 0,
        assist: 0
    },
    {
        id: 11,
        img: '/assets/images/kalulu.png',
        logo: '/assets/images/milan.png',
        gif: 'assets/images/kalulu.gif',
        ruolo: 'Difensore',
        numero_maglia: 20,
        nome: 'Pierre',
        cognome: 'Kalulu',
        nazionalita: 'Francia',
        eta: '21 anni',
        reti: 1,
        assist: 1
    },
    {
        id: 12,
        img: '/assets/images/tonali.png',
        logo: '/assets/images/milan.png',
        gif: 'assets/images/tonali.gif',
        ruolo: 'Centrocampista',
        numero_maglia: 8,
        nome: 'Sandro',
        cognome: 'Tonali',
        nazionalita: 'Italia',
        eta: '21 anni',
        reti: 2,
        assist: 3
    },
    {
        id: 13,
        img: '/assets/images/isma.png',
        logo: '/assets/images/milan.png',
        gif: 'assets/images/isma.gif',
        ruolo: 'Centrocampista',
        numero_maglia: 4,
        nome: 'Ismail',
        cognome: 'Bennacer',
        nazionalita: 'Algeria',
        eta: '24 anni',
        reti: 2,
        assist: 1
    },
    {
        id: 14,
        img: '/assets/images/baka.png',
        logo: '/assets/images/milan.png',
        gif: 'assets/images/bakayoko.gif',
        ruolo: 'Centrocampista',
        numero_maglia: 41,
        nome: 'Tiemoué',
        cognome: 'Bakayoko',
        nazionalita: 'Francia',
        eta: '27 anni',
        reti: 0,
        assist: 0
    },
    {
        id: 15,
        img: '/assets/images/diaz.png',
        logo: '/assets/images/milan.png',
        gif: 'assets/images/diaz.gif',
        ruolo: 'Centrocampista',
        numero_maglia: 10,
        nome: 'Brahim',
        cognome: 'Diaz',
        nazionalita: 'Spagna',
        eta: '22 anni',
        reti: 3,
        assist: 3
    },
    {
        id: 16,
        img: '/assets/images/leao.png',
        logo: '/assets/images/milan.png',
        gif: 'assets/images/leao.gif',
        ruolo: 'Attaccante',
        numero_maglia: 17,
        nome: 'Rafael',
        cognome: 'Leao',
        nazionalita: 'Portogallo',
        eta: '22 anni',
        reti: 8,
        assist: 4
    },
    {
        id: 17,
        img: '/assets/images/rebic.png',
        logo: '/assets/images/milan.png',
        gif: 'assets/images/rebic.gif',
        ruolo: 'Attaccante',
        numero_maglia: 12,
        nome: 'Ante',
        cognome: 'Rebic',
        nazionalita: 'Croazia',
        eta: '28 anni',
        reti: 2,
        assist: 2
    },
    {
        id: 18,
        img: '/assets/images/alexis.png',
        logo: '/assets/images/milan.png',
        gif: 'assets/images/alexis.gif',
        ruolo: 'Attaccante',
        numero_maglia: 56,
        nome: 'Alexis',
        cognome: 'Saelemakers',
        nazionalita: 'Belgio',
        eta: '22 anni',
        reti: 1,
        assist: 3
    },
    {
        id: 19,
        img: '/assets/images/messias.png',
        logo: '/assets/images/milan.png',
        gif: 'assets/images/messias.gif',
        ruolo: 'Attaccante',
        numero_maglia: 30,
        nome: 'Junior',
        cognome: 'Messias',
        nazionalita: 'Brasile',
        eta: '30 anni',
        reti: 4,
        assist: 0
    },
    {
        id: 20,
        img: '/assets/images/giroud.png',
        logo: '/assets/images/milan.png',
        gif: 'assets/images/giroud.gif',
        ruolo: 'Attaccante',
        numero_maglia: 9,
        nome: 'Olivier',
        cognome: 'Giroud',
        nazionalita: 'Francia',
        eta: '35 anni',
        reti: 8,
        assist: 4
    },
    {
        id: 21,
        img: '/assets/images/ibra.png',
        logo: '/assets/images/milan.png',
        gif: 'assets/images/ibra.gif',
        ruolo: 'Attaccante',
        numero_maglia: 11,
        nome: 'Zlatan',
        cognome: 'Ibrahimovic',
        nazionalita: 'Svezia',
        eta: '40 anni',
        reti: 8,
        assist: 2
    },
    {
        id: 22,
        img: '/assets/images/lazetic.png',
        logo: '/assets/images/milan.png',
        gif: 'assets/images/lazetic.gif',
        ruolo: 'Attaccante',
        numero_maglia: 22,
        nome: 'Marco',
        cognome: 'Lazzetic',
        nazionalita: 'Serbia',
        eta: '18 anni',
        reti: 0,
        assist: 0
    },
]

const DIRIGENZA = [
{   id: 1,
    img: '/assets/images/scaroni.png',
    ruolo: 'PRESIDENTE',
    nome: 'Paolo',
    cognome: 'Scaroni',
    eta: '75 anni',
    nazionalita: 'Italia'},

{   id: 2,
    img: '/assets/images/baresi.png',
    ruolo: 'VICEPRESIDENTE ONORARIO',
    nome: 'Franco',
    cognome: 'Baresi',
    altezza: '1,76 m',
    eta: '61 anni',
    nazionalita: 'Italia'},

{   id: 3,
    img: '/assets/images/gazidis.png',
    ruolo: 'AMMINISTRATORE DELEGATO',
    nome: 'Ivan',
    cognome: 'Gazidis',
    eta: '57 anni',
    nazionalita: 'Sud-Africa'},

{   id: 4,
    img: '/assets/images/maldini.png',
    ruolo: 'TECHNICAL AREA DIRECTOR',
    nome: 'Paolo',
    cognome: 'Maldini',
    altezza: '1,86 m',
    eta: '53 anni',
    nazionalita: 'Italia'},

{   id: 5,
    img: '/assets/images/massara.png',
    ruolo: 'SPORT DIRECTOR',
    nome: 'Frederic',
    cognome: 'Massara',
    altezza: '1,78 m',
    eta: '53 anni',
    nazionalita: 'Italia'},

{   id: 6,
    img: '/assets/images/massaro.png',
    ruolo: 'BRAND AMBASSADOR',
    nome: 'Daniele',
    cognome: 'Massaro',
    altezza: '1,79 m',
    eta: '60 anni',
    nazionalita: 'Italia'},

]

const STAFF = [
    {   id: 1,
        img: '/assets/images/pioli.png',
        ruolo: 'ALLENATORE',
        nome: 'Stefano',
        cognome: 'Pioli',
        eta: '56 anni',
        altezza: '1,83 m',
        nazionalita: 'Italia'},
    
    {   id: 2,
        img: '/assets/images/murelli.png',
        ruolo: 'VICE-ALLENATORE',
        nome: 'Giacomo',
        cognome: 'Murelli',
        eta: '58 anni',
        altezza: '1,75 m',
        nazionalita: 'Italia'},
    
    {   id: 3,
        img: '/assets/images/dida.png',
        ruolo: 'PREPARATORE PORTIERI',
        nome: 'Nelson',
        cognome: 'Dida',
        eta: '48 anni',
        altezza: '1,96 m',
        nazionalita: 'Brasile'},
    
    {   id: 4,
        img: '/assets/images/bonera.png',
        ruolo: 'ASSISTENTE TECNICO',
        nome: 'Daniele',
        cognome: 'Bonera',
        eta: '40 anni',
        altezza: '1,85 m',
        nazionalita: 'Italia'},
    
    ]