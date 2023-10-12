const ContextRight = ({page: {fields: {heading}}}) => {
  return (
    <>
      <div style={{height: '36%'}}>
        <h2 style={{
          color: 'greenyellow',
          fontSize: '10vh',
          lineHeight: '10vh',
          wordBreak: 'break-all',
        }}>{heading}</h2>
      </div>
      <div style={{
        fontSize: "1.9vh"
      }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, molestiae praesentium! Aut eligendi odit, delectus a repellendus libero accusamus nam in mollitia. Expedita ullam, corrupti illo sapiente, cum ab omnis neque officiis ea a est, eaque voluptatibus fuga explicabo ipsa. Minus cum cumque in rem facere ipsam, blanditiis perspiciatis autem dolor eligendi consequatur voluptas expedita libero, nemo soluta molestiae? Totam, laboriosam reprehenderit. Animi mollitia error quis tempore tempora eos, laborum vitae minus modi aliquam temporibus sit fuga officia non dolorem ratione ducimus ad ut dolore odio rerum inventore perferendis porro obcaecati. At dicta numquam, alias enim minus perferendis illo placeat.
      </div>
    </>
  );
}

export default ContextRight;