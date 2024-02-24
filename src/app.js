const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient();

async function main() {
    const user = await prisma.user.create({
        data: {
            email: "oussamamaatallah@yopmail.net",
            name: "Oussama Maatallah",
            profile: {
                create: {
                    bio: "Consequat do officia irure laborum aliqua dolore qui elit.",
                }
            },
            posts: {
                create: {
                    title: "Ut irure veniam exercitation fugiat voluptate culpa Lorem enim quis nisi excepteur id.",
                    content: "Officia magna laborum aliquip in irure ipsum in enim ut excepteur qui. Lorem elit aute aliqua sunt. Dolore mollit quis commodo mollit. Esse laborum adipisicing do aliquip exercitation consequat culpa id eiusmod incididunt ut voluptate nulla consequat. Ad aliqua et laboris do pariatur laboris cupidatat est aliquip quis ipsum esse id. Et cillum ullamco dolore pariatur ut eu pariatur.",
                    published: true,
                }
            }
        }
    });
    console.info("user:", user);

    const allUsers = await prisma.user.findMany();
    const allProfiles = await prisma.profile.findMany();
    const allPosts = await prisma.post.findMany();

    console.log("allUsers:",allUsers);
    console.log("allProfiles:",allProfiles);
    console.log("allPosts:",allPosts);
}


main()
    .then(async () => {
       await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
    })