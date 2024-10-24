import PageWrapper from "@/components/extras/page_wrapper";
import { Button } from "@/components/ui/button";
import { signOut } from "@/auth/auth.config";

export default function Home() {
  return (
    <PageWrapper>
      <h1>Read More</h1>
      <form
        action={async () => {
          "use server";
          await signOut({
            redirect: true,
            redirectTo: "/login",
          });
        }}
      >
        <Button type="submit">Logout</Button>
      </form>
    </PageWrapper>
  );
}
