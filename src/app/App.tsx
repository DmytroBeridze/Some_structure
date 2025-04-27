import { RouterProvider } from "react-router-dom";
import { Container } from "../shared/ui/atoms/Container";
import { router } from "./Routing/router";
function App() {
  return (
    <div className="App">
      <Container>
        <RouterProvider router={router} />
      </Container>
    </div>
  );
}

export default App;
