import { useRouter } from "next/router";
import { Provider } from "react-redux";
import store from "../state/store";
import "../styles/globals.css";
import "../styles/Home.module.css";

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
