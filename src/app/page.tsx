
import { caller } from "@/trpc/server";
async function Page() {
  const users = await caller.getUsers();
  return (
    <div className="text-3xl text-red-400 text=center">
      {JSON.stringify(users)}
    </div>
  );
}

export default Page;
