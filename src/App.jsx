import { useState } from "react";
import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS, EXAMPLES } from "./data";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <ul>
              <TabButton
                onSelect={() => {
                  handleSelect("components");
                }}
                isSelected={selectedTopic === "components"}
              >
                Components
              </TabButton>
              <TabButton
                onSelect={() => {
                  handleSelect("jsx");
                }}
                isSelected={selectedTopic === "jsx"}
              >
                JSX
              </TabButton>
              <TabButton
                onSelect={() => {
                  handleSelect("props");
                }}
                isSelected={selectedTopic === "props"}
              >
                Props
              </TabButton>
              <TabButton
                onSelect={() => {
                  handleSelect("state");
                }}
                isSelected={selectedTopic === "state"}
              >
                State
              </TabButton>
            </ul>
          </menu>
          {!selectedTopic ? (
            <p>Please select a topic</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default App;
