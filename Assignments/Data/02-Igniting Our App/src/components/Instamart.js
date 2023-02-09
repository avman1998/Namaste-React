import { React, useState } from "react";
function Section({ title, description, isVisible, setIsVisible }) {
  // const [isVisible, setVisible] = useState(true);

  return (
    <div className="border-black border-2 p-[5px] m-[5px]">
      <h2>{title}</h2>
      {isVisible ? (
        <button
          onClick={() => setIsVisible()}
          className="p-[2px] bg-gray-400 rounded "
        >
          Hide
        </button>
      ) : (
        <button
          onClick={() => setIsVisible()}
          className="p-[2px] bg-gray-400 rounded "
        >
          {}
          Show
        </button>
      )}
      {isVisible && <p>{description}</p>}
    </div>
  );
}
export default function Instamart() {
  const [page, setPage] = useState("");
  return (
    <div>
      <h1 className="text-[120%] font-bold">Instamart</h1>
      <Section
        title="About"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        isVisible={page === "about"}
        setIsVisible={() => (page === "about" ? setPage("") : setPage("about"))}
      />
      <Section
        title="Team"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        isVisible={page === "team"}
        setIsVisible={() => (page === "team" ? setPage("") : setPage("team"))}
      />
      <Section
        title="Career"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        isVisible={page === "career"}
        setIsVisible={() =>
          page === "career" ? setPage("") : setPage("career")
        }
      />
    </div>
  );
}
