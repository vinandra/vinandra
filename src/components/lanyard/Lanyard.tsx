import { Status } from "./Status";

export async function Lanyard() {
  const lanyardPromise = await fetch("https://api.lanyard.rest/v1/users/535247725562691626");
  const lanyardData = await lanyardPromise.json();

  return <Status className="mt-6" initialData={lanyardData.data} />;
}
