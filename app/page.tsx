import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex sm:min-h-[91vh] min-h-[88vh] flex-col items-center justify-center text-center px-2 py-8">
      <h1 className="text-3xl font-bold mb-4 sm:text-7xl">
        AI와의 대화, 이제는 비용 효율적으로!
      </h1>
      <p className="mb-8 sm:text-xl max-w-[800px] text-muted-foreground">
        {/* 원하는 만큼 대화하며 필요한 만큼만 지불할 수 있습니다. 복잡한 요금 체계
        없이, 투명하게 관리하세요. */}
        우리의 AI 대화 플랫폼은 사용한 만큼만 지불하는 시스템으로, 필요할 때마다
        비용 효율적인 대화 경험을 제공합니다. 인공지능과의 상호작용을 통해 더
        많은 것을 배우고, 필요한 정보에 빠르게 접근하세요
      </p>
      <div className="flex flex-row items-center gap-5">
        <Link
          href={`/docs${page_routes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          시작하기
        </Link>
      </div>
    </div>
  );
}
