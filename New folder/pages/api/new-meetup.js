import { MongoClient } from "mongodb";


async function handler(req, res) {
    console.log('entered')
    if (req.method === 'POST') {
        const data = req.body;


        const client = await MongoClient.connect(
            'mongodb+srv://choudharygaurav884:GZa1ZkXc4eVvtiYE@nextjs.4w2dl.mongodb.net/?retryWrites=true&w=majority&appName=NEXTJS'
        )
        const db = client.db()

        const meetupsCollection = db.collection('meetups');

        const result = await meetupsCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({ message: 'Meetup inserted!' });
    }

}

export default handler;