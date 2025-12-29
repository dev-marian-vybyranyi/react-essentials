import componentsImg from "./assets/components.png";
import CoreConsepts from "./components/CoreConsepts";
import Header from "./components/Header/Header";
import { CORE_CONCEPTS } from "./data";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConsepts
              title="Components"
              description="The core UI building block."
              image={componentsImg}
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
