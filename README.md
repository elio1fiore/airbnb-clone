# Airbnb Clone - Next.js Application

Benvenuti nel repository del clone di Airbnb, un progetto ispirato dal canale YouTube [CodeWithAntonio](https://www.youtube.com/@codewithantonio). Questa applicazione è stata sviluppata utilizzando Next.js e mira a replicare alcune delle funzionalità chiave di Airbnb con un tocco personale.

### Stato dell'applicazione
Il progetto originale utilizzava Zustand come libreria per la gestione dello stato. Per questa versione del clone, ho deciso di adottare Redux Toolkit.

### Configurazione del progetto
Per eseguire questo progetto sul tuo ambiente locale, sono necessari alcuni passaggi di configurazione preliminari:

1. **Variabili d'ambiente**: Dovrai configurare le variabili d'ambiente necessarie per connettere le varie parti dell'applicazione, come l'API, il database e i servizi esterni.

2. **Autenticazione OAuth2 con Google tramite GitHub**: Assicurati di configurare l'autenticazione OAuth2 per consentire agli utenti di accedere utilizzando il loro account Google. Questo richiede che configurazione corretta sul lato GitHub per ottenere le credenziali necessarie.

3. **Cloudinary per la gestione delle immagini**: Registrati per un account su Cloudinary. Questo servizio viene utilizzato per ospitare e gestire le immagini caricate dagli utenti, garantendo che l'applicazione possa gestirle efficacemente senza sovraccaricare il server locale.

4. **MongoDB per il database**: Sarà necessario creare un account su MongoDB e configurare un cluster per gestire il database dell'applicazione. Questo permetterà di memorizzare e recuperare dati in modo efficiente.

### Avvio del progetto
Dopo aver configurato correttamente tutti i servizi e le variabili d'ambiente, puoi avviare il progetto eseguendo i seguenti comandi nel tuo terminale:

```bash
npm install
npm run dev
```

Questo installerà tutte le dipendenze necessarie e avvierà il server di sviluppo, rendendo l'applicazione accessibile all'indirizzo `http://localhost:3000`.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
