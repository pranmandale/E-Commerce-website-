


import { Client, Account, Databases } from 'appwrite';

const client = new Client();
const account = new Account(client);
const databases = new Databases(client);

client
    .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT) // Your API Endpoint
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID); // Your project ID

export const createAccount = async (userId, email, password, name) => {
    try {
        const response = await account.create(userId, email, password, name);
        console.log('Account creation response:', response);
        return response;
    } catch (error) {
        console.error('Error creating account:', error);
        throw error;
    }
};

export const createSession = async (email, password) => {
    try {
        // Check for existing session and delete it if found
        try {
            const session = await account.getSession('current');
            await account.deleteSession(session.$id);
        } catch (error) {
            // No active session found, proceed with creating a new one
            console.log('No active session found:', error.message);
        }

        const response = await account.createEmailPasswordSession(email, password);
        console.log('Session creation response:', response);
        return response;
    } catch (error) {
        console.error('Error creating session:', error);
        throw error;
    }
};

export const createDocument = async (databaseId, collectionId, documentId, data, read, write) => {
    try {
        const response = await databases.createDocument(databaseId, collectionId, documentId, data, read, write);
        console.log('Document creation response:', response);
        return response;
    } catch (error) {
        console.error('Error creating document:', error);
        throw error;
    }
};

export { client, account, databases };
