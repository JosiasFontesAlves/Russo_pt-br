/**
 * @param {{Russo: string, Português: string, Resposta: string}[]} respostas
 */
export default respostas => fetch('/res', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(respostas, null, 4)
});