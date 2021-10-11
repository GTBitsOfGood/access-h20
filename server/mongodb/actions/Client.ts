import ClientSchema from "../models/Client";
import { Client } from "../../models/Client"
import mongoDB from "../index";


export async function addClient(client: Client) {
    await mongoDB();
    return await ClientSchema.create(client);
}