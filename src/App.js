import { useEffect, useState } from "react";
import { Form, Header } from "./components";
import LoadingPage from "./components/LoadingPage";
import { SecurityTIps } from "./components/SecurityTIps";
import { Footer } from "./components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);

  return isLoading ? (
    <LoadingPage />
  ) : (
    <div className="App">
      <Header />
      <main>
        <Form />
      </main>
      <Footer />
    </div>
  );
}

export default App;
