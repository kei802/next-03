import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // バリデーション
    if (!email || !password) {
      return NextResponse.json({ error: 'Emailとパスワードは必須です。' }, { status: 400 });
    }
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      return NextResponse.json({ error: '登録済みのメールアドレスです。' }, { status: 400});
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // ユーザー登録
    await prisma.user.create({
      data: {
        // email: email,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json({ message: '登録が完了しました。'});
  }catch (error) {
    return NextResponse.json({ error: 'エラーが発生しました。'}, { status: 500});
  }

}


// GETの実装例
// POSTとGETを1ファイルに記述できる
// export async function GET(request: Request) {
//   return NextResponse.json({ message: 'Hello World' });
// }