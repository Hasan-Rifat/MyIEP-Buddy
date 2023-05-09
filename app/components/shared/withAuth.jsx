import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { isAuthenticated } from './auth';

export function withAuth(WrappedComponent) {
    return function WithAuth(props) {
        const router = useRouter();

        useEffect(() => {
            if (!isAuthenticated()) {
                router.push('/login');
            }
        }, []);

        return <WrappedComponent {...props} />;
    };
}