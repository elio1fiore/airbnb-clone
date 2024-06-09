# Airbnb Clone - Next.js Application (ENG)

Welcome to the repository of the Airbnb Clone, a project inspired by the YouTube channel [CodeWithAntonio](https://www.youtube.com/@codewithantonio). This application has been developed using Next.js and aims to replicate key features of Airbnb with a personal touch and enhancements in state management and authentication.

### Application State
The original project used Zustand as the state management library. For this version of the clone, I have opted to adopt Redux Toolkit, which offers benefits such as more standardized configuration and powerful debugging tools.

### Project Configuration
To run this project in your local environment, some initial configuration steps are necessary:

1. **Environment Variables**: You will need to set up the necessary environment variables to connect the various parts of the application, such as the API, the database, and external services.

2. **OAuth2 Authentication with Google via GitHub**: Ensure to configure OAuth2 authentication to allow users to log in using their Google account. This requires the correct setup on GitHub to obtain the necessary credentials.

3. **Cloudinary for Image Management**: Register for an account on Cloudinary. This service is used to host and manage user-uploaded images, ensuring that the application can handle them efficiently without overloading the local server.

4. **MongoDB for the Database**: You will need to create an account on MongoDB and configure a cluster to manage the application's database. This will allow you to store and retrieve data efficiently.

### Starting the Project
After correctly setting up all the services and environment variables, you can start the project by running the following commands in your terminal:

```bash
npm install
npm run dev
```

This will install all necessary dependencies and start the development server, making the application accessible at `http://localhost:3000`.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Airbnb Clone - Next.js Application (ITA)

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
