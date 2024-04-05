import "./App.css"
import Main from "./layouts/Main"
import { Provider } from "react-redux"
import store from "./store"
import LoadingWrapper from "./features/loading/LoadingWrapper"

function App() {
    return (
        <Provider store={store}>
            <LoadingWrapper>
                <Main />
            </LoadingWrapper>
        </Provider>
    )
}

export default App
