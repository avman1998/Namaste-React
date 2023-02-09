import { useRouteError } from "react-router-dom";
export default function ErrorPage() {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <h1>{err.status}!</h1>
      <h3>{err.statusText}</h3>
      <h1>Opps.. You are at wrong place.</h1>
    </>
  );
}
