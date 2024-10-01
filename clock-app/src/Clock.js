export default function Clock(props) {
  const { time } = props;

  return (
    <p>
      {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}
    </p>
  );
}
