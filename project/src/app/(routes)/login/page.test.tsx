// 未検証

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Login from './page';
// import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

jest.mock('next-auth/react', () => ({
  signIn: jest.fn(),
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('Login', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it.skip('認証成功時にトップページへリダイレクトする', async () => {
    const mockPush = jest.fn();
    (signIn as jest.Mock).mockResolvedValue({ error: null });
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });

    render(<Login />);
    fireEvent.change(screen.getByLabelText('メールアドレス'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText('パスワード'), { target: { value: 'password' } });
    fireEvent.submit(screen.getByRole('button', { name: 'ログイン' }));

    expect(signIn).toHaveBeenCalledWith('credentials', {
      email: 'test@example.com',
      password: 'password',
      redirect: false,
    });

    await waitFor(() => { expect(mockPush).toHaveBeenCalledWith('/'); });

  });


});