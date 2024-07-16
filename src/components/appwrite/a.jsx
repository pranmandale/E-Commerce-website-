import { Client, Account, Databases } from 'appwrite';



console.log('Appwrite Endpoint:', import.meta.env.VITE_APPWRITE_ENDPOINT);
console.log('Appwrite Project ID:', import.meta.env.VITE_APPWRITE_PROJECT_ID);

const client = new Client();
client
    .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

const account = new Account(client);
const databases = new Databases(client);

export { client, account, databases };
