export async function GET() {
  const res = await fetch(`https://ipinfo.io/json?token=${process.env.IPINFO_TOKEN}`);
  const data = await res.json();
  return Response.json(data);
}
