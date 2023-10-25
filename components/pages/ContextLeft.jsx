const ContextLeft = ({
  page: {
    fields: { description },
  },
}) => {
  return (
    <>
      <div style={{ height: "48%" }}>
        <h2
          style={{
            color: "#0f0",
            fontSize: "calc(16 * var(--vh))",
            lineHeight: "calc(13 * var(--vh))",
            whiteSpace: "normal",
            fontWeight: "bold",
            opacity: "60%",
          }}
        >
          CON-
          <br />
          TEXT
        </h2>
      </div>
      <div
        style={{
          lineHeight: "calc(1.35 * var(--vh))",
          fontSize: "calc(1.1 * var(--vh))",
        }}
      >
        {description?.content.map(({ content }, index) => (
          <span
            key={index}
            style={{
              fontWeight: content[0].marks[0],
            }}
          >
            {content[0].value}
            <br />
            <br />
          </span>
        ))}
      </div>
    </>
  );
};

export default ContextLeft;
