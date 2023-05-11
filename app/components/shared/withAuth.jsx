import { useRouter } from "next/navigation";

export function withAuth(WrappedComponent) {
  return function WithAuth(props) {
    return <WrappedComponent {...props} />;
  };
}
