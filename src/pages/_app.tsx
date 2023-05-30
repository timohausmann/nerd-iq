import { Layout } from "@/components/Layout/Layout";
import { AppProps } from "next/app";
import './global.css'

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}