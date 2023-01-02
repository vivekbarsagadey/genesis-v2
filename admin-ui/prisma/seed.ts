import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  
    // add default value

        //  console.log("this is data drom seeding")
    const user = await prisma.user.create({
      data:{
        name:"Piraji Survase",
        email:"piraji.s@whizit.co.in",
        // image:"https://lh3.googleusercontent.com/a/AATXAJzC7nu5bN2iAS-Mnf1TQ8VePgIbXJqHq0NTQAHe=s96-c"
      }

      
    });
    await prisma.account.create({
      data:{
       userId:user.id,
       type:"oauth",
       provider:"google",
       providerAccountId: "108191379105850776810",
       token_type:"Bearer",
       scope:"openid https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile"
      }
    });


    
    
}

main()
  .catch((e) => {  
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });