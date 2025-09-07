import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";

const Tech = () => {
  const extraTechs = [
    ". HTML",
    ". CSS",
    ". JavaScript",
    ". React.js",
    ". Node.js",
    ". Express.js",
    ". MongoDB",
    ". Bootstrap",
    ". TailwindCSS",
    ". Git / GitHub",
    ". N8N",
    ". Redux",
    ". Socket.IO",
    ". Vercel",
    ". Figma",
    ". Three.js",
  ];

  return (
    <>
      {/* Title */}
      <div
        style={{
          marginLeft: "40%",
          fontWeight: "bold",
          color: "white",
          fontFamily: "cursive",
          fontSize: "1.9rem",
          textDecoration: "underline",
        }}
      >
        WEB Technologies
      </div>

      {/* Ball Canvas Icons */}
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-6">
        {technologies.map((technology) => (
          <div className="h-28 w-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>

      {/* White Box Section */}
      <div
        style={{
          background: "white",
          borderRadius: "16px",
          padding: "20px",
          margin: "40px auto",
          maxWidth: "600px",
          fontFamily: "cursive",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        }}
      >
        {/* Gradient Title */}
        <h2
          style={{
            fontWeight: "bold",
            fontSize: "1.6rem",
            marginBottom: "15px",
            textAlign: "center",
            fontStyle: "italic",
            background: "linear-gradient(90deg, #4f46e5, #9333ea)", // bluish to purple
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Technology / Thing I Know:
        </h2>

        {/* Tech List */}
        {extraTechs.map((tech, index) => (
          <div key={tech}>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#333",
                textAlign: "center",
                fontWeight: "bold",
                fontStyle: "italic",
                fontVariant: "small-caps",
              }}
            >
              {tech}
            </p>
            {index !== extraTechs.length - 1 && (
              <hr style={{ border: "1px solid black", margin: "8px 0" }} />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
