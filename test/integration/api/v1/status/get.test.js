describe('V1 -> Api Status', () => {
  test('[GET] /api/v1/status should return 200', async () => {

    const response = await fetch('http://localhost:3000/api/v1/status');

    expect(response.status).toBe(200)
    const responseBody = await response.json();
    const updateAtParsed = new Date(responseBody.update_at).toISOString()
    expect(responseBody.update_at).toBe(updateAtParsed)
    expect(responseBody.dependencies.database.max_connections).toBe(32767)
    expect(responseBody.dependencies.database.version).toBe('16')
  })
})
