import prisma from "@/lib/dp";
async function Page() {
  const users = await prisma.user.findMany();
  return (
    <div className="text-3xl text-red-400 text=center">
      {JSON.stringify(users)}
    </div>
  );
}

export default Page;
