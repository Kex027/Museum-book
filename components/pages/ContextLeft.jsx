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
            wordBreak: "break-all",
            fontWeight: "bold",
            opacity: "60%",
          }}
        >
          CON&shy;TEXT
        </h2>
      </div>
      <div
        style={{
          fontSize: "calc(1.3 * var(--vh))",
          padding: "8% 0 8% 4%",
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
