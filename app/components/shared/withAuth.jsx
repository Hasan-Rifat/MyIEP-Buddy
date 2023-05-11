import { useRouter } from "next/navigation";

export function withAuth(WrappedComponent) {
  return function WithAuth(props) {
    const token =
      typeof window !== "undefined" &&
      JSON.parse(localStorage.getItem("user")).token;

    const router = useRouter();

    if (!token) {
      router.push("/sign-in");
    }

    return <WrappedComponent {...props} />;
  };
}
