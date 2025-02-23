'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Signup() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const data = await response.json();
                setError(data.error || '登録に失敗しました。');
                return;
            }

            router.push('/');
        }catch (error) {
            setError('エラーが発生しました。');
        }
    };

    return (
        <div>
            <h1>ユーザー登録</h1>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="">メールアドレス</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="">パスワード</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />

                <button type="submit">登録</button>
            </form>
        </div>
    );
}