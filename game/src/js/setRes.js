export default body => fetch('/res', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: body
});