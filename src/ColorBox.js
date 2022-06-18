export function ColorBox({ color }) {
 const styles = {
  backgroundColor: color,
  height: "25px",
  width: "250px",
  
 };

 return <div style={styles}></div>;
}
