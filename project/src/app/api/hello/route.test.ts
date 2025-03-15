/**
 * @jest-environment node
 */

import { GET } from './route';

describe('GET /api/hello', () => {
  it('should return 200 with correct message', async () => {
    const response = await GET();

    expect(response.status).toBe(200);

    const data = await response.json();
    expect(data).toEqual({ message: 'Hello World' });
  });
});
