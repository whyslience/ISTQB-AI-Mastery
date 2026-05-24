import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { z } from "zod";

const passwordSchema = z.object({
  password: z.string().min(6, "Mật khẩu phải chứa ít nhất 6 ký tự · Password must be at least 6 characters"),
});

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user || !session.user.email) {
      return NextResponse.json({ error: "Yêu cầu đăng nhập · Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const parseResult = passwordSchema.safeParse(body);
    if (!parseResult.success) {
      return NextResponse.json({ error: parseResult.error.issues[0].message }, { status: 400 });
    }

    const { password } = parseResult.data;

    // Find active user
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json({ error: "Học viên không tồn tại · User not found" }, { status: 404 });
    }

    // Hash password with bcrypt
    const passwordHash = await bcrypt.hash(password, 10);

    // Save hash in database
    await prisma.user.update({
      where: { email: session.user.email },
      data: { passwordHash },
    });

    return NextResponse.json({ success: true, message: "Mật khẩu đã được thiết lập thành công · Password set successfully" });
  } catch (error) {
    console.error("[/api/auth/set-password]", error);
    return NextResponse.json({ error: "Lỗi hệ thống · Internal server error" }, { status: 500 });
  }
}
