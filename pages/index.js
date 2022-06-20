import Head from 'next/head'
import clientPromise from '../lib/mongodb'

import { Menu } from '@headlessui/react'
import DropdownMenu from '@components/DropdownMenu'
import RadioGroup from '@components/RadioGroup'

export default function Home({ isConnected, users }) {
  console.log(users[0])
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>

      <h1 className="text-6xl font-bold underline">
        Hello world!
      </h1>
      <DropdownMenu/>
      <RadioGroup/>
  
      </div>

    </div>
  )
}

export async function getServerSideProps(context) {
  try {
    await clientPromise
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands
    const client = await clientPromise;
    const db = client.db("sample_airbnb");
    let users = await db.collection("listingsAndReviews").find({}).limit(5).toArray();
    users = JSON.parse(JSON.stringify(users));
    console.log(users[0])
    return {
      props: { isConnected: true , users:users},
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}
