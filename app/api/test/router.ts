import { NextResponse } from "next/server";

export function GET(req: Request) {
  return NextResponse.json({ hello: "hello, world!" });
}
