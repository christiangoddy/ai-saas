import { db } from "./server/db";

await db.user.create({
    data: {
        emailAddress: 'test@gmail.com',
        firstName: 'christain',
    lastName: 'goddy',
        }
})
console.log('done')