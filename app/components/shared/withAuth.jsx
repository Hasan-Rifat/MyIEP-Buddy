import { useRouter } from "next/navigation";

export function withAuth(WrappedComponent) {
  return function WithAuth(props) {
    const token = JSON.parse(localStorage.getItem("user")).token;

    const router = useRouter();
    console.log(token);
    /*   if (!token) {
      router.push("/sign-in");
    } */

    return <WrappedComponent {...props} />;
  };
}
