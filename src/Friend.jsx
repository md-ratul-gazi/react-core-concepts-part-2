import "./Friend.css";
export default function Friend({ friend }) {
    const { name, email } = friend;
  return (
    <div className="box1">
      <h4 style={{ fontSize: "30px" }}>Name: {name}</h4>
      <h5 style={{ fontSize: "22px" }}>Email: {email}</h5>
    </div>
  );
}
