import "../styles/globals.css";
import "antd/dist/antd.variable.min.css";
import type { AppProps } from "next/app";
import { ConfigProvider } from "antd";
import { theme } from "tsdx-sample-component-library";

ConfigProvider.config({
  theme,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider>
      <Component {...pageProps} />
    </ConfigProvider>
  );
}

export default MyApp;
