import { myContext } from "@/context";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <myContext.Provider>
      <Component {...pageProps} />;
    </myContext.Provider>
  );
}
