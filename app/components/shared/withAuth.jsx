import { useRouter } from "next/navigation";

export function withAuth(WrappedComponent) {
  return function WithAuth(props) {
    const user = typeof window !== "undefined" && localStorage.getItem("user");
    const token = user ? JSON.parse(user).token : null;
    const router = useRouter();

    if (!token) {
      router.push("/sign-in");
      return null; // or any loading state if needed
    }

    return <WrappedComponent {...props} />;
  };
}
