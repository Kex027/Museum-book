const ContextLeft = ({
  page: {
    fields: { heading, description },
  },
}) => {
  return (
    <>
      <div style={{ height: "48%" }}>
        <h2
          style={{
            color: "#0f0",
            fontSize: "10vh",
            lineHeight: "10vh",
            wordBreak: "break-all",
            fontWeight: "bold",
          }}
        >
          {heading}
        </h2>
      </div>
      <div
        style={{
          fontSize: "1.45vh",
        }}
      >
        {description?.content.map(({ content }) => (
          <span
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
