export default function CartItem(props) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{props.title}</div>
        {props.description}
      </div>
      <span className="badge bg-primary rounded-pill">14</span>
    </li>
  );
}
