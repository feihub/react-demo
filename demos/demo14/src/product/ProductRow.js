export default function ProductRow(props) {
    const stocked = props.stocked;
  
    return (
      <tr>
        <td style={{ color: stocked ? "black" : "red" }}>{props.name}</td>
        <td>{props.price}</td>
      </tr>
    );
  }
  