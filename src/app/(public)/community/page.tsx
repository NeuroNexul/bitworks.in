import CommingSoon from "@/components/extras/come_soon";
import PageWrapper from "@/components/extras/page_wrapper";

export const runtime = "edge";

export default function Home() {
  return (
    <PageWrapper>
      <CommingSoon />
    </PageWrapper>
  );
}
