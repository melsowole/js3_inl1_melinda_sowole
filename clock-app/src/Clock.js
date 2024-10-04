export default function Clock(props) {
  const { time } = props;

  return <p>{time.toLocaleTimeString()}</p>;
}
