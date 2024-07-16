import { Client,Account, Databases } from "appwrite";

const client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1").setProject("669371bf0025d3124fb7");

export const account = new Account(client);
export const database = new Databases(client, "66937663002865511af4");

