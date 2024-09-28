// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true;
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "시작하기",
    href: "/getting-started",
    noLink: true,
    items: [
      { title: "소개", href: "/introduction" },
      { title: "주요 개념", href: "/concepts" },
      // {
      //   title: "Installation",
      //   href: "/installation",
      //   items: [
      //     { title: "Laravel", href: "/laravel" },
      //     { title: "React", href: "/react" },
      //     { title: "Gatsby", href: "/gatsby" },
      //   ],
      // },
      { title: "빠른 시작 가이드", href: "/quick-start-guide" },
      // {
      //   title: "Project Structure",
      //   href: "/project-structure",
      //   items: [
      //     { title: "Layouts", href: "/layouts" },
      //     { title: "Integrations", href: "/integrations" },
      //     {
      //       title: "Manual",
      //       href: "/manual",
      //       items: [
      //         { title: "JavaScript", href: "/javascript" },
      //         { title: "Typescript", href: "/typescript" },
      //         { title: "Golang", href: "/golang" },
      //       ],
      //     },
      //   ],
      // },
      { title: "업데이트", href: "/changelog" },
      {
        title: "FAQ",
        href: "/faq",
      },
    ],
  },
  {
    title: "약관",
    href: "/terms",
    noLink: true,
    items: [
      { title: "개인정보", href: "/privacy" },
      // { title: "getToken", href: "/getToken" },
      // { title: "getRole", href: "/getRole" },
    ],
  },
  // {
  //   title: "React Hooks",
  //   href: "/react-hooks",
  //   noLink: true,
  //   items: [
  //     { title: "useSession", href: "/use-session" },
  //     { title: "useFetch", href: "/use-fetch" },
  //     { title: "useAuth", href: "/use-auth" },
  //     { title: "useProduct", href: "/use-product" },
  //     { title: "useOrder", href: "/use-order" },
  //     { title: "useCart", href: "/use-cart" },
  //     { title: "usePayment", href: "/use-payment" },
  //     { title: "useShipping", href: "/use-shipping" },
  //     { title: "useNotification", href: "/use-notification" },
  //     { title: "useReview", href: "/use-review" },
  //     { title: "useInventory", href: "/use-inventory" },
  //     { title: "useUser", href: "/use-user" },
  //     { title: "useSettings", href: "/use-settings" },
  //     { title: "useAnalytics", href: "/use-analytics" },
  //     { title: "useTheme", href: "/use-theme" },
  //     { title: "useRouter", href: "/use-router" },
  //     { title: "useData", href: "/use-data" },
  //   ],
  // },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
