import { useEffect } from "react";
import { useRouter } from "next/router";

// Minimal redirect so /contact immediately goes to home
export default function ContactRedirect() {
  const router = useRouter();
  useEffect(() => {
    if (router && router.replace) router.replace('/');
  }, [router]);
  return null;
}
